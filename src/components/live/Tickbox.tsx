import React from 'react';

export function Tickbox(props){
	const {
    property1 = "default"
  } = props;
  return (
      <>
  {(property1 == "default") && <>
    <div className="tickbox w-[18px] h-[18px] absolute opacity-100 p-0 left-2 top-2">
      <div className="rectangle5661 absolute w-[18px] h-[18px] border rounded bg-white opacity-100 p-0 border-black inset-[0%]" />
    </div>
  </>}
  {(property1 == "active") && <>
    <div className="tickbox w-[18px] h-[18px] absolute opacity-100 p-0 left-2 top-[34px]">
      <div className="rectangle5661 absolute w-[18px] h-[18px] border rounded bg-[#0d2741] opacity-100 p-0 border-[#0d2741] inset-[0%]" />
    </div>
  </>}
</>
  );
}