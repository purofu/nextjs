import React from 'react';

export function C67ListingFilters(props){
	const {
    size = "XL-L"
  } = props;
  return (
      <>
  {(size == "XL-L") && <>
    <div className="c67ListingFilters gap-0 absolute flex-col w-[1440px] items-start bg-white opacity-100 pt-6 pb-16 px-12 left-9 top-[30px] flex">
      <div className="selection gap-[39px] flex-row items-center opacity-100 p-0 flex">
        <div className="info gap-10 flex-col w-[149px] items-start opacity-100 p-0 flex">
          <div className="frame482791 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="filterSupport font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Filter support</span>
          </div>
        </div>
        <div className="filters gap-4 flex-row items-start opacity-100 p-0 flex">
          <div className="filter gap-0 flex-col w-24 h-[62px] justify-center items-center border bg-[#e3e9ef] opacity-100 px-[35px] py-[19px] rounded-sm border-[#e3e9ef] flex">
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-black text-left tracking-[0px]">All</span>
            </div>
          </div>
          <div className="filter gap-2.5 flex-col w-24 h-[62px] justify-center items-center border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Ordering</span>
            </div>
          </div>
          <div className="filter gap-2.5 flex-col w-24 h-[62px] justify-center items-center border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c67ListingFilters gap-10 absolute flex-col w-[768px] items-start bg-white opacity-100 pt-6 pb-16 px-8 left-[1519px] top-[30px] flex">
      <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 !hidden flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <div className="interactiveIcons w-[22px] h-[22px] relative overflow-hidden opacity-100 p-0">
          </div>
        </div>
      </div>
      <div className="selection gap-[39px] flex-row items-center opacity-100 p-0 flex">
        <div className="info gap-10 flex-col w-[149px] items-start opacity-100 p-0 flex">
          <div className="frame482791 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="filterSupport font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Filter support</span>
          </div>
        </div>
        <div className="filters gap-4 flex-row items-start opacity-100 p-0 flex">
          <div className="filter gap-0 flex-col w-24 h-[62px] justify-center items-center border bg-[#e3e9ef] opacity-100 px-[35px] py-[19px] rounded-sm border-[#e3e9ef] flex">
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-black text-left tracking-[0px]">All</span>
            </div>
          </div>
          <div className="filter gap-2.5 flex-col w-24 h-[62px] justify-center items-center border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Ordering</span>
            </div>
          </div>
          <div className="filter gap-2.5 flex-col w-24 h-[62px] justify-center items-center border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S") && <>
    <div className="c67ListingFilters gap-0 absolute flex-col w-[375px] items-start bg-white opacity-100 pl-4 pr-0 py-6 left-[2330px] top-[30px] flex">
      <div className="frame482669 gap-6 flex-col w-[343px] items-start opacity-100 p-0 flex">
        <div className="selection gap-[39px] flex-col w-[343px] justify-center items-start opacity-100 p-0 flex">
          <div className="title gap-10 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482791 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="filterSupport font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Filter support</span>
            </div>
          </div>
          <div className="filters gap-4 flex-col w-[343px] items-start opacity-100 p-0 flex">
            <div className="filter gap-0 flex-col h-[62px] justify-center items-center w-full border bg-[#e3e9ef] opacity-100 px-[35px] py-[19px] rounded-sm border-[#e3e9ef] flex">
              <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-semibold text-black text-left tracking-[0px]">All</span>
              </div>
            </div>
            <div className="filter gap-2.5 flex-col h-[62px] justify-center items-center w-full border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
              <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Ordering</span>
              </div>
            </div>
            <div className="filter gap-2.5 flex-col h-[62px] justify-center items-center w-full border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
              <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME</span>
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