import React from 'react';

export function C30ListChecklist(props){
	const {
    size = "L(LHN)"
  } = props;
  return (
      <>
  {(size == "L(LHN)") && <>
    <div className="c30ListChecklist gap-24 absolute flex-col w-[1164px] items-start bg-white opacity-100 pt-16 pb-24 px-16 left-8 top-4 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1012px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Your setup checklist</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="titleAndSubcopy gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="yourSiteSetUpChecklist font-['Volta_Modern_Display'] text-[50px] font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">Your site set-up checklist</span>
        <span className="weHavePreparedAStepByStepGuideToGetYouToTheContentWhichIsRightForYou font-['Volta_Modern_Display'] text-[19px] font-medium text-[#1b1b1b] text-left tracking-[0px] w-[861px]">We have prepared a step by step guide to get you to the content which is right for you.</span>
      </div>
      <div className="frame482761 gap-[120px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="checlist gap-6 flex-col w-[1036px] items-end opacity-100 p-0 flex">
          <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
            <span className="reviewingYourSite font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#1b1b1b] text-left tracking-[0px]">Reviewing your site</span>
          </div>
          <div className="checkItems gap-[-1px] flex-col w-[1036px] items-start opacity-100 p-0 flex">
            <div className="checklistItem gap-0 flex-col justify-center items-start w-full bg-[#e3e9ef] opacity-100 p-0 border-y-[#1b1b1b] border-t border-b flex">
              <div className="frame482758 gap-[43px] flex-row items-center w-full opacity-100 p-10 flex">
                <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
                  <div className="rectangle3854 absolute w-[46px] h-[46px] bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
                  <div className="done w-10 h-10 absolute p-0">
                    <div className="boundingBox w-10 h-10 relative bg-[#0460a9] opacity-100 p-0" />
                    <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.92188 21.0026L0.421875 11.5026L2.79688 9.1276L9.92188 16.2526L25.2135 0.960938L27.5885 3.33594L9.92188 21.0026Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
                </div>
                <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 26.9493L21 13L35 26.9493L32.9419 29L21 17.1014L9.05813 29L7 26.9493Z" fill="#212121" />
                </svg>
              </div>
              <div className="checklistopenContentDesktop gap-6 flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
                <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[129px] pr-[149px] py-0 flex">
                  <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
                  <div className="frame482765 gap-6 flex-row items-start opacity-100 p-0 flex">
                    <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                      <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find out more</span>
                      <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
                      </svg>
                    </div>
                    <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                      <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Download forms now</span>
                      <div className="interactiveIcons w-[18px] h-[18px] relative opacity-100 p-0">
                        <div className="boundingBox absolute w-[18px] h-[18px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                        <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.15625 0.75V11.0227L1.43125 6.29766L0.25 7.5L7 14.25L13.75 7.5L12.5688 6.29766L7.84375 11.0227V0.75H6.15625Z" fill="#0460A9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="checklistItem gap-[43px] flex-row justify-center items-center w-full bg-white opacity-100 p-[39px] border-y-[#212121] border-t border-b flex">
              <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
                <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
              </div>
              <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">02</span>
                <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[738px] flex-1 min-w-0">Speaking to one of our in-house experts</span>
              </div>
              <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-[43px] flex-row justify-center items-center w-full bg-white opacity-100 p-[39px] border-y-[#212121] border-t border-b flex">
              <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
                <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
              </div>
              <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">03</span>
                <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[737px] flex-1 min-w-0">Physical assessment of your location</span>
              </div>
              <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-[43px] flex-row justify-center items-center w-full bg-white opacity-100 p-[39px] border-y-[#212121] border-t border-b flex">
              <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
                <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
              </div>
              <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
                <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
              </div>
              <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="checlist gap-6 flex-col items-end w-full opacity-100 p-0 flex">
          <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
            <span className="acquiringTheCorrectLicences font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#1b1b1b] text-left tracking-[0px]">Acquiring the correct licences</span>
          </div>
          <div className="checkItems gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
            <div className="checklistItem gap-[43px] flex-row justify-center items-center w-full bg-white opacity-100 p-[39px] border-y-[#212121] border-t border-b flex">
              <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
                <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
              </div>
              <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
                <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
              </div>
              <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-[43px] flex-row justify-center items-center w-full bg-white opacity-100 p-[39px] border-y-[#212121] border-t border-b flex">
              <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
                <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
              </div>
              <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
                <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
              </div>
              <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c30ListChecklist gap-16 absolute flex-col w-[768px] items-start bg-white opacity-100 pt-10 pb-16 px-0 left-[1715px] top-4 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[768px] items-start opacity-100 pl-8 pr-0 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Your setup checklist</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="titleAndSubcopy gap-4 flex-col items-start w-full opacity-100 pl-8 pr-0 py-0 flex">
        <span className="yourSiteSetUpChecklist font-['Volta_Modern_Display'] text-[38px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-full">Your site set-up checklist</span>
        <span className="weHavePreparedAStepByStepGuideToGetYouToTheContentWhichIsRightForYou font-['Volta_Modern_Display'] text-[19px] font-medium text-[#1b1b1b] text-left tracking-[0px] w-[704px]">We have prepared a step by step guide to get you to the content which is right for you.</span>
      </div>
      <div className="frame482761 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="checlist gap-6 flex-col items-end w-full opacity-100 p-0 flex">
          <div className="title gap-0 flex-row items-start w-full opacity-100 px-8 py-0 flex">
            <span className="reviewingYourSite font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#1b1b1b] text-left tracking-[0px]">Reviewing your site</span>
          </div>
          <div className="checkItems gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
            <div className="checklistItem gap-6 flex-row items-start w-full bg-[#e3e9ef] opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
                    <div className="done w-[27.82px] h-[27.83px] absolute p-0">
                      <div className="boundingBox w-[27.82px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
                      <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.16338 13.9596L0.554688 7.35091L2.20686 5.69874L7.16338 10.6553L17.8011 0.0175781L19.4532 1.66975L7.16338 13.9596Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="frame482766 gap-1 flex-col w-[587px] items-start opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px]">01</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#212121" />
              </svg>
            </div>
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">02</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Speaking to one of our in-house experts</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">03</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Physical assessment of your location</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">04</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup onboarding to RTL</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="checlist gap-6 flex-col items-end w-full opacity-100 p-0 flex">
          <div className="title gap-0 flex-row items-start w-full opacity-100 px-8 py-0 flex">
            <span className="acquiringTheCorrectLicences font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#1b1b1b] text-left tracking-[0px]">Acquiring the correct licences</span>
          </div>
          <div className="checkItems gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">05</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">06</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S") && <>
    <div className="c30ListChecklist gap-16 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-10 pb-16 px-0 left-[2733px] top-4 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[375px] items-start opacity-100 pl-4 pr-0 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Your setup checklist</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="titleAndSubcopy gap-4 flex-col items-start w-full opacity-100 px-4 py-0 flex">
        <span className="yourSiteSetUpChecklist font-['Volta_Modern_Display'] text-[32px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-full">Your site set-up checklist</span>
        <span className="weHavePreparedAStepByStepGuideToGetYouToTheContentWhichIsRightForYou font-['Volta_Modern_Display'] text-base font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">We have prepared a step by step guide to get you to the content which is right for you.</span>
      </div>
      <div className="frame482761 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="checlist gap-6 flex-col items-end w-full opacity-100 p-0 flex">
          <div className="title gap-0 flex-row items-start w-full opacity-100 px-4 py-0 flex">
            <span className="reviewingYourSite font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px]">Reviewing your site</span>
          </div>
          <div className="checkItems gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
            <div className="checklistItem gap-6 flex-row items-start w-full bg-[#e3e9ef] opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-4 flex-row w-[295px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
                    <div className="done w-[27.82px] h-[27.83px] absolute p-0">
                      <div className="boundingBox w-[27.82px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
                      <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.16338 13.9596L0.554688 7.35091L2.20686 5.69874L7.16338 10.6553L17.8011 0.0175781L19.4532 1.66975L7.16338 13.9596Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="frame1041 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#212121" />
              </svg>
            </div>
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-4 flex-row w-[295px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">02</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Speaking to one of our in-house experts</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-4 flex-row w-[295px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">03</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Physical assessment of your location</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-4 flex-row w-[295px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">04</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="checlist gap-6 flex-col items-end w-full opacity-100 p-0 flex">
          <div className="title gap-0 flex-row items-start w-full opacity-100 px-4 py-0 flex">
            <span className="acquiringTheCorrectLicences font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px]">Acquiring the correct licences</span>
          </div>
          <div className="checkItems gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-4 flex-row w-[295px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">05</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
            <div className="checklistItem gap-6 flex-row items-start w-full bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
              <div className="content gap-4 flex-row w-[295px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
                <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                  <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                    <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                  </div>
                </div>
                <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
                  <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">06</span>
                  <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup</span>
                </div>
              </div>
              <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}