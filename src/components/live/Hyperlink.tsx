import React from 'react';

export function Hyperlink(props){
	const {
    size = "L",
    state = "Default"
  } = props;
  return (
      <>
  {(size == "L" && state == "Hover") && <>
    <div className="hyperlink w-[197px] h-5 absolute opacity-100 p-0 left-[253px] top-5">
      <span className="subcopy font-['Volta_Modern_Display'] text-[22px] font-medium text-[#023054] text-left underline tracking-[0px] absolute w-[197px] h-5 inset-[0%]">Hyperlinks</span>
    </div>
  </>}
  {(size == "L" && state == "Default") && <>
    <div className="hyperlink w-[197px] h-5 absolute opacity-100 p-0 left-5 top-5">
      <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#0460a9] text-left tracking-[0px] absolute w-[197px] h-5 inset-[0%]">Hyperlinks</span>
    </div>
  </>}
  {(size == "L" && state == "Disabled") && <>
    <div className="hyperlink w-[197px] h-5 absolute opacity-100 p-0 left-[533px] top-5">
      <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#9e9e9e] text-left tracking-[0px] absolute w-[197px] h-5 inset-[0%]">Hyperlinks</span>
    </div>
  </>}
  {(size == "S" && state == "Hover") && <>
    <div className="hyperlink gap-2 absolute flex-row items-center opacity-100 p-0 left-[253px] top-[121px] flex">
      <span className="hyperlinks font-['Volta_Modern_Display'] text-[15px] font-medium text-[#023054] text-left underline tracking-[0px]">Hyperlinks</span>
    </div>
  </>}
  {(size == "M" && state == "Default") && <>
    <div className="hyperlink gap-2 absolute flex-row items-center opacity-100 p-0 left-5 top-[70px] flex">
      <span className="hyperlinks font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Hyperlinks</span>
    </div>
  </>}
  {(size == "M" && state == "Disabled") && <>
    <div className="hyperlink gap-2 absolute flex-row items-center opacity-100 p-0 left-[533px] top-[70px] flex">
      <span className="hyperlinks font-['Volta_Modern_Display'] text-[19px] font-medium text-[#9e9e9e] text-left tracking-[0px]">Hyperlinks</span>
    </div>
  </>}
  {(size == "S" && state == "Default") && <>
    <div className="hyperlink gap-2 absolute flex-row items-center opacity-100 p-0 left-5 top-[121px] flex">
      <span className="hyperlinks font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0460a9] text-left tracking-[0px]">Hyperlinks</span>
    </div>
  </>}
  {(size == "S" && state == "Disabled") && <>
    <div className="hyperlink gap-2 absolute flex-row items-center opacity-100 p-0 left-[533px] top-[121px] flex">
      <span className="hyperlinks font-['Volta_Modern_Display'] text-[15px] font-medium text-[#9e9e9e] text-left tracking-[0px]">Hyperlinks</span>
    </div>
  </>}
  {(size == "M" && state == "Hover") && <>
    <div className="hyperlink gap-2 absolute flex-row items-center opacity-100 p-0 left-[253px] top-[70px] flex">
      <span className="hyperlinks font-['Volta_Modern_Display'] text-[19px] font-medium text-[#023054] text-left underline tracking-[0px]">Hyperlinks</span>
    </div>
  </>}
</>
  );
}