import React from 'react';

export function C01NavBarDesktopAuthenticated(props){
	const {
    type = "HCO",
    state = "Default",
    pageType = "Default",
    verrified = "Yes",
    loggedInSSO = "No"
  } = props;
  return (
      <>
  {(type == "HCO" && state == "Default" && pageType == "Default" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-[51px] top-[131px]">
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
            <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#023054" />
              <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#A9B4BF" />
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
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
        <span className="news font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">News</span>
        <span className="support font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Support</span>
      </div>
    </div>
  </>}
  {(type == "HCP" && state == "Default" && pageType == "Default" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-[51px] top-[426px]">
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
            <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#023054" />
              <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#A9B4BF" />
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
              <g clipPath="url(#clip0_5_53763)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53763">
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
              <g clipPath="url(#clip0_5_53765)">
                <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53765">
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
              <g clipPath="url(#clip0_5_53767)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53767">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(type == "HCO" && state == "Default" && pageType == "Landing" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-[#c43b19] opacity-100 p-0 left-[51px] top-[229px]">
      <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
        <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
            <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#023054" />
              <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#A9B4BF" />
            </svg>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
        </div>
        <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
      </div>
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
      </svg>
      <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        <span className="news font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">News</span>
        <span className="support font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Support</span>
      </div>
    </div>
  </>}
  {(type == "HCP" && state == "Default" && pageType == "Landing" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-[#c43b19] opacity-100 p-0 left-[51px] top-[524px]">
      <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
        <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
            <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#023054" />
              <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#A9B4BF" />
            </svg>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
        </div>
        <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
      </div>
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
      </svg>
      <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Disease areas</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_53834)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53834">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="products font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Products</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[5px] pb-[3px] px-0 flex">
            <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_53836)">
                <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53836">
                  <rect width={14} height={8} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Refer patients</span>
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="more font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">More</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_53838)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53838">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(type == "HCO" && state == "Hover" && pageType == "Default" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-[1663px] top-[131px]">
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
            <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#00223D" />
              <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#516476" />
            </svg>
            <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-11 top-[46.5px]">
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
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
        <span className="news font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">News</span>
        <span className="support font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Support</span>
      </div>
      <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[468px] top-9">
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
  </>}
  {(type == "HCP" && state == "Hover" && pageType == "Default" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-[1663px] top-[426px]">
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
            <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#00223D" />
              <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#516476" />
            </svg>
            <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-11 top-[46.5px]">
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
              <g clipPath="url(#clip0_5_53932)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53932">
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
              <g clipPath="url(#clip0_5_53934)">
                <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53934">
                  <rect width={14} height={8} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">More</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_53936)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_53936">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[468px] top-9">
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
  </>}
  {(type == "HCO" && state == "Hover" && pageType == "Landing" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-[#c43b19] opacity-100 p-0 left-[1663px] top-[229px]">
      <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
        <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
            <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#00223D" />
              <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#516476" />
            </svg>
            <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-11 top-[46.5px]">
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
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
        </div>
        <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
      </div>
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#7e1e08] opacity-100 p-0 left-0 bottom-0" />
      <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
      </svg>
      <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        <span className="news font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">News</span>
        <span className="support font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Support</span>
      </div>
      <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[468px] top-9">
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
  </>}
  {(type == "HCP" && state == "Hover" && pageType == "Landing" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-[#c43b19] opacity-100 p-0 left-[1663px] top-[524px]">
      <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
        <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
            <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#00223D" />
              <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#516476" />
            </svg>
            <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-11 top-[46.5px]">
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
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
        </div>
        <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
      </div>
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#7e1e08] opacity-100 p-0 left-0 bottom-0" />
      <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
      </svg>
      <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Disease areas</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_54047)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_54047">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="products font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Products</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[5px] pb-[3px] px-0 flex">
            <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_54049)">
                <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_54049">
                  <rect width={14} height={8} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Refer patients</span>
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="more font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">More</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_54051)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_54051">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[468px] top-9">
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
  </>}
  {(type == "HCO" && state == "Dropdown" && pageType == "Default" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-[254px] absolute opacity-100 p-0 left-[3487px] top-[131px]">
      <div className="component49 absolute w-[1440px] h-16 overflow-hidden bg-white opacity-100 p-0 top-[0%] bottom-[74.8%] inset-x-[0%]">
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
              <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#00223D" />
                <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#516476" />
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
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          <span className="news font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">News</span>
          <span className="support font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Support</span>
        </div>
      </div>
      <div className="dropdown gap-0 absolute flex-col w-[400px] h-[190px] items-start bg-white opacity-100 pt-[83px] pb-[7px] px-0 border-l-[#212121] border-b-[#212121] border-b border-l left-[72.22%] right-[0%] top-[25.2%] bottom-[0%] flex">
        <div className="link1 gap-1 flex-col items-start w-full opacity-100 pt-0 pb-4 px-6 flex">
          <div className="link gap-3 flex-row items-start opacity-100 p-0 flex">
            <div className="linkIcon w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.1346H1.99998V13.6923C1.99998 13.7692 2.03202 13.8397 2.09613 13.9038C2.16024 13.9679 2.23077 14 2.3077 14H17.6923C17.7692 14 17.8397 13.9679 17.9038 13.9038C17.9679 13.8397 18 13.7692 18 13.6923V2.3077C18 2.23077 17.9679 2.16024 17.9038 2.09613C17.8397 2.03203 17.7692 1.99998 17.6923 1.99998H2.3077C2.23077 1.99998 2.16024 2.03203 2.09613 2.09613C2.03202 2.16024 1.99998 2.23077 1.99998 2.3077V4.86535H0.5V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.6923 11.9615L8.63848 10.8769L10.7808 8.74995H0.5V7.25H10.7808L8.63848 5.12308L9.6923 4.03848L13.6538 7.99998L9.6923 11.9615Z" fill="#0460A9" />
              </svg>
            </div>
            <span className="linkName font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Connect your RLT Care Account</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#0460a9] opacity-100 p-0" />
        </div>
        <div className="link2 gap-1 flex-col items-start w-full opacity-100 pt-0 pb-4 px-6 flex">
          <div className="link gap-3 flex-row items-start opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 left-full -right-full inset-y-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6923 0.500048C16.1974 0.500048 16.625 0.675047 16.975 1.02505C17.325 1.37505 17.5 1.80262 17.5 2.30775L17.5 15.6923C17.5 16.1974 17.325 16.625 16.975 16.975C16.625 17.325 16.1974 17.5 15.6923 17.5H8.9904V16H15.6923C15.7692 16 15.8398 15.968 15.9039 15.9039C15.968 15.8398 16 15.7692 16 15.6923V2.30775C16 2.23082 15.968 2.16029 15.9039 2.09617C15.8398 2.03207 15.7692 2.00002 15.6923 2.00002L8.9904 2.00002V0.500048H15.6923ZM4.76925 4.73085L5.80768 5.81542L3.37307 8.25005L11.9039 8.25005V9.75L3.37307 9.75L5.80768 12.1846L4.76925 13.2692L0.500048 9.00002L4.76925 4.73085Z" fill="#212121" />
              </svg>
            </div>
            <span className="signout font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Signout</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="hover w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[329px] top-[104px]">
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
    </div>
  </>}
  {(type == "HCP" && state == "Dropdown" && pageType == "Default" && verrified == "Yes" && loggedInSSO == "No") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-[254px] absolute opacity-100 p-0 left-[3487px] top-[462px]">
      <div className="component49 absolute w-[1440px] h-16 overflow-hidden bg-white opacity-100 p-0 top-[0%] bottom-[74.8%] inset-x-[0%]">
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
              <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#00223D" />
                <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#516476" />
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
                <g clipPath="url(#clip0_5_54183)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_54183">
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
                <g clipPath="url(#clip0_5_54188)">
                  <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_54188">
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
                <g clipPath="url(#clip0_5_54197)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_54197">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown gap-0 absolute flex-col w-[400px] h-[190px] items-start bg-white opacity-100 pt-[83px] pb-[7px] px-0 border-l-[#212121] border-b-[#212121] border-b border-l left-[72.22%] right-[0%] top-[25.2%] bottom-[0%] flex">
        <div className="link1 gap-1 flex-col items-start w-full opacity-100 pt-0 pb-4 px-6 flex">
          <div className="link gap-3 flex-row items-start opacity-100 p-0 flex">
            <div className="linkIcon w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.1346H1.99998V13.6923C1.99998 13.7692 2.03202 13.8397 2.09613 13.9038C2.16024 13.9679 2.23077 14 2.3077 14H17.6923C17.7692 14 17.8397 13.9679 17.9038 13.9038C17.9679 13.8397 18 13.7692 18 13.6923V2.3077C18 2.23077 17.9679 2.16024 17.9038 2.09613C17.8397 2.03203 17.7692 1.99998 17.6923 1.99998H2.3077C2.23077 1.99998 2.16024 2.03203 2.09613 2.09613C2.03202 2.16024 1.99998 2.23077 1.99998 2.3077V4.86535H0.5V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.6923 11.9615L8.63848 10.8769L10.7808 8.74995H0.5V7.25H10.7808L8.63848 5.12308L9.6923 4.03848L13.6538 7.99998L9.6923 11.9615Z" fill="#0460A9" />
              </svg>
            </div>
            <span className="linkName font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Connect your RLT Care Account</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#0460a9] opacity-100 p-0" />
        </div>
        <div className="link2 gap-1 flex-col items-start w-full opacity-100 pt-0 pb-4 px-6 flex">
          <div className="link gap-3 flex-row items-start opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 left-full -right-full inset-y-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6923 0.500048C16.1974 0.500048 16.625 0.675047 16.975 1.02505C17.325 1.37505 17.5 1.80262 17.5 2.30775L17.5 15.6923C17.5 16.1974 17.325 16.625 16.975 16.975C16.625 17.325 16.1974 17.5 15.6923 17.5H8.9904V16H15.6923C15.7692 16 15.8398 15.968 15.9039 15.9039C15.968 15.8398 16 15.7692 16 15.6923V2.30775C16 2.23082 15.968 2.16029 15.9039 2.09617C15.8398 2.03207 15.7692 2.00002 15.6923 2.00002L8.9904 2.00002V0.500048H15.6923ZM4.76925 4.73085L5.80768 5.81542L3.37307 8.25005L11.9039 8.25005V9.75L3.37307 9.75L5.80768 12.1846L4.76925 13.2692L0.500048 9.00002L4.76925 4.73085Z" fill="#212121" />
              </svg>
            </div>
            <span className="signout font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Signout</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="hover w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[329px] top-[104px]">
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
    </div>
  </>}
  {(type == "HCP" && state == "Dropdown" && pageType == "Default" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-[250px] absolute opacity-100 p-0 left-[3487px] top-[1589px]">
      <div className="dropdown gap-0 absolute flex-col w-[344px] h-[186px] items-start bg-white opacity-100 pt-[83px] pb-[7px] px-0 border-l-[#212121] border-b-[#212121] border-b border-l left-[76.11%] right-[0%] top-[25.6%] bottom-[0%] flex">
        <div className="link1 gap-1 flex-col items-start w-full opacity-100 pt-0 pb-4 px-6 flex">
          <div className="link gap-3 flex-row items-start opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.02308 15.2923C4.87308 14.6615 5.79903 14.1635 6.80095 13.7981C7.80287 13.4327 8.86921 13.25 9.99998 13.25C11.1307 13.25 12.1971 13.4327 13.199 13.7981C14.2009 14.1635 15.1269 14.6615 15.9769 15.2923C16.5987 14.609 17.0913 13.8179 17.4548 12.9192C17.8182 12.0205 18 11.0474 18 9.99998C18 7.78331 17.2208 5.89581 15.6625 4.33748C14.1041 2.77914 12.2166 1.99998 9.99998 1.99998C7.78331 1.99998 5.89581 2.77914 4.33748 4.33748C2.77914 5.89581 1.99998 7.78331 1.99998 9.99998C1.99998 11.0474 2.18171 12.0205 2.54518 12.9192C2.90864 13.8179 3.40128 14.609 4.02308 15.2923ZM10.0003 10.75C9.08726 10.75 8.31729 10.4366 7.69038 9.80988C7.06346 9.18314 6.75 8.41328 6.75 7.50028C6.75 6.58726 7.06336 5.81729 7.69008 5.19038C8.31681 4.56346 9.08668 4.25 9.99968 4.25C10.9127 4.25 11.6827 4.56336 12.3096 5.19008C12.9365 5.81681 13.25 6.58668 13.25 7.49968C13.25 8.41269 12.9366 9.18266 12.3099 9.80958C11.6831 10.4365 10.9133 10.75 10.0003 10.75ZM9.99998 19.5C8.68074 19.5 7.44325 19.2519 6.2875 18.7557C5.13173 18.2596 4.12628 17.5839 3.27115 16.7288C2.41603 15.8737 1.7404 14.8682 1.24425 13.7125C0.748083 12.5567 0.5 11.3192 0.5 9.99998C0.5 8.68074 0.748083 7.44325 1.24425 6.2875C1.7404 5.13173 2.41603 4.12628 3.27115 3.27115C4.12628 2.41603 5.13173 1.7404 6.2875 1.24425C7.44325 0.748084 8.68074 0.5 9.99998 0.5C11.3192 0.5 12.5567 0.748084 13.7125 1.24425C14.8682 1.7404 15.8737 2.41603 16.7288 3.27115C17.5839 4.12628 18.2596 5.13173 18.7557 6.2875C19.2519 7.44325 19.5 8.68074 19.5 9.99998C19.5 11.3192 19.2519 12.5567 18.7557 13.7125C18.2596 14.8682 17.5839 15.8737 16.7288 16.7288C15.8737 17.5839 14.8682 18.2596 13.7125 18.7557C12.5567 19.2519 11.3192 19.5 9.99998 19.5ZM9.99998 18C10.9025 18 11.7727 17.8548 12.6105 17.5644C13.4484 17.274 14.1923 16.8679 14.8423 16.3461C14.1923 15.8436 13.458 15.4519 12.6394 15.1711C11.8208 14.8903 10.941 14.75 9.99998 14.75C9.05894 14.75 8.17753 14.8887 7.35573 15.1663C6.53393 15.4439 5.80123 15.8371 5.15765 16.3461C5.80765 16.8679 6.55157 17.274 7.3894 17.5644C8.22722 17.8548 9.09741 18 9.99998 18ZM9.99998 9.25C10.4974 9.25 10.9134 9.08269 11.2481 8.74808C11.5827 8.41344 11.75 7.99741 11.75 7.49998C11.75 7.00254 11.5827 6.58651 11.2481 6.25188C10.9134 5.91726 10.4974 5.74995 9.99998 5.74995C9.50254 5.74995 9.08651 5.91726 8.75187 6.25188C8.41726 6.58651 8.24995 7.00254 8.24995 7.49998C8.24995 7.99741 8.41726 8.41344 8.75187 8.74808C9.08651 9.08269 9.50254 9.25 9.99998 9.25Z" fill="#0460A9" />
              </svg>
            </div>
            <span className="linkName font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Profile</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#0460a9] opacity-100 p-0" />
        </div>
        <div className="link2 gap-1 flex-col items-start w-full opacity-100 pt-0 pb-4 px-6 flex">
          <div className="link gap-3 flex-row items-start opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 left-full -right-full inset-y-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6923 0.500048C16.1974 0.500048 16.625 0.675047 16.975 1.02505C17.325 1.37505 17.5 1.80262 17.5 2.30775L17.5 15.6923C17.5 16.1974 17.325 16.625 16.975 16.975C16.625 17.325 16.1974 17.5 15.6923 17.5H8.9904V16H15.6923C15.7692 16 15.8398 15.968 15.9039 15.9039C15.968 15.8398 16 15.7692 16 15.6923V2.30775C16 2.23082 15.968 2.16029 15.9039 2.09617C15.8398 2.03207 15.7692 2.00002 15.6923 2.00002L8.9904 2.00002V0.500048H15.6923ZM4.76925 4.73085L5.80768 5.81542L3.37307 8.25005L11.9039 8.25005V9.75L3.37307 9.75L5.80768 12.1846L4.76925 13.2692L0.500048 9.00002L4.76925 4.73085Z" fill="#212121" />
              </svg>
            </div>
            <span className="signOut font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Sign out</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="hover w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[293px] top-[99px]">
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
      <div className="component50 absolute w-[1440px] h-16 overflow-hidden bg-white opacity-100 p-0 top-[0%] bottom-[74.4%] inset-x-[0%]">
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
                <g clipPath="url(#clip0_5_9896)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_9896">
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
                <g clipPath="url(#clip0_5_9901)">
                  <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_9901">
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
                <g clipPath="url(#clip0_5_9910)">
                  <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
                </g>
                <defs>
                  <clipPath id="clip0_5_9910">
                    <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(type == "HCO" && state == "Dropdown" && pageType == "Default" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-[250px] absolute opacity-100 p-0 left-[3487px] top-[1916px]">
      <div className="dropdown gap-0 absolute flex-col w-[344px] h-[186px] items-start bg-white opacity-100 pt-[83px] pb-[7px] px-0 border-l-[#212121] border-b-[#212121] border-b border-l left-[76.11%] right-[0%] top-[25.6%] bottom-[0%] flex">
        <div className="link1 gap-1 flex-col items-start w-full opacity-100 pt-0 pb-4 px-6 flex">
          <div className="link gap-3 flex-row items-start opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.02308 15.2923C4.87308 14.6615 5.79903 14.1635 6.80095 13.7981C7.80287 13.4327 8.86921 13.25 9.99998 13.25C11.1307 13.25 12.1971 13.4327 13.199 13.7981C14.2009 14.1635 15.1269 14.6615 15.9769 15.2923C16.5987 14.609 17.0913 13.8179 17.4548 12.9192C17.8182 12.0205 18 11.0474 18 9.99998C18 7.78331 17.2208 5.89581 15.6625 4.33748C14.1041 2.77914 12.2166 1.99998 9.99998 1.99998C7.78331 1.99998 5.89581 2.77914 4.33748 4.33748C2.77914 5.89581 1.99998 7.78331 1.99998 9.99998C1.99998 11.0474 2.18171 12.0205 2.54518 12.9192C2.90864 13.8179 3.40128 14.609 4.02308 15.2923ZM10.0003 10.75C9.08726 10.75 8.31729 10.4366 7.69038 9.80988C7.06346 9.18314 6.75 8.41328 6.75 7.50028C6.75 6.58726 7.06336 5.81729 7.69008 5.19038C8.31681 4.56346 9.08668 4.25 9.99968 4.25C10.9127 4.25 11.6827 4.56336 12.3096 5.19008C12.9365 5.81681 13.25 6.58668 13.25 7.49968C13.25 8.41269 12.9366 9.18266 12.3099 9.80958C11.6831 10.4365 10.9133 10.75 10.0003 10.75ZM9.99998 19.5C8.68074 19.5 7.44325 19.2519 6.2875 18.7557C5.13173 18.2596 4.12628 17.5839 3.27115 16.7288C2.41603 15.8737 1.7404 14.8682 1.24425 13.7125C0.748083 12.5567 0.5 11.3192 0.5 9.99998C0.5 8.68074 0.748083 7.44325 1.24425 6.2875C1.7404 5.13173 2.41603 4.12628 3.27115 3.27115C4.12628 2.41603 5.13173 1.7404 6.2875 1.24425C7.44325 0.748084 8.68074 0.5 9.99998 0.5C11.3192 0.5 12.5567 0.748084 13.7125 1.24425C14.8682 1.7404 15.8737 2.41603 16.7288 3.27115C17.5839 4.12628 18.2596 5.13173 18.7557 6.2875C19.2519 7.44325 19.5 8.68074 19.5 9.99998C19.5 11.3192 19.2519 12.5567 18.7557 13.7125C18.2596 14.8682 17.5839 15.8737 16.7288 16.7288C15.8737 17.5839 14.8682 18.2596 13.7125 18.7557C12.5567 19.2519 11.3192 19.5 9.99998 19.5ZM9.99998 18C10.9025 18 11.7727 17.8548 12.6105 17.5644C13.4484 17.274 14.1923 16.8679 14.8423 16.3461C14.1923 15.8436 13.458 15.4519 12.6394 15.1711C11.8208 14.8903 10.941 14.75 9.99998 14.75C9.05894 14.75 8.17753 14.8887 7.35573 15.1663C6.53393 15.4439 5.80123 15.8371 5.15765 16.3461C5.80765 16.8679 6.55157 17.274 7.3894 17.5644C8.22722 17.8548 9.09741 18 9.99998 18ZM9.99998 9.25C10.4974 9.25 10.9134 9.08269 11.2481 8.74808C11.5827 8.41344 11.75 7.99741 11.75 7.49998C11.75 7.00254 11.5827 6.58651 11.2481 6.25188C10.9134 5.91726 10.4974 5.74995 9.99998 5.74995C9.50254 5.74995 9.08651 5.91726 8.75187 6.25188C8.41726 6.58651 8.24995 7.00254 8.24995 7.49998C8.24995 7.99741 8.41726 8.41344 8.75187 8.74808C9.08651 9.08269 9.50254 9.25 9.99998 9.25Z" fill="#0460A9" />
              </svg>
            </div>
            <span className="linkName font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Profile</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#0460a9] opacity-100 p-0" />
        </div>
        <div className="link2 gap-1 flex-col items-start w-full opacity-100 pt-0 pb-4 px-6 flex">
          <div className="link gap-3 flex-row items-start opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 left-full -right-full inset-y-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6923 0.500048C16.1974 0.500048 16.625 0.675047 16.975 1.02505C17.325 1.37505 17.5 1.80262 17.5 2.30775L17.5 15.6923C17.5 16.1974 17.325 16.625 16.975 16.975C16.625 17.325 16.1974 17.5 15.6923 17.5H8.9904V16H15.6923C15.7692 16 15.8398 15.968 15.9039 15.9039C15.968 15.8398 16 15.7692 16 15.6923V2.30775C16 2.23082 15.968 2.16029 15.9039 2.09617C15.8398 2.03207 15.7692 2.00002 15.6923 2.00002L8.9904 2.00002V0.500048H15.6923ZM4.76925 4.73085L5.80768 5.81542L3.37307 8.25005L11.9039 8.25005V9.75L3.37307 9.75L5.80768 12.1846L4.76925 13.2692L0.500048 9.00002L4.76925 4.73085Z" fill="#212121" />
              </svg>
            </div>
            <span className="signOut font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Sign out</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="hover w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[293px] top-[99px]">
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
      <div className="component50 absolute w-[1440px] h-16 overflow-hidden bg-white opacity-100 p-0 top-[0%] bottom-[74.4%] inset-x-[0%]">
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
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          <span className="news font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">News</span>
          <span className="support font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Support</span>
        </div>
      </div>
    </div>
  </>}
  {(type == "HCO" && state == "Default" && pageType == "Default" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-[79px] top-[1916px]">
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
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
        <span className="news font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">News</span>
        <span className="support font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Support</span>
      </div>
    </div>
  </>}
  {(type == "HCO" && state == "Default" && pageType == "Landing" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-[#c43b19] opacity-100 p-0 left-[79px] top-[2014px]">
      <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
        <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
            <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="white" />
            </svg>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
        </div>
        <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
      </div>
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
      </svg>
      <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        <span className="news font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">News</span>
        <span className="support font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Support</span>
      </div>
    </div>
  </>}
  {(type == "HCO" && state == "Hover" && pageType == "Default" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-[1691px] top-[1916px]">
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
              <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#0460A9" />
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
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
        <span className="news font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">News</span>
        <span className="support font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Support</span>
      </div>
      <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[460px] top-[35px]">
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
  </>}
  {(type == "HCO" && state == "Hover" && pageType == "Landing" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-[#c43b19] opacity-100 p-0 left-[1691px] top-[2014px]">
      <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
        <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
            <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#450907" />
            </svg>
            <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-11 top-[48.5px]">
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
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
        </div>
        <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
      </div>
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
      </svg>
      <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        <span className="news font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">News</span>
        <span className="support font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Support</span>
      </div>
      <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[460px] top-[35px]">
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
  </>}
  {(type == "HCP" && state == "Default" && pageType == "Default" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-[79px] top-[1589px]">
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
              <g clipPath="url(#clip0_5_5328)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5328">
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
              <g clipPath="url(#clip0_5_5330)">
                <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5330">
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
              <g clipPath="url(#clip0_5_5332)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5332">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(type == "HCP" && state == "Default" && pageType == "Landing" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-[#c43b19] opacity-100 p-0 left-[79px] top-[1687px]">
      <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
        <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
            <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="white" />
            </svg>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
        </div>
        <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
      </div>
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
      </svg>
      <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Disease areas</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_5954)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5954">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="products font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Products</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[5px] pb-[3px] px-0 flex">
            <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_5956)">
                <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5956">
                  <rect width={14} height={8} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Refer patients</span>
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="more font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">More</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_5958)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5958">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(type == "HCP" && state == "Hover" && pageType == "Default" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-[1691px] top-[1589px]">
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
              <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#0460A9" />
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
              <g clipPath="url(#clip0_5_54688)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_54688">
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
              <g clipPath="url(#clip0_5_54690)">
                <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_54690">
                  <rect width={14} height={8} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">More</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_54692)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="#212121" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_54692">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[850px] top-[35px]">
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
  </>}
  {(type == "HCP" && state == "Hover" && pageType == "Landing" && verrified == "No" && loggedInSSO == "Yes") && <>
    <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 absolute overflow-hidden bg-[#c43b19] opacity-100 p-0 left-[1691px] top-[1687px]">
      <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
        <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="search gap-1 flex-row h-full items-center opacity-100 px-5 py-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
          <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
            <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#450907" />
            </svg>
            <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-11 top-[48.5px]">
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
          <div className="breaker w-px h-full relative bg-[#7e1e08] opacity-100 p-0" />
        </div>
        <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
      </div>
      <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
      </svg>
      <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Disease areas</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_5561)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5561">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="products font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Products</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[5px] pb-[3px] px-0 flex">
            <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_5563)">
                <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5563">
                  <rect width={14} height={8} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Refer patients</span>
        <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
        <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
        <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        <div className="dropdown gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <span className="more font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">More</span>
          <div className="navDropdown gap-1 items-center opacity-100 pt-[3px] pb-0 px-0 flex">
            <svg className="boundingBox" width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_5565)">
                <path d="M1 1.09906e-07L7 7L13 1.15898e-06" stroke="white" strokeWidth="1.3" />
              </g>
              <defs>
                <clipPath id="clip0_5_5565">
                  <rect width={14} height={8} fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[850px] top-[35px]">
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
  </>}
</>
  );
}