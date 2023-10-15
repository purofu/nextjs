import React from 'react';

export function C13KeyStatements(props){
	const {
    size = "L(LHN)"
  } = props;
  return (
      <>
  {(size == "S") && <>
    <div className="c13KeyStatements gap-12 absolute flex-col w-[375px] items-start bg-white opacity-100 px-4 py-10 left-[4490px] top-2 flex">
      <div className="content gap-24 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Recommendations for Monitoring GEP-NETs</span>
        <div className="points gap-12 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="point gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-[327px]">Endoscopic follow-up at least every 2 years (preferred timing not defined)</span>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="point gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-[327px]">Patients with chronic atrophic gastritis also require careful surveillance for apparition of intestinal metaplasia and dysplasia using modern endoscopic equipment</span>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)") && <>
    <div className="c13KeyStatements gap-24 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-2 top-2 flex">
      <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[1036px]">Recommendations for Monitoring GEP-NETs</span>
      <div className="keyPoints gap-12 flex-col w-[1036px] items-start opacity-100 p-0 flex">
        <div className="point gap-3 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px]">Endoscopic follow-up at least every 2 years (preferred timing not defined)</span>
          <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="point gap-3 flex-col items-start w-full opacity-100 pt-0 pb-2 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Patients with chronic atrophic gastritis also require careful surveillance for apparition of intestinal metaplasia and dysplasia using modern endoscopic equipment</span>
          <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
      </div>
    </div>
  </>}
  {(size == "L") && <>
    <div className="c13KeyStatements gap-24 absolute flex-col w-[1440px] items-start bg-white opacity-100 p-16 left-[1545px] top-2 flex">
      <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[1036px]">Recommendations for Monitoring GEP-NETs</span>
      <div className="keyPoints gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="point gap-3 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px]">Endoscopic follow-up at least every 2 years (preferred timing not defined)</span>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="point gap-3 flex-col items-start w-full opacity-100 pt-0 pb-2 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Patients with chronic atrophic gastritis also require careful surveillance for apparition of intestinal metaplasia and dysplasia using modern endoscopic equipment</span>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
      </div>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c13KeyStatements gap-24 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[3267px] top-2 flex">
      <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Recommendations for Monitoring GEP-NETs</span>
      <div className="keyPoints gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="point gap-3 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Endoscopic follow-up at least every 2 years (preferred timing not defined)</span>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="point gap-3 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Patients with chronic atrophic gastritis also require careful surveillance for apparition of intestinal metaplasia and dysplasia using modern endoscopic equipment</span>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
      </div>
    </div>
  </>}
</>
  );
}