import React from 'react';

export function C55DashboardWidgetChecklist(props){
	const {
    size = "L",
    type = "Patient qualification"
  } = props;
  return (
      <>
  {(size == "L" && type == "Patient qualification") && <>
    <div className="c55DashboardWidgetChecklist gap-2 absolute flex-col w-[562px] items-start border border-neutral-100 rounded bg-white opacity-100 p-0 left-4 top-4 flex">
      <div className="frame482944 gap-0 flex-col justify-center items-start w-full opacity-100 pt-6 pb-4 px-6 flex">
        <span className="viewPatientQualificationChecklists font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">View patient qualification checklists</span>
      </div>
      <div className="frame482943 gap-2 flex-row items-start w-full overflow-hidden opacity-100 pl-6 pr-0 pt-0 pb-4 flex">
        <div className="frame482960 gap-2.5 flex-col justify-center items-start bg-[#e3e9ef] opacity-100 px-4 py-1 rounded-sm flex">
          <span className="all font-['Volta_Modern_Display'] text-base font-semibold text-black text-left tracking-[0px]">All</span>
        </div>
        <div className="frame482961 gap-2.5 flex-col h-full justify-center items-start border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
          <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Prostate cancer</span>
        </div>
        <div className="frame482962 gap-2.5 flex-col h-full justify-center items-start border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
          <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Neuroendicrine Tumors</span>
        </div>
      </div>
      <div className="frame482766 gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Locametz</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Pluvicto</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">SomaKit TOC</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">NETSPOT</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-6 py-5 flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Lutathera</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && type == "Patient qualification") && <>
    <div className="c55DashboardWidgetChecklist gap-2 absolute flex-col w-[704px] items-start border border-neutral-100 rounded bg-white opacity-100 p-0 left-[842px] top-4 flex">
      <div className="frame482944 gap-0 flex-col justify-center items-start w-full opacity-100 pt-6 pb-4 px-6 flex">
        <span className="viewPatientQualificationChecklists font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">View patient qualification checklists</span>
      </div>
      <div className="frame482943 gap-2 flex-row items-start w-full overflow-hidden opacity-100 pl-6 pr-0 pt-0 pb-4 flex">
        <div className="frame482960 gap-2.5 flex-col justify-center items-start bg-[#e3e9ef] opacity-100 px-4 py-1 rounded-sm flex">
          <span className="all font-['Volta_Modern_Display'] text-base font-semibold text-black text-left tracking-[0px]">All</span>
        </div>
        <div className="frame482961 gap-2.5 flex-col h-full justify-center items-start border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
          <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Prostate cancer</span>
        </div>
        <div className="frame482962 gap-2.5 flex-col h-full justify-center items-start border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
          <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Neuroendicrine Tumors</span>
        </div>
      </div>
      <div className="frame482766 gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Locametz</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Pluvicto</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">SomaKit TOC</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">NETSPOT</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-6 py-5 flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px]">Lutathera</span>
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
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && type == "Patient qualification") && <>
    <div className="c55DashboardWidgetChecklist gap-2 absolute flex-col w-[343px] items-start border border-neutral-100 rounded bg-white opacity-100 p-0 left-[1810px] top-4 flex">
      <div className="frame482944 gap-0 flex-col justify-center items-start w-full opacity-100 p-4 flex">
        <span className="viewPatientQualificationChecklists font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">View patient qualification checklists</span>
      </div>
      <div className="frame482943 gap-2 flex-row items-start w-full overflow-hidden opacity-100 pl-4 pr-0 pt-0 pb-4 flex">
        <div className="frame482960 gap-2.5 flex-col justify-center items-start bg-[#e3e9ef] opacity-100 px-4 py-1 rounded-sm flex">
          <span className="all font-['Volta_Modern_Display'] text-base font-semibold text-black text-left tracking-[0px]">All</span>
        </div>
        <div className="frame482961 gap-2.5 flex-col h-full justify-center items-start border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
          <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Prostate cancer</span>
        </div>
        <div className="frame482962 gap-2.5 flex-col h-full justify-center items-start border opacity-100 px-[15px] py-[3px] rounded-sm border-[#c6ced7] flex">
          <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Neuroendicrine Tumors</span>
        </div>
      </div>
      <div className="frame482766 gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-[15px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Locametz</span>
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
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[9px] font-medium text-[#212121] text-left tracking-[0px] w-full">(lutetium Lu 177 dotatate)</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-[15px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Pluvicto</span>
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
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[9px] font-medium text-[#212121] text-left tracking-[0px] w-full">(lutetium Lu 177 vipivotide tetraxetan)</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-[15px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">SomaKit TOC</span>
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
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[9px] font-medium text-[#212121] text-left tracking-[0px] w-full">(lutetium Lu 177 vipivotide tetraxetan)</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-[15px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">NETSPOT</span>
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
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[9px] font-medium text-[#212121] text-left tracking-[0px] w-full">(gallium Ga 68 dotatate injection)</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-4 py-5 flex">
          <div className="frame482941 gap-0 flex-col justify-end items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="frame482726 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
              <span className="locametz font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px]">Lutathera</span>
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
            <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[9px] font-medium text-[#212121] text-left tracking-[0px] w-full">(lutetium Lu 177 dotatate)</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && type == "Site set up") && <>
    <div className="c55DashboardWidgetChecklist gap-2 absolute flex-col w-[562px] items-start border border-neutral-100 rounded bg-white opacity-100 p-0 left-4 top-[693px] flex">
      <div className="frame482900 gap-2 flex-col justify-center items-start w-full opacity-100 pt-6 pb-4 px-6 flex">
        <span className="viewSiteSetUpChecklist font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">View site set up checklist</span>
        <span className="selectWhereAreYouInYourJourneyToGetSetUp font-['Volta_Modern_Display'] text-[15px] font-medium text-[#212121] text-left tracking-[0px] w-full">Select where are you in your journey to get set up.</span>
      </div>
      <div className="frame482766 gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-4 flex-row w-[466px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">01</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[426px] flex-1 min-w-0">Equipped to deliver Novartis RLT</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-4 flex-row w-[466px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">02</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[426px] flex-1 min-w-0">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-4 flex-row w-[466px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">03</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[426px] flex-1 min-w-0">My site is eqipped to deliver RLI but is new to RLT</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-6 py-5 flex">
          <div className="frame482941 gap-4 flex-row w-[466px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">04</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[426px] flex-1 min-w-0">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && type == "Site set up") && <>
    <div className="c55DashboardWidgetChecklist gap-2 absolute flex-col w-[704px] items-start border border-neutral-100 rounded bg-white opacity-100 p-0 left-[842px] top-[693px] flex">
      <div className="frame482944 gap-1 flex-col justify-center items-start w-full opacity-100 pt-6 pb-4 px-6 flex">
        <span className="viewSiteSetUpChecklist font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">View site set up checklist</span>
        <span className="selectWhereAreYouInYourJourneyToGetSetUp font-['Volta_Modern_Display'] text-sm font-medium text-[#212121] text-left tracking-[0px] w-full">Select where are you in your journey to get set up.</span>
      </div>
      <div className="frame482766 gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-4 flex-row w-[608px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">01</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[568px] flex-1 min-w-0">Equipped to deliver Novartis RLT</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-4 flex-row w-[608px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">02</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[568px] flex-1 min-w-0">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-[23px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-4 flex-row w-[608px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">03</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[568px] flex-1 min-w-0">My site is eqipped to deliver RLI but is new to RLT</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-6 flex-row items-center w-full opacity-100 px-6 py-5 flex">
          <div className="frame482941 gap-4 flex-row w-[608px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">04</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[19px] font-medium text-[#212121] text-left tracking-[0px] w-[568px] flex-1 min-w-0">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && type == "Site set up") && <>
    <div className="c55DashboardWidgetChecklist gap-2 absolute flex-col w-[343px] items-start border border-neutral-100 rounded bg-white opacity-100 p-0 left-[1810px] top-[693px] flex">
      <div className="frame482944 gap-0.5 flex-col justify-center items-start w-full opacity-100 pt-4 pb-2 px-4 flex">
        <span className="viewSiteSetUpChecklist font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">View site set up checklist</span>
        <span className="selectWhereAreYouInYourJourneyToGetSetUp font-['Volta_Modern_Display'] text-[13px] font-medium text-[#212121] text-left tracking-[0px] w-full">Select where are you in your journey to get set up.</span>
      </div>
      <div className="frame482766 gap-[-1px] flex-col items-start w-full opacity-100 p-0 flex">
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-[15px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-2 flex-row w-[271px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">01</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[239px] flex-1 min-w-0">Equipped to deliver Novartis RLT</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-[15px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-2 flex-row w-[271px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">02</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[239px] flex-1 min-w-0">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-[15px] py-[19px] border-b-[#e0e0e0] border-b flex">
          <div className="frame482941 gap-2 flex-row w-[271px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">03</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[239px] flex-1 min-w-0">My site is eqipped to deliver RLI but is new to RLT</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
        <div className="widgetListItem gap-4 flex-row items-center w-full opacity-100 px-4 py-5 flex">
          <div className="frame482941 gap-2 flex-row w-[271px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-6 h-full">04</span>
            <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-base font-medium text-[#212121] text-left tracking-[0px] w-[239px] flex-1 min-w-0">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
          <div className="interactiveIcons w-6 h-6 relative overflow-hidden opacity-0 p-0">
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}