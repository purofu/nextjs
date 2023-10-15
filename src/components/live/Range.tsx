import React from 'react';

export function Range(props){
	const {
    size = "L"
  } = props;
  return (
      <>
  {(size == "L") && <>
    <div className="range w-[401px] h-[78px] absolute opacity-100 p-0 left-2 top-2">
      <div className="tags w-[401px] h-[19px] absolute p-0">
        <span className="25km font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-right tracking-[0px]">25km</span>
        <span className="10km font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-right tracking-[0px]">10km</span>
        <span className="50km font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#0d2741] text-right tracking-[0px]">50km</span>
        <span className="75km font-['Volta_Modern_Display'] text-[15px] font-medium text-[#9e9e9e] text-right tracking-[0px]">75km</span>
        <span className="100km font-['Volta_Modern_Display'] text-[15px] font-medium text-[#9e9e9e] text-right tracking-[0px]">100+km</span>
      </div>
      <div className="mainLine w-[397px] h-px absolute -translate-x-2/4 bg-[#bdbdbd] opacity-100 p-0 left-2/4 top-2/4" />
      <div className="lines w-[398px] h-[11px] absolute p-0">
        <div className="rectangle5717 w-px h-[11px] relative bg-[#0d2741] opacity-100 p-0" />
        <div className="rectangle5725 w-px h-[11px] relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="rectangle5724 w-px h-[11px] relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="rectangle5724 w-px h-[11px] relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="rectangle5723 w-[194px] h-1 relative bg-[#0d2741] opacity-100 p-0 rounded-[0px_900px_900px_0px]" />
        <div className="rectangle5718 w-px h-[11px] relative bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <svg className="sliderPin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={14} cy={14} r={14} fill="#0D2741" />
        <circle cx={14} cy={14} r={10} fill="white" />
      </svg>
      <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute w-[392px] left-[0.25%] right-[2%] top-[0%] bottom-[75.64%]">Range (km)</span>
    </div>
  </>}
  {(size == "S") && <>
    <div className="range w-[343px] h-[78px] absolute opacity-100 p-0 left-2 top-[143px]">
      <div className="tags w-[262px] h-[18px] absolute p-0">
        <span className="25km font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-right tracking-[0px]">25km</span>
        <span className="10km font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-right tracking-[0px]">10km</span>
        <span className="50km font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#0d2741] text-right tracking-[0px]">50km</span>
        <span className="75km font-['Volta_Modern_Display'] text-[13px] font-medium text-[#9e9e9e] text-right tracking-[0px]">75km</span>
      </div>
      <span className="100km font-['Volta_Modern_Display'] text-[13px] font-medium text-[#9e9e9e] text-right tracking-[0px] absolute left-[86.59%] right-[0%] top-[75.64%] bottom-[1.28%]">100+km</span>
      <div className="mainLine w-[341px] h-px absolute -translate-x-2/4 bg-[#bdbdbd] opacity-100 p-0 left-2/4 top-2/4" />
      <div className="lines w-[343px] h-[11px] absolute p-0">
        <div className="rectangle5717 w-[0.86px] h-[11px] relative bg-[#0d2741] opacity-100 p-0" />
        <div className="rectangle5725 w-[0.86px] h-[11px] relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="rectangle5724 w-[0.86px] h-[11px] relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="rectangle5724 w-[0.86px] h-[11px] relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="rectangle5723 w-[167.19px] h-1 relative bg-[#0d2741] opacity-100 p-0 rounded-[0px_900px_900px_0px]" />
        <div className="rectangle5718 w-[0.86px] h-[11px] relative bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <svg className="sliderPin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={14} cy={14} r={14} fill="#0D2741" />
        <circle cx={14} cy={14} r={10} fill="white" />
      </svg>
      <span className="title font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] absolute right-[-14.29%] w-[392px] left-[0%] top-[0%] bottom-[76.92%]">Range (km)</span>
    </div>
  </>}
</>
  );
}