import React from 'react';

export function C01NavBarMobileNotSignedIn(props){
	const {
    state = "Default"
  } = props;
  return (
      <>
  {(state == "Default") && <>
    <div className="c01NavBarMobileNotSignedIn w-[375px] h-16 absolute overflow-hidden bg-[#0d2741] opacity-100 p-0 left-7 top-7">
      <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-white text-left w-[110px] absolute -translate-y-2/4 left-[159px] top-2/4">RLT Care</span>
      <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="#34495E" />
      </svg>
      <div className="frame482676 gap-1 absolute flex-row items-start opacity-100 p-2 left-[254px] top-2 flex">
        <div className="search w-8 h-8 relative p-0">
          <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0648 23.4367L13.6904 15.0623C13.0237 15.6127 12.2571 16.0435 11.3904 16.3546C10.5237 16.6657 9.62716 16.8213 8.70068 16.8213C6.42179 16.8213 4.4931 16.0322 2.91461 14.4541C1.33612 12.8761 0.546875 10.9479 0.546875 8.66957C0.546875 6.39126 1.33592 4.46236 2.91401 2.88287C4.4921 1.3034 6.4203 0.513672 8.69861 0.513672C10.9769 0.513672 12.9058 1.30292 14.4853 2.88141C16.0648 4.4599 16.8545 6.38858 16.8545 8.66747C16.8545 9.61961 16.6947 10.529 16.375 11.3957C16.0553 12.2623 15.6288 13.0162 15.0955 13.6572L23.4699 22.0316L22.0648 23.4367ZM8.70068 14.8213C10.4186 14.8213 11.8738 14.2252 13.0661 13.0329C14.2584 11.8406 14.8545 10.3854 14.8545 8.66747C14.8545 6.94952 14.2584 5.49438 13.0661 4.30207C11.8738 3.10976 10.4186 2.5136 8.70068 2.5136C6.98272 2.5136 5.52759 3.10976 4.33528 4.30207C3.14299 5.49438 2.54684 6.94952 2.54684 8.66747C2.54684 10.3854 3.14299 11.8406 4.33528 13.0329C5.52759 14.2252 6.98272 14.8213 8.70068 14.8213Z" fill="white" />
          </svg>
        </div>
      </div>
      <svg className="logo" width={111} height={19} viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.16169 2.08519C3.8885 2.85642 4.13078 3.60598 4.13078 4.39959C4.13078 7.06639 1.88281 8.96231 1.88281 12.0256C1.88281 14.8476 3.85601 17.7202 9.56221 17.7202C14.6485 17.7202 17.3311 15.2303 17.3311 12.5773C17.3311 10.3073 15.6995 8.38281 12.5511 8.08024L12.5074 8.19073C13.2317 8.50882 14.8525 9.77001 14.8525 12.3068C14.8525 14.6952 12.837 17.1057 9.67197 17.1057C5.73172 17.1057 4.37341 14.8036 4.37341 12.6874C4.37341 9.97653 6.26934 8.16906 6.26934 5.69977C6.26934 3.9804 4.9688 2.28342 3.2274 1.97471L3.16169 2.08519Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9.62857 13.9215L11.0613 0.277344H8.06373L9.49642 13.9215H9.62857ZM86.6739 7.4057V16.4059L85.2402 16.7362V17.106H89.743V16.7362L88.3092 16.4059V7.4057H90.7377L91.5363 9.1146H91.845L91.6143 6.86592H83.3688L83.1377 9.1146H83.4468L84.2426 7.4057H86.6739ZM77.8007 12.0994C78.1534 12.0088 80.1869 11.4918 80.1869 9.55576C80.1869 8.01367 79.0055 6.81892 76.0968 6.81892C74.2995 6.81892 72.4805 6.86008 72.2595 6.86549V7.2345L73.447 7.5674V16.4047L72.2595 16.7358V17.1055H76.4622V16.7362L75.0823 16.4051V12.4099H76.2698L79.3078 17.1055H81.9962V16.751L80.635 16.4051L77.8007 12.0994ZM62.9931 12.8188H66.399L64.7077 8.25393H64.6926L62.9931 12.8188ZM59.8227 16.7359L60.9828 16.4059L64.5606 6.86419L65.7571 6.55729L69.4519 16.4052L70.6112 16.7359V17.106H66.2258V16.7359L67.7087 16.4052L66.6616 13.5745H62.7271L61.6858 16.4059L63.1705 16.7359V17.106H59.8227V16.7359ZM101.563 14.287H101.847L102.804 16.4894C103.09 16.6324 103.806 16.9444 104.635 16.9444C105.876 16.9444 107.012 16.2046 107.012 14.9289C107.012 13.9472 106.378 13.3605 105.346 12.8247C105.016 12.6532 104.673 12.4748 104.329 12.2957C103.11 11.6621 101.895 10.7677 101.895 9.32708C101.895 7.76152 102.996 6.5498 105.298 6.5498C106.483 6.5498 107.496 6.87837 107.695 6.9448L107.937 9.31408H107.628L106.742 7.41454C106.578 7.33041 106.045 7.02748 105.26 7.02748C104.088 7.02748 103.287 7.75069 103.287 8.75046C103.287 9.65817 103.89 10.2279 104.922 10.7619C105.304 10.9594 105.728 11.1815 106.129 11.3891C107.775 12.2416 108.556 13.0305 108.556 14.4946C108.556 16.3013 106.863 17.4224 104.759 17.4224C103.149 17.4224 102.164 17.0895 101.837 16.987L101.563 14.287ZM94.3025 16.7362L95.7367 16.4059V7.56674L94.3025 7.23601V6.86592H98.8064V7.23564L97.3712 7.56674V16.4059L98.8068 16.7362V17.106H94.3025V16.7362ZM75.74 11.8774H75.0825V7.40498C77.2659 7.40498 78.5372 7.90144 78.5372 9.67208C78.5372 10.9871 77.4009 11.8774 75.74 11.8774ZM51.2269 7.5671L50.1495 7.23564V6.86592H54.2981V7.23564L52.9994 7.56674L55.864 15.3732H55.8795L58.7442 7.5671L57.4451 7.23601V6.86592H60.5148V7.23601L59.4468 7.5671L55.8156 17.2912H54.8967L51.2269 7.5671ZM47.2821 12.2562C47.2821 9.60353 45.6937 7.02772 43.5346 7.02772C41.2368 7.02772 40.2038 9.24897 40.2038 11.624C40.2038 13.9832 41.5145 16.9443 43.982 16.9443C46.2949 16.9443 47.2821 14.6002 47.2821 12.2562ZM49.0404 11.7166C49.0404 15.3409 46.5263 17.4224 43.7505 17.4224C40.9436 17.4224 38.4606 15.2943 38.4606 11.9939C38.4606 8.66273 40.9747 6.5498 43.735 6.5498C47.1282 6.5498 49.0404 9.18735 49.0404 11.7166ZM34.9006 17.2681L28.1379 8.54702V16.4059L29.5179 16.7362V17.106H26.372V16.7362L27.4978 16.4059V7.84475C27.3866 7.74041 26.9634 7.38982 26.5254 7.29522C26.3893 7.26561 26.2023 7.23528 26.2023 7.23528V6.86592H28.8702L34.6616 14.3763V7.56746L33.2827 7.23601V6.86592H36.4272V7.23601L35.3014 7.56746V15.3631C35.3014 16.0751 35.3519 17.1348 35.362 17.2681H34.9006Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9.52622 17.6118C14.6125 17.6118 17.2952 15.1219 17.2952 12.4688C17.2952 10.1988 15.6635 8.27438 12.5151 7.97181L12.4714 8.0823C13.1957 8.40039 14.8165 9.66157 14.8165 12.1984C14.8165 14.5868 12.801 16.9972 9.63599 16.9972C9.4002 16.9972 9.45513 17.6118 9.52622 17.6118Z" fill="white" />
      </svg>
      <div className="1pxDivider w-[375px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
      <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[310px] top-2/4">
        <svg className="group1184" width={30} height={10} viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1={1} x2={30} y2={1} stroke="white" strokeWidth={2} />
          <line y1={9} x2={30} y2={9} stroke="white" strokeWidth={2} />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Dropdown") && <>
    <div className="c01NavBarMobileNotSignedIn w-[375px] h-[667px] absolute overflow-hidden bg-white opacity-100 p-0 left-[541px] top-7">
      <div className="accordians gap-0 absolute flex-col items-start opacity-100 p-0 left-0 top-[88px] flex">
        <div className="dropdown gap-0.5 flex-col w-[375px] items-start overflow-hidden opacity-100 pt-4 pb-3 px-4 flex">
          <div className="dropdown gap-0 flex-row justify-between items-center w-full opacity-100 p-0 flex">
            <span className="diseaseAreas font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Disease areas</span>
            <div className="navDropdown gap-[4.286805152893066px] items-center opacity-100 pt-[3.2151038646698px] pb-0 px-0 flex">
              <svg className="boundingBox" width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_50608)">
                  <path d="M-0.111283 14.4307L7.39062 8.00052L-0.111283 1.57031" stroke="#212121" strokeWidth="1.39321" />
                </g>
                <defs>
                  <clipPath id="clip0_5_50608">
                    <rect width="15.0038" height="8.57361" fill="white" transform="translate(0.429688 15.502) rotate(-90)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="dropdown gap-0.5 flex-col w-[375px] items-start overflow-hidden opacity-100 pt-4 pb-3 px-4 flex">
          <div className="dropdown gap-0 flex-row justify-between items-center w-full opacity-100 p-0 flex">
            <span className="products font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Products</span>
            <div className="navDropdown gap-[4.285714149475098px] items-center opacity-100 pt-[3.2142856121063232px] pb-0 px-0 flex">
              <svg className="boundingBox" width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_50610)">
                  <path d="M-0.109374 14.4294L7.39062 8.00084L-0.109373 1.57227" stroke="#212121" strokeWidth="1.39286" />
                </g>
                <defs>
                  <clipPath id="clip0_5_50610">
                    <rect width={15} height="8.57143" fill="white" transform="translate(0.421875 15.5) rotate(-90)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="content gap-5 flex-col items-start opacity-100 px-6 py-0 !hidden flex" />
        <div className="links gap-0.5 flex-col w-[375px] items-start overflow-hidden opacity-100 pt-4 pb-3 px-4 flex">
          <div className="dropdown gap-0 flex-row items-center w-full opacity-100 p-0 flex">
            <span className="referPatients font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Refer patients</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="links gap-0.5 flex-col w-[375px] items-start overflow-hidden opacity-100 pt-4 pb-3 px-4 flex">
          <div className="dropdown gap-0 flex-row items-center w-full opacity-100 p-0 flex">
            <span className="setupAFacility font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Setup a facility</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="links gap-0.5 flex-col w-[375px] items-start overflow-hidden opacity-100 pt-4 pb-3 px-4 flex">
          <div className="dropdown gap-0 flex-row items-center w-full opacity-100 p-0 flex">
            <span className="order font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Order</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="links gap-0.5 flex-col w-[375px] items-start overflow-hidden opacity-100 pt-4 pb-3 px-4 flex">
          <div className="dropdown gap-0 flex-row items-center w-full opacity-100 p-0 flex">
            <span className="contact font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Contact</span>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="dropdown gap-0.5 flex-col w-[375px] items-start overflow-hidden opacity-100 pt-4 pb-3 px-4 flex">
          <div className="dropdown gap-0 flex-row justify-between items-center w-full opacity-100 p-0 flex">
            <span className="more font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">More</span>
            <div className="navDropdown gap-[4.286323070526123px] items-center opacity-100 pt-[3.2147421836853027px] pb-0 px-0 flex">
              <svg className="boundingBox" width={9} height={16} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_50612)">
                  <path d="M-0.11044 14.4312L7.39062 8.00175L-0.110439 1.57227" stroke="#212121" strokeWidth="1.39305" />
                </g>
                <defs>
                  <clipPath id="clip0_5_50612">
                    <rect width="15.0021" height="8.57265" fill="white" transform="translate(0.421875 15.502) rotate(-90)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="links gap-0.5 flex-col w-[375px] items-start overflow-hidden opacity-100 px-6 py-0 flex" />
      </div>
      <div className="getInTouch w-[375px] h-[72px] absolute bg-[#34495e] opacity-100 p-0 left-0 top-[595px]">
        <div className="getInTouch gap-4 absolute flex-row w-[164px] items-center opacity-100 p-0 left-4 top-[23px] flex">
          <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.734375 20.2691L2.49205 14.2615C2.17538 13.5846 1.93148 12.891 1.76033 12.1806C1.58916 11.4703 1.50357 10.7434 1.50357 9.99998C1.50357 8.68581 1.75291 7.45082 2.25158 6.295C2.75024 5.13917 3.42699 4.13375 4.28182 3.27875C5.13667 2.42375 6.14192 1.74688 7.29755 1.24813C8.45317 0.749376 9.68794 0.5 11.0019 0.5C12.3158 0.5 13.5508 0.749334 14.707 1.248C15.8631 1.74667 16.8688 2.42342 17.724 3.27825C18.5793 4.1331 19.2563 5.13834 19.7552 6.29398C20.2541 7.44959 20.5035 8.68437 20.5035 9.9983C20.5035 11.3122 20.2542 12.5473 19.7554 13.7034C19.2566 14.8595 18.5798 15.8652 17.7248 16.7204C16.8698 17.5757 15.8644 18.2527 14.7085 18.7516C13.5527 19.2505 12.3177 19.5 11.0036 19.5C10.2602 19.5 9.53327 19.4144 8.82292 19.2432C8.11257 19.0721 7.41894 18.8281 6.74202 18.5115L0.734375 20.2691ZM2.95355 18.05L6.15355 17.1C6.3997 17.0333 6.6372 17.0051 6.86605 17.0154C7.0949 17.0256 7.32407 17.0872 7.55355 17.2C8.08688 17.4666 8.64522 17.6666 9.22855 17.8C9.81188 17.9333 10.4036 18 11.0036 18C13.2369 18 15.1285 17.225 16.6785 15.675C18.2285 14.125 19.0035 12.2333 19.0035 9.99998C19.0035 7.76664 18.2285 5.87498 16.6785 4.32498C15.1285 2.77498 13.2369 1.99998 11.0036 1.99998C8.77022 1.99998 6.87855 2.77498 5.32855 4.32498C3.77855 5.87498 3.00355 7.76664 3.00355 9.99998C3.00355 10.6 3.07022 11.1916 3.20355 11.775C3.33688 12.3583 3.53688 12.9166 3.80355 13.45C3.92022 13.6666 3.98432 13.8958 3.99585 14.1375C4.0074 14.3791 3.97663 14.6166 3.90355 14.85L2.95355 18.05ZM10.2536 13.75H11.7535V10.75H14.7535V9.25H11.7535V6.25H10.2536V9.25H7.25358V10.75H10.2536V13.75Z" fill="white" />
            </svg>
          </div>
          <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px] w-[124px]">Get in touch</span>
        </div>
        <div className="squareCTA w-[77px] h-[72px] absolute gap-[10.18104076385498px] bg-[#273e54] opacity-100 p-0 left-[298px] top-0">
          <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.47921 3.95558L14.6923 14.1686L14.6923 6.59689L16.4531 6.59689L16.4531 17.1621L5.88791 17.1621L5.88791 15.4012L13.4596 15.4012L3.2466 5.18819L4.47921 3.95558Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="frame482695 gap-0 absolute flex-col w-[343px] items-end opacity-100 p-0 left-4 top-[472px] flex">
        <div className="signIn gap-4 flex-row w-[342px] justify-between items-end opacity-100 pl-0 pr-[21px] py-4 flex">
          <div className="content gap-4 flex-row w-[200.5px] items-end opacity-100 p-0 flex">
            <svg className="03NavigationAccountSettingsuser" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.4916 3.00004C9.00759 3.00556 6.99788 5.02272 7.00156 7.5067C7.00524 9.99067 9.02091 12.0019 11.5049 12C13.9889 11.9982 16.0016 9.98402 16.0016 7.50004C16.0042 6.30402 15.5296 5.15635 14.683 4.31157C13.8363 3.46679 12.6876 2.99471 11.4916 3.00004ZM11.4916 10C10.1122 9.99453 8.99789 8.87281 9.00157 7.4934C9.00524 6.114 10.1255 4.99823 11.5049 5.00007C12.8843 5.0019 14.0015 6.12064 14.0016 7.50004C14.0016 8.16482 13.7368 8.80223 13.2658 9.27136C12.7948 9.74049 12.1563 10.0027 11.4916 10ZM15.2216 14.0001C15.604 13.9993 15.9533 14.2167 16.1216 14.5601L19.1116 20.5401L17.3216 21.4301L14.6016 16.0001H8.37156L5.64156 21.4501L3.85156 20.5601L6.85156 14.5601C7.01982 14.2167 7.36917 13.9993 7.75156 14.0001H15.2216Z" fill="#212121" />
            </svg>
            <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
              <span className="signIn font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Sign in</span>
            </div>
          </div>
          <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={21} height={17} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.49533L16.4049 7.49533L10.3238 1.41421L11.738 0L20.2233 8.48528L11.738 16.9706L10.3238 15.5563L16.4049 9.47523L0 9.47523V7.49533Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
      <div className="frame482696 gap-0 absolute flex-col w-[343px] items-end opacity-100 p-0 left-4 top-[529px] flex">
        <div className="signIn gap-4 flex-row w-[342px] items-end opacity-100 pl-0 pr-[21px] py-4 flex">
          <div className="frame482694 gap-4 flex-row w-[200.5px] items-end opacity-100 p-0 flex">
            <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
              <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#1C1B1F" />
              </svg>
            </div>
            <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
              <span className="findATreatmentCentre font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
            </div>
          </div>
        </div>
      </div>
      <div className="c01NavBarMobileAuthenticated w-[375px] h-16 absolute overflow-hidden bg-white opacity-100 p-0 left-0 top-0">
        <div className="1pxDivider w-[375px] h-px absolute overflow-hidden bg-[#212121] opacity-100 p-0 left-0 bottom-0" />
        <span className="title font-['Volta_Modern_Display'] text-sm font-bold text-[#212121] text-left w-[110px] absolute -translate-y-2/4 left-[159px] top-2/4">RLT Care</span>
        <svg width={1} height={64} viewBox="0 0 1 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499997" y2={64} stroke="black" />
        </svg>
        <div className="navMobileMenu w-[49px] h-12 absolute -translate-y-2/4 opacity-100 p-0 left-[310px] top-2/4">
          <svg className="frame482674" width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3.29289" y1="22.2929" x2="24.5061" y2="1.07969" stroke="#212121" strokeWidth={2} />
            <line x1="3.70711" y1="1.29289" x2="24.9203" y2="22.5061" stroke="#212121" strokeWidth={2} />
          </svg>
        </div>
        <div className="frame482676 gap-1 absolute flex-row items-start opacity-100 p-2 left-[254px] top-2 flex">
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
    </div>
  </>}
</>
  );
}