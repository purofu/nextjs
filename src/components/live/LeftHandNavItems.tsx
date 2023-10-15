import React from 'react';

export function LeftHandNavItems(props){
	const {
    size = "XL",
    level = "1",
    type = "default"
  } = props;
  return (
      <>
  {(size == "XL" && level == "1" && type == "default") && <>
    <div className="leftHandNavItems gap-0 absolute flex-row w-[252px] items-center bg-white opacity-100 pl-12 pr-0 py-0 left-4 top-[13px] flex">
      <span className="levelOne font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-[204px] flex-1 min-w-0">Level One</span>
    </div>
  </>}
  {(size == "S" && level == "1" && type == "default") && <>
    <div className="leftHandNavItems gap-0 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-4 pr-0 py-0 left-[27px] top-[735px] flex">
      <span className="levelOne font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] w-[319px] flex-1 min-w-0">Level One</span>
    </div>
  </>}
  {(size == "M" && level == "1" && type == "default") && <>
    <div className="leftHandNavItems gap-0 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-8 pr-0 py-0 left-[27px] top-[358px] flex">
      <span className="levelOne font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-[303px] flex-1 min-w-0">Level One</span>
    </div>
  </>}
  {(size == "XL" && level == "2" && type == "default") && <>
    <div className="leftHandNavItems gap-0 absolute flex-row w-[252px] items-center bg-white opacity-100 pl-12 pr-0 py-0 left-4 top-[71px] flex">
      <span className="levelTwo font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[204px] flex-1 min-w-0">Level Two</span>
    </div>
  </>}
  {(size == "S" && level == "2" && type == "default") && <>
    <div className="leftHandNavItems gap-0 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-4 pr-1 py-0 left-[27px] top-[788px] flex">
      <span className="levelTwo font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[315px] flex-1 min-w-0">Level Two</span>
    </div>
  </>}
  {(size == "M" && level == "2" && type == "default") && <>
    <div className="leftHandNavItems gap-0 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-8 pr-1 py-0 left-[27px] top-[416px] flex">
      <span className="levelTwo font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[299px] flex-1 min-w-0">Level Two</span>
    </div>
  </>}
  {(size == "XL" && level == "2" && type == "selected") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[252px] items-center bg-white opacity-100 pl-12 pr-0 py-0 left-4 top-[108px] flex">
      <span className="levelTwo font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] w-[204px] flex-1 min-w-0">Level Two</span>
    </div>
  </>}
  {(size == "S" && level == "2" && type == "selected") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-4 pr-0 py-0 left-[27px] top-[825px] flex">
      <span className="levelTwo font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[319px] flex-1 min-w-0">Level Two</span>
    </div>
  </>}
  {(size == "M" && level == "2" && type == "selected") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-8 pr-0 py-0 left-[27px] top-[453px] flex">
      <span className="levelTwo font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[303px] flex-1 min-w-0">Level Two</span>
    </div>
  </>}
  {(size == "XL" && level == "3" && type == "selected") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[252px] items-center bg-white opacity-100 pl-[72px] pr-0 py-0 left-4 top-[200px] flex">
      <span className="levelThree font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] w-[180px] flex-1 min-w-0">Level Three</span>
    </div>
  </>}
  {(size == "S" && level == "3" && type == "selected") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-8 pr-0 py-0 left-[27px] top-[907px] flex">
      <span className="levelThree font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[303px] flex-1 min-w-0">Level Three</span>
    </div>
  </>}
  {(size == "M" && level == "3" && type == "selected") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-8 pr-0 py-0 left-[27px] top-[537px] flex">
      <span className="levelThree font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[303px] flex-1 min-w-0">Level Three</span>
    </div>
  </>}
  {(size == "XL" && level == "3" && type == "default") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[252px] items-center bg-white opacity-100 pl-[72px] pr-0 py-0 left-4 top-[168px] flex">
      <span className="levelThree font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px] w-[180px] flex-1 min-w-0">Level Three</span>
    </div>
  </>}
  {(size == "S" && level == "3" && type == "default") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-8 pr-0 py-0 left-[27px] top-[875px] flex">
      <span className="levelThree font-['Volta_Modern_Display'] text-[13px] font-medium text-[#616161] text-left tracking-[0px] w-[303px] flex-1 min-w-0">Level Three</span>
    </div>
  </>}
  {(size == "M" && level == "3" && type == "default") && <>
    <div className="leftHandNavItems gap-4 absolute flex-row w-[335px] items-center bg-white opacity-100 pl-8 pr-0 py-0 left-[27px] top-[505px] flex">
      <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[303px] flex-1 min-w-0">Level Three</span>
    </div>
  </>}
</>
  );
}