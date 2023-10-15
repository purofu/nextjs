import React from 'react';

export function C51DashboardWidgetSearch(props){
	const {
    size = "L",
    state = "Default"
  } = props;
  return (
      <>
  {(size == "L" && state == "Default") && <>
    <div className="c51DashboardWidgetSearch gap-2.5 absolute flex-col items-start opacity-100 p-0 left-4 top-4 flex">
      <span className="findSupportAndInformation font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#424242] text-left tracking-[0px] w-[318px]">Find support and information</span>
      <div className="frame483062 gap-4 flex-col items-start opacity-100 p-0 flex">
        <div className="frame482835 gap-[11px] flex-col w-[318px] items-start opacity-100 p-0 flex">
          <div className="frame482824 gap-3 flex-col h-[29px] justify-center items-start w-full opacity-100 p-0 flex">
            <div className="frame482834 gap-3 flex-row items-center w-full opacity-100 p-0 flex">
              <span className="startTyping font-['Volta_Modern_Display'] text-[19px] font-medium text-[#9e9e9e] text-left tracking-[0px] w-[286.71px] flex-1 min-w-0">Start typing</span>
              <svg width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8201 19.0004L11.7724 12.0591C11.2113 12.5153 10.5661 12.8724 9.83671 13.1302C9.10734 13.3881 8.35279 13.5171 7.57307 13.5171C5.65518 13.5171 4.03203 12.863 2.70359 11.555C1.37516 10.2469 0.710938 8.6487 0.710938 6.76027C0.710938 4.87182 1.37499 3.27299 2.70309 1.96378C4.03118 0.654595 5.65393 0 7.57133 0C9.4887 0 11.112 0.654191 12.4413 1.96257C13.7706 3.27095 14.4352 4.8696 14.4352 6.75853C14.4352 7.54774 14.3007 8.30152 14.0317 9.01988C13.7627 9.73825 13.4037 10.3631 12.9549 10.8944L20.0026 17.8358L18.8201 19.0004ZM7.57307 11.8594C9.01888 11.8594 10.2435 11.3652 11.2469 10.3769C12.2504 9.38864 12.7521 8.18251 12.7521 6.75853C12.7521 5.33455 12.2504 4.12842 11.2469 3.14013C10.2435 2.15185 9.01888 1.65771 7.57307 1.65771C6.12726 1.65771 4.90264 2.15185 3.8992 3.14013C2.89579 4.12842 2.39408 5.33455 2.39408 6.75853C2.39408 8.18251 2.89579 9.38864 3.8992 10.3769C4.90264 11.3652 6.12726 11.8594 7.57307 11.8594Z" fill="#9E9E9E" />
              </svg>
            </div>
          </div>
          <svg width={318} height={1} viewBox="0 0 318 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2={318} y2="0.5" stroke="black" />
          </svg>
        </div>
        <div className="frame482834 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="quickSearch font-['Volta_Modern_Display'] text-base font-semibold text-[#757575] text-left tracking-[0px]">Quick search:</span>
          <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
            <span className="findTreatmentCentres font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Find Treatment Centres</span>
            <span className="pSMAQualification font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">PSMA Qualification</span>
            <span className="rOMEOrdering font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME Ordering</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && state == "Default") && <>
    <div className="c51DashboardWidgetSearch gap-6 absolute flex-col items-start opacity-100 p-0 left-[904px] top-4 flex">
      <span className="findSupportAndInformation font-['Volta_Modern_Display'] text-sm font-semibold text-[#424242] text-left tracking-[0px] w-full">Find support and information</span>
      <div className="frame483058 gap-4 flex-col w-[318px] items-start opacity-100 p-0 flex">
        <div className="frame482835 gap-[11px] flex-col w-[318px] items-start opacity-100 p-0 flex">
          <div className="frame482824 gap-3 flex-col h-[29px] justify-center items-start w-full opacity-100 p-0 flex">
            <div className="frame482834 gap-3 flex-row items-center w-full opacity-100 p-0 flex">
              <span className="startTyping font-['Volta_Modern_Display'] text-[19px] font-medium text-[#9e9e9e] text-left tracking-[0px] w-[286.71px] flex-1 min-w-0">Start typing</span>
              <svg width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8201 19.0004L11.7724 12.0591C11.2113 12.5153 10.5661 12.8724 9.83671 13.1302C9.10734 13.3881 8.35279 13.5171 7.57307 13.5171C5.65518 13.5171 4.03203 12.863 2.70359 11.555C1.37516 10.2469 0.710938 8.6487 0.710938 6.76027C0.710938 4.87182 1.37499 3.27299 2.70309 1.96378C4.03118 0.654595 5.65393 0 7.57133 0C9.4887 0 11.112 0.654191 12.4413 1.96257C13.7706 3.27095 14.4352 4.8696 14.4352 6.75853C14.4352 7.54774 14.3007 8.30152 14.0317 9.01988C13.7627 9.73825 13.4037 10.3631 12.9549 10.8944L20.0026 17.8358L18.8201 19.0004ZM7.57307 11.8594C9.01888 11.8594 10.2435 11.3652 11.2469 10.3769C12.2504 9.38864 12.7521 8.18251 12.7521 6.75853C12.7521 5.33455 12.2504 4.12842 11.2469 3.14013C10.2435 2.15185 9.01888 1.65771 7.57307 1.65771C6.12726 1.65771 4.90264 2.15185 3.8992 3.14013C2.89579 4.12842 2.39408 5.33455 2.39408 6.75853C2.39408 8.18251 2.89579 9.38864 3.8992 10.3769C4.90264 11.3652 6.12726 11.8594 7.57307 11.8594Z" fill="#9E9E9E" />
              </svg>
            </div>
          </div>
          <svg width={318} height={1} viewBox="0 0 318 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2={318} y2="0.5" stroke="black" />
          </svg>
        </div>
        <div className="frame482834 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="quickSearch font-['Volta_Modern_Display'] text-base font-semibold text-[#757575] text-left tracking-[0px]">Quick search:</span>
          <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
            <span className="findTreatmentCentres font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Find Treatment Centres</span>
            <span className="pSMAQualification font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">PSMA Qualification</span>
            <span className="rOMEOrdering font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME Ordering</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Default") && <>
    <div className="c51DashboardWidgetSearch gap-4 absolute flex-col items-start opacity-100 p-0 left-[1509px] top-4 flex">
      <span className="findSupportAndInformation font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#424242] text-left tracking-[0px] w-full">Find support and information</span>
      <div className="frame483064 gap-4 flex-col items-start opacity-100 p-0 flex">
        <div className="frame482835 gap-2 flex-col w-[318px] items-start opacity-100 p-0 flex">
          <div className="frame482824 gap-3 flex-col h-[29px] justify-end items-start w-full opacity-100 p-0 flex">
            <div className="frame482834 gap-3 flex-row items-center w-full opacity-100 p-0 flex">
              <span className="startTyping font-['Volta_Modern_Display'] text-base font-medium text-[#9e9e9e] text-left tracking-[0px] w-[286.71px] flex-1 min-w-0">Start typing</span>
              <svg width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8201 19.0004L11.7724 12.0591C11.2113 12.5153 10.5661 12.8724 9.83671 13.1302C9.10734 13.3881 8.35279 13.5171 7.57307 13.5171C5.65518 13.5171 4.03203 12.863 2.70359 11.555C1.37516 10.2469 0.710938 8.6487 0.710938 6.76027C0.710938 4.87182 1.37499 3.27299 2.70309 1.96378C4.03118 0.654595 5.65393 0 7.57133 0C9.4887 0 11.112 0.654191 12.4413 1.96257C13.7706 3.27095 14.4352 4.8696 14.4352 6.75853C14.4352 7.54774 14.3007 8.30152 14.0317 9.01988C13.7627 9.73825 13.4037 10.3631 12.9549 10.8944L20.0026 17.8358L18.8201 19.0004ZM7.57307 11.8594C9.01888 11.8594 10.2435 11.3652 11.2469 10.3769C12.2504 9.38864 12.7521 8.18251 12.7521 6.75853C12.7521 5.33455 12.2504 4.12842 11.2469 3.14013C10.2435 2.15185 9.01888 1.65771 7.57307 1.65771C6.12726 1.65771 4.90264 2.15185 3.8992 3.14013C2.89579 4.12842 2.39408 5.33455 2.39408 6.75853C2.39408 8.18251 2.89579 9.38864 3.8992 10.3769C4.90264 11.3652 6.12726 11.8594 7.57307 11.8594Z" fill="#9E9E9E" />
              </svg>
            </div>
          </div>
          <svg width={318} height={1} viewBox="0 0 318 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2={318} y2="0.5" stroke="black" />
          </svg>
        </div>
        <div className="frame482834 gap-1 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="quickSearch font-['Volta_Modern_Display'] text-base font-semibold text-[#757575] text-left tracking-[0px]">Quick search:</span>
          <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
            <span className="findTreatmentCentres font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Find Treatment Centres</span>
            <span className="pSMAQualification font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">PSMA Qualification</span>
            <span className="rOMEOrdering font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">ROME Ordering</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && state == "Active") && <>
    <div className="c51DashboardWidgetSearch w-[318px] h-[194px] absolute opacity-100 p-0 left-[372px] top-4">
      <span className="findSupportAndInformation font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#424242] text-left tracking-[0px] absolute w-[290px] left-[0%] right-[8.81%] top-[0%] bottom-[90.72%]">Find support and information</span>
      <div className="frame482834 gap-1 absolute flex-col items-start opacity-100 p-0 left-[0%] right-[52.2%] top-[50.26%] bottom-[0.26%] flex">
        <span className="suggestions font-['Volta_Modern_Display'] text-base font-semibold text-[#757575] text-left tracking-[0px]">Suggestions:</span>
        <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
          <span className="findTreatmentCentres font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0460a9] text-left underline tracking-[0px]">Find Treatment Centres</span>
          <span className="treatmentForPSMA font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0460a9] text-left underline tracking-[0px]">Treatment for PSMA</span>
          <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0460a9] text-left underline tracking-[0px]">Lorem ipsum</span>
        </div>
      </div>
      <div className="frame482835 gap-[11px] absolute flex-col w-[318px] items-start opacity-100 p-0 top-[22.68%] bottom-[56.7%] inset-x-[0%] flex">
        <div className="frame482824 gap-3 flex-col w-[291px] h-[29px] justify-center items-start opacity-100 p-0 flex">
          <div className="frame482834 gap-3 flex-row justify-between items-center w-full opacity-100 p-0 flex">
            <span className="treatm font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Treatm</span>
            <svg width={1} height={26} viewBox="0 0 1 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2={26} stroke="#0460A9" />
            </svg>
            <svg width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8201 19.0004L11.7724 12.0591C11.2113 12.5153 10.5661 12.8724 9.83671 13.1302C9.10734 13.3881 8.35279 13.5171 7.57307 13.5171C5.65518 13.5171 4.03203 12.863 2.70359 11.555C1.37516 10.2469 0.710938 8.6487 0.710938 6.76027C0.710938 4.87182 1.37499 3.27299 2.70309 1.96378C4.03118 0.654595 5.65393 0 7.57133 0C9.4887 0 11.112 0.654191 12.4413 1.96257C13.7706 3.27095 14.4352 4.8696 14.4352 6.75853C14.4352 7.54774 14.3007 8.30152 14.0317 9.01988C13.7627 9.73825 13.4037 10.3631 12.9549 10.8944L20.0026 17.8358L18.8201 19.0004ZM7.57307 11.8594C9.01888 11.8594 10.2435 11.3652 11.2469 10.3769C12.2504 9.38864 12.7521 8.18251 12.7521 6.75853C12.7521 5.33455 12.2504 4.12842 11.2469 3.14013C10.2435 2.15185 9.01888 1.65771 7.57307 1.65771C6.12726 1.65771 4.90264 2.15185 3.8992 3.14013C2.89579 4.12842 2.39408 5.33455 2.39408 6.75853C2.39408 8.18251 2.89579 9.38864 3.8992 10.3769C4.90264 11.3652 6.12726 11.8594 7.57307 11.8594Z" fill="#212121" />
            </svg>
          </div>
        </div>
        <svg width={291} height={1} viewBox="0 0 291 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2={291} y2="0.5" stroke="black" />
        </svg>
      </div>
    </div>
  </>}
</>
  );
}