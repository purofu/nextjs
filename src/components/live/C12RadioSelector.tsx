import React from 'react';

export function C12RadioSelector(props){
	const {
    size = "L(LHN)",
    sectionHead = "Yes",
    varient = "Default"
  } = props;
  return (
      <>
  {(size == "L" && sectionHead == "Yes" && varient == "Default") && <>
    <div className="c12RadioSelector gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 pl-[162px] pr-12 pt-16 pb-24 left-[1497px] top-[98px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1278px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Choose your current setup</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="rightContentArea gap-0 flex-col items-start w-full opacity-100 p-0 border-l-[#53795d] border-l flex">
        <div className="title gap-3 flex-col items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[62px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-[759px]">Where are you in your journey to get set up?</span>
        </div>
      </div>
      <div className="choices gap-6 flex-row h-[356px] items-start w-full opacity-100 p-0 flex">
        <div className="radioSelectorCards gap-[93px] flex-col h-full items-start flex-1 min-w-0 opacity-100 p-[23px] border-y-[#212121] border-t border-b flex">
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">01</span>
            <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-col h-full items-start flex-1 min-w-0 opacity-100 p-[23px] border-y-[#212121] border-t border-b flex">
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">02</span>
            <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-col h-full items-start flex-1 min-w-0 opacity-100 p-[23px] border-y-[#212121] border-t border-b flex">
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">03</span>
            <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">My site is eqipped to deliver RLI but is new to RLT</span>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-col h-full items-start flex-1 min-w-0 bg-[#0460a9] opacity-100 p-[23px] border-y-[#1b1b1b] border-t border-b flex">
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
              <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
            </div>
          </div>
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">04</span>
            <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && sectionHead == "Yes" && varient == "Default") && <>
    <div className="c12RadioSelector gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 pl-[152px] pr-16 pt-16 pb-24 left-24 top-[98px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1012px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Choose your current setup</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="rightContentArea gap-0 flex-col w-[948px] items-start opacity-100 p-0 border-l-[#53795d] border-l flex">
        <div className="title gap-3 flex-col items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[62px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-[759px]">Where are you in your journey to get set up?</span>
        </div>
      </div>
      <div className="allChoices gap-5 flex-row items-start w-full opacity-100 p-0 border-b-[#ff0000] border-b flex">
        <div className="radioSelectorCards gap-[93px] flex-col h-full items-start flex-1 min-w-0 opacity-100 p-[23px] border-y-[#212121] border-t border-b flex">
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">01</span>
            <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-col items-start flex-1 min-w-0 opacity-100 p-[23px] border-y-[#212121] border-t border-b flex">
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">02</span>
            <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-col h-full items-start flex-1 min-w-0 opacity-100 p-[23px] border-y-[#212121] border-t border-b flex">
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#212121] inset-[0%]" />
            </div>
          </div>
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">03</span>
            <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">My site is eqipped to deliver RLI but is new to RLT</span>
          </div>
        </div>
        <div className="radioSelectorCards gap-[93px] flex-col items-start flex-1 min-w-0 bg-[#0460a9] opacity-100 p-[23px] border-y-[#1b1b1b] border-t border-b flex">
          <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
            <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
              <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
              <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
            </div>
          </div>
          <div className="text gap-1 flex-col justify-center items-start w-full opacity-100 p-0 flex">
            <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px]">04</span>
            <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "Yes" && varient == "Default") && <>
    <div className="c12RadioSelector gap-16 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-16 pb-10 px-0 left-[4179px] top-[98px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[375px] items-start opacity-100 pl-4 pr-0 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Choose your current setup</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="title gap-[60px] flex-col items-start w-full opacity-100 px-4 py-0 flex">
        <div className="frame1006 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="whereAreYouInYourJourneyToGetSetUp font-['Volta_Modern_Display'] text-[43px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-full">Where are you in your journey to get set up?</span>
        </div>
      </div>
      <div className="radios gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="radioSelectorCards gap-0 flex-col items-start w-full overflow-hidden bg-white opacity-100 pt-0 pb-6 px-0 border-t-black border-t flex">
          <div className="line gap-1 flex-col items-start w-full opacity-100 px-4 py-0 flex">
            <div className="rectangle4134 w-full h-px relative bg-[#1b1b1b] opacity-100 p-0" />
          </div>
          <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-4 flex">
            <div className="frame1021 gap-0 flex-row items-start h-full opacity-100 pl-0 pr-8 py-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px] w-full">01</span>
              <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-0 flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 pt-0 pb-6 px-0 border-t-black border-t flex">
          <div className="line gap-1 flex-col w-[375px] items-start opacity-100 px-4 py-0 flex">
            <div className="rectangle4134 w-full h-px relative bg-[#1b1b1b] opacity-100 p-0" />
          </div>
          <div className="frame1050 gap-4 flex-row w-[375px] items-start opacity-100 pt-6 pb-0 px-4 flex">
            <div className="frame1021 gap-0 flex-row items-start h-full opacity-100 pl-0 pr-8 py-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px] w-full">02</span>
              <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-0 flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 pt-0 pb-6 px-0 border-t-black border-t flex">
          <div className="line gap-1 flex-col w-[375px] items-start opacity-100 px-4 py-0 flex">
            <div className="rectangle4134 w-full h-px relative bg-[#1b1b1b] opacity-100 p-0" />
          </div>
          <div className="frame1050 gap-4 flex-row w-[375px] items-start opacity-100 pt-6 pb-0 px-4 flex">
            <div className="frame1021 gap-0 flex-row items-start h-full opacity-100 pl-0 pr-8 py-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px] w-full">03</span>
              <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">My site is eqipped to deliver RLI but is new to RLT</span>
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-0 flex-col items-start w-full overflow-hidden bg-[#0460a9] opacity-100 pt-0 pb-6 px-0 border-t-black border-t flex">
          <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-4 flex">
            <div className="frame1021 gap-0 flex-row items-start h-full opacity-100 pl-0 pr-8 py-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
                <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
              </div>
            </div>
            <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px] w-full">04</span>
              <span className="title font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "Yes" && varient == "Default") && <>
    <div className="c12RadioSelector gap-16 absolute flex-col w-[768px] items-start overflow-hidden bg-white opacity-100 pt-16 pb-10 px-0 left-[3174px] top-[98px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[768px] items-start opacity-100 pl-8 pr-0 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Choose your current setup</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="title gap-[60px] flex-col items-start w-full opacity-100 px-8 py-0 flex">
        <span className="whereAreYouInYourJourneyToGetSetUp font-['Volta_Modern_Display'] text-[54px] font-normal text-[#1b1b1b] text-left tracking-[-0.35px] w-full">Where are you in your journey to get set up?</span>
      </div>
      <div className="radios gap-0 flex-col w-[768px] items-start opacity-100 p-0 flex">
        <div className="radioSelectorCards gap-0 flex-col items-start w-full overflow-hidden bg-white opacity-100 pt-0 pb-6 px-0 border-t-black border-t flex">
          <div className="line gap-1 flex-col items-start w-full opacity-100 px-8 py-0 flex">
            <div className="rectangle4134 w-full h-px relative bg-[#1b1b1b] opacity-100 p-0" />
          </div>
          <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-8 flex">
            <div className="frame1021 gap-0 flex-row w-[42px] items-start opacity-100 pl-0 pr-8 py-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px] w-full">01</span>
              <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-0 flex-col items-start w-full overflow-hidden bg-white opacity-100 pt-0 pb-6 px-0 border-t-black border-t flex">
          <div className="line gap-1 flex-col items-start w-full opacity-100 px-8 py-0 flex">
            <div className="rectangle4134 w-full h-px relative bg-[#1b1b1b] opacity-100 p-0" />
          </div>
          <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-8 flex">
            <div className="frame1021 gap-0 flex-row w-[42px] items-start opacity-100 pl-0 pr-8 py-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px] w-full">02</span>
              <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-0 flex-col items-start w-full overflow-hidden bg-white opacity-100 pt-0 pb-6 px-0 border-t-black border-t flex">
          <div className="line gap-1 flex-col items-start w-full opacity-100 px-8 py-0 flex">
            <div className="rectangle4134 w-full h-px relative bg-[#1b1b1b] opacity-100 p-0" />
          </div>
          <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-8 flex">
            <div className="frame1021 gap-0 flex-row w-[42px] items-start opacity-100 pl-0 pr-8 py-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#1b1b1b] text-left tracking-[0px] w-full">03</span>
              <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-[#1b1b1b] text-left tracking-[0px] w-full">My site is eqipped to deliver RLI but is new to RLT</span>
            </div>
          </div>
        </div>
        <div className="radioSelectorCards gap-0 flex-col items-start w-full overflow-hidden bg-[#0460a9] opacity-100 pt-0 pb-6 px-0 border-t-black border-t flex">
          <div className="frame1050 gap-4 flex-row items-start w-full opacity-100 pt-6 pb-0 px-8 flex">
            <div className="frame1021 gap-0 flex-row w-[42px] items-start opacity-100 pl-0 pr-8 py-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
                <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
              </div>
            </div>
            <div className="frame1078 gap-1 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px] w-full">04</span>
              <span className="title font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">Equipped to deliver Novartis RLT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "Yes" && varient == "Dropdown") && <>
    <div className="c12RadioSelector gap-16 absolute flex-col w-[375px] items-start bg-white opacity-100 pt-16 pb-10 px-0 left-[4179px] top-[1103px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[375px] items-start opacity-100 pl-4 pr-0 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Choose your current setup</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="title gap-[60px] flex-col items-start w-full opacity-100 px-4 py-0 flex">
        <div className="frame1006 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="whereAreYouInYourJourneyToGetSetUp font-['Volta_Modern_Display'] text-[43px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-full">Where are you in your journey to get set up?</span>
        </div>
      </div>
      <div className="radios gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="choices gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="checklistItem gap-6 flex-row justify-between items-start w-full bg-white opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
            <div className="content gap-4 flex-row w-[319px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <div className="frame1032 gap-3 flex-col h-full items-start opacity-100 p-0 flex">
                <div className="checkbox w-8 h-8 relative opacity-100 p-0">
                  <div className="rectangle3854 absolute w-8 h-8 opacity-100 p-0 rounded-[900px] border-[1.13px] border-[#212121] inset-[0%]" />
                </div>
              </div>
              <div className="frame1039 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
                <span className="01 font-['Volta_Modern_Display'] text-sm font-semibold text-[#212121] text-left tracking-[0px] w-full">02</span>
                <span className="initialFormsCompletedToStartSetupOnboardingToRTL font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Speaking to one of our in-house experts</span>
              </div>
            </div>
            <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8.60122L12 16.5723L4 8.60123L5.17607 7.42941L12 14.2286L18.8239 7.42941L20 8.60122Z" fill="#0460A9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "Yes" && varient == "Carousel") && <>
    <div className="c12RadioSelector gap-16 absolute flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 pt-16 pb-10 px-0 left-[4179px] top-[1698px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[375px] items-start opacity-100 pl-4 pr-0 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Choose your current setup</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="title gap-[60px] flex-col items-start w-full opacity-100 px-4 py-0 flex">
        <div className="frame1006 gap-4 flex-col items-start w-full opacity-100 p-0 flex">
          <span className="whereAreYouInYourJourneyToGetSetUp font-['Volta_Modern_Display'] text-[43px] font-medium text-[#1b1b1b] text-left tracking-[-0.35px] w-full">Where are you in your journey to get set up?</span>
        </div>
      </div>
      <div className="frame483098 gap-4 flex-col items-start opacity-100 pl-4 pr-0 py-0 flex">
        <div className="frame483077 gap-6 flex-row items-start opacity-100 p-0 flex">
          <div className="carouselCards gap-[120px] flex-col w-[252px] h-[430px] items-start opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
            <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="01 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-full">01</span>
              <span className="equippedToDeliverNovartisRLT font-['Volta_Modern_Display'] text-[28px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Equipped to deliver Novartis RLT</span>
            </div>
          </div>
          <div className="carouselCards gap-[120px] flex-col w-[252px] h-[430px] items-start opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
            <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="02 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-full">02</span>
              <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[28px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
            </div>
          </div>
          <div className="carouselCards gap-[120px] flex-col w-[252px] h-[430px] items-start opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
            <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3978 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-[#767676] inset-[0%]" />
              </div>
            </div>
            <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="03 font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-full">03</span>
              <span className="mySiteIsEqippedToDeliverRLIButIsNewToRLT font-['Volta_Modern_Display'] text-[28px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">My site is eqipped to deliver RLI but is new to RLT</span>
            </div>
          </div>
          <div className="carouselCards gap-[120px] flex-col w-[252px] h-[430px] items-start bg-[#0460a9] opacity-100 px-[15px] py-[23px] border-y-[#212121] border-t border-b flex">
            <div className="frame798 gap-1 flex-row items-start w-full opacity-100 p-0 flex">
              <div className="radio w-[42px] h-[42px] relative opacity-100 p-0">
                <div className="rectangle3965 absolute w-[42px] h-[42px] border opacity-100 p-0 rounded-[900px] border-white inset-[0%]" />
                <div className="rectangle3966 absolute w-[21px] h-[21px] bg-white opacity-100 p-0 rounded-[900px] border-[1.13px] border-white inset-1/4" />
              </div>
            </div>
            <div className="frame482891 gap-2 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="04 font-['Volta_Modern_Display'] text-base font-semibold text-white text-left tracking-[0px] w-full">04</span>
              <span className="equippedToDeliverRLTRLIButIsNewToNovartissProduct font-['Volta_Modern_Display'] text-[28px] font-medium text-white text-left tracking-[-0.35px] w-full">Equipped to deliver RLT/RLI but is new to Novartis's product</span>
            </div>
          </div>
        </div>
        <div className="frame482927 gap-[23px] flex-row w-[340px] justify-between items-center opacity-100 px-0 py-4 flex">
          <div className="frame482768 gap-2 flex-row items-start opacity-100 p-0 flex">
            <div className="radio w-3 h-3 relative bg-white opacity-100 p-0">
              <div className="rectangle3978 absolute w-3 h-3 border bg-[#6e7e8e] opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
            </div>
            <div className="radio w-3 h-3 relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
            </div>
            <div className="radio w-3 h-3 relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
            </div>
            <div className="radio w-3 h-3 relative opacity-100 p-0">
              <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
            </div>
          </div>
          <div className="frame483034 gap-[23px] flex-row justify-end items-center opacity-100 p-0 flex">
            <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3988 20L7.42774 12L15.3988 4L16.5706 5.17607L9.77139 12L16.5706 18.8239L15.3988 20Z" fill="#1B1B1B" />
            </svg>
            <svg className="interactiveIcons" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.60123 4L16.5723 12L8.60123 20L7.42941 18.8239L14.2286 12L7.42941 5.17607L8.60123 4Z" fill="#1B1B1B" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}