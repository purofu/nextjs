import React from 'react';

export function C05LeftHandNavM(props){
	const {
    property1 = "closed"
  } = props;
  return (
      <>
  {(property1 == "closed") && <>
    <div className="c05LeftHandNavM gap-1 absolute flex-row items-start w-[768px] overflow-hidden bg-white opacity-100 p-0 left-2 top-2 flex">
      <div className="content gap-8 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="top gap-4 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
          <div className="frame483093 gap-2 flex-row w-[736px] justify-between items-center opacity-100 p-0 flex">
            <div className="leftHandNavItems gap-0 flex-row w-[699px] items-center bg-white opacity-100 pl-8 pr-0 py-0 flex">
              <span className="levelOne font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-[667px] flex-1 min-w-0">Level One</span>
            </div>
            <div className="frame483094 gap-0 flex-row items-start opacity-100 p-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00148 7.0377L0.347656 1.3839L1.40148 0.330078L6.00148 4.93008L10.6015 0.330078L11.6553 1.3839L6.00148 7.0377Z" fill="#1C1B1F" />
                </svg>
              </div>
            </div>
          </div>
          <div className="rectangle5746 w-full h-px relative bg-[#d9d9d9] opacity-100 p-0" />
        </div>
      </div>
    </div>
  </>}
  {(property1 == "open") && <>
    <div className="c05LeftHandNavM gap-1 absolute flex-row w-[768px] items-start overflow-hidden bg-white opacity-100 pt-0 pb-7 px-0 left-2 top-[99px] flex">
      <div className="content gap-8 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="top gap-4 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
          <div className="frame483093 gap-0 flex-row w-[736px] items-center opacity-100 p-0 flex">
            <div className="leftHandNavItems gap-0 flex-row w-[712px] justify-between items-center flex-1 min-w-0 bg-white opacity-100 pl-8 pr-0 py-0 flex">
              <span className="levelOne font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-[680px] flex-1 min-w-0">Level One</span>
            </div>
            <div className="frame483094 gap-0 flex-row items-start opacity-100 p-0 flex">
              <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
                <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                <svg width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99852 0.962297L11.6523 6.6161L10.5985 7.66992L5.99852 3.06992L1.39852 7.66992L0.344693 6.6161L5.99852 0.962297Z" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>
          <div className="rectangle5746 w-full h-px relative bg-[#d9d9d9] opacity-100 p-0" />
        </div>
        <div className="content gap-4 flex-col w-[768px] items-start opacity-100 p-0 flex">
          <div className="leftHandNavItems gap-0 flex-row items-center w-full bg-white opacity-100 pl-8 pr-1 py-0 flex">
            <span className="levelTwo font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[732px] flex-1 min-w-0">Level Two</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="divider gap-1 flex-row justify-between items-start w-full opacity-100 pl-8 pr-0 py-0 flex">
            <svg className="divider" width={736} height={2} viewBox="0 0 736 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L736 0.999915" stroke="#BDBDBD" />
            </svg>
          </div>
          <div className="leftHandNavItems gap-0 flex-row items-center w-full bg-white opacity-100 pl-8 pr-1 py-0 flex">
            <span className="levelTwo font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[732px] flex-1 min-w-0">Level Two</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="divider gap-1 flex-row justify-between items-start w-full opacity-100 pl-8 pr-0 py-0 flex">
            <svg className="divider" width={736} height={2} viewBox="0 0 736 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L736 0.999915" stroke="#BDBDBD" />
            </svg>
          </div>
          <div className="leftHandNavItems gap-0 flex-row items-center w-full bg-white opacity-100 pl-8 pr-1 py-0 flex">
            <span className="levelTwo font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[732px] flex-1 min-w-0">Level Two</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="divider gap-1 flex-row justify-between items-start w-full opacity-100 pl-8 pr-0 py-0 flex">
            <svg className="divider" width={736} height={2} viewBox="0 0 736 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L736 0.999915" stroke="#BDBDBD" />
            </svg>
          </div>
          <div className="leftHandNavItems gap-0 flex-row items-center w-full bg-white opacity-100 pl-8 pr-1 py-0 flex">
            <span className="levelTwo font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[732px] flex-1 min-w-0">Level Two</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="divider gap-1 flex-row justify-between items-start w-full opacity-100 pl-8 pr-0 py-0 flex">
            <svg className="divider" width={736} height={2} viewBox="0 0 736 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L736 0.999915" stroke="#BDBDBD" />
            </svg>
          </div>
          <div className="leftHandNavItems gap-0 flex-row w-[335px] items-center bg-white opacity-100 pl-8 pr-1 py-0 flex">
            <span className="levelTwo font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-[299px] flex-1 min-w-0">Level Two</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
          <div className="leftHandNavItems gap-4 flex-row items-center w-full bg-white opacity-100 pl-8 pr-0 py-0 flex">
            <span className="levelThree font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px] w-[736px] flex-1 min-w-0">Level Three</span>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}