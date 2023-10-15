import React from 'react';

export function C28ListUsefulLinks(props){
	const {
    size = "L(LHN)"
  } = props;
  return (
      <>
  {(size == "L(LHN)") && <>
    <div className="c28ListUsefulLinks gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-4 top-4 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1100px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Useful links</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-0 flex-col items-start opacity-100 p-0 flex">
        <div className="card w-[1036px] h-[322px] gap-28 relative opacity-100 p-0 contents">
          <div className="titleAndCopy gap-4 absolute flex-col w-[683px] items-start opacity-100 p-0 left-0 top-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">Identify and monitor patients</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[594px]">Neuroendocrine tumours (NETs) tend to grow slowly but are often diagnosed late, resulting in increased burden, reduced therapeutic options and worse survival outcomes. Identifying progression is essential to improving patient outcomes, as it provides an opportunity to review treatment.</span>
          </div>
          <div className="imageAndLinks gap-6 absolute flex-col w-[241px] items-start opacity-100 p-0 left-[795px] top-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="links gap-2 flex-col w-[241px] items-start opacity-100 p-0 flex">
              <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Identification </span>
                <svg className="interactiveIcons" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3L12 11.7L12 5.25L13.5 5.25L13.5 14.25L4.5 14.25L4.5 12.75L10.95 12.75L2.25 4.05L3.3 3Z" fill="#0460A9" />
                </svg>
              </div>
              <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
              <div className="secondaryCTA gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[223px] flex-1 min-w-0">Disease Progression &amp; Monitoring </span>
                <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                </svg>
              </div>
              <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
              <div className="secondaryCTA gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[223px] flex-1 min-w-0">Patient Qualification checklist </span>
                <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-0 flex-col items-start opacity-100 p-0 flex">
        <div className="card gap-28 flex-row w-[1036px] items-start opacity-100 pt-0 pb-8 px-0 flex">
          <div className="titleAndCopy gap-4 flex-col w-[683px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">Locate Treatment Centres</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[683px]">We understand the importance of finding local treatment centers for eligible patients. <br />To facilitate this process, we have a Treatment Centre Locator. You can use this to identify the most suitable local treatment center, allowing your patients to receive therapy closer to home.</span>
          </div>
          <div className="imageAndLinks gap-6 flex-col w-[241px] items-start opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="links gap-2 flex-col w-[241px] items-start opacity-100 p-0 flex">
              <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find a Treatment Centre</span>
                <svg className="interactiveIcons" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3L12 11.7L12 5.25L13.5 5.25L13.5 14.25L4.5 14.25L4.5 12.75L10.95 12.75L2.25 4.05L3.3 3Z" fill="#0460A9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-0 flex-col items-start opacity-100 p-0 flex">
        <div className="card gap-28 flex-row w-[1036px] items-start opacity-100 pt-0 pb-8 px-0 flex">
          <div className="titleAndCopy gap-4 flex-col w-[683px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">Download Patient Resources</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[683px]">Nuclear and radiation are words that can cause concern for many people. These patient-friendly materials provide an overview of peptide receptor radionuclide therapy with LUTATHERA®.</span>
          </div>
          <div className="imageAndLinks gap-6 flex-col w-[241px] items-start opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="links gap-2 flex-col w-[241px] items-start opacity-100 p-0 flex">
              <div className="links gap-2 flex-col w-[241px] items-start opacity-100 p-0 flex">
                <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Explore Patient Resources</span>
                  <svg className="interactiveIcons" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3 3L12 11.7L12 5.25L13.5 5.25L13.5 14.25L4.5 14.25L4.5 12.75L10.95 12.75L2.25 4.05L3.3 3Z" fill="#0460A9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c28ListUsefulLinks gap-16 absolute flex-col w-[768px] items-start bg-white opacity-100 pt-10 pb-16 px-8 left-[2997px] top-4 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[736px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Additional resources</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-8 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="card gap-[60px] flex-row items-start w-full opacity-100 p-0 flex">
          <div className="titleAndCopy gap-4 flex-col w-[401px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Identify and monitor patients</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Neuroendocrine tumours (NETs) tend to grow slowly but are often diagnosed late, resulting in increased burden, reduced therapeutic options and worse survival outcomes. Identifying progression is essential to improving patient outcomes, as it provides an opportunity to review treatment.</span>
          </div>
          <div className="imageAndLinks gap-6 flex-col items-start opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Identification </span>
                <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                </svg>
              </div>
              <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
              <div className="secondaryCTA gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[225px] flex-1 min-w-0">Disease Progression &amp; Monitoring </span>
                <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                </svg>
              </div>
              <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
              <div className="secondaryCTA gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[225px] flex-1 min-w-0">Patient Qualification checklist </span>
                <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-8 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="card gap-[60px] flex-row items-start w-full opacity-100 p-0 flex">
          <div className="titleAndCopy gap-4 flex-col w-[401px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Locate Treatment Centres</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">We understand the importance of finding local treatment centers for eligible patients. <br />To facilitate this process, we have a Treatment Centre Locator. You can use this to identify the most suitable local treatment center, allowing your patients to receive therapy closer to home.</span>
          </div>
          <div className="imageAndLinks gap-6 flex-col items-start opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find a Treatment Centre</span>
                <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                </svg>
              </div>
              <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
            </div>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-8 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="card gap-[60px] flex-row items-start w-full opacity-100 p-0 flex">
          <div className="titleAndCopy gap-4 flex-col w-[401px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Download Patient Resources</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Nuclear and radiation are words that can cause concern for many people. These patient-friendly materials provide an overview of peptide receptor radionuclide therapy with LUTATHERA®.</span>
          </div>
          <div className="imageAndLinks gap-6 flex-col items-start opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Explore Patient Resources</span>
                <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                </svg>
              </div>
              <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L") && <>
    <div className="c28ListUsefulLinks gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 px-12 py-16 left-[1395px] top-4 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1392px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-0 flex-col items-start opacity-100 p-0 flex">
        <div className="card gap-[252px] flex-row w-[1344px] items-start opacity-100 pt-0 pb-8 px-0 flex">
          <div className="titleAndCopy gap-4 flex-col w-[774px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">Identify and monitor patients</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Neuroendocrine tumours (NETs) tend to grow slowly but are often diagnosed late, resulting in increased burden, reduced therapeutic options and worse survival outcomes. Identifying progression is essential to improving patient outcomes, as it provides an opportunity to review treatment.</span>
          </div>
          <div className="imageAndLinks gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="frame482351 gap-4 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
              <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Identification </span>
                  <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                  </svg>
                </div>
                <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
                <div className="secondaryCTA gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[300px] flex-1 min-w-0">Disease Progression &amp; Monitoring </span>
                  <svg className="interactiveIcons" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3 3L12 11.7L12 5.25L13.5 5.25L13.5 14.25L4.5 14.25L4.5 12.75L10.95 12.75L2.25 4.05L3.3 3Z" fill="#0460A9" />
                  </svg>
                </div>
                <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
                <div className="secondaryCTA gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[300px] flex-1 min-w-0">Patient Qualification checklist </span>
                  <svg className="interactiveIcons" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3 3L12 11.7L12 5.25L13.5 5.25L13.5 14.25L4.5 14.25L4.5 12.75L10.95 12.75L2.25 4.05L3.3 3Z" fill="#0460A9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-0 flex-col items-start opacity-100 p-0 flex">
        <div className="card gap-[252px] flex-row w-[1344px] items-start opacity-100 pt-0 pb-8 px-0 flex">
          <div className="titleAndCopy gap-4 flex-col w-[774px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">Locate Treatment Centres</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We understand the importance of finding local treatment centers for eligible patients. <br />To facilitate this process, we have a Treatment Centre Locator. You can use this to identify the most suitable local treatment center, allowing your patients to receive therapy closer to home.</span>
          </div>
          <div className="imageAndLinks gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="frame482351 gap-4 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
              <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find a Treatment Centre</span>
                  <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-0 flex-col items-start opacity-100 p-0 flex">
        <div className="card gap-[252px] flex-row w-[1344px] items-start opacity-100 pt-0 pb-8 px-0 flex">
          <div className="titleAndCopy gap-4 flex-col w-[774px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">Download Patient Resources</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Nuclear and radiation are words that can cause concern for many people. These patient-friendly materials provide an overview of peptide receptor radionuclide therapy with LUTATHERA®.</span>
          </div>
          <div className="imageAndLinks gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
            <div className="frame482351 gap-4 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
              <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                    <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Explore Patient Resources</span>
                    <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
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
  {(size == "S") && <>
    <div className="c28ListUsefulLinks gap-12 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-10 pb-16 px-4 left-[4110px] top-4 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[359px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Additional resources</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-10 flex-col items-center w-full opacity-100 p-0 flex">
        <div className="imageCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <div className="copy gap-16 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="titleAndCopy gap-3 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Identify and monitor patients</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Neuroendocrine tumours (NETs) tend to grow slowly but are often diagnosed late, resulting in increased burden, reduced therapeutic options and worse survival outcomes. Identifying progression is essential to improving patient outcomes, as it provides an opportunity to review treatment.</span>
            </div>
            <div className="links gap-[22px] flex-col items-start w-full opacity-100 p-0 flex">
              <div className="links gap-3 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Identification </span>
                  <svg className="interactiveIcons" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3 3L12 11.7L12 5.25L13.5 5.25L13.5 14.25L4.5 14.25L4.5 12.75L10.95 12.75L2.25 4.05L3.3 3Z" fill="#0460A9" />
                  </svg>
                </div>
                <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
                <div className="secondaryCTA gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[325px] flex-1 min-w-0">Disease Progression &amp; Monitoring </span>
                  <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                  </svg>
                </div>
                <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#9e9e9e] opacity-100 p-0" />
                <div className="secondaryCTA gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
                  <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Patient Qualification checklist </span>
                  <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-10 flex-col items-center w-full opacity-100 p-0 flex">
        <div className="imageCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <div className="copy gap-16 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="titleAndCopy gap-3 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Locate Treatment Centres</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">We understand the importance of finding local treatment centers for eligible patients. <br />To facilitate this process, we have a Treatment Centre Locator. You can use this to identify the most suitable local treatment center, allowing your patients to receive therapy closer to home.</span>
            </div>
            <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="links gap-2 flex-col h-[23px] justify-between items-start w-full opacity-100 p-0 flex">
                  <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                    <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Find a Treatment Centre</span>
                    <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="#0460A9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="card gap-4 flex-col items-center w-full opacity-100 p-0 flex">
        <div className="imageCopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="imageAspectRatios gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
          <div className="copy gap-16 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="titleAndCopy gap-3 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Download Patient Resources</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Nuclear and radiation are words that can cause concern for many people. These patient-friendly materials provide an overview of peptide receptor radionuclide therapy with LUTATHERA®.</span>
            </div>
            <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="links gap-2 flex-col h-[23px] justify-between items-start w-full opacity-100 p-0 flex">
                <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
                  <div className="links gap-2 flex-col items-start w-full opacity-100 p-0 flex">
                    <div className="secondaryCTA gap-2 flex-row justify-between items-center w-full opacity-100 p-0 flex">
                      <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Explore Patient Resources</span>
                      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.03333 3.66602L14.6667 14.2993L14.6667 6.41602L16.5 6.41602L16.5 17.416L5.5 17.416L5.5 15.5827L13.3833 15.5827L2.75 4.94935L4.03333 3.66602Z" fill="#0460A9" />
                      </svg>
                    </div>
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