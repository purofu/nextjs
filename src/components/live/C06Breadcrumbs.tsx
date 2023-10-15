import React from 'react';

export function C06Breadcrumbs(props){
  return (
      <>
  {(size == "XL-L" && state == "Default" && shareButtons == "No") && <>
    <div className="c06Breadcrumbs gap-4 absolute flex-col items-start bg-white opacity-100 p-0 left-4 top-4 flex">
      <div className="allLinks gap-2 flex-row flex-wrap w-[840px] items-end opacity-100 p-0 flex">
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="current gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#023054] text-left tracking-[0px]">GEP-NETs</span>
        </div>
      </div>
      <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "XL-L" && state == "Default" && shareButtons == "Yes") && <>
    <div className="c06Breadcrumbs gap-0 absolute flex-col w-[1036px] items-start bg-white opacity-100 p-0 left-4 top-[400px] flex">
      <div className="frame483123 gap-0 flex-col items-end w-full opacity-100 p-0 flex">
        <div className="share gap-2 flex-row justify-end items-end opacity-100 p-0 flex">
          <div className="email gap-1 flex-row w-[42px] h-[42px] justify-center items-center opacity-100 p-0 flex">
            <div className="interactiveIcons w-[26px] h-[26px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[26px] h-[26px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99997 13.1041L4.37503 8.47919L5.51668 7.30421L8.1875 9.97503V0.875H9.81244V9.97503L12.4833 7.30421L13.6249 8.47919L8.99997 13.1041ZM2.83334 17.1249C2.28611 17.1249 1.82292 16.9354 1.44375 16.5562C1.06458 16.177 0.875 15.7138 0.875 15.1666V12.2291H2.49997V15.1666C2.49997 15.2499 2.53469 15.3264 2.60413 15.3958C2.67359 15.4653 2.75 15.5 2.83334 15.5H15.1666C15.2499 15.5 15.3263 15.4653 15.3958 15.3958C15.4653 15.3264 15.5 15.2499 15.5 15.1666V12.2291H17.1249V15.1666C17.1249 15.7138 16.9354 16.177 16.5562 16.5562C16.177 16.9354 15.7138 17.1249 15.1666 17.1249H2.83334Z" fill="#212121" />
              </svg>
            </div>
          </div>
          <div className="email gap-1 flex-row w-[42px] h-[42px] justify-center items-center opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.99998 8.55763L1.99998 3.44225V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H17.6923C17.782 14 17.8557 13.9711 17.9134 13.9134C17.9711 13.8557 18 13.782 18 13.6923V3.44225L9.99998 8.55763ZM9.99998 6.99998L17.8461 1.99998H2.15383L9.99998 6.99998ZM1.99998 3.44225V1.99998V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H1.99998V3.44225Z" fill="#212121" />
              </svg>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="allLinks gap-2 flex-row flex-wrap w-[840px] items-end absolute opacity-100 p-0 left-0 top-2 flex">
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="current gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#023054] text-left tracking-[0px]">GEP-NETs</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "XL-L" && state == "Hover" && shareButtons == "Yes") && <>
    <div className="c06Breadcrumbs gap-0 absolute flex-col items-start bg-white opacity-100 p-0 left-[1875px] top-[400px] flex">
      <div className="frame483123 gap-0 flex-col items-end w-full opacity-100 p-0 flex">
        <div className="share gap-2 flex-row justify-end items-end opacity-100 p-0 flex">
          <div className="email gap-1 flex-row w-[42px] h-[42px] justify-center items-center opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.99998 8.55763L1.99998 3.44225V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H17.6923C17.782 14 17.8557 13.9711 17.9134 13.9134C17.9711 13.8557 18 13.782 18 13.6923V3.44225L9.99998 8.55763ZM9.99998 6.99998L17.8461 1.99998H2.15383L9.99998 6.99998ZM1.99998 3.44225V1.99998V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H1.99998V3.44225Z" fill="#212121" />
              </svg>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        <div className="downlaod gap-4 flex-col items-end absolute opacity-100 p-0 left-[869px] top-0 flex">
          <div className="pageOptionsdownload gap-1 flex-row items-start border bg-[#023054] opacity-100 p-0 border-[#023054] flex">
            <div className="download w-[26px] h-[26px] absolute p-0">
              <div className="boundingBox w-[26px] h-[26px] relative bg-[#d9d9d9] opacity-100 p-0" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99997 13.1041L4.37503 8.47919L5.51668 7.30421L8.1875 9.97503V0.875H9.81244V9.97503L12.4833 7.30421L13.6249 8.47919L8.99997 13.1041ZM2.83334 17.1249C2.28611 17.1249 1.82292 16.9354 1.44375 16.5562C1.06458 16.177 0.875 15.7138 0.875 15.1666V12.2291H2.49997V15.1666C2.49997 15.2499 2.53469 15.3264 2.60413 15.3958C2.67359 15.4653 2.75 15.5 2.83334 15.5H15.1666C15.2499 15.5 15.3263 15.4653 15.3958 15.3958C15.4653 15.3264 15.5 15.2499 15.5 15.1666V12.2291H17.1249V15.1666C17.1249 15.7138 16.9354 16.177 16.5562 16.5562C16.177 16.9354 15.7138 17.1249 15.1666 17.1249H2.83334Z" fill="white" />
              </svg>
            </div>
          </div>
          <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Download as PDF</span>
        </div>
      </div>
      <div className="allLinks gap-2 flex-row flex-wrap w-[840px] items-end absolute opacity-100 p-0 left-0 top-2 flex">
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="current gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#023054] text-left tracking-[0px]">GEP-NETs</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "XL-L" && state == "Hover") && <>
    <div className="c06Breadcrumbs gap-4 absolute flex-col items-start bg-white opacity-100 p-0 left-[1875px] top-4 flex">
      <div className="allLinks gap-2 flex-row flex-wrap w-[840px] items-end opacity-100 p-0 flex">
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0460a9] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-left tracking-[0px]">Page Title •</span>
        </div>
        <div className="current gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#023054] text-left tracking-[0px]">GEP-NETs</span>
        </div>
      </div>
      <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "M-S" && state == "Default" && shareButtons == "No") && <>
    <div className="c06Breadcrumbs gap-2 absolute flex-col w-[327px] items-start bg-white opacity-100 p-0 left-4 top-[104px] flex">
      <div className="pages gap-2 flex-row flex-wrap w-[327px] items-start opacity-100 p-0 flex">
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="current gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#023054] text-left tracking-[0px]">GEP-NETs</span>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "M-S" && state == "Default" && shareButtons == "Yes") && <>
    <div className="c06Breadcrumbs gap-1 absolute flex-col w-[327px] items-start bg-white opacity-100 p-0 left-4 top-[477px] flex">
      <div className="frame483134 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="pages gap-2 flex-row flex-wrap w-[327px] items-start opacity-100 p-0 flex">
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="current gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#023054] text-left tracking-[0px]">GEP-NETs</span>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="share gap-2 flex-row justify-end items-end opacity-100 p-0 flex">
        <div className="email gap-1 flex-row w-[42px] h-[42px] justify-center items-center opacity-100 p-0 flex">
          <div className="interactiveIcons w-[26px] h-[26px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[26px] h-[26px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.99997 13.1041L4.37503 8.47919L5.51668 7.30421L8.1875 9.97503V0.875H9.81244V9.97503L12.4833 7.30421L13.6249 8.47919L8.99997 13.1041ZM2.83334 17.1249C2.28611 17.1249 1.82292 16.9354 1.44375 16.5562C1.06458 16.177 0.875 15.7138 0.875 15.1666V12.2291H2.49997V15.1666C2.49997 15.2499 2.53469 15.3264 2.60413 15.3958C2.67359 15.4653 2.75 15.5 2.83334 15.5H15.1666C15.2499 15.5 15.3263 15.4653 15.3958 15.3958C15.4653 15.3264 15.5 15.2499 15.5 15.1666V12.2291H17.1249V15.1666C17.1249 15.7138 16.9354 16.177 16.5562 16.5562C16.177 16.9354 15.7138 17.1249 15.1666 17.1249H2.83334Z" fill="#212121" />
            </svg>
          </div>
        </div>
        <div className="email gap-1 flex-row w-[42px] h-[42px] justify-center items-center opacity-100 p-0 flex">
          <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.99998 8.55763L1.99998 3.44225V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H17.6923C17.782 14 17.8557 13.9711 17.9134 13.9134C17.9711 13.8557 18 13.782 18 13.6923V3.44225L9.99998 8.55763ZM9.99998 6.99998L17.8461 1.99998H2.15383L9.99998 6.99998ZM1.99998 3.44225V1.99998V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H1.99998V3.44225Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M-S" && state == "Hover" && shareButtons == "Yes") && <>
    <div className="c06Breadcrumbs gap-0 absolute flex-col w-[327px] items-start bg-white opacity-100 p-0 left-[1875px] top-[477px] flex">
      <div className="frame483134 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="pages gap-2 flex-row flex-wrap w-[327px] items-start opacity-100 p-0 flex">
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
          </div>
          <div className="current gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#023054] text-left tracking-[0px]">GEP-NETs</span>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="share gap-2 flex-row justify-end items-end opacity-100 p-0 flex">
        <div className="email gap-4 flex-col items-start opacity-100 p-0 flex">
          <div className="pageOptionsdownload gap-1 flex-row items-start border bg-[#023054] opacity-100 p-0 border-[#023054] flex">
            <div className="download w-[26px] h-[26px] absolute p-0">
              <div className="boundingBox w-[26px] h-[26px] relative bg-[#d9d9d9] opacity-100 p-0" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99997 13.1041L4.37503 8.47919L5.51668 7.30421L8.1875 9.97503V0.875H9.81244V9.97503L12.4833 7.30421L13.6249 8.47919L8.99997 13.1041ZM2.83334 17.1249C2.28611 17.1249 1.82292 16.9354 1.44375 16.5562C1.06458 16.177 0.875 15.7138 0.875 15.1666V12.2291H2.49997V15.1666C2.49997 15.2499 2.53469 15.3264 2.60413 15.3958C2.67359 15.4653 2.75 15.5 2.83334 15.5H15.1666C15.2499 15.5 15.3263 15.4653 15.3958 15.3958C15.4653 15.3264 15.5 15.2499 15.5 15.1666V12.2291H17.1249V15.1666C17.1249 15.7138 16.9354 16.177 16.5562 16.5562C16.177 16.9354 15.7138 17.1249 15.1666 17.1249H2.83334Z" fill="white" />
              </svg>
            </div>
          </div>
          <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Download as PDF</span>
        </div>
        <div className="email gap-1 flex-row w-[42px] h-[42px] justify-center items-center absolute opacity-100 p-0 left-[50px] top-0 flex">
          <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.99998 8.55763L1.99998 3.44225V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H17.6923C17.782 14 17.8557 13.9711 17.9134 13.9134C17.9711 13.8557 18 13.782 18 13.6923V3.44225L9.99998 8.55763ZM9.99998 6.99998L17.8461 1.99998H2.15383L9.99998 6.99998ZM1.99998 3.44225V1.99998V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H1.99998V3.44225Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M-S" && state == "Hover") && <>
    <div className="c06Breadcrumbs gap-2 absolute flex-col w-[327px] items-start bg-white opacity-100 p-0 left-[1875px] top-[104px] flex">
      <div className="pages gap-2 flex-row flex-wrap w-[327px] items-start opacity-100 p-0 flex">
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0460a9] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="prevs gap-3 flex-row items-start opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-left tracking-[0px]">Page Title <span className="font-normal"> •</span></span>
        </div>
        <div className="current gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="pageTitle font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#023054] text-left tracking-[0px]">GEP-NETs</span>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
</>
  );
}