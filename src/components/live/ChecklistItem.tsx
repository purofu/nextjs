import React from 'react';

export function ChecklistItem(props){
	const {
    size = "L(LHN)",
    checked = "Yes",
    state = "Collapsed",
    checkboxHover = "No",
    arrowHover = "No"
  } = props;
  return (
      <>
  {(size == "L(LHN)" && checked == "Yes" && state == "Collapsed" && checkboxHover == "No" && arrowHover == "No") && <>
    <div className="checklistItem gap-[43px] absolute flex-row w-[1036px] items-center bg-[#e3e9ef] opacity-100 p-[39px] border-y-[#1b1b1b] border-t border-b left-2 top-12 flex">
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
        <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(size == "L" && checked == "Yes" && state == "Collapsed" && checkboxHover == "No" && arrowHover == "No") && <>
    <div className="checklistItem gap-[68px] absolute flex-row w-[1392px] items-center bg-[#e3e9ef] opacity-100 pl-[113px] pr-[47px] py-[39px] border-y-[#1b1b1b] border-t border-b left-[1254px] top-12 flex">
      <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
        <div className="rectangle3854 absolute w-[46px] h-[46px] bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
        <div className="done w-10 h-10 absolute p-0">
          <div className="boundingBox w-10 h-10 relative bg-[#0460a9] opacity-100 p-0" />
          <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.92188 21.0026L0.421875 11.5026L2.79688 9.1276L9.92188 16.2526L25.2135 0.960938L27.5885 3.33594L9.92188 21.0026Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="frame482766 gap-2.5 flex-row w-[1006px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
        <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
        <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[968px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
      </div>
      <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(size == "L(LHN)" && checked == "Yes" && state == "Open" && checkboxHover == "No" && arrowHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[1036px] justify-center items-start bg-[#e3e9ef] opacity-100 p-0 border-y-[#1b1b1b] border-t border-b left-2 top-[247px] flex">
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
  </>}
  {(size == "L" && checked == "Yes" && state == "Open" && checkboxHover == "No" && arrowHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[1392px] justify-center items-start bg-[#e3e9ef] opacity-100 p-0 border-y-[#1b1b1b] border-t border-b left-[1254px] top-[247px] flex">
      <div className="frame482758 gap-[68px] flex-row items-center w-full opacity-100 pl-[114px] pr-12 py-10 flex">
        <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
          <div className="rectangle3854 absolute w-[46px] h-[46px] bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
          <div className="done w-10 h-10 absolute p-0">
            <div className="boundingBox w-10 h-10 relative bg-[#0460a9] opacity-100 p-0" />
            <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.92188 21.0026L0.421875 11.5026L2.79688 9.1276L9.92188 16.2526L25.2135 0.960938L27.5885 3.33594L9.92188 21.0026Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="frame482766 gap-2.5 flex-row w-[1006px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[968px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
        </div>
        <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 26.9493L21 13L35 26.9493L32.9419 29L21 17.1014L9.05813 29L7 26.9493Z" fill="#212121" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-6 flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[228px] pr-12 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[932px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
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
  </>}
  {(size == "L(LHN)" && checked == "No" && state == "Open" && arrowHover == "No" && checkboxHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[1036px] justify-center items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-2 top-[1011px] flex">
      <div className="frame482758 gap-[43px] flex-row items-center w-full opacity-100 p-10 flex">
        <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
          <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
        </div>
        <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
        </div>
        <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 26.9493L21 13L35 26.9493L32.9419 29L21 17.1014L9.05813 29L7 26.9493Z" fill="#0460A9" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-6 flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[129px] pr-[149px] py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[789px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && checked == "No" && state == "Open" && arrowHover == "No" && checkboxHover == "Yes") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[1036px] justify-center items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-2 top-[2587px] flex">
      <div className="frame482758 gap-[43px] flex-row items-center w-full opacity-100 p-10 flex">
        <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
          <div className="rectangle3854 absolute w-[46px] h-[46px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
          <div className="done w-10 h-10 absolute p-0">
            <div className="boundingBox w-10 h-10 relative bg-[#0460a9] opacity-100 p-0" />
            <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.92188 21.0026L0.421875 11.5026L2.79688 9.1276L9.92188 16.2526L25.2135 0.960938L27.5885 3.33594L9.92188 21.0026Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
        <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
        </div>
        <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 26.9494L21 13L35 26.9494L32.9419 29L21 17.1014L9.05813 29L7 26.9494Z" fill="#023054" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-6 flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[129px] pr-[149px] py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[789px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#023054" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && checked == "No" && state == "Open" && arrowHover == "Yes" && checkboxHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[1036px] justify-center items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-2 top-[1780px] flex">
      <div className="frame482758 gap-[43px] flex-row items-center w-full opacity-100 p-10 flex">
        <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
          <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
        </div>
        <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
        </div>
        <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 26.9493L21 13L35 26.9493L32.9419 29L21 17.1014L9.05813 29L7 26.9493Z" fill="#023054" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-6 flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[129px] pr-[149px] py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[789px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#023054" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && checked == "No" && state == "Open" && arrowHover == "No" && checkboxHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[1392px] justify-center items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[1254px] top-[1011px] flex">
      <div className="frame482758 gap-[68px] flex-row items-center w-full opacity-100 pl-[114px] pr-12 py-10 flex">
        <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
          <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
        </div>
        <div className="frame482766 gap-2.5 flex-row w-[1006px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[968px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
        </div>
        <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 26.9493L21 13L35 26.9493L32.9419 29L21 17.1014L9.05813 29L7 26.9493Z" fill="#0460A9" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-6 flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[228px] pr-12 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[932px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && checked == "No" && state == "Open" && arrowHover == "No" && checkboxHover == "Yes") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[1392px] justify-center items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[1254px] top-[2587px] flex">
      <div className="frame482758 gap-[68px] flex-row items-center w-full opacity-100 pl-[114px] pr-12 py-10 flex">
        <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
          <div className="rectangle3854 absolute w-[46px] h-[46px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
          <div className="done w-10 h-10 absolute p-0">
            <div className="boundingBox w-10 h-10 relative bg-[#0460a9] opacity-100 p-0" />
            <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.92188 21.0026L0.421875 11.5026L2.79688 9.1276L9.92188 16.2526L25.2135 0.960938L27.5885 3.33594L9.92188 21.0026Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
        <div className="frame482766 gap-2.5 flex-row w-[1006px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[968px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
        </div>
        <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 26.9494L21 13L35 26.9494L32.9419 29L21 17.1014L9.05813 29L7 26.9494Z" fill="#023054" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-6 flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[228px] pr-12 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[932px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#023054" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && checked == "No" && state == "Open" && arrowHover == "Yes" && checkboxHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[1392px] justify-center items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[1254px] top-[1780px] flex">
      <div className="frame482758 gap-[68px] flex-row items-center w-full opacity-100 pl-[114px] pr-12 py-10 flex">
        <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
          <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
        </div>
        <div className="frame482766 gap-2.5 flex-row w-[1006px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[968px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
        </div>
        <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 26.9493L21 13L35 26.9493L32.9419 29L21 17.1014L9.05813 29L7 26.9493Z" fill="#023054" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-6 flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[228px] pr-12 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[932px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#023054" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && checked == "No" && state == "Collapsed" && arrowHover == "No" && checkboxHover == "No") && <>
    <div className="checklistItem gap-[43px] absolute flex-row w-[1036px] justify-center items-center bg-white opacity-100 p-[39px] border-y-[#212121] border-t border-b left-2 top-[761px] flex">
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
  </>}
  {(size == "L(LHN)" && checked == "No" && state == "Collapsed" && arrowHover == "No" && checkboxHover == "Yes") && <>
    <div className="checklistItem gap-[43px] absolute flex-row w-[1036px] items-center bg-white opacity-100 p-[39px] border-y-[#212121] border-t border-b left-2 top-[2337px] flex">
      <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
        <div className="rectangle3854 absolute w-[46px] h-[46px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
        <div className="done w-10 h-10 absolute p-0">
          <div className="boundingBox w-10 h-10 relative bg-[#0460a9] opacity-100 p-0" />
          <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.92188 21.0026L0.421875 11.5026L2.79688 9.1276L9.92188 16.2526L25.2135 0.960938L27.5885 3.33594L9.92188 21.0026Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
        <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
        <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
      </div>
      <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "L(LHN)" && checked == "No" && state == "Collapsed" && arrowHover == "Yes" && checkboxHover == "No") && <>
    <div className="checklistItem gap-[43px] absolute flex-row w-[1036px] items-center bg-white opacity-100 p-[39px] border-y-[#212121] border-t border-b left-2 top-[1530px] flex">
      <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
        <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
      </div>
      <div className="frame482766 gap-2.5 flex-row w-[782px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
        <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
        <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[744px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
      </div>
      <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "L" && checked == "No" && state == "Collapsed" && arrowHover == "No" && checkboxHover == "No") && <>
    <div className="checklistItem gap-[68px] absolute flex-row w-[1392px] items-center bg-white opacity-100 pl-[113px] pr-[47px] py-[39px] border-y-[#212121] border-t border-b left-[1254px] top-[761px] flex">
      <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
        <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
      </div>
      <div className="frame482766 gap-2.5 flex-row w-[1006px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
        <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
        <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[968px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
      </div>
      <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "L" && checked == "No" && state == "Collapsed" && arrowHover == "No" && checkboxHover == "Yes") && <>
    <div className="checklistItem gap-[68px] absolute flex-row w-[1392px] items-center bg-white opacity-100 pl-[113px] pr-[47px] py-[39px] border-y-[#212121] border-t border-b left-[1254px] top-[2337px] flex">
      <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
        <div className="rectangle3854 absolute w-[46px] h-[46px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
        <div className="done w-10 h-10 absolute p-0">
          <div className="boundingBox w-10 h-10 relative bg-[#0460a9] opacity-100 p-0" />
          <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.92188 21.0026L0.421875 11.5026L2.79688 9.1276L9.92188 16.2526L25.2135 0.960938L27.5885 3.33594L9.92188 21.0026Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="frame482766 gap-2.5 flex-row w-[1006px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
        <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
        <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[968px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
      </div>
      <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "L" && checked == "No" && state == "Collapsed" && arrowHover == "Yes" && checkboxHover == "No") && <>
    <div className="checklistItem gap-[68px] absolute flex-row w-[1392px] items-center bg-white opacity-100 pl-[113px] pr-[47px] py-[39px] border-y-[#212121] border-t border-b left-[1254px] top-[1530px] flex">
      <div className="checkbox w-[46px] h-[46px] relative opacity-100 p-0">
        <div className="rectangle3854 absolute w-[46px] h-[46px] opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
      </div>
      <div className="frame482766 gap-2.5 flex-row w-[1006px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
        <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">01</span>
        <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[968px] flex-1 min-w-0">Initial forms completed to start setup onboarding to RTL</span>
      </div>
      <svg className="interactiveIcons" width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 15.0507L21 29L7 15.0507L9.05813 13L21 24.8986L32.9419 13L35 15.0507Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "S" && checked == "Yes" && state == "Collapsed" && checkboxHover == "No" && arrowHover == "No") && <>
    <div className="checklistItem gap-6 absolute flex-row w-[393px] items-start bg-[#e3e9ef] opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b left-[3648px] top-12 flex">
      <div className="content gap-4 flex-row w-[313px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
          <div className="checkbox w-8 h-8 relative opacity-100 p-0">
            <div className="rectangle3854 absolute w-8 h-8 bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
            <div className="done w-[27.83px] h-[27.83px] absolute p-0">
              <div className="boundingBox w-[27.83px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
              <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.16338 13.9584L0.554688 7.34969L2.20686 5.69752L7.16338 10.654L17.8011 0.0163574L19.4532 1.66853L7.16338 13.9584Z" fill="white" />
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
        <path d="M20 8.60049L12 16.5715L4 8.60049L5.17607 7.42868L12 14.2279L18.8239 7.42868L20 8.60049Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(size == "S" && checked == "Yes" && state == "Open" && checkboxHover == "No" && arrowHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[393px] items-start bg-[#e3e9ef] opacity-100 p-0 border-y-[#212121] border-t border-b left-[3648px] top-[247px] flex">
      <div className="frame482764 gap-6 flex-row items-start w-full opacity-100 px-4 py-6 flex">
        <div className="content gap-4 flex-row w-[313px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
            <div className="checkbox w-8 h-8 relative opacity-100 p-0">
              <div className="rectangle3854 absolute w-8 h-8 bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
              <div className="done w-[27.83px] h-[27.83px] absolute p-0">
                <div className="boundingBox w-[27.83px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
                <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16338 13.9584L0.554688 7.34969L2.20686 5.69752L7.16338 10.654L17.8011 0.0163574L19.4532 1.66853L7.16338 13.9584Z" fill="white" />
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
          <path d="M20 8.60049L12 16.5715L4 8.60049L5.17607 7.42868L12 14.2279L18.8239 7.42868L20 8.60049Z" fill="#212121" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-[27px] flex-col items-start w-full opacity-100 pt-0 pb-[47px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-16 pr-4 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="frame482765 gap-2 flex-col items-start opacity-100 p-0 flex">
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
  </>}
  {(size == "S" && checked == "No" && state == "Open" && arrowHover == "No" && checkboxHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[393px] items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[3648px] top-[1011px] flex">
      <div className="frame482764 gap-6 flex-row items-start w-full opacity-100 px-4 py-6 flex">
        <div className="content gap-4 flex-row w-[313px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
            <div className="checkbox w-8 h-8 relative opacity-100 p-0">
              <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="frame1041 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
            <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
          </div>
        </div>
        <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8.60037L12 16.5714L4 8.60037L5.17607 7.42856L12 14.2278L18.8239 7.42855L20 8.60037Z" fill="#0460A9" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-[27px] flex-col items-start w-full opacity-100 pt-0 pb-[47px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-16 pr-4 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && checked == "No" && state == "Open" && arrowHover == "No" && checkboxHover == "Yes") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[393px] items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[3648px] top-[2587px] flex">
      <div className="frame482764 gap-6 flex-row items-start w-full opacity-100 px-4 py-6 flex">
        <div className="content gap-4 flex-row w-[313px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
            <div className="checkbox w-8 h-8 relative opacity-100 p-0">
              <div className="rectangle3854 absolute w-8 h-8 bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
              <div className="done w-[27.83px] h-[27.83px] absolute p-0">
                <div className="boundingBox w-[27.83px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
                <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16338 13.9583L0.554688 7.34964L2.20686 5.69747L7.16338 10.654L17.8011 0.0163116L19.4532 1.66849L7.16338 13.9583Z" fill="#0460A9" />
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
          <path d="M20 8.60038L12 16.5714L4 8.60039L5.17607 7.42857L12 14.2278L18.8239 7.42857L20 8.60038Z" fill="#0460A9" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-[27px] flex-col items-start w-full opacity-100 pt-0 pb-[47px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-16 pr-4 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && checked == "No" && state == "Open" && arrowHover == "Yes" && checkboxHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col w-[393px] items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[3648px] top-[1780px] flex">
      <div className="frame482764 gap-6 flex-row items-start w-full opacity-100 px-4 py-6 flex">
        <div className="content gap-4 flex-row w-[313px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
            <div className="checkbox w-8 h-8 relative opacity-100 p-0">
              <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="frame1041 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
            <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
          </div>
        </div>
        <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8.60037L12 16.5714L4 8.60037L5.17607 7.42856L12 14.2278L18.8239 7.42855L20 8.60037Z" fill="#023054" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-[27px] flex-col items-start w-full opacity-100 pt-0 pb-[47px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-16 pr-4 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#023054" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && checked == "Yes" && state == "Collapsed" && checkboxHover == "No" && arrowHover == "No") && <>
    <div className="checklistItem gap-6 absolute flex-row w-[760px] items-start bg-[#e3e9ef] opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b left-[2784px] top-12 flex">
      <div className="content gap-[29px] flex-row w-[648px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
          <div className="checkbox w-8 h-8 relative opacity-100 p-0">
            <div className="rectangle3854 absolute w-8 h-8 bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
            <div className="done w-[27.83px] h-[27.83px] absolute p-0">
              <div className="boundingBox w-[27.83px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
              <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.16338 13.9584L0.554688 7.34969L2.20686 5.69752L7.16338 10.654L17.8011 0.0163574L19.4532 1.66853L7.16338 13.9584Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
        <div className="frame482766 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px]">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
        </div>
      </div>
      <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.60049L12 16.5715L4 8.60049L5.17607 7.42868L12 14.2279L18.8239 7.42868L20 8.60049Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(size == "M" && checked == "Yes" && state == "Open" && checkboxHover == "No" && arrowHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col items-start bg-[#e3e9ef] opacity-100 p-0 border-y-[#212121] border-t border-b left-[2784px] top-[247px] flex">
      <div className="frame482763 gap-6 flex-row items-start opacity-100 px-8 py-6 flex">
        <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
          <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
            <div className="checkbox w-8 h-8 relative opacity-100 p-0">
              <div className="rectangle3854 absolute w-8 h-8 bg-[#0460a9] opacity-100 p-0 rounded-[900px] inset-[0%]" />
              <div className="done w-[27.83px] h-[27.83px] absolute p-0">
                <div className="boundingBox w-[27.83px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
                <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16338 13.9584L0.554688 7.34969L2.20686 5.69752L7.16338 10.654L17.8011 0.0163574L19.4532 1.66853L7.16338 13.9584Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="frame1041 gap-2 flex-col items-start opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
            <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup onboarding to RTL</span>
          </div>
        </div>
        <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8.60049L12 16.5715L4 8.60049L5.17607 7.42868L12 14.2279L18.8239 7.42868L20 8.60049Z" fill="#212121" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-[27px] flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[93px] pr-8 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[583px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
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
  </>}
  {(size == "M" && checked == "No" && state == "Open" && arrowHover == "No" && checkboxHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[2784px] top-[1011px] flex">
      <div className="frame482763 gap-6 flex-row items-start opacity-100 px-8 py-6 flex">
        <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
          <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
            <div className="checkbox w-8 h-8 relative opacity-100 p-0">
              <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="frame1041 gap-2 flex-col items-start opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
            <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup onboarding to RTL</span>
          </div>
        </div>
        <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8.60037L12 16.5714L4 8.60037L5.17607 7.42856L12 14.2278L18.8239 7.42855L20 8.60037Z" fill="#0460A9" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-[27px] flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[93px] pr-8 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[583px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && checked == "No" && state == "Open" && arrowHover == "No" && checkboxHover == "Yes") && <>
    <div className="checklistItem gap-0 absolute flex-col items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[2784px] top-[2587px] flex">
      <div className="frame482763 gap-6 flex-row items-start opacity-100 px-8 py-6 flex">
        <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
          <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
            <div className="checkbox w-8 h-8 relative opacity-100 p-0">
              <div className="rectangle3854 absolute w-8 h-8 bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
              <div className="done w-[27.83px] h-[27.83px] absolute p-0">
                <div className="boundingBox w-[27.83px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
                <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16338 13.9583L0.554688 7.34964L2.20686 5.69747L7.16338 10.654L17.8011 0.0163116L19.4532 1.66849L7.16338 13.9583Z" fill="#0460A9" />
                </svg>
              </div>
            </div>
          </div>
          <div className="frame1041 gap-2 flex-col items-start opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
            <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup onboarding to RTL</span>
          </div>
        </div>
        <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8.60038L12 16.5714L4 8.60039L5.17607 7.42857L12 14.2278L18.8239 7.42857L20 8.60038Z" fill="#023054" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-[27px] flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[93px] pr-8 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[583px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#023054" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && checked == "No" && state == "Open" && arrowHover == "Yes" && checkboxHover == "No") && <>
    <div className="checklistItem gap-0 absolute flex-col items-start bg-white opacity-100 p-0 border-y-[#212121] border-t border-b left-[2784px] top-[1780px] flex">
      <div className="frame482763 gap-6 flex-row items-start opacity-100 px-8 py-6 flex">
        <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
          <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
            <div className="checkbox w-8 h-8 relative opacity-100 p-0">
              <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="frame1041 gap-2 flex-col items-start opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
            <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup onboarding to RTL</span>
          </div>
        </div>
        <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8.60037L12 16.5714L4 8.60037L5.17607 7.42856L12 14.2278L18.8239 7.42855L20 8.60037Z" fill="#023054" />
        </svg>
      </div>
      <div className="checklistopenContentDesktop gap-[27px] flex-col items-start w-full opacity-100 pt-0 pb-[63px] px-0 border-b-[#1b1b1b] border-b flex">
        <div className="content gap-6 flex-col items-start w-full opacity-100 pl-[93px] pr-8 py-0 flex">
          <span className="loremIpsumDolorSitAmetConsecteturBlanditFermentumInterdumEtiamPharetraAcDapibusTinciduntTortorErosAliquamEnimSitRhoncusVitaeVelitEnimAcAmetPhasellusMaurisNuncTortorMiElitPurusFaucibusSemperAcSedCommodoEstFaucibusSedTurpisEgestas font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[583px]">Lorem ipsum dolor sit amet consectetur. Blandit fermentum interdum etiam pharetra ac dapibus tincidunt tortor eros. Aliquam enim sit rhoncus vitae. Velit enim ac amet phasellus mauris. Nunc tortor mi elit purus. Faucibus semper ac sed commodo est faucibus sed turpis egestas.</span>
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px]">Find out more</span>
            <svg className="interactiveIcons" width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3 3.5L12 12.2L12 5.75L13.5 5.75L13.5 14.75L4.5 14.75L4.5 13.25L10.95 13.25L2.25 4.55L3.3 3.5Z" fill="#023054" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && checked == "No" && state == "Collapsed" && arrowHover == "No" && checkboxHover == "No") && <>
    <div className="checklistItem gap-6 absolute flex-row w-[393px] items-start bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b left-[3648px] top-[761px] flex">
      <div className="content gap-4 flex-row w-[313px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
          <div className="checkbox w-8 h-8 relative opacity-100 p-0">
            <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
          </div>
        </div>
        <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
        </div>
      </div>
      <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.60037L12 16.5714L4 8.60037L5.17607 7.42856L12 14.2278L18.8239 7.42855L20 8.60037Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "S" && checked == "No" && state == "Collapsed" && arrowHover == "No" && checkboxHover == "Yes") && <>
    <div className="checklistItem gap-6 absolute flex-row w-[393px] items-start bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b left-[3648px] top-[2337px] flex">
      <div className="content gap-4 flex-row w-[313px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
          <div className="checkbox w-8 h-8 relative opacity-100 p-0">
            <div className="rectangle3854 absolute w-8 h-8 bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
            <div className="done w-[27.83px] h-[27.83px] absolute p-0">
              <div className="boundingBox w-[27.83px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
              <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.16338 13.9583L0.554688 7.34964L2.20686 5.69746L7.16338 10.654L17.8011 0.016304L19.4532 1.66848L7.16338 13.9583Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
        </div>
      </div>
      <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.60039L12 16.5714L4 8.60039L5.17607 7.42857L12 14.2278L18.8239 7.42857L20 8.60039Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "S" && checked == "No" && state == "Collapsed" && arrowHover == "Yes" && checkboxHover == "No") && <>
    <div className="checklistItem gap-6 absolute flex-row w-[393px] items-start bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b left-[3648px] top-[1530px] flex">
      <div className="content gap-4 flex-row w-[313px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
          <div className="checkbox w-8 h-8 relative opacity-100 p-0">
            <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
          </div>
        </div>
        <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Initial forms completed to start setup onboarding to RTL</span>
        </div>
      </div>
      <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.60037L12 16.5714L4 8.60037L5.17607 7.42856L12 14.2278L18.8239 7.42855L20 8.60037Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "M" && checked == "No" && state == "Collapsed" && arrowHover == "No" && checkboxHover == "No") && <>
    <div className="checklistItem gap-6 absolute flex-row items-start bg-white opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b left-[2784px] top-[761px] flex">
      <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
        <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
          <div className="checkbox w-8 h-8 relative opacity-100 p-0">
            <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
          </div>
        </div>
        <div className="frame1039 gap-2 flex-col items-start opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup onboarding to RTL</span>
        </div>
      </div>
      <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.60037L12 16.5714L4 8.60037L5.17607 7.42856L12 14.2278L18.8239 7.42855L20 8.60037Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "M" && checked == "No" && state == "Collapsed" && arrowHover == "No" && checkboxHover == "Yes") && <>
    <div className="checklistItem gap-6 absolute flex-row items-start bg-white opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b left-[2784px] top-[2337px] flex">
      <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
        <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
          <div className="checkbox w-8 h-8 relative opacity-100 p-0">
            <div className="rectangle3854 absolute w-8 h-8 bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
            <div className="done w-[27.83px] h-[27.83px] absolute p-0">
              <div className="boundingBox w-[27.83px] h-[27.83px] relative bg-[#0460a9] opacity-100 p-0" />
              <svg width={20} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.16338 13.9583L0.554688 7.34964L2.20686 5.69746L7.16338 10.654L17.8011 0.016304L19.4532 1.66848L7.16338 13.9583Z" fill="#0460A9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="frame1039 gap-2 flex-col items-start opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup onboarding to RTL</span>
        </div>
      </div>
      <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.60039L12 16.5714L4 8.60039L5.17607 7.42857L12 14.2278L18.8239 7.42857L20 8.60039Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "M" && checked == "No" && state == "Collapsed" && arrowHover == "Yes" && checkboxHover == "No") && <>
    <div className="checklistItem gap-6 absolute flex-row items-start bg-white opacity-100 px-[31px] py-[23px] border-y-[#212121] border-t border-b left-[2784px] top-[1530px] flex">
      <div className="content gap-[29px] flex-row items-start opacity-100 p-0 flex">
        <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
          <div className="checkbox w-8 h-8 relative opacity-100 p-0">
            <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
          </div>
        </div>
        <div className="frame1039 gap-2 flex-col items-start opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">01</span>
          <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[583px]">Initial forms completed to start setup onboarding to RTL</span>
        </div>
      </div>
      <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.60037L12 16.5714L4 8.60037L5.17607 7.42856L12 14.2278L18.8239 7.42855L20 8.60037Z" fill="#023054" />
      </svg>
    </div>
  </>}
</>
  );
}