import React from 'react';

export function C10HeroPanelPreAuth(props){
	const {
    size = "L"
  } = props;
  return (
      <>
  <variant match="Size\=L">
    <div className="c10HeroPanelPreAuth gap-10 absolute flex-col w-[1440px] justify-end items-end bg-white opacity-100 px-12 py-16 left-4 top-4 flex">
      <div className="frame482978 gap-[138px] flex-row justify-end items-end opacity-100 p-0 flex">
        <div className="frame482977 gap-20 flex-col items-start opacity-100 p-0 flex">
          <div className="frame482976 gap-[13px] flex-col w-[774px] items-center opacity-100 p-0 flex">
            <span className="radioligandTherapyImaging font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[774px]">Radioligand Therapy &amp; Imaging</span>
            <span className="allTheHelpAndSupportYouNeedAllAtYourFingertips font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[784px]">All the help and  support you need, all at your fingertips</span>
          </div>
          <span className="welcomeToOurRLTHubWhereYoullFindScientificAndPracticalInformationOnNovartisTheranosticProductsInNuclearMedicineAccessDataFromClinicalTrialsAsWellAsGuidanceOnPreparationAdministrationMonitoringAndTreatmentAdaptation font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[432px]">Welcome to our RLT hub, where you'll find scientific and practical information on Novartis' theranostic products in nuclear medicine. Access data from clinical trials, as well as guidance on preparation, administration, monitoring and treatment adaptation.</span>
        </div>
        <img src="/images/rectangle14.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="rectangle14 w-[432px] h-[576px] relative opacity-100 object-cover p-0" />
      </div>
    </div>
  </variant>
  {(size == "S") && <>
    <div className="c10HeroPanelPreAuth gap-12 absolute flex-col w-[375px] items-center bg-white opacity-100 px-4 py-10 left-[2432px] top-4 flex">
      <div className="frame482978 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482977 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="frame482976 gap-[13px] flex-col items-center w-full opacity-100 p-0 flex">
            <span className="radioligandTherapyImaging font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-full">Radioligand Therapy &amp; Imaging</span>
            <span className="allTheHelpAndSupportYouNeedAllAtYourFingertips font-['Volta_Modern_Display'] text-[56px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">All the help and support you need, all at your fingertips</span>
          </div>
          <span className="welcomeToOurRLTHubWhereYoullFindScientificAndPracticalInformationOnNovartisTheranosticProductsInNuclearMedicineAccessDataFromClinicalTrialsAsWellAsGuidanceOnPreparationAdministrationMonitoringAndTreatmentAdaptation font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Welcome to our RLT hub, where you'll find scientific and practical information on Novartis' theranostic products in nuclear medicine. Access data from clinical trials, as well as guidance on preparation, administration, monitoring and treatment adaptation.</span>
        </div>
        <img src="/images/rectangle14.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="rectangle14 w-[343px] h-[457.33px] relative opacity-100 object-cover p-0" />
      </div>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c10HeroPanelPreAuth gap-10 absolute flex-col w-[768px] justify-end items-end bg-white opacity-100 pt-10 pb-16 px-8 left-[1560px] top-4 flex">
      <div className="frame482978 gap-16 flex-col w-[704px] items-start opacity-100 p-0 flex">
        <div className="frame483090 gap-10 flex-row w-[400px] items-start opacity-100 p-0 flex">
          <div className="frame482977 gap-16 flex-col w-[704px] items-start opacity-100 p-0 flex">
            <div className="frame482976 gap-[13px] flex-col items-center w-full opacity-100 p-0 flex">
              <span className="radioligandTherapyImaging font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Radioligand Therapy &amp; Imaging</span>
              <span className="allTheHelpAndSupportYouNeedAllAtYourFingertips font-['Volta_Modern_Display'] text-[76px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">All the help and support you need, all at your fingertips</span>
            </div>
          </div>
        </div>
      </div>
      <div className="frame483091 gap-[86px] flex-row justify-between items-start w-full opacity-100 p-0 flex">
        <span className="welcomeToOurRLTHubWhereYoullFindScientificAndPracticalInformationOnNovartisTheranosticProductsInNuclearMedicineAccessDataFromClinicalTrialsAsWellAsGuidanceOnPreparationAdministrationMonitoringAndTreatmentAdaptation font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[340px]">Welcome to our RLT hub, where you'll find scientific and practical information on Novartis' theranostic products in nuclear medicine. Access data from clinical trials, as well as guidance on preparation, administration, monitoring and treatment adaptation.</span>
        <img src="/images/rectangle14.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="rectangle14 w-[278px] h-[368.54px] relative opacity-100 object-cover p-0" />
      </div>
    </div>
  </>}
</>
  );
}