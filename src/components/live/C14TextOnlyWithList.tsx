import React from 'react';

export function C14TextOnlyWithList(props){
	const {
    size = "L(LHN)",
    sectionHead = "Yes"
  } = props;
  return (
      <>
  {(size == "L" && sectionHead == "Yes") && <>
    <div className="c14TextOnlyWithList gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 pl-12 pr-0 pt-16 pb-24 left-[1545px] top-2 flex">
      <div className="sectionHeading gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482660 gap-16 flex-col w-[1344px] items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[1116px]">Lorem ipsum dolor</span>
        <div className="allContent gap-[45px] flex-row w-[1344px] items-start opacity-100 p-0 flex">
          <span className="intro font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[660px]">Lorem ipsum dolor sit amet consectetur. Luc tus ut sagittis auctor molestie vel. Ut phasellus pretium ultricies pellentesque volutpat. Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. </span>
          <div className="content gap-8 flex-row w-[639px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="copy gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame482627 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Foregut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Esophagus, stomach, proximal duodenum, liver, and pancreas</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="4 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Midgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal duodenum, ileum, jejunum, ascending colon, and proximal two-thirds of transverse colon</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="5 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Hindgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal one-third of transverse colon, descending colon, sigmoid colon, and rectum</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
              </div>
              <div className="link gap-0 flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 container flex">
                <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Qualifying</span>
                  <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00913 12.3849L12.3496 9.04437L11.3925 8.08719L9.6966 9.78305V5.60689H8.31283V9.78305L6.61697 8.08719L5.65979 9.04437L9.00913 12.3849ZM9.00184 17.7086C7.7974 17.7086 6.66529 17.4801 5.6055 17.0229C4.54569 16.5658 3.62382 15.9455 2.83987 15.1619C2.0559 14.3783 1.43527 13.4568 0.977957 12.3975C0.520647 11.3382 0.291992 10.2063 0.291992 9.00184C0.291992 7.7974 0.520548 6.66529 0.977659 5.6055C1.43477 4.54569 2.05512 3.62382 2.83872 2.83987C3.62233 2.0559 4.54381 1.43527 5.60314 0.977958C6.66245 0.520648 7.79433 0.291992 8.99877 0.291992C10.2032 0.291992 11.3353 0.520549 12.3951 0.97766C13.4549 1.43477 14.3768 2.05512 15.1607 2.83872C15.9447 3.62233 16.5653 4.54381 17.0227 5.60314C17.48 6.66245 17.7086 7.79433 17.7086 8.99877C17.7086 10.2032 17.4801 11.3353 17.0229 12.3951C16.5658 13.4549 15.9455 14.3768 15.1619 15.1607C14.3783 15.9447 13.4568 16.5653 12.3975 17.0226C11.3382 17.48 10.2063 17.7086 9.00184 17.7086ZM9.0003 16.3336C11.0475 16.3336 12.7816 15.6232 14.2024 14.2024C15.6232 12.7816 16.3336 11.0475 16.3336 9.0003C16.3336 6.95308 15.6232 5.21905 14.2024 3.79822C12.7816 2.37739 11.0475 1.66697 9.0003 1.66697C6.95308 1.66697 5.21905 2.37739 3.79822 3.79822C2.37739 5.21905 1.66697 6.95308 1.66697 9.0003C1.66697 11.0475 2.37739 12.7816 3.79822 14.2024C5.21905 15.6232 6.95308 16.3336 9.0003 16.3336Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && sectionHead == "No") && <>
    <div className="c14TextOnlyWithList gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 pl-12 pr-0 pt-16 pb-24 left-[1545px] top-[1150px] flex">
      <div className="frame482661 gap-16 flex-col w-[1344px] items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[1116px]">Lorem ipsum dolor</span>
        <div className="allContent gap-[45px] flex-row w-[1344px] items-start opacity-100 p-0 flex">
          <span className="intro font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[660px]">Lorem ipsum dolor sit amet consectetur. Luc tus ut sagittis auctor molestie vel. Ut phasellus pretium ultricies pellentesque volutpat. Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. </span>
          <div className="content gap-8 flex-row w-[639px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="copy gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame482627 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Foregut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Esophagus, stomach, proximal duodenum, liver, and pancreas</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="4 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Midgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal duodenum, ileum, jejunum, ascending colon, and proximal two-thirds of transverse colon</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="5 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Hindgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal one-third of transverse colon, descending colon, sigmoid colon, and rectum</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
              </div>
              <div className="link gap-0 flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 container flex">
                <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Qualifying</span>
                  <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00913 12.3849L12.3496 9.04437L11.3925 8.08719L9.6966 9.78305V5.60689H8.31283V9.78305L6.61697 8.08719L5.65979 9.04437L9.00913 12.3849ZM9.00184 17.7086C7.7974 17.7086 6.66529 17.4801 5.6055 17.0229C4.54569 16.5658 3.62382 15.9455 2.83987 15.1619C2.0559 14.3783 1.43527 13.4568 0.977957 12.3975C0.520647 11.3382 0.291992 10.2063 0.291992 9.00184C0.291992 7.7974 0.520548 6.66529 0.977659 5.6055C1.43477 4.54569 2.05512 3.62382 2.83872 2.83987C3.62233 2.0559 4.54381 1.43527 5.60314 0.977958C6.66245 0.520648 7.79433 0.291992 8.99877 0.291992C10.2032 0.291992 11.3353 0.520549 12.3951 0.97766C13.4549 1.43477 14.3768 2.05512 15.1607 2.83872C15.9447 3.62233 16.5653 4.54381 17.0227 5.60314C17.48 6.66245 17.7086 7.79433 17.7086 8.99877C17.7086 10.2032 17.4801 11.3353 17.0229 12.3951C16.5658 13.4549 15.9455 14.3768 15.1619 15.1607C14.3783 15.9447 13.4568 16.5653 12.3975 17.0226C11.3382 17.48 10.2063 17.7086 9.00184 17.7086ZM9.0003 16.3336C11.0475 16.3336 12.7816 15.6232 14.2024 14.2024C15.6232 12.7816 16.3336 11.0475 16.3336 9.0003C16.3336 6.95308 15.6232 5.21905 14.2024 3.79822C12.7816 2.37739 11.0475 1.66697 9.0003 1.66697C6.95308 1.66697 5.21905 2.37739 3.79822 3.79822C2.37739 5.21905 1.66697 6.95308 1.66697 9.0003C1.66697 11.0475 2.37739 12.7816 3.79822 14.2024C5.21905 15.6232 6.95308 16.3336 9.0003 16.3336Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && sectionHead == "Yes") && <>
    <div className="c14TextOnlyWithList gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 pl-16 pr-0 pt-16 pb-24 left-2 top-2 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1100px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Qualification</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482659 gap-6 flex-col items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[1036px]">Lorem ipsum dolor</span>
        <div className="allContent gap-12 flex-row w-[1036px] items-start opacity-100 p-0 flex">
          <span className="intro font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[482px]">Lorem ipsum dolor sit amet consectetur. Luc tus ut sagittis auctor molestie vel. Ut phasellus pretium ultricies pellentesque volutpat. Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. </span>
          <div className="content gap-8 flex-row w-[506px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="copy gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame482627 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Foregut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Esophagus, stomach, proximal duodenum, liver, and pancreas</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="4 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Midgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal duodenum, ileum, jejunum, ascending colon, and proximal two-thirds of transverse colon</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="5 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Hindgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal one-third of transverse colon, descending colon, sigmoid colon, and rectum</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
              </div>
              <div className="link gap-0 flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 container flex">
                <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Qualifying</span>
                  <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00815 12.3849L12.3487 9.04437L11.3915 8.08719L9.69563 9.78305V5.60689H8.31185V9.78305L6.61599 8.08719L5.65881 9.04437L9.00815 12.3849ZM9.00086 17.7086C7.79642 17.7086 6.66431 17.4801 5.60452 17.0229C4.54472 16.5658 3.62284 15.9455 2.83889 15.1619C2.05493 14.3783 1.43429 13.4568 0.97698 12.3975C0.519671 11.3382 0.291016 10.2063 0.291016 9.00184C0.291016 7.7974 0.519571 6.66529 0.976683 5.6055C1.43379 4.54569 2.05415 3.62382 2.83775 2.83987C3.62136 2.0559 4.54283 1.43527 5.60216 0.977958C6.66148 0.520648 7.79335 0.291992 8.99779 0.291992C10.2022 0.291992 11.3343 0.520549 12.3941 0.97766C13.4539 1.43477 14.3758 2.05512 15.1598 2.83872C15.9437 3.62233 16.5644 4.54381 17.0217 5.60314C17.479 6.66245 17.7076 7.79433 17.7076 8.99877C17.7076 10.2032 17.4791 11.3353 17.022 12.3951C16.5649 13.4549 15.9445 14.3768 15.1609 15.1607C14.3773 15.9447 13.4558 16.5653 12.3965 17.0226C11.3372 17.48 10.2053 17.7086 9.00086 17.7086ZM8.99933 16.3336C11.0465 16.3336 12.7806 15.6232 14.2014 14.2024C15.6222 12.7816 16.3327 11.0475 16.3327 9.0003C16.3327 6.95308 15.6222 5.21905 14.2014 3.79822C12.7806 2.37739 11.0465 1.66697 8.99933 1.66697C6.9521 1.66697 5.21808 2.37739 3.79724 3.79822C2.37641 5.21905 1.66599 6.95308 1.66599 9.0003C1.66599 11.0475 2.37641 12.7816 3.79724 14.2024C5.21808 15.6232 6.9521 16.3336 8.99933 16.3336Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && sectionHead == "No") && <>
    <div className="c14TextOnlyWithList gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 pl-16 pr-0 pt-16 pb-24 left-2 top-[1150px] flex">
      <div className="frame482659 gap-16 flex-col items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[1036px]">Lorem ipsum dolor</span>
        <div className="allContent gap-12 flex-row w-[1036px] items-start opacity-100 p-0 flex">
          <span className="intro font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[482px]">Lorem ipsum dolor sit amet consectetur. Luc tus ut sagittis auctor molestie vel. Ut phasellus pretium ultricies pellentesque volutpat. Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. </span>
          <div className="content gap-8 flex-row w-[506px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="copy gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame482627 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Foregut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Esophagus, stomach, proximal duodenum, liver, and pancreas</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="4 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Midgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal duodenum, ileum, jejunum, ascending colon, and proximal two-thirds of transverse colon</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="5 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Hindgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal one-third of transverse colon, descending colon, sigmoid colon, and rectum</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
              </div>
              <div className="link gap-0 flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 container flex">
                <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Qualifying</span>
                  <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00815 12.3849L12.3487 9.04437L11.3915 8.08719L9.69563 9.78305V5.60689H8.31185V9.78305L6.61599 8.08719L5.65881 9.04437L9.00815 12.3849ZM9.00086 17.7086C7.79642 17.7086 6.66431 17.4801 5.60452 17.0229C4.54472 16.5658 3.62284 15.9455 2.83889 15.1619C2.05493 14.3783 1.43429 13.4568 0.97698 12.3975C0.519671 11.3382 0.291016 10.2063 0.291016 9.00184C0.291016 7.7974 0.519571 6.66529 0.976683 5.6055C1.43379 4.54569 2.05415 3.62382 2.83775 2.83987C3.62136 2.0559 4.54283 1.43527 5.60216 0.977958C6.66148 0.520648 7.79335 0.291992 8.99779 0.291992C10.2022 0.291992 11.3343 0.520549 12.3941 0.97766C13.4539 1.43477 14.3758 2.05512 15.1598 2.83872C15.9437 3.62233 16.5644 4.54381 17.0217 5.60314C17.479 6.66245 17.7076 7.79433 17.7076 8.99877C17.7076 10.2032 17.4791 11.3353 17.022 12.3951C16.5649 13.4549 15.9445 14.3768 15.1609 15.1607C14.3773 15.9447 13.4558 16.5653 12.3965 17.0226C11.3372 17.48 10.2053 17.7086 9.00086 17.7086ZM8.99933 16.3336C11.0465 16.3336 12.7806 15.6232 14.2014 14.2024C15.6222 12.7816 16.3327 11.0475 16.3327 9.0003C16.3327 6.95308 15.6222 5.21905 14.2014 3.79822C12.7806 2.37739 11.0465 1.66697 8.99933 1.66697C6.9521 1.66697 5.21808 2.37739 3.79724 3.79822C2.37641 5.21905 1.66599 6.95308 1.66599 9.0003C1.66599 11.0475 2.37641 12.7816 3.79724 14.2024C5.21808 15.6232 6.9521 16.3336 8.99933 16.3336Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "Yes") && <>
    <div className="c14TextOnlyWithList gap-12 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-10 pb-16 px-4 left-[4490px] top-2 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[359px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482659 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[32px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Lorem ipsum dolor</span>
        <div className="allContent gap-10 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="intro font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Luctus ut sagittis auctor molestie vel. Ut phasellus pretium ultricies pellentesque volutpat. Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. </span>
          <div className="content gap-8 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="copy gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame482627 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Foregut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Esophagus, stomach, proximal duodenum, liver, and pancreas</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="4 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Midgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal duodenum, ileum, jejunum, ascending colon, and proximal two-thirds of transverse colon</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="5 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Hindgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal one-third of transverse colon, descending colon, sigmoid colon, and rectum</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
              </div>
              <div className="link gap-0 flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 container flex">
                <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Qualifying</span>
                  <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00913 12.3849L12.3496 9.04437L11.3925 8.08719L9.6966 9.78305V5.60689H8.31283V9.78305L6.61697 8.08719L5.65979 9.04437L9.00913 12.3849ZM9.00184 17.7086C7.7974 17.7086 6.66529 17.4801 5.6055 17.0229C4.54569 16.5658 3.62382 15.9455 2.83987 15.1619C2.0559 14.3783 1.43527 13.4568 0.977957 12.3975C0.520647 11.3382 0.291992 10.2063 0.291992 9.00184C0.291992 7.7974 0.520548 6.66529 0.977659 5.6055C1.43477 4.54569 2.05512 3.62382 2.83872 2.83987C3.62233 2.0559 4.54381 1.43527 5.60314 0.977958C6.66245 0.520648 7.79433 0.291992 8.99877 0.291992C10.2032 0.291992 11.3353 0.520549 12.3951 0.97766C13.4549 1.43477 14.3768 2.05512 15.1607 2.83872C15.9447 3.62233 16.5653 4.54381 17.0227 5.60314C17.48 6.66245 17.7086 7.79433 17.7086 8.99877C17.7086 10.2032 17.4801 11.3353 17.0229 12.3951C16.5658 13.4549 15.9455 14.3768 15.1619 15.1607C14.3783 15.9447 13.4568 16.5653 12.3975 17.0226C11.3382 17.48 10.2063 17.7086 9.00184 17.7086ZM9.0003 16.3336C11.0475 16.3336 12.7816 15.6232 14.2024 14.2024C15.6232 12.7816 16.3336 11.0475 16.3336 9.0003C16.3336 6.95308 15.6232 5.21905 14.2024 3.79822C12.7816 2.37739 11.0475 1.66697 9.0003 1.66697C6.95308 1.66697 5.21905 2.37739 3.79822 3.79822C2.37739 5.21905 1.66697 6.95308 1.66697 9.0003C1.66697 11.0475 2.37739 12.7816 3.79822 14.2024C5.21905 15.6232 6.95308 16.3336 9.0003 16.3336Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "No") && <>
    <div className="c14TextOnlyWithList gap-12 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-10 pb-16 px-4 left-[4490px] top-[1150px] flex">
      <div className="frame482660 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[32px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Lorem ipsum dolor</span>
        <div className="allContent gap-10 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="intro font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Luctus ut sagittis auctor molestie vel. Ut phasellus pretium ultricies pellentesque volutpat. Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. </span>
          <div className="content gap-8 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="copy gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame482627 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Foregut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Esophagus, stomach, proximal duodenum, liver, and pancreas</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="4 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Midgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal duodenum, ileum, jejunum, ascending colon, and proximal two-thirds of transverse colon</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="5 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Hindgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Distal one-third of transverse colon, descending colon, sigmoid colon, and rectum</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
              </div>
              <div className="link gap-0 flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 container flex">
                <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Qualifying</span>
                  <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00913 12.3849L12.3496 9.04437L11.3925 8.08719L9.6966 9.78305V5.60689H8.31283V9.78305L6.61697 8.08719L5.65979 9.04437L9.00913 12.3849ZM9.00184 17.7086C7.7974 17.7086 6.66529 17.4801 5.6055 17.0229C4.54569 16.5658 3.62382 15.9455 2.83987 15.1619C2.0559 14.3783 1.43527 13.4568 0.977957 12.3975C0.520647 11.3382 0.291992 10.2063 0.291992 9.00184C0.291992 7.7974 0.520548 6.66529 0.977659 5.6055C1.43477 4.54569 2.05512 3.62382 2.83872 2.83987C3.62233 2.0559 4.54381 1.43527 5.60314 0.977958C6.66245 0.520648 7.79433 0.291992 8.99877 0.291992C10.2032 0.291992 11.3353 0.520549 12.3951 0.97766C13.4549 1.43477 14.3768 2.05512 15.1607 2.83872C15.9447 3.62233 16.5653 4.54381 17.0227 5.60314C17.48 6.66245 17.7086 7.79433 17.7086 8.99877C17.7086 10.2032 17.4801 11.3353 17.0229 12.3951C16.5658 13.4549 15.9455 14.3768 15.1619 15.1607C14.3783 15.9447 13.4568 16.5653 12.3975 17.0226C11.3382 17.48 10.2063 17.7086 9.00184 17.7086ZM9.0003 16.3336C11.0475 16.3336 12.7816 15.6232 14.2024 14.2024C15.6232 12.7816 16.3336 11.0475 16.3336 9.0003C16.3336 6.95308 15.6232 5.21905 14.2024 3.79822C12.7816 2.37739 11.0475 1.66697 9.0003 1.66697C6.95308 1.66697 5.21905 2.37739 3.79822 3.79822C2.37739 5.21905 1.66697 6.95308 1.66697 9.0003C1.66697 11.0475 2.37739 12.7816 3.79822 14.2024C5.21905 15.6232 6.95308 16.3336 9.0003 16.3336Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "Yes") && <>
    <div className="c14TextOnlyWithList gap-10 absolute flex-col w-[768px] items-start overflow-hidden bg-white opacity-100 pt-10 pb-16 px-8 left-[3267px] top-2 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[736px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482659 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Lorem ipsum dolor</span>
        <div className="allContent gap-10 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="intro font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Luctus ut sagittis auctor molestie vel. Ut phasellus pretium ultricies pellentesque volutpat. Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. </span>
          <div className="content gap-8 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="copy gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame482627 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Foregut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Esophagus, stomach, proximal duodenum, liver, and pancreas</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="4 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Midgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Distal duodenum, ileum, jejunum, ascending colon, and proximal two-thirds of transverse colon</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="5 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Hindgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Distal one-third of transverse colon, descending colon, sigmoid colon, and rectum</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
              </div>
              <div className="link gap-0 flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 container flex">
                <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Qualifying</span>
                  <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00913 12.3849L12.3496 9.04437L11.3925 8.08719L9.6966 9.78305V5.60689H8.31283V9.78305L6.61697 8.08719L5.65979 9.04437L9.00913 12.3849ZM9.00184 17.7086C7.7974 17.7086 6.66529 17.4801 5.6055 17.0229C4.54569 16.5658 3.62382 15.9455 2.83987 15.1619C2.0559 14.3783 1.43527 13.4568 0.977957 12.3975C0.520647 11.3382 0.291992 10.2063 0.291992 9.00184C0.291992 7.7974 0.520548 6.66529 0.977659 5.6055C1.43477 4.54569 2.05512 3.62382 2.83872 2.83987C3.62233 2.0559 4.54381 1.43527 5.60314 0.977958C6.66245 0.520648 7.79433 0.291992 8.99877 0.291992C10.2032 0.291992 11.3353 0.520549 12.3951 0.97766C13.4549 1.43477 14.3768 2.05512 15.1607 2.83872C15.9447 3.62233 16.5653 4.54381 17.0227 5.60314C17.48 6.66245 17.7086 7.79433 17.7086 8.99877C17.7086 10.2032 17.4801 11.3353 17.0229 12.3951C16.5658 13.4549 15.9455 14.3768 15.1619 15.1607C14.3783 15.9447 13.4568 16.5653 12.3975 17.0226C11.3382 17.48 10.2063 17.7086 9.00184 17.7086ZM9.0003 16.3336C11.0475 16.3336 12.7816 15.6232 14.2024 14.2024C15.6232 12.7816 16.3336 11.0475 16.3336 9.0003C16.3336 6.95308 15.6232 5.21905 14.2024 3.79822C12.7816 2.37739 11.0475 1.66697 9.0003 1.66697C6.95308 1.66697 5.21905 2.37739 3.79822 3.79822C2.37739 5.21905 1.66697 6.95308 1.66697 9.0003C1.66697 11.0475 2.37739 12.7816 3.79822 14.2024C5.21905 15.6232 6.95308 16.3336 9.0003 16.3336Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "No") && <>
    <div className="c14TextOnlyWithList gap-10 absolute flex-col w-[768px] items-start overflow-hidden bg-white opacity-100 pt-10 pb-16 px-8 left-[3267px] top-[1150px] flex">
      <div className="frame482660 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Lorem ipsum dolor</span>
        <div className="allContent gap-10 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="intro font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Luctus ut sagittis auctor molestie vel. Ut phasellus pretium ultricies pellentesque volutpat. Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. </span>
          <div className="content gap-8 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="copy gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame482627 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Foregut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Esophagus, stomach, proximal duodenum, liver, and pancreas</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="4 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Midgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Distal duodenum, ileum, jejunum, ascending colon, and proximal two-thirds of transverse colon</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
                <div className="5 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Hindgut tumors</span>
                    <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Distal one-third of transverse colon, descending colon, sigmoid colon, and rectum</span>
                  </div>
                  <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
                </div>
              </div>
              <div className="link gap-0 flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 container flex">
                <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Qualifying</span>
                  <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00913 12.3849L12.3496 9.04437L11.3925 8.08719L9.6966 9.78305V5.60689H8.31283V9.78305L6.61697 8.08719L5.65979 9.04437L9.00913 12.3849ZM9.00184 17.7086C7.7974 17.7086 6.66529 17.4801 5.6055 17.0229C4.54569 16.5658 3.62382 15.9455 2.83987 15.1619C2.0559 14.3783 1.43527 13.4568 0.977957 12.3975C0.520647 11.3382 0.291992 10.2063 0.291992 9.00184C0.291992 7.7974 0.520548 6.66529 0.977659 5.6055C1.43477 4.54569 2.05512 3.62382 2.83872 2.83987C3.62233 2.0559 4.54381 1.43527 5.60314 0.977958C6.66245 0.520648 7.79433 0.291992 8.99877 0.291992C10.2032 0.291992 11.3353 0.520549 12.3951 0.97766C13.4549 1.43477 14.3768 2.05512 15.1607 2.83872C15.9447 3.62233 16.5653 4.54381 17.0227 5.60314C17.48 6.66245 17.7086 7.79433 17.7086 8.99877C17.7086 10.2032 17.4801 11.3353 17.0229 12.3951C16.5658 13.4549 15.9455 14.3768 15.1619 15.1607C14.3783 15.9447 13.4568 16.5653 12.3975 17.0226C11.3382 17.48 10.2063 17.7086 9.00184 17.7086ZM9.0003 16.3336C11.0475 16.3336 12.7816 15.6232 14.2024 14.2024C15.6232 12.7816 16.3336 11.0475 16.3336 9.0003C16.3336 6.95308 15.6232 5.21905 14.2024 3.79822C12.7816 2.37739 11.0475 1.66697 9.0003 1.66697C6.95308 1.66697 5.21905 2.37739 3.79822 3.79822C2.37739 5.21905 1.66697 6.95308 1.66697 9.0003C1.66697 11.0475 2.37739 12.7816 3.79822 14.2024C5.21905 15.6232 6.95308 16.3336 9.0003 16.3336Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}