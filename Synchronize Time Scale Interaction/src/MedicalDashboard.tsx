import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import Ic24Filter from "@/imports/Ic24Filter";
import Ic24FilterSliders from "@/imports/Ic24Filter-1";
import { createPortal } from "react-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, ReferenceLine,
} from "recharts";

// ─── Layout constants ─────────────────────────────────────────────────────────
const LABEL_COL_W      = 170;
const CHART_YAXIS_W    = 28;
const CHART_ML         = 6;
const CHART_MR         = 16;
const CHART_CARD_PL    = 8;
const CHART_SECTION_PY = 10;

// List-mode: offset from section outer-left to Recharts plot-area edge.
// section pad(8) + card pad(8) + margin.left(6) + yAxis(28) = 50
// section pad(8) + card pad(8) + margin.right(16)            = 32
const PLOT_LEFT  = CHART_CARD_PL + CHART_CARD_PL + CHART_ML + CHART_YAXIS_W; // 50
const PLOT_RIGHT = CHART_CARD_PL + CHART_CARD_PL + CHART_MR;                  // 32

// Grid-mode: offset from card outer-left to Recharts plot-area edge.
// card pad(8) + margin.left(6) + yAxis(28) = 42
// card pad(8) + margin.right(16)            = 24
const GRID_PLOT_LEFT  = CHART_CARD_PL + CHART_ML + CHART_YAXIS_W; // 42
const GRID_PLOT_RIGHT = CHART_CARD_PL + CHART_MR;                  // 24

const TABLE_HEADER_H = 30;
const TABLE_ROW_H    = 36;

// ─── Types ────────────────────────────────────────────────────────────────────
type ScaleMode = "1m" | "3m" | "6m" | "1y";
type ViewMode  = "list" | "grid";

interface MeasurementPoint {
  date:    Date;
  skeletal: number;
  fatMass:  number;
  fatPct:   number;
  weight:   number;
  bmi:      number;
  visceral: number;
}

interface Prescription {
  name:       string;
  dose:       string;
  frequency:  number;
  days:       number;
  startDates: Date[];
}

interface ScaleConfig {
  rangeMonths:   number;
  tickEveryDays: number;
  label:         string;
}

interface CrosshairGeom {
  screenX: number;
  top:     number;
  bottom:  number;
}

interface MetricConfig {
  label:    string;
  unit:     string;
  color:    string;
  data:     Array<{ ts: number; value: number }>;
  stdVal:   number;
  panelRef: React.RefObject<HTMLDivElement | null>;
}

// ─── Scale configs ─────────────────────────────────────────────────────────────
const SCALE_CONFIGS: Record<ScaleMode, ScaleConfig> = {
  "1m": { rangeMonths:  1, tickEveryDays:  7, label: "1개월" },
  "3m": { rangeMonths:  3, tickEveryDays: 14, label: "3개월" },
  "6m": { rangeMonths:  6, tickEveryDays: 30, label: "6개월" },
  "1y": { rangeMonths: 12, tickEveryDays: 90, label: "1년"   },
};

// ─── Dense deterministic data (87 weekly measurements) ───────────────────────
// 2025-01-01 → 2026-08-25. Sin-wave variation over downward trends.
// Derived metrics: weight (kg), BMI, 내장지방레벨.
const MEASUREMENTS: MeasurementPoint[] = (() => {
  const origin = new Date(2025, 0, 1).getTime();
  const WEEKS  = 87;
  const SK_START = 25.2, SK_END = 21.9;
  const FM_START = 42.5, FM_END = 25.5;
  const FP_START = 42.5, FP_END = 25.5;
  const result: MeasurementPoint[] = [];
  for (let w = 0; w < WEEKS; w++) {
    const t    = w / (WEEKS - 1);
    const ns   = Math.sin(w * 0.7) * 0.12;
    const nf   = Math.sin(w * 0.5 + 1.2) * 0.35;
    const r    = (v: number) => Math.round(v * 10) / 10;
    const sk   = r(SK_START + (SK_END - SK_START) * t + ns);
    const fm   = r(FM_START + (FM_END - FM_START) * t + nf);
    const fp   = r(FP_START + (FP_END - FP_START) * t + nf * 0.75);
    const wt   = r(sk + fm + 28.0);                  // skeletal + fat + lean remainder
    const bmi  = r(wt / 2.7225);                     // 165 cm height
    const visc = r(8 + 7 * (fp - 25.5) / 17 + Math.sin(w * 0.6) * 0.3);
    result.push({ date: new Date(origin + w * 7 * 86_400_000), skeletal: sk, fatMass: fm, fatPct: fp, weight: wt, bmi, visceral: visc });
  }
  return result;
})();

const DATA_START = MEASUREMENTS[0].date;
const DATA_END   = MEASUREMENTS[MEASUREMENTS.length - 1].date;

const PRESCRIPTIONS: Prescription[] = [
  {
    name: "위고비 2.4mg", dose: "2.4mg", frequency: 1, days: 7,
    startDates: MEASUREMENTS.map(m => m.date),
  },
  {
    name: "체형교정치료", dose: "1회", frequency: 1, days: 14,
    startDates: MEASUREMENTS.filter((_, i) => i % 8 === 0).map(m => m.date),
  },
  {
    name: "지방흡입술", dose: "1회", frequency: 1, days: 1,
    startDates: [MEASUREMENTS[10], MEASUREMENTS[35], MEASUREMENTS[68]].map(m => m.date),
  },
  {
    name: "삭센다펜주 6mg/mL", dose: "6mg/mL", frequency: 1, days: 30,
    startDates: MEASUREMENTS.filter((_, i) => i % 4 === 0).map(m => m.date),
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function cellMode(avgColW: number): "full" | "compact" {
  return avgColW > 50 ? "full" : "compact";
}

function findNearestPoint(
  data: Array<{ ts: number; value: number }>,
  ts:   number,
): { ts: number; value: number } | null {
  if (!data.length) return null;
  return data.reduce((b, p) => Math.abs(p.ts - ts) < Math.abs(b.ts - ts) ? p : b);
}

function computeSignificantIndices(
  visible:      Array<{ ts: number; value: number }>,
  visibleRange: [number, number],
  plotWidth:    number,
  maxCount = 6,
): Set<number> {
  if (!visible.length) return new Set();
  if (visible.length <= maxCount) return new Set(visible.map((_, i) => i));
  if (plotWidth <= 0) return new Set([0, visible.length - 1]);
  const [s, e]  = visibleRange;
  const rms     = e - s;
  const MIN_GAP = 38;
  const result  = new Set<number>();
  const placed: number[] = [];
  function getX(i: number) { return ((visible[i].ts - s) / rms) * plotWidth; }
  function tryAdd(i: number): boolean {
    if (result.has(i)) return true;
    const x = getX(i);
    if (placed.some(px => Math.abs(px - x) < MIN_GAP)) return false;
    result.add(i); placed.push(x); return true;
  }
  tryAdd(visible.length - 1);
  tryAdd(visible.reduce((b, p, i) => p.value > visible[b].value ? i : b, 0));
  tryAdd(visible.reduce((b, p, i) => p.value < visible[b].value ? i : b, 0));
  tryAdd(0);
  const step = Math.max(1, Math.ceil(visible.length / (maxCount * 2)));
  for (let i = step; i < visible.length && result.size < maxCount; i += step) tryAdd(i);
  return result;
}

function computeAllLabels(
  visible:      Array<{ ts: number; value: number }>,
  visibleRange: [number, number],
  plotWidth:    number,
  _maxCount?:   number,
): Set<number> {
  if (!visible.length || plotWidth <= 0) return new Set(visible.map((_, i) => i));
  const [s, e] = visibleRange;
  const rms    = e - s;
  const MIN_GAP = 30;
  const result = new Set<number>();
  const placed: number[] = [];
  for (let i = 0; i < visible.length; i++) {
    const x = ((visible[i].ts - s) / rms) * plotWidth;
    if (!placed.some(px => Math.abs(px - x) < MIN_GAP)) { result.add(i); placed.push(x); }
  }
  return result;
}

// Candidate tick intervals ordered finest → coarsest.
const TICK_INTERVALS_MS = [
  1  * 86_400_000,   // 1 day
  7  * 86_400_000,   // 1 week
  14 * 86_400_000,   // 2 weeks
  30 * 86_400_000,   // ~1 month
  91 * 86_400_000,   // ~1 quarter
  182 * 86_400_000,  // ~6 months
  365 * 86_400_000,  // ~1 year
];

// Returns the smallest interval where ticks would be at least (labelW + minGap) px apart.
function getTickInterval(rangeMs: number, plotW: number, labelW = 26, minGap = 8): number {
  if (plotW <= 0 || rangeMs <= 0) return TICK_INTERVALS_MS[TICK_INTERVALS_MS.length - 1];
  const needed = labelW + minGap;
  for (const ms of TICK_INTERVALS_MS) {
    const count = rangeMs / ms;
    if (count > 0 && plotW / count >= needed) return ms;
  }
  return TICK_INTERVALS_MS[TICK_INTERVALS_MS.length - 1];
}

function fmtLabel(date: Date, scale: ScaleMode): string {
  const mo = date.getMonth() + 1;
  const dy = date.getDate();
  return scale === "1y"
    ? `${date.getFullYear().toString().slice(2)}/${mo}`
    : `${mo}/${dy}`;
}

function fmtFull(date: Date): string {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconList({ active }: { active: boolean }) {
  const c = active ? "#155DFC" : "#6A7282";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3.5"  width="14" height="1.5" rx="0.75" fill={c} />
      <rect x="2" y="8.25" width="14" height="1.5" rx="0.75" fill={c} />
      <rect x="2" y="13"   width="14" height="1.5" rx="0.75" fill={c} />
    </svg>
  );
}

interface CompareMetric {
  data: Array<{ ts: number; value: number }>;
  color: string;
  label: string;
  unit: string;
}

function CompareTooltip({ ts, metrics }: { ts: number; metrics: CompareMetric[] }) {
  return (
    <div className="absolute z-20 pointer-events-none bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg p-[10px] min-w-[150px]">
      <p className="font-bold text-[10px] text-[#1c2029] mb-[6px]">{fmtFull(new Date(ts))}</p>
      {metrics.map(m => {
        const p = findNearestPoint(m.data, ts);
        return <div key={m.label} className="flex items-center justify-between gap-[12px] text-[10px] mb-[3px]">
          <span className="flex items-center gap-[5px] text-[#606776]"><i className="size-[6px] rounded-full" style={{ background: m.color }} />{m.label}</span>
          <b style={{ color: m.color }}>{p?.value}{m.unit}</b>
        </div>;
      })}
    </div>
  );
}

function CompareMainChart({ metrics, visibleRange, crosshairTs, onCrosshairChange }: {
  metrics: CompareMetric[];
  visibleRange: [number, number];
  crosshairTs: number | null;
  onCrosshairChange: (ts: number | null) => void;
}) {
  const normalized = useMemo(() => MEASUREMENTS.map((m, i) => {
    const row: Record<string, number> = { ts: m.date.getTime() };
    metrics.forEach((metric, mi) => { row[`m${mi}`] = metric.data[i].value / metric.data[0].value * 100; });
    return row;
  }).filter(p => p.ts >= visibleRange[0] && p.ts <= visibleRange[1]), [metrics, visibleRange]);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const left = 38, right = 12;
    if (x < left || x > r.width - right) return;
    onCrosshairChange(visibleRange[0] + ((x - left) / (r.width - left - right)) * (visibleRange[1] - visibleRange[0]));
  };
  const tooltipLeft = crosshairTs == null ? 0 : `clamp(8px, calc(${((crosshairTs-visibleRange[0])/(visibleRange[1]-visibleRange[0]))*100}% - 75px), calc(100% - 158px))`;
  return <div className="flex flex-col h-full min-w-0 p-[16px] bg-white" onMouseMove={handleMove} onMouseLeave={() => onCrosshairChange(null)}>
    <div className="mb-[8px]"><p className="text-[14px] font-semibold text-[#364153]">지표 변화 비교</p><p className="text-[11px] text-[#99a1af]">Y축: Index (100 = 기준일)</p></div>
    <div className="relative flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%"><LineChart data={normalized} margin={{ top: 12, right: 12, bottom: 4, left: 0 }}>
        <CartesianGrid stroke="#edf0f3" vertical={false} />
        <XAxis dataKey="ts" type="number" scale="time" domain={visibleRange} tickFormatter={(v:number)=>fmtLabel(new Date(v), "1y")} tick={{fontSize:9,fill:"#9ca3af"}} axisLine={false} tickLine={false} />
        <YAxis domain={[40, 110]} ticks={[40,60,80,100]} width={38} tick={{fontSize:9,fill:"#9ca3af"}} axisLine={false} tickLine={false} />
        <ReferenceLine y={100} stroke="#9ca3af" strokeDasharray="4 3" />
        {crosshairTs != null && <ReferenceLine x={crosshairTs} stroke="#8b92a8" strokeDasharray="4 3" />}
        {metrics.map((m,i)=><Line key={m.label} dataKey={`m${i}`} stroke={m.color} strokeWidth={2} dot={false} isAnimationActive={false} />)}
      </LineChart></ResponsiveContainer>
      {crosshairTs != null && <div style={{ position:"absolute", left:tooltipLeft, top:16 }}><CompareTooltip ts={crosshairTs} metrics={metrics} /></div>}
    </div>
    <div className="flex flex-wrap justify-center gap-x-[12px] gap-y-[4px] pt-[6px]">
      {metrics.map(m=><span key={m.label} className="flex items-center gap-[4px] text-[10px] text-[#4a5565]"><i className="w-[24px] border-t-2" style={{borderColor:m.color}} />{m.label}</span>)}
    </div>
  </div>;
}

function MiniTrendCard({ metric, crosshairTs }: { metric: CompareMetric; crosshairTs: number | null }) {
  const p = crosshairTs == null ? null : findNearestPoint(metric.data, crosshairTs);
  const values = metric.data.map(d=>d.value), lo=Math.min(...values), hi=Math.max(...values);
  return <div className="relative bg-white border-b border-[#f3f4f6] px-[12px] py-[7px] h-[112px] overflow-visible">
    <div className="flex items-center gap-[6px] text-[11px] font-semibold text-[#364153]"><i className="size-[8px] rounded-full" style={{background:metric.color}} />{metric.label}<span className="text-[#99a1af] font-normal">({metric.unit})</span></div>
    <ResponsiveContainer width="100%" height={78}><LineChart data={metric.data} margin={{top:8,right:4,bottom:0,left:0}}>
      <XAxis dataKey="ts" type="number" domain={[DATA_START.getTime(),DATA_END.getTime()]} hide />
      <YAxis domain={[lo,hi]} hide />
      <CartesianGrid stroke="#f0f1f3" vertical={false} />
      {crosshairTs != null && <ReferenceLine x={crosshairTs} stroke="#8b92a8" strokeDasharray="4 3" />}
      <Line dataKey="value" stroke={metric.color} strokeWidth={1.5} dot={false} isAnimationActive={false} />
    </LineChart></ResponsiveContainer>
    {p && <div className="absolute right-[8px] top-[7px] bg-white border border-[#e5e7eb] rounded px-[5px] py-[2px] shadow text-[9px] font-bold" style={{color:metric.color}}>{p.value}{metric.unit}</div>}
  </div>;
}

// Active color matches the imported design's active grid icon (#155DFC blue)
function IconGrid({ active }: { active: boolean }) {
  const c = active ? "#155DFC" : "#6A7282";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2"  y="2"  width="6" height="6" rx="1" fill={c} />
      <rect x="10" y="2"  width="6" height="6" rx="1" fill={c} />
      <rect x="2"  y="10" width="6" height="6" rx="1" fill={c} />
      <rect x="10" y="10" width="6" height="6" rx="1" fill={c} />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="2.5" width="12" height="10" rx="1.5" stroke="#9ea2ae" strokeWidth="1.2" />
      <path d="M4 1v3M10 1v3" stroke="#9ea2ae" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M1 6h12" stroke="#9ea2ae" strokeWidth="1.2" />
    </svg>
  );
}

function IconFilter() {
  return (
    <div className="w-[16px] h-[16px] shrink-0">
      <Ic24Filter />
    </div>
  );
}

function IconSettings() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="#9ea2ae" strokeWidth="1.3" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.41 1.41M11.37 11.37l1.41 1.41M3.22 12.78l1.41-1.41M11.37 4.63l1.41-1.41"
            stroke="#9ea2ae" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M4.5 3.5L1.5 7l3 3.5M9.5 3.5L12.5 7l-3 3.5M8 2.5l-2 9"
            stroke="#9ea2ae" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── ChartPanel (list view) ───────────────────────────────────────────────────

interface ChartPanelProps {
  data:               Array<{ ts: number; value: number }>;
  color:              string;
  label:              string;
  unit:               string;
  stdVal:             number;
  scale:              ScaleMode;
  visibleRange:       [number, number];
  crosshairTs:        number | null;
  hasBand?:           boolean;
  bandTop?:           string;
  bandBot?:           string;
  yMin:               number;
  yMax:               number;
  significantIndices: Set<number>;
  panelRef:           React.RefObject<HTMLDivElement | null>;
  onMouseEnter:       () => void;
}

function ChartPanel({
  data, color, label, unit,
  scale, visibleRange, crosshairTs,
  hasBand, bandTop, bandBot, yMin, yMax,
  significantIndices, panelRef, onMouseEnter,
}: ChartPanelProps) {
  const visible = data.filter(p => p.ts >= visibleRange[0] && p.ts <= visibleRange[1]);
  const tickEveryMs = SCALE_CONFIGS[scale].tickEveryDays * 86_400_000;
  const ticks: number[] = [];
  let t = visibleRange[0];
  while (t <= visibleRange[1]) { ticks.push(t); t += tickEveryMs; }
  const midY = Math.round(((yMin + yMax) / 2) * 10) / 10;

  return (
    <div
      ref={panelRef as React.RefObject<HTMLDivElement>}
      className="bg-white border border-[#f2f2f3] rounded-[12px] relative"
      style={{ padding: `10px ${CHART_CARD_PL}px 6px`, overflow: "visible" }}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex items-center gap-[8px] pl-[6px] mb-[2px]">
        <div className="rounded-full shrink-0 size-[8px]" style={{ background: color }} />
        <span className="font-bold text-[13px] text-[#364153] tracking-[-0.65px]">{label}</span>
        <span className="text-[11px] text-[#99a1af] tracking-[-0.55px]">({unit})</span>
      </div>

      {hasBand && bandTop && bandBot && (
        <div className="absolute pointer-events-none"
             style={{ left: PLOT_LEFT, right: PLOT_RIGHT, top: 32, height: 104 }}>
          <div className="absolute inset-x-0 top-0 h-1/2" style={{ background: bandTop }} />
          <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: bandBot }} />
        </div>
      )}

      <ResponsiveContainer width="100%" height={104}>
        <LineChart data={visible} margin={{ top: 20, right: CHART_MR, bottom: 0, left: CHART_ML }}>
          <CartesianGrid stroke="#F0F0F0" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="ts" type="number" domain={visibleRange} ticks={ticks}
                 tick={false} axisLine={false} tickLine={false} height={0} scale="time" />
          <YAxis domain={[yMin, yMax]} ticks={[yMax, midY, yMin]}
                 tick={{ fontSize: 9, fill: "#9ea2ae", fontFamily: "Inter,sans-serif" }}
                 tickLine={false} axisLine={false} width={CHART_YAXIS_W} />
          {crosshairTs != null && (
            <ReferenceLine x={crosshairTs} stroke="#8b92a8" strokeDasharray="4 3" strokeWidth={1} />
          )}
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={1.8} connectNulls
                isAnimationActive={false}
                dot={(props: { cx?: number; cy?: number; index?: number }) => {
                  const cx = props.cx ?? 0;
                  const cy = props.cy ?? 0;
                  const idx = props.index ?? 0;
                  const val = visible[idx]?.value;
                  const showLabel = significantIndices.has(idx);
                  return (
                    <g key={idx}>
                      {visible.length === 1 ? (
                        <>
                          <circle cx={cx} cy={cy} r={9} fill={color} fillOpacity={0.12} />
                          <circle cx={cx} cy={cy} r={5} fill={color} fillOpacity={0.22} />
                          <circle cx={cx} cy={cy} r={3} fill={color} stroke="white" strokeWidth={1.5} />
                        </>
                      ) : (
                        <circle cx={cx} cy={cy} r={2.5} fill={color} stroke="white" strokeWidth={1.2} />
                      )}
                      {showLabel && val != null && (
                        <text x={cx} y={cy - 8} textAnchor="middle" fontSize={8.5}
                              fill="#404656" fontWeight="600" fontFamily="Inter,sans-serif"
                              style={{ userSelect: "none", pointerEvents: "none" }}>
                          {val}
                        </text>
                      )}
                    </g>
                  );
                }}
                activeDot={{ r: 4.5, fill: color, stroke: "white", strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── GridChartCard (grid view) ────────────────────────────────────────────────
// Each card is independent: has its own X-axis labels and an inline tooltip.
// Hover on any card sets the shared crosshairTs → all 6 cards render ReferenceLine
// at the same date (logical date-based synchronization, not physical pixel alignment).

interface GridChartCardProps {
  data:         Array<{ ts: number; value: number }>;
  color:        string;
  label:        string;
  unit:         string;
  stdVal:       number;
  scale:        ScaleMode;
  visibleRange: [number, number];
  crosshairTs:  number | null;
  yMin:         number;
  yMax:         number;
  isActive:     boolean;
  onCrosshairChange: (ts: number | null) => void;
  onFocus:      () => void;
}

function GridChartCard({
  data, color, label, unit, stdVal,
  scale, visibleRange, crosshairTs, yMin, yMax,
  isActive, onCrosshairChange, onFocus,
}: GridChartCardProps) {
  const visible = useMemo(
    () => data.filter(p => p.ts >= visibleRange[0] && p.ts <= visibleRange[1]),
    [data, visibleRange],
  );

  // Callback ref — size-1 deps, measures card width for tick computation + tooltip positioning.
  const [cardEl, setCardEl] = useState<HTMLDivElement | null>(null);
  const cardRef = useCallback((el: HTMLDivElement | null) => setCardEl(el), []);
  const [cardW, setCardW] = useState(320);
  useEffect(() => {
    if (!cardEl) return;
    setCardW(cardEl.clientWidth);
    const ro = new ResizeObserver(() => setCardW(cardEl.clientWidth));
    ro.observe(cardEl);
    return () => ro.disconnect();
  }, [cardEl]);

  // Dynamic ticks — skip until no label overlap, guarantee endpoints.
  const ticks = useMemo(() => {
    const [rs, re] = visibleRange;
    const rangeMs  = re - rs;
    const plotW    = Math.max(0, cardW - GRID_PLOT_LEFT - GRID_PLOT_RIGHT);
    const interval = getTickInterval(rangeMs, plotW);
    const halfInt  = interval / 2;
    const raw: number[] = [];
    const start = Math.ceil(rs / interval) * interval;
    for (let t = start; t <= re; t += interval) raw.push(t);
    const interior = raw.filter(t => Math.abs(t - rs) >= halfInt && Math.abs(t - re) >= halfInt);
    return [rs, ...interior, re];
  }, [cardW, visibleRange]);

  const midY = Math.round(((yMin + yMax) / 2) * 10) / 10;

  const hoverPoint = useMemo(
    () => crosshairTs != null ? findNearestPoint(visible, crosshairTs) : null,
    [crosshairTs, visible],
  );

  // Compute portal tooltip screen position from crosshairTs + card geometry.
  // getBoundingClientRect() is called during render — read-only, safe for 6 cards.
  const TOOLTIP_W = 164;
  const tooltipPortalProps = (() => {
    if (crosshairTs == null || !hoverPoint || !cardEl) return null;
    const rect   = cardEl.getBoundingClientRect();
    const [rs, re] = visibleRange;
    const plotW  = Math.max(0, cardW - GRID_PLOT_LEFT - GRID_PLOT_RIGHT);
    const pct    = re > rs ? Math.max(0, Math.min(1, (crosshairTs - rs) / (re - rs))) : 0;
    const screenX = rect.left + GRID_PLOT_LEFT + pct * plotW;
    const toRight = screenX + 22 + TOOLTIP_W <= window.innerWidth - 8;
    const left    = toRight ? screenX + 22 : screenX - TOOLTIP_W - 22;
    let   top     = rect.top + rect.height / 2 - 52;
    top = Math.max(8, Math.min(top, window.innerHeight - 130));
    return { left, top };
  })();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX  = e.clientX - rect.left;
    const plotStart = GRID_PLOT_LEFT;
    const plotEnd   = rect.width - GRID_PLOT_RIGHT;
    const pw        = plotEnd - plotStart;
    if (relX < plotStart || relX > plotEnd || pw <= 0) return;
    const pct = (relX - plotStart) / pw;
    onCrosshairChange(visibleRange[0] + pct * (visibleRange[1] - visibleRange[0]));
  }, [visibleRange, onCrosshairChange]);

  return (
    <>
      <div
        ref={cardRef}
        className="bg-white border border-[#f2f2f3] rounded-[12px] relative"
        style={{ padding: `10px ${CHART_CARD_PL}px 6px`, overflow: "visible" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={onFocus}
      >
        {/* Header — shows live value when hovered */}
        <div className="flex items-center gap-[8px] pl-[6px] mb-[2px]">
          <div className="rounded-full shrink-0 size-[8px]" style={{ background: color }} />
          <span className="font-bold text-[13px] text-[#364153] tracking-[-0.65px]">{label}</span>
          <span className="text-[11px] text-[#99a1af] tracking-[-0.55px]">({unit})</span>
          {hoverPoint && (
            <span className="ml-auto font-bold text-[12px] tracking-[-0.6px]" style={{ color }}>
              {hoverPoint.value}
              <span className="text-[10px] font-normal text-[#9ea2ae] ml-[1px]">{unit}</span>
            </span>
          )}
        </div>

        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={visible} margin={{ top: 16, right: CHART_MR, bottom: 0, left: CHART_ML }}>
            <CartesianGrid stroke="#F0F0F0" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="ts" type="number"
              domain={visibleRange} ticks={ticks}
              tickFormatter={(v: number) => fmtLabel(new Date(v), scale)}
              tick={{ fontSize: 8, fill: "#9ea2ae", fontFamily: "Inter,sans-serif" }}
              axisLine={false} tickLine={false} height={18} scale="time"
            />
            <YAxis domain={[yMin, yMax]} ticks={[yMax, midY, yMin]}
                   tick={{ fontSize: 9, fill: "#9ea2ae", fontFamily: "Inter,sans-serif" }}
                   tickLine={false} axisLine={false} width={CHART_YAXIS_W} />

            {/* Crosshair: gray dashed to match list-view style */}
            {crosshairTs != null && (
              <ReferenceLine x={crosshairTs} stroke="#8b92a8"
                             strokeDasharray="4 3" strokeWidth={1} opacity={0.55} />
            )}

            <Line type="monotone" dataKey="value" stroke={color} strokeWidth={1.8} connectNulls
                  isAnimationActive={false}
                  dot={(props: { cx?: number; cy?: number; index?: number }) => {
                    const cx = props.cx ?? 0;
                    const cy = props.cy ?? 0;
                    const i  = props.index ?? 0;
                    const isHover = hoverPoint != null && visible[i]?.ts === hoverPoint.ts;
                    if (isHover) {
                      return <circle key={i} cx={cx} cy={cy} r={4.5} fill={color} stroke="white" strokeWidth={2} />;
                    }
                    return <circle key={i} cx={cx} cy={cy} r={2.5} fill={color} stroke="white" strokeWidth={1.2} />;
                  }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Portal tooltip — escapes card overflow/z-index stack entirely.
          Active card: prominent border + stronger shadow + higher z-index (10010).
          Non-active cards: subtle styling, z-index 10000 + card order. */}
      {tooltipPortalProps && createPortal(
        <div style={{
          position: "fixed",
          left:     tooltipPortalProps.left,
          top:      tooltipPortalProps.top,
          zIndex:   isActive ? 10010 : 10000,
          pointerEvents: "none",
        }}>
          <div style={{
            background:   "white",
            border:       `1px solid ${isActive ? color + "55" : "#e8e9ec"}`,
            borderRadius: 8,
            boxShadow:    isActive
              ? "0 6px 24px rgba(0,0,0,0.14)"
              : "0 3px 14px rgba(0,0,0,0.09)",
            padding:  "10px 12px",
            minWidth: TOOLTIP_W,
          }}>
            <div style={{ fontWeight: "bold", fontSize: 11, color: "#1c2029", marginBottom: 6, letterSpacing: "-0.3px" }}>
              {fmtFull(new Date(hoverPoint!.ts))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: color, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#606776", fontWeight: 500 }}>{label}</span>
            </div>
            {([
              ["결과값", `${hoverPoint!.value}${unit}`, color],
              ["표준치", `${stdVal}${unit}`,            "#364153"],
            ] as [string, string, string][]).map(([lbl, val, col]) => (
              <div key={lbl} style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 10.5, marginBottom: 2 }}>
                <span style={{ color: "#9ea2ae" }}>{lbl}</span>
                <span style={{ fontWeight: 600, color: col }}>{val}</span>
              </div>
            ))}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

// ─── Prescription Table ───────────────────────────────────────────────────────
// Layout: frozen label column (left) + single horizontally-scrollable data area (right).
// Both the header-date row and all prescription rows share the same scroll container,
// so they always scroll in sync.
//
// effectivePlotW = max(naturalPlotW, nCols * MIN_COL_W)
// When effectivePlotW > naturalPlotW the inner div overflows → horizontal scroll appears.
// Columns are never allowed to shrink below MIN_COL_W (16px).
// First and last date labels are always shown regardless of column width.

const MIN_COL_W = 16; // px — minimum cell width before horizontal scroll kicks in

function PrescriptionTable({
  prescriptions, visibleMeasurements, visibleRange, chartsAreaW, crosshairTs, scale,
}: {
  prescriptions:       Prescription[];
  visibleMeasurements: MeasurementPoint[];
  visibleRange:        [number, number];
  chartsAreaW:         number;
  crosshairTs:         number | null;
  scale:               ScaleMode;
}) {
  const [rangeStart, rangeEnd] = visibleRange;
  const rangeMs = rangeEnd - rangeStart;
  const naturalPlotW = Math.max(0, chartsAreaW - PLOT_LEFT - PLOT_RIGHT);

  // Expand plot width so each column is at least MIN_COL_W wide.
  const nCols = visibleMeasurements.length;
  const effectivePlotW = Math.max(naturalPlotW, nCols * MIN_COL_W);
  // Total width of the scrollable inner div (PLOT_LEFT left-pad + columns + PLOT_RIGHT right-pad).
  const scrollW = PLOT_LEFT + effectivePlotW + PLOT_RIGHT;

  const cols = useMemo(() => {
    if (!nCols || effectivePlotW <= 0) return [];
    const centers = visibleMeasurements.map(m => ({
      ts:     m.date.getTime(),
      center: PLOT_LEFT + ((m.date.getTime() - rangeStart) / rangeMs) * effectivePlotW,
    }));
    return centers.map((c, i) => {
      const prevC = i > 0             ? centers[i - 1].center : PLOT_LEFT;
      const nextC = i < nCols - 1     ? centers[i + 1].center : PLOT_LEFT + effectivePlotW;
      const left  = i === 0           ? PLOT_LEFT              : (prevC + c.center) / 2;
      const right = i === nCols - 1   ? PLOT_LEFT + effectivePlotW : (c.center + nextC) / 2;
      return { ts: c.ts, center: c.center, left, width: Math.max(right - left, MIN_COL_W) };
    });
  }, [visibleMeasurements, rangeStart, rangeMs, effectivePlotW, nCols]);

  const nearestIdx = useMemo((): number => {
    if (crosshairTs == null || !cols.length) return -1;
    return cols.reduce(
      (best, col, i) => Math.abs(col.ts - crosshairTs!) < Math.abs(cols[best].ts - crosshairTs!) ? i : best,
      0,
    );
  }, [crosshairTs, cols]);

  const avgColW = nCols ? effectivePlotW / nCols : 0;
  const mode    = cellMode(avgColW);
  const todayTs = DATA_END.getTime();

  // ── Synchronized visible-column set ──────────────────────────────────────────
  // Both the date header and prescription data rows read from this single set,
  // so a column is always shown or skipped as one unit (date + prescription).
  //
  // Algorithm: greedy left-to-right. Endpoints are unconditionally included.
  // Middle columns are added when the center-to-center gap from the last included
  // column AND the gap to the right endpoint are both >= minSpacing, preventing
  // any overlap for either the date label or the prescription text.
  //
  // minSpacing = max(dateTextW, prescriptionTextW) + gap (8 px).
  //   full mode:    prescription "1|1|30" ≈ 44 px → minSpacing 52 px
  //   compact mode: date label "25/8"    ≈ 26 px → minSpacing 34 px
  const visibleColIndices = useMemo((): Set<number> => {
    const result = new Set<number>();
    if (!cols.length) return result;

    // Endpoints always forced in (rule 2).
    result.add(0);
    if (cols.length > 1) result.add(cols.length - 1);
    if (cols.length <= 2) return result;

    const minSpacing = mode === "full" ? 52 : 34;
    const endCenter  = cols[cols.length - 1].center;
    let lastCenter   = cols[0].center;

    for (let i = 1; i < cols.length - 1; i++) {
      const c = cols[i].center;
      if (c - lastCenter >= minSpacing && endCenter - c >= minSpacing) {
        result.add(i);
        lastCenter = c;
      }
    }

    return result;
  }, [cols, mode]);

  // Pre-build per-prescription timestamp Sets for O(1) lookup instead of O(n) .some()
  const doseSets = useMemo(
    () => prescriptions.map(rx => new Set(rx.startDates.map(d => d.getTime()))),
    [prescriptions],
  );

  function hasDose(rxIdx: number, ts: number): boolean {
    return doseSets[rxIdx].has(ts);
  }

  // Renders one cell (absolute-positioned). Always shows the crosshair indicator
  // when hovered; text content is controlled by the caller.
  function ColCell({ col, i, children }: { col: typeof cols[0]; i: number; children?: React.ReactNode }) {
    const isHighlit = i === nearestIdx;
    return (
      <div className="absolute top-0 bottom-0 flex items-center justify-center"
           style={{ left: col.left, width: col.width, background: isHighlit ? "rgba(3,187,140,0.08)" : undefined }}>
        {isHighlit && (
          <div className="absolute inset-y-0 pointer-events-none"
               style={{ left: col.center - col.left - 0.5, width: 1,
                        background: "repeating-linear-gradient(to bottom,#8b92a8 0 4px,transparent 4px 7px)" }} />
        )}
        {children}
      </div>
    );
  }

  return (
    <div className="flex">
      {/* ── Frozen label column ── */}
      <div className="flex-shrink-0 bg-white border-r border-[#f0f0f0]"
           style={{ width: LABEL_COL_W, zIndex: 2 }}>
        <div className="flex items-center gap-[4px] px-[16px] border-b border-[#dfdfdf]"
             style={{ height: TABLE_HEADER_H }}>
          <span className="font-bold text-[13px] text-[#1c2029] tracking-[-0.42px]">처방항목</span>
          <IconFilter />
        </div>
        {prescriptions.map((rx, ri) => (
          <div key={ri} className="flex items-center px-[16px] border-b border-[#f2f2f3]"
               style={{ height: TABLE_ROW_H }}>
            <span className="font-bold text-[12px] text-[#1c2029] tracking-[-0.36px]">{rx.name}</span>
          </div>
        ))}
      </div>

      {/* ── Single scrollable data area — header + all rows share one scroll container ── */}
      <div className="flex-1 overflow-x-auto scrollbar-hide">
        <div style={{ width: scrollW, position: "relative" }}>

          {/* Date header row */}
          <div className="relative border-b border-[#dfdfdf]" style={{ height: TABLE_HEADER_H }}>
            {cols.map((col, i) => {
              const isVisible = visibleColIndices.has(i);
              const isHighlit = i === nearestIdx;
              // Skip DOM node entirely unless we need to render content or a crosshair indicator.
              if (!isVisible && !isHighlit) return null;
              const isToday = Math.abs(col.ts - todayTs) < 4 * 86_400_000;
              return (
                <ColCell key={i} col={col} i={i}>
                  {/* Text shown only for visible columns — never for purely-hovered skipped columns */}
                  {isVisible && (
                    <span className={`text-[9px] tracking-[-0.25px] whitespace-nowrap select-none leading-none ${
                      isToday ? "font-bold text-[#1c2029]" : "font-normal text-[#9ea2ae]"
                    }`}>
                      {isToday ? "오늘" : fmtLabel(new Date(col.ts), scale)}
                    </span>
                  )}
                </ColCell>
              );
            })}
          </div>

          {/* Prescription data rows — synced: only show dose when column is in visibleColIndices */}
          {prescriptions.map((rx, ri) => (
            <div key={ri} className="relative border-b border-[#f2f2f3]" style={{ height: TABLE_ROW_H }}>
              {cols.map((col, i) => {
                const isVisible = visibleColIndices.has(i);
                const isHighlit = i === nearestIdx;
                const active    = hasDose(ri, col.ts);
                // Same gate as header: render only when visible or hovered.
                if (!isVisible && !isHighlit) return null;
                return (
                  <ColCell key={i} col={col} i={i}>
                    {/* Dose content shown only for visible columns (sync with date header) */}
                    {isVisible && active && mode === "full" && (
                      <div className="flex items-center gap-[2px]">
                        <span className="font-bold text-[9px] text-[#404656] tracking-[-0.4px]">1</span>
                        <span className="text-[8px] text-[#d0d3da]">|</span>
                        <span className="font-bold text-[9px] text-[#404656] tracking-[-0.4px]">{rx.frequency}</span>
                        <span className="text-[8px] text-[#d0d3da]">|</span>
                        <span className="font-bold text-[9px] text-[#404656] tracking-[-0.4px]">{rx.days}</span>
                      </div>
                    )}
                    {isVisible && active && mode !== "full" && (
                      <span className="font-bold text-[9px] text-[#404656] tracking-[-0.4px]">1</span>
                    )}
                  </ColCell>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Portal: penetrating crosshair (list view only) ───────────────────────────

function CrosshairPortal({ geom }: { geom: CrosshairGeom | null }) {
  if (!geom) return null;
  return createPortal(
    <div style={{
      position:      "fixed",
      left:          geom.screenX - 0.5,
      top:           geom.top,
      height:        geom.bottom - geom.top,
      width:         1,
      pointerEvents: "none",
      zIndex:        9990,
      background:    "repeating-linear-gradient(to bottom,#8b92a8 0 5px,transparent 5px 9px)",
      opacity:       0.52,
    }} />,
    document.body,
  );
}

// ─── Portal: multi-chart tooltips (list view only) ────────────────────────────

function MultiTooltipPortal({
  ts, metrics, screenX, activeIdx,
}: {
  ts:        number | null;
  metrics:   MetricConfig[];
  screenX:   number;
  activeIdx: number | null;
}) {
  if (ts == null) return null;
  const TOOLTIP_W = 164;
  const TOOLTIP_H = 98;
  const toRight   = screenX + 22 + TOOLTIP_W <= window.innerWidth - 8;
  const left      = toRight ? screenX + 22 : screenX - TOOLTIP_W - 22;

  return createPortal(
    <>
      {metrics.map((m, i) => {
        const el = m.panelRef.current;
        if (!el) return null;
        const rect    = el.getBoundingClientRect();
        const nearest = findNearestPoint(m.data, ts);
        if (!nearest) return null;
        let top = rect.top + (rect.height - TOOLTIP_H) / 2;
        top = Math.max(8, Math.min(top, window.innerHeight - TOOLTIP_H - 8));
        const isActive = i === activeIdx;
        const zIndex   = isActive ? 10003 : 10000 + i;
        return (
          <div key={m.label} style={{ position: "fixed", left, top, zIndex, pointerEvents: "none" }}>
            <div style={{
              background:   "white",
              border:       `1px solid ${isActive ? m.color + "55" : "#e8e9ec"}`,
              borderRadius: 8,
              boxShadow:    isActive ? "0 6px 24px rgba(0,0,0,0.14)" : "0 4px 16px rgba(0,0,0,0.09)",
              padding:      "10px 12px",
              minWidth:     TOOLTIP_W,
            }}>
              <div className="font-bold text-[11px] text-[#1c2029] mb-[6px] tracking-[-0.3px]">{fmtFull(new Date(ts))}</div>
              <div className="flex items-center gap-[5px] mb-[5px]">
                <div className="size-[7px] rounded-full shrink-0" style={{ background: m.color }} />
                <span className="text-[11px] text-[#606776] font-medium">{m.label}</span>
              </div>
              <div className="space-y-[2px]">
                {([
                  ["결과값", `${nearest.value}${m.unit}`, m.color],
                  ["표준치", `${m.stdVal}${m.unit}`,     "#364153"],
                ] as [string, string, string][]).map(([lbl, val, col]) => (
                  <div key={lbl} className="flex justify-between gap-[12px] text-[10.5px]">
                    <span className="text-[#9ea2ae]">{lbl}</span>
                    <span className="font-semibold" style={{ color: col }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>,
    document.body,
  );
}

// ─── DevSpecPanel ─────────────────────────────────────────────────────────────

function DevSpecPanel({ onClose }: { onClose: () => void }) {
  const rules = [
    { t: "리스트뷰 좌표 동기화", b: "colCenterX = PLOT_LEFT(50) + ((ts−rangeStart)/rangeMs)×plotW. 차트 점↔테이블 컬럼 물리적 수직 정렬." },
    { t: "카드뷰 논리적 동기화", b: "물리적 수직선 불가 (차트 절반 너비). crosshairTs(날짜값)를 6개 카드 + 테이블이 공유 → 각자 ReferenceLine 독립 렌더링." },
    { t: "스마트 레이블 (1년)", b: "MIN_GAP 38px · 우선순위: 최근>Peak>Trough>첫째>균등분포. 최대 6개." },
    { t: "카드뷰 X축 복구", b: "각 카드가 독립 XAxis(날짜 라벨 포함) 보유. tickFormatter로 scale별 포맷." },
    { t: "처방 셀 모드", b: "avgColW > 50px → full(1|freq|days). ≤50px → compact(1)." },
    { t: "GRID_PLOT constants", b: "GRID_PLOT_LEFT=42 (카드패드8 + ML6 + yAxis28). GRID_PLOT_RIGHT=24 (카드패드8 + MR16)." },
  ];
  return (
    <div className="fixed right-[12px] top-[12px] z-[20000] w-[300px] bg-[#1c2029] text-white rounded-[12px] shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-[14px] py-[10px] border-b border-white/10">
        <span className="font-bold text-[10px] tracking-[0.5px] text-[#c0c4cc] uppercase">Dev Spec</span>
        <button onClick={onClose} className="text-[#9ea2ae] hover:text-white text-[14px] leading-none">×</button>
      </div>
      <div className="p-[14px] space-y-[10px] max-h-[80vh] overflow-y-auto scrollbar-hide">
        {rules.map((r, i) => (
          <div key={i}>
            <p className="font-bold text-[9px] text-[#03bb8c] mb-[2px] tracking-[0.3px] uppercase">{r.t}</p>
            <p className="text-[9px] text-[#9ea2ae] leading-relaxed">{r.b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MedicalDashboard ─────────────────────────────────────────────────────────

export default function MedicalDashboard() {
  const [scale,     setScale]    = useState<ScaleMode>("1y");
  const [viewMode,  setViewMode] = useState<ViewMode>("list");
  const [activeTab, setActiveTab] = useState<"trend" | "compare">("trend");
  const [dateFrom,  setDateFrom] = useState("");
  const [dateTo,    setDateTo]   = useState("");
  const [showSpec,  setShowSpec] = useState(false);

  const [crosshairTs,    setCrosshairTs]    = useState<number | null>(null);
  const [crosshairGeom,  setCrosshairGeom]  = useState<CrosshairGeom | null>(null);
  const [activeChartIdx, setActiveChartIdx] = useState<number | null>(null);

  // Fixed-position refs for synchronous access during mouse events (buildGeom).
  const chartsAreaNode = useRef<HTMLDivElement | null>(null);
  const tableAreaNode  = useRef<HTMLDivElement | null>(null);
  const chart0Ref      = useRef<HTMLDivElement>(null);
  const chart1Ref      = useRef<HTMLDivElement>(null);
  const chart2Ref      = useRef<HTMLDivElement>(null);

  // Callback refs: write to the mutable node ref AND push element into state so
  // the ResizeObserver effects can depend on it with a stable, always-size-1 array.
  // This avoids the "dependency array changed size" error that [] vs [viewMode] caused.
  const [chartsAreaEl, setChartsAreaEl] = useState<HTMLDivElement | null>(null);
  const chartsAreaRef = useCallback((el: HTMLDivElement | null) => {
    chartsAreaNode.current = el;
    setChartsAreaEl(el);
  }, []);

  const [tableAreaEl, setTableAreaEl] = useState<HTMLDivElement | null>(null);
  const tableAreaRef = useCallback((el: HTMLDivElement | null) => {
    tableAreaNode.current = el;
    setTableAreaEl(el);
  }, []);

  // chartsAreaW — width of the charts section (window.width - LABEL_COL_W in list mode).
  const [chartsAreaW, setChartsAreaW] = useState(
    () => Math.max(0, window.innerWidth - LABEL_COL_W),
  );
  useEffect(() => {
    if (!chartsAreaEl) return;
    setChartsAreaW(chartsAreaEl.clientWidth);
    const ro = new ResizeObserver(() => setChartsAreaW(chartsAreaEl.clientWidth));
    ro.observe(chartsAreaEl);
    return () => ro.disconnect();
  }, [chartsAreaEl]); // always exactly 1 dep — never changes size

  // tableAreaW — used by PrescriptionTable; measured from the table container
  // directly so it stays correct in both list and grid modes.
  const [tableAreaW, setTableAreaW] = useState(
    () => Math.max(0, window.innerWidth - LABEL_COL_W),
  );
  useEffect(() => {
    if (!tableAreaEl) return;
    const update = () => setTableAreaW(Math.max(0, tableAreaEl.clientWidth - LABEL_COL_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(tableAreaEl);
    return () => ro.disconnect();
  }, [tableAreaEl]); // always exactly 1 dep — never changes size

  // ── Visible range (right-anchored at DATA_END) ────────────────────────────
  const visibleRange = useMemo((): [number, number] => {
    const { rangeMonths } = SCALE_CONFIGS[scale];
    const endTs   = DATA_END.getTime();
    const startTs = new Date(
      DATA_END.getFullYear(),
      DATA_END.getMonth() - rangeMonths,
      DATA_END.getDate(),
    ).getTime();
    return [Math.max(startTs, DATA_START.getTime()), endTs];
  }, [scale]);

  const visibleMeasurements = useMemo(
    () => MEASUREMENTS.filter(m => m.date.getTime() >= visibleRange[0] && m.date.getTime() <= visibleRange[1]),
    [visibleRange],
  );

  // ── Per-metric data arrays ─────────────────────────────────────────────────
  const skeletalData = useMemo(() => MEASUREMENTS.map(m => ({ ts: m.date.getTime(), value: m.skeletal })), []);
  const fatMassData  = useMemo(() => MEASUREMENTS.map(m => ({ ts: m.date.getTime(), value: m.fatMass  })), []);
  const fatPctData   = useMemo(() => MEASUREMENTS.map(m => ({ ts: m.date.getTime(), value: m.fatPct   })), []);
  const weightData   = useMemo(() => MEASUREMENTS.map(m => ({ ts: m.date.getTime(), value: m.weight   })), []);
  const bmiData      = useMemo(() => MEASUREMENTS.map(m => ({ ts: m.date.getTime(), value: m.bmi      })), []);
  const visceralData = useMemo(() => MEASUREMENTS.map(m => ({ ts: m.date.getTime(), value: m.visceral })), []);

  const skeletalVis = useMemo(() => skeletalData.filter(p => p.ts >= visibleRange[0] && p.ts <= visibleRange[1]), [skeletalData, visibleRange]);
  const fatMassVis  = useMemo(() => fatMassData.filter( p => p.ts >= visibleRange[0] && p.ts <= visibleRange[1]), [fatMassData,  visibleRange]);
  const fatPctVis   = useMemo(() => fatPctData.filter(  p => p.ts >= visibleRange[0] && p.ts <= visibleRange[1]), [fatPctData,   visibleRange]);

  const plotW     = Math.max(0, chartsAreaW - PLOT_LEFT - PLOT_RIGHT);
  const isZoomOut = scale === "1y";

  const sig0 = useMemo(
    () => isZoomOut ? computeSignificantIndices(skeletalVis, visibleRange, plotW, 6) : computeAllLabels(skeletalVis, visibleRange, plotW),
    [skeletalVis, visibleRange, plotW, isZoomOut],
  );
  const sig1 = useMemo(
    () => isZoomOut ? computeSignificantIndices(fatMassVis,  visibleRange, plotW, 6) : computeAllLabels(fatMassVis,  visibleRange, plotW),
    [fatMassVis,  visibleRange, plotW, isZoomOut],
  );
  const sig2 = useMemo(
    () => isZoomOut ? computeSignificantIndices(fatPctVis,   visibleRange, plotW, 6) : computeAllLabels(fatPctVis,   visibleRange, plotW),
    [fatPctVis,   visibleRange, plotW, isZoomOut],
  );

  // ── List-view crosshair ───────────────────────────────────────────────────

  const buildGeom = useCallback((screenX: number): CrosshairGeom | null => {
    const cR = chartsAreaNode.current?.getBoundingClientRect();
    const tR = tableAreaNode.current?.getBoundingClientRect();
    if (!cR || !tR) return null;
    return { screenX, top: cR.top, bottom: tR.bottom };
  }, []);

  const clearCrosshair = useCallback(() => {
    setCrosshairTs(null);
    setCrosshairGeom(null);
    setActiveChartIdx(null);
  }, []);

  const handleChartsMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    if (relX < PLOT_LEFT || relX > rect.width - PLOT_RIGHT) { clearCrosshair(); return; }
    const pct = (relX - PLOT_LEFT) / (rect.width - PLOT_LEFT - PLOT_RIGHT);
    const ts  = visibleRange[0] + pct * (visibleRange[1] - visibleRange[0]);
    setCrosshairTs(ts);
    setCrosshairGeom(buildGeom(e.clientX));
  }, [visibleRange, buildGeom, clearCrosshair]);

  const handleTableMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect   = e.currentTarget.getBoundingClientRect();
    const relX   = e.clientX - rect.left - LABEL_COL_W;
    const availW = rect.width - LABEL_COL_W;
    if (relX < PLOT_LEFT || relX > availW - PLOT_RIGHT) { clearCrosshair(); return; }
    const pct = (relX - PLOT_LEFT) / (availW - PLOT_LEFT - PLOT_RIGHT);
    const ts  = visibleRange[0] + pct * (visibleRange[1] - visibleRange[0]);
    setCrosshairTs(ts);
    setActiveChartIdx(null);
    setCrosshairGeom(buildGeom(e.clientX));
  }, [visibleRange, buildGeom, clearCrosshair]);

  const handleMouseLeave = useCallback(() => clearCrosshair(), [clearCrosshair]);

  // ── Grid-view crosshair (date-based logical sync) ─────────────────────────
  // Tracks which grid card the mouse is directly over (for tooltip z-index priority).
  const [activeGridLabel, setActiveGridLabel] = useState<string | null>(null);

  // Shared callbacks for all GridChartCards.
  const handleGridCrosshairChange = useCallback((ts: number | null) => {
    setCrosshairTs(ts);
    setCrosshairGeom(null);
  }, []);

  const handleGridContainerLeave = useCallback(() => {
    setCrosshairTs(null);
    setActiveGridLabel(null);
  }, []);

  // ── Ctrl+wheel zoom ────────────────────────────────────────────────────────
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const order: ScaleMode[] = ["1m", "3m", "6m", "1y"];
    const i = order.indexOf(scale);
    if (e.deltaY < 0 && i > 0)               setScale(order[i - 1]);
    if (e.deltaY > 0 && i < order.length - 1) setScale(order[i + 1]);
  }, [scale]);

  const scaleBtns: { key: ScaleMode; label: string }[] = [
    { key: "1m", label: "1개월" }, { key: "3m", label: "3개월" },
    { key: "6m", label: "6개월" }, { key: "1y", label: "1년"   },
  ];
  const zoomLabel: Record<ScaleMode, string> = {
    "1m": "100%", "3m": "75%", "6m": "50%", "1y": "25%",
  };

  const metrics: MetricConfig[] = [
    { label: "골격근량", unit: "kg", color: "#03bb8c", data: skeletalData, stdVal: 20, panelRef: chart0Ref },
    { label: "체지방량", unit: "kg", color: "#f97316", data: fatMassData,  stdVal: 24, panelRef: chart1Ref },
    { label: "체지방률", unit: "%",  color: "#ec4899", data: fatPctData,   stdVal: 25, panelRef: chart2Ref },
  ];

  const showListTooltips = activeTab === "trend" && viewMode === "list" && crosshairTs != null && crosshairGeom != null;

  // 6 metrics for grid view — memoized so card identity is stable across renders
  const gridMetrics = useMemo(() => [
    { data: skeletalData, color: "#03bb8c", label: "골격근량",    unit: "kg",  stdVal: 20, yMin: 21.5, yMax: 25.5 },
    { data: fatMassData,  color: "#f97316", label: "체지방량",    unit: "kg",  stdVal: 24, yMin: 25,   yMax: 43   },
    { data: fatPctData,   color: "#ec4899", label: "체지방률",    unit: "%",   stdVal: 25, yMin: 25,   yMax: 43   },
    { data: weightData,   color: "#6366f1", label: "체중",        unit: "kg",  stdVal: 60, yMin: 74,   yMax: 97   },
    { data: bmiData,      color: "#0ea5e9", label: "BMI",         unit: "",    stdVal: 22, yMin: 27,   yMax: 36   },
    { data: visceralData, color: "#ef4444", label: "내장지방레벨", unit: "",    stdVal: 9,  yMin: 5,    yMax: 16   },
  ], [skeletalData, fatMassData, fatPctData, weightData, bmiData, visceralData]);
  const compareMetrics: CompareMetric[] = useMemo(() => [
    { data: weightData,   color: "#3b82f6", label: "체중",         unit: "kg" },
    { data: skeletalData, color: "#22c55e", label: "골격근량",     unit: "kg" },
    { data: fatMassData,  color: "#f97316", label: "체지방량",     unit: "kg" },
    { data: fatPctData,   color: "#ec4899", label: "체지방률",     unit: "%" },
    { data: visceralData, color: "#a855f7", label: "내장지방레벨", unit: "" },
    { data: bmiData,      color: "#06b6d4", label: "BMI",          unit: "" },
  ], [weightData, skeletalData, fatMassData, fatPctData, visceralData, bmiData]);

  return (
    <div
      className="flex flex-col h-full bg-[#f4f5f7] text-[#1c2029] select-none"
      style={{ fontFamily: "'Noto Sans KR','Inter',sans-serif" }}
      onWheel={handleWheel}
    >
      {/* Portals — list view only */}
      {activeTab === "trend" && viewMode === "list" && <CrosshairPortal geom={crosshairGeom} />}
      {showListTooltips && (
        <MultiTooltipPortal
          ts={crosshairTs}
          metrics={metrics}
          screenX={crosshairGeom!.screenX}
          activeIdx={activeChartIdx}
        />
      )}
      {showSpec && <DevSpecPanel onClose={() => setShowSpec(false)} />}

      {/* ── Title bar ── */}
      <div className="flex items-center justify-between px-[20px] h-[36px] bg-[#1c2029] shrink-0">
        <span className="text-[12px] font-medium text-[#c0c4cc] tracking-[-0.2px]">인바디 결과 분석</span>
        <div className="flex items-center gap-[6px]">
          {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => (
            <div key={c} className="w-[10px] h-[10px] rounded-full cursor-pointer hover:brightness-90"
                 style={{ background: c }} />
          ))}
        </div>
      </div>

      {/* ── Patient header ── */}
      <div className="flex items-center justify-between px-[20px] py-[10px] bg-white border-b border-[#e8e9ec] shrink-0">
        <div className="flex items-center gap-[12px]">
          <div className="flex items-center gap-[3px]">
            <span className="font-bold text-[16px]">이요원</span>
            <span className="text-[15px] text-[#404656]">(32세/여)</span>
          </div>
          <div className="w-px h-[16px] bg-[#d8dadf]" />
          <span className="text-[13px] text-[#606776]">cn.57</span>
          <div className="w-px h-[16px] bg-[#d8dadf]" />
          <span className="text-[13px] text-[#606776]">1989.10.04</span>
        </div>
        <button className="px-[12px] py-[5px] border border-[#dfdfdf] rounded-[4px] text-[11px] font-bold text-[#353e58] bg-white hover:bg-[#f5f5f7] transition-colors">
          기본설정 조회
        </button>
      </div>

      {/* ── Control bar ── */}
      <div className="flex items-center justify-between px-[16px] py-[8px] bg-white border-b border-[#e8e9ec] shrink-0 gap-[8px]">
        {/* LEFT */}
        <div className="flex items-center gap-[8px] shrink-0">
          <div className="flex items-center gap-[2px] bg-[#f0f1f3] rounded-[8px] p-[2px]">
            <button onClick={() => { setActiveTab("trend"); clearCrosshair(); }}
              className={`px-[10px] py-[4px] rounded-[6px] text-[12px] font-bold transition-all ${
                activeTab === "trend" ? "bg-white text-[#1c2029] shadow-sm" : "text-[#9ea2ae] hover:text-[#606776]"
              }`}>
              항목별 추이
            </button>
            <button onClick={() => { setActiveTab("compare"); clearCrosshair(); }}
              className={`px-[10px] py-[4px] rounded-[6px] text-[12px] font-bold transition-all ${
                activeTab === "compare" ? "bg-white text-[#1c2029] shadow-sm" : "text-[#9ea2ae] hover:text-[#606776]"
              }`}>
              지표 변화 비교
            </button>
          </div>

          <div className="w-px h-[20px] bg-[#e8e9ec]" />

          <div className="flex items-center gap-[4px]">
            <button
              onClick={() => { const o: ScaleMode[] = ["1m","3m","6m","1y"]; const i = o.indexOf(scale); if (i > 0) setScale(o[i-1]); }}
              disabled={scale === "1m"}
              className={`flex items-center gap-[2px] text-[11px] px-[6px] py-[3px] rounded-[4px] font-medium transition-colors ${
                scale === "1m" ? "text-[#c0c4cc] opacity-35 cursor-not-allowed" : "text-[#606776] hover:text-[#1c2029] hover:bg-[#f0f1f3]"
              }`}>
              <span className="text-[12px] font-bold">+</span>확대
            </button>
            <span className="text-[11px] font-semibold text-[#9ea2ae] min-w-[36px] text-center">{zoomLabel[scale]}</span>
            <button
              onClick={() => { const o: ScaleMode[] = ["1m","3m","6m","1y"]; const i = o.indexOf(scale); if (i < o.length-1) setScale(o[i+1]); }}
              disabled={scale === "1y"}
              className={`flex items-center gap-[2px] text-[11px] px-[6px] py-[3px] rounded-[4px] font-medium transition-colors ${
                scale === "1y" ? "text-[#c0c4cc] opacity-35 cursor-not-allowed" : "text-[#606776] hover:text-[#1c2029] hover:bg-[#f0f1f3]"
              }`}>
              <span className="text-[12px] font-bold">–</span>축소
            </button>
          </div>

          <div className="w-px h-[20px] bg-[#e8e9ec]" />

          <button className="p-[3px] rounded-[4px] hover:bg-[#f0f1f3] transition-colors">
            <div className="w-[22px] h-[22px]">
              <Ic24FilterSliders />
            </div>
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-[8px] shrink-0">
          <div className="flex items-center gap-[2px] bg-[#f0f1f3] rounded-[6px] p-[2px]">
            {scaleBtns.map(({ key, label }) => (
              <button key={key} onClick={() => setScale(key)}
                className={`px-[10px] py-[3px] rounded-[4px] text-[11px] font-bold transition-all ${
                  scale === key ? "bg-white text-[#1c2029] shadow-sm" : "text-[#9ea2ae] hover:text-[#606776]"
                }`}>
                {label}
              </button>
            ))}
          </div>

          <div className="w-px h-[20px] bg-[#e8e9ec]" />

          <div className="flex items-center gap-[5px]">
            {([["dateFrom", dateFrom, setDateFrom], ["dateTo", dateTo, setDateTo]] as const).map(([id, val, set], idx) => (
              <div key={id} className="relative flex items-center gap-[4px]">
                {idx === 1 && <span className="text-[11px] text-[#9ea2ae]">~</span>}
                <div className="relative">
                  <input type="text" value={val} onChange={e => set(e.target.value)} placeholder="yyyy.mm.dd"
                    className="border border-[#dfdfdf] rounded-[4px] pl-[8px] pr-[24px] py-[4px] text-[11px] text-[#404656] w-[94px] outline-none focus:border-[#03bb8c] transition-colors" />
                  <span className="absolute right-[6px] top-1/2 -translate-y-1/2 pointer-events-none"><IconCalendar /></span>
                </div>
              </div>
            ))}
            <button className="px-[12px] py-[4px] border border-[#dfdfdf] rounded-[4px] text-[11px] font-bold text-[#353e58] bg-white hover:bg-[#f5f5f7] transition-colors shrink-0">조회</button>
          </div>

          <div className="w-px h-[20px] bg-[#e8e9ec]" />

          {/* View toggle — grid icon active = #155DFC blue (matches imported design) */}
          <div className={`flex items-center gap-[2px] bg-[#f0f1f3] rounded-[6px] p-[2px] transition-opacity ${activeTab === "compare" ? "opacity-30" : ""}`}>
            <button disabled={activeTab === "compare"} onClick={() => setViewMode("list")} title="리스트형"
              className={`p-[4px] rounded-[4px] transition-all ${viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-white/60"}`}>
              <IconList active={viewMode === "list"} />
            </button>
            <button disabled={activeTab === "compare"} onClick={() => setViewMode("grid")} title="카드형"
              className={`p-[4px] rounded-[4px] transition-all ${viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-white/60"}`}>
              <IconGrid active={viewMode === "grid"} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* ════════════════════════════════════════ LIST VIEW ════════════════════════════════════════ */}
        {activeTab === "trend" && viewMode === "list" && (
          <div className="flex flex-col flex-1 overflow-hidden min-h-0">
            {/* ── Top section: sidebar + charts (row) ── */}
            {/* Sidebar height is bounded to this row only, not the table */}
            <div className="flex flex-1 overflow-hidden min-h-0">
              {/* Sidebar */}
              <div className="flex flex-col items-center justify-center bg-[#f8f8f9] shrink-0 border-r border-[#e8e9ec] text-center px-[16px] gap-[6px]"
                   style={{ width: LABEL_COL_W }}>
                <p className="font-bold text-[13px] text-[#1c2029] tracking-[-0.42px]">측정지표 추이</p>
                <p className="text-[10px] text-[#a1a1a1] tracking-[-0.3px] leading-snug">각 지표별 절대 값</p>
              </div>

              {/* Charts — fills remaining width */}
              <div ref={chartsAreaRef} className="flex-1 overflow-y-auto overflow-x-hidden">
                <div className="relative min-w-0 bg-[#f5f6f8]"
                     style={{ padding: `${CHART_SECTION_PY}px ${CHART_CARD_PL}px` }}
                     onMouseMove={handleChartsMouseMove}
                     onMouseLeave={handleMouseLeave}>
                  <div className="flex flex-col gap-[10px]">
                    <ChartPanel data={skeletalData} color="#03bb8c" label="골격근량" unit="kg" stdVal={20}
                      scale={scale} visibleRange={visibleRange} crosshairTs={crosshairTs}
                      yMin={21.5} yMax={25.5} significantIndices={sig0}
                      panelRef={chart0Ref} onMouseEnter={() => setActiveChartIdx(0)} />
                    <ChartPanel data={fatMassData} color="#f97316" label="체지방량" unit="kg" stdVal={24}
                      scale={scale} visibleRange={visibleRange} crosshairTs={crosshairTs}
                      yMin={25} yMax={43} significantIndices={sig1}
                      panelRef={chart1Ref} onMouseEnter={() => setActiveChartIdx(1)} />
                    <ChartPanel data={fatPctData} color="#ec4899" label="체지방률" unit="%" stdVal={25}
                      scale={scale} visibleRange={visibleRange} crosshairTs={crosshairTs}
                      hasBand bandTop="rgba(255,69,78,0.06)" bandBot="rgba(3,187,140,0.06)"
                      yMin={25} yMax={43} significantIndices={sig2}
                      panelRef={chart2Ref} onMouseEnter={() => setActiveChartIdx(2)} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Bottom section: table (full width, outside sidebar row) ── */}
            <div ref={tableAreaRef}
                 className="bg-white border-t border-[#e8e9ec] flex-shrink-0 overflow-hidden"
                 onMouseMove={handleTableMouseMove}
                 onMouseLeave={handleMouseLeave}>
              <PrescriptionTable
                prescriptions={PRESCRIPTIONS}
                visibleMeasurements={visibleMeasurements}
                visibleRange={visibleRange}
                chartsAreaW={tableAreaW}
                crosshairTs={crosshairTs}
                scale={scale} />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════ GRID VIEW ════════════════════════════════════════
            Same two-block structure as list view: top row = sidebar + grid, bottom = full-width table.
            Hover syncs via shared crosshairTs (date value) — no physical portal crosshair.          */}
        {activeTab === "trend" && viewMode === "grid" && (
          <div className="flex flex-col flex-1 overflow-hidden min-h-0">

            {/* ── Top section: sidebar + 2-column card grid (row) ── */}
            <div className="flex flex-1 overflow-hidden min-h-0">
              {/* Sidebar — identical position and content to list view */}
              <div className="flex flex-col items-center justify-center bg-[#f8f8f9] shrink-0 border-r border-[#e8e9ec] text-center px-[16px] gap-[6px]"
                   style={{ width: LABEL_COL_W }}>
                <p className="font-bold text-[13px] text-[#1c2029] tracking-[-0.42px]">측정지표 추이</p>
                <p className="text-[10px] text-[#a1a1a1] tracking-[-0.3px] leading-snug">각 지표별 절대 값</p>
              </div>

              {/* 2-column card grid */}
              <div
                className="flex-1 overflow-y-auto overflow-x-hidden bg-[#f5f6f8]"
                style={{ padding: `${CHART_SECTION_PY}px ${CHART_CARD_PL}px` }}
                onMouseLeave={handleGridContainerLeave}
              >
                <div className="grid grid-cols-2 gap-[10px]">
                  {gridMetrics.map((m) => (
                    <GridChartCard
                      key={m.label}
                      data={m.data}
                      color={m.color}
                      label={m.label}
                      unit={m.unit}
                      stdVal={m.stdVal}
                      scale={scale}
                      visibleRange={visibleRange}
                      crosshairTs={crosshairTs}
                      yMin={m.yMin}
                      yMax={m.yMax}
                      isActive={activeGridLabel === m.label}
                      onCrosshairChange={handleGridCrosshairChange}
                      onFocus={() => setActiveGridLabel(m.label)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Bottom section: table full width, outside sidebar row ── */}
            <div ref={tableAreaRef}
                 className="bg-white border-t border-[#e8e9ec] flex-shrink-0 overflow-hidden"
                 onMouseMove={handleTableMouseMove}
                 onMouseLeave={() => setCrosshairTs(null)}>
              <PrescriptionTable
                prescriptions={PRESCRIPTIONS}
                visibleMeasurements={visibleMeasurements}
                visibleRange={visibleRange}
                chartsAreaW={tableAreaW}
                crosshairTs={crosshairTs}
                scale={scale} />
            </div>

          </div>
        )}

        {activeTab === "compare" && (
          <div className="flex flex-1 min-h-0 overflow-hidden bg-[#f5f6f8] p-[12px] gap-[8px]">
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden rounded-[12px] border border-[#dfdfdf] bg-white">
              <div className="flex flex-1 min-h-0 overflow-hidden">
                <div className="flex items-center justify-center text-center bg-[#f8f8f9] border-r border-[#edf0f3] shrink-0" style={{width:LABEL_COL_W}}>
                  <div><p className="font-bold text-[13px]">측정지표 추이</p><p className="text-[10px] text-[#a1a1a1] mt-[4px]">각 지표별 절대 값</p></div>
                </div>
                <div ref={chartsAreaRef} className="flex-1 min-w-0">
                  <CompareMainChart metrics={compareMetrics} visibleRange={visibleRange} crosshairTs={crosshairTs} onCrosshairChange={handleGridCrosshairChange} />
                </div>
              </div>
              <div ref={tableAreaRef} className="bg-white border-t border-[#e8e9ec] flex-shrink-0 overflow-hidden"
                   onMouseMove={handleTableMouseMove} onMouseLeave={clearCrosshair}>
                <PrescriptionTable prescriptions={PRESCRIPTIONS} visibleMeasurements={visibleMeasurements}
                  visibleRange={visibleRange} chartsAreaW={tableAreaW} crosshairTs={crosshairTs} scale={scale} />
              </div>
            </div>
            <aside className="w-[256px] shrink-0 rounded-[12px] border border-[#dfdfdf] bg-[#f9fafb] overflow-y-auto scrollbar-hide"
                   onMouseLeave={() => setCrosshairTs(null)}>
              <div className="sticky top-0 z-10 bg-white border-b border-[#f3f4f6] px-[12px] py-[8px] text-[12px] font-semibold text-[#4a5565]">측정 지표 추이</div>
              {compareMetrics.map(m => <MiniTrendCard key={m.label} metric={m} crosshairTs={crosshairTs} />)}
            </aside>
          </div>
        )}
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center justify-between px-[16px] py-[4px] bg-[#f8f8f9] border-t border-[#e8e9ec] shrink-0">
        <span className="text-[10px] text-[#c0c4cc]">
          {fmtFull(DATA_START)} – {fmtFull(DATA_END)} · {MEASUREMENTS.length}회 측정 ({visibleMeasurements.length}회 표시)
        </span>
        <span className="text-[10px] text-[#c0c4cc]">
          {activeTab === "compare" ? "지표 변화 비교 · 메인/처방 스케일 동기화 · 미니맵 전체기간 고정" : viewMode === "grid" ? "카드형 · 날짜 기준 논리 동기화" : "리스트형 · 물리 좌표 동기화"} · Ctrl+휠 확대/축소
        </span>
      </div>
    </div>
  );
}
