import React from 'react';

export function Checkbox(props){
	const {
    checked = "Yes"
  } = props;
  return (
      <>
  {(checked == "No") && <>
    <div className="checkbox w-[46px] h-[46px] absolute opacity-100 p-0 left-24 top-2">
      <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#1b1b1b] inset-[0%]" />
    </div>
  </>}
  {(checked == "Yes") && <>
    <div className="checkbox w-[46px] h-[46px] absolute opacity-100 p-0 left-2 top-2">
      <div className="rectangle3854 absolute w-[46px] h-[46px] bg-white opacity-100 p-0 rounded-[900px] inset-[0%]" />
      <div className="done w-10 h-10 absolute p-0">
        <div className="boundingBox w-10 h-10 relative bg-[#0460a9] opacity-100 p-0" />
        <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.92188 21.0026L0.421875 11.5026L2.79688 9.1276L9.92188 16.2526L25.2135 0.960938L27.5885 3.33594L9.92188 21.0026Z" fill="#0460A9" />
        </svg>
      </div>
    </div>
  </>}
</>
  );
}