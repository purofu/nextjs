import React from 'react';

export function LinkWithInfo(props){
	const {
    property1 = "XL"
  } = props;
  return (
      <>
  {(property1 == "XL") && <>
    <div className="linkWithInfo gap-0 absolute flex-col w-[204px] items-start opacity-100 px-0 py-[11px] border-y-[#bdbdbd] border-t border-b left-2 top-2 flex">
      <div className="frame1242 gap-[-2px] flex-col items-start opacity-100 pt-0 pb-1 px-0 flex">
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
        <span className="lutetiumLu177Dotatate font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[119px]">(lutetium Lu 177 dotatate)</span>
      </div>
      <span className="prostateCancer font-['Volta_Modern_Display'] text-[15px] font-medium text-[#616161] text-left tracking-[0px]">Prostate Cancer</span>
    </div>
  </>}
  {(property1 == "S") && <>
    <div className="linkWithInfo gap-0 absolute flex-col w-[342px] items-start opacity-100 px-0 py-[15px] border-y-[#bdbdbd] border-t border-b left-2 top-[250px] flex">
      <div className="frame482731 gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
        <div className="frame1242 gap-[-2px] flex-col w-[173px] items-start opacity-100 p-0 flex">
          <div className="frame482726 gap-0 flex-row items-start opacity-100 p-0 flex">
            <span className="locametz font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Locametz</span>
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
        <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-[13px] font-medium text-[#616161] text-left tracking-[0px]">Neuroendicrine Tumors</span>
      </div>
    </div>
  </>}
  {(property1 == "M") && <>
    <div className="linkWithInfo gap-0 absolute flex-col w-[342px] items-start opacity-100 px-0 py-[15px] border-y-[#bdbdbd] border-t border-b left-2 top-[125px] flex">
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
        <span className="neuroendicrineTumors font-['Volta_Modern_Display'] text-sm font-medium text-[#616161] text-left tracking-[0px]">Neuroendicrine Tumors</span>
      </div>
    </div>
  </>}
</>
  );
}