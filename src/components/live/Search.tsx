import React from 'react';

export function Search(props){
	const {
    size = "XL",
    state = "Default"
  } = props;
  return (
      <>
  {(size == "XL" && state == "typing") && <>
    <div className="search gap-1.5 absolute flex-col items-start opacity-100 p-0 left-[504px] top-9 flex">
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
          <div className="interactiveIcons w-[30px] h-[29.48px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[30px] h-[29.48px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 23.0535L13.625 15.3163C13 15.8076 12.2812 16.1965 11.4688 16.483C10.6562 16.7696 9.79167 16.9129 8.875 16.9129C6.60417 16.9129 4.68229 16.1402 3.10938 14.5948C1.53646 13.0494 0.75 11.1612 0.75 8.93008C0.75 6.69899 1.53646 4.81074 3.10938 3.26535C4.68229 1.71996 6.60417 0.947266 8.875 0.947266C11.1458 0.947266 13.0677 1.71996 14.6406 3.26535C16.2135 4.81074 17 6.69899 17 8.93008C17 9.8307 16.8542 10.6802 16.5625 11.4784C16.2708 12.2767 15.875 12.9829 15.375 13.597L23.25 21.3341L21.5 23.0535ZM8.875 14.4566C10.4375 14.4566 11.7656 13.9193 12.8594 12.8447C13.9531 11.7701 14.5 10.4652 14.5 8.93008C14.5 7.39492 13.9531 6.09004 12.8594 5.01543C11.7656 3.94082 10.4375 3.40352 8.875 3.40352C7.3125 3.40352 5.98438 3.94082 4.89062 5.01543C3.79688 6.09004 3.25 7.39492 3.25 8.93008C3.25 10.4652 3.79688 11.7701 4.89062 12.8447C5.98438 13.9193 7.3125 14.4566 8.875 14.4566Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
      <div className="search w-[400px] h-px relative bg-[#212121] opacity-100 p-0 underline" />
    </div>
  </>}
  {(size == "M" && state == "typing") && <>
    <div className="search gap-1.5 absolute flex-col w-[308px] items-start opacity-100 p-0 left-[504px] top-[143px] flex">
      <div className="type gap-[186px] flex-row w-[309px] justify-between items-center opacity-100 p-0 flex">
        <span className="location font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px]">Chelmsford</span>
        <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.4 14.5L0 13.1L5.6 7.5L0 1.9L1.4 0.5L7 6.1L12.6 0.5L14 1.9L8.4 7.5L14 13.1L12.6 14.5L7 8.9L1.4 14.5Z" fill="#BDBDBD" />
            </svg>
          </div>
          <div className="interactiveIcons w-[30px] h-[29.48px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[30px] h-[29.48px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 22.5535L13.625 14.8163C13 15.3076 12.2812 15.6965 11.4688 15.983C10.6562 16.2696 9.79167 16.4129 8.875 16.4129C6.60417 16.4129 4.68229 15.6402 3.10938 14.0948C1.53646 12.5494 0.75 10.6612 0.75 8.43008C0.75 6.19899 1.53646 4.31074 3.10938 2.76535C4.68229 1.21996 6.60417 0.447266 8.875 0.447266C11.1458 0.447266 13.0677 1.21996 14.6406 2.76535C16.2135 4.31074 17 6.19899 17 8.43008C17 9.3307 16.8542 10.1802 16.5625 10.9784C16.2708 11.7767 15.875 12.4829 15.375 13.097L23.25 20.8341L21.5 22.5535ZM8.875 13.9566C10.4375 13.9566 11.7656 13.4193 12.8594 12.3447C13.9531 11.2701 14.5 9.96523 14.5 8.43008C14.5 6.89492 13.9531 5.59004 12.8594 4.51543C11.7656 3.44082 10.4375 2.90352 8.875 2.90352C7.3125 2.90352 5.98438 3.44082 4.89062 4.51543C3.79688 5.59004 3.25 6.89492 3.25 8.43008C3.25 9.96523 3.79688 11.2701 4.89062 12.3447C5.98438 13.4193 7.3125 13.9566 8.875 13.9566Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
      <div className="search w-[308px] h-px relative bg-[#212121] opacity-100 p-0 underline" />
    </div>
  </>}
  {(size == "XL" && state == "Default") && <>
    <div className="search gap-1.5 absolute flex-col items-start opacity-100 p-0 left-8 top-[34px] flex">
      <div className="type gap-[186px] flex-row w-[400px] items-center opacity-100 p-0 flex">
        <div className="type gap-2 flex-row w-[184px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="location font-['Volta_Modern_Display'] text-[29px] font-medium text-[#516476] text-left tracking-[0px]">Enter patient location</span>
        </div>
        <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <div className="interactiveIcons w-[30px] h-[29.48px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[30px] h-[29.48px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 23.0535L13.625 15.3163C13 15.8076 12.2812 16.1965 11.4688 16.483C10.6562 16.7696 9.79167 16.9129 8.875 16.9129C6.60417 16.9129 4.68229 16.1402 3.10938 14.5948C1.53646 13.0494 0.75 11.1612 0.75 8.93008C0.75 6.69899 1.53646 4.81074 3.10938 3.26535C4.68229 1.71996 6.60417 0.947266 8.875 0.947266C11.1458 0.947266 13.0677 1.71996 14.6406 3.26535C16.2135 4.81074 17 6.69899 17 8.93008C17 9.8307 16.8542 10.6802 16.5625 11.4784C16.2708 12.2767 15.875 12.9829 15.375 13.597L23.25 21.3341L21.5 23.0535ZM8.875 14.4566C10.4375 14.4566 11.7656 13.9193 12.8594 12.8447C13.9531 11.7701 14.5 10.4652 14.5 8.93008C14.5 7.39492 13.9531 6.09004 12.8594 5.01543C11.7656 3.94082 10.4375 3.40352 8.875 3.40352C7.3125 3.40352 5.98438 3.94082 4.89062 5.01543C3.79688 6.09004 3.25 7.39492 3.25 8.93008C3.25 10.4652 3.79688 11.7701 4.89062 12.8447C5.98438 13.9193 7.3125 14.4566 8.875 14.4566Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
      <div className="search w-[400px] h-px relative bg-[#516476] opacity-100 p-0 underline" />
    </div>
  </>}
  {(size == "M" && state == "Default") && <>
    <div className="search gap-1.5 absolute flex-col w-[308px] items-start opacity-100 p-0 left-8 top-[143px] flex">
      <div className="type gap-0 flex-row w-[309px] justify-between items-center opacity-100 p-0 flex">
        <span className="location font-['Volta_Modern_Display'] text-[29px] font-medium text-[#516476] text-left tracking-[-0.35px]">Enter patient location</span>
        <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <div className="interactiveIcons w-[30px] h-[29.48px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[30px] h-[29.48px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 22.5535L13.625 14.8163C13 15.3076 12.2812 15.6965 11.4688 15.983C10.6562 16.2696 9.79167 16.4129 8.875 16.4129C6.60417 16.4129 4.68229 15.6402 3.10938 14.0948C1.53646 12.5494 0.75 10.6612 0.75 8.43008C0.75 6.19899 1.53646 4.31074 3.10938 2.76535C4.68229 1.21996 6.60417 0.447266 8.875 0.447266C11.1458 0.447266 13.0677 1.21996 14.6406 2.76535C16.2135 4.31074 17 6.19899 17 8.43008C17 9.3307 16.8542 10.1802 16.5625 10.9784C16.2708 11.7767 15.875 12.4829 15.375 13.097L23.25 20.8341L21.5 22.5535ZM8.875 13.9566C10.4375 13.9566 11.7656 13.4193 12.8594 12.3447C13.9531 11.2701 14.5 9.96523 14.5 8.43008C14.5 6.89492 13.9531 5.59004 12.8594 4.51543C11.7656 3.44082 10.4375 2.90352 8.875 2.90352C7.3125 2.90352 5.98438 3.44082 4.89062 4.51543C3.79688 5.59004 3.25 6.89492 3.25 8.43008C3.25 9.96523 3.79688 11.2701 4.89062 12.3447C5.98438 13.4193 7.3125 13.9566 8.875 13.9566Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
      <div className="search w-[309px] h-px relative bg-[#516476] opacity-100 p-0 underline" />
    </div>
  </>}
  {(size == "S" && state == "Default") && <>
    <div className="search gap-1.5 absolute flex-col w-[343px] items-start opacity-100 p-0 left-8 top-[253px] flex">
      <div className="type gap-[186px] flex-row w-[343px] items-center opacity-100 p-0 flex">
        <div className="type gap-2 flex-row w-[127px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="location font-['Volta_Modern_Display'] text-2xl font-medium text-[#516476] text-left tracking-[-0.35px]">Enter patient location</span>
        </div>
        <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <div className="interactiveIcons w-[30px] h-[29.48px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[30px] h-[29.48px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 22.7908L13.625 15.0536C13 15.5449 12.2812 15.9338 11.4688 16.2204C10.6562 16.5069 9.79167 16.6502 8.875 16.6502C6.60417 16.6502 4.68229 15.8775 3.10938 14.3321C1.53646 12.7867 0.75 10.8985 0.75 8.66738C0.75 6.43629 1.53646 4.54805 3.10938 3.00266C4.68229 1.45727 6.60417 0.68457 8.875 0.68457C11.1458 0.68457 13.0677 1.45727 14.6406 3.00266C16.2135 4.54805 17 6.43629 17 8.66738C17 9.56801 16.8542 10.4175 16.5625 11.2157C16.2708 12.014 15.875 12.7202 15.375 13.3343L23.25 21.0714L21.5 22.7908ZM8.875 14.1939C10.4375 14.1939 11.7656 13.6566 12.8594 12.582C13.9531 11.5074 14.5 10.2025 14.5 8.66738C14.5 7.13223 13.9531 5.82734 12.8594 4.75273C11.7656 3.67813 10.4375 3.14082 8.875 3.14082C7.3125 3.14082 5.98438 3.67813 4.89062 4.75273C3.79688 5.82734 3.25 7.13223 3.25 8.66738C3.25 10.2025 3.79688 11.5074 4.89062 12.582C5.98438 13.6566 7.3125 14.1939 8.875 14.1939Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
      <div className="search w-[343px] h-px relative bg-[#516476] opacity-100 p-0 underline" />
    </div>
  </>}
  {(size == "S" && state == "typing") && <>
    <div className="search gap-1.5 absolute flex-col w-[343px] items-start opacity-100 p-0 left-[501px] top-[253px] flex">
      <div className="type gap-[186px] flex-row w-[343px] items-center opacity-100 p-0 flex">
        <div className="type gap-2 flex-row w-[97px] items-center flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="location font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px]">Chelmsford</span>
        </div>
        <div className="icons gap-1.5 flex-row items-center opacity-100 p-0 flex">
          <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.4 14.7373L0 13.3373L5.6 7.7373L0 2.1373L1.4 0.737305L7 6.3373L12.6 0.737305L14 2.1373L8.4 7.7373L14 13.3373L12.6 14.7373L7 9.13731L1.4 14.7373Z" fill="#BDBDBD" />
            </svg>
          </div>
          <div className="interactiveIcons w-[30px] h-[29.48px] relative opacity-100 p-0">
            <div className="boundingBox absolute w-[30px] h-[29.48px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 22.7908L13.625 15.0536C13 15.5449 12.2812 15.9338 11.4688 16.2204C10.6562 16.5069 9.79167 16.6502 8.875 16.6502C6.60417 16.6502 4.68229 15.8775 3.10938 14.3321C1.53646 12.7867 0.75 10.8985 0.75 8.66738C0.75 6.43629 1.53646 4.54805 3.10938 3.00266C4.68229 1.45727 6.60417 0.68457 8.875 0.68457C11.1458 0.68457 13.0677 1.45727 14.6406 3.00266C16.2135 4.54805 17 6.43629 17 8.66738C17 9.56801 16.8542 10.4175 16.5625 11.2157C16.2708 12.014 15.875 12.7202 15.375 13.3343L23.25 21.0714L21.5 22.7908ZM8.875 14.1939C10.4375 14.1939 11.7656 13.6566 12.8594 12.582C13.9531 11.5074 14.5 10.2025 14.5 8.66738C14.5 7.13223 13.9531 5.82734 12.8594 4.75273C11.7656 3.67813 10.4375 3.14082 8.875 3.14082C7.3125 3.14082 5.98438 3.67813 4.89062 4.75273C3.79688 5.82734 3.25 7.13223 3.25 8.66738C3.25 10.2025 3.79688 11.5074 4.89062 12.582C5.98438 13.6566 7.3125 14.1939 8.875 14.1939Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
      <div className="search w-[343px] h-px relative bg-[#212121] opacity-100 p-0 underline" />
    </div>
  </>}
</>
  );
}