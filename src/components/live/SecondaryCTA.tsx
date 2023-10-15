import React from 'react';

export function SecondaryCTA(props){
	const {
    size = "19",
    type = "active",
    destination = "Internal"
  } = props;
  return (
      <>
  {(size == "16" && type == "active" && destination == "Internal") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-4 top-[108px] flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "16" && type == "active" && destination == "External") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[783px] top-[108px] flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15.1L13.6 3.5L5 3.5L5 1.5L17 1.5L17 13.5L15 13.5L15 4.9L3.4 16.5L2 15.1Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "19" && type == "active" && destination == "Internal") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-4 top-[65px] flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 4.16675L14.6667 14.8001L14.6667 6.91675L16.5 6.91675L16.5 17.9167L5.5 17.9167L5.5 16.0834L13.3833 16.0834L2.75 5.45008L4.03333 4.16675Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "19" && type == "active" && destination == "External") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[783px] top-[65px] flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17.1L15.6 5.5L7 5.5L7 3.5L19 3.5L19 15.5L17 15.5L17 6.9L5.4 18.5L4 17.1Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "19" && type == "hover" && destination == "Internal") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[253px] top-16 flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#023054] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 4.16675L14.6667 14.8001L14.6667 6.91675L16.5 6.91675L16.5 17.9167L5.5 17.9167L5.5 16.0834L13.3833 16.0834L2.75 5.45008L4.03333 4.16675Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "19" && type == "hover" && destination == "External") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[1020px] top-16 flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#023054] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17.1L15.6 5.5L7 5.5L7 3.5L19 3.5L19 15.5L17 15.5L17 6.9L5.4 18.5L4 17.1Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "19" && type == "Disabled" && destination == "Internal") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[507px] top-16 flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#9e9e9e] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 4.16675L14.6667 14.8001L14.6667 6.91675L16.5 6.91675L16.5 17.9167L5.5 17.9167L5.5 16.0834L13.3833 16.0834L2.75 5.45008L4.03333 4.16675Z" fill="#9E9E9E" />
      </svg>
    </div>
  </>}
  {(size == "19" && type == "Disabled" && destination == "External") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[1274px] top-16 flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#9e9e9e] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17.1L15.6 5.5L7 5.5L7 3.5L19 3.5L19 15.5L17 15.5L17 6.9L5.4 18.5L4 17.1Z" fill="#9E9E9E" />
      </svg>
    </div>
  </>}
  {(size == "16" && type == "hover" && destination == "Internal") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[253px] top-[108px] flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "16" && type == "hover" && destination == "External") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[1020px] top-[108px] flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15.1L13.6 3.5L5 3.5L5 1.5L17 1.5L17 13.5L15 13.5L15 4.9L3.4 16.5L2 15.1Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "16" && type == "Disabled" && destination == "Internal") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[507px] top-[108px] flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#9e9e9e] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#9E9E9E" />
      </svg>
    </div>
  </>}
  {(size == "16" && type == "Disabled" && destination == "External") && <>
    <div className="secondaryCTA gap-2 absolute flex-row items-center opacity-100 p-0 left-[1274px] top-[108px] flex">
      <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#9e9e9e] text-left tracking-[0px]">Link title here</span>
      <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15.1L13.6 3.5L5 3.5L5 1.5L17 1.5L17 13.5L15 13.5L15 4.9L3.4 16.5L2 15.1Z" fill="#9E9E9E" />
      </svg>
    </div>
  </>}
</>
  );
}