import React from 'react';

export function C03Search(props){
	const {
    size = "L",
    searchEntered = "Yes"
  } = props;
  return (
      <>
  {(size == "M" && searchEntered == "Yes") && <>
    <div className="c03Search gap-0 absolute flex-col items-start opacity-100 p-0 left-[1570px] top-[21px] flex">
      <div className="c01NavBarTabletAuthenticated w-[768px] h-16 relative overflow-hidden bg-white opacity-100 p-0">
        <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-[#212121] text-left w-[110px] absolute -translate-y-2/4 left-[175px] top-2/4">RLT Care</span>
        <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="#273E54" />
        </svg>
        <div className="frame482676 gap-1 absolute flex-row h-16 items-center -translate-y-2/4 bg-[#273e54] opacity-100 p-2 left-[631px] top-2/4 flex">
          <div className="search w-8 h-8 relative p-0">
            <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0648 23.4367L13.6904 15.0623C13.0237 15.6127 12.2571 16.0435 11.3904 16.3546C10.5237 16.6657 9.62716 16.8213 8.70068 16.8213C6.42179 16.8213 4.4931 16.0322 2.91461 14.4541C1.33612 12.8761 0.546875 10.9479 0.546875 8.66957C0.546875 6.39126 1.33592 4.46236 2.91401 2.88287C4.4921 1.3034 6.4203 0.513672 8.69861 0.513672C10.9769 0.513672 12.9058 1.30292 14.4853 2.88141C16.0648 4.4599 16.8545 6.38858 16.8545 8.66747C16.8545 9.61961 16.6947 10.529 16.375 11.3957C16.0553 12.2623 15.6288 13.0162 15.0955 13.6572L23.4699 22.0316L22.0648 23.4367ZM8.70068 14.8213C10.4186 14.8213 11.8738 14.2252 13.0661 13.0329C14.2584 11.8406 14.8545 10.3854 14.8545 8.66747C14.8545 6.94952 14.2584 5.49438 13.0661 4.30207C11.8738 3.10976 10.4186 2.5136 8.70068 2.5136C6.98272 2.5136 5.52759 3.10976 4.33528 4.30207C3.14299 5.49438 2.54684 6.94952 2.54684 8.66747C2.54684 10.3854 3.14299 11.8406 4.33528 13.0329C5.52759 14.2252 6.98272 14.8213 8.70068 14.8213Z" fill="white" />
            </svg>
          </div>
        </div>
        <svg className="logo" width={111} height={19} viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16169 2.08519C3.8885 2.85642 4.13078 3.60598 4.13078 4.39959C4.13078 7.06639 1.88281 8.96231 1.88281 12.0256C1.88281 14.8476 3.85601 17.7202 9.56221 17.7202C14.6485 17.7202 17.3311 15.2303 17.3311 12.5773C17.3311 10.3073 15.6995 8.38281 12.5511 8.08024L12.5074 8.19073C13.2317 8.50882 14.8525 9.77001 14.8525 12.3068C14.8525 14.6952 12.837 17.1057 9.67197 17.1057C5.73172 17.1057 4.37341 14.8036 4.37341 12.6874C4.37341 9.97653 6.26934 8.16906 6.26934 5.69977C6.26934 3.9804 4.9688 2.28342 3.2274 1.97471L3.16169 2.08519Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.62857 13.9215L11.0613 0.277344H8.06373L9.49642 13.9215H9.62857ZM86.6739 7.4057V16.4059L85.2402 16.7362V17.106H89.743V16.7362L88.3092 16.4059V7.4057H90.7377L91.5363 9.1146H91.845L91.6143 6.86592H83.3688L83.1377 9.1146H83.4468L84.2426 7.4057H86.6739ZM77.8007 12.0994C78.1534 12.0088 80.1869 11.4918 80.1869 9.55576C80.1869 8.01367 79.0055 6.81892 76.0968 6.81892C74.2995 6.81892 72.4805 6.86008 72.2595 6.86549V7.2345L73.447 7.5674V16.4047L72.2595 16.7358V17.1055H76.4622V16.7362L75.0823 16.4051V12.4099H76.2698L79.3078 17.1055H81.9962V16.751L80.635 16.4051L77.8007 12.0994ZM62.9931 12.8188H66.399L64.7077 8.25393H64.6926L62.9931 12.8188ZM59.8227 16.7359L60.9828 16.4059L64.5606 6.86419L65.7571 6.55729L69.4519 16.4052L70.6112 16.7359V17.106H66.2258V16.7359L67.7087 16.4052L66.6616 13.5745H62.7271L61.6858 16.4059L63.1705 16.7359V17.106H59.8227V16.7359ZM101.563 14.287H101.847L102.804 16.4894C103.09 16.6324 103.806 16.9444 104.635 16.9444C105.876 16.9444 107.012 16.2046 107.012 14.9289C107.012 13.9472 106.378 13.3605 105.346 12.8247C105.016 12.6532 104.673 12.4748 104.329 12.2957C103.11 11.6621 101.895 10.7677 101.895 9.32708C101.895 7.76152 102.996 6.5498 105.298 6.5498C106.483 6.5498 107.496 6.87837 107.695 6.9448L107.937 9.31408H107.628L106.742 7.41454C106.578 7.33041 106.045 7.02748 105.26 7.02748C104.088 7.02748 103.287 7.75069 103.287 8.75046C103.287 9.65817 103.89 10.2279 104.922 10.7619C105.304 10.9594 105.728 11.1815 106.129 11.3891C107.775 12.2416 108.556 13.0305 108.556 14.4946C108.556 16.3013 106.863 17.4224 104.759 17.4224C103.149 17.4224 102.164 17.0895 101.837 16.987L101.563 14.287ZM94.3025 16.7362L95.7367 16.4059V7.56674L94.3025 7.23601V6.86592H98.8064V7.23564L97.3712 7.56674V16.4059L98.8068 16.7362V17.106H94.3025V16.7362ZM75.74 11.8774H75.0825V7.40498C77.2659 7.40498 78.5372 7.90144 78.5372 9.67208C78.5372 10.9871 77.4009 11.8774 75.74 11.8774ZM51.2269 7.5671L50.1495 7.23564V6.86592H54.2981V7.23564L52.9994 7.56674L55.864 15.3732H55.8795L58.7442 7.5671L57.4451 7.23601V6.86592H60.5148V7.23601L59.4468 7.5671L55.8156 17.2912H54.8967L51.2269 7.5671ZM47.2821 12.2562C47.2821 9.60353 45.6937 7.02772 43.5346 7.02772C41.2368 7.02772 40.2038 9.24897 40.2038 11.624C40.2038 13.9832 41.5145 16.9443 43.982 16.9443C46.2949 16.9443 47.2821 14.6002 47.2821 12.2562ZM49.0404 11.7166C49.0404 15.3409 46.5263 17.4224 43.7505 17.4224C40.9436 17.4224 38.4606 15.2943 38.4606 11.9939C38.4606 8.66273 40.9747 6.5498 43.735 6.5498C47.1282 6.5498 49.0404 9.18735 49.0404 11.7166ZM34.9006 17.2681L28.1379 8.54702V16.4059L29.5179 16.7362V17.106H26.372V16.7362L27.4978 16.4059V7.84475C27.3866 7.74041 26.9634 7.38982 26.5254 7.29522C26.3893 7.26561 26.2023 7.23528 26.2023 7.23528V6.86592H28.8702L34.6616 14.3763V7.56746L33.2827 7.23601V6.86592H36.4272V7.23601L35.3014 7.56746V15.3631C35.3014 16.0751 35.3519 17.1348 35.362 17.2681H34.9006Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.52622 17.6118C14.6125 17.6118 17.2952 15.1219 17.2952 12.4688C17.2952 10.1988 15.6635 8.27438 12.5151 7.97181L12.4714 8.0823C13.1957 8.40039 14.8165 9.66157 14.8165 12.1984C14.8165 14.5868 12.801 16.9972 9.63599 16.9972C9.4002 16.9972 9.45513 17.6118 9.52622 17.6118Z" fill="#EC9A1E" />
        </svg>
        <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[687px] top-2/4">
          <svg className="group1184" width={30} height={10} viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1={1} x2={30} y2={1} stroke="#212121" strokeWidth={2} />
            <line y1={9} x2={30} y2={9} stroke="#212121" strokeWidth={2} />
          </svg>
        </div>
        <div className="1pxDivider w-[768px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      </div>
      <div className="content gap-0 flex-col w-[768px] items-start bg-[#273e54] opacity-100 px-0 py-10 flex">
        <div className="frame482646 gap-12 flex-col items-start w-full opacity-100 pt-12 pb-0 px-8 flex">
          <div className="search gap-4 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="search gap-[90px] flex-row justify-between items-start w-full opacity-100 p-0 flex">
              <span className="example font-['Volta_Modern_Display'] text-[54px] font-normal text-white text-left tracking-[-0.35px] w-[644px] flex-1 min-w-0">Understanding GEP-NETs</span>
              <div className="interactiveIcons w-[60px] h-[60px] relative opacity-100 p-0">
                <div className="boundingBox absolute w-[60px] h-[60px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={46} height={46} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42 45.5L26.25 29.75C25 30.75 23.5625 31.5417 21.9375 32.125C20.3125 32.7083 18.5833 33 16.75 33C12.2083 33 8.36458 31.4271 5.21875 28.2812C2.07292 25.1354 0.5 21.2917 0.5 16.75C0.5 12.2083 2.07292 8.36458 5.21875 5.21875C8.36458 2.07292 12.2083 0.5 16.75 0.5C21.2917 0.5 25.1354 2.07292 28.2812 5.21875C31.4271 8.36458 33 12.2083 33 16.75C33 18.5833 32.7083 20.3125 32.125 21.9375C31.5417 23.5625 30.75 25 29.75 26.25L45.5 42L42 45.5ZM16.75 28C19.875 28 22.5312 26.9062 24.7188 24.7188C26.9062 22.5312 28 19.875 28 16.75C28 13.625 26.9062 10.9688 24.7188 8.78125C22.5312 6.59375 19.875 5.5 16.75 5.5C13.625 5.5 10.9688 6.59375 8.78125 8.78125C6.59375 10.9688 5.5 13.625 5.5 16.75C5.5 19.875 6.59375 22.5312 8.78125 24.7188C10.9688 26.9062 13.625 28 16.75 28Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="w-full h-px relative bg-white opacity-100 p-0 underline" />
          </div>
        </div>
        <div className="frame482645 gap-0 flex-col items-start w-full bg-[#273e54] opacity-100 p-8 flex">
          <div className="frame482834 gap-1 flex-col h-[97px] items-start w-full opacity-100 p-0 flex">
            <span className="recommendedSearches font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">Recommended Searches</span>
            <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
              <span className="gEPNETsQualification font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Qualification </span>
              <span className="gEPNETsTreatments font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Treatments</span>
              <span className="gEPNETsPatientResources font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Patient Resources</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && searchEntered == "Yes") && <>
    <div className="c03Search gap-0 absolute flex-col items-start opacity-100 p-0 left-4 top-[21px] flex">
      <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 relative overflow-hidden bg-white opacity-100 p-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-full items-center bg-[#273e54] opacity-100 px-5 py-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
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
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0 !hidden" />
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
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      </div>
      <div className="content gap-0 flex-col w-[1440px] h-[369px] items-start bg-[#273e54] opacity-100 p-0 flex">
        <div className="frame482646 gap-12 flex-col h-[369px] items-start bg-[#273e54] opacity-100 pt-24 pb-16 px-12 flex">
          <div className="search gap-4 flex-col items-start opacity-100 p-0 flex">
            <div className="search gap-[90px] flex-row w-[1344px] justify-between items-start opacity-100 p-0 flex">
              <span className="example font-['Volta_Modern_Display'] text-[62px] font-medium text-white text-left tracking-[-0.35px] w-[1230.29px]">Understanding GEP-NETs</span>
              <div className="interactiveIcons w-[60px] h-[60px] relative opacity-100 p-0">
                <div className="boundingBox absolute w-[60px] h-[60px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={46} height={46} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42 45.5L26.25 29.75C25 30.75 23.5625 31.5417 21.9375 32.125C20.3125 32.7083 18.5833 33 16.75 33C12.2083 33 8.36458 31.4271 5.21875 28.2812C2.07292 25.1354 0.5 21.2917 0.5 16.75C0.5 12.2083 2.07292 8.36458 5.21875 5.21875C8.36458 2.07292 12.2083 0.5 16.75 0.5C21.2917 0.5 25.1354 2.07292 28.2812 5.21875C31.4271 8.36458 33 12.2083 33 16.75C33 18.5833 32.7083 20.3125 32.125 21.9375C31.5417 23.5625 30.75 25 29.75 26.25L45.5 42L42 45.5ZM16.75 28C19.875 28 22.5312 26.9062 24.7188 24.7188C26.9062 22.5312 28 19.875 28 16.75C28 13.625 26.9062 10.9688 24.7188 8.78125C22.5312 6.59375 19.875 5.5 16.75 5.5C13.625 5.5 10.9688 6.59375 8.78125 8.78125C6.59375 10.9688 5.5 13.625 5.5 16.75C5.5 19.875 6.59375 22.5312 8.78125 24.7188C10.9688 26.9062 13.625 28 16.75 28Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="w-[1344px] h-px relative bg-white opacity-100 p-0 underline" />
          </div>
        </div>
      </div>
      <div className="frame482834 gap-1 flex-col w-[294px] h-[96.33px] items-start absolute opacity-100 p-0 flex">
        <span className="recommendedSearches font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">Recommended Searches</span>
        <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
          <span className="gEPNETsQualification font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Qualification </span>
          <span className="gEPNETsTreatments font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Treatments</span>
          <span className="gEPNETsPatientResources font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Patient Resources</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && searchEntered == "Yes") && <>
    <div className="c03Search gap-0 absolute flex-col w-[375px] items-start opacity-100 p-0 left-[2480px] top-4 flex">
      <div className="c01NavBarMobileAuthenticated w-[375px] h-16 relative overflow-hidden bg-white opacity-100 p-0">
        <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-[#212121] text-left w-[110px] absolute -translate-y-2/4 left-[159px] top-2/4">RLT Care</span>
        <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="black" />
        </svg>
        <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[310px] top-2/4">
          <svg className="group1184" width={30} height={10} viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1={1} x2={30} y2={1} stroke="#212121" strokeWidth={2} />
            <line y1={9} x2={30} y2={9} stroke="#212121" strokeWidth={2} />
          </svg>
        </div>
        <div className="frame482676 gap-1 absolute flex-row h-16 items-center bg-[#34495e] opacity-100 p-2 left-[254px] top-0 flex">
          <div className="search w-8 h-8 relative p-0">
            <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0648 23.4367L13.6904 15.0623C13.0237 15.6127 12.2571 16.0435 11.3904 16.3546C10.5237 16.6657 9.62716 16.8213 8.70068 16.8213C6.42179 16.8213 4.4931 16.0322 2.91461 14.4541C1.33612 12.8761 0.546875 10.9479 0.546875 8.66957C0.546875 6.39126 1.33592 4.46236 2.91401 2.88287C4.4921 1.3034 6.4203 0.513672 8.69861 0.513672C10.9769 0.513672 12.9058 1.30292 14.4853 2.88141C16.0648 4.4599 16.8545 6.38858 16.8545 8.66747C16.8545 9.61961 16.6947 10.529 16.375 11.3957C16.0553 12.2623 15.6288 13.0162 15.0955 13.6572L23.4699 22.0316L22.0648 23.4367ZM8.70068 14.8213C10.4186 14.8213 11.8738 14.2252 13.0661 13.0329C14.2584 11.8406 14.8545 10.3854 14.8545 8.66747C14.8545 6.94952 14.2584 5.49438 13.0661 4.30207C11.8738 3.10976 10.4186 2.5136 8.70068 2.5136C6.98272 2.5136 5.52759 3.10976 4.33528 4.30207C3.14299 5.49438 2.54684 6.94952 2.54684 8.66747C2.54684 10.3854 3.14299 11.8406 4.33528 13.0329C5.52759 14.2252 6.98272 14.8213 8.70068 14.8213Z" fill="white" />
            </svg>
          </div>
        </div>
        <svg className="logo" width={111} height={19} viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16169 2.08519C3.8885 2.85642 4.13078 3.60598 4.13078 4.39959C4.13078 7.06639 1.88281 8.96231 1.88281 12.0256C1.88281 14.8476 3.85601 17.7202 9.56221 17.7202C14.6485 17.7202 17.3311 15.2303 17.3311 12.5773C17.3311 10.3073 15.6995 8.38281 12.5511 8.08024L12.5074 8.19073C13.2317 8.50882 14.8525 9.77001 14.8525 12.3068C14.8525 14.6952 12.837 17.1057 9.67197 17.1057C5.73172 17.1057 4.37341 14.8036 4.37341 12.6874C4.37341 9.97653 6.26934 8.16906 6.26934 5.69977C6.26934 3.9804 4.9688 2.28342 3.2274 1.97471L3.16169 2.08519Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.62857 13.9215L11.0613 0.277344H8.06373L9.49642 13.9215H9.62857ZM86.6739 7.4057V16.4059L85.2402 16.7362V17.106H89.743V16.7362L88.3092 16.4059V7.4057H90.7377L91.5363 9.1146H91.845L91.6143 6.86592H83.3688L83.1377 9.1146H83.4468L84.2426 7.4057H86.6739ZM77.8007 12.0994C78.1534 12.0088 80.1869 11.4918 80.1869 9.55576C80.1869 8.01367 79.0055 6.81892 76.0968 6.81892C74.2995 6.81892 72.4805 6.86008 72.2595 6.86549V7.2345L73.447 7.5674V16.4047L72.2595 16.7358V17.1055H76.4622V16.7362L75.0823 16.4051V12.4099H76.2698L79.3078 17.1055H81.9962V16.751L80.635 16.4051L77.8007 12.0994ZM62.9931 12.8188H66.399L64.7077 8.25393H64.6926L62.9931 12.8188ZM59.8227 16.7359L60.9828 16.4059L64.5606 6.86419L65.7571 6.55729L69.4519 16.4052L70.6112 16.7359V17.106H66.2258V16.7359L67.7087 16.4052L66.6616 13.5745H62.7271L61.6858 16.4059L63.1705 16.7359V17.106H59.8227V16.7359ZM101.563 14.287H101.847L102.804 16.4894C103.09 16.6324 103.806 16.9444 104.635 16.9444C105.876 16.9444 107.012 16.2046 107.012 14.9289C107.012 13.9472 106.378 13.3605 105.346 12.8247C105.016 12.6532 104.673 12.4748 104.329 12.2957C103.11 11.6621 101.895 10.7677 101.895 9.32708C101.895 7.76152 102.996 6.5498 105.298 6.5498C106.483 6.5498 107.496 6.87837 107.695 6.9448L107.937 9.31408H107.628L106.742 7.41454C106.578 7.33041 106.045 7.02748 105.26 7.02748C104.088 7.02748 103.287 7.75069 103.287 8.75046C103.287 9.65817 103.89 10.2279 104.922 10.7619C105.304 10.9594 105.728 11.1815 106.129 11.3891C107.775 12.2416 108.556 13.0305 108.556 14.4946C108.556 16.3013 106.863 17.4224 104.759 17.4224C103.149 17.4224 102.164 17.0895 101.837 16.987L101.563 14.287ZM94.3025 16.7362L95.7367 16.4059V7.56674L94.3025 7.23601V6.86592H98.8064V7.23564L97.3712 7.56674V16.4059L98.8068 16.7362V17.106H94.3025V16.7362ZM75.74 11.8774H75.0825V7.40498C77.2659 7.40498 78.5372 7.90144 78.5372 9.67208C78.5372 10.9871 77.4009 11.8774 75.74 11.8774ZM51.2269 7.5671L50.1495 7.23564V6.86592H54.2981V7.23564L52.9994 7.56674L55.864 15.3732H55.8795L58.7442 7.5671L57.4451 7.23601V6.86592H60.5148V7.23601L59.4468 7.5671L55.8156 17.2912H54.8967L51.2269 7.5671ZM47.2821 12.2562C47.2821 9.60353 45.6937 7.02772 43.5346 7.02772C41.2368 7.02772 40.2038 9.24897 40.2038 11.624C40.2038 13.9832 41.5145 16.9443 43.982 16.9443C46.2949 16.9443 47.2821 14.6002 47.2821 12.2562ZM49.0404 11.7166C49.0404 15.3409 46.5263 17.4224 43.7505 17.4224C40.9436 17.4224 38.4606 15.2943 38.4606 11.9939C38.4606 8.66273 40.9747 6.5498 43.735 6.5498C47.1282 6.5498 49.0404 9.18735 49.0404 11.7166ZM34.9006 17.2681L28.1379 8.54702V16.4059L29.5179 16.7362V17.106H26.372V16.7362L27.4978 16.4059V7.84475C27.3866 7.74041 26.9634 7.38982 26.5254 7.29522C26.3893 7.26561 26.2023 7.23528 26.2023 7.23528V6.86592H28.8702L34.6616 14.3763V7.56746L33.2827 7.23601V6.86592H36.4272V7.23601L35.3014 7.56746V15.3631C35.3014 16.0751 35.3519 17.1348 35.362 17.2681H34.9006Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.52622 17.6118C14.6125 17.6118 17.2952 15.1219 17.2952 12.4688C17.2952 10.1988 15.6635 8.27438 12.5151 7.97181L12.4714 8.0823C13.1957 8.40039 14.8165 9.66157 14.8165 12.1984C14.8165 14.5868 12.801 16.9972 9.63599 16.9972C9.4002 16.9972 9.45513 17.6118 9.52622 17.6118Z" fill="#EC9A1E" />
        </svg>
        <div className="1pxDivider w-[375px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      </div>
      <div className="frame483118 gap-10 flex-col w-[375px] items-start bg-[#273e54] opacity-100 px-4 py-20 flex">
        <div className="frame482681 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="frame482680 gap-1 flex-col h-[35px] justify-between items-start w-full opacity-100 p-0 flex">
            <span className="example font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-[323px]">Understanding GEP-NETs</span>
            <div className="w-full h-px relative bg-white opacity-100 p-0 underline" />
          </div>
        </div>
        <div className="frame482834 gap-1 flex-col h-[97px] items-start w-full opacity-100 p-0 flex">
          <span className="recommendedSearches font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">Recommended Searches</span>
          <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
            <span className="gEPNETsQualification font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Qualification </span>
            <span className="gEPNETsTreatments font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Treatments</span>
            <span className="gEPNETsPatientResources font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Patient Resources</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "Size6" && searchEntered == "No") && <>
    <div className="c03Search gap-0 absolute flex-col items-start opacity-100 p-0 left-[1570px] top-[584px] flex">
      <div className="c01NavBarTabletAuthenticated w-[768px] h-16 relative overflow-hidden bg-white opacity-100 p-0">
        <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-[#212121] text-left w-[110px] absolute -translate-y-2/4 left-[175px] top-2/4">RLT Care</span>
        <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="#273E54" />
        </svg>
        <div className="frame482676 gap-1 absolute flex-row h-16 items-center -translate-y-2/4 bg-[#273e54] opacity-100 p-2 left-[631px] top-2/4 flex">
          <div className="search w-8 h-8 relative p-0">
            <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0648 23.4367L13.6904 15.0623C13.0237 15.6127 12.2571 16.0435 11.3904 16.3546C10.5237 16.6657 9.62716 16.8213 8.70068 16.8213C6.42179 16.8213 4.4931 16.0322 2.91461 14.4541C1.33612 12.8761 0.546875 10.9479 0.546875 8.66957C0.546875 6.39126 1.33592 4.46236 2.91401 2.88287C4.4921 1.3034 6.4203 0.513672 8.69861 0.513672C10.9769 0.513672 12.9058 1.30292 14.4853 2.88141C16.0648 4.4599 16.8545 6.38858 16.8545 8.66747C16.8545 9.61961 16.6947 10.529 16.375 11.3957C16.0553 12.2623 15.6288 13.0162 15.0955 13.6572L23.4699 22.0316L22.0648 23.4367ZM8.70068 14.8213C10.4186 14.8213 11.8738 14.2252 13.0661 13.0329C14.2584 11.8406 14.8545 10.3854 14.8545 8.66747C14.8545 6.94952 14.2584 5.49438 13.0661 4.30207C11.8738 3.10976 10.4186 2.5136 8.70068 2.5136C6.98272 2.5136 5.52759 3.10976 4.33528 4.30207C3.14299 5.49438 2.54684 6.94952 2.54684 8.66747C2.54684 10.3854 3.14299 11.8406 4.33528 13.0329C5.52759 14.2252 6.98272 14.8213 8.70068 14.8213Z" fill="white" />
            </svg>
          </div>
        </div>
        <svg className="logo" width={111} height={19} viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16169 2.08519C3.8885 2.85642 4.13078 3.60598 4.13078 4.39959C4.13078 7.06639 1.88281 8.96231 1.88281 12.0256C1.88281 14.8476 3.85601 17.7202 9.56221 17.7202C14.6485 17.7202 17.3311 15.2303 17.3311 12.5773C17.3311 10.3073 15.6995 8.38281 12.5511 8.08024L12.5074 8.19073C13.2317 8.50882 14.8525 9.77001 14.8525 12.3068C14.8525 14.6952 12.837 17.1057 9.67197 17.1057C5.73172 17.1057 4.37341 14.8036 4.37341 12.6874C4.37341 9.97653 6.26934 8.16906 6.26934 5.69977C6.26934 3.9804 4.9688 2.28342 3.2274 1.97471L3.16169 2.08519Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.62857 13.9215L11.0613 0.277344H8.06373L9.49642 13.9215H9.62857ZM86.6739 7.4057V16.4059L85.2402 16.7362V17.106H89.743V16.7362L88.3092 16.4059V7.4057H90.7377L91.5363 9.1146H91.845L91.6143 6.86592H83.3688L83.1377 9.1146H83.4468L84.2426 7.4057H86.6739ZM77.8007 12.0994C78.1534 12.0088 80.1869 11.4918 80.1869 9.55576C80.1869 8.01367 79.0055 6.81892 76.0968 6.81892C74.2995 6.81892 72.4805 6.86008 72.2595 6.86549V7.2345L73.447 7.5674V16.4047L72.2595 16.7358V17.1055H76.4622V16.7362L75.0823 16.4051V12.4099H76.2698L79.3078 17.1055H81.9962V16.751L80.635 16.4051L77.8007 12.0994ZM62.9931 12.8188H66.399L64.7077 8.25393H64.6926L62.9931 12.8188ZM59.8227 16.7359L60.9828 16.4059L64.5606 6.86419L65.7571 6.55729L69.4519 16.4052L70.6112 16.7359V17.106H66.2258V16.7359L67.7087 16.4052L66.6616 13.5745H62.7271L61.6858 16.4059L63.1705 16.7359V17.106H59.8227V16.7359ZM101.563 14.287H101.847L102.804 16.4894C103.09 16.6324 103.806 16.9444 104.635 16.9444C105.876 16.9444 107.012 16.2046 107.012 14.9289C107.012 13.9472 106.378 13.3605 105.346 12.8247C105.016 12.6532 104.673 12.4748 104.329 12.2957C103.11 11.6621 101.895 10.7677 101.895 9.32708C101.895 7.76152 102.996 6.5498 105.298 6.5498C106.483 6.5498 107.496 6.87837 107.695 6.9448L107.937 9.31408H107.628L106.742 7.41454C106.578 7.33041 106.045 7.02748 105.26 7.02748C104.088 7.02748 103.287 7.75069 103.287 8.75046C103.287 9.65817 103.89 10.2279 104.922 10.7619C105.304 10.9594 105.728 11.1815 106.129 11.3891C107.775 12.2416 108.556 13.0305 108.556 14.4946C108.556 16.3013 106.863 17.4224 104.759 17.4224C103.149 17.4224 102.164 17.0895 101.837 16.987L101.563 14.287ZM94.3025 16.7362L95.7367 16.4059V7.56674L94.3025 7.23601V6.86592H98.8064V7.23564L97.3712 7.56674V16.4059L98.8068 16.7362V17.106H94.3025V16.7362ZM75.74 11.8774H75.0825V7.40498C77.2659 7.40498 78.5372 7.90144 78.5372 9.67208C78.5372 10.9871 77.4009 11.8774 75.74 11.8774ZM51.2269 7.5671L50.1495 7.23564V6.86592H54.2981V7.23564L52.9994 7.56674L55.864 15.3732H55.8795L58.7442 7.5671L57.4451 7.23601V6.86592H60.5148V7.23601L59.4468 7.5671L55.8156 17.2912H54.8967L51.2269 7.5671ZM47.2821 12.2562C47.2821 9.60353 45.6937 7.02772 43.5346 7.02772C41.2368 7.02772 40.2038 9.24897 40.2038 11.624C40.2038 13.9832 41.5145 16.9443 43.982 16.9443C46.2949 16.9443 47.2821 14.6002 47.2821 12.2562ZM49.0404 11.7166C49.0404 15.3409 46.5263 17.4224 43.7505 17.4224C40.9436 17.4224 38.4606 15.2943 38.4606 11.9939C38.4606 8.66273 40.9747 6.5498 43.735 6.5498C47.1282 6.5498 49.0404 9.18735 49.0404 11.7166ZM34.9006 17.2681L28.1379 8.54702V16.4059L29.5179 16.7362V17.106H26.372V16.7362L27.4978 16.4059V7.84475C27.3866 7.74041 26.9634 7.38982 26.5254 7.29522C26.3893 7.26561 26.2023 7.23528 26.2023 7.23528V6.86592H28.8702L34.6616 14.3763V7.56746L33.2827 7.23601V6.86592H36.4272V7.23601L35.3014 7.56746V15.3631C35.3014 16.0751 35.3519 17.1348 35.362 17.2681H34.9006Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.52622 17.6118C14.6125 17.6118 17.2952 15.1219 17.2952 12.4688C17.2952 10.1988 15.6635 8.27438 12.5151 7.97181L12.4714 8.0823C13.1957 8.40039 14.8165 9.66157 14.8165 12.1984C14.8165 14.5868 12.801 16.9972 9.63599 16.9972C9.4002 16.9972 9.45513 17.6118 9.52622 17.6118Z" fill="#EC9A1E" />
        </svg>
        <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[687px] top-2/4">
          <svg className="group1184" width={30} height={10} viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1={1} x2={30} y2={1} stroke="#212121" strokeWidth={2} />
            <line y1={9} x2={30} y2={9} stroke="#212121" strokeWidth={2} />
          </svg>
        </div>
        <div className="1pxDivider w-[768px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      </div>
      <div className="content gap-0 flex-col w-[768px] items-start bg-[#273e54] opacity-100 px-0 py-10 flex">
        <div className="frame482646 gap-12 flex-col items-start w-full opacity-100 pt-12 pb-0 px-8 flex">
          <div className="search gap-4 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="search gap-[90px] flex-row justify-between items-start w-full opacity-100 p-0 flex">
              <span className="example w-[644px] flex-1 min-w-0" />
              <div className="interactiveIcons w-[60px] h-[60px] relative opacity-100 p-0">
                <div className="boundingBox absolute w-[60px] h-[60px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={46} height={46} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42 45.5L26.25 29.75C25 30.75 23.5625 31.5417 21.9375 32.125C20.3125 32.7083 18.5833 33 16.75 33C12.2083 33 8.36458 31.4271 5.21875 28.2812C2.07292 25.1354 0.5 21.2917 0.5 16.75C0.5 12.2083 2.07292 8.36458 5.21875 5.21875C8.36458 2.07292 12.2083 0.5 16.75 0.5C21.2917 0.5 25.1354 2.07292 28.2812 5.21875C31.4271 8.36458 33 12.2083 33 16.75C33 18.5833 32.7083 20.3125 32.125 21.9375C31.5417 23.5625 30.75 25 29.75 26.25L45.5 42L42 45.5ZM16.75 28C19.875 28 22.5312 26.9062 24.7188 24.7188C26.9062 22.5312 28 19.875 28 16.75C28 13.625 26.9062 10.9688 24.7188 8.78125C22.5312 6.59375 19.875 5.5 16.75 5.5C13.625 5.5 10.9688 6.59375 8.78125 8.78125C6.59375 10.9688 5.5 13.625 5.5 16.75C5.5 19.875 6.59375 22.5312 8.78125 24.7188C10.9688 26.9062 13.625 28 16.75 28Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="w-full h-px relative bg-white opacity-100 p-0 underline" />
          </div>
        </div>
        <div className="frame482645 gap-0 flex-col items-start w-full bg-[#273e54] opacity-100 p-8 flex">
          <div className="frame482834 gap-1 flex-col h-[97px] items-start w-full opacity-100 p-0 flex">
            <span className="recommendedSearches font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">Recommended Searches</span>
            <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
              <span className="gEPNETsQualification font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Qualification </span>
              <span className="gEPNETsTreatments font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Treatments</span>
              <span className="gEPNETsPatientResources font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Patient Resources</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "Size5" && searchEntered == "No") && <>
    <div className="c03Search gap-0 absolute flex-col items-start opacity-100 p-0 left-4 top-[584px] flex">
      <div className="c01NavBarDesktopAuthenticated w-[1440px] h-16 relative overflow-hidden bg-white opacity-100 p-0">
        <div className="rightSide gap-6 absolute flex-row h-16 justify-end items-center w-[297px] opacity-100 p-0 left-[1095px] top-0 flex">
          <div className="interactions gap-0 flex-row h-full justify-end items-center opacity-100 p-0 flex">
            <div className="breaker w-px h-full relative bg-[#e0e0e0] opacity-100 p-0" />
            <div className="search gap-1 flex-row h-full items-center bg-[#273e54] opacity-100 px-5 py-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white" />
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
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0 !hidden" />
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
        <div className="1pxDivider w-[1440px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      </div>
      <div className="content gap-0 flex-col w-[1440px] h-[369px] items-start bg-[#273e54] opacity-100 p-0 flex">
        <div className="frame482646 gap-12 flex-col h-[369px] items-start bg-[#273e54] opacity-100 pt-24 pb-16 px-12 flex">
          <div className="search gap-4 flex-col items-start opacity-100 p-0 flex">
            <div className="search gap-[90px] flex-row w-[1344px] justify-between items-start opacity-100 p-0 flex">
              <span className="example w-[1230.29px]" />
              <div className="interactiveIcons w-[60px] h-[60px] relative opacity-100 p-0">
                <div className="boundingBox absolute w-[60px] h-[60px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={46} height={46} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42 45.5L26.25 29.75C25 30.75 23.5625 31.5417 21.9375 32.125C20.3125 32.7083 18.5833 33 16.75 33C12.2083 33 8.36458 31.4271 5.21875 28.2812C2.07292 25.1354 0.5 21.2917 0.5 16.75C0.5 12.2083 2.07292 8.36458 5.21875 5.21875C8.36458 2.07292 12.2083 0.5 16.75 0.5C21.2917 0.5 25.1354 2.07292 28.2812 5.21875C31.4271 8.36458 33 12.2083 33 16.75C33 18.5833 32.7083 20.3125 32.125 21.9375C31.5417 23.5625 30.75 25 29.75 26.25L45.5 42L42 45.5ZM16.75 28C19.875 28 22.5312 26.9062 24.7188 24.7188C26.9062 22.5312 28 19.875 28 16.75C28 13.625 26.9062 10.9688 24.7188 8.78125C22.5312 6.59375 19.875 5.5 16.75 5.5C13.625 5.5 10.9688 6.59375 8.78125 8.78125C6.59375 10.9688 5.5 13.625 5.5 16.75C5.5 19.875 6.59375 22.5312 8.78125 24.7188C10.9688 26.9062 13.625 28 16.75 28Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="w-[1344px] h-px relative bg-white opacity-100 p-0 underline" />
          </div>
        </div>
      </div>
      <div className="frame482834 gap-1 flex-col w-[294px] h-[96.33px] items-start absolute opacity-100 p-0 flex">
        <span className="recommendedSearches font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">Recommended Searches</span>
        <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
          <span className="gEPNETsQualification font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Qualification </span>
          <span className="gEPNETsTreatments font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Treatments</span>
          <span className="gEPNETsPatientResources font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Patient Resources</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "Size4" && searchEntered == "No") && <>
    <div className="c03Search gap-0 absolute flex-col w-[375px] items-start opacity-100 p-0 left-[2480px] top-[579px] flex">
      <div className="c01NavBarMobileAuthenticated w-[375px] h-16 relative overflow-hidden bg-white opacity-100 p-0">
        <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-[#212121] text-left w-[110px] absolute -translate-y-2/4 left-[159px] top-2/4">RLT Care</span>
        <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="black" />
        </svg>
        <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[310px] top-2/4">
          <svg className="group1184" width={30} height={10} viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1={1} x2={30} y2={1} stroke="#212121" strokeWidth={2} />
            <line y1={9} x2={30} y2={9} stroke="#212121" strokeWidth={2} />
          </svg>
        </div>
        <div className="frame482676 gap-1 absolute flex-row h-16 items-center bg-[#34495e] opacity-100 p-2 left-[254px] top-0 flex">
          <div className="search w-8 h-8 relative p-0">
            <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0648 23.4367L13.6904 15.0623C13.0237 15.6127 12.2571 16.0435 11.3904 16.3546C10.5237 16.6657 9.62716 16.8213 8.70068 16.8213C6.42179 16.8213 4.4931 16.0322 2.91461 14.4541C1.33612 12.8761 0.546875 10.9479 0.546875 8.66957C0.546875 6.39126 1.33592 4.46236 2.91401 2.88287C4.4921 1.3034 6.4203 0.513672 8.69861 0.513672C10.9769 0.513672 12.9058 1.30292 14.4853 2.88141C16.0648 4.4599 16.8545 6.38858 16.8545 8.66747C16.8545 9.61961 16.6947 10.529 16.375 11.3957C16.0553 12.2623 15.6288 13.0162 15.0955 13.6572L23.4699 22.0316L22.0648 23.4367ZM8.70068 14.8213C10.4186 14.8213 11.8738 14.2252 13.0661 13.0329C14.2584 11.8406 14.8545 10.3854 14.8545 8.66747C14.8545 6.94952 14.2584 5.49438 13.0661 4.30207C11.8738 3.10976 10.4186 2.5136 8.70068 2.5136C6.98272 2.5136 5.52759 3.10976 4.33528 4.30207C3.14299 5.49438 2.54684 6.94952 2.54684 8.66747C2.54684 10.3854 3.14299 11.8406 4.33528 13.0329C5.52759 14.2252 6.98272 14.8213 8.70068 14.8213Z" fill="white" />
            </svg>
          </div>
        </div>
        <svg className="logo" width={111} height={19} viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16169 2.08519C3.8885 2.85642 4.13078 3.60598 4.13078 4.39959C4.13078 7.06639 1.88281 8.96231 1.88281 12.0256C1.88281 14.8476 3.85601 17.7202 9.56221 17.7202C14.6485 17.7202 17.3311 15.2303 17.3311 12.5773C17.3311 10.3073 15.6995 8.38281 12.5511 8.08024L12.5074 8.19073C13.2317 8.50882 14.8525 9.77001 14.8525 12.3068C14.8525 14.6952 12.837 17.1057 9.67197 17.1057C5.73172 17.1057 4.37341 14.8036 4.37341 12.6874C4.37341 9.97653 6.26934 8.16906 6.26934 5.69977C6.26934 3.9804 4.9688 2.28342 3.2274 1.97471L3.16169 2.08519Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.62857 13.9215L11.0613 0.277344H8.06373L9.49642 13.9215H9.62857ZM86.6739 7.4057V16.4059L85.2402 16.7362V17.106H89.743V16.7362L88.3092 16.4059V7.4057H90.7377L91.5363 9.1146H91.845L91.6143 6.86592H83.3688L83.1377 9.1146H83.4468L84.2426 7.4057H86.6739ZM77.8007 12.0994C78.1534 12.0088 80.1869 11.4918 80.1869 9.55576C80.1869 8.01367 79.0055 6.81892 76.0968 6.81892C74.2995 6.81892 72.4805 6.86008 72.2595 6.86549V7.2345L73.447 7.5674V16.4047L72.2595 16.7358V17.1055H76.4622V16.7362L75.0823 16.4051V12.4099H76.2698L79.3078 17.1055H81.9962V16.751L80.635 16.4051L77.8007 12.0994ZM62.9931 12.8188H66.399L64.7077 8.25393H64.6926L62.9931 12.8188ZM59.8227 16.7359L60.9828 16.4059L64.5606 6.86419L65.7571 6.55729L69.4519 16.4052L70.6112 16.7359V17.106H66.2258V16.7359L67.7087 16.4052L66.6616 13.5745H62.7271L61.6858 16.4059L63.1705 16.7359V17.106H59.8227V16.7359ZM101.563 14.287H101.847L102.804 16.4894C103.09 16.6324 103.806 16.9444 104.635 16.9444C105.876 16.9444 107.012 16.2046 107.012 14.9289C107.012 13.9472 106.378 13.3605 105.346 12.8247C105.016 12.6532 104.673 12.4748 104.329 12.2957C103.11 11.6621 101.895 10.7677 101.895 9.32708C101.895 7.76152 102.996 6.5498 105.298 6.5498C106.483 6.5498 107.496 6.87837 107.695 6.9448L107.937 9.31408H107.628L106.742 7.41454C106.578 7.33041 106.045 7.02748 105.26 7.02748C104.088 7.02748 103.287 7.75069 103.287 8.75046C103.287 9.65817 103.89 10.2279 104.922 10.7619C105.304 10.9594 105.728 11.1815 106.129 11.3891C107.775 12.2416 108.556 13.0305 108.556 14.4946C108.556 16.3013 106.863 17.4224 104.759 17.4224C103.149 17.4224 102.164 17.0895 101.837 16.987L101.563 14.287ZM94.3025 16.7362L95.7367 16.4059V7.56674L94.3025 7.23601V6.86592H98.8064V7.23564L97.3712 7.56674V16.4059L98.8068 16.7362V17.106H94.3025V16.7362ZM75.74 11.8774H75.0825V7.40498C77.2659 7.40498 78.5372 7.90144 78.5372 9.67208C78.5372 10.9871 77.4009 11.8774 75.74 11.8774ZM51.2269 7.5671L50.1495 7.23564V6.86592H54.2981V7.23564L52.9994 7.56674L55.864 15.3732H55.8795L58.7442 7.5671L57.4451 7.23601V6.86592H60.5148V7.23601L59.4468 7.5671L55.8156 17.2912H54.8967L51.2269 7.5671ZM47.2821 12.2562C47.2821 9.60353 45.6937 7.02772 43.5346 7.02772C41.2368 7.02772 40.2038 9.24897 40.2038 11.624C40.2038 13.9832 41.5145 16.9443 43.982 16.9443C46.2949 16.9443 47.2821 14.6002 47.2821 12.2562ZM49.0404 11.7166C49.0404 15.3409 46.5263 17.4224 43.7505 17.4224C40.9436 17.4224 38.4606 15.2943 38.4606 11.9939C38.4606 8.66273 40.9747 6.5498 43.735 6.5498C47.1282 6.5498 49.0404 9.18735 49.0404 11.7166ZM34.9006 17.2681L28.1379 8.54702V16.4059L29.5179 16.7362V17.106H26.372V16.7362L27.4978 16.4059V7.84475C27.3866 7.74041 26.9634 7.38982 26.5254 7.29522C26.3893 7.26561 26.2023 7.23528 26.2023 7.23528V6.86592H28.8702L34.6616 14.3763V7.56746L33.2827 7.23601V6.86592H36.4272V7.23601L35.3014 7.56746V15.3631C35.3014 16.0751 35.3519 17.1348 35.362 17.2681H34.9006Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.52622 17.6118C14.6125 17.6118 17.2952 15.1219 17.2952 12.4688C17.2952 10.1988 15.6635 8.27438 12.5151 7.97181L12.4714 8.0823C13.1957 8.40039 14.8165 9.66157 14.8165 12.1984C14.8165 14.5868 12.801 16.9972 9.63599 16.9972C9.4002 16.9972 9.45513 17.6118 9.52622 17.6118Z" fill="#EC9A1E" />
        </svg>
        <div className="1pxDivider w-[375px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      </div>
      <div className="frame483118 gap-10 flex-col w-[375px] items-start bg-[#273e54] opacity-100 px-4 py-20 flex">
        <div className="frame482681 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="frame482680 gap-1 flex-col h-[35px] justify-between items-start w-full opacity-100 p-0 flex">
            <span className="example w-[323px]" />
            <div className="w-full h-px relative bg-white opacity-100 p-0 underline" />
          </div>
        </div>
        <div className="frame482834 gap-1 flex-col h-[97px] items-start w-full opacity-100 p-0 flex">
          <span className="recommendedSearches font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">Recommended Searches</span>
          <div className="frame482833 gap-1 flex-col items-start opacity-100 p-0 flex">
            <span className="gEPNETsQualification font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Qualification </span>
            <span className="gEPNETsTreatments font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Treatments</span>
            <span className="gEPNETsPatientResources font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">GEP-NETs Patient Resources</span>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}