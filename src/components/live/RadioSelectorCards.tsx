import React from 'react';

export function RadioSelectorCards(props){
	const {
    size = "XL-L",
    selected = "No",
    version = "1"
  } = props;
  return (
      <>
  {(size == "XL-L" && selected == "No" && version == "1") && <>
    <div className="radioSelectorCards gap-[93px] absolute flex-col w-[230px] items-start bg-white opacity-100 p-[23px] border-y-[#212121] border-t border-b left-8 top-[33px] flex">
      <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
        <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
        </div>
      </div>
      <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
        <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">01</span>
        <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
      </div>
    </div>
  </>}
  {(size == "XL-L" && selected == "No" && version == "2") && <>
    <div className="radioSelectorCards gap-[93px] absolute flex-col w-[318px] h-[460px] justify-between items-start border bg-white opacity-100 p-[23px] border-[#bdbdbd] left-8 top-[616px] flex">
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
  </>}
  {(size == "XL-L" && selected == "Yes" && version == "2") && <>
    <div className="radioSelectorCards gap-[93px] absolute flex-col w-[318px] h-[460px] justify-between items-start border bg-[#0460a9] opacity-100 p-[23px] border-[#bdbdbd] left-[370px] top-[616px] flex">
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
  </>}
  {(size == "XL-L" && selected == "Yes" && version == "1") && <>
    <div className="radioSelectorCards gap-[93px] absolute flex-col w-[230px] items-start bg-[#0460a9] opacity-100 p-[23px] border-y-[#1b1b1b] border-t border-b left-[284px] top-[33px] flex">
      <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
        <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
          <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
        </div>
      </div>
      <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
        <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">01</span>
        <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
      </div>
    </div>
  </>}
  {(size == "S" && selected == "No" && version == "1") && <>
    <div className="radioSelectorCards gap-0 absolute flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 pt-0 pb-6 px-0 border-t-black border-t left-[1128px] top-[33px] flex">
      <div className="line gap-1 flex-col items-start w-full opacity-100 px-4 py-0 flex">
        <div className="rectangle4134 w-full h-px relative bg-[#1b1b1b] opacity-100 p-0" />
      </div>
      <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-4 flex">
        <div className="frame1021 gap-0 flex-row items-start opacity-100 pl-0 pr-8 py-0 flex">
          <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
          </div>
        </div>
        <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px] w-full">01</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && selected == "No" && version == "1") && <>
    <div className="radioSelectorCards gap-0 absolute flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 pt-0 pb-6 px-0 border-t-black border-t left-[680px] top-[33px] flex">
      <div className="line gap-1 flex-col items-start w-full opacity-100 px-8 py-0 flex">
        <div className="rectangle4134 w-full h-px relative bg-[#1b1b1b] opacity-100 p-0" />
      </div>
      <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-8 flex">
        <div className="frame1021 gap-0 flex-row w-[42px] items-start opacity-100 pl-0 pr-8 py-0 flex">
          <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
            <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
          </div>
        </div>
        <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px] w-full">01</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && selected == "Yes" && version == "1") && <>
    <div className="radioSelectorCards gap-0 absolute flex-col w-[375px] items-start overflow-hidden bg-[#0460a9] opacity-100 pt-0 pb-6 px-0 border-t-black border-t left-[1128px] top-[220px] flex">
      <div className="line gap-1 flex-col items-start w-[393px] opacity-100 px-4 py-0 !hidden flex">
        <div className="rectangle4134 w-full h-px relative bg-white opacity-100 p-0" />
      </div>
      <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-4 flex">
        <div className="frame1021 gap-0 flex-row items-start opacity-100 pl-0 pr-8 py-0 flex">
          <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
            <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
            <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
          </div>
        </div>
        <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px] w-full">01</span>
          <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && selected == "Yes" && version == "1") && <>
    <div className="radioSelectorCards gap-0 absolute flex-col w-[375px] items-start overflow-hidden bg-[#0460a9] opacity-100 pt-0 pb-6 px-0 border-t-black border-t left-[680px] top-[220px] flex">
      <div className="line gap-1 flex-col items-start w-[393px] opacity-100 px-4 py-0 !hidden flex">
        <div className="rectangle4134 w-full h-px relative bg-white opacity-100 p-0" />
      </div>
      <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-8 flex">
        <div className="frame1021 gap-0 flex-row w-[42px] items-start opacity-100 pl-0 pr-8 py-0 flex">
          <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
            <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
            <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
          </div>
        </div>
        <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px] w-full">01</span>
          <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && selected == "No" && version == "2") && <>
    <div className="radioSelectorCards gap-[93px] absolute flex-col h-[388px] justify-between items-start w-[338.5px] border opacity-100 p-[23px] border-[#bdbdbd] left-[754px] top-[616px] flex">
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
  </>}
  {(size == "M" && selected == "Yes" && version == "2") && <>
    <div className="radioSelectorCards gap-[93px] absolute flex-col h-[388px] justify-between items-start w-[338.5px] border bg-[#0460a9] opacity-100 p-[23px] border-[#bdbdbd] left-[1113px] top-[616px] flex">
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
  </>}
  {(size == "S" && selected == "No" && version == "2") && <>
    <div className="radioSelectorCards gap-[93px] absolute flex-row justify-between items-start w-[343px] border opacity-100 p-[23px] border-[#bdbdbd] left-[1588px] top-[616px] flex">
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
  </>}
  {(size == "S" && selected == "Yes" && version == "2") && <>
    <div className="radioSelectorCards gap-[93px] absolute flex-row justify-between items-start w-[343px] border bg-[#0460a9] opacity-100 p-[23px] border-[#bdbdbd] left-[1588px] top-[810px] flex">
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
  </>}
</>
  );
}