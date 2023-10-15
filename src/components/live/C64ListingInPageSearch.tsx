import React from 'react';

export function C64ListingInPageSearch(props){
	const {
    size = "XL"
  } = props;
  return (
      <>
  {(size == "XL") && <>
    <div className="c64ListingInPageSearch gap-6 absolute flex-col w-[1440px] items-start bg-white opacity-100 pt-10 pb-12 px-12 left-2 top-[29px] flex">
      <div className="frame483088 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame483097 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="findHelpSupportAndInformation font-['Volta_Modern_Display'] text-[19px] font-medium text-[#424242] text-left tracking-[0px] w-[438px]">Find help, support and information</span>
          <div className="frame483096 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="search gap-[90px] flex-row justify-between items-end w-full opacity-100 p-0 flex">
              <span className="example font-['Volta_Modern_Display'] text-[35px] font-medium text-[#9e9e9e] text-left tracking-[-0.35px] w-[1295px] flex-1 min-w-0">E.g Identifying Progression</span>
              <div className="interactiveIcons w-[49px] h-[49px] relative opacity-100 p-0">
                <div className="boundingBox absolute w-[49px] h-[49px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.0167 36.875L21.1542 24.0125C20.1333 24.8292 18.9594 25.4757 17.6323 25.9521C16.3052 26.4285 14.8931 26.6667 13.3958 26.6667C9.68681 26.6667 6.54774 25.3821 3.97865 22.813C1.40955 20.2439 0.125 17.1049 0.125 13.3958C0.125 9.68681 1.40955 6.54774 3.97865 3.97865C6.54774 1.40955 9.68681 0.125 13.3958 0.125C17.1049 0.125 20.2439 1.40955 22.813 3.97865C25.3821 6.54774 26.6667 9.68681 26.6667 13.3958C26.6667 14.8931 26.4285 16.3052 25.9521 17.6323C25.4757 18.9594 24.8292 20.1333 24.0125 21.1542L36.875 34.0167L34.0167 36.875ZM13.3958 22.5833C15.9479 22.5833 18.1172 21.6901 19.9036 19.9036C21.6901 18.1172 22.5833 15.9479 22.5833 13.3958C22.5833 10.8438 21.6901 8.67448 19.9036 6.88802C18.1172 5.10156 15.9479 4.20833 13.3958 4.20833C10.8438 4.20833 8.67448 5.10156 6.88802 6.88802C5.10156 8.67448 4.20833 10.8438 4.20833 13.3958C4.20833 15.9479 5.10156 18.1172 6.88802 19.9036C8.67448 21.6901 10.8438 22.5833 13.3958 22.5833Z" fill="#9E9E9E" />
                </svg>
              </div>
            </div>
            <div className="w-full h-0.5 relative border opacity-100 p-0 border-black underline" />
          </div>
        </div>
      </div>
      <div className="frame482834 gap-1 flex-col items-start opacity-100 p-0 flex">
        <span className="quickSearch font-['Volta_Modern_Display'] text-base font-semibold text-[#757575] text-left tracking-[0px]">Quick search:</span>
        <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
          <span className="findTreatmentCentres font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Find Treatment Centres</span>
          <span className="pSMAQualification font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">PSMA Qualification</span>
          <span className="rOMEOrdering font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME Ordering</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c64ListingInPageSearch gap-6 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[1594px] top-[29px] flex">
      <div className="frame483097 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="findHelpSupportAndInformation font-['Volta_Modern_Display'] text-[19px] font-medium text-[#424242] text-left tracking-[0px] w-[438px]">Find help, support and information</span>
        <div className="frame483096 gap-2 flex-col w-[704px] items-start opacity-100 p-0 flex">
          <div className="search gap-[90px] flex-row w-[704px] justify-between items-end opacity-100 p-0 flex">
            <span className="example font-['Volta_Modern_Display'] text-[35px] font-medium text-[#9e9e9e] text-left tracking-[-0.35px] w-[655px] flex-1 min-w-0">E.g Identifying Progression</span>
            <div className="interactiveIcons w-[49px] h-[49px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[49px] h-[49px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.0167 36.875L21.1542 24.0125C20.1333 24.8292 18.9594 25.4757 17.6323 25.9521C16.3052 26.4285 14.8931 26.6667 13.3958 26.6667C9.68681 26.6667 6.54774 25.3821 3.97865 22.813C1.40955 20.2439 0.125 17.1049 0.125 13.3958C0.125 9.68681 1.40955 6.54774 3.97865 3.97865C6.54774 1.40955 9.68681 0.125 13.3958 0.125C17.1049 0.125 20.2439 1.40955 22.813 3.97865C25.3821 6.54774 26.6667 9.68681 26.6667 13.3958C26.6667 14.8931 26.4285 16.3052 25.9521 17.6323C25.4757 18.9594 24.8292 20.1333 24.0125 21.1542L36.875 34.0167L34.0167 36.875ZM13.3958 22.5833C15.9479 22.5833 18.1172 21.6901 19.9036 19.9036C21.6901 18.1172 22.5833 15.9479 22.5833 13.3958C22.5833 10.8438 21.6901 8.67448 19.9036 6.88802C18.1172 5.10156 15.9479 4.20833 13.3958 4.20833C10.8438 4.20833 8.67448 5.10156 6.88802 6.88802C5.10156 8.67448 4.20833 10.8438 4.20833 13.3958C4.20833 15.9479 5.10156 18.1172 6.88802 19.9036C8.67448 21.6901 10.8438 22.5833 13.3958 22.5833Z" fill="#9E9E9E" />
              </svg>
            </div>
          </div>
          <div className="w-[705px] h-0.5 relative border opacity-100 p-0 border-black underline" />
        </div>
      </div>
      <div className="frame482834 gap-1 flex-col items-start opacity-100 p-0 flex">
        <span className="quickSearch font-['Volta_Modern_Display'] text-base font-semibold text-[#757575] text-left tracking-[0px]">Quick search:</span>
        <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
          <span className="findTreatmentCentres font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Find Treatment Centres</span>
          <span className="pSMAQualification font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">PSMA Qualification</span>
          <span className="rOMEOrdering font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME Ordering</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S") && <>
    <div className="c64ListingInPageSearch gap-10 absolute flex-col w-[375px] items-start bg-white opacity-100 px-4 py-10 left-[2508px] top-[29px] flex">
      <div className="frame483097 gap-6 flex-col w-[343px] items-start opacity-100 p-0 flex">
        <span className="findHelpSupportAndInformation font-['Volta_Modern_Display'] text-base font-medium text-[#424242] text-left tracking-[0px] w-[438px]">Find help, support and information</span>
        <div className="frame483096 gap-2 flex-col w-[310px] items-start opacity-100 p-0 flex">
          <div className="search gap-[90px] flex-row w-[342px] justify-between items-center opacity-100 p-0 flex">
            <span className="example font-['Volta_Modern_Display'] text-2xl font-medium text-[#9e9e9e] text-left tracking-[-0.35px] w-[315px] flex-1 min-w-0">E.g Identifying Progression</span>
            <div className="interactiveIcons w-[27px] h-[27px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[27px] h-[27px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.05 20.625L11.9625 13.5375C11.4 13.9875 10.7531 14.3438 10.0219 14.6063C9.29062 14.8688 8.5125 15 7.6875 15C5.64375 15 3.91406 14.2922 2.49844 12.8766C1.08281 11.4609 0.375 9.73125 0.375 7.6875C0.375 5.64375 1.08281 3.91406 2.49844 2.49844C3.91406 1.08281 5.64375 0.375 7.6875 0.375C9.73125 0.375 11.4609 1.08281 12.8766 2.49844C14.2922 3.91406 15 5.64375 15 7.6875C15 8.5125 14.8688 9.29062 14.6063 10.0219C14.3438 10.7531 13.9875 11.4 13.5375 11.9625L20.625 19.05L19.05 20.625ZM7.6875 12.75C9.09375 12.75 10.2891 12.2578 11.2734 11.2734C12.2578 10.2891 12.75 9.09375 12.75 7.6875C12.75 6.28125 12.2578 5.08594 11.2734 4.10156C10.2891 3.11719 9.09375 2.625 7.6875 2.625C6.28125 2.625 5.08594 3.11719 4.10156 4.10156C3.11719 5.08594 2.625 6.28125 2.625 7.6875C2.625 9.09375 3.11719 10.2891 4.10156 11.2734C5.08594 12.2578 6.28125 12.75 7.6875 12.75Z" fill="#9E9E9E" />
              </svg>
            </div>
          </div>
          <div className="w-[343px] h-0.5 relative border opacity-100 p-0 border-black underline" />
        </div>
      </div>
      <div className="frame482834 gap-1 flex-col items-start opacity-100 p-0 flex">
        <span className="quickSearch font-['Volta_Modern_Display'] text-base font-semibold text-[#757575] text-left tracking-[0px]">Quick search:</span>
        <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
          <span className="findTreatmentCentres font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Find Treatment Centres</span>
          <span className="pSMAQualification font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">PSMA Qualification</span>
          <span className="rOMEOrdering font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME Ordering</span>
        </div>
      </div>
    </div>
  </>}
</>
  );
}