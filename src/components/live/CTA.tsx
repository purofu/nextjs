import React from 'react';

export function CTA(props){
	const {
    type = "view as list"
  } = props;
  return (
      <>
  {(type == "view as list") && <>
    <div className="cTA gap-3 absolute flex-row w-[343px] items-center bg-[#0d2741] opacity-100 pl-3 pr-4 py-3 rounded-sm left-[35px] top-7 flex">
      <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
        <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 11.6347V10.1347H17.5V11.6347H0.5ZM0.5 6.75005V5.2501H17.5V6.75005H0.5ZM0.5 1.86545V0.365479H17.5V1.86545H0.5Z" fill="white" />
        </svg>
      </div>
      <span className="copy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">View as list</span>
    </div>
  </>}
  {(type == "view as map") && <>
    <div className="cTA gap-3 absolute flex-row w-[343px] items-center bg-[#0d2741] opacity-100 pl-3 pr-4 py-3 rounded-sm left-[35px] top-[88px] flex">
      <div className="interactiveIcons w-6 h-6 relative opacity-100 p-0">
        <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.4616L5.99998 15.3616L1.69615 17.027C1.40128 17.1411 1.12821 17.1084 0.876925 16.9289C0.625642 16.7494 0.5 16.5039 0.5 16.1924V3.07703C0.5 2.87959 0.552892 2.70235 0.658675 2.5453C0.764442 2.38825 0.912833 2.27447 1.10385 2.20395L5.99998 0.538574L12 2.63857L16.3038 0.9732C16.5987 0.8591 16.8717 0.886983 17.123 1.05685C17.3743 1.22672 17.5 1.46422 17.5 1.76935V14.9616C17.5 15.1654 17.4423 15.3443 17.3269 15.4981C17.2115 15.652 17.0551 15.7642 16.8576 15.8347L12 17.4616ZM11.25 15.627V3.927L6.74995 2.35392V14.0539L11.25 15.627ZM12.75 15.627L16 14.5501V2.70007L12.75 3.927V15.627ZM1.99997 15.3001L5.25 14.0539V2.35392L1.99997 3.45007V15.3001Z" fill="white" />
        </svg>
      </div>
      <span className="copy font-['Volta_Modern_Display'] text-base font-medium text-white text-left tracking-[0px]">View as Map </span>
    </div>
  </>}
</>
  );
}