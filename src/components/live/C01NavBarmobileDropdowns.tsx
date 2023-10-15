import React from 'react';

export function C01NavBarmobileDropdowns(props){
  return (
      <>
  {(property1 == "Default") && <>
    <div className="c01NavBarmobileDropdowns w-[768px] h-[1024px] absolute overflow-hidden bg-white opacity-100 p-0 left-12 top-[51px]">
      <div className="c01NavBarMobileNotSignedIn w-[768px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="1pxDivider w-[768px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-[#212121] text-left w-[110px] absolute -translate-y-2/4 left-[175px] top-2/4">RLT Care</span>
        <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="black" />
        </svg>
        <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[703px] top-2/4">
          <svg className="frame482674" width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3.29289" y1="22.2929" x2="24.5061" y2="1.07969" stroke="#212121" strokeWidth={2} />
            <line x1="3.70711" y1="1.29289" x2="24.9203" y2="22.5061" stroke="#212121" strokeWidth={2} />
          </svg>
        </div>
        <div className="frame482676 gap-1 absolute flex-row items-start opacity-100 p-2 left-[647px] top-2 flex">
          <div className="search w-8 h-8 relative p-0">
            <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0648 23.4367L13.6904 15.0623C13.0237 15.6127 12.2571 16.0435 11.3904 16.3546C10.5237 16.6657 9.62716 16.8213 8.70068 16.8213C6.42179 16.8213 4.4931 16.0322 2.91461 14.4541C1.33612 12.8761 0.546875 10.9479 0.546875 8.66957C0.546875 6.39126 1.33592 4.46236 2.91401 2.88287C4.4921 1.3034 6.4203 0.513672 8.69861 0.513672C10.9769 0.513672 12.9058 1.30292 14.4853 2.88141C16.0648 4.4599 16.8545 6.38858 16.8545 8.66747C16.8545 9.61961 16.6947 10.529 16.375 11.3957C16.0553 12.2623 15.6288 13.0162 15.0955 13.6572L23.4699 22.0316L22.0648 23.4367ZM8.70068 14.8213C10.4186 14.8213 11.8738 14.2252 13.0661 13.0329C14.2584 11.8406 14.8545 10.3854 14.8545 8.66747C14.8545 6.94952 14.2584 5.49438 13.0661 4.30207C11.8738 3.10976 10.4186 2.5136 8.70068 2.5136C6.98272 2.5136 5.52759 3.10976 4.33528 4.30207C3.14299 5.49438 2.54684 6.94952 2.54684 8.66747C2.54684 10.3854 3.14299 11.8406 4.33528 13.0329C5.52759 14.2252 6.98272 14.8213 8.70068 14.8213Z" fill="#212121" />
            </svg>
          </div>
        </div>
        <svg className="logo" width={111} height={19} viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16169 2.08519C3.8885 2.85642 4.13078 3.60598 4.13078 4.39959C4.13078 7.06639 1.88281 8.96231 1.88281 12.0256C1.88281 14.8476 3.85601 17.7202 9.56221 17.7202C14.6485 17.7202 17.3311 15.2303 17.3311 12.5773C17.3311 10.3073 15.6995 8.38281 12.5511 8.08024L12.5074 8.19073C13.2317 8.50882 14.8525 9.77001 14.8525 12.3068C14.8525 14.6952 12.837 17.1057 9.67197 17.1057C5.73172 17.1057 4.37341 14.8036 4.37341 12.6874C4.37341 9.97653 6.26934 8.16906 6.26934 5.69977C6.26934 3.9804 4.9688 2.28342 3.2274 1.97471L3.16169 2.08519Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.62857 13.9215L11.0613 0.277344H8.06373L9.49642 13.9215H9.62857ZM86.6739 7.4057V16.4059L85.2402 16.7362V17.106H89.743V16.7362L88.3092 16.4059V7.4057H90.7377L91.5363 9.1146H91.845L91.6143 6.86592H83.3688L83.1377 9.1146H83.4468L84.2426 7.4057H86.6739ZM77.8007 12.0994C78.1534 12.0088 80.1869 11.4918 80.1869 9.55576C80.1869 8.01367 79.0055 6.81892 76.0968 6.81892C74.2995 6.81892 72.4805 6.86008 72.2595 6.86549V7.2345L73.447 7.5674V16.4047L72.2595 16.7358V17.1055H76.4622V16.7362L75.0823 16.4051V12.4099H76.2698L79.3078 17.1055H81.9962V16.751L80.635 16.4051L77.8007 12.0994ZM62.9931 12.8188H66.399L64.7077 8.25393H64.6926L62.9931 12.8188ZM59.8227 16.7359L60.9828 16.4059L64.5606 6.86419L65.7571 6.55729L69.4519 16.4052L70.6112 16.7359V17.106H66.2258V16.7359L67.7087 16.4052L66.6616 13.5745H62.7271L61.6858 16.4059L63.1705 16.7359V17.106H59.8227V16.7359ZM101.563 14.287H101.847L102.804 16.4894C103.09 16.6324 103.806 16.9444 104.635 16.9444C105.876 16.9444 107.012 16.2046 107.012 14.9289C107.012 13.9472 106.378 13.3605 105.346 12.8247C105.016 12.6532 104.673 12.4748 104.329 12.2957C103.11 11.6621 101.895 10.7677 101.895 9.32708C101.895 7.76152 102.996 6.5498 105.298 6.5498C106.483 6.5498 107.496 6.87837 107.695 6.9448L107.937 9.31408H107.628L106.742 7.41454C106.578 7.33041 106.045 7.02748 105.26 7.02748C104.088 7.02748 103.287 7.75069 103.287 8.75046C103.287 9.65817 103.89 10.2279 104.922 10.7619C105.304 10.9594 105.728 11.1815 106.129 11.3891C107.775 12.2416 108.556 13.0305 108.556 14.4946C108.556 16.3013 106.863 17.4224 104.759 17.4224C103.149 17.4224 102.164 17.0895 101.837 16.987L101.563 14.287ZM94.3025 16.7362L95.7367 16.4059V7.56674L94.3025 7.23601V6.86592H98.8064V7.23564L97.3712 7.56674V16.4059L98.8068 16.7362V17.106H94.3025V16.7362ZM75.74 11.8774H75.0825V7.40498C77.2659 7.40498 78.5372 7.90144 78.5372 9.67208C78.5372 10.9871 77.4009 11.8774 75.74 11.8774ZM51.2269 7.5671L50.1495 7.23564V6.86592H54.2981V7.23564L52.9994 7.56674L55.864 15.3732H55.8795L58.7442 7.5671L57.4451 7.23601V6.86592H60.5148V7.23601L59.4468 7.5671L55.8156 17.2912H54.8967L51.2269 7.5671ZM47.2821 12.2562C47.2821 9.60353 45.6937 7.02772 43.5346 7.02772C41.2368 7.02772 40.2038 9.24897 40.2038 11.624C40.2038 13.9832 41.5145 16.9443 43.982 16.9443C46.2949 16.9443 47.2821 14.6002 47.2821 12.2562ZM49.0404 11.7166C49.0404 15.3409 46.5263 17.4224 43.7505 17.4224C40.9436 17.4224 38.4606 15.2943 38.4606 11.9939C38.4606 8.66273 40.9747 6.5498 43.735 6.5498C47.1282 6.5498 49.0404 9.18735 49.0404 11.7166ZM34.9006 17.2681L28.1379 8.54702V16.4059L29.5179 16.7362V17.106H26.372V16.7362L27.4978 16.4059V7.84475C27.3866 7.74041 26.9634 7.38982 26.5254 7.29522C26.3893 7.26561 26.2023 7.23528 26.2023 7.23528V6.86592H28.8702L34.6616 14.3763V7.56746L33.2827 7.23601V6.86592H36.4272V7.23601L35.3014 7.56746V15.3631C35.3014 16.0751 35.3519 17.1348 35.362 17.2681H34.9006Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.52622 17.6118C14.6125 17.6118 17.2952 15.1219 17.2952 12.4688C17.2952 10.1988 15.6635 8.27438 12.5151 7.97181L12.4714 8.0823C13.1957 8.40039 14.8165 9.66157 14.8165 12.1984C14.8165 14.5868 12.801 16.9972 9.63599 16.9972C9.4002 16.9972 9.45513 17.6118 9.52622 17.6118Z" fill="#EC9A1E" />
        </svg>
      </div>
      <div className="title w-[343px] h-[34px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[269px]">Disease areas</span>
        <div className="interactiveIcons w-[34px] h-[34px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[34px] h-[34px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={30} height={25} viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4855 11.2844L6.2453 11.2844L14.8602 2.66948L12.8568 0.666016L0.835938 12.6868L12.8568 24.7076L14.8602 22.7042L6.2453 14.0893L29.4855 14.0893V11.2844Z" fill="#212121" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-[768px] h-px absolute overflow-hidden bg-[#bdbdbd] opacity-100 p-0 left-0 top-[158px]" />
      <span className="resources font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] absolute left-8 top-[360px]">Resources</span>
      <div className="frame482806 gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-[30px] top-[406px] flex">
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Learn about RLT</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Learn about RLI</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Patient Resources</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
      </div>
      <div className="frame482807 gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-[30px] top-[199px] flex">
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-white opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Prostate Cancer</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Neuroendicrine Tumors</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
      </div>
    </div>
  </>}
  {(property1 == "Default") && <>
    <div className="c01NavBarmobileDropdowns w-[768px] h-[1024px] absolute overflow-hidden bg-white opacity-100 p-0 left-12 top-[1195px]">
      <div className="c01NavBarMobileNotSignedIn w-[768px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="1pxDivider w-[768px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-[#212121] text-left w-[110px] absolute -translate-y-2/4 left-[175px] top-2/4">RLT Care</span>
        <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="black" />
        </svg>
        <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[703px] top-2/4">
          <svg className="frame482674" width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3.29289" y1="22.2929" x2="24.5061" y2="1.07969" stroke="#212121" strokeWidth={2} />
            <line x1="3.70711" y1="1.29289" x2="24.9203" y2="22.5061" stroke="#212121" strokeWidth={2} />
          </svg>
        </div>
        <div className="frame482676 gap-1 absolute flex-row items-start opacity-100 p-2 left-[647px] top-2 flex">
          <div className="search w-8 h-8 relative p-0">
            <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0648 23.4367L13.6904 15.0623C13.0237 15.6127 12.2571 16.0435 11.3904 16.3546C10.5237 16.6657 9.62716 16.8213 8.70068 16.8213C6.42179 16.8213 4.4931 16.0322 2.91461 14.4541C1.33612 12.8761 0.546875 10.9479 0.546875 8.66957C0.546875 6.39126 1.33592 4.46236 2.91401 2.88287C4.4921 1.3034 6.4203 0.513672 8.69861 0.513672C10.9769 0.513672 12.9058 1.30292 14.4853 2.88141C16.0648 4.4599 16.8545 6.38858 16.8545 8.66747C16.8545 9.61961 16.6947 10.529 16.375 11.3957C16.0553 12.2623 15.6288 13.0162 15.0955 13.6572L23.4699 22.0316L22.0648 23.4367ZM8.70068 14.8213C10.4186 14.8213 11.8738 14.2252 13.0661 13.0329C14.2584 11.8406 14.8545 10.3854 14.8545 8.66747C14.8545 6.94952 14.2584 5.49438 13.0661 4.30207C11.8738 3.10976 10.4186 2.5136 8.70068 2.5136C6.98272 2.5136 5.52759 3.10976 4.33528 4.30207C3.14299 5.49438 2.54684 6.94952 2.54684 8.66747C2.54684 10.3854 3.14299 11.8406 4.33528 13.0329C5.52759 14.2252 6.98272 14.8213 8.70068 14.8213Z" fill="#212121" />
            </svg>
          </div>
        </div>
        <svg className="logo" width={111} height={19} viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16169 2.08519C3.8885 2.85642 4.13078 3.60598 4.13078 4.39959C4.13078 7.06639 1.88281 8.96231 1.88281 12.0256C1.88281 14.8476 3.85601 17.7202 9.56221 17.7202C14.6485 17.7202 17.3311 15.2303 17.3311 12.5773C17.3311 10.3073 15.6995 8.38281 12.5511 8.08024L12.5074 8.19073C13.2317 8.50882 14.8525 9.77001 14.8525 12.3068C14.8525 14.6952 12.837 17.1057 9.67197 17.1057C5.73172 17.1057 4.37341 14.8036 4.37341 12.6874C4.37341 9.97653 6.26934 8.16906 6.26934 5.69977C6.26934 3.9804 4.9688 2.28342 3.2274 1.97471L3.16169 2.08519Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.62857 13.9215L11.0613 0.277344H8.06373L9.49642 13.9215H9.62857ZM86.6739 7.4057V16.4059L85.2402 16.7362V17.106H89.743V16.7362L88.3092 16.4059V7.4057H90.7377L91.5363 9.1146H91.845L91.6143 6.86592H83.3688L83.1377 9.1146H83.4468L84.2426 7.4057H86.6739ZM77.8007 12.0994C78.1534 12.0088 80.1869 11.4918 80.1869 9.55576C80.1869 8.01367 79.0055 6.81892 76.0968 6.81892C74.2995 6.81892 72.4805 6.86008 72.2595 6.86549V7.2345L73.447 7.5674V16.4047L72.2595 16.7358V17.1055H76.4622V16.7362L75.0823 16.4051V12.4099H76.2698L79.3078 17.1055H81.9962V16.751L80.635 16.4051L77.8007 12.0994ZM62.9931 12.8188H66.399L64.7077 8.25393H64.6926L62.9931 12.8188ZM59.8227 16.7359L60.9828 16.4059L64.5606 6.86419L65.7571 6.55729L69.4519 16.4052L70.6112 16.7359V17.106H66.2258V16.7359L67.7087 16.4052L66.6616 13.5745H62.7271L61.6858 16.4059L63.1705 16.7359V17.106H59.8227V16.7359ZM101.563 14.287H101.847L102.804 16.4894C103.09 16.6324 103.806 16.9444 104.635 16.9444C105.876 16.9444 107.012 16.2046 107.012 14.9289C107.012 13.9472 106.378 13.3605 105.346 12.8247C105.016 12.6532 104.673 12.4748 104.329 12.2957C103.11 11.6621 101.895 10.7677 101.895 9.32708C101.895 7.76152 102.996 6.5498 105.298 6.5498C106.483 6.5498 107.496 6.87837 107.695 6.9448L107.937 9.31408H107.628L106.742 7.41454C106.578 7.33041 106.045 7.02748 105.26 7.02748C104.088 7.02748 103.287 7.75069 103.287 8.75046C103.287 9.65817 103.89 10.2279 104.922 10.7619C105.304 10.9594 105.728 11.1815 106.129 11.3891C107.775 12.2416 108.556 13.0305 108.556 14.4946C108.556 16.3013 106.863 17.4224 104.759 17.4224C103.149 17.4224 102.164 17.0895 101.837 16.987L101.563 14.287ZM94.3025 16.7362L95.7367 16.4059V7.56674L94.3025 7.23601V6.86592H98.8064V7.23564L97.3712 7.56674V16.4059L98.8068 16.7362V17.106H94.3025V16.7362ZM75.74 11.8774H75.0825V7.40498C77.2659 7.40498 78.5372 7.90144 78.5372 9.67208C78.5372 10.9871 77.4009 11.8774 75.74 11.8774ZM51.2269 7.5671L50.1495 7.23564V6.86592H54.2981V7.23564L52.9994 7.56674L55.864 15.3732H55.8795L58.7442 7.5671L57.4451 7.23601V6.86592H60.5148V7.23601L59.4468 7.5671L55.8156 17.2912H54.8967L51.2269 7.5671ZM47.2821 12.2562C47.2821 9.60353 45.6937 7.02772 43.5346 7.02772C41.2368 7.02772 40.2038 9.24897 40.2038 11.624C40.2038 13.9832 41.5145 16.9443 43.982 16.9443C46.2949 16.9443 47.2821 14.6002 47.2821 12.2562ZM49.0404 11.7166C49.0404 15.3409 46.5263 17.4224 43.7505 17.4224C40.9436 17.4224 38.4606 15.2943 38.4606 11.9939C38.4606 8.66273 40.9747 6.5498 43.735 6.5498C47.1282 6.5498 49.0404 9.18735 49.0404 11.7166ZM34.9006 17.2681L28.1379 8.54702V16.4059L29.5179 16.7362V17.106H26.372V16.7362L27.4978 16.4059V7.84475C27.3866 7.74041 26.9634 7.38982 26.5254 7.29522C26.3893 7.26561 26.2023 7.23528 26.2023 7.23528V6.86592H28.8702L34.6616 14.3763V7.56746L33.2827 7.23601V6.86592H36.4272V7.23601L35.3014 7.56746V15.3631C35.3014 16.0751 35.3519 17.1348 35.362 17.2681H34.9006Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.52622 17.6118C14.6125 17.6118 17.2952 15.1219 17.2952 12.4688C17.2952 10.1988 15.6635 8.27438 12.5151 7.97181L12.4714 8.0823C13.1957 8.40039 14.8165 9.66157 14.8165 12.1984C14.8165 14.5868 12.801 16.9972 9.63599 16.9972C9.4002 16.9972 9.45513 17.6118 9.52622 17.6118Z" fill="#EC9A1E" />
        </svg>
      </div>
      <div className="title w-[343px] h-[34px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[269px]">Products</span>
        <div className="interactiveIcons w-[34px] h-[34px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[34px] h-[34px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={30} height={25} viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4855 11.2844L6.2453 11.2844L14.8602 2.66948L12.8568 0.666016L0.835938 12.6868L12.8568 24.7076L14.8602 22.7042L6.2453 14.0893L29.4855 14.0893V11.2844Z" fill="#212121" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-[768px] h-px absolute overflow-hidden bg-[#bdbdbd] opacity-100 p-0 left-0 top-[158px]" />
      <span className="imaging font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] absolute left-8 top-[195px]">Imaging</span>
      <div className="linkWithInfo gap-0 absolute flex-col items-start w-[704px] opacity-100 px-0 py-[15px] border-y-[#bdbdbd] border-t border-b left-8 top-[241px] flex">
        <div className="frame482731 gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
          <div className="frame1242 gap-[-2px] flex-col w-[173px] items-start opacity-100 p-0 flex">
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
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-full">(lutetium Lu 177 dotatate)</span>
          </div>
          <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px]">Prostate Cancer</span>
        </div>
      </div>
      <div className="linkWithInfo gap-0 absolute flex-col items-start w-[704px] opacity-100 px-0 py-[15px] border-y-[#bdbdbd] border-t border-b left-8 top-[309px] flex">
        <div className="frame482731 gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
          <div className="frame1242 gap-[-2px] flex-col w-[173px] items-start opacity-100 p-0 flex">
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
          <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
        </div>
      </div>
      <div className="linkWithInfo gap-0 absolute flex-col items-start w-[704px] opacity-100 px-0 py-[15px] border-y-[#bdbdbd] border-t border-b left-8 top-[377px] flex">
        <div className="frame482731 gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
          <div className="frame1242 gap-[-2px] flex-col w-[173px] items-start opacity-100 p-0 flex">
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
          <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
        </div>
      </div>
      <div className="group1245 w-[704px] h-[183px] absolute p-0">
        <span className="therapies font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Therapies</span>
        <div className="linkWithInfo gap-0 flex-col items-start w-[704px] opacity-100 px-0 py-[15px] border-y-[#bdbdbd] border-t border-b flex">
          <div className="frame482731 gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
            <div className="frame1242 gap-[-2px] flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
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
            <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px]">Prostate Cancer</span>
          </div>
        </div>
        <div className="linkWithInfo gap-0 flex-col items-start w-[704px] opacity-100 px-0 py-[15px] border-y-[#bdbdbd] border-t border-b flex">
          <div className="frame482731 gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
            <div className="frame1242 gap-[-2px] flex-col w-[173px] items-start opacity-100 p-0 flex">
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
              <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-full">(lutetium Lu 177 dotatate)</span>
            </div>
            <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px]">Neuroendocrine Tumours</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(property1 == "Default") && <>
    <div className="c01NavBarmobileDropdowns w-[768px] h-[1024px] absolute overflow-hidden bg-white opacity-100 p-0 left-12 top-[2339px]">
      <div className="c01NavBarMobileNotSignedIn w-[768px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="1pxDivider w-[768px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-[#212121] text-left w-[110px] absolute -translate-y-2/4 left-[175px] top-2/4">RLT Care</span>
        <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="black" />
        </svg>
        <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[703px] top-2/4">
          <svg className="frame482674" width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3.29289" y1="22.2929" x2="24.5061" y2="1.07969" stroke="#212121" strokeWidth={2} />
            <line x1="3.70711" y1="1.29289" x2="24.9203" y2="22.5061" stroke="#212121" strokeWidth={2} />
          </svg>
        </div>
        <div className="frame482676 gap-1 absolute flex-row items-start opacity-100 p-2 left-[647px] top-2 flex">
          <div className="search w-8 h-8 relative p-0">
            <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0648 23.4367L13.6904 15.0623C13.0237 15.6127 12.2571 16.0435 11.3904 16.3546C10.5237 16.6657 9.62716 16.8213 8.70068 16.8213C6.42179 16.8213 4.4931 16.0322 2.91461 14.4541C1.33612 12.8761 0.546875 10.9479 0.546875 8.66957C0.546875 6.39126 1.33592 4.46236 2.91401 2.88287C4.4921 1.3034 6.4203 0.513672 8.69861 0.513672C10.9769 0.513672 12.9058 1.30292 14.4853 2.88141C16.0648 4.4599 16.8545 6.38858 16.8545 8.66747C16.8545 9.61961 16.6947 10.529 16.375 11.3957C16.0553 12.2623 15.6288 13.0162 15.0955 13.6572L23.4699 22.0316L22.0648 23.4367ZM8.70068 14.8213C10.4186 14.8213 11.8738 14.2252 13.0661 13.0329C14.2584 11.8406 14.8545 10.3854 14.8545 8.66747C14.8545 6.94952 14.2584 5.49438 13.0661 4.30207C11.8738 3.10976 10.4186 2.5136 8.70068 2.5136C6.98272 2.5136 5.52759 3.10976 4.33528 4.30207C3.14299 5.49438 2.54684 6.94952 2.54684 8.66747C2.54684 10.3854 3.14299 11.8406 4.33528 13.0329C5.52759 14.2252 6.98272 14.8213 8.70068 14.8213Z" fill="#212121" />
            </svg>
          </div>
        </div>
        <svg className="logo" width={111} height={19} viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.16169 2.08519C3.8885 2.85642 4.13078 3.60598 4.13078 4.39959C4.13078 7.06639 1.88281 8.96231 1.88281 12.0256C1.88281 14.8476 3.85601 17.7202 9.56221 17.7202C14.6485 17.7202 17.3311 15.2303 17.3311 12.5773C17.3311 10.3073 15.6995 8.38281 12.5511 8.08024L12.5074 8.19073C13.2317 8.50882 14.8525 9.77001 14.8525 12.3068C14.8525 14.6952 12.837 17.1057 9.67197 17.1057C5.73172 17.1057 4.37341 14.8036 4.37341 12.6874C4.37341 9.97653 6.26934 8.16906 6.26934 5.69977C6.26934 3.9804 4.9688 2.28342 3.2274 1.97471L3.16169 2.08519Z" fill="#E74A21" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.62857 13.9215L11.0613 0.277344H8.06373L9.49642 13.9215H9.62857ZM86.6739 7.4057V16.4059L85.2402 16.7362V17.106H89.743V16.7362L88.3092 16.4059V7.4057H90.7377L91.5363 9.1146H91.845L91.6143 6.86592H83.3688L83.1377 9.1146H83.4468L84.2426 7.4057H86.6739ZM77.8007 12.0994C78.1534 12.0088 80.1869 11.4918 80.1869 9.55576C80.1869 8.01367 79.0055 6.81892 76.0968 6.81892C74.2995 6.81892 72.4805 6.86008 72.2595 6.86549V7.2345L73.447 7.5674V16.4047L72.2595 16.7358V17.1055H76.4622V16.7362L75.0823 16.4051V12.4099H76.2698L79.3078 17.1055H81.9962V16.751L80.635 16.4051L77.8007 12.0994ZM62.9931 12.8188H66.399L64.7077 8.25393H64.6926L62.9931 12.8188ZM59.8227 16.7359L60.9828 16.4059L64.5606 6.86419L65.7571 6.55729L69.4519 16.4052L70.6112 16.7359V17.106H66.2258V16.7359L67.7087 16.4052L66.6616 13.5745H62.7271L61.6858 16.4059L63.1705 16.7359V17.106H59.8227V16.7359ZM101.563 14.287H101.847L102.804 16.4894C103.09 16.6324 103.806 16.9444 104.635 16.9444C105.876 16.9444 107.012 16.2046 107.012 14.9289C107.012 13.9472 106.378 13.3605 105.346 12.8247C105.016 12.6532 104.673 12.4748 104.329 12.2957C103.11 11.6621 101.895 10.7677 101.895 9.32708C101.895 7.76152 102.996 6.5498 105.298 6.5498C106.483 6.5498 107.496 6.87837 107.695 6.9448L107.937 9.31408H107.628L106.742 7.41454C106.578 7.33041 106.045 7.02748 105.26 7.02748C104.088 7.02748 103.287 7.75069 103.287 8.75046C103.287 9.65817 103.89 10.2279 104.922 10.7619C105.304 10.9594 105.728 11.1815 106.129 11.3891C107.775 12.2416 108.556 13.0305 108.556 14.4946C108.556 16.3013 106.863 17.4224 104.759 17.4224C103.149 17.4224 102.164 17.0895 101.837 16.987L101.563 14.287ZM94.3025 16.7362L95.7367 16.4059V7.56674L94.3025 7.23601V6.86592H98.8064V7.23564L97.3712 7.56674V16.4059L98.8068 16.7362V17.106H94.3025V16.7362ZM75.74 11.8774H75.0825V7.40498C77.2659 7.40498 78.5372 7.90144 78.5372 9.67208C78.5372 10.9871 77.4009 11.8774 75.74 11.8774ZM51.2269 7.5671L50.1495 7.23564V6.86592H54.2981V7.23564L52.9994 7.56674L55.864 15.3732H55.8795L58.7442 7.5671L57.4451 7.23601V6.86592H60.5148V7.23601L59.4468 7.5671L55.8156 17.2912H54.8967L51.2269 7.5671ZM47.2821 12.2562C47.2821 9.60353 45.6937 7.02772 43.5346 7.02772C41.2368 7.02772 40.2038 9.24897 40.2038 11.624C40.2038 13.9832 41.5145 16.9443 43.982 16.9443C46.2949 16.9443 47.2821 14.6002 47.2821 12.2562ZM49.0404 11.7166C49.0404 15.3409 46.5263 17.4224 43.7505 17.4224C40.9436 17.4224 38.4606 15.2943 38.4606 11.9939C38.4606 8.66273 40.9747 6.5498 43.735 6.5498C47.1282 6.5498 49.0404 9.18735 49.0404 11.7166ZM34.9006 17.2681L28.1379 8.54702V16.4059L29.5179 16.7362V17.106H26.372V16.7362L27.4978 16.4059V7.84475C27.3866 7.74041 26.9634 7.38982 26.5254 7.29522C26.3893 7.26561 26.2023 7.23528 26.2023 7.23528V6.86592H28.8702L34.6616 14.3763V7.56746L33.2827 7.23601V6.86592H36.4272V7.23601L35.3014 7.56746V15.3631C35.3014 16.0751 35.3519 17.1348 35.362 17.2681H34.9006Z" fill="#0460A9" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.52622 17.6118C14.6125 17.6118 17.2952 15.1219 17.2952 12.4688C17.2952 10.1988 15.6635 8.27438 12.5151 7.97181L12.4714 8.0823C13.1957 8.40039 14.8165 9.66157 14.8165 12.1984C14.8165 14.5868 12.801 16.9972 9.63599 16.9972C9.4002 16.9972 9.45513 17.6118 9.52622 17.6118Z" fill="#EC9A1E" />
        </svg>
      </div>
      <div className="title w-[343px] h-[34px] absolute p-0">
        <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[269px]">More</span>
        <div className="interactiveIcons w-[34px] h-[34px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[34px] h-[34px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={30} height={25} viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4855 11.2844L6.2453 11.2844L14.8602 2.66948L12.8568 0.666016L0.835938 12.6868L12.8568 24.7076L14.8602 22.7042L6.2453 14.0893L29.4855 14.0893V11.2844Z" fill="#212121" />
          </svg>
        </div>
      </div>
      <div className="1pxDivider w-[768px] h-px absolute overflow-hidden bg-[#bdbdbd] opacity-100 p-0 left-0 top-[158px]" />
      <div className="frame482806 gap-[-1px] absolute flex-col items-start opacity-100 p-0 left-[31px] top-[191px] flex">
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-white opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Ipsum Lorem</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Dolor sit</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Lorem ipsum</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Lorem ipsum</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="singleNavLink gap-3 flex-col w-[706px] items-start opacity-100 p-0 flex">
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
              <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Lorem ipsum</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
      </div>
    </div>
  </>}
</>
  );
}