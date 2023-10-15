import React from 'react';

export function ContentCards(props){
	const {
    size = "L(LHN)",
    state = "Default",
    extraPadding = "No",
    tag = "No"
  } = props;
  return (
      <>
  {(size == "L(LHN)" && state == "Default" && extraPadding == "No" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[518px] items-end bg-white opacity-100 p-0 left-[70px] top-[77px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && state == "Default" && extraPadding == "No" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[518px] items-end bg-white opacity-100 p-0 left-[655px] top-[77px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Default" && extraPadding == "No" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[526px] items-end bg-white opacity-100 p-0 left-[1303px] top-[77px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Default" && extraPadding == "No" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[526px] items-end bg-white opacity-100 p-0 left-[1864px] top-[77px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Hover" && extraPadding == "No" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[526px] items-end bg-white opacity-100 p-0 left-[1303px] top-[604px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Hover" && extraPadding == "No" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[526px] items-end bg-white opacity-100 p-0 left-[1864px] top-[604px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <div className="01InteractionMiniRightArrow w-0 h-0 absolute opacity-100 p-0 rounded-[37.17128372192383px] left-[477px] top-[179px]">
          </div>
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Hover" && extraPadding == "Yes" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[526px] items-end bg-white opacity-100 p-0 left-[1305px] top-[1706px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-24 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Hover" && extraPadding == "Yes" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[526px] items-end bg-white opacity-100 p-0 left-[1866px] top-[1706px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2446 49.0778L29.8316 52.6359L52.7917 53.0381L50.9744 30.5942L47.6277 34.0832L48.6787 47.0633L25.331 24.6677L22.8269 27.2782L45.7822 49.2974L33.2446 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-24 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Default" && extraPadding == "Yes" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[526px] items-end bg-white opacity-100 p-0 left-[1303px] top-[1151px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-24 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Default" && extraPadding == "Yes" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[526px] items-end bg-white opacity-100 p-0 left-[1864px] top-[1151px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-24 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && state == "Default" && extraPadding == "Yes" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[518px] items-end bg-white opacity-100 p-0 left-[70px] top-[1140px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-24 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && state == "Default" && extraPadding == "Yes" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[518px] items-end bg-white opacity-100 p-0 left-[655px] top-[1140px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-24 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Default" && extraPadding == "No" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[352px] items-end bg-white opacity-100 p-0 left-[2543px] top-[77px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Default" && extraPadding == "No" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[352px] items-end bg-white opacity-100 p-0 left-[2928px] top-[77px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Default" && extraPadding == "Yes" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[352px] items-end bg-white opacity-100 p-0 left-[2543px] top-[1151px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-16 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Default" && extraPadding == "Yes" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[352px] items-end bg-white opacity-100 p-0 left-[2928px] top-[1151px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-16 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Hover" && extraPadding == "No" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[352px] items-end bg-white opacity-100 p-0 left-[2543px] top-[608px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Hover" && extraPadding == "No" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[352px] items-end bg-white opacity-100 p-0 left-[2928px] top-[608px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2446 49.0778L29.8316 52.6359L52.7917 53.0381L50.9744 30.5942L47.6277 34.0832L48.6787 47.0633L25.331 24.6677L22.8269 27.2782L45.7822 49.2974L33.2446 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Hover" && extraPadding == "Yes" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[352px] items-end bg-white opacity-100 p-0 left-[2543px] top-[1706px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-16 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Hover" && extraPadding == "Yes" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[352px] items-end bg-white opacity-100 p-0 left-[2928px] top-[1706px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2446 49.0778L29.8316 52.6359L52.7917 53.0381L50.9744 30.5942L47.6277 34.0832L48.6787 47.0633L25.331 24.6677L22.8269 27.2782L45.7822 49.2974L33.2446 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-16 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Default" && extraPadding == "No" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[343px] items-end bg-white opacity-100 p-0 left-[3468px] top-[79px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Default" && extraPadding == "No" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[343px] items-end bg-white opacity-100 p-0 left-[3830px] top-[79px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Default" && extraPadding == "Yes" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[343px] items-end bg-white opacity-100 p-0 left-[3468px] top-[1153px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Default" && extraPadding == "Yes" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[343px] items-end bg-white opacity-100 p-0 left-[3830px] top-[1153px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Hover" && extraPadding == "No" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[343px] items-end bg-white opacity-100 p-0 left-[3468px] top-[608px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Hover" && extraPadding == "No" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[343px] items-end overflow-hidden bg-white opacity-100 p-0 left-[3830px] top-[608px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={79} height={80} viewBox="0 0 79 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2446 49.0778L29.8316 52.6359L52.7917 53.0381L50.9744 30.5942L47.6277 34.0832L48.6787 47.0633L25.331 24.6677L22.8269 27.2782L45.7822 49.2974L33.2446 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Hover" && extraPadding == "Yes" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[343px] items-end bg-white opacity-100 p-0 left-[3468px] top-[1706px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Hover" && extraPadding == "Yes" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[343px] items-end overflow-hidden bg-white opacity-100 p-0 left-[3830px] top-[1706px] flex">
      <div className="imageAndCopy gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={79} height={80} viewBox="0 0 79 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2446 49.0778L29.8316 52.6359L52.7917 53.0381L50.9744 30.5942L47.6277 34.0832L48.6787 47.0633L25.331 24.6677L22.8269 27.2782L45.7822 49.2974L33.2446 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-1 flex-col items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#282828] text-left tracking-[-0.35px] w-full">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#282828] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && state == "Hover" && extraPadding == "No" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[518px] items-end bg-white opacity-100 p-0 left-[71px] top-[597px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && state == "Hover" && extraPadding == "No" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[518px] items-end bg-white opacity-100 p-0 left-[656px] top-[597px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && state == "Hover" && extraPadding == "Yes" && tag == "No") && <>
    <div className="contentCards gap-0 absolute flex-col w-[518px] items-end bg-white opacity-100 p-0 left-[71px] top-[1695px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-24 flex">
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && state == "Hover" && extraPadding == "Yes" && tag == "Yes") && <>
    <div className="contentCards gap-0 absolute flex-col w-[518px] items-end bg-white opacity-100 p-0 left-[656px] top-[1695px] flex">
      <div className="imageAndCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="image gap-[-81px] flex-col justify-end items-end w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <svg className="01InteractionMiniRightArrow" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M33.2427 49.0778L29.8296 52.6359L52.7897 53.0381L50.9725 30.5942L47.6258 34.0832L48.6767 47.0633L25.329 24.6677L22.825 27.2782L45.7803 49.2974L33.2427 49.0778Z" fill="white" />
          </svg>
        </div>
        <div className="copy gap-2 flex-col items-start w-full opacity-100 pl-3 pr-0 pt-0 pb-24 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#282828] text-left tracking-[-0.35px] w-[506px]">Introduction to GEP-NETs</span>
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#282828] text-left tracking-[0px] w-[506px]">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
        </div>
      </div>
    </div>
  </>}
</>
  );
}