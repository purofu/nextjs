import React from 'react';

export function C19TextBulletsWithImage(props){
	const {
    size = "L(LHN)",
    sectionHead = "Yes"
  } = props;
  return (
      <>
  {(size == "L(LHN)" && sectionHead == "Yes") && <>
    <div className="c19TextBulletsWithImage gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 pt-16 pb-24 px-16 left-2 top-2 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1100px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482684 gap-4 flex-col items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[594px]">Incidence</span>
        <div className="content gap-6 flex-row w-[1036px] items-start opacity-100 p-0 flex">
          <div className="copy gap-8 flex-col w-[594px] items-start opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[594px]">Diagnosis at earlier stages of the disease is thought to be responsible for this increase, even though NETs are still often diagnosed at an advanced or metastatic stage.<br />NETs are generally considered as indolent (slowly growing) tumors; however, the prognosis varies widely, according to:</span>
            <div className="bullets gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[562px] flex-1 min-w-0">Primary tumor site</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[562px] flex-1 min-w-0">Tumor differentiation and grade</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[562px] flex-1 min-w-0">Stage</span>
              </div>
            </div>
            <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[594px]">From 1973 through 2012, the annual age-adjusted incidence of NETs has increased compared with that of other malignant neoplasms.4</span>
          </div>
          <div className="image w-[418px] h-[523px] relative opacity-100 p-0 container">
            <div className="image w-[418px] h-[278px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
            <div className="image w-[418px] h-[523px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
            <span className="wIP font-['Volta_Modern_Display'] text-[23px] font-semibold text-black text-left tracking-[0px] absolute left-[187px] top-[218px]">WIP</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && sectionHead == "No") && <>
    <div className="c19TextBulletsWithImage gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-2 top-[1453px] flex">
      <div className="frame482684 gap-4 flex-col items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[594px]">Incidence</span>
        <div className="content gap-6 flex-row w-[1036px] items-start opacity-100 pt-0 pb-24 px-0 flex">
          <div className="copy gap-8 flex-col w-[594px] items-start opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[594px]">Diagnosis at earlier stages of the disease is thought to be responsible for this increase, even though NETs are still often diagnosed at an advanced or metastatic stage.<br />NETs are generally considered as indolent (slowly growing) tumors; however, the prognosis varies widely, according to:</span>
            <div className="bullets gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[562px] flex-1 min-w-0">Primary tumor site</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[562px] flex-1 min-w-0">Tumor differentiation and grade</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[562px] flex-1 min-w-0">Stage</span>
              </div>
            </div>
            <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[594px]">From 1973 through 2012, the annual age-adjusted incidence of NETs has increased compared with that of other malignant neoplasms.4</span>
          </div>
          <div className="image w-[418px] h-[523px] relative opacity-100 p-0 container">
            <div className="image w-[418px] h-[278px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
            <div className="image w-[418px] h-[523px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
            <span className="wIP font-['Volta_Modern_Display'] text-[23px] font-semibold text-black text-left tracking-[0px] absolute left-[187px] top-[218px]">WIP</span>
          </div>
        </div>
        <div className="1pxDivider w-[1036px] h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "Yes") && <>
    <div className="c19TextBulletsWithImage gap-12 absolute flex-col w-[768px] items-start bg-white opacity-100 pt-10 pb-16 px-8 left-[3348px] top-2 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[736px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482693 gap-16 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482682 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Incidence</span>
          <div className="content gap-6 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="copy gap-8 flex-col w-[401px] items-start opacity-100 p-0 flex">
              <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Diagnosis at earlier stages of the disease is thought to be responsible for this increase, even though NETs are still often diagnosed at an advanced or metastatic stage.<br />NETs are generally considered as indolent (slowly growing) tumors; however, the prognosis varies widely, according to:</span>
              <div className="bullets gap-4 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                  <div className="frame482547 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                    <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={4} cy={4} r={4} fill="#212121" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-[369px] flex-1 min-w-0">Primary tumor site</span>
                </div>
                <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                  <div className="frame482549 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                    <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={4} cy={4} r={4} fill="#212121" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-[369px] flex-1 min-w-0">Tumor differentiation and grade</span>
                </div>
                <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                  <div className="frame482550 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                    <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={4} cy={4} r={4} fill="#212121" />
                    </svg>
                  </div>
                  <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-[369px] flex-1 min-w-0">Stage</span>
                </div>
              </div>
              <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">From 1973 through 2012, the annual age-adjusted incidence of NETs has increased compared with that of other malignant neoplasms.4</span>
            </div>
            <div className="image w-[279px] h-[349px] relative opacity-100 p-0">
              <div className="image w-[279px] h-[349px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
              <span className="wIP font-['Volta_Modern_Display'] text-[23px] font-semibold text-black text-left tracking-[0px] w-[58px] h-[42px] absolute -translate-x-2/4 left-2/4 top-2/4">WIP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "No") && <>
    <div className="c19TextBulletsWithImage gap-16 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[3348px] top-[1453px] flex">
      <div className="frame482682 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Incidence</span>
        <div className="content gap-6 flex-row items-start w-full opacity-100 p-0 flex">
          <div className="copy gap-8 flex-col w-[401px] items-start opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">Diagnosis at earlier stages of the disease is thought to be responsible for this increase, even though NETs are still often diagnosed at an advanced or metastatic stage.<br />NETs are generally considered as indolent (slowly growing) tumors; however, the prognosis varies widely, according to:</span>
            <div className="bullets gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482547 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-[369px] flex-1 min-w-0">Primary tumor site</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482549 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-[369px] flex-1 min-w-0">Tumor differentiation and grade</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482550 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-2xl font-semibold text-[#212121] text-left tracking-[0px] w-[369px] flex-1 min-w-0">Stage</span>
              </div>
            </div>
            <span className="copy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">From 1973 through 2012, the annual age-adjusted incidence of NETs has increased compared with that of other malignant neoplasms.4</span>
          </div>
          <div className="image w-[279px] h-[349px] relative opacity-100 p-0">
            <div className="image w-[279px] h-[349px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
            <span className="wIP font-['Volta_Modern_Display'] text-[23px] font-semibold text-black text-left tracking-[0px] w-[58px] h-[42px] absolute -translate-x-2/4 left-2/4 top-2/4">WIP</span>
          </div>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "L" && sectionHead == "Yes") && <>
    <div className="c19TextBulletsWithImage gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 pt-16 pb-24 px-12 left-[1540px] top-2 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1392px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="titleAndContent gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-full">Incidence</span>
        <div className="content gap-0 flex-row justify-between items-start w-full opacity-100 p-0 flex">
          <div className="copy gap-8 flex-col w-[774px] items-start opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Diagnosis at earlier stages of the disease is thought to be responsible for this increase, even though NETs are still often diagnosed at an advanced or metastatic stage.<br />NETs are generally considered as indolent (slowly growing) tumors; however, the prognosis varies widely, according to:</span>
            <div className="bullets gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[742px] flex-1 min-w-0">Primary tumor site</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[742px] flex-1 min-w-0">Tumor differentiation and grade</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[742px] flex-1 min-w-0">Stage</span>
              </div>
            </div>
            <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">From 1973 through 2012, the annual age-adjusted incidence of NETs has increased compared with that of other malignant neoplasms.4</span>
          </div>
          <div className="image w-[546px] h-[683px] relative opacity-100 p-0">
            <div className="image w-[546px] h-[683px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
            <span className="wIP font-['Volta_Modern_Display'] text-[23px] font-semibold text-black text-left tracking-[0px] w-[58px] h-[42px] absolute left-[244px] top-[283px]">WIP</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && sectionHead == "No") && <>
    <div className="c19TextBulletsWithImage gap-0 absolute flex-col w-[1440px] items-start bg-white opacity-100 px-12 py-16 left-[1540px] top-[1453px] flex">
      <div className="titleAndContent gap-4 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-full">Incidence</span>
        <div className="content gap-0 flex-row justify-between items-start w-full opacity-100 pt-0 pb-24 px-0 flex">
          <div className="copy gap-8 flex-col w-[774px] items-start opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Diagnosis at earlier stages of the disease is thought to be responsible for this increase, even though NETs are still often diagnosed at an advanced or metastatic stage.<br />NETs are generally considered as indolent (slowly growing) tumors; however, the prognosis varies widely, according to:</span>
            <div className="bullets gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[742px] flex-1 min-w-0">Primary tumor site</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[742px] flex-1 min-w-0">Tumor differentiation and grade</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="padding gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[23px] font-semibold text-[#212121] text-left tracking-[0px] w-[742px] flex-1 min-w-0">Stage</span>
              </div>
            </div>
            <span className="copy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">From 1973 through 2012, the annual age-adjusted incidence of NETs has increased compared with that of other malignant neoplasms.4</span>
          </div>
          <div className="image w-[546px] h-[683px] relative opacity-100 p-0">
            <div className="image w-[546px] h-[683px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
            <span className="wIP font-['Volta_Modern_Display'] text-[23px] font-semibold text-black text-left tracking-[0px] w-[58px] h-[42px] absolute left-[244px] top-[283px]">WIP</span>
          </div>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
    </div>
  </>}
  {(size == "S" && sectionHead == "Yes") && <>
    <div className="c19TextBulletsWithImage gap-12 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-10 pb-12 px-4 left-[4484px] top-2 flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[359px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482501 gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="content gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[32px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Incidence</span>
          <div className="copy gap-8 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Diagnosis at earlier stages of the disease is thought to be responsible for this increase, even though NETs are still often diagnosed at an advanced or metastatic stage.<br />NETs are generally considered as indolent (slowly growing) tumors; however, the prognosis varies widely, according to:</span>
            <div className="bullets gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482552 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-[311px] flex-1 min-w-0">Primary tumor site</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482551 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-[311px] flex-1 min-w-0">Tumor differentiation and grade</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482553 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-[311px] flex-1 min-w-0">Stage</span>
              </div>
            </div>
            <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">From 1973 through 2012, the annual age-adjusted incidence of NETs has increased compared with that of other malignant neoplasms.4</span>
          </div>
        </div>
        <div className="image w-[343px] h-[429px] relative opacity-100 p-0">
          <div className="image w-[343px] h-[429px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
          <span className="wIP font-['Volta_Modern_Display'] text-[23px] font-semibold text-black text-left tracking-[0px] w-[58px] h-[42px] absolute -translate-x-2/4 left-2/4 top-2/4">WIP</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "No") && <>
    <div className="c19TextBulletsWithImage gap-12 absolute flex-col w-[375px] items-start bg-white opacity-100 px-4 py-10 left-[4484px] top-[1453px] flex">
      <div className="frame482501 gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="content gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[32px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Incidence</span>
          <div className="copy gap-8 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Diagnosis at earlier stages of the disease is thought to be responsible for this increase, even though NETs are still often diagnosed at an advanced or metastatic stage.<br />NETs are generally considered as indolent (slowly growing) tumors; however, the prognosis varies widely, according to:</span>
            <div className="bullets gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482552 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-[311px] flex-1 min-w-0">Primary tumor site</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482551 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-[311px] flex-1 min-w-0">Tumor differentiation and grade</span>
              </div>
              <div className="bullet gap-6 flex-row items-start w-full opacity-100 p-0 flex">
                <div className="frame482553 gap-1 flex-row items-start opacity-100 pt-2 pb-0 px-0 flex">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r={4} fill="#212121" />
                  </svg>
                </div>
                <span className="title font-['Volta_Modern_Display'] text-[21px] font-semibold text-[#212121] text-left tracking-[0px] w-[311px] flex-1 min-w-0">Stage</span>
              </div>
            </div>
            <span className="copy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">From 1973 through 2012, the annual age-adjusted incidence of NETs has increased compared with that of other malignant neoplasms.4</span>
          </div>
        </div>
        <div className="image w-[343px] h-[429px] relative opacity-100 p-0">
          <div className="image w-[343px] h-[429px] absolute bg-[#d9d9d9] opacity-100 p-0 left-0 top-0" />
          <span className="wIP font-['Volta_Modern_Display'] text-[23px] font-semibold text-black text-left tracking-[0px] w-[58px] h-[42px] absolute -translate-x-2/4 left-2/4 top-2/4">WIP</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
    </div>
  </>}
</>
  );
}