import React from 'react';

export function C36LongfromHeroImage(props){
	const {
    size = "L",
    caption = "Yes"
  } = props;
  return (
      <>
  {(size == "L" && caption == "Yes") && <>
    <div className="c36LongfromHeroImage gap-12 absolute flex-col w-[1440px] h-[794px] items-start bg-white opacity-100 pt-0 pb-12 px-0 left-4 top-[25px] flex">
      <div className="frame482491 gap-2 flex-col items-start opacity-100 p-0 flex">
        <div className="rectangle4083 w-[1440px] h-[720px] relative bg-[#d9d9d9] opacity-100 p-0" />
        <div className="frame482734 gap-2 flex-row items-start opacity-100 pl-12 pr-0 py-0 flex">
          <span className="imageProteinDeconstructionInSolutionOfAminos font-['Volta_Modern_Display'] text-[15px] font-semibold text-[#212121] text-left tracking-[0px]">image: protein deconstruction in solution of aminos</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && caption == "No") && <>
    <div className="c36LongfromHeroImage gap-12 absolute flex-col w-[1440px] items-start bg-white opacity-100 pt-0 pb-12 px-0 left-4 top-[901px] flex">
      <div className="frame482491 gap-2 flex-col items-start opacity-100 p-0 flex">
        <div className="rectangle4083 w-[1440px] h-[720px] relative bg-[#d9d9d9] opacity-100 p-0" />
      </div>
    </div>
  </>}
  {(size == "M" && caption == "Yes") && <>
    <div className="c36LongfromHeroImage gap-[25.599998474121094px] absolute flex-col w-[768px] items-start bg-white opacity-100 pt-0 pb-10 px-0 left-[1591px] top-4 flex">
      <div className="frame482491 gap-[4.266666412353516px] flex-col items-start opacity-100 p-0 flex">
        <div className="rectangle4083 w-[768px] h-96 relative bg-[#d9d9d9] opacity-100 p-0" />
        <div className="frame482734 gap-[4.266666412353516px] flex-row items-start opacity-100 pl-8 pr-0 py-0 flex">
          <span className="imageProteinDeconstructionInSolutionOfAminos font-['Volta_Modern_Display'] text-sm font-semibold text-[#212121] text-left tracking-[0px]">image: protein deconstruction in solution of aminos</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && caption == "No") && <>
    <div className="c36LongfromHeroImage gap-[25.599998474121094px] absolute flex-col w-[768px] items-start bg-white opacity-100 pt-0 pb-10 px-0 left-[1591px] top-[901px] flex">
      <div className="frame482491 gap-[4.266666412353516px] flex-col items-start opacity-100 p-0 flex">
        <div className="rectangle4083 w-[768px] h-96 relative bg-[#d9d9d9] opacity-100 p-0" />
      </div>
    </div>
  </>}
  {(size == "S" && caption == "Yes") && <>
    <div className="c36LongfromHeroImage gap-1 absolute flex-row w-[375px] items-start overflow-hidden bg-white opacity-100 pt-0 pb-10 px-0 left-[2494px] top-4 flex">
      <div className="frame1052 gap-3 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="image w-[375px] h-[210.85px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/image188.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image188 w-[428.88px] h-[286.19px] absolute top-[-35.201171875px] left-[-1.078125px] opacity-100 object-cover p-0" />
        </div>
        <div className="frame482493 gap-2 flex-row w-[375px] items-start opacity-100 px-4 py-0 flex">
          <span className="imageProteinDeconstructionInSolutionOfAminos font-['Volta_Modern_Display'] text-[13px] font-semibold text-[#212121] text-left tracking-[0px] w-[343px] flex-1 min-w-0">image: protein deconstruction in solution of aminos</span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && caption == "No") && <>
    <div className="c36LongfromHeroImage gap-1 absolute flex-row w-[375px] items-start overflow-hidden bg-white opacity-100 pt-0 pb-10 px-0 left-[2494px] top-[901px] flex">
      <div className="frame1052 gap-3 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <div className="image w-[375px] h-[210.85px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/image188.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image188 w-[428.88px] h-[286.19px] absolute top-[-35.201171875px] left-[-1.078125px] opacity-100 object-cover p-0" />
        </div>
      </div>
    </div>
  </>}
</>
  );
}