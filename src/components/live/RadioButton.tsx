import React from 'react';

export function RadioButton(props){
	const {
    state = "Default"
  } = props;
  return (
      <>
  {(state == "Default") && <>
    <div className="radioButton gap-2.5 absolute flex-row items-center opacity-100 p-0 left-4 top-4 flex">
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="black" />
      </svg>
      <span className="option font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Option</span>
    </div>
  </>}
  {(state == "Selected") && <>
    <div className="radioButton gap-2.5 absolute flex-row items-center opacity-100 p-0 left-4 top-[70px] flex">
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM11.9998 19.2C15.9763 19.2 19.1998 15.9764 19.1998 12C19.1998 8.02355 15.9763 4.8 11.9998 4.8C8.02335 4.8 4.7998 8.02355 4.7998 12C4.7998 15.9764 8.02335 19.2 11.9998 19.2Z" fill="#034F8B" />
      </svg>
      <span className="option font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px]">Option</span>
    </div>
  </>}
  {(state == "Disabled") && <>
    <div className="radioButton gap-2.5 absolute flex-row items-center opacity-100 p-0 left-4 top-[124px] flex">
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#9E9E9E" />
      </svg>
      <span className="option font-['Volta_Modern_Display'] text-base font-medium text-[#9e9e9e] text-left tracking-[0px]">Option</span>
    </div>
  </>}
</>
  );
}