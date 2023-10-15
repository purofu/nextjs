import React from 'react';

export function ContainerLink(props){
	const {
    state = "active"
  } = props;
  return (
      <>
  {(state == "active") && <>
    <div className="containerLink gap-0 absolute flex-col items-start bg-[#6e7e8e] opacity-100 px-9 py-5 left-2 top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Patient Qualification Checklist</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16675L14.6667 14.8001L14.6667 6.91675L16.5 6.91675L16.5 17.9167L5.5 17.9167L5.5 16.0834L13.3833 16.0834L2.75 5.45008L4.03333 4.16675Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "State4") && <>
    <div className="containerLink gap-0 absolute flex-col items-start bg-[#6e7e8e] opacity-100 px-9 py-5 left-[832px] top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Patient Qualification Checklist</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17.1L15.6 5.5L7 5.5L7 3.5L19 3.5L19 15.5L17 15.5L17 6.9L5.4 18.5L4 17.1Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "hover") && <>
    <div className="containerLink gap-0 absolute flex-col items-start bg-[#34495e] opacity-100 px-9 py-5 left-[401px] top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Patient Qualification Checklist</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16675L14.6667 14.8001L14.6667 6.91675L16.5 6.91675L16.5 17.9167L5.5 17.9167L5.5 16.0834L13.3833 16.0834L2.75 5.45008L4.03333 4.16675Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "State3") && <>
    <div className="containerLink gap-0 absolute flex-col items-start bg-[#34495e] opacity-100 px-9 py-5 left-[1225px] top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Patient Qualification Checklist</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17.1L15.6 5.5L7 5.5L7 3.5L19 3.5L19 15.5L17 15.5L17 6.9L5.4 18.5L4 17.1Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
</>
  );
}