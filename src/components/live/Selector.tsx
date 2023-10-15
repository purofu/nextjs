import React from 'react';

export function Selector(props){
	const {
    state = "Unselected"
  } = props;
  return (
      <>
  {(state == "Selected") && <>
    <div className="selector gap-0 absolute flex-col w-[203px] h-[42px] justify-center items-start opacity-100 p-0 left-4 top-[76px] flex">
      <div className="frame483116 gap-[31px] flex-row w-[204px] items-center opacity-100 p-0 flex">
        <div className="rectangle5764 w-[17px] h-[42px] relative bg-[#023054] opacity-100 p-0" />
        <div className="leftHandNavItems gap-0 flex-row w-[113px] items-center opacity-100 p-0 flex">
          <span className="levelOne font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#0d2741] text-left tracking-[0px] w-[113px] flex-1 min-w-0">Name</span>
        </div>
      </div>
      <div className="divider gap-1 flex-row justify-between items-start w-full opacity-100 pl-12 pr-0 py-0 flex">
        <svg className="divider" width={155} height={2} viewBox="0 0 155 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.00003L155 1.00001" stroke="black" strokeOpacity="0.2" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Unselected") && <>
    <div className="selector gap-1 absolute flex-row h-[42px] justify-between items-end w-[203px] opacity-100 p-0 left-4 top-4 flex">
      <div className="frame483115 gap-3 flex-col h-[31px] justify-between items-start flex-1 min-w-0 opacity-100 pl-12 pr-0 py-0 flex">
        <div className="leftHandNavItemsselected1 gap-4 flex-row items-center opacity-100 p-0 flex">
          <span className="levelOneSelected font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Name</span>
        </div>
        <svg className="divider" width={155} height={2} viewBox="0 0 155 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L155 0.999982" stroke="black" strokeOpacity="0.2" />
        </svg>
      </div>
    </div>
  </>}
</>
  );
}