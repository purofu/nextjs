import React from 'react';

export function ListingItem(props){
	const {
    size = "L(LHN)",
    type = "Horizontal"
  } = props;
  return (
      <>
  {(size == "L(LHN)" && type == "Horizontal") && <>
    <div className="listingItem gap-16 absolute flex-col items-start bg-white opacity-100 p-0 left-5 top-5 flex">
      <div className="frame483121 gap-[166px] flex-row w-[980px] justify-between items-start opacity-100 p-0 flex">
        <div className="content gap-[127px] flex-row items-start opacity-100 p-0 flex">
          <span className="rLTCancerTreatmentStepByStepSetupGuide font-['Volta_Modern_Display'] text-[35px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-[316px]">RLT Cancer Treatment: Step-by-Step Setup Guide</span>
          <span className="cancerTreatmentUtilizingLightWavesToPinpointAndCombatTumorsOfferingHopeForEffectiveTherapyWithFewerSideEffects font-['Volta_Modern_Display'] text-[19px] font-medium text-[#223344] text-left tracking-[0px] w-[329px]">Cancer treatment utilizing light waves to pinpoint and combat tumors, offering hope for effective therapy with fewer side effects.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40071L19.6058 9.40071L12.3845 2.17938L14.0638 0.5L24.1401 10.5763L14.0638 20.6525L12.3845 18.9732L19.6058 11.7518L0.125 11.7518L0.125 9.40071Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "L" && type == "Horizontal") && <>
    <div className="listingItem gap-16 absolute flex-col items-start bg-white opacity-100 p-0 border-b-black border-b left-[1065px] top-5 flex">
      <div className="frame483122 gap-[166px] flex-row w-[1210px] justify-between items-start opacity-100 p-0 flex">
        <div className="content gap-[138px] flex-row items-start opacity-100 p-0 flex">
          <span className="rLTCancerTreatmentStepByStepSetupGuide font-['Volta_Modern_Display'] text-[29px] font-medium text-[#1b1b1b] text-left tracking-[0px] w-[432px]">RLT Cancer Treatment: Step-by-Step Setup Guide</span>
          <span className="cancerTreatmentUtilizingLightWavesToPinpointAndCombatTumorsOfferingHopeForEffectiveTherapyWithFewerSideEffects font-['Volta_Modern_Display'] text-[19px] font-medium text-[#223344] text-left tracking-[0px] w-[432px]">Cancer treatment utilizing light waves to pinpoint and combat tumors, offering hope for effective therapy with fewer side effects.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40071L19.6058 9.40071L12.3845 2.17938L14.0638 0.5L24.1401 10.5763L14.0638 20.6525L12.3845 18.9732L19.6058 11.7518L0.125 11.7518L0.125 9.40071Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "M" && type == "Horizontal") && <>
    <div className="listingItem gap-16 absolute flex-col w-[704px] items-start bg-white opacity-100 p-0 left-[2345px] top-5 flex">
      <div className="frame483123 gap-6 flex-row items-start w-full opacity-100 p-0 flex">
        <div className="content gap-[85px] flex-row items-start opacity-100 p-0 flex">
          <span className="rLTCancerTreatmentStepByStepSetupGuide font-['Volta_Modern_Display'] text-[29px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-[279px]">RLT Cancer Treatment: Step-by-Step Setup Guide</span>
          <span className="cancerTreatmentUtilizingLightWavesToPinpointAndCombatTumorsOfferingHopeForEffectiveTherapyWithFewerSideEffects font-['Volta_Modern_Display'] text-[19px] font-medium text-[#223344] text-left tracking-[0px] w-[276px]">Cancer treatment utilizing light waves to pinpoint and combat tumors, offering hope for effective therapy with fewer side effects.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40071L19.6058 9.40071L12.3845 2.17938L14.0638 0.5L24.1401 10.5763L14.0638 20.6525L12.3845 18.9732L19.6058 11.7518L0.125 11.7518L0.125 9.40071Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "S" && type == "Horizontal") && <>
    <div className="listingItem gap-16 absolute flex-col w-[343px] items-start opacity-100 p-0 left-[3395px] top-5 flex">
      <div className="frame483124 gap-4 flex-row items-start w-full opacity-100 p-0 flex">
        <div className="content gap-1 flex-col w-[285px] items-start opacity-100 p-0 flex">
          <span className="rLTCancerTreatmentStepByStepSetupGuide font-['Volta_Modern_Display'] text-2xl font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-full">RLT Cancer Treatment: Step-by-Step Setup Guide</span>
          <span className="cancerTreatmentUtilizingLightWavesToPinpointAndCombatTumorsOfferingHopeForEffectiveTherapyWithFewerSideEffects font-['Volta_Modern_Display'] text-base font-medium text-[#223344] text-left tracking-[0px] w-full">Cancer treatment utilizing light waves to pinpoint and combat tumors, offering hope for effective therapy with fewer side effects.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40071L19.6058 9.40071L12.3845 2.17938L14.0638 0.5L24.1401 10.5763L14.0638 20.6525L12.3845 18.9732L19.6058 11.7518L0.125 11.7518L0.125 9.40071Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "L" && type == "1 label stacked") && <>
    <div className="listingItem gap-0 absolute flex-col w-[1440px] items-start bg-white opacity-100 p-0 left-5 top-[375px] flex">
      <div className="card gap-28 flex-row items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
        <div className="frame483117 gap-10 flex-row w-[1440px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="titleAndCopy gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[957px]">Rome</span>
            <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Managing order tracking</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Positive CHMP opinion based on comprehensive package of analytical, pre-clinical and clinical data.</span>
          </div>
          <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.125 9.40095L19.6058 9.40095L12.3845 2.17962L14.0638 0.500244L24.1401 10.5765L14.0638 20.6528L12.3845 18.9734L19.6058 11.7521L0.125 11.7521L0.125 9.40095Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "S" && type == "1 label stacked") && <>
    <div className="listingItem gap-0 absolute flex-col w-[343px] items-start bg-white opacity-100 p-0 left-[3395px] top-[374px] flex">
      <div className="card gap-4 flex-row items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
        <div className="titleAndCopy gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[343px]">Managing order tracking</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Positive CHMP opinion based on comprehensive package of analytical, pre-clinical and clinical data.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40095L19.6058 9.40095L12.3845 2.17962L14.0638 0.500244L24.1401 10.5765L14.0638 20.6528L12.3845 18.9734L19.6058 11.7521L0.125 11.7521L0.125 9.40095Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "M" && type == "1 label stacked") && <>
    <div className="listingItem gap-0 absolute flex-col w-[704px] items-start bg-white opacity-100 p-0 left-[2345px] top-[375px] flex">
      <div className="card gap-10 flex-row w-[704px] items-start opacity-100 pt-0 pb-16 px-0 flex">
        <div className="titleAndCopy gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Rome</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Managing order tracking</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Positive CHMP opinion based on comprehensive package of analytical, pre-clinical and clinical data.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40095L19.6058 9.40095L12.3845 2.17962L14.0638 0.500244L24.1401 10.5765L14.0638 20.6528L12.3845 18.9734L19.6058 11.7521L0.125 11.7521L0.125 9.40095Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-[704px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "S" && type == "2 label stacked") && <>
    <div className="listingItem gap-0 absolute flex-col w-[343px] items-start bg-white opacity-100 p-0 left-[3395px] top-[861px] flex">
      <div className="card gap-4 flex-row items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
        <div className="titleAndCopy gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Sep 18, 2023 | Press Release</span>
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Sandoz receives positive CHMP opinion for breast and gastric cancer biosimilar trastuzumab</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Positive CHMP opinion based on comprehensive package of analytical, pre-clinical and clinical data.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40095L19.6058 9.40095L12.3845 2.17962L14.0638 0.500244L24.1401 10.5765L14.0638 20.6528L12.3845 18.9734L19.6058 11.7521L0.125 11.7521L0.125 9.40095Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "M" && type == "2 label stacked") && <>
    <div className="listingItem gap-0 absolute flex-col items-start bg-white opacity-100 p-0 left-[2345px] top-[861px] flex">
      <div className="card gap-10 flex-row w-[704px] items-start opacity-100 pt-0 pb-16 px-0 flex">
        <div className="titleAndCopy gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-[957px]">Sep 18, 2023 | Press Release</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Sandoz receives positive CHMP opinion for breast and gastric cancer biosimilar trastuzumab</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Positive CHMP opinion based on comprehensive package of analytical, pre-clinical and clinical data.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40095L19.6058 9.40095L12.3845 2.17962L14.0638 0.500244L24.1401 10.5765L14.0638 20.6528L12.3845 18.9734L19.6058 11.7521L0.125 11.7521L0.125 9.40095Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "L" && type == "2 label stacked") && <>
    <div className="listingItem gap-0 absolute flex-col w-[1440px] items-start bg-white opacity-100 p-0 left-5 top-[861px] flex">
      <div className="card gap-10 flex-row items-start w-full opacity-100 pt-0 pb-16 px-0 flex">
        <div className="titleAndCopy gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[957px]">Sep 18, 2023 | Press Release</span>
          <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Sandoz receives positive CHMP opinion for breast and gastric cancer biosimilar trastuzumab</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Positive CHMP opinion based on comprehensive package of analytical, pre-clinical and clinical data.</span>
        </div>
        <div className="interactiveIcons w-[42px] h-[42px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[42px] h-[42px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={25} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.125 9.40095L19.6058 9.40095L12.3845 2.17962L14.0638 0.500244L24.1401 10.5765L14.0638 20.6528L12.3845 18.9734L19.6058 11.7521L0.125 11.7521L0.125 9.40095Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "L" && type == "Terms + Conditions") && <>
    <div className="listingItem gap-16 absolute flex-col items-start w-[1443px] opacity-100 p-0 left-4 top-[1386px] flex">
      <div className="frame483119 gap-10 flex-row items-start w-full opacity-100 p-0 flex">
        <div className="frame482626 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Understanding GEP-NETs</span>
          <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">While neuroendocrine tumours (NETs) can appear in most organs, the gastrointestinal system, including the pancreas, is the most common primary location of NETs. These tumours, described as</span>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "M" && type == "Terms + Conditions") && <>
    <div className="listingItem gap-16 absolute flex-col items-start w-[704px] opacity-100 p-0 left-[2345px] top-[1386px] flex">
      <div className="frame482628 gap-12 flex-row items-start w-full opacity-100 p-0 flex">
        <div className="frame482627 gap-4 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="1 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame483120 gap-10 flex-row items-start w-full opacity-100 p-0 flex">
              <div className="frame482626 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">Understanding GEP-NETs</span>
                <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">While neuroendocrine tumours (NETs) can appear in most organs, the gastrointestinal system, including the pancreas, is the most common primary location of NETs. These tumours, described as</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && type == "Terms + Conditions") && <>
    <div className="listingItem gap-4 absolute flex-row items-start w-[343px] opacity-100 p-0 left-[3395px] top-[1386px] flex">
      <div className="frame482627 gap-16 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="1 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="frame482626 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Understanding GEP-NETs</span>
            <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">While neuroendocrine tumours (NETs) can appear in most organs, the gastrointestinal system, including the pancreas, is the most common primary location of NETs. These tumours, described as</span>
          </div>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
    </div>
  </>}
</>
  );
}