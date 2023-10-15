import React from 'react';

export function Radio(props){
	const {
    selected = "No"
  } = props;
  return (
      <>
  {(selected == "No") && <>
    <div className="radio w-9 h-9 absolute opacity-100 p-0 left-2 top-2">
      <div className="rectangle3978 absolute w-9 h-9 border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
    </div>
  </>}
  {(selected == "Yes") && <>
    <div className="radio w-9 h-9 absolute opacity-100 p-0 left-[78px] top-2">
      <div className="rectangle3965 absolute w-9 h-9 border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
      <div className="rectangle3966 absolute w-[18px] h-[18px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
    </div>
  </>}
</>
  );
}