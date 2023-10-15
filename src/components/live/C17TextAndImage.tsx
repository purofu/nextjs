import React from 'react';

export function C17TextAndImage(props){
	const {
    size = "L(LHN)",
    sectionHeading = "Yes"
  } = props;
  return (
      <>
  {(size == "L(LHN)" && sectionHeading == "Yes") && <>
    <div className="c17TextAndImage gap-12 absolute flex-col items-start bg-white opacity-100 pl-16 pr-0 pt-16 pb-24 left-[53px] top-[94px] flex">
      <div className="frame482629 gap-16 flex-col items-start opacity-100 p-0 flex">
        <div className="sectionHeading gap-[-1px] flex-col w-[1100px] items-start opacity-100 p-0 flex">
          <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
            <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="frame482628 gap-6 flex-row w-[1036px] items-start opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col w-[506px] items-start overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[435.92px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
              </div>
            </div>
          </div>
          <div className="frame482662 gap-6 flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482685 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-full">Finding the right treatment centre</span>
              <span className="intro font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Although NETs can arise from a wide variety of organs and tissues, most NETs are gastroenteropancreatic NETs (GEP-NETs), originating in the gastrointestinal tract and pancreas. GEP-NETs have traditionally been divided into:</span>
            </div>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
              <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && sectionHeading == "No") && <>
    <div className="c17TextAndImage gap-12 absolute flex-col w-[1164px] items-start bg-white opacity-100 pt-16 pb-24 px-16 left-[53px] top-[1210px] flex">
      <div className="frame482629 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482628 gap-6 flex-row w-[1036px] items-start opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col w-[506px] items-start overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[435.92px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
              </div>
            </div>
          </div>
          <div className="frame482662 gap-6 flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482685 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-full">Finding the right treatment centre</span>
              <span className="intro font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Although NETs can arise from a wide variety of organs and tissues, most NETs are gastroenteropancreatic NETs (GEP-NETs), originating in the gastrointestinal tract and pancreas. GEP-NETs have traditionally been divided into:</span>
            </div>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
              <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && sectionHeading == "Yes") && <>
    <div className="c17TextAndImage gap-12 absolute flex-col w-[1440px] items-start bg-white opacity-100 pt-16 pb-24 px-12 left-[1578px] top-[94px] flex">
      <div className="frame482580 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="sectionHeading gap-[-1px] flex-col w-[1392px] items-start opacity-100 p-0 flex">
          <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
            <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="frame482628 gap-6 flex-row items-start w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col w-[660px] items-start overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[568.28px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
              </div>
            </div>
          </div>
          <div className="frame482662 gap-6 flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482686 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-full">Finding the right treatment centre</span>
              <span className="intro font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Although NETs can arise from a wide variety of organs and tissues, most NETs are gastroenteropancreatic NETs (GEP-NETs), originating in the gastrointestinal tract and pancreas. GEP-NETs have traditionally been divided into:</span>
            </div>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
              <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && sectionHeading == "No") && <>
    <div className="c17TextAndImage gap-12 absolute flex-col w-[1440px] items-start bg-white opacity-100 pt-16 pb-24 px-12 left-[1578px] top-[1210px] flex">
      <div className="frame482580 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482628 gap-6 flex-row items-start w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col w-[660px] items-start overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[568.28px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
              </div>
            </div>
          </div>
          <div className="frame482662 gap-6 flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482686 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-full">Finding the right treatment centre</span>
              <span className="intro font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Although NETs can arise from a wide variety of organs and tissues, most NETs are gastroenteropancreatic NETs (GEP-NETs), originating in the gastrointestinal tract and pancreas. GEP-NETs have traditionally been divided into:</span>
            </div>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
              <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHeading == "Yes") && <>
    <div className="c17TextAndImage gap-12 absolute flex-col w-[768px] items-start bg-white opacity-100 pt-10 pb-16 px-8 left-[3379px] top-[94px] flex">
      <div className="frame482581 gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="sectionHeading gap-[-1px] flex-col w-[736px] items-start opacity-100 p-0 flex">
          <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
            <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="frame482628 gap-6 flex-row items-start w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col w-[340px] items-start overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[293.24px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
              </div>
            </div>
          </div>
          <div className="frame482662 gap-6 flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Finding the right treatment centre</span>
            <span className="intro font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Although NETs can arise from a wide variety of organs and tissues, most NETs are gastroenteropancreatic NETs (GEP-NETs), originating in the gastrointestinal tract and pancreas. GEP-NETs have traditionally been divided into:</span>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
              <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHeading == "No") && <>
    <div className="c17TextAndImage gap-12 absolute flex-col w-[768px] items-start bg-white opacity-100 pt-10 pb-16 px-8 left-[3379px] top-[1210px] flex">
      <div className="frame482581 gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482628 gap-6 flex-row items-start w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col w-[340px] items-start overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[293.24px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
              </div>
            </div>
          </div>
          <div className="frame482662 gap-6 flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Finding the right treatment centre</span>
            <span className="intro font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Although NETs can arise from a wide variety of organs and tissues, most NETs are gastroenteropancreatic NETs (GEP-NETs), originating in the gastrointestinal tract and pancreas. GEP-NETs have traditionally been divided into:</span>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
              <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHeading == "Yes") && <>
    <div className="c17TextAndImage gap-8 absolute flex-col items-start w-[375px] bg-white opacity-100 pt-10 pb-16 px-4 left-[4508px] top-[111px] flex">
      <div className="frame482584 gap-8 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482583 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="sectionHeading gap-[-1px] flex-col w-[359px] items-start opacity-100 p-0 flex">
            <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
              <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="frame482628 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
                <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[295.81px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
                </div>
              </div>
            </div>
            <div className="frame482662 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Finding the right treatment centre</span>
              <span className="intro font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Although NETs can arise from a wide variety of organs and tissues, most NETs are gastroenteropancreatic NETs (GEP-NETs), originating in the gastrointestinal tract and pancreas. GEP-NETs have traditionally been divided into:</span>
              <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
                <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.03333 3.91602L14.6667 14.5493L14.6667 6.66602L16.5 6.66602L16.5 17.666L5.5 17.666L5.5 15.8327L13.3833 15.8327L2.75 5.19935L4.03333 3.91602Z" fill="#0460A9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHeading == "No") && <>
    <div className="c17TextAndImage gap-8 absolute flex-col items-start w-[375px] bg-white opacity-100 pt-10 pb-16 px-4 left-[4508px] top-[1227px] flex">
      <div className="frame482584 gap-8 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482583 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="frame482628 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
                <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[295.81px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
                </div>
              </div>
            </div>
            <div className="frame482662 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Finding the right treatment centre</span>
              <span className="intro font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Although NETs can arise from a wide variety of organs and tissues, most NETs are gastroenteropancreatic NETs (GEP-NETs), originating in the gastrointestinal tract and pancreas. GEP-NETs have traditionally been divided into:</span>
              <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Link title here</span>
                <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.03333 3.91602L14.6667 14.5493L14.6667 6.66602L16.5 6.66602L16.5 17.666L5.5 17.666L5.5 15.8327L13.3833 15.8327L2.75 5.19935L4.03333 3.91602Z" fill="#0460A9" />
                </svg>
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