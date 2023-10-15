import React from 'react';

export function C23SpotlightDownloadPDF(props){
	const {
    size = "L(LHN)",
    mLRCode = "No"
  } = props;
  return (
      <>
  {(size == "S" && mLRCode == "No") && <>
    <div className="c23SpotlightDownloadPDF gap-0 absolute flex-col w-[375px] justify-end items-end bg-white opacity-100 px-0 py-10 left-[4166px] top-[65px] flex">
      <div className="download gap-0 flex-row items-start w-full overflow-hidden bg-[#024071] opacity-100 pt-10 pb-0 px-4 flex">
        <div className="allContent gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="title gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="relatedResource font-['Volta_Modern_Display'] text-[13px] font-semibold text-white text-left tracking-[0px]">Related resource</span>
            <span className="gEPNETsWhatYouNeedToKnow font-['Volta_Modern_Display'] text-[32px] font-medium text-white text-left tracking-[-0.35px] w-full">GEP-NET’s What you need to know</span>
          </div>
          <div className="details gap-6 flex-col w-[119px] items-start opacity-100 p-0 flex">
            <div className="format gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
              <span className="fileFormat font-['Volta_Modern_Display'] text-[13px] font-medium text-white text-left tracking-[0px]">file format:</span>
              <span className="pdf font-['Volta_Modern_Display'] text-[13px] font-semibold text-white text-left tracking-[0px]">.pdf</span>
            </div>
            <div className="size gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
              <span className="fileSize font-['Volta_Modern_Display'] text-[13px] font-medium text-white text-left tracking-[0px]">file size:</span>
              <span className="112kb font-['Volta_Modern_Display'] text-[13px] font-semibold text-white text-left tracking-[0px]">112kb</span>
            </div>
          </div>
          <div className="frame482532 gap-16 flex-col justify-end items-end w-full opacity-100 p-0 flex">
            <div className="copy gap-3 flex-col w-[343px] items-start opacity-100 p-0 flex">
              <span className="inThisDocument font-['Volta_Modern_Display'] text-[13px] font-semibold text-white text-left tracking-[0px] w-full">In this document</span>
              <span className="asATopLineIntroductionThisSlideDeckIsAUsefulPlaceForAnyoneNewToNETsToUnderstandTheFundamentalsDiscussingEverythingFromTheDefinitionOfNETsClassificationAndGradingThroughToDiagnosisAndTreatment font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full">As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.</span>
            </div>
            <div className="containerLink gap-0 flex-col items-start bg-[#0460a9] opacity-100 px-9 py-5 flex">
              <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Download PDF</span>
                <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.96875 0.25V12.8055L2.19375 7.03047L0.75 8.5L9 16.75L17.25 8.5L15.8063 7.03047L10.0312 12.8055V0.25H7.96875Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && mLRCode == "Yes") && <>
    <div className="c23SpotlightDownloadPDF gap-0 absolute flex-col w-[375px] justify-end items-end bg-white opacity-100 px-0 py-10 left-[4166px] top-[815px] flex">
      <div className="download gap-0 flex-row items-start w-full overflow-hidden bg-[#024071] opacity-100 pt-10 pb-0 px-4 flex">
        <div className="allContent gap-10 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="title gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="relatedResource font-['Volta_Modern_Display'] text-[13px] font-semibold text-white text-left tracking-[0px]">Related resource</span>
            <span className="gEPNETsWhatYouNeedToKnow font-['Volta_Modern_Display'] text-[32px] font-medium text-white text-left tracking-[-0.35px] w-full">GEP-NET’s What you need to know</span>
          </div>
          <div className="details gap-6 flex-col items-start opacity-100 p-0 flex">
            <div className="format gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
              <span className="fileFormat font-['Volta_Modern_Display'] text-[13px] font-medium text-white text-left tracking-[0px]">file format:</span>
              <span className="pdf font-['Volta_Modern_Display'] text-[13px] font-semibold text-white text-left tracking-[0px]">.pdf</span>
            </div>
            <div className="size gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
              <span className="fileSize font-['Volta_Modern_Display'] text-[13px] font-medium text-white text-left tracking-[0px]">file size:</span>
              <span className="112kb font-['Volta_Modern_Display'] text-[13px] font-semibold text-white text-left tracking-[0px]">112kb</span>
            </div>
            <div className="details gap-2 flex-row items-center opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
              <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[13px] font-medium text-white text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
            </div>
          </div>
          <div className="frame482532 gap-16 flex-col justify-end items-end w-full opacity-100 p-0 flex">
            <div className="copy gap-3 flex-col w-[343px] items-start opacity-100 p-0 flex">
              <span className="inThisDocument font-['Volta_Modern_Display'] text-[13px] font-semibold text-white text-left tracking-[0px] w-full">In this document</span>
              <span className="asATopLineIntroductionThisSlideDeckIsAUsefulPlaceForAnyoneNewToNETsToUnderstandTheFundamentalsDiscussingEverythingFromTheDefinitionOfNETsClassificationAndGradingThroughToDiagnosisAndTreatment font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px] w-full">As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.</span>
            </div>
            <div className="containerLink gap-0 flex-col items-start bg-[#0460a9] opacity-100 px-9 py-5 flex">
              <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
                <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Download PDF</span>
                <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
                  <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.96875 0.25V12.8055L2.19375 7.03047L0.75 8.5L9 16.75L17.25 8.5L15.8063 7.03047L10.0312 12.8055V0.25H7.96875Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && mLRCode == "No") && <>
    <div className="c23SpotlightDownloadPDF gap-0 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-[57px] top-[72px] flex">
      <div className="pdfDownload gap-[88px] flex-row items-start w-full bg-[#024071] opacity-100 px-16 py-10 flex">
        <div className="leftSide gap-[137px] flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="tagAndTitle gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="labels font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">Related resource</span>
            <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-white text-left tracking-[0px] w-full">GEP-NET’s <br />What you need to know</span>
          </div>
        </div>
        <div className="contentAndDownload gap-[82px] flex-col items-start opacity-100 p-0 flex">
          <div className="content gap-3 flex-col w-[467px] items-start opacity-100 p-0 flex">
            <span className="labels font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px] w-[269px]">In this document</span>
            <span className="copy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full">As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.<br />As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.</span>
          </div>
        </div>
      </div>
      <div className="downloadButton gap-1 flex-row justify-between items-end w-full bg-[#024071] opacity-100 pl-16 pr-0 py-0 flex">
        <div className="details gap-6 flex-col w-[119px] items-start opacity-100 pt-0 pb-10 px-0 flex">
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileFormat font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] w-[127.23px]">file format:</span>
            <span className="pdf font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">.pdf</span>
          </div>
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileSize font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] w-[127.23px]">file size:</span>
            <span className="112kb font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">112kb</span>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-start bg-[#0460a9] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Download PDF</span>
            <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96875 0.25V12.8055L2.19375 7.03047L0.75 8.5L9 16.75L17.25 8.5L15.8063 7.03047L10.0312 12.8055V0.25H7.96875Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && mLRCode == "Yes") && <>
    <div className="c23SpotlightDownloadPDF gap-0 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-[57px] top-[822px] flex">
      <div className="pdfDownload gap-[88px] flex-row items-start w-full bg-[#024071] opacity-100 px-16 py-10 flex">
        <div className="leftSide gap-[137px] flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <div className="tagAndTitle gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="labels font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">Related resource</span>
            <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-white text-left tracking-[0px] w-full">GEP-NET’s <br />What you need to know</span>
          </div>
        </div>
        <div className="contentAndDownload gap-[82px] flex-col items-start opacity-100 p-0 flex">
          <div className="content gap-3 flex-col w-[467px] items-start opacity-100 p-0 flex">
            <span className="labels font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px] w-[269px]">In this document</span>
            <span className="copy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full">As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.<br />As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.</span>
          </div>
        </div>
      </div>
      <div className="downloadButton gap-1 flex-row justify-between items-end w-full bg-[#024071] opacity-100 pl-16 pr-0 py-0 flex">
        <div className="details gap-6 flex-col items-start opacity-100 pt-0 pb-10 px-0 flex">
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileFormat font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] w-[127.23px]">file format:</span>
            <span className="pdf font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">.pdf</span>
          </div>
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileSize font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] w-[127.23px]">file size:</span>
            <span className="112kb font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">112kb</span>
          </div>
          <div className="details gap-2 flex-row items-center opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-start bg-[#0460a9] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Download PDF</span>
            <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96875 0.25V12.8055L2.19375 7.03047L0.75 8.5L9 16.75L17.25 8.5L15.8063 7.03047L10.0312 12.8055V0.25H7.96875Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && mLRCode == "No") && <>
    <div className="c23SpotlightDownloadPDF gap-0 absolute flex-col w-[1440px] items-start bg-white opacity-100 px-12 py-16 left-[1487px] top-[72px] flex">
      <div className="pdfDownload gap-[88px] flex-row items-start w-full bg-[#024071] opacity-100 px-16 py-10 flex">
        <div className="leftSide gap-[171px] flex-col w-[646px] items-start opacity-100 p-0 flex">
          <div className="tagAndTitle gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="labels font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">Related resource</span>
            <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-white text-left tracking-[0px] w-full">GEP-NET’s What you need to know</span>
          </div>
        </div>
        <div className="contentAndDownload gap-[82px] flex-col w-[466px] items-start opacity-100 p-0 flex">
          <div className="content gap-3 flex-col w-[467px] items-start opacity-100 p-0 flex">
            <span className="labels font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px] w-[269px]">In this document</span>
            <span className="copy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full">As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.</span>
          </div>
        </div>
      </div>
      <div className="downloadButton gap-1 flex-row justify-between items-end w-full bg-[#024071] opacity-100 pl-16 pr-0 py-0 flex">
        <div className="details gap-6 flex-col w-[119px] items-start opacity-100 pt-0 pb-10 px-0 flex">
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileFormat font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] w-[127.23px]">file format:</span>
            <span className="pdf font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">.pdf</span>
          </div>
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileSize font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] w-[127.23px]">file size:</span>
            <span className="112kb font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">112kb</span>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-start bg-[#0460a9] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Download PDF</span>
            <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96875 0.25V12.8055L2.19375 7.03047L0.75 8.5L9 16.75L17.25 8.5L15.8063 7.03047L10.0312 12.8055V0.25H7.96875Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && mLRCode == "Yes") && <>
    <div className="c23SpotlightDownloadPDF gap-0 absolute flex-col w-[1440px] items-start bg-white opacity-100 px-12 py-16 left-[1487px] top-[822px] flex">
      <div className="pdfDownload gap-[88px] flex-row items-start w-full bg-[#024071] opacity-100 px-16 py-10 flex">
        <div className="leftSide gap-[171px] flex-col w-[646px] items-start opacity-100 p-0 flex">
          <div className="tagAndTitle gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="labels font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">Related resource</span>
            <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-white text-left tracking-[0px] w-full">GEP-NET’s What you need to know</span>
          </div>
        </div>
        <div className="contentAndDownload gap-[82px] flex-col items-start opacity-100 p-0 flex">
          <div className="content gap-3 flex-col w-[466px] items-start opacity-100 p-0 flex">
            <span className="labels font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px] w-[269px]">In this document</span>
            <span className="copy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full">As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.</span>
          </div>
        </div>
      </div>
      <div className="downloadButton gap-1 flex-row justify-between items-end w-full bg-[#024071] opacity-100 pl-16 pr-0 py-0 flex">
        <div className="details gap-6 flex-col items-start opacity-100 pt-0 pb-10 px-0 flex">
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileFormat font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] w-[127.23px]">file format:</span>
            <span className="pdf font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">.pdf</span>
          </div>
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileSize font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] w-[127.23px]">file size:</span>
            <span className="112kb font-['Volta_Modern_Display'] text-[15px] font-semibold text-white text-left tracking-[0px]">112kb</span>
          </div>
          <div className="details gap-2 flex-row items-center opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-start bg-[#0460a9] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Download PDF</span>
            <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96875 0.25V12.8055L2.19375 7.03047L0.75 8.5L9 16.75L17.25 8.5L15.8063 7.03047L10.0312 12.8055V0.25H7.96875Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && mLRCode == "No") && <>
    <div className="c23SpotlightDownloadPDF gap-0 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[3137px] top-[62px] flex">
      <div className="pdfDownload gap-2 flex-col items-start w-full bg-[#024071] opacity-100 px-8 py-10 flex">
        <div className="frame482546 gap-[85px] flex-row items-start w-full opacity-100 p-0 flex">
          <div className="leftSide gap-[118px] flex-col h-full items-start w-[247px] opacity-100 p-0 flex">
            <div className="frame482383 gap-3 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="labels font-['Volta_Modern_Display'] text-sm font-semibold text-white text-left tracking-[0px]">Related resource</span>
              <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-white text-left tracking-[-0.35px] w-full">GEP-NET’s <br />What you need to know</span>
            </div>
          </div>
          <div className="contentAndDownload gap-[88px] flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="content gap-3 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="labels font-['Volta_Modern_Display'] text-sm font-semibold text-white text-left tracking-[0px] w-[269px]">In this document</span>
              <span className="copy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full">As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="downloadButton gap-1 flex-row justify-between items-end w-full bg-[#024071] opacity-100 pl-8 pr-0 py-0 flex">
        <div className="details gap-6 flex-col w-[119px] items-start opacity-100 pt-0 pb-10 px-0 flex">
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileFormat font-['Volta_Modern_Display'] text-sm font-medium text-white text-left tracking-[0px] w-[127.23px]">file format:</span>
            <span className="pdf font-['Volta_Modern_Display'] text-sm font-semibold text-white text-left tracking-[0px]">.pdf</span>
          </div>
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileSize font-['Volta_Modern_Display'] text-sm font-medium text-white text-left tracking-[0px] w-[127.23px]">file size:</span>
            <span className="112kb font-['Volta_Modern_Display'] text-sm font-semibold text-white text-left tracking-[0px]">112kb</span>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-start bg-[#0460a9] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Download PDF</span>
            <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96875 0.25V12.8055L2.19375 7.03047L0.75 8.5L9 16.75L17.25 8.5L15.8063 7.03047L10.0312 12.8055V0.25H7.96875Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && mLRCode == "Yes") && <>
    <div className="c23SpotlightDownloadPDF gap-0 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[3137px] top-[812px] flex">
      <div className="pdfDownload gap-2 flex-col items-start w-full bg-[#024071] opacity-100 px-8 py-10 flex">
        <div className="frame482546 gap-[85px] flex-row items-start w-full opacity-100 p-0 flex">
          <div className="leftSide gap-[118px] flex-col h-full items-start w-[247px] opacity-100 p-0 flex">
            <div className="frame482383 gap-3 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="labels font-['Volta_Modern_Display'] text-sm font-semibold text-white text-left tracking-[0px]">Related resource</span>
              <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-white text-left tracking-[-0.35px] w-full">GEP-NET’s <br />What you need to know</span>
            </div>
          </div>
          <div className="contentAndDownload gap-[88px] flex-col h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
            <div className="content gap-3 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="labels font-['Volta_Modern_Display'] text-sm font-semibold text-white text-left tracking-[0px] w-[269px]">In this document</span>
              <span className="copy font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px] w-full">As a top-line introduction, this slide deck is a useful place for anyone new to NETs to understand the fundamentals, discussing everything from the definition of NETs, classification and grading, through to diagnosis and treatment.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="downloadButton gap-1 flex-row justify-between items-end w-full bg-[#024071] opacity-100 pl-8 pr-0 py-0 flex">
        <div className="details gap-6 flex-col items-start opacity-100 pt-0 pb-10 px-0 flex">
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileFormat font-['Volta_Modern_Display'] text-sm font-medium text-white text-left tracking-[0px] w-[127.23px]">file format:</span>
            <span className="pdf font-['Volta_Modern_Display'] text-sm font-semibold text-white text-left tracking-[0px]">.pdf</span>
          </div>
          <div className="details gap-0 flex-row justify-between items-center w-full opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="fileSize font-['Volta_Modern_Display'] text-sm font-medium text-white text-left tracking-[0px] w-[127.23px]">file size:</span>
            <span className="112kb font-['Volta_Modern_Display'] text-sm font-semibold text-white text-left tracking-[0px]">112kb</span>
          </div>
          <div className="details gap-2 flex-row items-center opacity-100 pt-0 pb-[3px] px-0 border-b-white border-b flex">
            <span className="aAALu177UK1994June2023 font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px]">AAA-Lu177-UK-1994 | June 2023</span>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-start bg-[#0460a9] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Download PDF</span>
            <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
              <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96875 0.25V12.8055L2.19375 7.03047L0.75 8.5L9 16.75L17.25 8.5L15.8063 7.03047L10.0312 12.8055V0.25H7.96875Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}