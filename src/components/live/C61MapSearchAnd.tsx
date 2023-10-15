import React from 'react';

export function C61MapSearchAnd(props){
	const {
    state = "Search",
    size = "XL"
  } = props;
  return (
      <>
  {(state == "Default" && size == "XL") && <>
    <div className="c61MapSearchAnd gap-0 absolute flex-row w-[480px] items-start overflow-hidden bg-[rgba(255,255,255,0.3)] opacity-100 pl-12 pr-8 py-8 left-[550px] top-[41px] filter flex">
      <div className="content gap-10 flex-col w-[400px] items-start opacity-100 p-0 flex">
        <div className="search gap-6 flex-col items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Patient location</span>
          <div className="search gap-1.5 flex-col items-start opacity-100 p-0 flex">
            <div className="type gap-[186px] flex-row w-[400px] items-center opacity-100 p-0 flex">
              <div className="type gap-2 flex-row w-[154px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="location font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px]">Chelmsford</span>
              </div>
              <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#BDBDBD" />
                  </svg>
                </div>
                <div className="interactiveIcons w-[30px] h-[29.47px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[30px] h-[29.47px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 23.0516L13.625 15.3144C13 15.8056 12.2812 16.1945 11.4688 16.4811C10.6562 16.7677 9.79167 16.9109 8.875 16.9109C6.60417 16.9109 4.68229 16.1382 3.10938 14.5929C1.53646 13.0475 0.75 11.1592 0.75 8.92813C0.75 6.69703 1.53646 4.80879 3.10938 3.2634C4.68229 1.71801 6.60417 0.945312 8.875 0.945312C11.1458 0.945312 13.0677 1.71801 14.6406 3.2634C16.2135 4.80879 17 6.69703 17 8.92813C17 9.82875 16.8542 10.6782 16.5625 11.4765C16.2708 12.2748 15.875 12.9809 15.375 13.595L23.25 21.3322L21.5 23.0516ZM8.875 14.4547C10.4375 14.4547 11.7656 13.9174 12.8594 12.8428C13.9531 11.7682 14.5 10.4633 14.5 8.92813C14.5 7.39297 13.9531 6.08809 12.8594 5.01348C11.7656 3.93887 10.4375 3.40156 8.875 3.40156C7.3125 3.40156 5.98438 3.93887 4.89062 5.01348C3.79688 6.08809 3.25 7.39297 3.25 8.92813C3.25 10.4633 3.79688 11.7682 4.89062 12.8428C5.98438 13.9174 7.3125 14.4547 8.875 14.4547Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="search w-[400px] h-px relative bg-[#212121] opacity-100 p-0 underline" />
          </div>
        </div>
        <div className="filters gap-5 flex-col w-[400px] items-start overflow-hidden opacity-100 p-0 flex">
          <div className="titleAndClear gap-[282px] flex-row items-center opacity-100 p-0 flex">
            <span className="filters font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[63px]">Filters</span>
            <span className="resetAll font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-right tracking-[0px]">Reset all</span>
          </div>
          <div className="content gap-10 flex-col items-start opacity-100 p-0 flex">
            <div className="featured gap-3 flex-col items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[392px]">Type of treatment</span>
              <div className="filters gap-2 flex-row items-start opacity-100 p-0 flex">
                <div className="filters w-[172px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[172px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-5 h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-5 h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.16406 6.83268H0.164062V5.16602H5.16406V0.166016H6.83073V5.16602H11.8307V6.83268H6.83073V11.8327H5.16406V6.83268Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[63.37%] top-[71.28%] bottom-[8.51%]">Imaging</span>
                </div>
                <div className="component53 w-[172px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[172px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-5 h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-5 h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.16406 6.83268H0.164062V5.16602H5.16406V0.166016H6.83073V5.16602H11.8307V6.83268H6.83073V11.8327H5.16406V6.83268Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[61.63%] top-[71.28%] bottom-[8.51%]">Therapy</span>
                </div>
              </div>
            </div>
            <div className="viewMore gap-2 flex-col items-start opacity-100 p-0 flex">
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
              <div className="content gap-2 flex-row w-[405px] items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#212121" />
                  </svg>
                </div>
                <span className="viewMoreFilters font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#212121] text-left tracking-[0px]">View more filters</span>
              </div>
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
            </div>
            <div className="filtersList gap-4 flex-col items-start opacity-100 p-0 flex">
              <div className="filters gap-4 flex-col w-[400px] items-start opacity-100 p-0 flex">
                <span className="filterList font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[204px]">Filter List</span>
              </div>
              <div className="filters gap-5 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="row1 gap-3 flex-col w-[148px] items-start opacity-100 p-0 flex">
                  <div className="checklist gap-3 flex-row items-start w-full opacity-100 p-0 flex">
                    <div className="frame483072 gap-1 flex-row items-start opacity-100 p-0 flex">
                      <div className="checkbox gap-[7.5px] flex-row items-center opacity-100 p-0 flex">
                        <div className="checkboxDraftCheckboxSelected w-[18px] h-[18px] relative opacity-100 p-0">
                          <div className="rectangle3818 absolute w-[18px] h-[18px] opacity-100 p-0 rounded-[3px] border-[0.75px] border-[rgba(0,0,0,0.87)] inset-[0%]" />
                        </div>
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[118px] flex-1 min-w-0">Filter Option</span>
                  </div>
                  <div className="checklist gap-3 flex-row items-start w-full opacity-100 p-0 flex">
                    <div className="frame483072 gap-1 flex-row items-start opacity-100 p-0 flex">
                      <div className="checkbox gap-[7.5px] flex-row items-center opacity-100 p-0 flex">
                        <div className="checkboxDraftCheckboxSelected w-[18px] h-[18px] relative opacity-100 p-0">
                          <div className="rectangle3818 absolute w-[18px] h-[18px] opacity-100 p-0 rounded-[3px] border-[0.75px] border-[rgba(0,0,0,0.87)] inset-[0%]" />
                        </div>
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[118px] flex-1 min-w-0">Filter Option</span>
                  </div>
                </div>
                <div className="row2 gap-3 flex-col w-[148px] items-start opacity-100 p-0 flex">
                  <div className="checklist gap-3 flex-row items-start w-full opacity-100 p-0 flex">
                    <div className="frame483072 gap-1 flex-row items-start opacity-100 p-0 flex">
                      <div className="checkbox gap-[7.5px] flex-row items-center opacity-100 p-0 flex">
                        <div className="checkboxDraftCheckboxSelected w-[18px] h-[18px] relative opacity-100 p-0">
                          <div className="rectangle3818 absolute w-[18px] h-[18px] opacity-100 p-0 rounded-[3px] border-[0.75px] border-[rgba(0,0,0,0.87)] inset-[0%]" />
                        </div>
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[118px] flex-1 min-w-0">Filter Option</span>
                  </div>
                  <div className="checklist gap-3 flex-row items-start w-full opacity-100 p-0 flex">
                    <div className="frame483072 gap-1 flex-row items-start opacity-100 p-0 flex">
                      <div className="checkbox gap-[7.5px] flex-row items-center opacity-100 p-0 flex">
                        <div className="checkboxDraftCheckboxSelected w-[18px] h-[18px] relative opacity-100 p-0">
                          <div className="rectangle3818 absolute w-[18px] h-[18px] opacity-100 p-0 rounded-[3px] border-[0.75px] border-[rgba(0,0,0,0.87)] inset-[0%]" />
                        </div>
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[118px] flex-1 min-w-0">Filter Option</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="facilities gap-5 flex-col items-start opacity-100 p-0 flex">
          <div className="facilities w-[400px] h-[23px] relative p-0">
            <div className="group3082 w-[400px] h-[23px] relative p-0">
              <div className="group3045 w-[204px] h-[23px] relative p-0">
                <div className="frame482999 gap-3 flex-row justify-center items-start opacity-100 p-0 flex">
                  <span className="facilities font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[204px]">Facilities</span>
                </div>
              </div>
              <span className="3Total font-['Volta_Modern_Display'] text-[15px] font-medium text-[#424242] text-right tracking-[0px]">3 total</span>
            </div>
          </div>
          <div className="frame483011 gap-3 flex-col items-start opacity-100 p-0 flex">
            <div className="c62FacilityCard gap-6 flex-col w-[400px] items-start rounded bg-white opacity-100 px-5 py-[18px] flex">
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
            <div className="concept2 gap-6 flex-col w-[400px] items-start rounded bg-white opacity-100 px-5 py-[18px] flex">
              <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
                <span className="hospitalParisSaintJoseph font-['Volta_Modern_Display'] text-[19px] font-semibold text-black text-left tracking-[0px] w-[306.5px] flex-1 min-w-0">European Hospital Georges Pompidou</span>
                <div className="frame482954 gap-1 flex-col items-start opacity-100 pt-1.5 pb-0 px-0 flex">
                  <div className="frame482934 gap-1 flex-row items-center opacity-100 p-0 flex">
                    <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
                      <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                      <svg width={10} height={13} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 6.5C5.55937 6.5 5.82422 6.38984 6.04453 6.16953C6.26484 5.94922 6.375 5.68437 6.375 5.375C6.375 5.06563 6.26484 4.80078 6.04453 4.58047C5.82422 4.36016 5.55937 4.25 5.25 4.25C4.94063 4.25 4.67578 4.36016 4.45547 4.58047C4.23516 4.80078 4.125 5.06563 4.125 5.375C4.125 5.68437 4.23516 5.94922 4.45547 6.16953C4.67578 6.38984 4.94063 6.5 5.25 6.5ZM5.25 10.6344C6.39375 9.58438 7.24219 8.63047 7.79531 7.77266C8.34844 6.91484 8.625 6.15312 8.625 5.4875C8.625 4.46562 8.29922 3.62891 7.64766 2.97734C6.99609 2.32578 6.19688 2 5.25 2C4.30312 2 3.50391 2.32578 2.85234 2.97734C2.20078 3.62891 1.875 4.46562 1.875 5.4875C1.875 6.15312 2.15156 6.91484 2.70469 7.77266C3.25781 8.63047 4.10625 9.58438 5.25 10.6344ZM5.25 12.125C3.74062 10.8406 2.61328 9.64766 1.86797 8.54609C1.12266 7.44453 0.75 6.425 0.75 5.4875C0.75 4.08125 1.20234 2.96094 2.10703 2.12656C3.01172 1.29219 4.05938 0.875 5.25 0.875C6.44062 0.875 7.48828 1.29219 8.39297 2.12656C9.29766 2.96094 9.75 4.08125 9.75 5.4875C9.75 6.425 9.37734 7.44453 8.63203 8.54609C7.88672 9.64766 6.75938 10.8406 5.25 12.125Z" fill="#1C1B1F" />
                      </svg>
                    </div>
                    <span className="8Km font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-right tracking-[0px]">12 km</span>
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
            <div className="concept3 gap-6 flex-col w-[400px] items-start rounded bg-white opacity-100 px-5 py-[18px] flex">
              <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
                <span className="hospitalParisSaintJoseph font-['Volta_Modern_Display'] text-[19px] font-semibold text-black text-left tracking-[0px] w-[306.5px] flex-1 min-w-0">Sainte-Perine Hospital (AP-HP)</span>
                <div className="frame482954 gap-1 flex-col items-start opacity-100 pt-1.5 pb-0 px-0 flex">
                  <div className="frame482934 gap-1 flex-row items-center opacity-100 p-0 flex">
                    <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
                      <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                      <svg width={10} height={13} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 6.5C5.55937 6.5 5.82422 6.38984 6.04453 6.16953C6.26484 5.94922 6.375 5.68437 6.375 5.375C6.375 5.06563 6.26484 4.80078 6.04453 4.58047C5.82422 4.36016 5.55937 4.25 5.25 4.25C4.94063 4.25 4.67578 4.36016 4.45547 4.58047C4.23516 4.80078 4.125 5.06563 4.125 5.375C4.125 5.68437 4.23516 5.94922 4.45547 6.16953C4.67578 6.38984 4.94063 6.5 5.25 6.5ZM5.25 10.6344C6.39375 9.58438 7.24219 8.63047 7.79531 7.77266C8.34844 6.91484 8.625 6.15312 8.625 5.4875C8.625 4.46562 8.29922 3.62891 7.64766 2.97734C6.99609 2.32578 6.19688 2 5.25 2C4.30312 2 3.50391 2.32578 2.85234 2.97734C2.20078 3.62891 1.875 4.46562 1.875 5.4875C1.875 6.15312 2.15156 6.91484 2.70469 7.77266C3.25781 8.63047 4.10625 9.58438 5.25 10.6344ZM5.25 12.125C3.74062 10.8406 2.61328 9.64766 1.86797 8.54609C1.12266 7.44453 0.75 6.425 0.75 5.4875C0.75 4.08125 1.20234 2.96094 2.10703 2.12656C3.01172 1.29219 4.05938 0.875 5.25 0.875C6.44062 0.875 7.48828 1.29219 8.39297 2.12656C9.29766 2.96094 9.75 4.08125 9.75 5.4875C9.75 6.425 9.37734 7.44453 8.63203 8.54609C7.88672 9.64766 6.75938 10.8406 5.25 12.125Z" fill="#1C1B1F" />
                      </svg>
                    </div>
                    <span className="8Km font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-right tracking-[0px]">15 km</span>
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
          </div>
        </div>
      </div>
      <div className="scroll w-[3px] h-[247px] absolute bg-[#a9b4bf] opacity-100 p-0 rounded-[900px] left-[469px] top-3.5" />
    </div>
  </>}
  {(state == "Search" && size == "XL") && <>
    <div className="c61MapSearchAnd gap-0 absolute flex-row w-[480px] items-start overflow-hidden bg-[rgba(255,255,255,0.3)] opacity-100 pl-12 pr-8 py-8 left-10 top-[41px] filter flex">
      <div className="content gap-10 flex-col w-[400px] items-start opacity-100 p-0 flex">
        <div className="search gap-6 flex-col items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[392px]">Patient location</span>
          <div className="patientSearchXLMid w-[400px] h-[41px] relative opacity-100 p-0">
            <div className="patientSearch gap-1.5 absolute flex-col w-[400px] h-[41px] items-start opacity-100 p-0 inset-[0%] flex">
              <div className="type gap-[186px] flex-row items-center w-full opacity-100 p-0 flex">
                <div className="type gap-2 flex-row w-[154px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                  <span className="location font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-[154px] flex-1 min-w-0">Ch</span>
                  <div className="typing w-0.5 h-[31px] absolute bg-[#212121] opacity-100 p-0 left-[42px] top-0" />
                </div>
                <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
                  <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                    <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#BDBDBD" />
                    </svg>
                  </div>
                  <div className="interactiveIcons w-[30px] h-[29.47px] relative opacity-100 p-0">
                    <div className="boundingBox absolute w-[30px] h-[29.47px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.5 23.0516L13.625 15.3144C13 15.8056 12.2812 16.1945 11.4688 16.4811C10.6562 16.7677 9.79167 16.9109 8.875 16.9109C6.60417 16.9109 4.68229 16.1382 3.10938 14.5929C1.53646 13.0475 0.75 11.1592 0.75 8.92813C0.75 6.69703 1.53646 4.80879 3.10938 3.2634C4.68229 1.71801 6.60417 0.945312 8.875 0.945312C11.1458 0.945312 13.0677 1.71801 14.6406 3.2634C16.2135 4.80879 17 6.69703 17 8.92813C17 9.82875 16.8542 10.6782 16.5625 11.4765C16.2708 12.2748 15.875 12.9809 15.375 13.595L23.25 21.3322L21.5 23.0516ZM8.875 14.4547C10.4375 14.4547 11.7656 13.9174 12.8594 12.8428C13.9531 11.7682 14.5 10.4633 14.5 8.92813C14.5 7.39297 13.9531 6.08809 12.8594 5.01348C11.7656 3.93887 10.4375 3.40156 8.875 3.40156C7.3125 3.40156 5.98438 3.93887 4.89062 5.01348C3.79688 6.08809 3.25 7.39297 3.25 8.92813C3.25 10.4633 3.79688 11.7682 4.89062 12.8428C5.98438 13.9174 7.3125 14.4547 8.875 14.4547Z" fill="#212121" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="search w-[400px] h-px relative bg-[#212121] opacity-100 p-0 underline" />
            </div>
          </div>
        </div>
        <div className="filters gap-5 flex-col w-[400px] items-start overflow-hidden opacity-100 p-0 flex">
          <div className="titleAndClear gap-[282px] flex-row items-center opacity-100 p-0 flex">
            <span className="filters font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[63px]">Filters</span>
            <span className="resetAll font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-right tracking-[0px]">Reset all</span>
          </div>
          <div className="content gap-10 flex-col items-start opacity-100 p-0 flex">
            <div className="featured gap-2 flex-col items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[392px]">Type of treatment</span>
              <div className="filters gap-2 flex-row items-start opacity-100 p-0 flex">
                <div className="filters w-[172px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[172px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-5 h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-5 h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.16406 6.83268H0.164062V5.16602H5.16406V0.166016H6.83073V5.16602H11.8307V6.83268H6.83073V11.8327H5.16406V6.83268Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[61.63%] top-[71.28%] bottom-[8.51%]">Therapy</span>
                </div>
                <div className="component53 w-[172px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[172px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-5 h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-5 h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.16406 6.83268H0.164062V5.16602H5.16406V0.166016H6.83073V5.16602H11.8307V6.83268H6.83073V11.8327H5.16406V6.83268Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[54.07%] top-[71.28%] bottom-[8.51%]">Treatment</span>
                </div>
              </div>
            </div>
            <div className="viewMore gap-2 flex-col items-start opacity-100 p-0 flex">
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
              <div className="content gap-2 flex-row w-[405px] items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#212121" />
                  </svg>
                </div>
                <span className="viewMoreFilters font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#212121] text-left tracking-[0px]">View more filters</span>
              </div>
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
            </div>
          </div>
        </div>
        <div className="facilities gap-5 flex-col items-start opacity-100 p-0 flex">
          <div className="facilities w-[400px] h-[23px] relative p-0">
            <div className="group3082 w-[400px] h-[23px] relative p-0">
              <div className="group3045 w-[204px] h-[23px] relative p-0">
                <div className="frame482999 gap-3 flex-row justify-center items-start opacity-100 p-0 flex">
                  <span className="facilities font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[204px]">Facilities</span>
                </div>
              </div>
              <span className="0Total font-['Volta_Modern_Display'] text-[15px] font-medium text-[#424242] text-right tracking-[0px]">0 total</span>
            </div>
          </div>
        </div>
        <div className="frame483046 w-[400px] h-[172px] absolute opacity-100 p-0 left-0 top-[92px]">
          <div className="rectangle5745 w-[400px] h-[172px] absolute shadow-[1px_6px_18px_rgba(0,0,0,0.15)] bg-[rgba(255,255,255,0.8)] opacity-100 p-0 left-0 top-0" />
          <div className="frame483032 gap-2 absolute flex-col w-[101px] h-[127px] items-start opacity-100 p-0 left-[19px] top-[19px] flex">
            <span className="chelmsfordUK font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Chelmsford, UK</span>
            <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
            <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
            <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
            <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
          </div>
          <div className="hover w-4 h-[17px] absolute opacity-100 p-0 left-[140px] top-7">
            <div className="rectangle5742 absolute w-[7.06px] h-[1.81px] bg-white opacity-100 p-0 left-[39.53%] right-[16.33%] top-[85.86%] bottom-[3.51%]" />
            <div className="rectangle5736 absolute w-[1.95px] h-[14.16px] bg-white opacity-100 p-0 left-[33.42%] right-[54.38%] top-[6.09%] bottom-[10.62%]" />
            <div className="rectangle5737 absolute w-[6.91px] h-[11.39px] bg-white opacity-100 p-0 left-[41.29%] right-[15.5%] top-[28.36%] bottom-[4.61%]" />
            <div className="rectangle5738 absolute w-[3.73px] h-[7.46px] bg-white opacity-100 p-0 left-[70.1%] right-[6.61%] top-[37.58%] bottom-[18.51%]" />
            <div className="rectangle5739 absolute w-[2.28px] h-[3.28px] bg-white opacity-100 p-0 left-[6.45%] right-[79.29%] top-[42.58%] bottom-[38.12%]" />
            <div className="rectangle5740 absolute w-[2.89px] h-[4.49px] bg-white opacity-100 p-0 left-[19.18%] right-[62.75%] top-[48.67%] bottom-[24.93%]" />
            <div className="rectangle5741 absolute w-[2.76px] h-[1.09px] bg-white opacity-100 p-0 left-[25.71%] right-[57.05%] top-[75.08%] bottom-[18.51%]" />
            <img src="/images/image246.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image246 absolute h-[17px] w-4 opacity-100 object-cover p-0 inset-[0%]" />
          </div>
        </div>
      </div>
      <div className="scroll w-[3px] h-[247px] absolute bg-[#a9b4bf] opacity-100 p-0 rounded-[900px] left-[469px] top-3.5" />
    </div>
  </>}
  {(state == "Default" && size == "M") && <>
    <div className="c61MapSearchAnd gap-0 absolute flex-row w-[372px] items-start bg-[rgba(255,255,255,0.3)] opacity-100 p-8 left-[1549px] top-[41px] filter flex">
      <div className="content gap-10 flex-col w-[308px] items-start opacity-100 p-0 flex">
        <div className="search gap-6 flex-col w-[308px] items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Patient location</span>
          <div className="search gap-1.5 flex-col w-[308px] items-start opacity-100 p-0 flex">
            <div className="type gap-[186px] flex-row w-[309px] justify-between items-center opacity-100 p-0 flex">
              <span className="location font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px]">Chelmsford</span>
              <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 14.5L0 13.1L5.6 7.5L0 1.9L1.4 0.5L7 6.1L12.6 0.5L14 1.9L8.4 7.5L14 13.1L12.6 14.5L7 8.9L1.4 14.5Z" fill="#BDBDBD" />
                  </svg>
                </div>
                <div className="interactiveIcons w-[30px] h-[29.47px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[30px] h-[29.47px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 22.5516L13.625 14.8144C13 15.3056 12.2812 15.6945 11.4688 15.9811C10.6562 16.2677 9.79167 16.4109 8.875 16.4109C6.60417 16.4109 4.68229 15.6382 3.10938 14.0929C1.53646 12.5475 0.75 10.6592 0.75 8.42813C0.75 6.19703 1.53646 4.30879 3.10938 2.7634C4.68229 1.21801 6.60417 0.445312 8.875 0.445312C11.1458 0.445312 13.0677 1.21801 14.6406 2.7634C16.2135 4.30879 17 6.19703 17 8.42813C17 9.32875 16.8542 10.1782 16.5625 10.9765C16.2708 11.7748 15.875 12.4809 15.375 13.095L23.25 20.8322L21.5 22.5516ZM8.875 13.9547C10.4375 13.9547 11.7656 13.4174 12.8594 12.3428C13.9531 11.2682 14.5 9.96328 14.5 8.42813C14.5 6.89297 13.9531 5.58809 12.8594 4.51348C11.7656 3.43887 10.4375 2.90156 8.875 2.90156C7.3125 2.90156 5.98438 3.43887 4.89062 4.51348C3.79688 5.58809 3.25 6.89297 3.25 8.42813C3.25 9.96328 3.79688 11.2682 4.89062 12.3428C5.98438 13.4174 7.3125 13.9547 8.875 13.9547Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="search w-[308px] h-px relative bg-[#212121] opacity-100 p-0 underline" />
          </div>
          <div className="titleAndClear gap-[282px] flex-row w-[309px] justify-between items-center opacity-100 p-0 flex">
            <span className="filters font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[63px]">Filters</span>
            <span className="resetAll font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-right tracking-[0px]">Reset all</span>
          </div>
          <div className="content gap-6 flex-col w-[308px] items-start opacity-100 p-0 flex">
            <div className="featured gap-3 flex-col w-[308px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[308px]">Type of treatment</span>
              <div className="filters gap-2 flex-row items-start opacity-100 p-0 flex">
                <div className="filters w-[150px] h-[82px] relative opacity-100 p-0">
                  <div className="bg absolute w-[150px] h-[82px] bg-white opacity-100 p-0 rounded-[3.5113635063171387px] inset-[0%]" />
                  <div className="interactiveIcons absolute w-[17.45px] h-[17.45px] opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-[17.45px] h-[17.45px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5714 6.43084H0.210938V4.97694H4.5714V0.615234H6.02489V4.97694H10.3854V6.43084H6.02489V10.7925H4.5714V6.43084Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[8%] right-[58%] top-[69.51%] bottom-[7.32%]">Imaging</span>
                </div>
                <div className="filters w-[150px] h-[82px] relative opacity-100 p-0">
                  <div className="bg absolute w-[150px] h-[82px] bg-white opacity-100 p-0 rounded-[3.5113635063171387px] inset-[0%]" />
                  <div className="interactiveIcons absolute w-[17.45px] h-[17.45px] opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-[17.45px] h-[17.45px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5714 6.43084H0.210938V4.97694H4.5714V0.615234H6.02489V4.97694H10.3854V6.43084H6.02489V10.7925H4.5714V6.43084Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[8%] right-[56%] top-[69.51%] bottom-[7.32%]">Therapy</span>
                </div>
              </div>
            </div>
            <div className="viewMore gap-2 flex-col w-[308px] items-start opacity-100 p-0 flex">
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
              <div className="content gap-2 flex-row items-center w-full opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#212121" />
                  </svg>
                </div>
                <span className="viewMoreFilters font-['Volta_Modern_Display'] text-sm font-semibold text-[#212121] text-left tracking-[0px]">View more filters</span>
              </div>
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
            </div>
            <div className="filtersList gap-4 flex-col w-[308px] items-start opacity-100 p-0 flex">
              <div className="filters gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <span className="filterList font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[204px]">Filter List</span>
              </div>
              <div className="filters gap-2 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="row1 gap-4 flex-col w-[150px] items-start opacity-100 p-0 flex">
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[114px] flex-1 min-w-0">Filter Option</span>
                  </div>
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[114px] flex-1 min-w-0">Filter Option</span>
                  </div>
                </div>
                <div className="row2 gap-4 flex-col w-[150px] items-start opacity-100 p-0 flex">
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[114px] flex-1 min-w-0">Filter Option</span>
                  </div>
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[114px] flex-1 min-w-0">Filter Option</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame483069 gap-5 flex-col w-[308px] items-start opacity-100 p-0 flex">
          <div className="frame483071 gap-5 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="group3045 w-[241px] h-[23px] relative flex-1 min-w-0 p-0">
              <div className="frame482999 gap-3 flex-row w-[241px] items-start opacity-100 p-0 flex">
                <span className="facilities font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[204px]">Facilities</span>
              </div>
            </div>
            <span className="3Total font-['Volta_Modern_Display'] text-[15px] font-medium text-[#424242] text-right tracking-[0px] w-[47px]">3 total</span>
          </div>
          <div className="frame483070 gap-3 flex-col items-start opacity-100 p-0 flex">
            <div className="c62FacilityCard gap-4 flex-col w-[308px] items-start rounded bg-white opacity-100 px-5 py-[18px] flex">
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
            <div className="c62FacilityCard gap-4 flex-col w-[308px] items-start rounded bg-white opacity-100 px-5 py-[18px] flex">
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
            <div className="c62FacilityCard gap-4 flex-col w-[308px] items-start rounded bg-white opacity-100 px-5 py-[18px] flex">
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
          </div>
        </div>
      </div>
      <div className="scroll w-[3px] h-[247px] relative bg-[#4a2d00] opacity-100 p-0 rounded-[900px] !hidden" />
    </div>
  </>}
  {(state == "Search" && size == "M") && <>
    <div className="c61MapSearchAnd gap-0 absolute flex-row w-[372px] items-start bg-[rgba(255,255,255,0.3)] opacity-100 pl-12 pr-8 py-8 left-[1147px] top-[41px] filter flex">
      <div className="content gap-10 flex-col w-[308px] items-start opacity-100 p-0 flex">
        <div className="search gap-6 flex-col w-[308px] items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-full">Patient location</span>
          <div className="search gap-1.5 flex-col w-[308px] items-start opacity-100 p-0 flex">
            <div className="type gap-0 flex-row w-[309px] justify-between items-center opacity-100 p-0 flex">
              <span className="location font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px]">Ch</span>
              <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-[30px] h-[29.47px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[30px] h-[29.47px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 22.5516L13.625 14.8144C13 15.3056 12.2812 15.6945 11.4688 15.9811C10.6562 16.2677 9.79167 16.4109 8.875 16.4109C6.60417 16.4109 4.68229 15.6382 3.10938 14.0929C1.53646 12.5475 0.75 10.6592 0.75 8.42813C0.75 6.19703 1.53646 4.30879 3.10938 2.7634C4.68229 1.21801 6.60417 0.445312 8.875 0.445312C11.1458 0.445312 13.0677 1.21801 14.6406 2.7634C16.2135 4.30879 17 6.19703 17 8.42813C17 9.32875 16.8542 10.1782 16.5625 10.9765C16.2708 11.7748 15.875 12.4809 15.375 13.095L23.25 20.8322L21.5 22.5516ZM8.875 13.9547C10.4375 13.9547 11.7656 13.4174 12.8594 12.3428C13.9531 11.2682 14.5 9.96328 14.5 8.42813C14.5 6.89297 13.9531 5.58809 12.8594 4.51348C11.7656 3.43887 10.4375 2.90156 8.875 2.90156C7.3125 2.90156 5.98438 3.43887 4.89062 4.51348C3.79688 5.58809 3.25 6.89297 3.25 8.42813C3.25 9.96328 3.79688 11.2682 4.89062 12.3428C5.98438 13.4174 7.3125 13.9547 8.875 13.9547Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="search w-[309px] h-px relative bg-[#212121] opacity-100 p-0 underline" />
          </div>
          <div className="titleAndClear gap-[282px] flex-row w-[309px] justify-between items-center opacity-100 p-0 flex">
            <span className="filters font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[63px]">Filters</span>
            <span className="resetAll font-['Volta_Modern_Display'] text-[15px] font-medium text-[#757575] text-right tracking-[0px]">Reset all</span>
          </div>
          <div className="content gap-6 flex-col w-[308px] items-start opacity-100 p-0 flex">
            <div className="featured gap-3 flex-col w-[312px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[392px]">Type of treatment</span>
              <div className="filters gap-2 flex-row items-start opacity-100 p-0 flex">
                <div className="filters gap-[7.022727012634277px] flex-row items-start opacity-100 p-0 flex">
                  <div className="filters w-[150px] h-[82px] relative opacity-100 p-0">
                    <div className="bg absolute w-[150px] h-[82px] bg-white opacity-100 p-0 rounded-[3.5113635063171387px] inset-[0%]" />
                    <div className="interactiveIcons absolute w-[17.45px] h-[17.45px] opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                      <div className="boundingBox absolute w-[17.45px] h-[17.45px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                      <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5714 6.43084H0.210938V4.97694H4.5714V0.615234H6.02489V4.97694H10.3854V6.43084H6.02489V10.7925H4.5714V6.43084Z" fill="#1C1B1F" />
                      </svg>
                    </div>
                    <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[8%] right-[56%] top-[69.51%] bottom-[7.32%]">Therapy</span>
                  </div>
                </div>
                <div className="filters gap-[7.022727012634277px] flex-row items-start opacity-100 p-0 flex">
                  <div className="filters w-[150px] h-[82px] relative opacity-100 p-0">
                    <div className="bg absolute w-[150px] h-[82px] bg-white opacity-100 p-0 rounded-[3.5113635063171387px] inset-[0%]" />
                    <div className="interactiveIcons absolute w-[17.45px] h-[17.45px] opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                      <div className="boundingBox absolute w-[17.45px] h-[17.45px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                      <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5714 6.43084H0.210938V4.97694H4.5714V0.615234H6.02489V4.97694H10.3854V6.43084H6.02489V10.7925H4.5714V6.43084Z" fill="#1C1B1F" />
                      </svg>
                    </div>
                    <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[8%] right-[56%] top-[69.51%] bottom-[7.32%]">Therapy</span>
                  </div>
                </div>
              </div>
              <div className="frame483046 w-[308px] h-[172px] absolute top-[-67px] opacity-100 p-0 left-0">
                <div className="rectangle5745 w-[308px] h-[172px] absolute shadow-[1px_6px_18px_rgba(0,0,0,0.15)] bg-[rgba(255,255,255,0.8)] opacity-100 p-0 left-0 top-0" />
                <div className="frame483032 gap-2 absolute flex-col w-[101px] h-[127px] items-start opacity-100 p-0 left-[19px] top-[19px] flex">
                  <span className="chelmsfordUK font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Chelmsford, UK</span>
                  <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
                  <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
                  <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
                  <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
                </div>
                <div className="hover w-4 h-[17px] absolute opacity-100 p-0 left-[140px] top-7">
                  <div className="rectangle5742 absolute w-[7.06px] h-[1.81px] bg-white opacity-100 p-0 left-[39.53%] right-[16.33%] top-[85.86%] bottom-[3.51%]" />
                  <div className="rectangle5736 absolute w-[1.95px] h-[14.16px] bg-white opacity-100 p-0 left-[33.42%] right-[54.38%] top-[6.09%] bottom-[10.62%]" />
                  <div className="rectangle5737 absolute w-[6.91px] h-[11.39px] bg-white opacity-100 p-0 left-[41.29%] right-[15.5%] top-[28.36%] bottom-[4.61%]" />
                  <div className="rectangle5738 absolute w-[3.73px] h-[7.46px] bg-white opacity-100 p-0 left-[70.1%] right-[6.61%] top-[37.58%] bottom-[18.51%]" />
                  <div className="rectangle5739 absolute w-[2.28px] h-[3.28px] bg-white opacity-100 p-0 left-[6.45%] right-[79.29%] top-[42.58%] bottom-[38.12%]" />
                  <div className="rectangle5740 absolute w-[2.89px] h-[4.49px] bg-white opacity-100 p-0 left-[19.18%] right-[62.75%] top-[48.67%] bottom-[24.93%]" />
                  <div className="rectangle5741 absolute w-[2.76px] h-[1.09px] bg-white opacity-100 p-0 left-[25.71%] right-[57.05%] top-[75.08%] bottom-[18.51%]" />
                  <img src="/images/image246.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image246 absolute h-[17px] w-4 opacity-100 object-cover p-0 inset-[0%]" />
                </div>
              </div>
            </div>
            <div className="viewMore gap-2 flex-col w-[308px] items-start opacity-100 p-0 flex">
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
              <div className="content gap-2 flex-row items-center w-full opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#212121" />
                  </svg>
                </div>
                <span className="viewMoreFilters font-['Volta_Modern_Display'] text-sm font-semibold text-[#212121] text-left tracking-[0px]">View more filters</span>
              </div>
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
            </div>
          </div>
          <div className="typing w-0.5 h-[31px] absolute bg-[#212121] opacity-100 p-0 left-[43px] top-[49px]" />
        </div>
        <div className="frame483069 gap-5 flex-col w-[308px] items-start opacity-100 p-0 flex">
          <div className="frame483071 gap-5 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="group3045 w-[241px] h-[23px] relative flex-1 min-w-0 p-0">
              <div className="frame482999 gap-3 flex-row w-[241px] items-start opacity-100 p-0 flex">
                <span className="facilities font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[204px]">Facilities</span>
              </div>
            </div>
            <span className="0Total font-['Volta_Modern_Display'] text-[15px] font-medium text-[#424242] text-right tracking-[0px] w-[47px]">0 total</span>
          </div>
        </div>
      </div>
      <div className="scroll w-[3px] h-[247px] relative bg-[#4a2d00] opacity-100 p-0 rounded-[900px] !hidden" />
    </div>
  </>}
  {(state == "Default" && size == "S") && <>
    <div className="c61MapSearchAnd gap-0 absolute flex-row w-[375px] items-start bg-[#eeeeee] opacity-100 px-4 py-8 left-[2445px] top-[42px] filter flex">
      <div className="content gap-5 flex-col w-[343px] items-start opacity-100 p-0 flex">
        <div className="search gap-6 flex-col w-[343px] items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[343px]">Patient location</span>
          <div className="search gap-1.5 flex-col w-[343px] items-start opacity-100 p-0 flex">
            <div className="type gap-[186px] flex-row w-[343px] items-center opacity-100 p-0 flex">
              <div className="type gap-2 flex-row w-[127px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="location font-['Volta_Modern_Display'] text-2xl font-medium text-[#516476] text-left tracking-[-0.35px]">Enter patient location</span>
              </div>
              <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-[30px] h-[29.47px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[30px] h-[29.47px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 22.7898L13.625 15.0527C13 15.5439 12.2812 15.9328 11.4688 16.2194C10.6562 16.5059 9.79167 16.6492 8.875 16.6492C6.60417 16.6492 4.68229 15.8765 3.10938 14.3311C1.53646 12.7857 0.75 10.8975 0.75 8.66641C0.75 6.43531 1.53646 4.54707 3.10938 3.00168C4.68229 1.45629 6.60417 0.683594 8.875 0.683594C11.1458 0.683594 13.0677 1.45629 14.6406 3.00168C16.2135 4.54707 17 6.43531 17 8.66641C17 9.56703 16.8542 10.4165 16.5625 11.2148C16.2708 12.013 15.875 12.7192 15.375 13.3333L23.25 21.0705L21.5 22.7898ZM8.875 14.193C10.4375 14.193 11.7656 13.6557 12.8594 12.5811C13.9531 11.5064 14.5 10.2016 14.5 8.66641C14.5 7.13125 13.9531 5.82637 12.8594 4.75176C11.7656 3.67715 10.4375 3.13984 8.875 3.13984C7.3125 3.13984 5.98438 3.67715 4.89062 4.75176C3.79688 5.82637 3.25 7.13125 3.25 8.66641C3.25 10.2016 3.79688 11.5064 4.89062 12.5811C5.98438 13.6557 7.3125 14.193 8.875 14.193Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="search w-[343px] h-px relative bg-[#516476] opacity-100 p-0 underline" />
          </div>
        </div>
        <div className="filters gap-5 flex-col w-[343px] items-start opacity-100 p-0 flex">
          <div className="titleAndClear gap-0 flex-row items-center w-full opacity-100 p-0 flex">
            <span className="filters font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[295px] flex-1 min-w-0">Filters</span>
            <span className="resetAll font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-right tracking-[0px]">Reset all</span>
          </div>
          <div className="content gap-7 flex-col w-[343px] items-start opacity-100 p-0 flex">
            <div className="featured gap-2 flex-col w-[343px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[343px]">Type of treatment</span>
              <div className="filters gap-4 flex-row items-start opacity-100 p-0 flex">
                <div className="filters w-[164px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[164px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-[19.07px] h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-[19.07px] h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.04869 7.30729H0.28125V5.64062H5.04869V0.640625H6.63784V5.64062H11.4053V7.30729H6.63784V12.3073H5.04869V7.30729Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[57.66%] top-[70.21%] bottom-[8.51%]">Therapy</span>
                </div>
                <div className="component53 w-[163px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[163px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-[18.95px] h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-[18.95px] h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.15244 7.30729H0.414062V5.64062H5.15244V0.640625H6.73189V5.64062H11.4703V7.30729H6.73189V12.3073H5.15244V7.30729Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[49.46%] top-[70.21%] bottom-[8.51%]">Treatment</span>
                </div>
              </div>
            </div>
            <div className="viewMore gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
              <div className="content gap-2 flex-row items-center w-full opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8.47461H0V6.47461H6V0.474609H8V6.47461H14V8.47461H8V14.4746H6V8.47461Z" fill="#212121" />
                  </svg>
                </div>
                <span className="viewMoreFilters font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#212121] text-left tracking-[0px] w-[311px] flex-1 min-w-0">View more filters</span>
              </div>
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
            </div>
            <div className="filtersList gap-4 flex-col w-[308px] items-start opacity-100 p-0 flex">
              <div className="filters gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <span className="filterList font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[204px]">Filter List</span>
              </div>
              <div className="filters gap-2 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="row1 gap-4 flex-col w-[150px] items-start opacity-100 p-0 flex">
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[114px] flex-1 min-w-0">Filter Option</span>
                  </div>
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[114px] flex-1 min-w-0">Filter Option</span>
                  </div>
                </div>
                <div className="row2 gap-4 flex-col w-[150px] items-start opacity-100 p-0 flex">
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[114px] flex-1 min-w-0">Filter Option</span>
                  </div>
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[114px] flex-1 min-w-0">Filter Option</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cTA gap-3 flex-row w-[343px] h-12 items-center bg-[#0d2741] opacity-100 pl-3 pr-4 py-3 rounded-sm flex">
          <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16.9367L5.99998 14.8367L1.69615 16.502C1.40128 16.6161 1.12821 16.5835 0.876925 16.404C0.625642 16.2245 0.5 15.979 0.5 15.6674V2.55212C0.5 2.35469 0.552892 2.17745 0.658675 2.0204C0.764442 1.86335 0.912833 1.74957 1.10385 1.67905L5.99998 0.0136719L12 2.11367L16.3038 0.448297C16.5987 0.334197 16.8717 0.362081 17.123 0.531947C17.3743 0.701814 17.5 0.939314 17.5 1.24445V14.4367C17.5 14.6405 17.4423 14.8194 17.3269 14.9732C17.2115 15.1271 17.0551 15.2393 16.8576 15.3098L12 16.9367ZM11.25 15.1021V3.4021L6.74995 1.82902V13.529L11.25 15.1021ZM12.75 15.1021L16 14.0252V2.17517L12.75 3.4021V15.1021ZM1.99997 14.7752L5.25 13.529V1.82902L1.99997 2.92517V14.7752Z" fill="white" />
            </svg>
          </div>
          <span className="copy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">View as Map </span>
        </div>
        <div className="facilities gap-5 flex-col items-start opacity-100 pt-2 pb-0 px-0 flex">
          <div className="title gap-[99px] flex-row items-start opacity-100 p-0 flex">
            <span className="facilities font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[204px]">Facilities</span>
            <span className="3Total font-['Volta_Modern_Display'] text-[15px] font-medium text-[#424242] text-right tracking-[0px]">3 total</span>
          </div>
          <div className="c62FacilityCard gap-6 flex-col w-[343px] items-start rounded bg-white opacity-100 p-5 flex">
            <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[258.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
              <div className="distance gap-1 flex-row items-center opacity-100 pt-1 pb-0 px-0 flex">
                <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={10} height={13} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 6.47461C5.55937 6.47461 5.82422 6.36445 6.04453 6.14414C6.26484 5.92383 6.375 5.65898 6.375 5.34961C6.375 5.04023 6.26484 4.77539 6.04453 4.55508C5.82422 4.33477 5.55937 4.22461 5.25 4.22461C4.94063 4.22461 4.67578 4.33477 4.45547 4.55508C4.23516 4.77539 4.125 5.04023 4.125 5.34961C4.125 5.65898 4.23516 5.92383 4.45547 6.14414C4.67578 6.36445 4.94063 6.47461 5.25 6.47461ZM5.25 10.609C6.39375 9.55898 7.24219 8.60508 7.79531 7.74727C8.34844 6.88945 8.625 6.12773 8.625 5.46211C8.625 4.44023 8.29922 3.60352 7.64766 2.95195C6.99609 2.30039 6.19688 1.97461 5.25 1.97461C4.30312 1.97461 3.50391 2.30039 2.85234 2.95195C2.20078 3.60352 1.875 4.44023 1.875 5.46211C1.875 6.12773 2.15156 6.88945 2.70469 7.74727C3.25781 8.60508 4.10625 9.55898 5.25 10.609ZM5.25 12.0996C3.74062 10.8152 2.61328 9.62227 1.86797 8.5207C1.12266 7.41914 0.75 6.39961 0.75 5.46211C0.75 4.05586 1.20234 2.93555 2.10703 2.10117C3.01172 1.2668 4.05938 0.849609 5.25 0.849609C6.44062 0.849609 7.48828 1.2668 8.39297 2.10117C9.29766 2.93555 9.75 4.05586 9.75 5.46211C9.75 6.39961 9.37734 7.41914 8.63203 8.5207C7.88672 9.62227 6.75938 10.8152 5.25 12.0996Z" fill="#1C1B1F" />
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
                        <path d="M7.00238 8.01892L0.40625 1.42282L1.63571 0.193359L7.00238 5.56003L12.369 0.193359L13.5985 1.42282L7.00238 8.01892Z" fill="#1C1B1F" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c62FacilityCard gap-6 flex-col w-[343px] items-start rounded bg-white opacity-100 p-5 flex">
            <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[258.5px] flex-1 min-w-0">European Hospital Georges Pompidou</span>
              <div className="distance gap-1 flex-row items-center opacity-100 pt-1 pb-0 px-0 flex">
                <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={10} height={13} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 6.47461C5.55937 6.47461 5.82422 6.36445 6.04453 6.14414C6.26484 5.92383 6.375 5.65898 6.375 5.34961C6.375 5.04023 6.26484 4.77539 6.04453 4.55508C5.82422 4.33477 5.55937 4.22461 5.25 4.22461C4.94063 4.22461 4.67578 4.33477 4.45547 4.55508C4.23516 4.77539 4.125 5.04023 4.125 5.34961C4.125 5.65898 4.23516 5.92383 4.45547 6.14414C4.67578 6.36445 4.94063 6.47461 5.25 6.47461ZM5.25 10.609C6.39375 9.55898 7.24219 8.60508 7.79531 7.74727C8.34844 6.88945 8.625 6.12773 8.625 5.46211C8.625 4.44023 8.29922 3.60352 7.64766 2.95195C6.99609 2.30039 6.19688 1.97461 5.25 1.97461C4.30312 1.97461 3.50391 2.30039 2.85234 2.95195C2.20078 3.60352 1.875 4.44023 1.875 5.46211C1.875 6.12773 2.15156 6.88945 2.70469 7.74727C3.25781 8.60508 4.10625 9.55898 5.25 10.609ZM5.25 12.0996C3.74062 10.8152 2.61328 9.62227 1.86797 8.5207C1.12266 7.41914 0.75 6.39961 0.75 5.46211C0.75 4.05586 1.20234 2.93555 2.10703 2.10117C3.01172 1.2668 4.05938 0.849609 5.25 0.849609C6.44062 0.849609 7.48828 1.2668 8.39297 2.10117C9.29766 2.93555 9.75 4.05586 9.75 5.46211C9.75 6.39961 9.37734 7.41914 8.63203 8.5207C7.88672 9.62227 6.75938 10.8152 5.25 12.0996Z" fill="#1C1B1F" />
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
                        <path d="M7.00238 8.01892L0.40625 1.42282L1.63571 0.193359L7.00238 5.56003L12.369 0.193359L13.5985 1.42282L7.00238 8.01892Z" fill="#1C1B1F" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c62FacilityCard gap-6 flex-col w-[343px] items-start rounded bg-white opacity-100 p-5 flex">
            <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[258.5px] flex-1 min-w-0">Sainte-Perine Hospital (AP-HP)</span>
              <div className="distance gap-1 flex-row items-center opacity-100 pt-1 pb-0 px-0 flex">
                <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={10} height={13} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 6.47461C5.55937 6.47461 5.82422 6.36445 6.04453 6.14414C6.26484 5.92383 6.375 5.65898 6.375 5.34961C6.375 5.04023 6.26484 4.77539 6.04453 4.55508C5.82422 4.33477 5.55937 4.22461 5.25 4.22461C4.94063 4.22461 4.67578 4.33477 4.45547 4.55508C4.23516 4.77539 4.125 5.04023 4.125 5.34961C4.125 5.65898 4.23516 5.92383 4.45547 6.14414C4.67578 6.36445 4.94063 6.47461 5.25 6.47461ZM5.25 10.609C6.39375 9.55898 7.24219 8.60508 7.79531 7.74727C8.34844 6.88945 8.625 6.12773 8.625 5.46211C8.625 4.44023 8.29922 3.60352 7.64766 2.95195C6.99609 2.30039 6.19688 1.97461 5.25 1.97461C4.30312 1.97461 3.50391 2.30039 2.85234 2.95195C2.20078 3.60352 1.875 4.44023 1.875 5.46211C1.875 6.12773 2.15156 6.88945 2.70469 7.74727C3.25781 8.60508 4.10625 9.55898 5.25 10.609ZM5.25 12.0996C3.74062 10.8152 2.61328 9.62227 1.86797 8.5207C1.12266 7.41914 0.75 6.39961 0.75 5.46211C0.75 4.05586 1.20234 2.93555 2.10703 2.10117C3.01172 1.2668 4.05938 0.849609 5.25 0.849609C6.44062 0.849609 7.48828 1.2668 8.39297 2.10117C9.29766 2.93555 9.75 4.05586 9.75 5.46211C9.75 6.39961 9.37734 7.41914 8.63203 8.5207C7.88672 9.62227 6.75938 10.8152 5.25 12.0996Z" fill="#1C1B1F" />
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
                        <path d="M7.00238 8.01892L0.40625 1.42282L1.63571 0.193359L7.00238 5.56003L12.369 0.193359L13.5985 1.42282L7.00238 8.01892Z" fill="#1C1B1F" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(state == "Search" && size == "S") && <>
    <div className="c61MapSearchAnd gap-0 absolute flex-row w-[375px] items-start bg-[#eeeeee] opacity-100 px-4 py-8 left-[2040px] top-[42px] filter flex">
      <div className="content gap-5 flex-col w-[343px] items-start opacity-100 p-0 flex">
        <div className="search gap-6 flex-col w-[343px] items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[343px]">Patient location</span>
          <div className="search gap-1.5 flex-col w-[343px] items-start opacity-100 p-0 flex">
            <div className="type gap-[186px] flex-row w-[343px] items-center opacity-100 p-0 flex">
              <div className="type gap-2 flex-row w-[127px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="location font-['Volta_Modern_Display'] text-2xl font-medium text-[#516476] text-left tracking-[-0.35px]">Enter patient location</span>
              </div>
              <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-[30px] h-[29.47px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[30px] h-[29.47px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 22.7898L13.625 15.0527C13 15.5439 12.2812 15.9328 11.4688 16.2194C10.6562 16.5059 9.79167 16.6492 8.875 16.6492C6.60417 16.6492 4.68229 15.8765 3.10938 14.3311C1.53646 12.7857 0.75 10.8975 0.75 8.66641C0.75 6.43531 1.53646 4.54707 3.10938 3.00168C4.68229 1.45629 6.60417 0.683594 8.875 0.683594C11.1458 0.683594 13.0677 1.45629 14.6406 3.00168C16.2135 4.54707 17 6.43531 17 8.66641C17 9.56703 16.8542 10.4165 16.5625 11.2148C16.2708 12.013 15.875 12.7192 15.375 13.3333L23.25 21.0705L21.5 22.7898ZM8.875 14.193C10.4375 14.193 11.7656 13.6557 12.8594 12.5811C13.9531 11.5064 14.5 10.2016 14.5 8.66641C14.5 7.13125 13.9531 5.82637 12.8594 4.75176C11.7656 3.67715 10.4375 3.13984 8.875 3.13984C7.3125 3.13984 5.98438 3.67715 4.89062 4.75176C3.79688 5.82637 3.25 7.13125 3.25 8.66641C3.25 10.2016 3.79688 11.5064 4.89062 12.5811C5.98438 13.6557 7.3125 14.193 8.875 14.193Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="search w-[343px] h-px relative bg-[#516476] opacity-100 p-0 underline" />
          </div>
        </div>
        <div className="filters gap-5 flex-col w-[343px] items-start opacity-100 p-0 flex">
          <div className="titleAndClear gap-0 flex-row items-center w-full opacity-100 p-0 flex">
            <span className="filters font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[295px] flex-1 min-w-0">Filters</span>
            <span className="resetAll font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-right tracking-[0px]">Reset all</span>
          </div>
          <div className="content gap-7 flex-col w-[343px] items-start opacity-100 p-0 flex">
            <div className="featured gap-2 flex-col w-[343px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[343px]">Type of treatment</span>
              <div className="filters gap-4 flex-row items-start opacity-100 p-0 flex">
                <div className="filters w-[164px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[164px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-[19.07px] h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-[19.07px] h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.04869 7.30729H0.28125V5.64062H5.04869V0.640625H6.63784V5.64062H11.4053V7.30729H6.63784V12.3073H5.04869V7.30729Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[57.66%] top-[70.21%] bottom-[8.51%]">Therapy</span>
                </div>
                <div className="component53 w-[163px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[163px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-[18.95px] h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-[18.95px] h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.15244 7.30729H0.414062V5.64062H5.15244V0.640625H6.73189V5.64062H11.4703V7.30729H6.73189V12.3073H5.15244V7.30729Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[49.46%] top-[70.21%] bottom-[8.51%]">Treatment</span>
                </div>
              </div>
              <div className="frame483046 w-[343px] h-[173px] absolute top-[-61.4765625px] opacity-100 p-0 left-0">
                <div className="rectangle5745 w-[343px] h-[172px] absolute shadow-[1px_6px_18px_rgba(0,0,0,0.15)] bg-[rgba(255,255,255,0.8)] opacity-100 p-0 left-0 top-0" />
                <div className="frame483032 gap-2 absolute flex-col w-[101px] h-[127px] items-start opacity-100 p-0 left-[19px] top-[19.4765625px] flex">
                  <span className="chelmsfordUK font-['Volta_Modern_Display'] text-[15px] font-medium text-[#0d2741] text-left tracking-[0px]">Chelmsford, UK</span>
                  <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
                  <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
                  <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
                  <span className="loremIpsum font-['Volta_Modern_Display'] text-[15px] font-medium text-[#6e7e8e] text-left tracking-[0px]">Lorem, ipsum</span>
                </div>
                <div className="hover w-4 h-[17px] absolute opacity-100 p-0 left-[140px] top-[28.4765625px]">
                  <div className="rectangle5742 absolute w-[7.06px] h-[1.81px] bg-white opacity-100 p-0 left-[39.53%] right-[16.33%] top-[85.86%] bottom-[3.51%]" />
                  <div className="rectangle5736 absolute w-[1.95px] h-[14.16px] bg-white opacity-100 p-0 left-[33.42%] right-[54.38%] top-[6.09%] bottom-[10.62%]" />
                  <div className="rectangle5737 absolute w-[6.91px] h-[11.39px] bg-white opacity-100 p-0 left-[41.29%] right-[15.5%] top-[28.36%] bottom-[4.61%]" />
                  <div className="rectangle5738 absolute w-[3.73px] h-[7.46px] bg-white opacity-100 p-0 left-[70.1%] right-[6.61%] top-[37.58%] bottom-[18.51%]" />
                  <div className="rectangle5739 absolute w-[2.28px] h-[3.28px] bg-white opacity-100 p-0 left-[6.45%] right-[79.29%] top-[42.58%] bottom-[38.12%]" />
                  <div className="rectangle5740 absolute w-[2.89px] h-[4.49px] bg-white opacity-100 p-0 left-[19.18%] right-[62.75%] top-[48.67%] bottom-[24.93%]" />
                  <div className="rectangle5741 absolute w-[2.76px] h-[1.09px] bg-white opacity-100 p-0 left-[25.71%] right-[57.05%] top-[75.08%] bottom-[18.51%]" />
                  <img src="/images/image246.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image246 absolute h-[17px] w-4 opacity-100 object-cover p-0 inset-[0%]" />
                </div>
              </div>
            </div>
            <div className="viewMore gap-2 flex-col w-[343px] items-start opacity-100 p-0 flex">
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
              <div className="content gap-2 flex-row w-[405px] items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8.47461H0V6.47461H6V0.474609H8V6.47461H14V8.47461H8V14.4746H6V8.47461Z" fill="#212121" />
                  </svg>
                </div>
                <span className="viewMoreFilters font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#212121] text-left tracking-[0px]">View more filters</span>
              </div>
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
            </div>
            <div className="filtersList gap-4 flex-col w-[343px] items-start opacity-100 p-0 flex">
              <div className="filters gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <span className="filterList font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-[204px]">Filter List</span>
              </div>
              <div className="filters gap-4 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="row1 gap-4 flex-col w-[164px] items-start opacity-100 p-0 flex">
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-32 flex-1 min-w-0">Filter Option</span>
                  </div>
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-32 flex-1 min-w-0">Filter Option</span>
                  </div>
                </div>
                <div className="row2 gap-4 flex-col w-[163px] items-start opacity-100 p-0 flex">
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[127px] flex-1 min-w-0">Filter Option</span>
                  </div>
                  <div className="checklist gap-3 flex-row items-center w-full opacity-100 p-0 flex">
                    <div className="checkbox gap-2.5 flex-row items-center opacity-100 p-0 flex">
                      <div className="checkboxDraftCheckboxSelected w-6 h-6 relative opacity-100 p-0">
                        <div className="rectangle3818 absolute w-6 h-6 border rounded opacity-100 p-0 border-[rgba(0,0,0,0.87)] inset-[0%]" />
                      </div>
                    </div>
                    <span className="filterOption font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[127px] flex-1 min-w-0">Filter Option</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(state == "Map" && size == "S") && <>
    <div className="c61MapSearchAnd gap-5 absolute flex-col w-[375px] items-center bg-[#eeeeee] opacity-100 px-0 py-8 left-[2850px] top-[39px] filter flex">
      <div className="content gap-5 flex-col items-start w-full opacity-100 px-4 py-0 flex">
        <div className="search gap-6 flex-col w-[343px] items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[343px]">Patient location</span>
          <div className="search gap-1.5 flex-col w-[343px] items-start opacity-100 p-0 flex">
            <div className="type gap-[186px] flex-row w-[343px] items-center opacity-100 p-0 flex">
              <div className="type gap-2 flex-row w-[97px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="location font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px]">Chelmsford</span>
              </div>
              <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 14.7383L0 13.3383L5.6 7.73828L0 2.13828L1.4 0.738281L7 6.33828L12.6 0.738281L14 2.13828L8.4 7.73828L14 13.3383L12.6 14.7383L7 9.13828L1.4 14.7383Z" fill="#BDBDBD" />
                  </svg>
                </div>
                <div className="interactiveIcons w-[30px] h-[29.47px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[30px] h-[29.47px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 22.7898L13.625 15.0527C13 15.5439 12.2812 15.9328 11.4688 16.2194C10.6562 16.5059 9.79167 16.6492 8.875 16.6492C6.60417 16.6492 4.68229 15.8765 3.10938 14.3311C1.53646 12.7857 0.75 10.8975 0.75 8.66641C0.75 6.43531 1.53646 4.54707 3.10938 3.00168C4.68229 1.45629 6.60417 0.683594 8.875 0.683594C11.1458 0.683594 13.0677 1.45629 14.6406 3.00168C16.2135 4.54707 17 6.43531 17 8.66641C17 9.56703 16.8542 10.4165 16.5625 11.2148C16.2708 12.013 15.875 12.7192 15.375 13.3333L23.25 21.0705L21.5 22.7898ZM8.875 14.193C10.4375 14.193 11.7656 13.6557 12.8594 12.5811C13.9531 11.5064 14.5 10.2016 14.5 8.66641C14.5 7.13125 13.9531 5.82637 12.8594 4.75176C11.7656 3.67715 10.4375 3.13984 8.875 3.13984C7.3125 3.13984 5.98438 3.67715 4.89062 4.75176C3.79688 5.82637 3.25 7.13125 3.25 8.66641C3.25 10.2016 3.79688 11.5064 4.89062 12.5811C5.98438 13.6557 7.3125 14.193 8.875 14.193Z" fill="#212121" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="search w-[343px] h-px relative bg-[#212121] opacity-100 p-0 underline" />
          </div>
        </div>
        <div className="filters gap-5 flex-col w-[343px] items-start opacity-100 p-0 flex">
          <div className="titleAndClear gap-0 flex-row items-center w-full opacity-100 p-0 flex">
            <span className="filters font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[295px] flex-1 min-w-0">Filters</span>
            <span className="resetAll font-['Volta_Modern_Display'] text-[13px] font-medium text-[#757575] text-right tracking-[0px]">Reset all</span>
          </div>
          <div className="content gap-7 flex-col w-[343px] items-start opacity-100 p-0 flex">
            <div className="featured gap-2 flex-col w-[343px] items-start opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-left tracking-[0px] w-[343px]">Type of treatment</span>
              <div className="filters gap-4 flex-row items-start opacity-100 p-0 flex">
                <div className="filters w-[164px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[164px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-[19.07px] h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-[19.07px] h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.04869 7.30729H0.28125V5.64062H5.04869V0.640625H6.63784V5.64062H11.4053V7.30729H6.63784V12.3073H5.04869V7.30729Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[57.66%] top-[70.21%] bottom-[8.51%]">Therapy</span>
                </div>
                <div className="component53 w-[163px] h-[94px] relative opacity-100 p-0">
                  <div className="bg absolute w-[163px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
                  <div className="interactiveIcons absolute w-[18.95px] h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
                    <div className="boundingBox absolute w-[18.95px] h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                    <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.15244 7.30729H0.414062V5.64062H5.15244V0.640625H6.73189V5.64062H11.4703V7.30729H6.73189V12.3073H5.15244V7.30729Z" fill="#1C1B1F" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[49.46%] top-[70.21%] bottom-[8.51%]">Treatment</span>
                </div>
              </div>
            </div>
            <div className="viewMore gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
              <div className="content gap-2 flex-row items-center w-full opacity-100 p-0 flex">
                <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8.47461H0V6.47461H6V0.474609H8V6.47461H14V8.47461H8V14.4746H6V8.47461Z" fill="#212121" />
                  </svg>
                </div>
                <span className="viewMoreFilters font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#212121] text-left tracking-[0px] w-[311px] flex-1 min-w-0">View more filters</span>
              </div>
              <div className="breaker w-full h-px relative bg-[#bdbdbd] opacity-100 p-0" />
            </div>
          </div>
        </div>
        <div className="cTA gap-3 flex-row w-[343px] h-12 items-center bg-[#0d2741] opacity-100 pl-3 pr-4 py-3 rounded-sm flex">
          <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={18} height={13} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 12.109V10.6091H17.5V12.109H0.5ZM0.5 7.22442V5.72447H17.5V7.22442H0.5ZM0.5 2.33982V0.839844H17.5V2.33982H0.5Z" fill="white" />
            </svg>
          </div>
          <span className="copy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">View as list</span>
        </div>
        <div className="facilities gap-5 flex-col items-start opacity-100 pt-2 pb-0 px-0 flex">
          <div className="title gap-[99px] flex-row items-start opacity-100 p-0 flex">
            <span className="facilities font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px] w-[204px]">Facilities</span>
            <span className="3Total font-['Volta_Modern_Display'] text-[15px] font-medium text-[#424242] text-right tracking-[0px]">3 total</span>
          </div>
        </div>
      </div>
      <div className="frame483083 gap-[-234px] flex-col items-center opacity-100 p-0 flex">
        <div className="map w-[375px] h-[658px] relative opacity-100 p-0">
          <div className="frame483045 w-[375px] h-[657px] absolute overflow-hidden opacity-100 p-0 left-0 top-px">
            <svg className="radius" width={151} height={152} viewBox="0 0 151 152" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_5_80921)">
                <circle cx="75.5" cy="72.4043" r="10.5" fill="#0D2741" />
              </g>
              <defs>
                <filter id="filter0_d_5_80921" x={0} y="0.904297" width={151} height={151} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation="32.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_80921" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_80921" result="shape" />
                </filter>
              </defs>
            </svg>
            <img src="/images/map.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="map w-[375px] h-[657px] absolute opacity-100 object-cover p-0 left-0 top-0" />
            <svg width={151} height={152} viewBox="0 0 151 152" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_5_80924)">
                <circle cx="75.5" cy="71.9746" r="10.5" fill="#0D2741" />
              </g>
              <defs>
                <filter id="filter0_d_5_80924" x={0} y="0.474609" width={151} height={151} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation="32.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_80924" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_80924" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <svg className="mapPin" width={33} height={43} viewBox="0 0 33 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 42.3805C16.5692 42.2713 16.6047 42.2199 16.6448 42.1723C20.78 37.2953 24.9571 32.4528 29.04 27.5309C32.9138 22.8621 33.9394 17.5276 32.1439 11.7553C30.1804 5.4461 24.4466 0.979846 17.8571 0.443036C13.8535 0.116282 10.1626 1.07134 6.92053 3.45197C1.92121 7.12282 -0.372676 12.1287 0.0491447 18.3006C0.288052 21.8034 1.6543 24.9076 3.93885 27.5953C7.2061 31.438 10.4631 35.2899 13.7257 39.1372C14.6272 40.1996 15.5315 41.2602 16.4871 42.3814V42.3805Z" fill="white" />
            <path d="M16.4871 42.3805C15.5324 41.2584 14.6272 40.1987 13.7257 39.1363C10.4631 35.289 7.2061 31.438 3.93885 27.5944C1.6543 24.9076 0.288052 21.8034 0.0491452 18.3006C-0.372675 12.1287 1.92121 7.12286 6.9196 3.45201C10.1626 1.07044 13.8526 0.116321 17.8571 0.443075C24.4466 0.980819 30.1804 5.44614 32.1439 11.7562C33.9404 17.5286 32.9138 22.8621 29.04 27.5319C24.9571 32.4528 20.78 37.2953 16.6448 42.1733C16.6047 42.2209 16.5692 42.2722 16.4871 42.3815V42.3805Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.8809" r="8.5" fill="white" />
          </svg>
          <svg className="mapPin" width={33} height={43} viewBox="0 0 33 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 42.4742C16.5692 42.365 16.6047 42.3137 16.6448 42.266C20.78 37.389 24.9571 32.5465 29.04 27.6247C32.9138 22.9558 33.9394 17.6213 32.1439 11.849C30.1804 5.53985 24.4466 1.0736 17.8571 0.536786C13.8535 0.210032 10.1626 1.16509 6.92053 3.54572C1.92121 7.21657 -0.372676 12.2224 0.0491447 18.3943C0.288052 21.8972 1.6543 25.0013 3.93885 27.6891C7.2061 31.5317 10.4631 35.3837 13.7257 39.231C14.6272 40.2934 15.5315 41.3539 16.4871 42.4752V42.4742Z" fill="white" />
            <path d="M16.4871 42.4743C15.5324 41.3521 14.6272 40.2925 13.7257 39.2301C10.4631 35.3828 7.2061 31.5318 3.93885 27.6882C1.6543 25.0013 0.288052 21.8972 0.0491452 18.3944C-0.372675 12.2225 1.92121 7.21661 6.9196 3.54576C10.1626 1.16419 13.8526 0.210071 17.8571 0.536825C24.4466 1.07457 30.1804 5.53989 32.1439 11.85C33.9404 17.6223 32.9138 22.9559 29.04 27.6256C24.9571 32.5466 20.78 37.3891 16.6448 42.267C16.6047 42.3146 16.5692 42.366 16.4871 42.4752V42.4743Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.9746" r="8.5" fill="white" />
          </svg>
          <svg className="mapPin" width={33} height={43} viewBox="0 0 33 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 42.4742C16.5692 42.365 16.6047 42.3137 16.6448 42.266C20.78 37.389 24.9571 32.5465 29.04 27.6247C32.9138 22.9558 33.9394 17.6213 32.1439 11.849C30.1804 5.53985 24.4466 1.0736 17.8571 0.536786C13.8535 0.210032 10.1626 1.16509 6.92053 3.54572C1.92121 7.21657 -0.372676 12.2224 0.0491447 18.3943C0.288052 21.8972 1.6543 25.0013 3.93885 27.6891C7.2061 31.5317 10.4631 35.3837 13.7257 39.231C14.6272 40.2934 15.5315 41.3539 16.4871 42.4752V42.4742Z" fill="white" />
            <path d="M16.4871 42.4743C15.5324 41.3521 14.6272 40.2925 13.7257 39.2301C10.4631 35.3828 7.2061 31.5318 3.93885 27.6882C1.6543 25.0013 0.288052 21.8972 0.0491452 18.3944C-0.372675 12.2225 1.92121 7.21661 6.9196 3.54576C10.1626 1.16419 13.8526 0.210071 17.8571 0.536825C24.4466 1.07457 30.1804 5.53989 32.1439 11.85C33.9404 17.6223 32.9138 22.9559 29.04 27.6256C24.9571 32.5466 20.78 37.3891 16.6448 42.267C16.6047 42.3146 16.5692 42.366 16.4871 42.4752V42.4743Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.9746" r="8.5" fill="white" />
          </svg>
          <svg className="mapPin" width={33} height={43} viewBox="0 0 33 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 42.4742C16.5692 42.365 16.6047 42.3137 16.6448 42.266C20.78 37.389 24.9571 32.5465 29.04 27.6247C32.9138 22.9558 33.9394 17.6213 32.1439 11.849C30.1804 5.53985 24.4466 1.0736 17.8571 0.536786C13.8535 0.210032 10.1626 1.16509 6.92053 3.54572C1.92121 7.21657 -0.372676 12.2224 0.0491447 18.3943C0.288052 21.8972 1.6543 25.0013 3.93885 27.6891C7.2061 31.5317 10.4631 35.3837 13.7257 39.231C14.6272 40.2934 15.5315 41.3539 16.4871 42.4752V42.4742Z" fill="white" />
            <path d="M16.4871 42.4743C15.5324 41.3521 14.6272 40.2925 13.7257 39.2301C10.4631 35.3828 7.2061 31.5318 3.93885 27.6882C1.6543 25.0013 0.288052 21.8972 0.0491452 18.3944C-0.372675 12.2225 1.92121 7.21661 6.9196 3.54576C10.1626 1.16419 13.8526 0.210071 17.8571 0.536825C24.4466 1.07457 30.1804 5.53989 32.1439 11.85C33.9404 17.6223 32.9138 22.9559 29.04 27.6256C24.9571 32.5466 20.78 37.3891 16.6448 42.267C16.6047 42.3146 16.5692 42.366 16.4871 42.4752V42.4743Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.9746" r="8.5" fill="white" />
          </svg>
          <svg className="mapPin" width={33} height={43} viewBox="0 0 33 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 42.4742C16.5692 42.365 16.6047 42.3137 16.6448 42.266C20.78 37.389 24.9571 32.5465 29.04 27.6247C32.9138 22.9558 33.9394 17.6213 32.1439 11.849C30.1804 5.53985 24.4466 1.0736 17.8571 0.536786C13.8535 0.210032 10.1626 1.16509 6.92053 3.54572C1.92121 7.21657 -0.372676 12.2224 0.0491447 18.3943C0.288052 21.8972 1.6543 25.0013 3.93885 27.6891C7.2061 31.5317 10.4631 35.3837 13.7257 39.231C14.6272 40.2934 15.5315 41.3539 16.4871 42.4752V42.4742Z" fill="white" />
            <path d="M16.4871 42.4743C15.5324 41.3521 14.6272 40.2925 13.7257 39.2301C10.4631 35.3828 7.2061 31.5318 3.93885 27.6882C1.6543 25.0013 0.288052 21.8972 0.0491452 18.3944C-0.372675 12.2225 1.92121 7.21661 6.9196 3.54576C10.1626 1.16419 13.8526 0.210071 17.8571 0.536825C24.4466 1.07457 30.1804 5.53989 32.1439 11.85C33.9404 17.6223 32.9138 22.9559 29.04 27.6256C24.9571 32.5466 20.78 37.3891 16.6448 42.267C16.6047 42.3146 16.5692 42.366 16.4871 42.4752V42.4743Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.9746" r="8.5" fill="white" />
          </svg>
        </div>
        <div className="c62FacilityCard gap-6 flex-col w-[343px] items-start rounded bg-white opacity-100 p-5 !hidden flex">
          <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[258.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
            <div className="distance gap-1 flex-row items-center opacity-100 pt-1 pb-0 px-0 flex">
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
            <div className="frame483006 gap-1 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
              <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
                <span className="contactInformation font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Contact &amp; Information</span>
                <div className="frame483007 gap-1 flex-row items-center opacity-100 p-0 flex">
                  <div className="interactiveIcons w-7 h-7 relative opacity-100 p-0">
                    <div className="boundingBox absolute w-7 h-7 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}