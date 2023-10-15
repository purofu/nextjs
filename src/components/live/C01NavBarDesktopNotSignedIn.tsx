import React from 'react';

export function C01NavBarDesktopNotSignedIn(props){
	const {
    state = "Default"
  } = props;
  return (
      <>
  {(state == "Default") && <>
    <div className="c01NavBarDesktopNotSignedIn gap-0 absolute flex-col w-[1440px] h-16 items-start overflow-hidden bg-white opacity-100 p-0 left-[63px] top-[46px] flex">
      <div className="nav w-[1440px] h-16 relative overflow-hidden bg-[#0d2741] opacity-100 p-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[253px] opacity-100 p-0 left-[1139px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#34495e] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-16 items-center opacity-100 px-5 py-0 !hidden flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              </div>
            </div>
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <div className="03NavigationAccountSettingsuser w-6 h-6 relative opacity-100 p-0 rounded-3xl !hidden">
              </div>
              <span className="signIn font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">Sign in</span>
            </div>
            <div className="breaker w-px h-full relative bg-[#34495e] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
        </div>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <span className="aboutRLT font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">About RLT</span>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Prostate Cancer</span>
          <span className="neuroendocrineTumors font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Neuroendocrine Tumors</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        </div>
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
        </svg>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      </div>
    </div>
  </>}
  {(state == "Hover") && <>
    <div className="c01NavBarDesktopNotSignedIn gap-0 absolute flex-col w-[1440px] h-16 items-start overflow-hidden bg-white opacity-100 p-0 left-[1675px] top-[46px] flex">
      <div className="nav w-[1440px] h-16 relative overflow-hidden bg-[#0d2741] opacity-100 p-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[253px] opacity-100 p-0 left-[1139px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#34495e] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-16 items-center opacity-100 px-5 py-0 !hidden flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              </div>
            </div>
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <div className="03NavigationAccountSettingsuser w-6 h-6 relative opacity-100 p-0 rounded-3xl !hidden">
              </div>
              <span className="signIn font-['Volta_Modern_Display'] text-base font-semibold text-[#9cbfdd] text-left tracking-[0px]">Sign in</span>
              <div className="component37 w-0 h-0 absolute opacity-100 p-0 left-[104756px] top-[24154.5px]">
                <div className="rectangle4536 absolute bottom-[-Infinity%] right-[-Infinity%] w-[2.904455161956523e+31px] h-[6.987313184434045e+30px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4533 absolute bottom-[-Infinity%] right-[-Infinity%] w-[5.11084391467043e+30px] h-[6.363444597370277e+30px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4534 absolute bottom-[-Infinity%] right-[-Infinity%] w-[3.3656780124564705e+31px] h-[6.363444597370277e+30px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4535 absolute bottom-[-Infinity%] right-[-Infinity%] w-[3.178695873788315e+31px] h-[6.363444597370277e+30px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4537 absolute bottom-[-Infinity%] right-[-Infinity%] w-[2.081733993601803e+31px] h-[2.620242746394222e+30px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4538 absolute bottom-[-Infinity%] right-[-Infinity%] w-[1.8199592412515493e+31px] h-[4.6166193235763144e+30px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4539 absolute bottom-[-Infinity%] right-[-Infinity%] w-[6.48204626490357e+30px] h-[2.121148118528371e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4540 absolute bottom-[-Infinity%] right-[-Infinity%] w-[1.4584603189338667e+31px] h-[9.23323381144935e+30px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4541 absolute bottom-[-Infinity%] right-[-Infinity%] w-[8.725830719995616e+30px] h-[6.488219040138522e+30px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <img src="/images/image202.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image202 absolute bottom-[-Infinity%] h-[4.267251367395555e+31px] right-[-Infinity%] w-[3.988951566231825e+31px] opacity-100 object-cover p-0 left-[NaN%] top-[NaN%]" />
              </div>
            </div>
            <div className="breaker w-px h-full relative bg-[#34495e] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
        </div>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <span className="aboutRLT font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">About RLT</span>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-medium text-[#9cbfdd] text-left tracking-[0px]">Prostate Cancer</span>
          <span className="neuroendocrineTumors font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Neuroendocrine Tumors</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        </div>
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
        </svg>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <div className="component37 w-[19.63px] h-[21px] absolute opacity-100 p-0 left-[474px] top-[32.1875px]">
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
  {(state == "Select") && <>
    <div className="c01NavBarDesktopNotSignedIn gap-0 absolute flex-col w-[1440px] h-16 items-start overflow-hidden bg-white opacity-100 p-0 left-[3499px] top-[46px] flex">
      <div className="nav w-[1440px] h-16 relative overflow-hidden bg-[#0d2741] opacity-100 p-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[253px] opacity-100 p-0 left-[1139px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center bg-[#0460a9] opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#0460a9] opacity-100 p-0" />
            <div className="signIn gap-1 flex-row h-[85px] items-center opacity-100 px-5 py-0 flex">
              <div className="03NavigationAccountSettingsuser w-6 h-6 relative opacity-100 p-0 rounded-3xl !hidden">
              </div>
              <span className="signIn font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">Sign in</span>
              <div className="component37 w-0 h-0 absolute opacity-100 p-0 left-[102932px] top-[24154.5px]">
                <div className="rectangle4536 absolute bottom-[-Infinity%] right-[-Infinity%] w-[1.3936114827958447e+32px] h-[3.3526433742693856e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4533 absolute bottom-[-Infinity%] right-[-Infinity%] w-[2.45227797800926e+31px] h-[3.053298834222968e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4534 absolute bottom-[-Infinity%] right-[-Infinity%] w-[1.6149146386265972e+32px] h-[3.053298834222968e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4535 absolute bottom-[-Infinity%] right-[-Infinity%] w-[1.525197255416963e+32px] h-[3.053298834222968e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4537 absolute bottom-[-Infinity%] right-[-Infinity%] w-[9.988546485028178e+31px] h-[1.257240298210364e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4538 absolute bottom-[-Infinity%] right-[-Infinity%] w-[8.73250157266825e+31px] h-[2.2151389577962773e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4539 absolute bottom-[-Infinity%] right-[-Infinity%] w-[3.110205390403868e+31px] h-[1.0177664070264101e+32px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4540 absolute bottom-[-Infinity%] right-[-Infinity%] w-[6.9979628537641945e+31px] h-[4.430277915592555e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <div className="rectangle4541 absolute bottom-[-Infinity%] right-[-Infinity%] w-[4.186815729772659e+31px] h-[3.1131672586619237e+31px] bg-white opacity-100 p-0 left-[Infinity%] top-[Infinity%]" />
                <img src="/images/image202.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image202 absolute bottom-[-Infinity%] h-[2.0475064022265458e+32px] right-[-Infinity%] w-[1.91397290503893e+32px] opacity-100 object-cover p-0 left-[NaN%] top-[NaN%]" />
              </div>
            </div>
            <div className="breaker w-px h-full relative bg-[#0460a9] opacity-100 p-0" />
          </div>
          <span className="title font-['Volta_Modern_Display'] text-lg font-bold text-white text-left">RLT Care</span>
        </div>
        <div className="links gap-7 absolute flex-row items-center -translate-y-2/4 opacity-100 p-0 left-[340px] top-2/4 flex">
          <span className="aboutRLT font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">About RLT</span>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Prostate Cancer</span>
          <span className="neuroendocrineTumors font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Neuroendocrine Tumors</span>
          <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Setup a facility</span>
          <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">Contact</span>
        </div>
        <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.94602 2.59132C5.82998 3.52929 6.12463 4.44092 6.12463 5.40612C6.12463 8.64952 3.39062 10.9554 3.39062 14.6809C3.39062 18.1132 5.79046 21.6069 12.7304 21.6069C18.9164 21.6069 22.1791 18.5786 22.1791 15.3519C22.1791 12.5911 20.1947 10.2506 16.3655 9.88259L16.3124 10.017C17.1933 10.4038 19.1645 11.9377 19.1645 15.023C19.1645 17.9279 16.7133 20.8595 12.8639 20.8595C8.07173 20.8595 6.41973 18.0596 6.41973 15.4859C6.41973 12.1889 8.72559 9.99062 8.72559 6.98742C8.72559 4.8963 7.14385 2.8324 5.02594 2.45694L4.94602 2.59132Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.8111 16.9868L14.5536 0.392578H10.908L12.6504 16.9868H12.8111ZM106.515 9.06221V20.0083L104.771 20.4101V20.8598H110.248V20.4101L108.504 20.0083V9.06221H111.457L112.429 11.1406H112.804L112.524 8.40571H102.495L102.214 11.1406H102.59L103.558 9.06221H106.515ZM95.7232 14.7708C96.1522 14.6606 98.6254 14.0317 98.6254 11.6771C98.6254 9.80162 97.1886 8.34855 93.6509 8.34855C91.465 8.34855 89.2526 8.39861 88.9839 8.40519V8.85398L90.4282 9.25886V20.0069L88.9839 20.4096V20.8593H94.0953V20.4101L92.417 20.0074V15.1484H93.8613L97.5561 20.8593H100.826V20.4281L99.1703 20.0074L95.7232 14.7708ZM77.7139 15.6457H81.8562L79.7993 10.0938H79.7809L77.7139 15.6457ZM73.8581 20.4098L75.269 20.0084L79.6203 8.40361L81.0756 8.03035L85.5692 20.0076L86.9792 20.4098V20.8599H81.6456V20.4098L83.4491 20.0076L82.1756 16.5648H77.3904L76.124 20.0084L77.9297 20.4098V20.8599H73.8581V20.4098ZM124.623 17.4313H124.968L126.133 20.11C126.481 20.2839 127.351 20.6633 128.36 20.6633C129.869 20.6633 131.25 19.7635 131.25 18.2121C131.25 17.0181 130.479 16.3045 129.224 15.6528C128.823 15.4443 128.405 15.2273 127.987 15.0095C126.505 14.2389 125.027 13.1511 125.027 11.399C125.027 9.49496 126.366 8.02124 129.166 8.02124C130.607 8.02124 131.839 8.42085 132.082 8.50165L132.375 11.3832H132L130.922 9.07295C130.722 8.97064 130.075 8.60221 129.12 8.60221C127.694 8.60221 126.72 9.48178 126.72 10.6977C126.72 11.8017 127.454 12.4946 128.708 13.1441C129.173 13.3843 129.689 13.6544 130.177 13.9069C132.179 14.9437 133.129 15.9031 133.129 17.6838C133.129 19.8812 131.07 21.2447 128.511 21.2447C126.553 21.2447 125.355 20.8398 124.956 20.7151L124.623 17.4313ZM115.793 20.4101L117.537 20.0083V9.25806L115.793 8.85582V8.40571H121.271V8.85538L119.525 9.25806V20.0083L121.271 20.4101V20.8598H115.793V20.4101ZM93.2169 14.5008H92.4173V9.06133C95.0727 9.06133 96.6189 9.66513 96.6189 11.8186C96.6189 13.4179 95.2369 14.5008 93.2169 14.5008ZM63.4037 9.2585L62.0934 8.85538V8.40571H67.1389V8.85538L65.5594 9.25806L69.0434 18.7524H69.0623L72.5464 9.2585L70.9664 8.85582V8.40571H74.6998V8.85582L73.4009 9.2585L68.9846 21.0851H67.867L63.4037 9.2585ZM58.6059 14.9615C58.6059 11.7352 56.6742 8.6025 54.0482 8.6025C51.2536 8.6025 49.9973 11.304 49.9973 14.1926C49.9973 17.0619 51.5913 20.6631 54.5923 20.6631C57.4054 20.6631 58.6059 17.8123 58.6059 14.9615ZM60.7445 14.3052C60.7445 18.7131 57.6868 21.2447 54.3108 21.2447C50.897 21.2447 47.8771 18.6565 47.8771 14.6424C47.8771 10.591 50.9348 8.02124 54.2919 8.02124C58.4188 8.02124 60.7445 11.2291 60.7445 14.3052ZM43.5474 21.057L35.3225 10.4503V20.0083L37.0009 20.4101V20.8598H33.1747V20.4101L34.5439 20.0083V9.59619C34.4087 9.46928 33.894 9.04289 33.3614 8.92783C33.1958 8.89183 32.9684 8.85494 32.9684 8.85494V8.40571H36.2131L43.2567 17.54V9.25894L41.5797 8.85582V8.40571H45.404V8.85582L44.0348 9.25894V18.7401C44.0348 19.6061 44.0963 20.8949 44.1086 21.057H43.5474Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6867 21.475C18.8727 21.475 22.1354 18.4468 22.1354 15.2201C22.1354 12.4593 20.151 10.1187 16.3218 9.75072L16.2686 9.88509C17.1495 10.272 19.1208 11.8058 19.1208 14.8911C19.1208 17.796 16.6696 20.7276 12.8202 20.7276C12.5334 20.7276 12.6002 21.475 12.6867 21.475Z" fill="white" />
        </svg>
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      </div>
    </div>
  </>}
</>
  );
}