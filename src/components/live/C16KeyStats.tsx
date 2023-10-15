import React from 'react';

export function C16KeyStats(props){
	const {
    size = "L(LHN)",
    icons = "Yes"
  } = props;
  return (
      <>
  {(size == "S" && icons == "Yes") && <>
    <div className="c16KeyStats gap-9 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-10 pb-16 px-4 left-[4343px] top-8 flex">
      <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-full">The reported incidence of NETs has increased:</span>
        <div className="stat gap-2 flex-col items-start w-full opacity-100 pt-10 pb-0 px-0 flex">
          <div className="allContent gap-4 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="dashboard w-11 h-11 relative opacity-100 p-0">
              <div className="boundingBox absolute w-11 h-11 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={34} height={30} viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.46152 29.6654C2.61773 29.6654 1.91319 29.3827 1.34792 28.8174C0.782639 28.2522 0.5 27.5476 0.5 26.7038V8.79355C0.5 7.94976 0.782639 7.24523 1.34792 6.67995C1.91319 6.11467 2.61773 5.83203 3.46152 5.83203H11.5V3.29355C11.5 2.44976 11.7826 1.74523 12.3479 1.17995C12.9132 0.61467 13.6177 0.332031 14.4615 0.332031H19.5385C20.3823 0.332031 21.0868 0.61467 21.6521 1.17995C22.2174 1.74523 22.5 2.44976 22.5 3.29355V5.83203H30.5385C31.3823 5.83203 32.0868 6.11467 32.6521 6.67995C33.2174 7.24523 33.5 7.94976 33.5 8.79355V26.7038C33.5 27.5476 33.2174 28.2522 32.6521 28.8174C32.0868 29.3827 31.3823 29.6654 30.5385 29.6654H3.46152ZM13.3333 5.83203H20.6667V3.29355C20.6667 3.01149 20.5492 2.75295 20.3141 2.51792C20.0791 2.28288 19.8205 2.16536 19.5385 2.16536H14.4615C14.1795 2.16536 13.9209 2.28288 13.6859 2.51792C13.4508 2.75295 13.3333 3.01149 13.3333 3.29355V5.83203ZM31.6667 19.582H20.6667V22.332H13.3333V19.582H2.33333V26.7038C2.33333 26.9859 2.45085 27.2444 2.68588 27.4795C2.92095 27.7145 3.17949 27.832 3.46152 27.832H30.5385C30.8205 27.832 31.0791 27.7145 31.3141 27.4795C31.5491 27.2444 31.6667 26.9859 31.6667 26.7038V19.582ZM15.1667 20.4987H18.8333V16.832H15.1667V20.4987ZM2.33333 17.7487H13.3333V14.9987H20.6667V17.7487H31.6667V8.79355C31.6667 8.51152 31.5491 8.25298 31.3141 8.01791C31.0791 7.78288 30.8205 7.66536 30.5385 7.66536H3.46152C3.17949 7.66536 2.92095 7.78288 2.68588 8.01791C2.45085 8.25298 2.33333 8.51152 2.33333 8.79355V17.7487Z" fill="#212121" />
              </svg>
            </div>
            <div className="statAndSub gap-1 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="698100000 font-['Volta_Modern_Display'] text-4xl font-normal text-[#212121] text-left tracking-[-0.35px] w-full">6.98/100,000</span>
              <span className="title font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">New cases/year as of 20124</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="stat gap-2 flex-col items-start w-full opacity-100 pt-10 pb-0 px-0 flex">
          <div className="allContent gap-4 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="dashboard w-11 h-11 relative opacity-100 p-0">
              <div className="boundingBox absolute w-11 h-11 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={22} height={33} viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0039 32.4777C8.87747 32.4777 7.06489 31.7283 5.56614 30.2295C4.06736 28.7308 3.31797 26.9182 3.31797 24.7917V8.53854C2.49767 8.53854 1.79902 8.24855 1.22201 7.66857C0.644966 7.0886 0.356445 6.3914 0.356445 5.57697V3.10903C0.356445 2.2946 0.646433 1.5974 1.22641 1.01742C1.80638 0.437449 2.50357 0.147461 3.31797 0.147461H18.6898C19.5042 0.147461 20.2014 0.437449 20.7814 1.01742C21.3614 1.5974 21.6513 2.2946 21.6513 3.10903V5.57697C21.6513 6.3914 21.3614 7.0886 20.7814 7.66857C20.2014 8.24855 19.5042 8.53854 18.6898 8.53854L18.6545 25.2853C18.537 27.3043 17.7495 29.0078 16.292 30.3958C14.8345 31.7837 13.0718 32.4777 11.0039 32.4777ZM3.31797 6.7052H18.6898C19.0189 6.7052 19.2892 6.59942 19.5007 6.38785C19.7122 6.17632 19.818 5.90602 19.818 5.57697V3.10903C19.818 2.77997 19.7122 2.50968 19.5007 2.29815C19.2892 2.08661 19.0189 1.98084 18.6898 1.98084H3.31797C2.98891 1.98084 2.71862 2.08661 2.50708 2.29815C2.29555 2.50968 2.18978 2.77997 2.18978 3.10903V5.57697C2.18978 5.90602 2.29555 6.17632 2.50708 6.38785C2.71862 6.59942 2.98891 6.7052 3.31797 6.7052ZM11.0039 30.6443C12.4776 30.6443 13.7527 30.1713 14.8292 29.2252C15.9057 28.2792 16.545 27.1069 16.7472 25.7084H11.9206V23.8751H16.8564V20.2084H11.9206V18.3751H16.8564V14.7084H11.9206V12.8751H16.8564V8.53854H5.15135V24.7917C5.15135 26.4174 5.72034 27.7993 6.85832 28.9373C7.99633 30.0753 9.37819 30.6443 11.0039 30.6443Z" fill="#212121" />
              </svg>
            </div>
            <div className="statAndSub gap-1 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="171000 font-['Volta_Modern_Display'] text-4xl font-normal text-[#212121] text-left tracking-[-0.35px] w-full">171,000</span>
              <span className="title font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Projected people living with the disease in the United States as of 2014</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="stat gap-2 flex-col items-start w-full opacity-100 pt-10 pb-0 px-0 flex">
          <div className="allContent gap-4 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="dashboard w-11 h-11 relative opacity-100 p-0">
              <div className="boundingBox absolute w-11 h-11 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={27} height={27} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9287 26.0601V9.56013H0.428711V7.7268H18.762V26.0601H16.9287ZM24.262 18.762V2.26204H7.76204V0.428711H26.0954V18.762H24.262Z" fill="#212121" />
              </svg>
            </div>
            <div className="statAndSub gap-1 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="64FoldIncrease font-['Volta_Modern_Display'] text-4xl font-normal text-[#212121] text-left tracking-[-0.35px] w-full">6.4-fold increase</span>
              <span className="title font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Over the last few decades(from 1973 to 2012)4</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
      </div>
    </div>
  </>}
  {(size == "Size8" && icons == "No") && <>
    <div className="c16KeyStats gap-9 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-10 pb-16 px-4 left-[4343px] top-[968px] flex">
      <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-full">The reported incidence of NETs has increased:</span>
        <div className="stat gap-2 flex-col items-start w-full opacity-100 pt-10 pb-0 px-0 flex">
          <div className="allContent gap-4 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="statAndSub gap-1 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="698100000 font-['Volta_Modern_Display'] text-4xl font-normal text-[#212121] text-left tracking-[-0.35px] w-full">6.98/100,000</span>
              <span className="title font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">New cases/year as of 20124</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="stat gap-2 flex-col items-start w-full opacity-100 pt-10 pb-0 px-0 flex">
          <div className="allContent gap-4 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="statAndSub gap-1 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="171000 font-['Volta_Modern_Display'] text-4xl font-normal text-[#212121] text-left tracking-[-0.35px] w-full">171,000</span>
              <span className="title font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Projected people living with the disease in the United States as of 2014</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
        <div className="stat gap-2 flex-col items-start w-full opacity-100 pt-10 pb-0 px-0 flex">
          <div className="allContent gap-4 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="statAndSub gap-1 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="64FoldIncrease font-['Volta_Modern_Display'] text-4xl font-normal text-[#212121] text-left tracking-[-0.35px] w-full">6.4-fold increase</span>
              <span className="title font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-full">Over the last few decades(from 1973 to 2012)4</span>
            </div>
          </div>
          <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && icons == "Yes") && <>
    <div className="c16KeyStats gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 pt-16 pb-24 px-16 left-[31px] top-8 flex">
      <div className="frame482576 gap-16 flex-col items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[1036px]">The reported incidence of NETs has increased:</span>
        <div className="stats gap-16 flex-col w-[1036px] items-start opacity-100 p-0 flex">
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row w-[1036px] items-end opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <div className="dashboard w-14 h-14 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-14 h-14 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={42} height={38} viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.76921 37.6654C2.69529 37.6654 1.79861 37.3056 1.07917 36.5862C0.359722 35.8668 0 34.9701 0 33.8962V11.1012C0 10.0273 0.359722 9.13064 1.07917 8.4112C1.79861 7.69175 2.69529 7.33203 3.76921 7.33203H14V4.10124C14 3.02732 14.3597 2.13064 15.0792 1.4112C15.7986 0.691753 16.6953 0.332031 17.7692 0.332031H24.2308C25.3047 0.332031 26.2014 0.691753 26.9208 1.4112C27.6403 2.13064 28 3.02732 28 4.10124V7.33203H38.2308C39.3047 7.33203 40.2014 7.69175 40.9208 8.4112C41.6403 9.13064 42 10.0273 42 11.1012V33.8962C42 34.9701 41.6403 35.8668 40.9208 36.5862C40.2014 37.3056 39.3047 37.6654 38.2308 37.6654H3.76921ZM16.3333 7.33203H25.6667V4.10124C25.6667 3.74226 25.5171 3.4132 25.218 3.11407C24.9188 2.81493 24.5897 2.66536 24.2308 2.66536H17.7692C17.4103 2.66536 17.0812 2.81493 16.782 3.11407C16.4829 3.4132 16.3333 3.74226 16.3333 4.10124V7.33203ZM39.6667 24.832H25.6667V28.332H16.3333V24.832H2.33333V33.8962C2.33333 34.2551 2.4829 34.5842 2.78203 34.8833C3.08121 35.1825 3.41026 35.332 3.76921 35.332H38.2308C38.5897 35.332 38.9188 35.1825 39.218 34.8833C39.5171 34.5842 39.6667 34.2551 39.6667 33.8962V24.832ZM18.6667 25.9987H23.3333V21.332H18.6667V25.9987ZM2.33333 22.4987H16.3333V18.9987H25.6667V22.4987H39.6667V11.1012C39.6667 10.7423 39.5171 10.4132 39.218 10.1141C38.9188 9.81493 38.5897 9.66536 38.2308 9.66536H3.76921C3.41026 9.66536 3.08121 9.81493 2.78203 10.1141C2.4829 10.4132 2.33333 10.7423 2.33333 11.1012V22.4987Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[506px] flex-1 min-w-0">6.98/100,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[418px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[418px] flex-1 min-w-0">New cases/year as of 20124</span>
              </div>
            </div>
            <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row w-[1036px] items-end opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <div className="dashboard w-14 h-14 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-14 h-14 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={28} height={42} viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0044 41.6983C11.2981 41.6983 8.99114 40.7445 7.08364 38.837C5.1761 36.9295 4.22233 34.6226 4.22233 31.9162V11.2303C3.17832 11.2303 2.28913 10.8613 1.55475 10.1231C0.820333 9.38496 0.453125 8.49761 0.453125 7.46106V4.32005C0.453125 3.2835 0.8222 2.39616 1.56035 1.65801C2.2985 0.919857 3.18583 0.550781 4.22233 0.550781H23.7865C24.823 0.550781 25.7104 0.919857 26.4485 1.65801C27.1867 2.39616 27.5557 3.2835 27.5557 4.32005V7.46106C27.5557 8.49761 27.1867 9.38496 26.4485 10.1231C25.7104 10.8613 24.823 11.2303 23.7865 11.2303L23.7416 32.5444C23.592 35.1141 22.5898 37.2821 20.7348 39.0486C18.8797 40.8151 16.6363 41.6983 14.0044 41.6983ZM4.22233 8.897H23.7865C24.2053 8.897 24.5493 8.76236 24.8185 8.4931C25.0878 8.22387 25.2224 7.87986 25.2224 7.46106V4.32005C25.2224 3.90125 25.0878 3.55724 24.8185 3.28802C24.5493 3.01879 24.2053 2.88417 23.7865 2.88417H4.22233C3.80354 2.88417 3.45953 3.01879 3.1903 3.28802C2.92107 3.55724 2.78646 3.90125 2.78646 4.32005V7.46106C2.78646 7.87986 2.92107 8.22387 3.1903 8.4931C3.45953 8.76236 3.80354 8.897 4.22233 8.897ZM14.0044 39.3649C15.8801 39.3649 17.5029 38.7629 18.873 37.5588C20.2431 36.3548 21.0568 34.8628 21.3141 33.0829H15.1711V30.7495H21.4531V26.0829H15.1711V23.7495H21.4531V19.0829H15.1711V16.7495H21.4531V11.2303H6.55573V31.9162C6.55573 33.9853 7.27989 35.744 8.72823 37.1924C10.1766 38.6407 11.9353 39.3649 14.0044 39.3649Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[506px] flex-1 min-w-0">171,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[418px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[418px] flex-1 min-w-0">Projected people living with the disease in the United States as of 2014</span>
              </div>
            </div>
            <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row w-[1036px] items-end opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <div className="dashboard w-14 h-14 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-14 h-14 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 32.6218V11.6218H0V9.28848H23.3333V32.6218H21ZM30.3333 23.3333V2.33333H9.33333V0H32.6667V23.3333H30.3333Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[506px] flex-1 min-w-0">6.4-fold increase</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[418px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[418px] flex-1 min-w-0">Over the last few decades(from 1973 to 2012)4</span>
              </div>
            </div>
            <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "Size7" && icons == "No") && <>
    <div className="c16KeyStats gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 pt-16 pb-24 px-16 left-[31px] top-[968px] flex">
      <div className="frame482576 gap-24 flex-col items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[1036px]">The reported incidence of NETs has increased:</span>
        <div className="stats gap-16 flex-col w-[1036px] items-start opacity-100 p-0 flex">
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row w-[1036px] items-end opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[594px] flex-1 min-w-0">6.98/100,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[418px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[418px] flex-1 min-w-0">New cases/year as of 20124</span>
              </div>
            </div>
            <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row w-[1036px] items-end opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[594px] flex-1 min-w-0">171,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[418px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[418px] flex-1 min-w-0">Projected people living with the disease in the United States as of 2014</span>
              </div>
            </div>
            <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row w-[1036px] items-end opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[594px] flex-1 min-w-0">6.4-fold increase</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[418px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[418px] flex-1 min-w-0">Over the last few decades(from 1973 to 2012)4</span>
              </div>
            </div>
            <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && icons == "Yes") && <>
    <div className="c16KeyStats gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 pt-16 pb-24 px-16 left-[1545px] top-8 flex">
      <div className="frame482577 gap-24 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px]">The reported incidence of NETs has increased:</span>
        <div className="stats gap-16 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <div className="dashboard w-14 h-14 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-14 h-14 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={42} height={38} viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.76921 37.6654C2.69529 37.6654 1.79861 37.3056 1.07917 36.5862C0.359722 35.8668 0 34.9701 0 33.8962V11.1012C0 10.0273 0.359722 9.13064 1.07917 8.4112C1.79861 7.69175 2.69529 7.33203 3.76921 7.33203H14V4.10124C14 3.02732 14.3597 2.13064 15.0792 1.4112C15.7986 0.691753 16.6953 0.332031 17.7692 0.332031H24.2308C25.3047 0.332031 26.2014 0.691753 26.9208 1.4112C27.6403 2.13064 28 3.02732 28 4.10124V7.33203H38.2308C39.3047 7.33203 40.2014 7.69175 40.9208 8.4112C41.6403 9.13064 42 10.0273 42 11.1012V33.8962C42 34.9701 41.6403 35.8668 40.9208 36.5862C40.2014 37.3056 39.3047 37.6654 38.2308 37.6654H3.76921ZM16.3333 7.33203H25.6667V4.10124C25.6667 3.74226 25.5171 3.4132 25.218 3.11407C24.9188 2.81493 24.5897 2.66536 24.2308 2.66536H17.7692C17.4103 2.66536 17.0812 2.81493 16.782 3.11407C16.4829 3.4132 16.3333 3.74226 16.3333 4.10124V7.33203ZM39.6667 24.832H25.6667V28.332H16.3333V24.832H2.33333V33.8962C2.33333 34.2551 2.4829 34.5842 2.78203 34.8833C3.08121 35.1825 3.41026 35.332 3.76921 35.332H38.2308C38.5897 35.332 38.9188 35.1825 39.218 34.8833C39.5171 34.5842 39.6667 34.2551 39.6667 33.8962V24.832ZM18.6667 25.9987H23.3333V21.332H18.6667V25.9987ZM2.33333 22.4987H16.3333V18.9987H25.6667V22.4987H39.6667V11.1012C39.6667 10.7423 39.5171 10.4132 39.218 10.1141C38.9188 9.81493 38.5897 9.66536 38.2308 9.66536H3.76921C3.41026 9.66536 3.08121 9.81493 2.78203 10.1141C2.4829 10.4132 2.33333 10.7423 2.33333 11.1012V22.4987Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[506px] flex-1 min-w-0">6.98/100,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[694px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[694px] flex-1 min-w-0">New cases/year as of 20124</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <div className="dashboard w-14 h-14 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-14 h-14 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={28} height={42} viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0044 41.6983C11.2981 41.6983 8.99114 40.7445 7.08364 38.837C5.1761 36.9295 4.22233 34.6226 4.22233 31.9162V11.2303C3.17832 11.2303 2.28913 10.8613 1.55475 10.1231C0.820333 9.38496 0.453125 8.49761 0.453125 7.46106V4.32005C0.453125 3.2835 0.8222 2.39616 1.56035 1.65801C2.2985 0.919857 3.18583 0.550781 4.22233 0.550781H23.7865C24.823 0.550781 25.7104 0.919857 26.4485 1.65801C27.1867 2.39616 27.5557 3.2835 27.5557 4.32005V7.46106C27.5557 8.49761 27.1867 9.38496 26.4485 10.1231C25.7104 10.8613 24.823 11.2303 23.7865 11.2303L23.7416 32.5444C23.592 35.1141 22.5898 37.2821 20.7348 39.0486C18.8797 40.8151 16.6363 41.6983 14.0044 41.6983ZM4.22233 8.897H23.7865C24.2053 8.897 24.5493 8.76236 24.8185 8.4931C25.0878 8.22387 25.2224 7.87986 25.2224 7.46106V4.32005C25.2224 3.90125 25.0878 3.55724 24.8185 3.28802C24.5493 3.01879 24.2053 2.88417 23.7865 2.88417H4.22233C3.80354 2.88417 3.45953 3.01879 3.1903 3.28802C2.92107 3.55724 2.78646 3.90125 2.78646 4.32005V7.46106C2.78646 7.87986 2.92107 8.22387 3.1903 8.4931C3.45953 8.76236 3.80354 8.897 4.22233 8.897ZM14.0044 39.3649C15.8801 39.3649 17.5029 38.7629 18.873 37.5588C20.2431 36.3548 21.0568 34.8628 21.3141 33.0829H15.1711V30.7495H21.4531V26.0829H15.1711V23.7495H21.4531V19.0829H15.1711V16.7495H21.4531V11.2303H6.55573V31.9162C6.55573 33.9853 7.27989 35.744 8.72823 37.1924C10.1766 38.6407 11.9353 39.3649 14.0044 39.3649Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[506px] flex-1 min-w-0">171,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[694px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[694px] flex-1 min-w-0">Projected people living with the disease in the United States as of 2014</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <div className="dashboard w-14 h-14 relative opacity-100 p-0">
                  <div className="boundingBox absolute w-14 h-14 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 32.6218V11.6218H0V9.28848H23.3333V32.6218H21ZM30.3333 23.3333V2.33333H9.33333V0H32.6667V23.3333H30.3333Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[506px] flex-1 min-w-0">6.4-fold increase</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[694px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[694px] flex-1 min-w-0">Over the last few decades(from 1973 to 2012)4</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "Size6" && icons == "No") && <>
    <div className="c16KeyStats gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 pt-16 pb-24 px-16 left-[1545px] top-[968px] flex">
      <div className="frame482577 gap-24 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px]">The reported incidence of NETs has increased:</span>
        <div className="stats gap-16 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[594px] flex-1 min-w-0">6.98/100,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[694px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[694px] flex-1 min-w-0">New cases/year as of 20124</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[594px] flex-1 min-w-0">171,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[694px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[694px] flex-1 min-w-0">Projected people living with the disease in the United States as of 2014</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[594px] justify-center items-end opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[62px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[594px] flex-1 min-w-0">6.4-fold increase</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[694px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[694px] flex-1 min-w-0">Over the last few decades(from 1973 to 2012)4</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && icons == "Yes") && <>
    <div className="c16KeyStats gap-16 absolute flex-col w-[768px] items-start bg-white opacity-100 pt-10 pb-16 px-8 left-[3267px] top-8 flex">
      <div className="frame482578 gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">The reported incidence of NETs has increased:</span>
        <div className="stats gap-16 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[401px] justify-center items-end opacity-100 p-0 flex">
                <div className="dashboard w-[50px] h-[50px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[50px] h-[50px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={38} height={34} viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.61536 33.6654C2.65651 33.6654 1.8559 33.3442 1.21354 32.7018C0.571181 32.0595 0.25 31.2589 0.25 30.3V9.9474C0.25 8.98854 0.571181 8.18793 1.21354 7.54557C1.8559 6.90321 2.65651 6.58203 3.61536 6.58203H12.75V3.6974C12.75 2.73854 13.0712 1.93793 13.7135 1.29557C14.3559 0.653212 15.1565 0.332031 16.1154 0.332031H21.8846C22.8435 0.332031 23.6441 0.653212 24.2865 1.29557C24.9288 1.93793 25.25 2.73854 25.25 3.6974V6.58203H34.3846C35.3435 6.58203 36.1441 6.90321 36.7865 7.54557C37.4288 8.18793 37.75 8.98854 37.75 9.9474V30.3C37.75 31.2589 37.4288 32.0595 36.7865 32.7018C36.1441 33.3442 35.3435 33.6654 34.3846 33.6654H3.61536ZM14.8333 6.58203H23.1667V3.6974C23.1667 3.37687 23.0331 3.08307 22.766 2.81599C22.4989 2.54891 22.2051 2.41536 21.8846 2.41536H16.1154C15.7949 2.41536 15.5011 2.54891 15.234 2.81599C14.9669 3.08307 14.8333 3.37687 14.8333 3.6974V6.58203ZM35.6667 22.207H23.1667V25.332H14.8333V22.207H2.33333V30.3C2.33333 30.6205 2.46688 30.9143 2.73396 31.1814C3.00108 31.4485 3.29488 31.582 3.61536 31.582H34.3846C34.7051 31.582 34.9989 31.4485 35.266 31.1814C35.5331 30.9143 35.6667 30.6205 35.6667 30.3V22.207ZM16.9167 23.2487H21.0833V19.082H16.9167V23.2487ZM2.33333 20.1237H14.8333V16.9987H23.1667V20.1237H35.6667V9.9474C35.6667 9.62691 35.5331 9.33311 35.266 9.06599C34.9989 8.79891 34.7051 8.66537 34.3846 8.66537H3.61536C3.29488 8.66537 3.00108 8.79891 2.73396 9.06599C2.46688 9.33311 2.33333 9.62691 2.33333 9.9474V20.1237Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[52px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[319px] flex-1 min-w-0">6.98/100,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[279px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[279px] flex-1 min-w-0">New cases/year as of 20124</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[401px] justify-center items-end opacity-100 p-0 flex">
                <div className="dashboard w-[50px] h-[50px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[50px] h-[50px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={26} height={38} viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0037 37.5875C10.5873 37.5875 8.52753 36.7359 6.8244 35.0328C5.12124 33.3297 4.26966 31.2699 4.26966 28.8535V10.3839C3.33751 10.3839 2.54358 10.0544 1.88789 9.39535C1.23216 8.73629 0.904297 7.94401 0.904297 7.01853V4.21405C0.904297 3.28856 1.23383 2.49629 1.89289 1.83723C2.55195 1.17816 3.34421 0.848633 4.26966 0.848633H21.7377C22.6631 0.848633 23.4554 1.17816 24.1145 1.83723C24.7735 2.49629 25.103 3.28856 25.103 4.21405V7.01853C25.103 7.94401 24.7735 8.73629 24.1145 9.39535C23.4554 10.0544 22.6631 10.3839 21.7377 10.3839L21.6976 29.4144C21.564 31.7087 20.6691 33.6445 19.0129 35.2217C17.3566 36.7989 15.3536 37.5875 13.0037 37.5875ZM4.26966 8.30061H21.7377C22.1116 8.30061 22.4188 8.1804 22.6591 7.93999C22.8995 7.6996 23.0197 7.39245 23.0197 7.01853V4.21405C23.0197 3.84012 22.8995 3.53297 22.6591 3.29259C22.4188 3.05221 22.1116 2.93202 21.7377 2.93202H4.26966C3.89574 2.93202 3.58858 3.05221 3.3482 3.29259C3.10782 3.53297 2.98763 3.84012 2.98763 4.21405V7.01853C2.98763 7.39245 3.10782 7.6996 3.3482 7.93999C3.58858 8.1804 3.89574 8.30061 4.26966 8.30061ZM13.0037 35.5041C14.6784 35.5041 16.1273 34.9666 17.3506 33.8916C18.5739 32.8165 19.3004 31.4843 19.5301 29.8951H14.0453V27.8118H19.6543V23.6451H14.0453V21.5618H19.6543V17.3951H14.0453V15.3118H19.6543V10.3839H6.35305V28.8535C6.35305 30.7009 6.99963 32.2712 8.29279 33.5644C9.58598 34.8575 11.1563 35.5041 13.0037 35.5041Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[52px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[319px] flex-1 min-w-0">171,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[279px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[279px] flex-1 min-w-0">Projected people living with the disease in the United States as of 2014</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[401px] items-start opacity-100 p-0 flex">
                <div className="dashboard w-[50px] h-[50px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[50px] h-[50px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.4639 29.8405V11.0905H0.713867V9.00715H21.5472V29.8405H19.4639ZM27.7972 21.5472V2.7972H9.0472V0.713867H29.8805V21.5472H27.7972Z" fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[52px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[319px] flex-1 min-w-0">6.4-fold increase</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[279px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[279px] flex-1 min-w-0">Over the last few decades(from 1973 to 2012)4</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "Size5" && icons == "No") && <>
    <div className="c16KeyStats gap-16 absolute flex-col w-[768px] items-start bg-white opacity-100 pt-10 pb-16 px-8 left-[3267px] top-[968px] flex">
      <div className="frame482578 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-full">The reported incidence of NETs has increased:</span>
        <div className="stats gap-16 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[401px] justify-center items-end opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[52px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[401px] flex-1 min-w-0">6.98/100,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[279px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[279px] flex-1 min-w-0">New cases/year as of 20124</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[401px] justify-center items-end opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[52px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[401px] flex-1 min-w-0">171,000</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[279px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[279px] flex-1 min-w-0">Projected people living with the disease in the United States as of 2014</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
          <div className="content gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="stat gap-6 flex-row items-end w-full opacity-100 pt-0 pb-6 px-0 flex">
              <div className="iconAndTitle gap-8 flex-row w-[401px] items-start opacity-100 p-0 flex">
                <span className="title font-['Volta_Modern_Display'] text-[52px] font-normal text-[#212121] text-left tracking-[-0.35px] w-[401px] flex-1 min-w-0">6.4-fold increase</span>
              </div>
              <div className="subcopy gap-0 flex-row w-[279px] items-end flex-1 min-w-0 opacity-100 pt-6 pb-0 px-0 flex">
                <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[279px] flex-1 min-w-0">Over the last few decades(from 1973 to 2012)4</span>
              </div>
            </div>
            <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}