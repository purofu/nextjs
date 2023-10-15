import React from 'react';

export function Checklist(props){
	const {
    property1 = "XL"
  } = props;
  return (
      <>
  {(property1 == "XL") && <>
    <div className="checklist gap-3 absolute flex-row w-[148px] items-start opacity-100 p-0 left-3 top-[11px] flex">
      <div className="frame483072 gap-1 flex-row items-start opacity-100 p-0 flex">
        <div className="checkbox gap-[7.5px] flex-row items-center opacity-100 p-0 flex">
          <div className="checkboxDraftCheckboxSelected w-[18px] h-[18px] relative opacity-100 p-0">
            <div className="rectangle3818 absolute w-[18px] h-[18px] opacity-100 p-0 rounded-[3px] border-[0.75px] border-[rgba(0,0,0,0.87)] inset-[0%]" />
          </div>
        </div>
      </div>
      <span className="filterOption font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[118px] flex-1 min-w-0">Filter Option</span>
    </div>
  </>}
  {(property1 == "M") && <>
    <div className="checklist gap-3 absolute flex-row w-[148px] items-center opacity-100 p-0 left-3 top-[41px] flex">
      <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
        <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
          <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
        </div>
      </div>
      <span className="filterOption font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-28 flex-1 min-w-0">Filter Option</span>
    </div>
  </>}
  {(property1 == "S") && <>
    <div className="checklist gap-3 absolute flex-row w-[148px] items-center opacity-100 p-0 left-3 top-[77px] flex">
      <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
        <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
          <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
        </div>
      </div>
      <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-28 flex-1 min-w-0">Filter Option</span>
    </div>
  </>}
</>
  );
}