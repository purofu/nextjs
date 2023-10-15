import React from 'react';

export function C02Footer(props){
	const {
    size = "XL-L",
    state = "Default"
  } = props;
  return (
      <>
  {(size == "XL-L" && state == "Default") && <>
    <div className="c02Footer gap-0 absolute flex-col items-start bg-[#001c37] opacity-100 p-0 left-[17px] top-7 flex">
      <div className="frame482901 gap-0 flex-col items-start opacity-100 p-0 flex">
        <div className="frame482891 gap-[800px] flex-row items-start bg-[#001c37] opacity-100 px-12 py-6 flex">
          <span className="thisWebsiteIsIntendedForHealthcareProfessionals font-['Volta_Modern_Display'] text-[15px] font-medium text-[#a9b4bf] text-left tracking-[0px]">This website is intended for healthcare professionals</span>
          <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[15px] font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
        </div>
        <svg className="divider" width={1440} height={2} viewBox="0 0 1440 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L1440 0.999959" stroke="#516476" />
        </svg>
      </div>
      <div className="frame482906 gap-6 flex-row items-start opacity-100 px-12 py-0 flex">
        <div className="frame482905 gap-[180px] flex-row items-start opacity-100 pt-16 pb-0 px-0 flex">
          <svg className="logo" width={162} height={27} viewBox="0 0 162 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.33522 2.90997C6.39597 4.03554 6.74956 5.1295 6.74956 6.28774C6.74956 10.1798 3.46875 12.9468 3.46875 17.4175C3.46875 21.5362 6.34855 25.7286 14.6765 25.7286C22.0997 25.7286 26.015 22.0948 26.015 18.2227C26.015 14.9097 23.6337 12.1011 19.0386 11.6595L18.9749 11.8207C20.0319 12.285 22.3974 14.1256 22.3974 17.828C22.3974 21.3138 19.456 24.8318 14.8367 24.8318C9.08607 24.8318 7.10367 21.4719 7.10367 18.3834C7.10367 14.4271 9.8707 11.7891 9.8707 8.1853C9.8707 5.67595 7.97262 3.19927 5.43112 2.74872L5.33522 2.90997Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.7734 20.1845L16.8643 0.271484H12.4896L14.5805 20.1845H14.7734ZM127.218 10.675V23.8104L125.125 24.2926V24.8322H131.697V24.2926L129.605 23.8104V10.675H133.149L134.314 13.1691H134.765L134.428 9.88724H122.394L122.057 13.1691H122.508L123.669 10.675H127.218ZM114.268 17.5253C114.783 17.3931 117.75 16.6385 117.75 13.813C117.75 11.5623 116.026 9.81864 111.781 9.81864C109.158 9.81864 106.503 9.87872 106.181 9.88662V10.4252L107.914 10.911V23.8087L106.181 24.2919V24.8315H112.314V24.2925L110.3 23.8093V17.9785H112.034L116.467 24.8315H120.391V24.3141L118.404 23.8093L114.268 17.5253ZM92.6567 18.5753H97.6274L95.1592 11.913H95.1371L92.6567 18.5753ZM88.0297 24.2921L89.7228 23.8105L94.9444 9.88472L96.6907 9.43681L102.083 23.8095L103.775 24.2921V24.8323H97.3747V24.2921L99.5389 23.8095L98.0107 19.6781H92.2685L90.7488 23.8105L92.9156 24.2921V24.8323H88.0297V24.2921ZM148.948 20.718H149.362L150.759 23.9324C151.177 24.1411 152.222 24.5963 153.432 24.5963C155.243 24.5963 156.9 23.5166 156.9 21.6549C156.9 20.2221 155.975 19.3658 154.469 18.5838C153.987 18.3335 153.486 18.0732 152.984 17.8118C151.206 16.887 149.433 15.5817 149.433 13.4792C149.433 11.1943 151.039 9.42588 154.399 9.42588C156.129 9.42588 157.607 9.90541 157.898 10.0024L158.251 13.4602H157.8L156.507 10.6879C156.267 10.5652 155.49 10.123 154.344 10.123C152.633 10.123 151.464 11.1785 151.464 12.6377C151.464 13.9624 152.344 14.794 153.85 15.5733C154.407 15.8616 155.027 16.1856 155.612 16.4886C158.014 17.7328 159.154 18.8842 159.154 21.021C159.154 23.6578 156.683 25.294 153.613 25.294C151.263 25.294 149.826 24.8082 149.348 24.6585L148.948 20.718ZM138.352 24.2926L140.445 23.8104V10.9101L138.352 10.4274V9.88724H144.925V10.4268L142.83 10.9101V23.8104L144.925 24.2926V24.8322H138.352V24.2926ZM111.26 17.2014H110.301V10.674C113.487 10.674 115.343 11.3985 115.343 13.9827C115.343 15.9019 113.684 17.2014 111.26 17.2014ZM75.4845 10.9106L73.912 10.4268V9.88724H79.9667V10.4268L78.0713 10.9101L82.2521 22.3033H82.2748L86.4556 10.9106L84.5596 10.4274V9.88724H89.0398V10.4274L87.4811 10.9106L82.1815 25.1025H80.8404L75.4845 10.9106ZM69.7271 17.7542C69.7271 13.8827 67.409 10.1234 64.2579 10.1234C60.9043 10.1234 59.3967 13.3652 59.3967 16.8315C59.3967 20.2746 61.3096 24.5962 64.9108 24.5962C68.2864 24.5962 69.7271 21.1752 69.7271 17.7542ZM72.2933 16.9666C72.2933 22.2561 68.6242 25.294 64.5729 25.294C60.4764 25.294 56.8526 22.1882 56.8526 17.3713C56.8526 12.5096 60.5217 9.42588 64.5503 9.42588C69.5026 9.42588 72.2933 13.2753 72.2933 16.9666ZM51.6569 25.0688L41.787 12.3407V23.8104L43.801 24.2926V24.8322H39.2097V24.2926L40.8527 23.8104V11.3158C40.6904 11.1635 40.0728 10.6519 39.4336 10.5138C39.235 10.4706 38.962 10.4263 38.962 10.4263V9.88724H42.8557L51.308 20.8484V10.9111L49.2956 10.4274V9.88724H53.8848V10.4274L52.2418 10.9111V22.2886C52.2418 23.3277 52.3155 24.8743 52.3303 25.0688H51.6569Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.624 25.5704C22.0472 25.5704 25.9625 21.9365 25.9625 18.0644C25.9625 14.7515 23.5812 11.9428 18.9861 11.5012L18.9224 11.6625C19.9794 12.1267 22.3449 13.9674 22.3449 17.6698C22.3449 21.1556 19.4035 24.6735 14.7842 24.6735C14.4401 24.6735 14.5202 25.5704 14.624 25.5704Z" fill="white" />
          </svg>
          <div className="frame482904 gap-[133px] flex-row w-[546px] justify-between items-start opacity-100 p-0 flex">
            <div className="frame482803 gap-2 flex-col w-[204px] items-start opacity-100 p-0 flex">
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Terms of Use</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Cookie Settings</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Privacy</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Web Accessibility</span>
            </div>
            <div className="frame482804 gap-2 flex-col w-[204px] items-start opacity-100 p-0 flex">
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Twitter</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Linked In</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Youtube</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Facebook</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Instagram</span>
            </div>
          </div>
        </div>
        <div className="frame482903 gap-16 flex-row items-start opacity-100 p-0 flex">
          <svg className="divider" width={2} height={428} viewBox="0 0 2 428" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 428L0.999969 -3.57628e-07" stroke="#516476" />
          </svg>
          <div className="frame482902 gap-[164px] flex-col h-full justify-between items-end w-[368px] opacity-100 pt-16 pb-10 px-0 flex">
            <span className="sub1 font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">Learn more about who we are and what we do.</span>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Visit Novartis.com</span>
              <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="frame482907 gap-0 flex-col items-start opacity-100 p-0 flex">
        <svg className="divider" width={1440} height={2} viewBox="0 0 1440 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L1440 0.999959" stroke="#516476" />
        </svg>
        <div className="frame482891 gap-[800px] flex-row justify-between items-start w-full bg-[#001c37] opacity-100 px-12 py-6 flex">
          <span className="2023NovartisAG font-['Volta_Modern_Display'] text-[15px] font-medium text-[#a9b4bf] text-left tracking-[0px]">© 2023 Novartis AG</span>
          <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[15px] font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && state == "Default") && <>
    <div className="c02Footer gap-0 absolute flex-col w-[375px] items-start bg-[#001c37] opacity-100 p-0 left-[2515px] top-[27px] flex">
      <div className="frame482901 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482891 gap-1 flex-col items-start w-full bg-[#001c37] opacity-100 px-8 py-4 flex">
          <span className="thisWebsiteIsIntendedForHealthcareProfessionals font-['Volta_Modern_Display'] text-[13px] font-medium text-[#a9b4bf] text-left tracking-[0px]">This website is intended for healthcare professionals</span>
          <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[13px] font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
        </div>
        <svg className="divider" width={375} height={2} viewBox="0 0 375 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L375 0.999989" stroke="#516476" />
        </svg>
      </div>
      <div className="frame482896 gap-0 flex-col w-[375px] items-center opacity-100 p-0 flex">
        <div className="frame482894 gap-12 flex-col items-start w-full opacity-100 px-4 py-10 flex">
          <svg className="logo" width={162} height={27} viewBox="0 0 162 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.33522 2.90997C6.39597 4.03554 6.74956 5.1295 6.74956 6.28774C6.74956 10.1798 3.46875 12.9468 3.46875 17.4175C3.46875 21.5362 6.34855 25.7286 14.6765 25.7286C22.0997 25.7286 26.015 22.0948 26.015 18.2227C26.015 14.9097 23.6337 12.1011 19.0386 11.6595L18.9749 11.8207C20.0319 12.285 22.3974 14.1256 22.3974 17.828C22.3974 21.3138 19.456 24.8318 14.8367 24.8318C9.08607 24.8318 7.10367 21.4719 7.10367 18.3834C7.10367 14.4271 9.8707 11.7891 9.8707 8.1853C9.8707 5.67595 7.97262 3.19927 5.43112 2.74872L5.33522 2.90997Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.7734 20.1845L16.8643 0.271484H12.4896L14.5805 20.1845H14.7734ZM127.218 10.675V23.8104L125.125 24.2926V24.8322H131.697V24.2926L129.605 23.8104V10.675H133.149L134.314 13.1691H134.765L134.428 9.88724H122.394L122.057 13.1691H122.508L123.669 10.675H127.218ZM114.268 17.5253C114.783 17.3931 117.75 16.6385 117.75 13.813C117.75 11.5623 116.026 9.81864 111.781 9.81864C109.158 9.81864 106.503 9.87872 106.181 9.88662V10.4252L107.914 10.911V23.8087L106.181 24.2919V24.8315H112.314V24.2925L110.3 23.8093V17.9785H112.034L116.467 24.8315H120.391V24.3141L118.404 23.8093L114.268 17.5253ZM92.6567 18.5753H97.6274L95.1592 11.913H95.1371L92.6567 18.5753ZM88.0297 24.2921L89.7228 23.8105L94.9444 9.88472L96.6907 9.43681L102.083 23.8095L103.775 24.2921V24.8323H97.3747V24.2921L99.5389 23.8095L98.0107 19.6781H92.2685L90.7488 23.8105L92.9156 24.2921V24.8323H88.0297V24.2921ZM148.948 20.718H149.362L150.759 23.9324C151.177 24.1411 152.222 24.5963 153.432 24.5963C155.243 24.5963 156.9 23.5166 156.9 21.6549C156.9 20.2221 155.975 19.3658 154.469 18.5838C153.987 18.3335 153.486 18.0732 152.984 17.8118C151.206 16.887 149.433 15.5817 149.433 13.4792C149.433 11.1943 151.039 9.42588 154.399 9.42588C156.129 9.42588 157.607 9.90541 157.898 10.0024L158.251 13.4602H157.8L156.507 10.6879C156.267 10.5652 155.49 10.123 154.344 10.123C152.633 10.123 151.464 11.1785 151.464 12.6377C151.464 13.9624 152.344 14.794 153.85 15.5733C154.407 15.8616 155.027 16.1856 155.612 16.4886C158.014 17.7328 159.154 18.8842 159.154 21.021C159.154 23.6578 156.683 25.294 153.613 25.294C151.263 25.294 149.826 24.8082 149.348 24.6585L148.948 20.718ZM138.352 24.2926L140.445 23.8104V10.9101L138.352 10.4274V9.88724H144.925V10.4268L142.83 10.9101V23.8104L144.925 24.2926V24.8322H138.352V24.2926ZM111.26 17.2014H110.301V10.674C113.487 10.674 115.343 11.3985 115.343 13.9827C115.343 15.9019 113.684 17.2014 111.26 17.2014ZM75.4845 10.9106L73.912 10.4268V9.88724H79.9667V10.4268L78.0713 10.9101L82.2521 22.3033H82.2748L86.4556 10.9106L84.5596 10.4274V9.88724H89.0398V10.4274L87.4811 10.9106L82.1815 25.1025H80.8404L75.4845 10.9106ZM69.7271 17.7542C69.7271 13.8827 67.409 10.1234 64.2579 10.1234C60.9043 10.1234 59.3967 13.3652 59.3967 16.8315C59.3967 20.2746 61.3096 24.5962 64.9108 24.5962C68.2864 24.5962 69.7271 21.1752 69.7271 17.7542ZM72.2933 16.9666C72.2933 22.2561 68.6242 25.294 64.5729 25.294C60.4764 25.294 56.8526 22.1882 56.8526 17.3713C56.8526 12.5096 60.5217 9.42588 64.5503 9.42588C69.5026 9.42588 72.2933 13.2753 72.2933 16.9666ZM51.6569 25.0688L41.787 12.3407V23.8104L43.801 24.2926V24.8322H39.2097V24.2926L40.8527 23.8104V11.3158C40.6904 11.1635 40.0728 10.6519 39.4336 10.5138C39.235 10.4706 38.962 10.4263 38.962 10.4263V9.88724H42.8557L51.308 20.8484V10.9111L49.2956 10.4274V9.88724H53.8848V10.4274L52.2418 10.9111V22.2886C52.2418 23.3277 52.3155 24.8743 52.3303 25.0688H51.6569Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.624 25.5704C22.0472 25.5704 25.9625 21.9365 25.9625 18.0644C25.9625 14.7515 23.5812 11.9428 18.9861 11.5012L18.9224 11.6625C19.9794 12.1267 22.3449 13.9674 22.3449 17.6698C22.3449 21.1556 19.4035 24.6735 14.7842 24.6735C14.4401 24.6735 14.5202 25.5704 14.624 25.5704Z" fill="white" />
          </svg>
          <div className="frame482893 gap-4 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="frame482803 gap-0.5 flex-col items-start flex-1 min-w-0 opacity-[0.800000011920929] p-0 flex">
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Terms of Use</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Cookie Settings</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Privacy</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Web Accessibility</span>
            </div>
            <div className="frame482804 gap-0.5 flex-col items-start flex-1 min-w-0 opacity-[0.800000011920929] p-0 flex">
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Twitter</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Linked In</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Youtube</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Facebook</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Instagram</span>
            </div>
          </div>
        </div>
        <div className="frame482897 gap-0 flex-col h-[269px] justify-between items-center w-full opacity-100 p-0 flex">
          <svg className="divider" width={375} height={1} viewBox="0 0 375 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.490234L375 0.490224" stroke="#516476" />
          </svg>
          <div className="frame482895 gap-24 flex-col h-[269px] justify-between items-start w-full opacity-100 px-4 py-6 flex">
            <span className="sub1 font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-[342px]">Learn more about who we are and what we do.</span>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Visit Novartis.com</span>
              <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 3.65625L14.6667 14.2896L14.6667 6.40625L16.5 6.40625L16.5 17.4062L5.5 17.4062L5.5 15.5729L13.3833 15.5729L2.75 4.93958L4.03333 3.65625Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="frame482907 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <svg className="divider" width={375} height={1} viewBox="0 0 375 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.490234L375 0.490224" stroke="#516476" />
        </svg>
        <div className="frame482891 gap-1 flex-col items-start w-full bg-[#001c37] opacity-100 p-4 flex">
          <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[13px] font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          <span className="2023NovartisAG font-['Volta_Modern_Display'] text-[13px] font-medium text-[#a9b4bf] text-left tracking-[0px]">© 2023 Novartis AG</span>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=M, State\=Default">
    <div className="c02Footer gap-2.5 absolute flex-row w-[768px] items-start bg-[#001c37] opacity-100 p-0 left-[1577px] top-[27px] flex">
      <div className="frame482896 gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="frame482901 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="frame482891 gap-[800px] flex-row justify-between items-start w-full bg-[#001c37] opacity-100 px-8 py-4 flex">
            <span className="thisWebsiteIsIntendedForHealthcareProfessionals font-['Volta_Modern_Display'] text-sm font-medium text-[#a9b4bf] text-left tracking-[0px]">This website is intended for healthcare professionals</span>
            <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-sm font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          </div>
          <svg className="divider" width={768} height={2} viewBox="0 0 768 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L768 0.999978" stroke="#516476" />
          </svg>
        </div>
        <div className="frame482894 gap-12 flex-row w-[768px] justify-between items-start opacity-100 px-8 py-0 flex">
          <div className="frame482900 gap-12 flex-col items-start opacity-100 p-0 flex">
            <svg className="logo" width={162} height={27} viewBox="0 0 162 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.33522 2.90997C6.39597 4.03554 6.74956 5.1295 6.74956 6.28774C6.74956 10.1798 3.46875 12.9468 3.46875 17.4175C3.46875 21.5362 6.34855 25.7286 14.6765 25.7286C22.0997 25.7286 26.015 22.0948 26.015 18.2227C26.015 14.9097 23.6337 12.1011 19.0386 11.6595L18.9749 11.8207C20.0319 12.285 22.3974 14.1256 22.3974 17.828C22.3974 21.3138 19.456 24.8318 14.8367 24.8318C9.08607 24.8318 7.10367 21.4719 7.10367 18.3834C7.10367 14.4271 9.8707 11.7891 9.8707 8.1853C9.8707 5.67595 7.97262 3.19927 5.43112 2.74872L5.33522 2.90997Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.7734 20.1845L16.8643 0.271484H12.4896L14.5805 20.1845H14.7734ZM127.218 10.675V23.8104L125.125 24.2926V24.8322H131.697V24.2926L129.605 23.8104V10.675H133.149L134.314 13.1691H134.765L134.428 9.88724H122.394L122.057 13.1691H122.508L123.669 10.675H127.218ZM114.268 17.5253C114.783 17.3931 117.75 16.6385 117.75 13.813C117.75 11.5623 116.026 9.81864 111.781 9.81864C109.158 9.81864 106.503 9.87872 106.181 9.88662V10.4252L107.914 10.911V23.8087L106.181 24.2919V24.8315H112.314V24.2925L110.3 23.8093V17.9785H112.034L116.467 24.8315H120.391V24.3141L118.404 23.8093L114.268 17.5253ZM92.6567 18.5753H97.6274L95.1592 11.913H95.1371L92.6567 18.5753ZM88.0297 24.2921L89.7228 23.8105L94.9444 9.88472L96.6907 9.43681L102.083 23.8095L103.775 24.2921V24.8323H97.3747V24.2921L99.5389 23.8095L98.0107 19.6781H92.2685L90.7488 23.8105L92.9156 24.2921V24.8323H88.0297V24.2921ZM148.948 20.718H149.362L150.759 23.9324C151.177 24.1411 152.222 24.5963 153.432 24.5963C155.243 24.5963 156.9 23.5166 156.9 21.6549C156.9 20.2221 155.975 19.3658 154.469 18.5838C153.987 18.3335 153.486 18.0732 152.984 17.8118C151.206 16.887 149.433 15.5817 149.433 13.4792C149.433 11.1943 151.039 9.42588 154.399 9.42588C156.129 9.42588 157.607 9.90541 157.898 10.0024L158.251 13.4602H157.8L156.507 10.6879C156.267 10.5652 155.49 10.123 154.344 10.123C152.633 10.123 151.464 11.1785 151.464 12.6377C151.464 13.9624 152.344 14.794 153.85 15.5733C154.407 15.8616 155.027 16.1856 155.612 16.4886C158.014 17.7328 159.154 18.8842 159.154 21.021C159.154 23.6578 156.683 25.294 153.613 25.294C151.263 25.294 149.826 24.8082 149.348 24.6585L148.948 20.718ZM138.352 24.2926L140.445 23.8104V10.9101L138.352 10.4274V9.88724H144.925V10.4268L142.83 10.9101V23.8104L144.925 24.2926V24.8322H138.352V24.2926ZM111.26 17.2014H110.301V10.674C113.487 10.674 115.343 11.3985 115.343 13.9827C115.343 15.9019 113.684 17.2014 111.26 17.2014ZM75.4845 10.9106L73.912 10.4268V9.88724H79.9667V10.4268L78.0713 10.9101L82.2521 22.3033H82.2748L86.4556 10.9106L84.5596 10.4274V9.88724H89.0398V10.4274L87.4811 10.9106L82.1815 25.1025H80.8404L75.4845 10.9106ZM69.7271 17.7542C69.7271 13.8827 67.409 10.1234 64.2579 10.1234C60.9043 10.1234 59.3967 13.3652 59.3967 16.8315C59.3967 20.2746 61.3096 24.5962 64.9108 24.5962C68.2864 24.5962 69.7271 21.1752 69.7271 17.7542ZM72.2933 16.9666C72.2933 22.2561 68.6242 25.294 64.5729 25.294C60.4764 25.294 56.8526 22.1882 56.8526 17.3713C56.8526 12.5096 60.5217 9.42588 64.5503 9.42588C69.5026 9.42588 72.2933 13.2753 72.2933 16.9666ZM51.6569 25.0688L41.787 12.3407V23.8104L43.801 24.2926V24.8322H39.2097V24.2926L40.8527 23.8104V11.3158C40.6904 11.1635 40.0728 10.6519 39.4336 10.5138C39.235 10.4706 38.962 10.4263 38.962 10.4263V9.88724H42.8557L51.308 20.8484V10.9111L49.2956 10.4274V9.88724H53.8848V10.4274L52.2418 10.9111V22.2886C52.2418 23.3277 52.3155 24.8743 52.3303 25.0688H51.6569Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.624 25.5704C22.0472 25.5704 25.9625 21.9365 25.9625 18.0644C25.9625 14.7515 23.5812 11.9428 18.9861 11.5012L18.9224 11.6625C19.9794 12.1267 22.3449 13.9674 22.3449 17.6698C22.3449 21.1556 19.4035 24.6735 14.7842 24.6735C14.4401 24.6735 14.5202 25.5704 14.624 25.5704Z" fill="white" />
            </svg>
            <div className="frame482893 gap-6 flex-row w-[340px] items-start opacity-100 p-0 flex">
              <div className="frame482803 gap-0.5 flex-col items-start flex-1 min-w-0 opacity-[0.800000011920929] p-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Terms of Use</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Cookie Settings</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Privacy</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Web Accessibility</span>
              </div>
              <div className="frame482804 gap-0.5 flex-col items-start flex-1 min-w-0 opacity-[0.800000011920929] p-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Twitter</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Linked In</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Youtube</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Facebook</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Instagram</span>
              </div>
            </div>
          </div>
          <div className="frame482895 gap-24 flex-col h-full justify-between items-end w-[279px] opacity-100 p-0 flex">
            <span className="sub1 font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[-0.35px] w-full">Learn more about  who we are and what we do.</span>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Visit Novartis.com</span>
              <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 3.65625L14.6667 14.2896L14.6667 6.40625L16.5 6.40625L16.5 17.4062L5.5 17.4062L5.5 15.5729L13.3833 15.5729L2.75 4.93958L4.03333 3.65625Z" fill="white" />
              </svg>
            </div>
          </div>
          <svg className="divider" width={2} height={337} viewBox="0 0 2 337" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 337L0.999976 -9.77516e-06" stroke="#516476" />
          </svg>
        </div>
        <div className="frame482907 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <svg className="divider" width={768} height={1} viewBox="0 0 768 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.490234L768 0.490213" stroke="#516476" />
          </svg>
          <div className="frame482891 gap-[800px] flex-row justify-between items-start w-full bg-[#001c37] opacity-100 px-8 py-4 flex">
            <span className="2023NovartisAG font-['Volta_Modern_Display'] text-sm font-medium text-[#a9b4bf] text-left tracking-[0px]">© 2023 Novartis AG</span>
            <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-sm font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "Default" && state == "Hover") && <>
    <div className="c02Footer gap-0 absolute flex-col items-start opacity-100 p-0 left-[3372px] top-6 flex">
      <div className="c02Footer gap-0 flex-col items-start bg-[#001c37] opacity-100 p-0 flex">
        <div className="frame482901 gap-0 flex-col items-start opacity-100 p-0 flex">
          <div className="frame482891 gap-[800px] flex-row items-start bg-[#001c37] opacity-100 px-12 py-6 flex">
            <span className="thisWebsiteIsIntendedForHealthcareProfessionals font-['Volta_Modern_Display'] text-[15px] font-medium text-[#a9b4bf] text-left tracking-[0px]">This website is intended for healthcare professionals</span>
            <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[15px] font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          </div>
          <svg className="divider" width={1440} height={2} viewBox="0 0 1440 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L1440 0.999959" stroke="#516476" />
          </svg>
        </div>
        <div className="frame482906 gap-6 flex-row items-start opacity-100 px-12 py-0 flex">
          <div className="frame482905 gap-[180px] flex-row items-start opacity-100 pt-16 pb-0 px-0 flex">
            <svg className="logo" width={162} height={27} viewBox="0 0 162 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.33522 2.90997C6.39597 4.03554 6.74956 5.1295 6.74956 6.28774C6.74956 10.1798 3.46875 12.9468 3.46875 17.4175C3.46875 21.5362 6.34855 25.7286 14.6765 25.7286C22.0997 25.7286 26.015 22.0948 26.015 18.2227C26.015 14.9097 23.6337 12.1011 19.0386 11.6595L18.9749 11.8207C20.0319 12.285 22.3974 14.1256 22.3974 17.828C22.3974 21.3138 19.456 24.8318 14.8367 24.8318C9.08607 24.8318 7.10367 21.4719 7.10367 18.3834C7.10367 14.4271 9.8707 11.7891 9.8707 8.1853C9.8707 5.67595 7.97262 3.19927 5.43112 2.74872L5.33522 2.90997Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.7734 20.1845L16.8643 0.271484H12.4896L14.5805 20.1845H14.7734ZM127.218 10.675V23.8104L125.125 24.2926V24.8322H131.697V24.2926L129.605 23.8104V10.675H133.149L134.314 13.1691H134.765L134.428 9.88724H122.394L122.057 13.1691H122.508L123.669 10.675H127.218ZM114.268 17.5253C114.783 17.3931 117.75 16.6385 117.75 13.813C117.75 11.5623 116.026 9.81864 111.781 9.81864C109.158 9.81864 106.503 9.87872 106.181 9.88662V10.4252L107.914 10.911V23.8087L106.181 24.2919V24.8315H112.314V24.2925L110.3 23.8093V17.9785H112.034L116.467 24.8315H120.391V24.3141L118.404 23.8093L114.268 17.5253ZM92.6567 18.5753H97.6274L95.1592 11.913H95.1371L92.6567 18.5753ZM88.0297 24.2921L89.7228 23.8105L94.9444 9.88472L96.6907 9.43681L102.083 23.8095L103.775 24.2921V24.8323H97.3747V24.2921L99.5389 23.8095L98.0107 19.6781H92.2685L90.7488 23.8105L92.9156 24.2921V24.8323H88.0297V24.2921ZM148.948 20.718H149.362L150.759 23.9324C151.177 24.1411 152.222 24.5963 153.432 24.5963C155.243 24.5963 156.9 23.5166 156.9 21.6549C156.9 20.2221 155.975 19.3658 154.469 18.5838C153.987 18.3335 153.486 18.0732 152.984 17.8118C151.206 16.887 149.433 15.5817 149.433 13.4792C149.433 11.1943 151.039 9.42588 154.399 9.42588C156.129 9.42588 157.607 9.90541 157.898 10.0024L158.251 13.4602H157.8L156.507 10.6879C156.267 10.5652 155.49 10.123 154.344 10.123C152.633 10.123 151.464 11.1785 151.464 12.6377C151.464 13.9624 152.344 14.794 153.85 15.5733C154.407 15.8616 155.027 16.1856 155.612 16.4886C158.014 17.7328 159.154 18.8842 159.154 21.021C159.154 23.6578 156.683 25.294 153.613 25.294C151.263 25.294 149.826 24.8082 149.348 24.6585L148.948 20.718ZM138.352 24.2926L140.445 23.8104V10.9101L138.352 10.4274V9.88724H144.925V10.4268L142.83 10.9101V23.8104L144.925 24.2926V24.8322H138.352V24.2926ZM111.26 17.2014H110.301V10.674C113.487 10.674 115.343 11.3985 115.343 13.9827C115.343 15.9019 113.684 17.2014 111.26 17.2014ZM75.4845 10.9106L73.912 10.4268V9.88724H79.9667V10.4268L78.0713 10.9101L82.2521 22.3033H82.2748L86.4556 10.9106L84.5596 10.4274V9.88724H89.0398V10.4274L87.4811 10.9106L82.1815 25.1025H80.8404L75.4845 10.9106ZM69.7271 17.7542C69.7271 13.8827 67.409 10.1234 64.2579 10.1234C60.9043 10.1234 59.3967 13.3652 59.3967 16.8315C59.3967 20.2746 61.3096 24.5962 64.9108 24.5962C68.2864 24.5962 69.7271 21.1752 69.7271 17.7542ZM72.2933 16.9666C72.2933 22.2561 68.6242 25.294 64.5729 25.294C60.4764 25.294 56.8526 22.1882 56.8526 17.3713C56.8526 12.5096 60.5217 9.42588 64.5503 9.42588C69.5026 9.42588 72.2933 13.2753 72.2933 16.9666ZM51.6569 25.0688L41.787 12.3407V23.8104L43.801 24.2926V24.8322H39.2097V24.2926L40.8527 23.8104V11.3158C40.6904 11.1635 40.0728 10.6519 39.4336 10.5138C39.235 10.4706 38.962 10.4263 38.962 10.4263V9.88724H42.8557L51.308 20.8484V10.9111L49.2956 10.4274V9.88724H53.8848V10.4274L52.2418 10.9111V22.2886C52.2418 23.3277 52.3155 24.8743 52.3303 25.0688H51.6569Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.624 25.5704C22.0472 25.5704 25.9625 21.9365 25.9625 18.0644C25.9625 14.7515 23.5812 11.9428 18.9861 11.5012L18.9224 11.6625C19.9794 12.1267 22.3449 13.9674 22.3449 17.6698C22.3449 21.1556 19.4035 24.6735 14.7842 24.6735C14.4401 24.6735 14.5202 25.5704 14.624 25.5704Z" fill="white" />
            </svg>
            <div className="frame482904 gap-[133px] flex-row w-[546px] justify-between items-start opacity-100 p-0 flex">
              <div className="frame482803 gap-2 flex-col w-[204px] items-start opacity-100 p-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Terms of Use</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-[#9cbfdd] text-left tracking-[0px] w-full h-[35px]">Cookie Settings</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Privacy</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Web Accessibility</span>
              </div>
              <div className="frame482804 gap-2 flex-col w-[204px] items-start opacity-100 p-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Twitter</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Linked In</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Youtube</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Facebook</span>
                <span className="subcopy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full h-[35px]">Instagram</span>
              </div>
            </div>
          </div>
          <div className="frame482903 gap-16 flex-row items-start opacity-100 p-0 flex">
            <svg className="divider" width={2} height={428} viewBox="0 0 2 428" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 428L0.999969 -3.57628e-07" stroke="#516476" />
            </svg>
            <div className="frame482902 gap-[164px] flex-col h-full justify-between items-end w-[368px] opacity-100 pt-16 pb-10 px-0 flex">
              <span className="sub1 font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">Learn more about who we are and what we do.</span>
              <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Visit Novartis.com</span>
                <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="frame482907 gap-0 flex-col items-start opacity-100 p-0 flex">
          <svg className="divider" width={1440} height={2} viewBox="0 0 1440 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L1440 0.999959" stroke="#516476" />
          </svg>
          <div className="frame482891 gap-[800px] flex-row justify-between items-start w-full bg-[#001c37] opacity-100 px-12 py-6 flex">
            <span className="2023NovartisAG font-['Volta_Modern_Display'] text-[15px] font-medium text-[#a9b4bf] text-left tracking-[0px]">© 2023 Novartis AG</span>
            <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[15px] font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "Default" && state == "Tapped") && <>
    <div className="c02Footer gap-0 absolute flex-col w-[375px] items-start bg-[#001c37] opacity-100 p-0 left-[5027px] top-6 flex">
      <div className="frame482901 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482891 gap-1 flex-col items-start w-full bg-[#001c37] opacity-100 px-8 py-4 flex">
          <span className="thisWebsiteIsIntendedForHealthcareProfessionals font-['Volta_Modern_Display'] text-[13px] font-medium text-[#a9b4bf] text-left tracking-[0px]">This website is intended for healthcare professionals</span>
          <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[13px] font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
        </div>
        <svg className="divider" width={375} height={2} viewBox="0 0 375 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L375 0.999989" stroke="#516476" />
        </svg>
      </div>
      <div className="frame482896 gap-0 flex-col w-[375px] items-center opacity-100 p-0 flex">
        <div className="frame482894 gap-12 flex-col items-start w-full opacity-100 px-4 py-10 flex">
          <svg className="logo" width={162} height={27} viewBox="0 0 162 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.33522 2.90997C6.39597 4.03554 6.74956 5.1295 6.74956 6.28774C6.74956 10.1798 3.46875 12.9468 3.46875 17.4175C3.46875 21.5362 6.34855 25.7286 14.6765 25.7286C22.0997 25.7286 26.015 22.0948 26.015 18.2227C26.015 14.9097 23.6337 12.1011 19.0386 11.6595L18.9749 11.8207C20.0319 12.285 22.3974 14.1256 22.3974 17.828C22.3974 21.3138 19.456 24.8318 14.8367 24.8318C9.08607 24.8318 7.10367 21.4719 7.10367 18.3834C7.10367 14.4271 9.8707 11.7891 9.8707 8.1853C9.8707 5.67595 7.97262 3.19927 5.43112 2.74872L5.33522 2.90997Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.7734 20.1845L16.8643 0.271484H12.4896L14.5805 20.1845H14.7734ZM127.218 10.675V23.8104L125.125 24.2926V24.8322H131.697V24.2926L129.605 23.8104V10.675H133.149L134.314 13.1691H134.765L134.428 9.88724H122.394L122.057 13.1691H122.508L123.669 10.675H127.218ZM114.268 17.5253C114.783 17.3931 117.75 16.6385 117.75 13.813C117.75 11.5623 116.026 9.81864 111.781 9.81864C109.158 9.81864 106.503 9.87872 106.181 9.88662V10.4252L107.914 10.911V23.8087L106.181 24.2919V24.8315H112.314V24.2925L110.3 23.8093V17.9785H112.034L116.467 24.8315H120.391V24.3141L118.404 23.8093L114.268 17.5253ZM92.6567 18.5753H97.6274L95.1592 11.913H95.1371L92.6567 18.5753ZM88.0297 24.2921L89.7228 23.8105L94.9444 9.88472L96.6907 9.43681L102.083 23.8095L103.775 24.2921V24.8323H97.3747V24.2921L99.5389 23.8095L98.0107 19.6781H92.2685L90.7488 23.8105L92.9156 24.2921V24.8323H88.0297V24.2921ZM148.948 20.718H149.362L150.759 23.9324C151.177 24.1411 152.222 24.5963 153.432 24.5963C155.243 24.5963 156.9 23.5166 156.9 21.6549C156.9 20.2221 155.975 19.3658 154.469 18.5838C153.987 18.3335 153.486 18.0732 152.984 17.8118C151.206 16.887 149.433 15.5817 149.433 13.4792C149.433 11.1943 151.039 9.42588 154.399 9.42588C156.129 9.42588 157.607 9.90541 157.898 10.0024L158.251 13.4602H157.8L156.507 10.6879C156.267 10.5652 155.49 10.123 154.344 10.123C152.633 10.123 151.464 11.1785 151.464 12.6377C151.464 13.9624 152.344 14.794 153.85 15.5733C154.407 15.8616 155.027 16.1856 155.612 16.4886C158.014 17.7328 159.154 18.8842 159.154 21.021C159.154 23.6578 156.683 25.294 153.613 25.294C151.263 25.294 149.826 24.8082 149.348 24.6585L148.948 20.718ZM138.352 24.2926L140.445 23.8104V10.9101L138.352 10.4274V9.88724H144.925V10.4268L142.83 10.9101V23.8104L144.925 24.2926V24.8322H138.352V24.2926ZM111.26 17.2014H110.301V10.674C113.487 10.674 115.343 11.3985 115.343 13.9827C115.343 15.9019 113.684 17.2014 111.26 17.2014ZM75.4845 10.9106L73.912 10.4268V9.88724H79.9667V10.4268L78.0713 10.9101L82.2521 22.3033H82.2748L86.4556 10.9106L84.5596 10.4274V9.88724H89.0398V10.4274L87.4811 10.9106L82.1815 25.1025H80.8404L75.4845 10.9106ZM69.7271 17.7542C69.7271 13.8827 67.409 10.1234 64.2579 10.1234C60.9043 10.1234 59.3967 13.3652 59.3967 16.8315C59.3967 20.2746 61.3096 24.5962 64.9108 24.5962C68.2864 24.5962 69.7271 21.1752 69.7271 17.7542ZM72.2933 16.9666C72.2933 22.2561 68.6242 25.294 64.5729 25.294C60.4764 25.294 56.8526 22.1882 56.8526 17.3713C56.8526 12.5096 60.5217 9.42588 64.5503 9.42588C69.5026 9.42588 72.2933 13.2753 72.2933 16.9666ZM51.6569 25.0688L41.787 12.3407V23.8104L43.801 24.2926V24.8322H39.2097V24.2926L40.8527 23.8104V11.3158C40.6904 11.1635 40.0728 10.6519 39.4336 10.5138C39.235 10.4706 38.962 10.4263 38.962 10.4263V9.88724H42.8557L51.308 20.8484V10.9111L49.2956 10.4274V9.88724H53.8848V10.4274L52.2418 10.9111V22.2886C52.2418 23.3277 52.3155 24.8743 52.3303 25.0688H51.6569Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.624 25.5704C22.0472 25.5704 25.9625 21.9365 25.9625 18.0644C25.9625 14.7515 23.5812 11.9428 18.9861 11.5012L18.9224 11.6625C19.9794 12.1267 22.3449 13.9674 22.3449 17.6698C22.3449 21.1556 19.4035 24.6735 14.7842 24.6735C14.4401 24.6735 14.5202 25.5704 14.624 25.5704Z" fill="white" />
          </svg>
          <div className="frame482893 gap-4 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="frame482803 gap-0.5 flex-col items-start flex-1 min-w-0 opacity-[0.800000011920929] p-0 flex">
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Terms of Use</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Cookie Settings</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Privacy</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-[#9cbfdd] text-left tracking-[0px] w-full h-[35px]">Web Accessibility</span>
            </div>
            <div className="frame482804 gap-0.5 flex-col items-start flex-1 min-w-0 opacity-[0.800000011920929] p-0 flex">
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Twitter</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Linked In</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Youtube</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Facebook</span>
              <span className="subcopy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full h-[35px]">Instagram</span>
            </div>
          </div>
        </div>
        <div className="frame482897 gap-0 flex-col h-[269px] justify-between items-end w-full opacity-100 p-0 flex">
          <svg className="divider" width={375} height={1} viewBox="0 0 375 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.490234L375 0.490224" stroke="#516476" />
          </svg>
          <div className="frame482895 gap-24 flex-col h-[269px] justify-between items-start w-full opacity-100 px-4 py-6 flex">
            <span className="sub1 font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-[342px]">Learn more about who we are and what we do.</span>
            <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
              <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Visit Novartis.com</span>
              <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03333 3.65625L14.6667 14.2896L14.6667 6.40625L16.5 6.40625L16.5 17.4062L5.5 17.4062L5.5 15.5729L13.3833 15.5729L2.75 4.93958L4.03333 3.65625Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="frame482907 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <svg className="divider" width={375} height={1} viewBox="0 0 375 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.490234L375 0.490224" stroke="#516476" />
        </svg>
        <div className="frame482891 gap-1 flex-col items-start w-full bg-[#001c37] opacity-100 p-4 flex">
          <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[13px] font-medium text-[#a9b4bf] text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          <span className="2023NovartisAG font-['Volta_Modern_Display'] text-[13px] font-medium text-[#a9b4bf] text-left tracking-[0px]">© 2023 Novartis AG</span>
        </div>
      </div>
    </div>
  </>}
</>
  );
}