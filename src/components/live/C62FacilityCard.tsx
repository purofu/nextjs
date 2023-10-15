import React from 'react';

export function C62FacilityCard(props){
	const {
    size = "XL",
    type = "side",
    state = "closed"
  } = props;
  return (
      <>
  {(size == "XL" && type == "side" && state == "closed") && <>
    <div className="c62FacilityCard gap-6 absolute flex-col w-[400px] items-start rounded bg-white opacity-100 px-5 py-[18px] left-[85px] top-[73px] flex">
      <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
        <span className="hospitalParisSaintJoseph font-['Volta_Modern_Display'] text-[19px] font-semibold text-black text-left tracking-[0px] w-[311.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
        <div className="frame482954 gap-1 flex-col items-start opacity-100 pt-1.5 pb-0 px-0 flex">
          <div className="frame482934 gap-1 flex-row items-center opacity-100 p-0 flex">
            <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={10} height={13} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 6.5C5.55937 6.5 5.82422 6.38984 6.04453 6.16953C6.26484 5.94922 6.375 5.68437 6.375 5.375C6.375 5.06563 6.26484 4.80078 6.04453 4.58047C5.82422 4.36016 5.55937 4.25 5.25 4.25C4.94063 4.25 4.67578 4.36016 4.45547 4.58047C4.23516 4.80078 4.125 5.06563 4.125 5.375C4.125 5.68437 4.23516 5.94922 4.45547 6.16953C4.67578 6.38984 4.94063 6.5 5.25 6.5ZM5.25 10.6344C6.39375 9.58438 7.24219 8.63047 7.79531 7.77266C8.34844 6.91484 8.625 6.15312 8.625 5.4875C8.625 4.46562 8.29922 3.62891 7.64766 2.97734C6.99609 2.32578 6.19688 2 5.25 2C4.30312 2 3.50391 2.32578 2.85234 2.97734C2.20078 3.62891 1.875 4.46562 1.875 5.4875C1.875 6.15312 2.15156 6.91484 2.70469 7.77266C3.25781 8.63047 4.10625 9.58438 5.25 10.6344ZM5.25 12.125C3.74062 10.8406 2.61328 9.64766 1.86797 8.54609C1.12266 7.44453 0.75 6.425 0.75 5.4875C0.75 4.08125 1.20234 2.96094 2.10703 2.12656C3.01172 1.29219 4.05938 0.875 5.25 0.875C6.44062 0.875 7.48828 1.29219 8.39297 2.12656C9.29766 2.96094 9.75 4.08125 9.75 5.4875C9.75 6.425 9.37734 7.44453 8.63203 8.54609C7.88672 9.64766 6.75938 10.8406 5.25 12.125Z" fill="#1C1B1F" />
              </svg>
            </div>
            <span className="8Km font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-right tracking-[0px]">8 km</span>
          </div>
        </div>
      </div>
      <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="services font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
        <div className="tags gap-3 flex-row w-[360px] h-6 items-center opacity-100 p-0 flex">
          <span className="imaging font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
          <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
          <span className="therapies font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
        </div>
        <div className="breaker w-[359px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <div className="frame482974 gap-3 flex-col items-start opacity-100 p-0 flex">
        <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
        <div className="frame482929 gap-0 flex-col items-start opacity-100 p-0 flex">
          <div className="tags gap-2.5 flex-row flex-wrap w-[360px] items-center opacity-100 p-0 flex">
            <span className="lutathera font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
            <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="locametz font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
            <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="pluvicto font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
            <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="lutathera font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
            <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="locametz font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
            <span className="pluvicto font-['Volta_Modern_Display'] text-[15px] font-medium text-[#273e54] text-left tracking-[0px]">Pluvicto™</span>
          </div>
        </div>
        <div className="rectangle5687 w-[359px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="frame483006 gap-1 flex-col items-start opacity-100 pt-4 pb-0 px-0 flex">
          <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
            <span className="contactInformation font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Contact &amp; Information</span>
            <div className="frame483007 gap-1 flex-row items-center opacity-100 pt-0.5 pb-0 px-0 flex">
              <div className="interactiveIcons w-7 h-7 relative opacity-100 p-0">
                <div className="boundingBox absolute w-7 h-7 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00238 8.54431L0.40625 1.94821L1.63571 0.71875L7.00238 6.08542L12.369 0.71875L13.5985 1.94821L7.00238 8.54431Z" fill="#1C1B1F" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && type == "side" && state == "closed") && <>
    <div className="c62FacilityCard gap-4 absolute flex-col w-[308px] items-start rounded bg-white opacity-100 px-5 py-[18px] left-[1137px] top-[70px] flex">
      <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
        <span className="hospitalParisSaintJoseph font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[219.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
        <div className="frame482954 gap-1 flex-col items-start opacity-100 pt-1.5 pb-0 px-0 flex">
          <div className="frame482934 gap-1 flex-row items-center opacity-100 p-0 flex">
            <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={10} height={13} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 6.5C5.55937 6.5 5.82422 6.38984 6.04453 6.16953C6.26484 5.94922 6.375 5.68437 6.375 5.375C6.375 5.06563 6.26484 4.80078 6.04453 4.58047C5.82422 4.36016 5.55937 4.25 5.25 4.25C4.94063 4.25 4.67578 4.36016 4.45547 4.58047C4.23516 4.80078 4.125 5.06563 4.125 5.375C4.125 5.68437 4.23516 5.94922 4.45547 6.16953C4.67578 6.38984 4.94063 6.5 5.25 6.5ZM5.25 10.6344C6.39375 9.58438 7.24219 8.63047 7.79531 7.77266C8.34844 6.91484 8.625 6.15312 8.625 5.4875C8.625 4.46562 8.29922 3.62891 7.64766 2.97734C6.99609 2.32578 6.19688 2 5.25 2C4.30312 2 3.50391 2.32578 2.85234 2.97734C2.20078 3.62891 1.875 4.46562 1.875 5.4875C1.875 6.15312 2.15156 6.91484 2.70469 7.77266C3.25781 8.63047 4.10625 9.58438 5.25 10.6344ZM5.25 12.125C3.74062 10.8406 2.61328 9.64766 1.86797 8.54609C1.12266 7.44453 0.75 6.425 0.75 5.4875C0.75 4.08125 1.20234 2.96094 2.10703 2.12656C3.01172 1.29219 4.05938 0.875 5.25 0.875C6.44062 0.875 7.48828 1.29219 8.39297 2.12656C9.29766 2.96094 9.75 4.08125 9.75 5.4875C9.75 6.425 9.37734 7.44453 8.63203 8.54609C7.88672 9.64766 6.75938 10.8406 5.25 12.125Z" fill="#1C1B1F" />
              </svg>
            </div>
            <span className="8Km font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-right tracking-[0px]">8 km</span>
          </div>
        </div>
      </div>
      <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="services font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-full">Services</span>
        <div className="tags gap-3 flex-row w-[269px] h-6 items-center opacity-100 p-0 flex">
          <span className="imaging font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
          <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
          <span className="therapies font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
        </div>
        <div className="breaker w-[269px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <div className="frame482974 gap-3 flex-col w-[269px] items-start opacity-100 p-0 flex">
        <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
        <div className="frame482929 gap-0 flex-col w-[269px] items-start opacity-100 p-0 flex">
          <div className="tags gap-2.5 flex-row flex-wrap w-[269px] items-center opacity-100 p-0 flex">
            <span className="lutathera font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
            <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="locametz font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
            <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="pluvicto font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
            <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="lutathera font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
            <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="locametz font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
            <span className="pluvicto font-['Volta_Modern_Display'] text-sm font-medium text-[#273e54] text-left tracking-[0px]">Pluvicto™</span>
          </div>
        </div>
        <div className="rectangle5687 w-[269px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="frame483006 gap-1 flex-col items-start opacity-100 pt-4 pb-0 px-0 flex">
          <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
            <span className="contactInformation font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px]">Contact &amp; Information</span>
            <div className="frame483007 gap-1 flex-row items-center opacity-100 p-0 flex">
              <div className="interactiveIcons w-7 h-7 relative opacity-100 p-0">
                <div className="boundingBox absolute w-7 h-7 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00238 8.54431L0.40625 1.94821L1.63571 0.71875L7.00238 6.08542L12.369 0.71875L13.5985 1.94821L7.00238 8.54431Z" fill="#1C1B1F" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "XL" && type == "side" && state == "open") && <>
    <div className="c62FacilityCard gap-4 absolute flex-col w-[400px] items-start rounded bg-white opacity-100 pt-[18px] pb-6 px-5 left-[84px] top-[451px] flex">
      <div className="frame482952 gap-[17px] flex-row items-start w-full opacity-100 p-0 flex">
        <span className="hospitalParisSaintJoseph font-['Volta_Modern_Display'] text-[19px] font-semibold text-black text-left tracking-[0px] w-[294.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
        <div className="frame482954 gap-1 flex-col items-start opacity-100 pt-1.5 pb-0 px-0 flex">
          <div className="frame482934 gap-1 flex-row items-start opacity-100 p-0 flex">
            <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 5.75C5.55937 5.75 5.82422 5.63984 6.04453 5.41953C6.26484 5.19922 6.375 4.93437 6.375 4.625C6.375 4.31563 6.26484 4.05078 6.04453 3.83047C5.82422 3.61016 5.55937 3.5 5.25 3.5C4.94063 3.5 4.67578 3.61016 4.45547 3.83047C4.23516 4.05078 4.125 4.31563 4.125 4.625C4.125 4.93437 4.23516 5.19922 4.45547 5.41953C4.67578 5.63984 4.94063 5.75 5.25 5.75ZM5.25 9.88438C6.39375 8.83438 7.24219 7.88047 7.79531 7.02266C8.34844 6.16484 8.625 5.40312 8.625 4.7375C8.625 3.71562 8.29922 2.87891 7.64766 2.22734C6.99609 1.57578 6.19688 1.25 5.25 1.25C4.30312 1.25 3.50391 1.57578 2.85234 2.22734C2.20078 2.87891 1.875 3.71562 1.875 4.7375C1.875 5.40312 2.15156 6.16484 2.70469 7.02266C3.25781 7.88047 4.10625 8.83438 5.25 9.88438ZM5.25 11.375C3.74062 10.0906 2.61328 8.89766 1.86797 7.79609C1.12266 6.69453 0.75 5.675 0.75 4.7375C0.75 3.33125 1.20234 2.21094 2.10703 1.37656C3.01172 0.542188 4.05938 0.125 5.25 0.125C6.44062 0.125 7.48828 0.542188 8.39297 1.37656C9.29766 2.21094 9.75 3.33125 9.75 4.7375C9.75 5.675 9.37734 6.69453 8.63203 7.79609C7.88672 8.89766 6.75938 10.0906 5.25 11.375Z" fill="#1C1B1F" />
              </svg>
            </div>
            <span className="8Km font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-right tracking-[0px]">8 km</span>
          </div>
        </div>
      </div>
      <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="services font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
        <div className="tags gap-3 flex-row w-[360px] h-6 items-center opacity-100 p-0 flex">
          <span className="imaging font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
          <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
          <span className="therapies font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
        </div>
        <div className="rectangle5687 w-[359px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <div className="frame482975 gap-3 flex-col items-start opacity-100 p-0 flex">
        <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
        <div className="frame482929 gap-0 flex-col items-start opacity-100 p-0 flex">
          <div className="frame482929 gap-0 flex-col items-start opacity-100 p-0 flex">
            <div className="tags gap-2.5 flex-row flex-wrap w-[360px] items-center opacity-100 p-0 flex">
              <span className="lutathera font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="pluvicto font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
              <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="lutathera font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <span className="pluvicto font-['Volta_Modern_Display'] text-[15px] font-medium text-[#273e54] text-left tracking-[0px]">Pluvicto™</span>
            </div>
          </div>
        </div>
        <svg width={360} height={2} viewBox="0 0 360 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H360" stroke="#BDBDBD" />
        </svg>
        <div className="frame483006 gap-1 flex-col items-start opacity-100 pt-4 pb-0 px-0 flex">
          <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
            <span className="contactInformation font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Contact &amp; Information</span>
            <div className="frame483007 gap-1 flex-row items-center opacity-100 p-0 flex">
              <div className="interactiveIcons w-7 h-7 relative opacity-100 p-0">
                <div className="boundingBox absolute w-7 h-7 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99762 0.455688L13.5938 7.05179L12.3643 8.28125L6.99762 2.91458L1.63095 8.28125L0.401491 7.05179L6.99762 0.455688Z" fill="#1C1B1F" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame482972 gap-4 flex-col items-end opacity-100 p-0 flex">
        <div className="frame482971 gap-5 flex-row items-start opacity-100 p-0 flex">
          <div className="group3083 w-[170px] h-[151px] relative p-0">
            <span className="showOnGoogleMaps font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[170px]">Show on Google Maps</span>
            <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[170px]">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
            <span className="address font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[139px]">Address</span>
          </div>
          <div className="group3084 w-[170px] h-[130px] relative p-0">
            <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[170px]">Department of Nuclear Medicine</span>
            <span className="contactDetails font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[170px]">Contact Details</span>
            <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[170px]">Nucmed@ucl.hc.uk<br />021 221 324</span>
          </div>
        </div>
        <div className="rectangle5686 w-[360px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="group3075 w-[360px] h-[79px] relative p-0">
          <span className="thingsToKnow font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[360px]">Things to know</span>
          <div className="bullet gap-2 flex-row w-[170px] items-center opacity-100 p-0 flex">
            <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy="2.5" r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[170px] items-center opacity-100 p-0 flex">
            <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy="2.5" r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[170px] items-center opacity-100 p-0 flex">
            <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy="2.5" r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[170px] items-center opacity-100 p-0 flex">
            <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy="2.5" r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
        </div>
        <div className="rectangle5687 w-[359px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="frame482970 gap-2 flex-col items-start opacity-100 p-0 flex">
          <div className="group3076 w-[360px] h-[21px] relative p-0">
            <span className="information font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[360px]">Information</span>
          </div>
          <span className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQ font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[360px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q</span>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=M, Type\=side, State\=open">
    <div className="c62FacilityCard gap-4 absolute flex-col w-[308px] items-start rounded bg-white opacity-100 pt-[18px] pb-6 px-5 left-[1136px] top-[422px] flex">
      <div className="frame482952 gap-[17px] flex-row items-start w-full opacity-100 p-0 flex">
        <span className="hospitalParisSaintJoseph font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[202.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
        <div className="frame482954 gap-1 flex-col items-start opacity-100 pt-1.5 pb-0 px-0 flex">
          <div className="frame482934 gap-1 flex-row items-start opacity-100 p-0 flex">
            <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 5.75C5.55937 5.75 5.82422 5.63984 6.04453 5.41953C6.26484 5.19922 6.375 4.93437 6.375 4.625C6.375 4.31563 6.26484 4.05078 6.04453 3.83047C5.82422 3.61016 5.55937 3.5 5.25 3.5C4.94063 3.5 4.67578 3.61016 4.45547 3.83047C4.23516 4.05078 4.125 4.31563 4.125 4.625C4.125 4.93437 4.23516 5.19922 4.45547 5.41953C4.67578 5.63984 4.94063 5.75 5.25 5.75ZM5.25 9.88438C6.39375 8.83438 7.24219 7.88047 7.79531 7.02266C8.34844 6.16484 8.625 5.40312 8.625 4.7375C8.625 3.71562 8.29922 2.87891 7.64766 2.22734C6.99609 1.57578 6.19688 1.25 5.25 1.25C4.30312 1.25 3.50391 1.57578 2.85234 2.22734C2.20078 2.87891 1.875 3.71562 1.875 4.7375C1.875 5.40312 2.15156 6.16484 2.70469 7.02266C3.25781 7.88047 4.10625 8.83438 5.25 9.88438ZM5.25 11.375C3.74062 10.0906 2.61328 8.89766 1.86797 7.79609C1.12266 6.69453 0.75 5.675 0.75 4.7375C0.75 3.33125 1.20234 2.21094 2.10703 1.37656C3.01172 0.542188 4.05938 0.125 5.25 0.125C6.44062 0.125 7.48828 0.542188 8.39297 1.37656C9.29766 2.21094 9.75 3.33125 9.75 4.7375C9.75 5.675 9.37734 6.69453 8.63203 7.79609C7.88672 8.89766 6.75938 10.0906 5.25 11.375Z" fill="#1C1B1F" />
              </svg>
            </div>
            <span className="8Km font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-right tracking-[0px]">8 km</span>
          </div>
        </div>
      </div>
      <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="services font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
        <div className="tags gap-3 flex-row w-[269px] h-6 items-center opacity-100 p-0 flex">
          <span className="imaging font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
          <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
          <span className="therapies font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
        </div>
        <div className="rectangle5687 w-[269px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <div className="frame482975 gap-3 flex-col w-[269px] items-start opacity-100 p-0 flex">
        <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
        <div className="frame482929 gap-0 flex-col w-[269px] items-start opacity-100 p-0 flex">
          <div className="frame482929 gap-0 flex-col w-[269px] items-start opacity-100 p-0 flex">
            <div className="tags gap-2.5 flex-row flex-wrap w-[269px] items-center opacity-100 p-0 flex">
              <span className="lutathera font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="pluvicto font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
              <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="lutathera font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <span className="pluvicto font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
            </div>
          </div>
        </div>
        <svg width={269} height={2} viewBox="0 0 269 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H269" stroke="#BDBDBD" />
        </svg>
        <div className="frame483006 gap-1 flex-col items-start opacity-100 pt-4 pb-0 px-0 flex">
          <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
            <span className="contactInformation font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px]">Contact &amp; Information</span>
            <div className="frame483007 gap-1 flex-row items-center opacity-100 p-0 flex">
              <div className="interactiveIcons w-7 h-7 relative opacity-100 p-0">
                <div className="boundingBox absolute w-7 h-7 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99762 0.455688L13.5938 7.05179L12.3643 8.28125L6.99762 2.91458L1.63095 8.28125L0.401491 7.05179L6.99762 0.455688Z" fill="#1C1B1F" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame482972 gap-4 flex-col w-[269px] items-start opacity-100 p-0 flex">
        <div className="frame482971 gap-5 flex-row w-[268px] items-start opacity-100 p-0 flex">
          <div className="frame3083 gap-[18px] flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="address font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-full">Address</span>
            <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-full">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
            <span className="showOnGoogleMaps font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#0460a9] text-left tracking-[0px] w-full">Show on  Google Maps</span>
          </div>
          <div className="frame3084 gap-[18px] flex-col h-full items-start w-[123px] opacity-100 p-0 flex">
            <span className="contactDetails font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-full">Contact Details</span>
            <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-full">Department of Nuclear Medicine</span>
            <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#0460a9] text-left tracking-[0px] w-[123px] h-[72px] flex-1 min-h-0">Nucmed@ucl.hc.uk<br />021 221 324</span>
          </div>
        </div>
        <div className="rectangle5686 w-[269px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="group3075 w-[269px] h-[75px] relative p-0">
          <span className="thingsToKnow font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[269px]">Things to know</span>
          <div className="bullet gap-2 flex-row w-[125px] items-center opacity-100 p-0 flex">
            <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy={2} r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[125px] items-center opacity-100 p-0 flex">
            <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy={2} r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[124px] items-center opacity-100 p-0 flex">
            <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy={2} r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[124px] items-center opacity-100 p-0 flex">
            <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy={2} r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
        </div>
        <div className="rectangle5687 w-[269px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="frame482970 gap-2 flex-col w-[269px] items-start opacity-100 p-0 flex">
          <div className="group3076 w-[269px] h-[18px] relative p-0">
            <span className="information font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[269px]">Information</span>
          </div>
          <span className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQ font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-[269px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q</span>
        </div>
      </div>
    </div>
  </variant>
  {(size == "XL" && type == "XL" && state == "popup") && <>
    <div className="c62FacilityCard gap-[-17px] absolute flex-col items-center opacity-100 p-0 left-[559px] top-[68px] flex">
      <div className="concept5 gap-6 flex-col w-[400px] items-start rounded bg-white opacity-100 pt-[18px] pb-[22px] px-5 flex">
        <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
          <span className="hospitalParisSaintJoseph font-['Volta_Modern_Display'] text-[19px] font-semibold text-black text-left tracking-[0px] w-[360px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
          <div className="frame482954 gap-1 flex-col items-start opacity-100 pt-1.5 pb-0 px-0 !hidden flex">
            <div className="frame482934 gap-1 flex-row items-center opacity-100 p-0 flex">
              <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
                <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              </div>
              <span className="8Km font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-right tracking-[0px]">8 km</span>
            </div>
          </div>
        </div>
        <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="services font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
          <div className="tags gap-3 flex-row w-[360px] h-6 items-center opacity-100 p-0 flex">
            <span className="imaging font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
            <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="therapies font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
          </div>
          <div className="breaker w-[359px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="frame482974 gap-3 flex-col items-start opacity-100 p-0 flex">
          <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-[15px] font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
          <div className="frame482929 gap-0 flex-col items-start opacity-100 p-0 flex">
            <div className="tags gap-2.5 flex-row flex-wrap w-[360px] items-center opacity-100 p-0 flex">
              <span className="lutathera font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="pluvicto font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
              <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="lutathera font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <span className="pluvicto font-['Volta_Modern_Display'] text-[15px] font-medium text-[#273e54] text-left tracking-[0px]">Pluvicto™</span>
            </div>
          </div>
          <div className="rectangle5687 w-[359px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="frame482971 gap-5 flex-row items-start opacity-100 p-0 flex">
          <div className="group3083 w-[170px] h-[151px] relative p-0">
            <span className="showOnGoogleMaps font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[170px]">Show on Google Maps</span>
            <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[170px]">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
            <span className="address font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[139px]">Address</span>
          </div>
          <div className="group3084 w-[170px] h-[130px] relative p-0">
            <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[170px]">Department of Nuclear Medicine</span>
            <span className="contactDetails font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[170px]">Contact Details</span>
            <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[170px]">Nucmed@ucl.hc.uk<br />021 221 324</span>
          </div>
        </div>
      </div>
      <div className="rectangle5713 w-[3px] h-[180px] absolute bg-[#c6ced7] opacity-100 p-0 rounded-[900px] left-[389px] top-3.5" />
      <div className="rectangle5712 w-[33.94px] h-[33.94px] relative bg-white opacity-100 p-0" />
    </div>
  </>}
  <variant match="Size\=M, Type\=popup, State\=top">
    <div className="c62FacilityCard gap-[-17px] absolute flex-col w-[308px] items-center opacity-100 p-0 left-[1509px] top-[70px] flex">
      <div className="concept5 gap-6 flex-col w-[309px] items-start rounded bg-white opacity-100 pt-[18px] pb-[22px] px-5 flex">
        <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
          <span className="hospitalParisSaintJoseph font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[269px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
          <div className="frame482954 gap-1 flex-col items-start opacity-100 pt-1.5 pb-0 px-0 !hidden flex">
            <div className="frame482934 gap-1 flex-row items-center opacity-100 p-0 flex">
              <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
                <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              </div>
              <span className="8Km font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-right tracking-[0px]">8 km</span>
            </div>
          </div>
        </div>
        <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="services font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
          <div className="tags gap-3 flex-row w-[269px] h-6 items-center opacity-100 p-0 flex">
            <span className="imaging font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
            <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="therapies font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
          </div>
          <div className="breaker w-[269px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="frame482974 gap-3 flex-col items-start opacity-100 p-0 flex">
          <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
          <div className="frame482929 gap-0 flex-col w-[269px] items-start opacity-100 p-0 flex">
            <div className="tags gap-2.5 flex-row flex-wrap w-[269px] items-center opacity-100 p-0 flex">
              <span className="lutathera font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="pluvicto font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
              <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="lutathera font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <span className="pluvicto font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
            </div>
          </div>
          <div className="rectangle5687 w-[269px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="frame482971 gap-5 flex-row w-[269px] items-start opacity-100 p-0 flex">
          <div className="frame3083 gap-[18px] flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="address font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-full">Address</span>
            <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-full">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
            <span className="showOnGoogleMaps font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-full">Show on  Google Maps</span>
          </div>
          <div className="group3084 w-[124px] h-[151px] relative p-0">
            <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-sm font-medium text-[#0d2741] text-left tracking-[0px] w-[124px]">Department of Nuclear Medicine</span>
            <span className="contactDetails font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[124px]">Contact Details</span>
            <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[124px]">Nucmed@ucl.hc.uk<br />021 221 324</span>
          </div>
        </div>
        <div className="rectangle5713 w-[3px] h-[180px] absolute bg-[#c6ced7] opacity-100 p-0 rounded-[900px] left-[298px] top-3.5" />
      </div>
      <div className="rectangle5712 w-[33.94px] h-[33.94px] relative bg-white opacity-100 p-0" />
    </div>
  </variant>
  {(size == "XL" && type == "popup" && state == "bottom") && <>
    <div className="c62FacilityCard gap-[-17px] absolute flex-col items-center opacity-100 p-0 left-[549px] top-[567px] flex">
      <div className="concept5 gap-6 flex-col w-[400px] items-start rounded bg-white opacity-100 pt-[18px] pb-[22px] px-5 flex">
        <div className="rectangle5713 w-[3px] h-[180px] absolute bg-[#c6ced7] opacity-100 p-0 rounded-[900px] left-[389px] top-[236px]" />
        <div className="frame482972 gap-4 flex-col items-end opacity-100 p-0 flex">
          <div className="frame482971 gap-5 flex-row items-start opacity-100 p-0 flex">
            <div className="group3083 w-[170px] h-[151px] relative p-0">
              <span className="showOnGoogleMaps font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[170px]">Show on Google Maps</span>
              <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[170px]">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
              <span className="address font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[139px]">Address</span>
            </div>
            <div className="group3084 w-[170px] h-[130px] relative p-0">
              <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[170px]">Department of Nuclear Medicine</span>
              <span className="contactDetails font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[170px]">Contact Details</span>
              <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[170px]">Nucmed@ucl.hc.uk<br />021 221 324</span>
            </div>
          </div>
          <div className="rectangle5686 w-[360px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
          <div className="group3075 w-[360px] h-[79px] relative p-0">
            <span className="thingsToKnow font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[360px]">Things to know</span>
            <div className="bullet gap-2 flex-row w-[170px] items-center opacity-100 p-0 flex">
              <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={2} cy="2.5" r={2} fill="#212121" />
              </svg>
              <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[139px]">Point of info</span>
            </div>
            <div className="bullet gap-2 flex-row w-[170px] items-center opacity-100 p-0 flex">
              <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={2} cy="2.5" r={2} fill="#212121" />
              </svg>
              <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[139px]">Point of info</span>
            </div>
            <div className="bullet gap-2 flex-row w-[170px] items-center opacity-100 p-0 flex">
              <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={2} cy="2.5" r={2} fill="#212121" />
              </svg>
              <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[139px]">Point of info</span>
            </div>
            <div className="bullet gap-2 flex-row w-[170px] items-center opacity-100 p-0 flex">
              <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={2} cy="2.5" r={2} fill="#212121" />
              </svg>
              <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[139px]">Point of info</span>
            </div>
          </div>
          <div className="rectangle5687 w-[359px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482970 gap-2 flex-col items-start opacity-100 p-0 flex">
            <div className="group3076 w-[360px] h-[21px] relative p-0">
              <span className="information font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[360px]">Information</span>
            </div>
            <span className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQ font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[360px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q</span>
          </div>
        </div>
      </div>
      <div className="rectangle5712 w-[33.94px] h-[33.94px] relative bg-white opacity-100 p-0" />
    </div>
  </>}
  <variant match="Size\=M, Type\=popup, State\=bottom">
    <div className="c62FacilityCard gap-[-17px] absolute flex-col w-[308px] items-center opacity-100 p-0 left-[1510px] top-[557px] flex">
      <div className="concept5 gap-6 flex-col w-[308px] items-start rounded bg-white opacity-100 pt-[18px] pb-[22px] px-5 flex">
        <div className="rectangle5713 w-[3px] h-[180px] absolute bg-[#c6ced7] opacity-100 p-0 rounded-[900px] left-[297px] top-[236px]" />
        <div className="frame482972 gap-4 flex-col w-[268px] items-start opacity-100 p-0 flex">
          <div className="frame482971 gap-5 flex-row items-start opacity-100 p-0 flex">
            <div className="group3083 w-[123.5px] h-40 relative p-0">
              <span className="showOnGoogleMaps font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[123.5px]">Show on  Google Maps</span>
              <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[123.5px]">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
              <span className="address font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[100.98px]">Address</span>
            </div>
            <div className="group3084 w-[124px] h-[151px] relative p-0">
              <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[124px]">Department of Nuclear Medicine</span>
              <span className="contactDetails font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[124px]">Contact Details</span>
              <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-base font-semibold text-[#0460a9] text-left tracking-[0px] w-[124px]">Nucmed@ucl.hc.uk<br />021 221 324</span>
            </div>
          </div>
          <div className="rectangle5686 w-[268px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
          <div className="group3075 w-[268px] h-[120px] relative p-0">
            <span className="thingsToKnow font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[267.13px]">Things to know</span>
            <div className="frame483066 gap-2 flex-col w-[124px] items-start opacity-100 p-0 flex">
              <div className="bullet gap-2 flex-row w-[124px] items-center opacity-100 p-0 flex">
                <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={2} cy="2.5" r={2} fill="#212121" />
                </svg>
                <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-28">Point of info</span>
              </div>
              <div className="bullet gap-2 flex-row w-[124px] items-center opacity-100 p-0 flex">
                <svg width={4} height={5} viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={2} cy="2.5" r={2} fill="#212121" />
                </svg>
                <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-28 flex-1 min-w-0">Point of info</span>
              </div>
            </div>
            <div className="frame483065 gap-2 flex-col w-[124px] items-start opacity-100 p-0 flex">
              <div className="bullet gap-2 flex-row w-[91.27px] items-center opacity-100 p-0 flex">
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={2} cy={2} r={2} fill="#212121" />
                </svg>
                <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[79.27px] flex-1 min-w-0">Point of info</span>
              </div>
              <div className="bullet gap-2 flex-row w-[91.27px] items-center opacity-100 p-0 flex">
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={2} cy={2} r={2} fill="#212121" />
                </svg>
                <span className="pointOfInfo font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[79.27px] flex-1 min-w-0">Point of info</span>
              </div>
            </div>
          </div>
          <div className="rectangle5687 w-[268px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482970 gap-2 flex-col w-[268px] items-start opacity-100 p-0 flex">
            <div className="group3076 w-[267.5px] h-[18px] relative p-0">
              <span className="information font-['Volta_Modern_Display'] text-sm font-semibold text-black text-left tracking-[0px] w-[267.5px]">Information</span>
            </div>
            <span className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQ font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[268px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q</span>
          </div>
        </div>
      </div>
      <div className="rectangle5712 w-[33.94px] h-[33.94px] relative bg-white opacity-100 p-0" />
    </div>
  </variant>
  {(size == "S" && type == "side" && state == "closed") && <>
    <div className="c62FacilityCard gap-6 absolute flex-col w-[343px] items-start rounded bg-white opacity-100 p-5 left-[2082px] top-[70px] flex">
      <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[258.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
        <div className="distance gap-1 flex-row items-center opacity-100 pt-1 pb-0 px-0 flex">
          <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 6C5.55937 6 5.82422 5.88984 6.04453 5.66953C6.26484 5.44922 6.375 5.18437 6.375 4.875C6.375 4.56563 6.26484 4.30078 6.04453 4.08047C5.82422 3.86016 5.55937 3.75 5.25 3.75C4.94063 3.75 4.67578 3.86016 4.45547 4.08047C4.23516 4.30078 4.125 4.56563 4.125 4.875C4.125 5.18437 4.23516 5.44922 4.45547 5.66953C4.67578 5.88984 4.94063 6 5.25 6ZM5.25 10.1344C6.39375 9.08438 7.24219 8.13047 7.79531 7.27266C8.34844 6.41484 8.625 5.65312 8.625 4.9875C8.625 3.96562 8.29922 3.12891 7.64766 2.47734C6.99609 1.82578 6.19688 1.5 5.25 1.5C4.30312 1.5 3.50391 1.82578 2.85234 2.47734C2.20078 3.12891 1.875 3.96562 1.875 4.9875C1.875 5.65312 2.15156 6.41484 2.70469 7.27266C3.25781 8.13047 4.10625 9.08438 5.25 10.1344ZM5.25 11.625C3.74062 10.3406 2.61328 9.14766 1.86797 8.04609C1.12266 6.94453 0.75 5.925 0.75 4.9875C0.75 3.58125 1.20234 2.46094 2.10703 1.62656C3.01172 0.792188 4.05938 0.375 5.25 0.375C6.44062 0.375 7.48828 0.792188 8.39297 1.62656C9.29766 2.46094 9.75 3.58125 9.75 4.9875C9.75 5.925 9.37734 6.94453 8.63203 8.04609C7.88672 9.14766 6.75938 10.3406 5.25 11.625Z" fill="#1C1B1F" />
            </svg>
          </div>
          <span className="8Km font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-right tracking-[0px]">8 km</span>
        </div>
      </div>
      <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="services font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
        <div className="tags gap-3 flex-row h-6 items-center w-full opacity-100 p-0 flex">
          <span className="imaging font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
          <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
          <span className="therapies font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
        </div>
        <div className="breaker w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <div className="frame482974 gap-3 flex-col w-[303px] items-start opacity-100 p-0 flex">
        <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
        <div className="frame482929 gap-0 flex-col w-[303px] items-start opacity-100 p-0 flex">
          <div className="tags gap-2.5 flex-row flex-wrap w-[303px] items-center opacity-100 p-0 flex">
            <span className="lutathera font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
            <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="locametz font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
            <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="pluvicto font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
            <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="lutathera font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
            <span className="locametz font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
            <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="pluvicto font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
          </div>
        </div>
        <div className="rectangle5687 w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="frame483006 gap-1 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
          <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
            <span className="contactInformation font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Contact &amp; Information</span>
            <div className="frame483007 gap-1 flex-row items-center opacity-100 p-0 flex">
              <div className="interactiveIcons w-7 h-7 relative opacity-100 p-0">
                <div className="boundingBox absolute w-7 h-7 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00238 8.54431L0.40625 1.94821L1.63571 0.71875L7.00238 6.08542L12.369 0.71875L13.5985 1.94821L7.00238 8.54431Z" fill="#1C1B1F" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && type == "side" && state == "open") && <>
    <div className="c62FacilityCard gap-6 absolute flex-col w-[343px] items-start rounded bg-white opacity-100 pt-5 pb-6 px-5 left-[2082px] top-[430px] flex">
      <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[258.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
        <div className="distance gap-1 flex-row items-center opacity-100 pt-1 pb-0 px-0 flex">
          <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 6C5.55937 6 5.82422 5.88984 6.04453 5.66953C6.26484 5.44922 6.375 5.18437 6.375 4.875C6.375 4.56563 6.26484 4.30078 6.04453 4.08047C5.82422 3.86016 5.55937 3.75 5.25 3.75C4.94063 3.75 4.67578 3.86016 4.45547 4.08047C4.23516 4.30078 4.125 4.56563 4.125 4.875C4.125 5.18437 4.23516 5.44922 4.45547 5.66953C4.67578 5.88984 4.94063 6 5.25 6ZM5.25 10.1344C6.39375 9.08438 7.24219 8.13047 7.79531 7.27266C8.34844 6.41484 8.625 5.65312 8.625 4.9875C8.625 3.96562 8.29922 3.12891 7.64766 2.47734C6.99609 1.82578 6.19688 1.5 5.25 1.5C4.30312 1.5 3.50391 1.82578 2.85234 2.47734C2.20078 3.12891 1.875 3.96562 1.875 4.9875C1.875 5.65312 2.15156 6.41484 2.70469 7.27266C3.25781 8.13047 4.10625 9.08438 5.25 10.1344ZM5.25 11.625C3.74062 10.3406 2.61328 9.14766 1.86797 8.04609C1.12266 6.94453 0.75 5.925 0.75 4.9875C0.75 3.58125 1.20234 2.46094 2.10703 1.62656C3.01172 0.792188 4.05938 0.375 5.25 0.375C6.44062 0.375 7.48828 0.792188 8.39297 1.62656C9.29766 2.46094 9.75 3.58125 9.75 4.9875C9.75 5.925 9.37734 6.94453 8.63203 8.04609C7.88672 9.14766 6.75938 10.3406 5.25 11.625Z" fill="#1C1B1F" />
            </svg>
          </div>
          <span className="8Km font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-right tracking-[0px]">8 km</span>
        </div>
      </div>
      <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="services font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
        <div className="tags gap-3 flex-row h-6 items-center w-full opacity-100 p-0 flex">
          <span className="imaging font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
          <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
          <span className="therapies font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
        </div>
        <div className="breaker w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
      </div>
      <div className="frame482974 gap-3 flex-col w-[303px] items-start opacity-100 p-0 flex">
        <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
        <div className="frame482929 gap-0 flex-col w-[303px] items-start opacity-100 p-0 flex">
          <div className="tags gap-2.5 flex-row flex-wrap w-[303px] items-center opacity-100 p-0 flex">
            <span className="lutathera font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
            <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="locametz font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
            <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="pluvicto font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
            <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="lutathera font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
            <span className="locametz font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
            <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="pluvicto font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
          </div>
        </div>
        <div className="rectangle5687 w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="frame483006 gap-1 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
          <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
            <span className="contactInformation font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Contact &amp; Information</span>
            <div className="frame483007 gap-1 flex-row items-center opacity-100 p-0 flex">
              <div className="interactiveIcons w-7 h-7 relative opacity-100 p-0">
                <div className="boundingBox absolute w-7 h-7 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99762 0.455688L13.5938 7.05179L12.3643 8.28125L6.99762 2.91458L1.63095 8.28125L0.401491 7.05179L6.99762 0.455688Z" fill="#1C1B1F" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame482972 gap-4 flex-col w-[303px] items-start opacity-100 p-0 flex">
        <div className="frame482971 gap-5 flex-row w-[303px] items-start opacity-100 p-0 flex">
          <div className="group3083 w-[142px] h-[149px] relative p-0">
            <span className="showOnMap font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#0460a9] text-left tracking-[0px] w-[142px]">Show on Map</span>
            <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[118.61px]">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
            <span className="address font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[116.11px]">Address</span>
          </div>
          <div className="group3084 w-[141px] h-[149px] relative p-0">
            <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-[13px] font-medium text-[#212121] text-left tracking-[0px] w-[141px]">Department of Nuclear Medicine</span>
            <span className="contactDetails font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[141px]">Contact Details</span>
            <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#0460a9] text-left tracking-[0px] w-[141px]">Nucmed@ucl.hc.uk<br />021 221 324</span>
          </div>
        </div>
        <div className="rectangle5686 w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="group3075 w-[303px] h-[73px] relative p-0">
          <span className="thingsToKnow font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[303px]">Things to know</span>
          <div className="bullet gap-2 flex-row w-[142px] items-center opacity-100 p-0 flex">
            <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy={2} r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[142px] items-center opacity-100 p-0 flex">
            <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy={2} r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[141px] items-center opacity-100 p-0 flex">
            <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy={2} r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
          <div className="bullet gap-2 flex-row w-[141px] items-center opacity-100 p-0 flex">
            <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={2} cy={2} r={2} fill="#212121" />
            </svg>
            <span className="pointOfInfo font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
          </div>
        </div>
        <div className="rectangle5687 w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        <div className="frame482970 gap-2 flex-col w-[303px] items-start opacity-100 p-0 flex">
          <div className="group3076 w-[303px] h-[18px] relative p-0">
            <span className="information font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[303px]">Information</span>
          </div>
          <span className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQ font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[303px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && type == "popup" && state == "top") && <>
    <div className="c62FacilityCard gap-[-17px] absolute flex-col items-center opacity-100 p-0 left-[2489px] top-[73px] flex">
      <div className="facilities gap-6 flex-col w-[343px] items-start rounded bg-white opacity-100 p-5 flex">
        <div className="title gap-0 flex-row items-center w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[303px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
          <div className="distance gap-1 flex-row items-center opacity-100 p-0 !hidden flex">
            <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            </div>
            <span className="8Km font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-right tracking-[0px]">8 km</span>
          </div>
        </div>
        <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="services font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
          <div className="tags gap-3 flex-row h-6 items-center w-full opacity-100 p-0 flex">
            <span className="imaging font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
            <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
            <span className="therapies font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
          </div>
          <div className="breaker w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="frame482974 gap-3 flex-col w-[303px] items-start opacity-100 p-0 flex">
          <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
          <div className="frame482929 gap-0 flex-col w-[303px] items-start opacity-100 p-0 flex">
            <div className="tags gap-2.5 flex-row flex-wrap w-[303px] items-center opacity-100 p-0 flex">
              <span className="lutathera font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="locametz font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="pluvicto font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
              <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="lutathera font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
              <span className="locametz font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
              <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="pluvicto font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
            </div>
          </div>
          <div className="rectangle5687 w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
        </div>
        <div className="frame482971 gap-5 flex-row w-[303px] items-start opacity-100 p-0 flex">
          <div className="group3083 w-[142px] h-[149px] relative p-0">
            <span className="showOnMap font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#0460a9] text-left tracking-[0px] w-[142px]">Show on Map</span>
            <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[118.61px]">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
            <span className="address font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[116.11px]">Address</span>
          </div>
          <div className="group3084 w-[141px] h-[149px] relative p-0">
            <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-[13px] font-medium text-[#212121] text-left tracking-[0px] w-[141px]">Department of Nuclear Medicine</span>
            <span className="contactDetails font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[141px]">Contact Details</span>
            <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#0460a9] text-left tracking-[0px] w-[141px]">Nucmed@ucl.hc.uk<br />021 221 324</span>
          </div>
        </div>
        <div className="rectangle5713 w-[3px] h-[155px] absolute bg-[#c6ced7] opacity-100 p-0 rounded-[900px] left-[333px] top-5" />
      </div>
      <div className="rectangle5712 w-[33.94px] h-[33.94px] relative bg-white opacity-100 p-0" />
    </div>
  </>}
  {(size == "S" && type == "popup" && state == "bottom") && <>
    <div className="c62FacilityCard gap-[-17px] absolute flex-col items-center opacity-100 p-0 left-[2489px] top-[557px] flex">
      <div className="facilities gap-6 flex-col w-[343px] items-start rounded bg-white opacity-100 p-5 flex">
        <div className="frame482972 gap-4 flex-col w-[303px] items-start opacity-100 p-0 flex">
          <div className="frame482971 gap-5 flex-row w-[303px] items-start opacity-100 p-0 flex">
            <div className="group3083 w-[142px] h-[149px] relative p-0">
              <span className="showOnMap font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#0460a9] text-left tracking-[0px] w-[142px]">Show on Map</span>
              <span className="185RueRaymondLosserand75014ParisFrance font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[118.61px]">185 Rue Raymond Losserand,<br />75014 Paris, <br />France</span>
              <span className="address font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[116.11px]">Address</span>
            </div>
            <div className="group3084 w-[141px] h-[149px] relative p-0">
              <span className="departmentOfNuclearMedicine font-['Volta_Modern_Display'] text-[13px] font-medium text-[#212121] text-left tracking-[0px] w-[141px]">Department of Nuclear Medicine</span>
              <span className="contactDetails font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[141px]">Contact Details</span>
              <span className="nucmeduclhcuk021221324 font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#0460a9] text-left tracking-[0px] w-[141px]">Nucmed@ucl.hc.uk<br />021 221 324</span>
            </div>
          </div>
          <div className="rectangle5686 w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
          <div className="group3075 w-[303px] h-[73px] relative p-0">
            <span className="thingsToKnow font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[303px]">Things to know</span>
            <div className="bullet gap-2 flex-row w-[142px] items-center opacity-100 p-0 flex">
              <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={2} cy={2} r={2} fill="#212121" />
              </svg>
              <span className="pointOfInfo font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
            </div>
            <div className="bullet gap-2 flex-row w-[142px] items-center opacity-100 p-0 flex">
              <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={2} cy={2} r={2} fill="#212121" />
              </svg>
              <span className="pointOfInfo font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
            </div>
            <div className="bullet gap-2 flex-row w-[141px] items-center opacity-100 p-0 flex">
              <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={2} cy={2} r={2} fill="#212121" />
              </svg>
              <span className="pointOfInfo font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
            </div>
            <div className="bullet gap-2 flex-row w-[141px] items-center opacity-100 p-0 flex">
              <svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={2} cy={2} r={2} fill="#212121" />
              </svg>
              <span className="pointOfInfo font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[139px]">Point of info</span>
            </div>
          </div>
          <div className="rectangle5687 w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
          <div className="frame482970 gap-2 flex-col w-[303px] items-start opacity-100 p-0 flex">
            <div className="group3076 w-[303px] h-[18px] relative p-0">
              <span className="information font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[303px]">Information</span>
            </div>
            <span className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQ font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px] w-[303px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q</span>
          </div>
        </div>
        <div className="rectangle5713 w-[3px] h-[155px] absolute bg-[#c6ced7] opacity-100 p-0 rounded-[900px] left-[333px] top-[241px]" />
      </div>
      <div className="rectangle5712 w-[33.94px] h-[33.94px] relative bg-white opacity-100 p-0" />
    </div>
  </>}
</>
  );
}