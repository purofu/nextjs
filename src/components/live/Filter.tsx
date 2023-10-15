import React from 'react';

export function Filter(props){
	const {
    state = "Default"
  } = props;
  return (
      <>
  {(state == "Selected") && <>
    <div className="filter gap-0 absolute flex-col items-start border bg-[#e3e9ef] opacity-100 px-[35px] py-[19px] rounded-sm border-[#e3e9ef] left-[221px] top-4 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-black text-left tracking-[0px]">All</span>
      </div>
    </div>
  </>}
  {(state == "Default") && <>
    <div className="filter gap-2.5 absolute flex-col h-[61px] justify-center items-start border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] left-4 top-4 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Ordering</span>
      </div>
    </div>
  </>}
  {(state == "Hover") && <>
    <div className="filter gap-2.5 absolute flex-col h-[61px] justify-center items-start bg-[#023054] opacity-100 px-[15.305647850036621px] py-[3.305647850036621px] rounded-sm border-[0.69px] border-[#c6ced7] left-[126px] top-4 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">ROME</span>
      </div>
    </div>
  </>}
</>
  );
}