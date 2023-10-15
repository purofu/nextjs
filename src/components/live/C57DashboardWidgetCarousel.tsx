import React from 'react';

export function C57DashboardWidgetCarousel(props){
	const {
    size = "L",
    carsousel = "Yes"
  } = props;
  return (
      <>
  {(size == "L" && carsousel == "Yes") && <>
    <div className="c57DashboardWidgetCarousel gap-0 absolute flex-col w-[660px] items-start overflow-hidden border border-neutral-100 rounded bg-white opacity-100 p-0 left-4 top-4 flex">
      <div className="frame482910 gap-0 flex-row justify-between items-center w-full opacity-100 p-6 flex">
        <span className="rLTEventsAndTheCommunity font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">RLT Events and the community</span>
        <div className="tertiaryCTA gap-2 flex-row items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Find local events</span>
          <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 3.66602L14.6667 14.2993L14.6667 6.41602L16.5 6.41602L16.5 17.416L5.5 17.416L5.5 15.5827L13.3833 15.5827L2.75 4.94935L4.03333 3.66602Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="frame482926 gap-[-260px] flex-row items-start w-full overflow-hidden opacity-100 px-6 py-0 flex">
        <div className="frame483052 gap-0 flex-col h-full items-end bg-[rgba(255,255,255,0.2)] opacity-100 pt-6 pb-0 px-0 flex">
          <div className="frame483051 gap-4 flex-col h-[234px] items-start flex-1 min-h-0 opacity-100 px-6 py-0 flex">
            <div className="frame483050 gap-0.5 flex-col w-[209px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-[110px]">Aug 23</span>
              <div className="frame482923 gap-1 flex-row w-[168px] items-start opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">13:00</span>
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">•</span>
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">Online</span>
              </div>
            </div>
            <span className="title font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-[209px] h-[174px] flex-1 min-h-0">Novartis resumes production and delivery of radioligand therapy medicines ahead of schedule</span>
          </div>
          <div className="squareCTA w-12 h-12 gap-[15.08302116394043px] relative bg-[#273e54] opacity-100 p-0">
            <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.4 4L16 15.6L16 7L18 7L18 19L6 19L6 17L14.6 17L3 5.4L4.4 4Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="imageAspectRatios gap-0 flex-col items-start flex-1 min-w-0 overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
      <div className="frame482927 gap-[23px] flex-row w-[660px] justify-between items-center opacity-100 px-6 py-4 flex">
        <div className="frame482768 gap-2 flex-row items-start opacity-100 p-0 flex">
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border bg-[#6e7e8e] opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
        </div>
        <div className="frame483034 gap-[23px] flex-row justify-end items-center opacity-100 p-0 flex">
          <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4007 20L7.42969 12L15.4007 4L16.5725 5.17607L9.77334 12L16.5725 18.8239L15.4007 20Z" fill="#1B1B1B" />
          </svg>
          <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59927 4L16.5703 12L8.59927 20L7.42746 18.8239L14.2267 12L7.42746 5.17607L8.59927 4Z" fill="#1B1B1B" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && carsousel == "No") && <>
    <div className="c57DashboardWidgetCarousel gap-0 absolute flex-col w-[660px] items-start overflow-hidden border border-neutral-100 rounded bg-white opacity-100 pt-0 pb-[23px] px-0 left-4 top-[592px] flex">
      <div className="frame482910 gap-0 flex-row justify-between items-center w-full opacity-100 p-6 flex">
        <span className="rLTEventsAndTheCommunity font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">RLT Events and the community</span>
        <div className="tertiaryCTA gap-2 flex-row items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Find local events</span>
          <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 3.66699L14.6667 14.3003L14.6667 6.41699L16.5 6.41699L16.5 17.417L5.5 17.417L5.5 15.5837L13.3833 15.5837L2.75 4.95032L4.03333 3.66699Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="frame482926 gap-[-260px] flex-row items-start w-full overflow-hidden opacity-100 px-6 py-0 flex">
        <div className="frame483052 gap-0 flex-col h-full items-end bg-[rgba(255,255,255,0.2)] opacity-100 pt-6 pb-0 px-0 flex">
          <div className="frame483051 gap-4 flex-col h-[234px] items-start flex-1 min-h-0 opacity-100 px-6 py-0 flex">
            <div className="frame483050 gap-0.5 flex-col w-[209px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-[110px]">Aug 23</span>
              <div className="frame482923 gap-1 flex-row w-[168px] items-start opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">13:00</span>
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">•</span>
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">Online</span>
              </div>
            </div>
            <span className="title font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-[209px] h-[174px] flex-1 min-h-0">Novartis resumes production and delivery of radioligand therapy medicines ahead of schedule</span>
          </div>
          <div className="squareCTA w-12 h-12 gap-[15.08302116394043px] relative bg-[#273e54] opacity-100 p-0">
            <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.4 4L16 15.6L16 7L18 7L18 19L6 19L6 17L14.6 17L3 5.4L4.4 4Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="imageAspectRatios gap-0 flex-col items-start flex-1 min-w-0 overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && carsousel == "Yes") && <>
    <div className="c57DashboardWidgetCarousel gap-0 absolute flex-col w-[660px] items-start overflow-hidden border border-neutral-100 rounded bg-white opacity-100 p-0 left-[920px] top-4 flex">
      <div className="frame482910 gap-0 flex-row justify-between items-center w-full opacity-100 p-6 flex">
        <span className="rLTEventsAndTheCommunity font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">RLT Events and the community</span>
        <div className="tertiaryCTA gap-2 flex-row items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Find local events</span>
          <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 3.66602L14.6667 14.2993L14.6667 6.41602L16.5 6.41602L16.5 17.416L5.5 17.416L5.5 15.5827L13.3833 15.5827L2.75 4.94935L4.03333 3.66602Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="frame482926 gap-[-260px] flex-row items-start w-full overflow-hidden opacity-100 px-6 py-0 flex">
        <div className="frame483052 gap-0 flex-col h-full items-end bg-[rgba(255,255,255,0.2)] opacity-100 pt-6 pb-0 px-0 flex">
          <div className="frame483051 gap-4 flex-col h-[234px] items-start flex-1 min-h-0 opacity-100 px-6 py-0 flex">
            <div className="frame483050 gap-0.5 flex-col w-[209px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-[110px]">Aug 23</span>
              <div className="frame482923 gap-1 flex-row w-[168px] items-start opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">13:00</span>
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">•</span>
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">Online</span>
              </div>
            </div>
            <span className="title font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-[209px] h-[174px] flex-1 min-h-0">Novartis resumes production and delivery of radioligand therapy medicines ahead of schedule</span>
          </div>
          <div className="squareCTA w-12 h-12 gap-[15.08302116394043px] relative bg-[#273e54] opacity-100 p-0">
            <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.4 4L16 15.6L16 7L18 7L18 19L6 19L6 17L14.6 17L3 5.4L4.4 4Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="imageAspectRatios gap-0 flex-col items-start flex-1 min-w-0 overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
      <div className="frame482927 gap-[23px] flex-row w-[660px] justify-between items-center opacity-100 px-6 py-4 flex">
        <div className="frame482768 gap-2 flex-row items-start opacity-100 p-0 flex">
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border bg-[#6e7e8e] opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
        </div>
        <div className="frame483034 gap-[23px] flex-row justify-end items-center opacity-100 p-0 flex">
          <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4007 20L7.42969 12L15.4007 4L16.5725 5.17607L9.77334 12L16.5725 18.8239L15.4007 20Z" fill="#1B1B1B" />
          </svg>
          <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59927 4L16.5703 12L8.59927 20L7.42746 18.8239L14.2267 12L7.42746 5.17607L8.59927 4Z" fill="#1B1B1B" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && carsousel == "No") && <>
    <div className="c57DashboardWidgetCarousel gap-0 absolute flex-col w-[660px] items-start overflow-hidden border border-neutral-100 rounded bg-white opacity-100 pt-0 pb-[23px] px-0 left-[920px] top-[592px] flex">
      <div className="frame482910 gap-0 flex-row justify-between items-center w-full opacity-100 p-6 flex">
        <span className="rLTEventsAndTheCommunity font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">RLT Events and the community</span>
        <div className="tertiaryCTA gap-2 flex-row items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Find local events</span>
          <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 3.66699L14.6667 14.3003L14.6667 6.41699L16.5 6.41699L16.5 17.417L5.5 17.417L5.5 15.5837L13.3833 15.5837L2.75 4.95032L4.03333 3.66699Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="frame482926 gap-[-260px] flex-row items-start w-full overflow-hidden opacity-100 px-6 py-0 flex">
        <div className="frame483052 gap-0 flex-col h-full items-end bg-[rgba(255,255,255,0.2)] opacity-100 pt-6 pb-0 px-0 flex">
          <div className="frame483051 gap-4 flex-col h-[234px] items-start flex-1 min-h-0 opacity-100 px-6 py-0 flex">
            <div className="frame483050 gap-0.5 flex-col w-[209px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-[110px]">Aug 23</span>
              <div className="frame482923 gap-1 flex-row w-[168px] items-start opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">13:00</span>
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">•</span>
                <span className="title font-['Volta_Modern_Display'] text-[11px] font-medium text-white text-left tracking-[0px]">Online</span>
              </div>
            </div>
            <span className="title font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-[209px] h-[174px] flex-1 min-h-0">Novartis resumes production and delivery of radioligand therapy medicines ahead of schedule</span>
          </div>
          <div className="squareCTA w-12 h-12 gap-[15.08302116394043px] relative bg-[#273e54] opacity-100 p-0">
            <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.4 4L16 15.6L16 7L18 7L18 19L6 19L6 17L14.6 17L3 5.4L4.4 4Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="imageAspectRatios gap-0 flex-col items-start flex-1 min-w-0 overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && carsousel == "Yes") && <>
    <div className="c57DashboardWidgetCarousel gap-0 absolute flex-col w-[343px] items-start overflow-hidden border border-neutral-100 rounded bg-white opacity-100 p-0 left-[1810px] top-4 flex">
      <div className="frame482910 gap-1 flex-col items-start w-full opacity-100 p-4 flex">
        <span className="rLTEventsAndTheCommunity font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">RLT Events and the community</span>
        <div className="tertiaryCTA gap-2 flex-row items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Find local events</span>
          <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 3.66602L14.6667 14.2993L14.6667 6.41602L16.5 6.41602L16.5 17.416L5.5 17.416L5.5 15.5827L13.3833 15.5827L2.75 4.94935L4.03333 3.66602Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="frame482926 gap-[-280px] flex-col justify-end items-start w-full overflow-hidden opacity-100 px-4 py-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[268.31px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
          </div>
        </div>
        <div className="frame483052 gap-0 flex-col items-end w-full bg-[rgba(255,255,255,0.2)] opacity-100 pt-4 pb-0 px-0 flex">
          <div className="frame483051 gap-2 flex-col justify-end items-start w-full opacity-100 px-4 py-0 flex">
            <div className="frame483050 gap-0.5 flex-col w-[209px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-[110px]">Aug 23</span>
              <div className="frame482923 gap-1 flex-row w-[168px] items-start opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[9px] font-medium text-white text-left tracking-[0px]">13:00</span>
                <span className="title font-['Volta_Modern_Display'] text-[9px] font-medium text-white text-left tracking-[0px]">•</span>
                <span className="title font-['Volta_Modern_Display'] text-[9px] font-medium text-white text-left tracking-[0px]">Online</span>
              </div>
            </div>
            <span className="title font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full">Novartis resumes production and delivery of radioligand therapy medicines ahead of schedule</span>
          </div>
          <div className="squareCTA w-10 h-10 gap-[15.08302116394043px] relative bg-[#273e54] opacity-100 p-0">
            <svg className="interactiveIcons" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.4 4.75L16 16.35L16 7.75L18 7.75L18 19.75L6 19.75L6 17.75L14.6 17.75L3 6.15L4.4 4.75Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="frame482927 gap-[23px] flex-row justify-between items-center w-full opacity-100 px-6 py-4 flex">
        <div className="frame482768 gap-2 flex-row items-start opacity-100 p-0 flex">
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border bg-[#6e7e8e] opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
          <div className="carouselIndicator w-3 h-3 relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
          </div>
        </div>
        <div className="frame483034 gap-[23px] flex-row justify-end items-center opacity-100 p-0 flex">
          <svg className="interactiveIcons" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4007 20.75L7.42969 12.75L15.4007 4.75L16.5725 5.92607L9.77334 12.75L16.5725 19.5739L15.4007 20.75Z" fill="#1B1B1B" />
          </svg>
          <svg className="interactiveIcons" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59927 4.75L16.5703 12.75L8.59927 20.75L7.42746 19.5739L14.2267 12.75L7.42746 5.92607L8.59927 4.75Z" fill="#1B1B1B" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && carsousel == "No") && <>
    <div className="c57DashboardWidgetCarousel gap-0 absolute flex-col w-[343px] items-start overflow-hidden border border-neutral-100 rounded bg-white opacity-100 pt-0 pb-[15px] px-0 left-[1810px] top-[592px] flex">
      <div className="frame482910 gap-1 flex-col items-start w-full opacity-100 p-4 flex">
        <span className="rLTEventsAndTheCommunity font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">RLT Events and the community</span>
        <div className="tertiaryCTA gap-2 flex-row items-center opacity-100 px-0 py-1.5 flex">
          <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Find local events</span>
          <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 3.66699L14.6667 14.3003L14.6667 6.41699L16.5 6.41699L16.5 17.417L5.5 17.417L5.5 15.5837L13.3833 15.5837L2.75 4.95032L4.03333 3.66699Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="frame482926 gap-[-280px] flex-col justify-end items-start w-full overflow-hidden opacity-100 px-4 py-0 flex">
        <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[268.31px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
          </div>
        </div>
        <div className="frame483052 gap-0 flex-col items-end w-full bg-[rgba(255,255,255,0.2)] opacity-100 pt-4 pb-0 px-0 flex">
          <div className="frame483051 gap-2 flex-col justify-end items-start w-full opacity-100 px-4 py-0 flex">
            <div className="frame483050 gap-0.5 flex-col w-[209px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-[110px]">Aug 23</span>
              <div className="frame482923 gap-1 flex-row w-[168px] items-start opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[9px] font-medium text-white text-left tracking-[0px]">13:00</span>
                <span className="title font-['Volta_Modern_Display'] text-[9px] font-medium text-white text-left tracking-[0px]">•</span>
                <span className="title font-['Volta_Modern_Display'] text-[9px] font-medium text-white text-left tracking-[0px]">Online</span>
              </div>
            </div>
            <span className="title font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full">Novartis resumes production and delivery of radioligand therapy medicines ahead of schedule</span>
          </div>
          <div className="squareCTA w-10 h-10 gap-[15.08302116394043px] relative bg-[#273e54] opacity-100 p-0">
            <svg className="interactiveIcons" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.4 4.75L16 16.35L16 7.75L18 7.75L18 19.75L6 19.75L6 17.75L14.6 17.75L3 6.15L4.4 4.75Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}