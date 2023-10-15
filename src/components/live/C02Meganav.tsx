import React from 'react';

export function C02Meganav(props){
	const {
    type = "Disease Areas",
    state = "Default"
  } = props;
  return (
      <>
  {(type == "Disease Areas" && state == "Default") && <>
    <div className="c02Meganav w-[1440px] h-[518px] absolute opacity-100 p-0 left-[72px] top-[89px]">
      <div className="dropdown w-[1440px] h-[454px] absolute bg-white opacity-100 p-0 left-0 top-16">
        <div className="findACenter gap-2 absolute flex-col items-start opacity-100 p-0 left-[1106px] top-[146px] flex">
          <span className="findACentre font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px]">Find a centre</span>
          <span className="youCanUseThisToIdentifyTheMostSuitableLocalTreatmentCenterAllowingYourPatientsToReceiveTherapyCloserToHome font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[254px]">You can use this to identify the most suitable local treatment center, allowing your patients to receive therapy closer to home.</span>
        </div>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <div className="1pxDivider w-px h-[454px] absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-[1049px] top-0" />
      </div>
      <div className="links w-[888px] h-[223px] absolute p-0">
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Prostate Cancer</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Neuroendicrine Tumors</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="links gap-[-1px] flex-col items-start opacity-100 p-0 flex">
          <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
            <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Learn about RLT</span>
            </div>
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          </div>
          <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
            <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Learn about RLI</span>
            </div>
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          </div>
          <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
            <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Patient Resources</span>
            </div>
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          </div>
        </div>
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px]">Resources</span>
      </div>
      <div className="c02Meganav w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#212121" />
                </svg>
              </div>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#212121" />
              </svg>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-[#212121] text-left">RLT Care</span>
        </div>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="#EC9A1E" />
        </svg>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Disease areas</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_54869)">
                  <path d="M13 9L7 2L1 9" stroke="#0460A9" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_54869">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="products font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Products</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[5px] pb-[3px] px-0 flex">
              <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_54874)">
                  <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_54874">
                    <rect width={14} height={8} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">More</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_54883)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_54883">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="title w-[936px] h-[60px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px]">Disease Areas</span>
        <div className="1pxDivider w-[936px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <div className="squareCTA w-20 h-20 absolute gap-[15.08302116394043px] bg-[#0460a9] opacity-100 p-0 right-0 bottom-0">
        <svg className="interactiveIcons" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.86667 5.33398L21.3333 20.8007L21.3333 9.33398L24 9.33398L24 25.334L8 25.334L8 22.6673L19.4667 22.6673L4 7.20065L5.86667 5.33398Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(type == "Disease Areas" && state == "Hover") && <>
    <div className="c02Meganav w-[1440px] h-[518px] absolute opacity-100 p-0 left-[1663px] top-[89px]">
      <div className="dropdown w-[1440px] h-[454px] absolute bg-white opacity-100 p-0 left-0 top-16">
        <div className="findACenter gap-2 absolute flex-col items-start opacity-100 p-0 left-[1106px] top-[146px] flex">
          <span className="findACentre font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px]">Find a centre</span>
          <span className="youCanUseThisToIdentifyTheMostSuitableLocalTreatmentCenterAllowingYourPatientsToReceiveTherapyCloserToHome font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[254px]">You can use this to identify the most suitable local treatment center, allowing your patients to receive therapy closer to home.</span>
        </div>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <div className="1pxDivider w-px h-[454px] absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-[1049px] top-0" />
        <div className="component38 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[1282px] top-[381px]">
          <div className="rectangle4536 absolute w-[14.3px] h-[3.44px] bg-white opacity-100 p-0 left-[20%] right-[7.18%] top-[64.62%] bottom-[19%]" />
          <div className="rectangle4533 absolute w-[2.52px] h-[3.13px] bg-white opacity-100 p-0 left-[7.19%] right-[79.99%] top-[42.69%] bottom-[42.4%]" />
          <div className="rectangle4534 absolute w-[16.56px] h-[3.13px] bg-white opacity-100 p-0 left-[13.44%] right-[2.2%] top-[49.12%] bottom-[35.97%]" />
          <div className="rectangle4535 absolute w-[15.64px] h-[3.13px] bg-white opacity-100 p-0 left-[14.68%] right-[5.66%] top-[53.8%] bottom-[31.29%]" />
          <div className="rectangle4537 absolute w-[10.24px] h-[1.29px] bg-white opacity-100 p-0 left-[33.43%] right-[14.41%] top-[81%] bottom-[12.87%]" />
          <div className="rectangle4538 absolute w-[8.95px] h-[2.27px] bg-white opacity-100 p-0 left-[37.8%] right-[16.59%] top-[85.09%] bottom-[4.1%]" />
          <div className="rectangle4539 absolute w-[3.19px] h-[10.44px] bg-white opacity-100 p-0 left-[32.81%] right-[50.96%] top-[6.14%] bottom-[44.15%]" />
          <div className="rectangle4540 absolute w-[7.18px] h-[4.54px] bg-white opacity-100 p-0 left-[43.44%] right-[19.99%] top-[31%] bottom-[47.37%]" />
          <div className="rectangle4541 absolute w-[4.3px] h-[3.19px] bg-white opacity-100 p-0 left-[71.56%] right-[6.56%] top-[37.43%] bottom-[47.37%]" />
          <img src="/images/image202.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image202 absolute h-[21px] w-[19.63px] opacity-100 object-cover p-0 inset-[0%]" />
        </div>
        <div className="squareCTA w-20 h-20 absolute gap-[15.08302116394043px] bg-[#023054] opacity-100 p-0 right-0 bottom-0">
          <svg className="interactiveIcons" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.86667 5.33398L21.3333 20.8007L21.3333 9.33398L24 9.33398L24 25.334L8 25.334L8 22.6673L19.4667 22.6673L4 7.20065L5.86667 5.33398Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="links w-[888px] h-[223px] absolute p-0">
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Prostate Cancer</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Neuroendicrine Tumors</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="links gap-[-1px] flex-col items-start opacity-100 p-0 flex">
          <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
            <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Learn about RLT</span>
            </div>
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          </div>
          <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
            <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Learn about RLI</span>
            </div>
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          </div>
          <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
            <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Patient Resources</span>
            </div>
            <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          </div>
          <div className="component39 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-36 top-[75px]">
            <div className="rectangle4536 absolute w-[14.3px] h-[3.44px] bg-white opacity-100 p-0 left-[20%] right-[7.18%] top-[64.62%] bottom-[19%]" />
            <div className="rectangle4533 absolute w-[2.52px] h-[3.13px] bg-white opacity-100 p-0 left-[7.19%] right-[79.99%] top-[42.69%] bottom-[42.4%]" />
            <div className="rectangle4534 absolute w-[16.56px] h-[3.13px] bg-white opacity-100 p-0 left-[13.44%] right-[2.2%] top-[49.12%] bottom-[35.97%]" />
            <div className="rectangle4535 absolute w-[15.64px] h-[3.13px] bg-white opacity-100 p-0 left-[14.68%] right-[5.66%] top-[53.8%] bottom-[31.29%]" />
            <div className="rectangle4537 absolute w-[10.24px] h-[1.29px] bg-white opacity-100 p-0 left-[33.43%] right-[14.41%] top-[81%] bottom-[12.87%]" />
            <div className="rectangle4538 absolute w-[8.95px] h-[2.27px] bg-white opacity-100 p-0 left-[37.8%] right-[16.59%] top-[85.09%] bottom-[4.1%]" />
            <div className="rectangle4539 absolute w-[3.19px] h-[10.44px] bg-white opacity-100 p-0 left-[32.81%] right-[50.96%] top-[6.14%] bottom-[44.15%]" />
            <div className="rectangle4540 absolute w-[7.18px] h-[4.54px] bg-white opacity-100 p-0 left-[43.44%] right-[19.99%] top-[31%] bottom-[47.37%]" />
            <div className="rectangle4541 absolute w-[4.3px] h-[3.19px] bg-white opacity-100 p-0 left-[71.56%] right-[6.56%] top-[37.43%] bottom-[47.37%]" />
            <img src="/images/image202.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image202 absolute h-[21px] w-[19.63px] opacity-100 object-cover p-0 inset-[0%]" />
          </div>
        </div>
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px]">Resources</span>
      </div>
      <div className="c02Meganav w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#212121" />
                </svg>
              </div>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#212121" />
              </svg>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-[#212121] text-left">RLT Care</span>
        </div>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="#EC9A1E" />
        </svg>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Disease areas</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55012)">
                  <path d="M13 9L7 2L1 9" stroke="#0460A9" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55012">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="products font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Products</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[5px] pb-[3px] px-0 flex">
              <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55017)">
                  <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55017">
                    <rect width={14} height={8} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">More</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55026)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55026">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="title w-[936px] h-[60px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px]">Disease Areas</span>
        <div className="1pxDivider w-[936px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      </div>
    </div>
  </>}
  {(type == "Products" && state == "Default") && <>
    <div className="c02Meganav w-[1440px] h-[518px] absolute opacity-100 p-0 left-[72px] top-[641px]">
      <div className="nav w-[1440px] h-[454px] absolute bg-white opacity-100 p-0 left-0 top-16">
        <div className="frame482733 gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-[505px] top-[225px] flex">
          <div className="frame1242 gap-[-2px] flex-col items-start w-full opacity-100 pt-0 pb-1 px-0 flex">
            <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Pluvicto</span>
              <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
                <div className="terms w-3 h-3 relative opacity-100 p-0">
                  <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                  </svg>
                  <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-full">(lutetium Lu 177 vipivotide tetraxetan)</span>
          </div>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Prostate Cancer</span>
        </div>
        <div className="frame482650 gap-12 absolute flex-col w-[354px] items-start opacity-100 p-0 left-[1038px] top-[133px] flex">
          <div className="frame482635 gap-4 flex-col w-[265px] items-start opacity-100 p-0 flex">
            <div className="frame482634 gap-3 flex-col w-[249px] justify-end items-start opacity-100 p-0 flex" />
          </div>
        </div>
        <div className="findACenter gap-2 absolute flex-col items-start opacity-100 p-0 left-[1106px] top-[146px] flex">
          <span className="findACentre font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px]">Find a centre</span>
          <span className="youCanUseThisToIdentifyTheMostSuitableLocalTreatmentCenterAllowingYourPatientsToReceiveTherapyCloserToHome font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[254px]">You can use this to identify the most suitable local treatment center, allowing your patients to receive therapy closer to home.</span>
        </div>
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] absolute left-12 top-[147px]">Imaging</span>
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] absolute left-[505px] top-[147px]">Therapies</span>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <div className="linkWithInfo gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-12 top-[225px] flex">
          <div className="frame1242 gap-[-2px] flex-col items-start opacity-100 pt-0 pb-1 px-0 flex">
            <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Locametz</span>
              <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
                <div className="terms w-3 h-3 relative opacity-100 p-0">
                  <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                  </svg>
                  <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[119px]">(lutetium Lu 177 dotatate)</span>
          </div>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Prostate Cancer</span>
        </div>
        <div className="linkWithInfo gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-b-[#bdbdbd] border-b left-12 top-[309px] flex">
          <div className="frame1242 gap-[-2px] flex-col items-start w-full opacity-100 pt-0 pb-1 px-0 flex">
            <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">SomaKit TOC</span>
              <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
                <div className="terms w-3 h-3 relative opacity-100 p-0">
                  <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                  </svg>
                  <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-full">(gallium Ga 68 edotreotide injection)</span>
          </div>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
        </div>
        <div className="linkWithInfo gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-[269px] top-[225px] flex">
          <div className="frame1242 gap-[-2px] flex-col items-start w-full opacity-100 pt-0 pb-1 px-0 flex">
            <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">NETSPOT</span>
              <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
                <div className="terms w-3 h-3 relative opacity-100 p-0">
                  <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                  </svg>
                  <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-full">(gallium Ga 68 dotatate injection)</span>
          </div>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
        </div>
        <div className="frame482731 gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-[732px] top-[225px] flex">
          <div className="frame1242 gap-[-2px] flex-col items-start opacity-100 pt-0 pb-1 px-0 flex">
            <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Lutathera</span>
              <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
                <div className="terms w-3 h-3 relative opacity-100 p-0">
                  <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                  </svg>
                  <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[119px]">(lutetium Lu 177 dotatate)</span>
          </div>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
        </div>
        <div className="1pxDivider w-px h-[454px] absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-[1049px] top-0" />
        <div className="interactiveIcons w-7 h-7 absolute overflow-hidden opacity-100 p-0 left-[1392px] top-[403px]" />
        <div className="squareCTA w-20 h-20 absolute gap-[15.08302116394043px] bg-[#0460a9] opacity-100 p-0 right-0 bottom-0">
          <svg className="interactiveIcons" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.86667 5.33398L21.3333 20.8007L21.3333 9.33398L24 9.33398L24 25.334L8 25.334L8 22.6673L19.4667 22.6673L4 7.20065L5.86667 5.33398Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="c02Meganav w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#212121" />
                </svg>
              </div>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#212121" />
              </svg>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-[#212121] text-left">RLT Care</span>
        </div>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="#EC9A1E" />
        </svg>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Disease areas</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55208)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55208">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="products font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Products</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55213)">
                  <path d="M13 9L7 2L1 9" stroke="#0460A9" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55213">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">More</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55222)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55222">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="title w-[936px] h-[60px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px]">Products</span>
        <div className="1pxDivider w-[936px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      </div>
    </div>
  </>}
  {(type == "Products" && state == "Hover") && <>
    <div className="c02Meganav w-[1440px] h-[518px] absolute opacity-100 p-0 left-[1663px] top-[641px]">
      <div className="nav w-[1440px] h-[454px] absolute bg-white opacity-100 p-0 left-0 top-16">
        <div className="frame482650 gap-12 absolute flex-col w-[354px] items-start opacity-100 p-0 left-[1038px] top-[133px] flex">
          <div className="frame482635 gap-4 flex-col w-[265px] items-start opacity-100 p-0 flex">
            <div className="frame482634 gap-3 flex-col w-[249px] justify-end items-start opacity-100 p-0 flex" />
          </div>
        </div>
        <div className="findACenter gap-2 absolute flex-col items-start opacity-100 p-0 left-[1106px] top-[146px] flex">
          <span className="findACentre font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px]">Find a centre</span>
          <span className="youCanUseThisToIdentifyTheMostSuitableLocalTreatmentCenterAllowingYourPatientsToReceiveTherapyCloserToHome font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[254px]">You can use this to identify the most suitable local treatment center, allowing your patients to receive therapy closer to home.</span>
        </div>
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] absolute left-12 top-[147px]">Imaging</span>
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] absolute left-[505px] top-[147px]">Therapies</span>
        <span className="diseaseArea font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] absolute left-[277px] top-[249px] !hidden">Disease area</span>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <div className="1pxDivider w-px h-[454px] absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-[1049px] top-0" />
        <div className="interactiveIcons w-7 h-7 absolute overflow-hidden opacity-100 p-0 left-[1392px] top-[403px]" />
        <img src="/images/image202.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image202 w-[19.63px] h-[21px] absolute opacity-100 object-cover p-0 left-[878px] top-[258px]" />
        <img src="/images/image203.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image203 w-[19.63px] h-[21px] absolute opacity-100 object-cover p-0 left-[1287px] top-[374px]" />
        <div className="squareCTA w-20 h-20 absolute gap-[15.08302116394043px] bg-[#023054] opacity-100 p-0 right-0 bottom-0">
          <svg className="interactiveIcons" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.86667 5.33398L21.3333 20.8007L21.3333 9.33398L24 9.33398L24 25.334L8 25.334L8 22.6673L19.4667 22.6673L4 7.20065L5.86667 5.33398Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="c02Meganav w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#212121" />
                </svg>
              </div>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#212121" />
              </svg>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-[#212121] text-left">RLT Care</span>
        </div>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="#EC9A1E" />
        </svg>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Disease areas</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55366)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55366">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="products font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Products</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55371)">
                  <path d="M13 9L7 2L1 9" stroke="#0460A9" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55371">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">More</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55380)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55380">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="title w-[936px] h-[60px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px]">Products</span>
        <div className="1pxDivider w-[936px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <div className="frame482733 gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-[505px] top-[289px] flex">
        <div className="frame1242 gap-[-2px] flex-col items-start w-full opacity-100 pt-0 pb-1 px-0 flex">
          <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
            <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Pluvicto</span>
            <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
              <div className="terms w-3 h-3 relative opacity-100 p-0">
                <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                </svg>
                <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>
          <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-full">(lutetium Lu 177 vipivotide tetraxetan)</span>
        </div>
        <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Prostate Cancer</span>
      </div>
      <div className="linkWithInfo gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-12 top-[289px] flex">
        <div className="frame1242 gap-[-2px] flex-col items-start opacity-100 pt-0 pb-1 px-0 flex">
          <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
            <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Locametz</span>
            <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
              <div className="terms w-3 h-3 relative opacity-100 p-0">
                <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                </svg>
                <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>
          <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[119px]">(lutetium Lu 177 dotatate)</span>
        </div>
        <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Prostate Cancer</span>
      </div>
      <div className="linkWithInfo gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-b-[#bdbdbd] border-b left-12 top-[373px] flex">
        <div className="frame1242 gap-[-2px] flex-col items-start w-full opacity-100 pt-0 pb-1 px-0 flex">
          <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
            <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">SomaKit TOC</span>
            <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
              <div className="terms w-3 h-3 relative opacity-100 p-0">
                <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                </svg>
                <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>
          <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-full">(gallium Ga 68 edotreotide injection)</span>
        </div>
        <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
      </div>
      <div className="linkWithInfo gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-[269px] top-[289px] flex">
        <div className="frame1242 gap-[-2px] flex-col items-start w-full opacity-100 pt-0 pb-1 px-0 flex">
          <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
            <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">NETSPOT</span>
            <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
              <div className="terms w-3 h-3 relative opacity-100 p-0">
                <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                </svg>
                <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>
          <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-full">(gallium Ga 68 dotatate injection)</span>
        </div>
        <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
      </div>
      <div className="frame482731 gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-[732px] top-[289px] flex">
        <div className="frame1242 gap-[-2px] flex-col items-start opacity-100 pt-0 pb-1 px-0 flex">
          <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
            <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Lutathera</span>
            <div className="frame1247 gap-2 flex-row items-start opacity-100 pl-px pr-0 pt-[3px] pb-0 flex">
              <div className="terms w-3 h-3 relative opacity-100 p-0">
                <svg className="group1244" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={6} cy={6} r="5.625" stroke="#212121" strokeWidth="0.75" />
                </svg>
                <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.04881 2.60808H3.11281C3.67281 2.60808 3.96081 2.34408 3.96081 1.91208C3.96081 1.49608 3.68881 1.20008 3.14481 1.20008H2.04881V2.60808ZM0.632812 5.80008V0.0800781H3.36881C4.50481 0.0800781 5.36881 0.664078 5.36881 1.72808C5.36881 2.39208 5.04081 2.88008 4.37681 3.11208V3.13608C4.87281 3.30408 5.12881 3.61608 5.20881 4.18408C5.32881 4.93608 5.24881 5.65608 5.44881 5.72808V5.80008H4.07281C3.92081 5.71208 3.94481 5.04008 3.85681 4.47208C3.78481 3.94408 3.51281 3.65608 2.90481 3.65608H2.04881V5.80008H0.632812Z" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>
          <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[119px]">(lutetium Lu 177 dotatate)</span>
        </div>
        <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
      </div>
    </div>
  </>}
  {(type == "More" && state == "Default") && <>
    <div className="c02Meganav w-[1440px] h-[494px] absolute bg-white opacity-100 p-0 left-[72px] top-[1193px]">
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <div className="links gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-12 top-[289px] flex">
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Lorem ipsum</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Dolor sit</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
      </div>
      <div className="links gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-[267px] top-[289px] flex">
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Ipsum lorem</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Amer sit dolor</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
      </div>
      <div className="links gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-[486px] top-[289px] flex">
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Lorem ipsum</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Dolor sit</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
      </div>
      <div className="c02Meganav w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#212121" />
                </svg>
              </div>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#212121" />
              </svg>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-[#212121] text-left">RLT Care</span>
        </div>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="#EC9A1E" />
        </svg>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Disease areas</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55600)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55600">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="products font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Products</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[5px] pb-[3px] px-0 flex">
              <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55605)">
                  <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55605">
                    <rect width={14} height={8} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">More</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55614)">
                  <path d="M13 9L7 2L1 9" stroke="#0460A9" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55614">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="header w-[1392px] h-[59px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px]">More</span>
        <div className="1pxDivider w-[1392px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      </div>
    </div>
  </>}
  {(type == "More" && state == "Hover") && <>
    <div className="c02Meganav w-[1440px] h-[494px] absolute bg-white opacity-100 p-0 left-[1663px] top-[1193px]">
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <div className="links gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-12 top-[289px] flex">
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Lorem ipsum</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Dolor sit</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
      </div>
      <div className="links gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-[267px] top-[289px] flex">
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Ipsum lorem</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Amer sit dolor</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
      </div>
      <div className="links gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-[486px] top-[289px] flex">
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#0460a9] text-left tracking-[0px]">Lorem ipsum</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
            <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Dolor sit</span>
          </div>
          <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <img src="/images/image202.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image202 w-[19.63px] h-[21px] absolute opacity-100 object-cover p-0 left-[139px] top-[21px]" />
      </div>
      <div className="c02Meganav w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#212121" />
                </svg>
              </div>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#212121" />
              </svg>
            </div>
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-[#212121] text-left">RLT Care</span>
        </div>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="#EC9A1E" />
        </svg>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Disease areas</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55744)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55744">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="products font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Products</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[5px] pb-[3px] px-0 flex">
              <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55749)">
                  <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55749">
                    <rect width={14} height={8} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
            <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">More</span>
            <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
              <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_55758)">
                  <path d="M13 9L7 2L1 9" stroke="#0460A9" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_55758">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="header w-[1392px] h-[59px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px]">More</span>
        <div className="1pxDivider w-[1392px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      </div>
    </div>
  </>}
</>
  );
}