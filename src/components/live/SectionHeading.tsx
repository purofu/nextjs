import React from 'react';

export function SectionHeading(props){
	const {
    links = "No",
    cTA = "No",
    size = "L",
    stacked = "No"
  } = props;
  return (
      <>
  {(links == "No" && cTA == "No" && size == "L" && stacked == "No") && <>
    <div className="sectionHeading gap-[-1px] absolute flex-col w-[781px] items-start opacity-100 p-0 left-5 top-5 flex">
      <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
        <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(links == "No" && cTA == "No" && size == "S" && stacked == "No") && <>
    <div className="sectionHeading gap-[-1px] absolute flex-col w-[781px] items-start opacity-100 p-0 left-[964px] top-[23px] flex">
      <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
        <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(links == "Yes" && cTA == "No" && size == "L" && stacked == "No") && <>
    <div className="sectionHeading gap-[-1px] absolute flex-col w-[781px] items-start opacity-100 p-0 left-5 top-[118px] flex">
      <div className="frame482577 gap-[13px] flex-row justify-between items-end w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="tertiaryCTA gap-2 flex-row h-full items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(links == "Yes" && cTA == "No" && size == "S" && stacked == "No") && <>
    <div className="sectionHeading gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-[964px] top-[121px] flex">
      <div className="frame482577 gap-[13px] flex-row w-[781px] justify-between items-end opacity-100 pl-0 pr-8 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="tertiaryCTA gap-2 flex-row h-full items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-[781px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(links == "Yes" && cTA == "No" && size == "S" && stacked == "Yes") && <>
    <div className="sectionHeading gap-2 absolute flex-col w-[355px] items-start opacity-100 p-0 left-[1884px] top-[120px] flex">
      <div className="frame482577 gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame1199 gap-1.5 flex-row h-[42px] items-center w-full opacity-100 p-0 flex">
        <div className="tertiaryCTA gap-2 flex-row h-full items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
          <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 3.6665L14.6667 14.2998L14.6667 6.4165L16.5 6.4165L16.5 17.4165L5.5 17.4165L5.5 15.5832L13.3833 15.5832L2.75 4.94984L4.03333 3.6665Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
    </div>
  </>}
</>
  );
}