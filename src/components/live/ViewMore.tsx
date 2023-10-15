import React from 'react';

export function ViewMore(props){
	const {
    state = "View more"
  } = props;
  return (
      <>
  {(state == "View more") && <>
    <div className="viewMore gap-2 absolute flex-col items-start opacity-100 p-0 left-2 top-2 flex">
      <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
      <div className="content gap-2 flex-row w-[405px] items-center opacity-100 p-0 flex">
        <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
          <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#212121" />
          </svg>
        </div>
        <span className="viewMoreFilters font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#212121] text-left tracking-[0px]">View more filters</span>
      </div>
      <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
    </div>
  </>}
  {(state == "View less") && <>
    <div className="viewMore gap-2 absolute flex-col items-start opacity-100 p-0 left-2 top-[58px] flex">
      <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
      <div className="content gap-2 flex-row w-[405px] items-center opacity-100 p-0 flex">
        <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
          <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={14} height={2} viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2H0V0H6H8H14V2H8H6Z" fill="#1C1B1F" />
          </svg>
        </div>
        <span className="viewLessFilters font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#212121] text-left tracking-[0px]">View less filters</span>
      </div>
      <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
    </div>
  </>}
</>
  );
}