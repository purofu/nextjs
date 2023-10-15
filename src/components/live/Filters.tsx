import React from 'react';

export function Filters(props){
	const {
    size = "XL",
    type = "featured",
    state = "on"
  } = props;
  return (
      <>
  {(size == "XL" && type == "featured" && state == "off") && <>
    <div className="filters w-[172px] h-[94px] absolute opacity-100 p-0 left-[201px] top-4">
      <div className="bg absolute w-[172px] h-[94px] rounded bg-white opacity-100 p-0 inset-[0%]" />
      <div className="interactiveIcons absolute w-5 h-5 opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
        <div className="boundingBox absolute w-5 h-5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.16797 6.83341H0.167969V5.16675H5.16797V0.166748H6.83464V5.16675H11.8346V6.83341H6.83464V11.8334H5.16797V6.83341Z" fill="#1C1B1F" />
        </svg>
      </div>
      <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[6.98%] right-[61.63%] top-[71.28%] bottom-[8.51%]">Therapy</span>
    </div>
  </>}
  {(size == "XL" && type == "featured" && state == "on") && <>
    <div className="filters w-[172px] h-[94px] absolute opacity-100 p-0 left-[21px] top-4">
      <div className="bg absolute w-[172px] h-[94px] rounded bg-[#0d2741] opacity-100 p-0 inset-[0%]" />
      <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-left tracking-[0px] absolute left-[6.98%] right-[63.37%] top-[71.28%] bottom-[8.51%]">Imaging</span>
      <div className="interactiveIcons absolute w-4 h-4 opacity-100 p-0 left-[86.05%] right-[4.65%] top-[8.51%] bottom-[74.47%]">
        <div className="boundingBox absolute w-4 h-4 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.26536 9.66659L0.332031 8.73325L4.06536 4.99992L0.332031 1.26659L1.26536 0.333252L4.9987 4.06659L8.73203 0.333252L9.66537 1.26659L5.93203 4.99992L9.66537 8.73325L8.73203 9.66659L4.9987 5.93325L1.26536 9.66659Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(size == "M" && type == "featured" && state == "on") && <>
    <div className="filters w-[150px] h-[82px] absolute opacity-100 p-0 left-[408px] top-4">
      <div className="bg absolute w-[150px] h-[82px] rounded bg-[#0d2741] opacity-100 p-0 inset-[0%]" />
      <div className="interactiveIcons absolute w-3.5 h-3.5 opacity-100 p-0 left-[85.33%] right-[5.33%] top-[9.76%] bottom-[73.17%]">
        <div className="boundingBox absolute w-3.5 h-3.5 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.73464 9.08646L0.917969 8.26957L4.18464 5.00197L0.917969 1.73438L1.73464 0.91748L5.0013 4.18507L8.26797 0.91748L9.08463 1.73438L5.81797 5.00197L9.08463 8.26957L8.26797 9.08646L5.0013 5.81887L1.73464 9.08646Z" fill="white" />
        </svg>
      </div>
      <span className="title font-['Volta_Modern_Display'] text-sm font-medium text-white text-left tracking-[0px] absolute left-[8%] right-[60%] top-[69.51%] bottom-[8.54%]">Imaging</span>
    </div>
  </>}
  {(size == "M" && type == "featured" && state == "off") && <>
    <div className="filters w-[150px] h-[82px] absolute opacity-100 p-0 left-[566px] top-4">
      <div className="bg absolute w-[150px] h-[82px] bg-white opacity-100 p-0 rounded-[3.5113635063171387px] inset-[0%]" />
      <div className="interactiveIcons absolute w-[17.44px] h-[17.45px] opacity-100 p-0 left-[83.72%] right-[4.65%] top-[8.51%] bottom-[70.21%]">
        <div className="boundingBox absolute w-[17.44px] h-[17.45px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.57531 6.43084H0.214844V4.97694H4.57531V0.615234H6.0288V4.97694H10.3893V6.43084H6.0288V10.7925H4.57531V6.43084Z" fill="#1C1B1F" />
        </svg>
      </div>
      <span className="title font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] absolute left-[8%] right-[56%] top-[69.51%] bottom-[7.32%]">Therapy</span>
    </div>
  </>}
</>
  );
}