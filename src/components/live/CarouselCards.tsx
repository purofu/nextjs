import React from 'react';

export function CarouselCards(props){
	const {
    size = "L",
    selected = "No"
  } = props;
  return (
      <>
  {(size == "S" && selected == "No") && <>
    <div className="carouselCards gap-[131px] absolute flex-col w-[304px] h-[420px] justify-between items-start border rounded opacity-100 p-[23px] border-[#e0e0e0] left-[861px] top-4 flex">
      <div className="frame482891 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="001 font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-right tracking-[0px] w-full">/001</span>
      </div>
      <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 pt-0 pb-4 px-0 flex">
        <span className="understandNovartisRLTProducts font-['Volta_Modern_Display'] text-[28px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Understand Novartis RLT products</span>
        <span className="signInWithYourDocCheckOrNovartisAccountForMoreSpecificInformationSiteSetupGuidanceAndInformationOnNovartisProducts font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Sign in with your <span className="text-[#0460a9]">DocCheck</span> or <span className="text-[#0460a9]">Novartis Account</span> for more specific information, site setup guidance and information on Novartis Products.</span>
      </div>
    </div>
  </>}
  {(size == "M" && selected == "No") && <>
    <div className="carouselCards gap-[131px] absolute flex-col w-[315px] h-[480px] justify-between items-start border rounded opacity-100 p-[23px] border-[#e0e0e0] left-[497px] top-4 flex">
      <div className="frame482891 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="001 font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-right tracking-[0px] w-full">/001</span>
      </div>
      <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 pt-0 pb-4 px-0 flex">
        <span className="understandNovartisRLTProducts font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Understand Novartis RLT products</span>
        <span className="signInWithYourDocCheckOrNovartisAccountForMoreSpecificInformationSiteSetupGuidanceAndInformationOnNovartisProducts font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Sign in with your <span className="text-[#0460a9]">DocCheck</span> or <span className="text-[#0460a9]">Novartis Account</span> for more specific information, site setup guidance and information on Novartis Products.</span>
      </div>
    </div>
  </>}
  {(size == "L" && selected == "No") && <>
    <div className="carouselCards gap-[131px] absolute flex-col w-[420px] h-[480px] justify-between items-start border rounded opacity-100 p-[23px] border-[#e0e0e0] left-4 top-4 flex">
      <div className="frame482891 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="001 font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-right tracking-[0px] w-full">/001</span>
      </div>
      <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 pt-0 pb-10 px-0 flex">
        <span className="understandNovartisRLTProducts font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Understand Novartis RLT products</span>
        <span className="signInWithYourDocCheckOrNovartisAccountForMoreSpecificInformationSiteSetupGuidanceAndInformationOnNovartisProducts font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Sign in with your <span className="font-semibold text-[#0460a9]">DocCheck</span> or <span className="font-semibold text-[#0460a9]">Novartis Account</span> for more specific information, site setup guidance and information on Novartis Products.</span>
      </div>
    </div>
  </>}
</>
  );
}