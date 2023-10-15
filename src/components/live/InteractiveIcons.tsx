import React from 'react';

export function InteractiveIcons(props){
	const {
    icon = "more"
  } = props;
  return (
      <>
  {(icon == "more") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.03819 5.99998L1.38439 11.6538L0.330566 10.6L4.93057 5.99998L0.330566 1.39998L1.38439 0.346158L7.03819 5.99998Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "end") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <div className="frame483073 gap-0.5 absolute flex-col items-start -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4 flex">
        <svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.75 5.5L1.84976 11L0.75 9.97485L5.55051 5.5L0.75 1.02515L1.84976 -4.8072e-08L7.75 5.5Z" fill="#212121" />
        </svg>
        <div className="rectangle5743 w-[1.5px] h-[11px] relative bg-[#212121] opacity-100 p-0" />
      </div>
    </div>
  </>}
  {(icon == "arrow bottom right") && <>
    <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.4 4L16 15.6L16 7L18 7L18 19L6 19L6 17L14.6 17L3 5.4L4.4 4Z" fill="#212121" />
    </svg>
  </>}
  {(icon == "arrow top right") && <>
    <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 17.6L16.6 6L8 6L8 4L20 4L20 16L18 16L18 7.4L6.4 19L5 17.6Z" fill="#212121" />
    </svg>
  </>}
  {(icon == "arrow down") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.875 0V13.6969L1.575 7.39688L0 9L9 18L18 9L16.425 7.39688L10.125 13.6969V0H7.875Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "arrow top") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.875 18V4.30312L1.575 10.6031L0 9L9 0L18 9L16.425 10.6031L10.125 4.30312V18H7.875Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "arrow left") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={21} height={17} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2233 7.49533L3.81838 7.49533L9.89949 1.41421L8.48528 0L0 8.48528L8.48528 16.9706L9.89949 15.5563L3.81838 9.47523L20.2233 9.47523V7.49533Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "arrow right") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={21} height={17} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.49533L16.4049 7.49533L10.3238 1.41421L11.738 0L20.2233 8.48528L11.738 16.9706L10.3238 15.5563L16.4049 9.47523L0 9.47523V7.49533Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "login") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.1346H1.99998V13.6923C1.99998 13.7692 2.03202 13.8397 2.09613 13.9038C2.16024 13.9679 2.23077 14 2.3077 14H17.6923C17.7692 14 17.8397 13.9679 17.9038 13.9038C17.9679 13.8397 18 13.7692 18 13.6923V2.3077C18 2.23077 17.9679 2.16024 17.9038 2.09613C17.8397 2.03203 17.7692 1.99998 17.6923 1.99998H2.3077C2.23077 1.99998 2.16024 2.03203 2.09613 2.09613C2.03202 2.16024 1.99998 2.23077 1.99998 2.3077V4.86535H0.5V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.6923 11.9615L8.63848 10.8769L10.7808 8.74995H0.5V7.25H10.7808L8.63848 5.12308L9.6923 4.03848L13.6538 7.99998L9.6923 11.9615Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "logout") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 left-full -right-full inset-y-[0%]" />
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6923 17.5C16.1974 17.5 16.625 17.325 16.975 16.975C17.325 16.625 17.5 16.1974 17.5 15.6923V2.3077C17.5 1.80257 17.325 1.375 16.975 1.025C16.625 0.675 16.1974 0.5 15.6923 0.5H8.9904V1.99998H15.6923C15.7692 1.99998 15.8398 2.03203 15.9039 2.09613C15.968 2.16024 16 2.23077 16 2.3077V15.6923C16 15.7692 15.968 15.8397 15.9039 15.9038C15.8398 15.9679 15.7692 16 15.6923 16H8.9904V17.5H15.6923ZM4.76925 13.2692L5.80768 12.1846L3.37307 9.74995H11.9039V8.25H3.37307L5.80768 5.81538L4.76925 4.7308L0.500048 8.99998L4.76925 13.2692Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "menu") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 11.6347V10.1347H17.5V11.6347H0.5ZM0.5 6.75005V5.2501H17.5V6.75005H0.5ZM0.5 1.86545V0.365479H17.5V1.86545H0.5Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "close") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "collapse") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="rectangle4505 w-6 h-0.5 absolute bg-[#212121] opacity-100 p-0 left-0 top-[11px]" />
    </div>
  </>}
  {(icon == "expand") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <svg className="add" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 13H0V11H11V0H13V11H24V13H13V24H11V13Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "Circle arrow down large") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="interactiveIcons absolute w-[14.22px] h-[14.22px] opacity-100 p-0 inset-[20.37%]">
        <div className="boundingBox absolute w-[14.22px] h-[14.22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33317 0.666748V8.78341L1.59984 5.05008L0.666504 6.00008L5.99984 11.3334L11.3332 6.00008L10.3998 5.05008L6.6665 8.78341V0.666748H5.33317Z" fill="#023054" />
        </svg>
      </div>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={12} cy={12} r="11.1111" stroke="#023054" strokeWidth="1.77778" />
      </svg>
    </div>
  </>}
  {(icon == "circle arrow down") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0096 13.6923L13.6538 10.0481L12.6096 9.00385L10.7596 10.8539V6.29808H9.25V10.8539L7.39998 9.00385L6.35578 10.0481L10.0096 13.6923ZM10.0016 19.5C8.68772 19.5 7.45268 19.2506 6.29655 18.752C5.1404 18.2533 4.13472 17.5765 3.2795 16.7217C2.42427 15.8669 1.74721 14.8616 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68772 0.749334 7.45268 1.248 6.29655C1.74667 5.1404 2.42342 4.13472 3.27825 3.2795C4.1331 2.42427 5.13834 1.74721 6.29398 1.24833C7.44959 0.749443 8.68437 0.5 9.9983 0.5C11.3122 0.5 12.5473 0.749334 13.7034 1.248C14.8596 1.74667 15.8652 2.42342 16.7205 3.27825C17.5757 4.1331 18.2527 5.13834 18.7516 6.29398C19.2505 7.44959 19.5 8.68437 19.5 9.9983C19.5 11.3122 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8652 16.7217 16.7205C15.8669 17.5757 14.8616 18.2527 13.706 18.7516C12.5504 19.2505 11.3156 19.5 10.0016 19.5ZM9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 9.99998C18 7.76664 17.225 5.87498 15.675 4.32498C14.125 2.77498 12.2333 1.99998 9.99998 1.99998C7.76664 1.99998 5.87498 2.77498 4.32498 4.32498C2.77498 5.87498 1.99998 7.76664 1.99998 9.99998C1.99998 12.2333 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "circle arrow right") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6923 9.9904L10.0481 6.3462L9.00385 7.3904L10.8539 9.24042L6.29808 9.24042L6.29808 10.75L10.8539 10.75L9.00385 12.6L10.0481 13.6442L13.6923 9.9904ZM19.5 9.99835C19.5 11.3123 19.2506 12.5473 18.752 13.7034C18.2533 14.8596 17.5765 15.8653 16.7217 16.7205C15.8669 17.5757 14.8616 18.2528 13.706 18.7517C12.5504 19.2506 11.3156 19.5 10.0017 19.5C8.68772 19.5 7.45268 19.2507 6.29655 18.752C5.1404 18.2533 4.13472 17.5766 3.2795 16.7217C2.42427 15.8669 1.74721 14.8617 1.24833 13.706C0.749442 12.5504 0.5 11.3156 0.5 10.0017C0.5 8.68777 0.749334 7.45273 1.248 6.2966C1.74667 5.14045 2.42342 4.13477 3.27825 3.27955C4.1331 2.42431 5.13834 1.74726 6.29398 1.24837C7.44959 0.749489 8.68437 0.500047 9.9983 0.500047C11.3122 0.500047 12.5473 0.749381 13.7034 1.24805C14.8595 1.74671 15.8652 2.42346 16.7205 3.2783C17.5757 4.13315 18.2527 5.13839 18.7516 6.29402C19.2505 7.44964 19.5 8.68442 19.5 9.99835ZM18 10C18 7.76669 17.225 5.87502 15.675 4.32502C14.125 2.77502 12.2333 2.00002 9.99998 2.00002C7.76664 2.00002 5.87498 2.77502 4.32498 4.32502C2.77498 5.87502 1.99998 7.76669 1.99998 10C1.99998 12.2334 2.77498 14.125 4.32498 15.675C5.87498 17.225 7.76664 18 9.99998 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2334 18 10Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "circle arrow top right") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.604 7.38242H7.45035L7.45035 8.85915H10.0667L6.84524 12.0806L7.91267 13.148L11.1341 9.92658L11.1341 12.5429H12.6108L12.604 7.38242ZM16.7163 3.28138C17.6454 4.21047 18.3424 5.26008 18.8073 6.4302C19.2722 7.60033 19.5048 8.78999 19.5051 9.99918C19.5053 11.2084 19.2733 12.398 18.8089 13.5679C18.3445 14.7378 17.6478 15.7873 16.7187 16.7164C15.7896 17.6455 14.74 18.3425 13.5699 18.8074C12.3997 19.2723 11.2101 19.5049 10.0009 19.5051C8.79167 19.5054 7.60211 19.2733 6.43219 18.809C5.26228 18.3446 4.21278 17.6478 3.28369 16.7187C2.3546 15.7897 1.6576 14.74 1.1927 13.5699C0.727791 12.3998 0.4952 11.2101 0.494929 10.0009C0.494657 8.79174 0.726719 7.60217 1.19111 6.43225C1.65549 5.26234 2.35223 4.21284 3.28132 3.28375C4.21041 2.35466 5.26002 1.65767 6.43014 1.19277C7.60027 0.727856 8.78993 0.495263 9.99912 0.494992C11.2083 0.49472 12.3979 0.726782 13.5678 1.19117C14.7377 1.65555 15.7872 2.35229 16.7163 3.28138ZM15.6569 4.34321C14.0777 2.764 12.192 1.9744 10 1.9744C7.80797 1.9744 5.92235 2.764 4.34315 4.34321C2.76394 5.92241 1.97434 7.80803 1.97434 10.0001C1.97434 12.1921 2.76394 14.0777 4.34315 15.6569C5.92235 17.2361 7.80797 18.0257 10 18.0257C12.192 18.0257 14.0776 17.2361 15.6569 15.6569C17.2361 14.0777 18.0257 12.1921 18.0257 10.0001C18.0257 7.80803 17.2361 5.92241 15.6569 4.34321Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "user") && <>
    <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.4901 3.00004C9.00612 3.00556 6.99642 5.02272 7.0001 7.5067C7.00378 9.99067 9.01944 12.0019 11.5034 12C13.9874 11.9982 16.0001 9.98402 16.0001 7.50004C16.0028 6.30402 15.5281 5.15635 14.6815 4.31157C13.8348 3.46679 12.6861 2.99471 11.4901 3.00004ZM11.4901 10C10.1107 9.99453 8.99643 8.87281 9.0001 7.4934C9.00378 6.114 10.124 4.99823 11.5034 5.00007C12.8828 5.0019 14.0001 6.12064 14.0001 7.50004C14.0001 8.16482 13.7353 8.80223 13.2643 9.27136C12.7933 9.74049 12.1549 10.0027 11.4901 10ZM15.2201 14.0001C15.6025 13.9993 15.9518 14.2167 16.1201 14.5601L19.1101 20.5401L17.3201 21.4301L14.6001 16.0001H8.3701L5.6401 21.4501L3.8501 20.5601L6.8501 14.5601C7.01835 14.2167 7.3677 13.9993 7.7501 14.0001H15.2201Z" fill="black" fillOpacity="0.87" />
    </svg>
  </>}
  {(icon == "user circle") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.02308 15.2923C4.87308 14.6615 5.79903 14.1635 6.80095 13.7981C7.80287 13.4327 8.86921 13.25 9.99998 13.25C11.1307 13.25 12.1971 13.4327 13.199 13.7981C14.2009 14.1635 15.1269 14.6615 15.9769 15.2923C16.5987 14.609 17.0913 13.8179 17.4548 12.9192C17.8182 12.0205 18 11.0474 18 9.99998C18 7.78331 17.2208 5.89581 15.6625 4.33748C14.1041 2.77914 12.2166 1.99998 9.99998 1.99998C7.78331 1.99998 5.89581 2.77914 4.33748 4.33748C2.77914 5.89581 1.99998 7.78331 1.99998 9.99998C1.99998 11.0474 2.18171 12.0205 2.54518 12.9192C2.90864 13.8179 3.40128 14.609 4.02308 15.2923ZM10.0003 10.75C9.08726 10.75 8.31729 10.4366 7.69038 9.80988C7.06346 9.18314 6.75 8.41328 6.75 7.50028C6.75 6.58726 7.06336 5.81729 7.69008 5.19038C8.31681 4.56346 9.08668 4.25 9.99968 4.25C10.9127 4.25 11.6827 4.56336 12.3096 5.19008C12.9365 5.81681 13.25 6.58668 13.25 7.49968C13.25 8.41269 12.9366 9.18266 12.3099 9.80958C11.6831 10.4365 10.9133 10.75 10.0003 10.75ZM9.99998 19.5C8.68074 19.5 7.44325 19.2519 6.2875 18.7557C5.13173 18.2596 4.12628 17.5839 3.27115 16.7288C2.41603 15.8737 1.7404 14.8682 1.24425 13.7125C0.748083 12.5567 0.5 11.3192 0.5 9.99998C0.5 8.68074 0.748083 7.44325 1.24425 6.2875C1.7404 5.13173 2.41603 4.12628 3.27115 3.27115C4.12628 2.41603 5.13173 1.7404 6.2875 1.24425C7.44325 0.748084 8.68074 0.5 9.99998 0.5C11.3192 0.5 12.5567 0.748084 13.7125 1.24425C14.8682 1.7404 15.8737 2.41603 16.7288 3.27115C17.5839 4.12628 18.2596 5.13173 18.7557 6.2875C19.2519 7.44325 19.5 8.68074 19.5 9.99998C19.5 11.3192 19.2519 12.5567 18.7557 13.7125C18.2596 14.8682 17.5839 15.8737 16.7288 16.7288C15.8737 17.5839 14.8682 18.2596 13.7125 18.7557C12.5567 19.2519 11.3192 19.5 9.99998 19.5ZM9.99998 18C10.9025 18 11.7727 17.8548 12.6105 17.5644C13.4484 17.274 14.1923 16.8679 14.8423 16.3461C14.1923 15.8436 13.458 15.4519 12.6394 15.1711C11.8208 14.8903 10.941 14.75 9.99998 14.75C9.05894 14.75 8.17753 14.8887 7.35573 15.1663C6.53393 15.4439 5.80123 15.8371 5.15765 16.3461C5.80765 16.8679 6.55157 17.274 7.3894 17.5644C8.22722 17.8548 9.09741 18 9.99998 18ZM9.99998 9.25C10.4974 9.25 10.9134 9.08269 11.2481 8.74808C11.5827 8.41344 11.75 7.99741 11.75 7.49998C11.75 7.00254 11.5827 6.58651 11.2481 6.25188C10.9134 5.91726 10.4974 5.74995 9.99998 5.74995C9.50254 5.74995 9.08651 5.91726 8.75187 6.25188C8.41726 6.58651 8.24995 7.00254 8.24995 7.49998C8.24995 7.99741 8.41726 8.41344 8.75187 8.74808C9.08651 9.08269 9.50254 9.25 9.99998 9.25Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "search") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#090909" />
      </svg>
    </div>
  </>}
  {(icon == "comment") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.730957 20.2691L2.48863 14.2615C2.17197 13.5846 1.92806 12.891 1.75691 12.1806C1.58574 11.4703 1.50016 10.7434 1.50016 9.99998C1.50016 8.68581 1.74949 7.45082 2.24816 6.295C2.74682 5.13917 3.42357 4.13375 4.27841 3.27875C5.13326 2.42375 6.1385 1.74688 7.29413 1.24813C8.44975 0.749376 9.68452 0.5 10.9985 0.5C12.3124 0.5 13.5474 0.749334 14.7036 1.248C15.8597 1.74667 16.8654 2.42342 17.7206 3.27825C18.5758 4.1331 19.2529 5.13834 19.7518 6.29398C20.2507 7.44959 20.5001 8.68437 20.5001 9.9983C20.5001 11.3122 20.2507 12.5473 19.752 13.7034C19.2532 14.8595 18.5764 15.8652 17.7214 16.7204C16.8664 17.5757 15.8609 18.2527 14.7051 18.7516C13.5493 19.2505 12.3143 19.5 11.0001 19.5C10.2567 19.5 9.52986 19.4144 8.81951 19.2432C8.10916 19.0721 7.41552 18.8281 6.73861 18.5115L0.730957 20.2691ZM2.95013 18.05L6.15013 17.1C6.39628 17.0333 6.63378 17.0051 6.86263 17.0154C7.09148 17.0256 7.32065 17.0872 7.55013 17.2C8.08347 17.4666 8.6418 17.6666 9.22513 17.8C9.80847 17.9333 10.4001 18 11.0001 18C13.2335 18 15.1251 17.225 16.6751 15.675C18.2251 14.125 19.0001 12.2333 19.0001 9.99998C19.0001 7.76664 18.2251 5.87498 16.6751 4.32498C15.1251 2.77498 13.2335 1.99998 11.0001 1.99998C8.7668 1.99998 6.87513 2.77498 5.32513 4.32498C3.77513 5.87498 3.00013 7.76664 3.00013 9.99998C3.00013 10.6 3.0668 11.1916 3.20013 11.775C3.33347 12.3583 3.53347 12.9166 3.80013 13.45C3.9168 13.6666 3.9809 13.8958 3.99243 14.1375C4.00398 14.3791 3.97322 14.6166 3.90013 14.85L2.95013 18.05ZM10.2502 13.75H11.7501V10.75H14.7501V9.25H11.7501V6.25H10.2502V9.25H7.25016V10.75H10.2502V13.75Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "play") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <svg className="play" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 22V2L21 12L1 22Z" stroke="#212121" strokeWidth={2} />
      </svg>
    </div>
  </>}
  {(icon == "settings") && <>
    <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7462 1.13789L14.6474 0.704412L14.4205 0.232827L13.9038 0.150381L13.7462 1.13789ZM10.7608 1.06899L10.6494 0.0752095L10.0995 0.136844L9.85962 0.635507L10.7608 1.06899ZM9.68778 3.29967L9.94397 4.2663L10.3893 4.14828L10.5889 3.73315L9.68778 3.29967ZM5.80073 5.47518L5.7204 6.47195L6.16576 6.50784L6.48962 6.20005L5.80073 5.47518ZM3.29546 5.27328L3.37579 4.27651L2.83606 4.23302L2.50464 4.66123L3.29546 5.27328ZM1.84766 7.75735L0.925149 7.37137L0.711895 7.88105L1.02988 8.33288L1.84766 7.75735ZM3.27442 9.78467L4.24385 10.03L4.35656 9.58476L4.09221 9.20914L3.27442 9.78467ZM3.27453 14.2156L4.09231 14.7912L4.35668 14.4155L4.24395 13.9702L3.27453 14.2156ZM1.84778 16.2429L1.02999 15.6674L0.712004 16.1193L0.92528 16.6289L1.84778 16.2429ZM3.29579 18.7271L2.505 19.3392L2.83642 19.7674L3.37612 19.7239L3.29579 18.7271ZM5.80128 18.5252L6.49011 17.8003L6.16626 17.4926L5.72095 17.5285L5.80128 18.5252ZM9.68746 20.7001L10.5886 20.2667L10.389 19.8515L9.9437 19.7335L9.68746 20.7001ZM10.7606 22.931L9.85939 23.3645L10.0993 23.8631L10.6491 23.9248L10.7606 22.931ZM13.7465 22.8621L13.904 23.8496L14.4208 23.7671L14.6476 23.2955L13.7465 22.8621ZM14.8664 20.5338L14.5481 19.5858L14.1481 19.7201L13.9653 20.1003L14.8664 20.5338ZM18.2351 18.49L18.3154 17.4932L17.8668 17.457L17.5422 17.7689L18.2351 18.49ZM20.7313 18.6911L20.6509 19.6879L21.1933 19.7316L21.5246 19.3L20.7313 18.6911ZM22.3218 15.8105L23.2598 16.1569L23.4417 15.6644L23.1395 15.235L22.3218 15.8105ZM20.8388 13.7033L19.8566 13.5152L19.7768 13.9319L20.021 14.2788L20.8388 13.7033ZM20.8389 10.297L20.0211 9.72149L19.7769 10.0684L19.8567 10.4851L20.8389 10.297ZM22.3219 8.1898L23.1396 8.76533L23.4418 8.33595L23.26 7.84341L22.3219 8.1898ZM20.7316 5.30929L21.5249 4.7005L21.1936 4.26881L20.6513 4.31252L20.7316 5.30929ZM18.2357 5.51044L17.5427 6.23141L17.8673 6.54337L18.316 6.50721L18.2357 5.51044ZM14.8661 3.46601L13.9649 3.89949L14.1478 4.27972L14.5478 4.41401L14.8661 3.46601ZM11.9996 2C12.5411 2 13.0718 2.04294 13.5887 2.1254L13.9038 0.150381C13.283 0.0513493 12.647 0 11.9996 0V2ZM10.8722 2.06276C11.2419 2.02132 11.6181 2 11.9996 2V0C11.5435 0 11.093 0.0254937 10.6494 0.0752095L10.8722 2.06276ZM9.85962 0.635507L8.78661 2.86619L10.5889 3.73315L11.662 1.50247L9.85962 0.635507ZM9.43158 2.33305C7.78567 2.76928 6.30759 3.6139 5.11184 4.75032L6.48962 6.20005C7.44796 5.28927 8.63032 4.61447 9.94397 4.2663L9.43158 2.33305ZM5.88106 4.47842L3.37579 4.27651L3.21513 6.27005L5.7204 6.47195L5.88106 4.47842ZM2.77016 8.14333C3.11001 7.33109 3.55421 6.57281 4.08628 5.88533L2.50464 4.66123C1.86671 5.48549 1.33345 6.39551 0.925149 7.37137L2.77016 8.14333ZM1.02988 8.33288L2.45664 10.3602L4.09221 9.20914L2.66544 7.18182L1.02988 8.33288ZM2.305 9.5393C2.10549 10.3275 1.99975 11.1521 1.99975 11.9999H3.99975C3.99975 11.3189 4.08462 10.6592 4.24385 10.03L2.305 9.5393ZM1.99975 11.9999C1.99975 12.848 2.10553 13.6727 2.30511 14.4611L4.24395 13.9702C4.08465 13.341 3.99975 12.6811 3.99975 11.9999H1.99975ZM2.45675 13.6401L1.02999 15.6674L2.66556 16.8185L4.09231 14.7912L2.45675 13.6401ZM4.08658 18.1151C3.55443 17.4275 3.11016 16.6692 2.77027 15.8569L0.92528 16.6289C1.33364 17.6049 1.86698 18.5149 2.505 19.3392L4.08658 18.1151ZM3.37612 19.7239L5.88161 19.522L5.72095 17.5285L3.21546 17.7304L3.37612 19.7239ZM5.11245 19.2501C6.30801 20.3862 7.78575 21.2306 9.43123 21.6667L9.9437 19.7335C8.63037 19.3854 7.44829 18.7108 6.49011 17.8003L5.11245 19.2501ZM8.7863 21.1336L9.85939 23.3645L11.6617 22.4975L10.5886 20.2667L8.7863 21.1336ZM11.9996 22C11.618 22 11.2418 21.9787 10.872 21.9372L10.6491 23.9248C11.0928 23.9745 11.5434 24 11.9996 24V22ZM13.5889 21.8746C13.0719 21.9571 12.5411 22 11.9996 22V24C12.6471 24 13.2832 23.9486 13.904 23.8496L13.5889 21.8746ZM14.6476 23.2955L15.7676 20.9672L13.9653 20.1003L12.8453 22.4286L14.6476 23.2955ZM15.1847 21.4818C16.6017 21.006 17.8758 20.2222 18.928 19.211L17.5422 17.7689C16.6989 18.5793 15.6794 19.2059 14.5481 19.5858L15.1847 21.4818ZM18.1548 19.4867L20.6509 19.6879L20.8116 17.6944L18.3154 17.4932L18.1548 19.4867ZM21.3837 15.4641C21.0335 16.4123 20.5434 17.2934 19.938 18.0823L21.5246 19.3C22.2505 18.3541 22.839 17.2965 23.2598 16.1569L21.3837 15.4641ZM23.1395 15.235L21.6566 13.1278L20.021 14.2788L21.504 16.386L23.1395 15.235ZM21.8209 13.8915C21.9384 13.2782 21.9997 12.6458 21.9997 11.9999H19.9997C19.9997 12.5188 19.9505 13.0253 19.8566 13.5152L21.8209 13.8915ZM21.9997 11.9999C21.9997 11.3543 21.9384 10.722 21.821 10.1089L19.8567 10.4851C19.9505 10.9749 19.9997 11.4812 19.9997 11.9999H21.9997ZM21.6566 10.8726L23.1396 8.76533L21.5041 7.61427L20.0211 9.72149L21.6566 10.8726ZM19.9383 5.91808C20.5436 6.70692 21.0337 7.58801 21.3838 8.53619L23.26 7.84341C22.8392 6.7039 22.2507 5.64631 21.5249 4.7005L19.9383 5.91808ZM20.6513 4.31252L18.1553 4.51367L18.316 6.50721L20.8119 6.30606L20.6513 4.31252ZM18.9286 4.78947C17.8762 3.77793 16.6018 2.99388 15.1844 2.51801L14.5478 4.41401C15.6794 4.79394 16.6992 5.42071 17.5427 6.23141L18.9286 4.78947ZM15.7673 3.03253L14.6474 0.704412L12.8451 1.57137L13.9649 3.89949L15.7673 3.03253Z" fill="black" />
      <circle cx={12} cy={12} r={3} stroke="black" strokeWidth={2} />
    </svg>
  </>}
  {(icon == "add") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "minus") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={14} height={2} viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2H0V0H6H8H14V2H8H6Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "expand_more") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.00002 7.03844L0.346191 1.38464L1.40002 0.330811L6.00002 4.93081L10.6 0.330811L11.6538 1.38464L6.00002 7.03844Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "map pin") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "map expand") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 19.6538L0.346191 10L10 0.346191L11.4192 1.76539L3.18462 10L11.4192 18.2346L10 19.6538Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "map") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.4616L5.99998 15.3616L1.69615 17.027C1.40128 17.1411 1.12821 17.1084 0.876925 16.9289C0.625642 16.7494 0.5 16.5039 0.5 16.1924V3.07703C0.5 2.87959 0.552892 2.70235 0.658675 2.5453C0.764442 2.38825 0.912833 2.27447 1.10385 2.20395L5.99998 0.538574L12 2.63857L16.3038 0.9732C16.5987 0.8591 16.8717 0.886983 17.123 1.05685C17.3743 1.22672 17.5 1.46422 17.5 1.76935V14.9616C17.5 15.1654 17.4423 15.3443 17.3269 15.4981C17.2115 15.652 17.0551 15.7642 16.8576 15.8347L12 17.4616ZM11.25 15.627V3.927L6.74995 2.35392V14.0539L11.25 15.627ZM12.75 15.627L16 14.5501V2.70007L12.75 3.927V15.627ZM1.99997 15.3001L5.25 14.0539V2.35392L1.99997 3.45007V15.3001Z" fill="#1C1B1F" />
      </svg>
    </div>
  </>}
  {(icon == "accordion open") && <>
    <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8.60049L12 16.5715L4 8.60049L5.17607 7.42868L12 14.2279L18.8239 7.42868L20 8.60049Z" fill="#1B1B1B" />
    </svg>
  </>}
  {(icon == "accordion close") && <>
    <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15.3995L12 7.42847L20 15.3995L18.8239 16.5713L12 9.77212L5.17607 16.5713L4 15.3995Z" fill="#1B1B1B" />
    </svg>
  </>}
  {(icon == "download") && <>
    <div className="interactiveIcons w-[26px] h-[26px] relative opacity-100 p-0">
      <div className="boundingBox absolute w-[26px] h-[26px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99997 13.1041L4.37503 8.47919L5.51668 7.30421L8.1875 9.97503V0.875H9.81244V9.97503L12.4833 7.30421L13.6249 8.47919L8.99997 13.1041ZM2.83334 17.1249C2.28611 17.1249 1.82292 16.9354 1.44375 16.5562C1.06458 16.177 0.875 15.7138 0.875 15.1666V12.2291H2.49997V15.1666C2.49997 15.2499 2.53469 15.3264 2.60413 15.3958C2.67359 15.4653 2.75 15.5 2.83334 15.5H15.1666C15.2499 15.5 15.3263 15.4653 15.3958 15.3958C15.4653 15.3264 15.5 15.2499 15.5 15.1666V12.2291H17.1249V15.1666C17.1249 15.7138 16.9354 16.177 16.5562 16.5562C16.177 16.9354 15.7138 17.1249 15.1666 17.1249H2.83334Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "mail") && <>
    <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
      <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
      <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.99998 8.55763L1.99998 3.44225V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H17.6923C17.782 14 17.8557 13.9711 17.9134 13.9134C17.9711 13.8557 18 13.782 18 13.6923V3.44225L9.99998 8.55763ZM9.99998 6.99998L17.8461 1.99998H2.15383L9.99998 6.99998ZM1.99998 3.44225V1.99998V13.6923C1.99998 13.782 2.02883 13.8557 2.08653 13.9134C2.14423 13.9711 2.21795 14 2.3077 14H1.99998V3.44225Z" fill="#212121" />
      </svg>
    </div>
  </>}
  {(icon == "share") && <>
    <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4071 16.7063L9.7606 14.7314C9.28452 15.2368 8.66636 15.5883 7.98645 15.7403C7.30655 15.8923 6.59633 15.8376 5.94811 15.5835C5.29989 15.3293 4.74363 14.8874 4.35163 14.3152C3.95962 13.743 3.75 13.0669 3.75 12.3748C3.75 11.6827 3.95962 11.0066 4.35163 10.4344C4.74363 9.86218 5.29989 9.42028 5.94811 9.16614C6.59633 8.91199 7.30655 8.85735 7.98645 9.00931C8.66636 9.16127 9.28452 9.51281 9.7606 10.0182L13.408 8.0433C13.2012 7.22915 13.3006 6.36805 13.6874 5.62143C14.0742 4.87481 14.722 4.29392 15.5092 3.98766C16.2965 3.6814 17.1692 3.67079 17.9638 3.95783C18.7583 4.24486 19.4202 4.80983 19.8253 5.54682C20.2304 6.28382 20.3509 7.14224 20.1643 7.96118C19.9777 8.78012 19.4967 9.50334 18.8115 9.99528C18.1263 10.4872 17.2839 10.7141 16.4423 10.6334C15.6008 10.5527 14.8177 10.1699 14.24 9.55685L10.5926 11.5318C10.7325 12.0849 10.7325 12.6638 10.5926 13.217L14.24 15.1919C14.818 14.5791 15.6012 14.1968 16.4428 14.1165C17.2844 14.0362 18.1267 14.2634 18.8116 14.7557C19.4965 15.2479 19.9772 15.9713 20.1635 16.7903C20.3497 17.6094 20.2288 18.4677 19.8234 19.2045C19.418 19.9413 18.7559 20.506 17.9612 20.7927C17.1665 21.0794 16.2938 21.0684 15.5067 20.7618C14.7196 20.4553 14.0721 19.8741 13.6856 19.1274C13.2991 18.3806 13.2001 17.5195 13.4071 16.7054V16.7063ZM7.22391 14.0992C7.68455 14.0992 8.12633 13.9175 8.45206 13.594C8.77778 13.2705 8.96077 12.8318 8.96077 12.3744C8.96077 11.9169 8.77778 11.4782 8.45206 11.1547C8.12633 10.8313 7.68455 10.6495 7.22391 10.6495C6.76326 10.6495 6.32148 10.8313 5.99576 11.1547C5.67003 11.4782 5.48704 11.9169 5.48704 12.3744C5.48704 12.8318 5.67003 13.2705 5.99576 13.594C6.32148 13.9175 6.76326 14.0992 7.22391 14.0992ZM16.7767 8.92469C17.2373 8.92469 17.6791 8.74297 18.0048 8.4195C18.3305 8.09603 18.5135 7.65731 18.5135 7.19985C18.5135 6.7424 18.3305 6.30368 18.0048 5.98021C17.6791 5.65674 17.2373 5.47502 16.7767 5.47502C16.316 5.47502 15.8742 5.65674 15.5485 5.98021C15.2228 6.30368 15.0398 6.7424 15.0398 7.19985C15.0398 7.65731 15.2228 8.09603 15.5485 8.4195C15.8742 8.74297 16.316 8.92469 16.7767 8.92469ZM16.7767 19.2737C17.2373 19.2737 17.6791 19.092 18.0048 18.7685C18.3305 18.4451 18.5135 18.0063 18.5135 17.5489C18.5135 17.0914 18.3305 16.6527 18.0048 16.3292C17.6791 16.0058 17.2373 15.824 16.7767 15.824C16.316 15.824 15.8742 16.0058 15.5485 16.3292C15.2228 16.6527 15.0398 17.0914 15.0398 17.5489C15.0398 18.0063 15.2228 18.4451 15.5485 18.7685C15.8742 19.092 16.316 19.2737 16.7767 19.2737Z" fill="#212121" />
    </svg>
  </>}
  {(icon == "print") && <>
    <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.10326 3.75H18.1467V7.875H21V16.95H17.3315V20.25H5.91848V16.95H2.25V7.875H5.10326V3.75ZM6.7337 7.875H16.5163V5.4H6.7337V7.875ZM3.88043 9.525V15.3H5.91848V13.65H17.3315V15.3H19.3696V9.525H3.88043ZM15.7011 15.3H7.54891V18.6H15.7011V15.3ZM15.7011 10.7592H17.3348V12.4125H15.7011V10.7592Z" fill="#212121" />
    </svg>
  </>}
</>
  );
}