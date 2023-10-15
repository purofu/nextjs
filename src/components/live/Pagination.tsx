import React from 'react';

export function Pagination(props){
	const {
    state = "Selected"
  } = props;
  return (
      <>
  {(state == "Default") && <>
    <div className="pagination gap-0 absolute flex-col w-6 h-6 justify-center items-center opacity-100 p-4 rounded-lg left-12 top-4 flex">
      <span className="number font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0460a9] text-left tracking-[0px]">2</span>
    </div>
  </>}
  {(state == "Selected") && <>
    <div className="pagination gap-0 absolute flex-col w-6 h-6 justify-center items-center opacity-100 p-4 rounded-lg left-4 top-4 flex">
      <span className="number font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#0460a9] text-left tracking-[0px]">1</span>
    </div>
  </>}
</>
  );
}