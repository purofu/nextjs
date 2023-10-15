import React from 'react';

export function C69DashboardOverlayCard(props){
	const {
    size = "L"
  } = props;
  return (
      <>
  {(size == "L") && <>
    <div className="c69DashboardOverlayCard w-[756px] h-[1024px] absolute opacity-100 p-0 left-4 top-4">
      <svg width={756} height={1024} viewBox="0 0 756 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H756V1024H0V0Z" fill="#E3E9EF" />
      </svg>
      <div className="frame483140 gap-6 absolute flex-row items-start opacity-100 p-0 left-12 top-[460px] flex">
        <div className="radioSelectorCards gap-[93px] flex-col w-[318px] h-[460px] justify-between items-start border bg-[#0460a9] opacity-100 p-[23px] border-[#bdbdbd] flex">
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <div className="frame482938 gap-[9px] flex-col w-[254px] items-start opacity-100 p-0 flex">
              <span className="imLookingToReferPatientsForRLTRLI font-['Volta_Modern_Display'] text-[23px] font-semibold text-white text-left tracking-[0px] w-full">I’m looking to Refer patients for RLT/RLI</span>
              <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
            </div>
          </div>
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
              <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-col w-[318px] h-[460px] justify-between items-start border opacity-100 p-[23px] border-[#bdbdbd] flex">
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <div className="frame482938 gap-[9px] flex-col w-[254px] items-start opacity-100 p-0 flex">
              <span className="imLookingToManageTreatments font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">I’m looking to manage treatments</span>
              <span className="yourDashboardWillSurfaceInformationAboutOrderingSiteSetupAndTraining font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-full">Your dashboard will surface information about ordering, site setup and training</span>
            </div>
          </div>
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="interactiveIcons w-8 h-8 absolute opacity-100 p-0 right-[47px] top-[49px]">
        <div className="boundingBox absolute w-8 h-8 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.53073 19.3327L0.664062 17.466L8.13073 9.99935L0.664062 2.53268L2.53073 0.666016L9.9974 8.13268L17.4641 0.666016L19.3307 2.53268L11.8641 9.99935L19.3307 17.466L17.4641 19.3327L9.9974 11.866L2.53073 19.3327Z" fill="#1C1B1F" />
        </svg>
      </div>
      <span className="helpUsGetYouToWhatYouNeed font-['Volta_Modern_Display'] text-[62px] font-medium text-black text-left tracking-[-0.35px] w-[547px] absolute left-12 top-[102px]">Help us get you to what you need</span>
      <span className="whatAreYouLookingToDo font-['Volta_Modern_Display'] text-[23px] font-medium text-black text-left tracking-[0px] absolute left-[49px] top-[254px]">What are you looking to do?</span>
      <span className="selectYourDashboard font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#424242] text-left tracking-[0px] w-[245px] absolute left-[49px] top-[58px]">Select your dashboard</span>
      <div className="containerLink gap-0 absolute flex-col items-start bg-[#6e7e8e] opacity-100 px-9 py-5 left-[585px] top-[961px] flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Confirm</span>
          <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={21} height={18} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.99533L16.4049 7.99533L10.3238 1.91421L11.738 0.5L20.2233 8.98528L11.738 17.4706L10.3238 16.0563L16.4049 9.97523L0 9.97523V7.99533Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[280px] top-[975px] flex">
        <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">No thanks, take me to the dashboard</span>
        <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 3.66602L14.6667 14.2993L14.6667 6.41602L16.5 6.41602L16.5 17.416L5.5 17.416L5.5 15.5827L13.3833 15.5827L2.75 4.94935L4.03333 3.66602Z" fill="#0460A9" />
        </svg>
      </div>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c69DashboardOverlayCard w-[768px] h-[898px] absolute bg-[#e3e9ef] opacity-100 p-0 left-[903px] top-4">
      <div className="frame483140 gap-6 absolute flex-row w-[701px] h-[460px] items-start opacity-100 p-0 left-[35px] top-[335px] flex">
        <div className="radioSelectorCards gap-[93px] flex-col h-full justify-between items-start flex-1 min-w-0 border bg-[#0460a9] opacity-100 p-[23px] border-[#bdbdbd] flex">
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <div className="frame482938 gap-[9px] flex-col w-[254px] items-start opacity-100 p-0 flex">
              <span className="imLookingToReferPatientsForRLTRLI font-['Volta_Modern_Display'] text-2xl font-semibold text-white text-left tracking-[0px] w-full">I’m looking to Refer patients for RLT/RLI</span>
              <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
            </div>
          </div>
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
              <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-col h-full justify-between items-start flex-1 min-w-0 border opacity-100 p-[23px] border-[#bdbdbd] flex">
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <div className="frame482938 gap-[9px] flex-col w-[254px] items-start opacity-100 p-0 flex">
              <span className="imLookingToReferPatientsForRLTRLI font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">I’m looking to Refer patients for RLT/RLI</span>
              <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
            </div>
          </div>
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="containerLink gap-0 absolute flex-col items-start bg-[#6e7e8e] opacity-100 px-9 py-5 left-[597px] top-[835px] flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Confirm</span>
          <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={21} height={18} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.99533L16.4049 7.99533L10.3238 1.91421L11.738 0.5L20.2233 8.98528L11.738 17.4706L10.3238 16.0563L16.4049 9.97523L0 9.97523V7.99533Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[292px] top-[849px] flex">
        <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">No thanks, take me to the dashboard</span>
        <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 3.66602L14.6667 14.2993L14.6667 6.41602L16.5 6.41602L16.5 17.416L5.5 17.416L5.5 15.5827L13.3833 15.5827L2.75 4.94935L4.03333 3.66602Z" fill="#0460A9" />
        </svg>
      </div>
      <div className="frame483144 gap-8 absolute flex-col items-start opacity-100 p-0 left-[33px] top-8 flex">
        <div className="frame483143 gap-4 flex-col items-start opacity-100 p-0 flex">
          <span className="selectYourDashboard font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#424242] text-left tracking-[0px] w-[245px]">Select your dashboard</span>
          <span className="helpUsGetYouToWhatYouNeed font-['Volta_Modern_Display'] text-[54px] font-normal text-black text-left tracking-[-0.35px] w-[522px]">Help us get you to what you need</span>
        </div>
        <span className="whatAreYouLookingToDo font-['Volta_Modern_Display'] text-2xl font-medium text-black text-left tracking-[0px]">What are you looking to do?</span>
      </div>
      <div className="interactiveIcons w-8 h-8 absolute opacity-100 p-0 right-8 top-8">
        <div className="boundingBox absolute w-8 h-8 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.53073 19.3327L0.664062 17.466L8.13073 9.99935L0.664062 2.53268L2.53073 0.666016L9.9974 8.13268L17.4641 0.666016L19.3307 2.53268L11.8641 9.99935L19.3307 17.466L17.4641 19.3327L9.9974 11.866L2.53073 19.3327Z" fill="#1C1B1F" />
        </svg>
      </div>
    </div>
  </>}
  {(size == "S") && <>
    <div className="c69DashboardOverlayCard w-[375px] h-[775px] absolute bg-[#e3e9ef] opacity-100 p-0 left-[1818px] top-4">
      <div className="containerLink gap-0 absolute flex-col items-start bg-[#6e7e8e] opacity-100 px-9 py-5 left-[204px] top-[712px] flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Confirm</span>
          <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={21} height={18} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.99533L16.4049 7.99533L10.3238 1.91421L11.738 0.5L20.2233 8.98528L11.738 17.4706L10.3238 16.0563L16.4049 9.97523L0 9.97523V7.99533Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-4 top-[638px] flex">
        <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Take me to the dashboard</span>
        <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 3.66602L14.6667 14.2993L14.6667 6.41602L16.5 6.41602L16.5 17.416L5.5 17.416L5.5 15.5827L13.3833 15.5827L2.75 4.94935L4.03333 3.66602Z" fill="#0460A9" />
        </svg>
      </div>
      <div className="frame483144 gap-2 absolute flex-col w-[303px] items-start opacity-100 p-0 left-4 top-12 flex">
        <div className="frame483143 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="selectYourDashboard font-['Volta_Modern_Display'] text-base font-semibold text-[#424242] text-left tracking-[0px] w-[245px]">Select your dashboard</span>
          <span className="helpUsGetYouToWhatYouNeed font-['Volta_Modern_Display'] text-[43px] font-medium text-black text-left tracking-[-0.35px] w-full">Help us get you to what you need</span>
        </div>
        <span className="whatAreYouLookingToDo font-['Volta_Modern_Display'] text-[21px] font-medium text-black text-left tracking-[0px]">What are you looking to do?</span>
      </div>
      <div className="frame483140 gap-4 absolute flex-col w-[343px] items-start opacity-100 p-0 left-4 top-[266px] flex">
        <div className="radioSelectorCards gap-[93px] flex-row justify-between items-start w-full border bg-[#0460a9] opacity-100 p-[23px] border-[#bdbdbd] flex">
          <div className="text gap-1 flex-row w-[229px] items-center opacity-100 p-0 flex">
            <div className="frame482938 gap-[9px] flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="imLookingToManageTreatments font-['Volta_Modern_Display'] text-[21px] font-semibold text-white text-left tracking-[0px] w-full">I’m looking to manage treatments</span>
              <span className="yourDashboardWillSurfaceInformationAboutOrderingSiteSetupAndTraining font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full">Your dashboard will surface information about ordering, site setup and training</span>
            </div>
          </div>
          <div className="frame798 gap-1 flex-row w-[42px] h-[42px] items-start opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
              <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-row justify-between items-start w-full border opacity-100 p-[23px] border-[#bdbdbd] flex">
          <div className="text gap-1 flex-row w-[229px] items-center opacity-100 p-0 flex">
            <div className="frame482938 gap-[9px] flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="imLookingToManageTreatments font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">I’m looking to manage treatments</span>
              <span className="yourDashboardWillSurfaceInformationAboutOrderingSiteSetupAndTraining font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Your dashboard will surface information about ordering, site setup and training</span>
            </div>
          </div>
          <div className="frame798 gap-1 flex-row w-[42px] h-[42px] items-start opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="interactiveIcons w-8 h-8 absolute opacity-100 p-0 right-4 top-12">
        <div className="boundingBox absolute w-8 h-8 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.53073 19.3327L0.664062 17.466L8.13073 9.99935L0.664062 2.53268L2.53073 0.666016L9.9974 8.13268L17.4641 0.666016L19.3307 2.53268L11.8641 9.99935L19.3307 17.466L17.4641 19.3327L9.9974 11.866L2.53073 19.3327Z" fill="#1C1B1F" />
        </svg>
      </div>
    </div>
  </>}
</>
  );
}