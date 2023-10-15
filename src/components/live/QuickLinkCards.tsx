import React from 'react';

export function QuickLinkCards(props){
	const {
    size = "L",
    state = "Default"
  } = props;
  return (
      <>
  {(size == "L" && state == "Default") && <>
    <div className="quickLinkCards gap-[131px] absolute flex-col w-[318px] h-[329px] justify-end items-start border rounded opacity-100 p-[23px] border-[#bdbdbd] left-4 top-4 flex">
      <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="understandNovartisRLTProducts font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Rome</span>
        <span className="loremIpsumDolorSitAmetConsecteturVelElitTempusNecNunc font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Hover") && <>
    <div className="quickLinkCards gap-[131px] absolute flex-col w-[318px] h-[329px] justify-end items-start border rounded bg-[#0460a9] opacity-100 p-[23px] border-[#bdbdbd] left-[361px] top-4 flex">
      <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="rome font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-left tracking-[-0.35px] w-full">Rome</span>
        <span className="loremIpsumDolorSitAmetConsecteturVelElitTempusNecNunc font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Default") && <>
    <div className="quickLinkCards gap-[141.3865203857422px] absolute flex-col w-[339.97px] h-[354.87px] justify-end items-start opacity-100 p-[24.82358753681183px] rounded-[4.317145824432373px] border-[1.08px] border-[#bdbdbd] left-[852px] top-4 flex">
      <div className="frame482891 gap-[8.634291648864746px] flex-col items-start w-full opacity-100 p-0 flex">
        <span className="rome font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Rome</span>
        <span className="loremIpsumDolorSitAmetConsecteturVelElitTempusNecNunc font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Hover") && <>
    <div className="quickLinkCards gap-[141.3865203857422px] absolute flex-col w-[339.97px] h-[354.87px] justify-end items-start bg-[#0460a9] opacity-100 p-[24.82358753681183px] rounded-[4.317145824432373px] border-[1.08px] border-[#bdbdbd] left-[1219px] top-4 flex">
      <div className="frame482891 gap-[8.634291648864746px] flex-col items-start w-full opacity-100 p-0 flex">
        <span className="rome font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-left tracking-[-0.35px] w-full">Rome</span>
        <span className="loremIpsumDolorSitAmetConsecteturVelElitTempusNecNunc font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Hover") && <>
    <div className="quickLinkCards gap-[133.47171020507812px] absolute flex-col w-[340px] h-[293px] justify-end items-start bg-[#0460a9] opacity-100 p-[23.433963298797607px] rounded-[4.075471878051758px] border-[1.02px] border-[#bdbdbd] left-[2077px] top-4 flex">
      <div className="frame482891 gap-[8.150943756103516px] flex-col items-start w-full opacity-100 p-0 flex">
        <span className="rome font-['Volta_Modern_Display'] text-[28px] font-medium text-white text-left tracking-[-0.35px] w-full">Rome</span>
        <span className="loremIpsumDolorSitAmetConsecteturVelElitTempusNecNunc font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Default") && <>
    <div className="quickLinkCards gap-[133.47171020507812px] absolute flex-col w-[340px] h-[293px] justify-end items-start opacity-100 p-[23.433963298797607px] rounded-[4.075471878051758px] border-[1.02px] border-[#bdbdbd] left-[1705px] top-4 flex">
      <div className="frame482891 gap-[8.150943756103516px] flex-col items-start w-full opacity-100 p-0 flex">
        <span className="rome font-['Volta_Modern_Display'] text-[28px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Rome</span>
        <span className="loremIpsumDolorSitAmetConsecteturVelElitTempusNecNunc font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Lorem ipsum dolor sit amet consectetur. Vel elit tempus nec nunc.</span>
      </div>
    </div>
  </>}
</>
  );
}