function Frame2() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex items-center justify-center left-[107px] px-[16px] py-[12px] top-[60px] w-[1135px]">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">스케일 버튼</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex items-center justify-center left-[107px] px-[16px] py-[12px] top-[532px] w-[1135px]">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">처방항목 스케일 가이드</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404656] text-[12px] text-center whitespace-nowrap">+확대</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative shrink-0 w-[48px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1c2029] text-[12px] whitespace-nowrap">100%</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404656] text-[12px] text-center whitespace-nowrap">-축소</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white border border-[#f2f2f3] border-solid content-stretch flex gap-[4px] h-[30px] items-center left-[351px] px-[8px] py-[6px] rounded-[8px] top-[176px]" data-name="Container">
      <Button />
      <Text />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404656] text-[12px] text-center whitespace-nowrap">+확대</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative shrink-0 w-[48px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1c2029] text-[12px] whitespace-nowrap">{`{00}%`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404656] text-[12px] text-center whitespace-nowrap">-축소</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white border border-[#f2f2f3] border-solid content-stretch flex gap-[4px] h-[30px] items-center left-[351px] px-[8px] py-[6px] rounded-[8px] top-[331px]" data-name="Container">
      <Button2 />
      <Text1 />
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404656] text-[12px] text-center whitespace-nowrap">+확대</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative shrink-0 w-[48px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1c2029] text-[12px] whitespace-nowrap">{`{00}%`}</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#404656] text-[12px] text-center whitespace-nowrap">-축소</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white border border-[#f2f2f3] border-solid content-stretch flex gap-[4px] h-[30px] items-center left-[351px] px-[8px] py-[6px] rounded-[8px] top-[393px]" data-name="Container">
      <Button4 />
      <Text2 />
      <Button5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[442px] top-[169px]">
      <div className="absolute border border-[#4c9fff] border-dashed left-[442px] size-[40px] top-[169px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[1.4] left-[522px] not-italic text-[#4c9fff] text-[12px] text-center top-[178px] whitespace-nowrap">opacity 30%</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[349px] top-[305px]">
      <div className="absolute border border-[#4c9fff] border-dashed left-[358px] size-[40px] top-[329px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[1.4] left-[383px] not-italic text-[#4c9fff] text-[12px] text-center top-[305px] whitespace-nowrap">opacity 30%</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">1/8</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">4/10</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">6/1</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">7/17</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">8/30</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">10/3</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">11/22</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">12/31</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">3/18</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">5/29</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">7/5</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[15px] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">오늘</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px overflow-clip relative">
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container3() {
  return (
    <div className="border-[#d8dadf] border-b border-solid content-stretch flex gap-[189px] items-center px-[16px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">처방항목</p>
      <Frame />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[12px] tracking-[-0.36px] whitespace-nowrap">위고비 2.4mg</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]" data-name="Container">
        <Text15 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame16 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <Frame55 />
      <Frame57 />
      <Frame59 />
      <Frame61 />
      <Frame63 />
      <Frame65 />
      <Frame75 />
      <Frame77 />
      <Frame79 />
      <Frame81 />
      <Frame83 />
      <Frame85 />
    </div>
  );
}

function RxRow() {
  return (
    <div className="border-[#f2f2f3] border-b border-solid content-stretch flex gap-[74px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-name="RxRow">
      <Container5 />
      <Frame4 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[12px] tracking-[-0.36px] whitespace-nowrap">체형교정치료</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]" data-name="Container">
        <Text16 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame29 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <Frame56 />
      <Frame58 />
      <Frame60 />
      <Frame62 />
      <Frame64 />
      <Frame66 />
      <Frame76 />
      <Frame78 />
      <Frame80 />
      <Frame82 />
      <Frame84 />
      <Frame86 />
    </div>
  );
}

function RxRow1() {
  return (
    <div className="border-[#f2f2f3] border-b border-solid content-stretch flex gap-[74px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-name="RxRow">
      <Container6 />
      <Frame17 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[12px] tracking-[-0.36px] whitespace-nowrap">지방흡입술</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]" data-name="Container">
        <Text17 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame41 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame42 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <Frame67 />
      <Frame68 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <Frame87 />
      <Frame88 />
      <Frame89 />
      <Frame90 />
      <Frame91 />
      <Frame92 />
    </div>
  );
}

function RxRow2() {
  return (
    <div className="border-[#f2f2f3] border-b border-solid content-stretch flex gap-[74px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-name="RxRow">
      <Container7 />
      <Frame30 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[12px] tracking-[-0.36px] whitespace-nowrap">{`{처방항목}`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]" data-name="Container">
        <Text18 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame45 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame46 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame50 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame53 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame54 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] gap-[2px] items-center justify-center leading-[normal] min-w-px not-italic relative text-[9px] text-center tracking-[-0.45px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
      <p className="relative shrink-0 text-[#cbced6]">{`| `}</p>
      <p className="relative shrink-0 text-[#404656]">1</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[8px] relative">
      <Frame103 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <Frame73 />
      <Frame74 />
      <Frame93 />
      <Frame94 />
      <Frame95 />
      <Frame96 />
      <Frame97 />
      <Frame98 />
      <Frame99 />
      <Frame100 />
      <Frame101 />
      <Frame102 />
    </div>
  );
}

function RxRow3() {
  return (
    <div className="border-[#f2f2f3] border-b border-solid content-stretch flex gap-[74px] items-center px-[16px] py-[12px] relative shrink-0 w-full" data-name="RxRow">
      <Container8 />
      <Frame43 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[190px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <RxRow />
      <RxRow1 />
      <RxRow2 />
      <RxRow3 />
    </div>
  );
}

function PrescriptionSection() {
  return (
    <div className="absolute bg-white border border-[#dfdfdf] border-solid content-stretch flex flex-col h-[220px] items-start left-[122px] pb-[8px] rounded-[12px] top-[670px] w-[1103px]" data-name="PrescriptionSection">
      <div className="absolute bg-[#f8f8f9] h-[185px] left-0 rounded-bl-[11px] top-[33px] w-[200px]" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">1/8</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">3/5</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">4/10</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">5/13</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">6/1</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">6/24</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">7/17</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">8/4</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">8/30</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">9/14</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">10/3</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">10/30</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">11/22</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">12/4</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">12/31</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">1/30</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">3/18</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">5/4</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">5/29</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">6/13</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">7/5</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">7/16</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center relative shrink-0 w-[32px]" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] text-center tracking-[-0.3px] w-full">오늘</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end overflow-clip relative shrink-0 w-[824px]">
      <Text19 />
      <Text20 />
      <Text21 />
      <Text22 />
      <Text23 />
      <Text24 />
      <Text25 />
      <Text26 />
      <Text27 />
      <Text28 />
      <Text29 />
      <Text30 />
      <Text31 />
      <Text32 />
      <Text33 />
      <Text34 />
      <Text35 />
      <Text36 />
      <Text37 />
      <Text38 />
      <Text39 />
      <Text40 />
      <Text41 />
    </div>
  );
}

function Container9() {
  return (
    <div className="border-[#d8dadf] border-b border-solid content-stretch flex gap-[189px] items-center px-[16px] py-[6px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">처방항목</p>
      <Frame1 />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[12px] tracking-[-0.36px] whitespace-nowrap">위고비 2.4mg</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]" data-name="Container">
        <Text42 />
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame105 />
      <Frame106 />
      <Frame107 />
      <Frame108 />
      <Frame109 />
      <Frame110 />
      <Frame111 />
      <Frame112 />
      <Frame113 />
      <Frame114 />
      <Frame115 />
      <Frame116 />
      <Frame117 />
      <Frame118 />
      <Frame119 />
      <Frame120 />
      <Frame121 />
      <Frame122 />
      <Frame123 />
      <Frame124 />
      <Frame125 />
      <Frame126 />
      <Frame127 />
    </div>
  );
}

function RxRow4() {
  return (
    <div className="border-[#f2f2f3] border-b border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full" data-name="RxRow">
      <Container11 />
      <Frame104 />
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[12px] tracking-[-0.36px] whitespace-nowrap">체형교정치료</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]" data-name="Container">
        <Text43 />
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame129 />
      <Frame130 />
      <Frame131 />
      <Frame132 />
      <Frame133 />
      <Frame134 />
      <Frame135 />
      <Frame136 />
      <Frame137 />
      <Frame138 />
      <Frame139 />
      <Frame140 />
      <Frame141 />
      <Frame142 />
      <Frame143 />
      <Frame144 />
      <Frame145 />
      <Frame146 />
      <Frame147 />
      <Frame148 />
      <Frame149 />
      <Frame150 />
      <Frame151 />
    </div>
  );
}

function RxRow5() {
  return (
    <div className="border-[#f2f2f3] border-b border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full" data-name="RxRow">
      <Container12 />
      <Frame128 />
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[12px] tracking-[-0.36px] whitespace-nowrap">지방흡입술</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]" data-name="Container">
        <Text44 />
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame153 />
      <Frame154 />
      <Frame155 />
      <Frame156 />
      <Frame157 />
      <Frame158 />
      <Frame159 />
      <Frame160 />
      <Frame161 />
      <Frame162 />
      <Frame163 />
      <Frame164 />
      <Frame165 />
      <Frame166 />
      <Frame167 />
      <Frame168 />
      <Frame169 />
      <Frame170 />
      <Frame171 />
      <Frame172 />
      <Frame173 />
      <Frame174 />
      <Frame175 />
    </div>
  );
}

function RxRow6() {
  return (
    <div className="border-[#f2f2f3] border-b border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full" data-name="RxRow">
      <Container13 />
      <Frame152 />
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Malgun_Gothic:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1c2029] text-[12px] tracking-[-0.36px] whitespace-nowrap">{`{처방항목}`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0 w-[170px]" data-name="Container">
        <Text45 />
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">1</p>
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 w-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Malgun_Gothic:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#404656] text-[9px] text-center tracking-[-0.45px]">{`1 `}</p>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame177 />
      <Frame178 />
      <Frame179 />
      <Frame180 />
      <Frame181 />
      <Frame182 />
      <Frame183 />
      <Frame184 />
      <Frame185 />
      <Frame186 />
      <Frame187 />
      <Frame188 />
      <Frame189 />
      <Frame190 />
      <Frame191 />
      <Frame192 />
      <Frame193 />
      <Frame194 />
      <Frame195 />
      <Frame196 />
      <Frame197 />
      <Frame198 />
      <Frame199 />
    </div>
  );
}

function RxRow7() {
  return (
    <div className="border-[#f2f2f3] border-b border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full" data-name="RxRow">
      <Container14 />
      <Frame176 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[190px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <RxRow4 />
      <RxRow5 />
      <RxRow6 />
      <RxRow7 />
    </div>
  );
}

function PrescriptionSection1() {
  return (
    <div className="absolute bg-white border border-[#dfdfdf] border-solid content-stretch flex flex-col h-[220px] items-start left-[125px] pb-[8px] rounded-[12px] top-[1122px] w-[1103px]" data-name="PrescriptionSection">
      <div className="absolute bg-[#f8f8f9] h-[185px] left-0 rounded-bl-[11px] top-[33px] w-[200px]" />
      <Container9 />
      <Container10 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="스케일 가이드">
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] leading-[1.4] left-[129px] not-italic text-[#4c9fff] text-[20px] top-[624px] whitespace-nowrap">스케일 Zoom In (확대)</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold',sans-serif] leading-[1.4] left-[129px] not-italic text-[#4c9fff] text-[20px] top-[1086px] whitespace-nowrap">스케일 Zoom Out (축소)</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[1.4] left-[127px] not-italic text-[16px] text-black top-[186px] whitespace-nowrap">초기 조회 스케일</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[1.4] left-[749px] not-italic text-[16px] text-black top-[212px] whitespace-nowrap">확대/축소</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Bold',sans-serif] leading-[1.4] left-[722px] not-italic text-[16px] text-black top-[172px] whitespace-nowrap">[Interaction]</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[1.4] left-[749px] not-italic text-[16px] text-black top-[292px] whitespace-nowrap">이동</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[1.4] left-[127px] not-italic text-[16px] text-black top-[337px] whitespace-nowrap">최대치 확대</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[1.4] left-[127px] not-italic text-[16px] text-black top-[397px] whitespace-nowrap">확대/축소 모두 가능한 경우</p>
      <div className="[word-break:break-word] absolute font-['Pretendard:Light',sans-serif] leading-[0] left-[127px] not-italic text-[14px] text-black top-[224px] whitespace-nowrap">
        <p className="leading-[1.4] mb-0 whitespace-pre">{`화면 진입 시 가장 오래된 측정일 기준(시작일) ~ 최근 측정일(오늘)까지의 `}</p>
        <p className="leading-[1.4] whitespace-pre">전체 기간 데이터를 X축에 100% 맞춰 차트 영역에서 Fit하게 표시.</p>
      </div>
      <ul className="[word-break:break-word] absolute block font-['Pretendard:Light',sans-serif] leading-[0] left-[749px] not-italic text-[14px] text-black top-[242px] whitespace-nowrap">
        <li className="list-disc ms-[21px]">
          <span className="leading-[1.4]">그래프 영역 위에서 마우스 휠 동작 시, 마우스 커서 위치를 중심으로 X축 확대/축소</span>
        </li>
      </ul>
      <p className="[word-break:break-word] absolute font-['Pretendard:Light',sans-serif] leading-[1.4] left-[356px] not-italic text-[14px] text-black top-[628px] whitespace-nowrap">“용량 | 일투수 | 일수” 순서로 노출</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Light',sans-serif] leading-[1.4] left-[359px] not-italic text-[14px] text-black top-[1087px] whitespace-nowrap">“용량” 만 노출</p>
      <ul className="[word-break:break-word] absolute block font-['Pretendard:Light',sans-serif] leading-[0] left-[749px] list-disc not-italic text-[14px] text-black top-[322px] whitespace-nowrap">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[1.4]">X축 날짜 텍스트 영역에 마우스 hover 시 커서 모양이 grab(손바닥 모양)으로 변경.</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[1.4]">클릭 후 좌/우로 드래그하여 그래프 축 이동</span>
        </li>
      </ul>
      <ul className="[word-break:break-word] absolute block font-['Pretendard:Light',sans-serif] leading-[0] left-[134px] list-disc not-italic text-[14px] text-black top-[1364px] whitespace-nowrap">
        <li className="mb-0 ms-[21px]">
          <span className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[1.4] not-italic">{`셀 width < 32px`}</span>
        </li>
        <ul>
          <li className="mb-0 ms-[42px]">
            <span className="leading-[1.4]">노출 데이터 ‘용량’만 단독 노출</span>
          </li>
          <li className="mb-0 ms-[42px]">
            <span className="leading-[1.4]">{`Mouse over시, ‘용량 | 일투수 | 일수' 전체 정보 툴팁 노출`}</span>
          </li>
          <li className="ms-[42px]">
            <span className="leading-[1.4]">최대 Zoom out 상태에서도 Min-width: 16px</span>
          </li>
        </ul>
      </ul>
      <ul className="[word-break:break-word] absolute block font-['Pretendard:Light',sans-serif] leading-[0] left-[134px] not-italic text-[14px] text-black top-[908px] whitespace-nowrap">
        <li className="list-disc mb-0 ms-[21px]">
          <span className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[1.4] not-italic">{`셀 width > 50px`}</span>
        </li>
        <ul>
          <li className="list-disc mb-0 ms-[42px]">
            <span className="leading-[1.4]">노출 데이터 ‘용량 | 일투수 | 일수’ 전체 노출</span>
          </li>
          <li className="list-disc mb-0 ms-[42px]">
            <span className="leading-[1.4]">{`구분자 시각화 `}</span>
          </li>
          <ul>
            <li className="list-disc ms-[63px]">
              <span className="leading-[1.4]">데이터 간 구분자는 Light Gray 계열로 처리하여 시각적 피로도 감소</span>
            </li>
          </ul>
        </ul>
      </ul>
      <Frame2 />
      <Frame3 />
      <Container />
      <Container1 />
      <Container2 />
      <Group />
      <Group1 />
      <PrescriptionSection />
      <PrescriptionSection1 />
    </div>
  );
}