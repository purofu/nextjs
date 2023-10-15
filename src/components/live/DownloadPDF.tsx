import React from 'react';

export function DownloadPDF(props){
	const {
    property1 = "active",
    bG = "dark"
  } = props;
  return (
      <>
  {(property1 == "hover" && bG == "dark") && <>
    <div className="downloadPDF gap-0 absolute flex-row items-start opacity-100 p-0 left-[223px] top-[18px] flex">
      <div className="downloadPDF gap-[-0.8079625368118286px] flex-row items-start border bg-white opacity-100 p-0 border-[#0460a9] flex">
        <div className="download gap-[3.2318501472473145px] flex-row h-10 justify-center items-center opacity-100 px-[18px] py-[12.927400588989258px] flex">
          <span className="downloadPDF font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-center tracking-[0px]">Download PDF </span>
        </div>
        <div className="arrow gap-[3.2318501472473145px] flex-row h-10 justify-center items-center opacity-100 pl-[9.695550918579102px] pr-[6.463700294494629px] py-[12.927400588989258px] border-l-[#0460a9] border-l flex">
          <div className="interactiveIcons w-[18.58px] h-[18.58px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[18.58px] h-[18.58px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.30853 0.03125L6.30853 10.6367L1.43046 5.75863L0.210938 6.99993L7.17961 13.9686L14.1483 6.99993L12.9288 5.75863L8.0507 10.6367L8.0507 0.03125L6.30853 0.03125Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(property1 == "hover" && bG == "light") && <>
    <div className="downloadPDF gap-0 absolute flex-row items-start bg-[#023054] opacity-100 p-0 left-[223px] top-[108px] flex">
      <div className="downloadPDF gap-[-0.8079625368118286px] flex-row items-start border bg-[#023054] opacity-100 p-0 border-[#023054] flex">
        <div className="download gap-[3.2318501472473145px] flex-row h-10 justify-center items-center opacity-100 px-[18px] py-[12.927400588989258px] flex">
          <span className="downloadPDF font-['Volta_Modern_Display'] text-base font-semibold text-white text-center tracking-[0px]">Download PDF </span>
        </div>
        <div className="arrow gap-[3.2318501472473145px] flex-row h-10 justify-center items-center opacity-100 pl-[9.695550918579102px] pr-[6.463700294494629px] py-[12.927400588989258px] border-l-white border-l flex">
          <div className="interactiveIcons w-[18.58px] h-[18.58px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[18.58px] h-[18.58px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.30853 0.03125L6.30853 10.6367L1.43046 5.75863L0.210938 6.99993L7.17961 13.9686L14.1483 6.99993L12.9288 5.75863L8.0507 10.6367L8.0507 0.03125L6.30853 0.03125Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(property1 == "active" && bG == "light") && <>
    <div className="downloadPDF gap-0 absolute flex-row items-start opacity-100 p-0 left-[23px] top-[108px] flex">
      <div className="downloadPDF gap-[-0.8079625368118286px] flex-row items-start border bg-white opacity-100 p-0 border-[#0460a9] flex">
        <div className="download gap-[3.2318501472473145px] flex-row h-10 justify-center items-center opacity-100 px-[18px] py-[12.927400588989258px] flex">
          <span className="downloadPDF font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-center tracking-[0px]">Download PDF </span>
        </div>
        <div className="arrow gap-[3.2318501472473145px] flex-row h-10 justify-center items-center opacity-100 pl-[9.695550918579102px] pr-[6.463700294494629px] py-[12.927400588989258px] border-l-[#0460a9] border-l flex">
          <div className="interactiveIcons w-[18.58px] h-[18.58px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[18.58px] h-[18.58px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.30853 0.03125L6.30853 10.6367L1.43046 5.75863L0.210938 6.99993L7.17961 13.9686L14.1483 6.99993L12.9288 5.75863L8.0507 10.6367L8.0507 0.03125L6.30853 0.03125Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(property1 == "active" && bG == "dark") && <>
    <div className="downloadPDF gap-[-0.8079625368118286px] absolute flex-row items-start border opacity-100 p-0 border-white left-[23px] top-[18px] flex">
      <div className="download gap-[3.2318501472473145px] flex-row h-10 justify-center items-center opacity-100 px-[18px] py-[12.927400588989258px] flex">
        <span className="downloadPDF font-['Volta_Modern_Display'] text-base font-semibold text-white text-center tracking-[0px]">Download PDF </span>
      </div>
      <div className="arrow gap-[3.2318501472473145px] flex-row h-10 justify-center items-center opacity-100 pl-[9.695550918579102px] pr-[6.463700294494629px] py-[12.927400588989258px] border-l-white border-l flex">
        <div className="interactiveIcons w-[18.58px] h-[18.58px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[18.58px] h-[18.58px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.30853 0.03125L6.30853 10.6367L1.43046 5.75863L0.210938 6.99993L7.17961 13.9686L14.1483 6.99993L12.9288 5.75863L8.0507 10.6367L8.0507 0.03125L6.30853 0.03125Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
</>
  );
}