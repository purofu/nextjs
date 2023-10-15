import React from 'react';

export function TertiaryCTA(props){
	const {
    icon = "Yes",
    size = "XL-L",
    state = "active",
    underline = "No",
    destination = "Internal"
  } = props;
  return (
      <>
  {(size == "XL-L" && state == "active" && icon == "No" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-4 top-[124px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
    </div>
  </>}
  {(size == "M-S" && state == "active" && icon == "Yes" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-4 top-[78px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 3.66675L14.6667 14.3001L14.6667 6.41675L16.5 6.41675L16.5 17.4167L5.5 17.4167L5.5 15.5834L13.3833 15.5834L2.75 4.95008L4.03333 3.66675Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "M-S" && state == "active" && icon == "Yes" && underline == "No" && destination == "External") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[773px] top-[78px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16.6L15.6 5L7 5L7 3L19 3L19 15L17 15L17 6.4L5.4 18L4 16.6Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "XL-L" && state == "active" && icon == "Yes" && underline == "No" && destination == "External") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[773px] top-[23px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16.6L15.6 5L7 5L7 3L19 3L19 15L17 15L17 6.4L5.4 18L4 16.6Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
  {(size == "M-S" && state == "active" && icon == "No" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-4 top-[174px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
    </div>
  </>}
  {(size == "XL-L" && state == "hover" && icon == "Yes" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[253px] top-[27px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#023054] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 3.66675L14.6667 14.3001L14.6667 6.41675L16.5 6.41675L16.5 17.4167L5.5 17.4167L5.5 15.5834L13.3833 15.5834L2.75 4.95008L4.03333 3.66675Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "XL-L" && state == "hover" && icon == "Yes" && underline == "No" && destination == "External") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[1010px] top-[27px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#023054] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16.6L15.6 5L7 5L7 3L19 3L19 15L17 15L17 6.4L5.4 18L4 16.6Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "XL-L" && state == "Disabled" && icon == "Yes" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[513px] top-[25px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#9e9e9e] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 3.66675L14.6667 14.3001L14.6667 6.41675L16.5 6.41675L16.5 17.4167L5.5 17.4167L5.5 15.5834L13.3833 15.5834L2.75 4.95008L4.03333 3.66675Z" fill="#9E9E9E" />
      </svg>
    </div>
  </>}
  {(size == "XL-L" && state == "Disabled" && icon == "Yes" && underline == "No" && destination == "External") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[1270px] top-[25px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#9e9e9e] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16.6L15.6 5L7 5L7 3L19 3L19 15L17 15L17 6.4L5.4 18L4 16.6Z" fill="#9E9E9E" />
      </svg>
    </div>
  </>}
  {(size == "XL-L" && state == "hover" && icon == "No" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[253px] top-[123px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#023054] text-left tracking-[0px]">View link</span>
    </div>
  </>}
  {(size == "XL-L" && state == "Disabled" && icon == "No" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[513px] top-[121px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#9e9e9e] text-left tracking-[0px]">View link</span>
    </div>
  </>}
  {(size == "M-S" && state == "hover" && icon == "Yes" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[253px] top-[77px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#023054] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 3.66675L14.6667 14.3001L14.6667 6.41675L16.5 6.41675L16.5 17.4167L5.5 17.4167L5.5 15.5834L13.3833 15.5834L2.75 4.95008L4.03333 3.66675Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "M-S" && state == "hover" && icon == "Yes" && underline == "No" && destination == "External") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[1010px] top-[77px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#023054] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16.6L15.6 5L7 5L7 3L19 3L19 15L17 15L17 6.4L5.4 18L4 16.6Z" fill="#023054" />
      </svg>
    </div>
  </>}
  {(size == "M-S" && state == "Disabled" && icon == "Yes" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[513px] top-[75px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#9e9e9e] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 3.66675L14.6667 14.3001L14.6667 6.41675L16.5 6.41675L16.5 17.4167L5.5 17.4167L5.5 15.5834L13.3833 15.5834L2.75 4.95008L4.03333 3.66675Z" fill="#9E9E9E" />
      </svg>
    </div>
  </>}
  {(size == "M-S" && state == "Disabled" && icon == "Yes" && underline == "No" && destination == "External") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[1270px] top-[75px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#9e9e9e] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16.6L15.6 5L7 5L7 3L19 3L19 15L17 15L17 6.4L5.4 18L4 16.6Z" fill="#9E9E9E" />
      </svg>
    </div>
  </>}
  {(size == "M-S" && state == "hover" && icon == "No" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[253px] top-[173px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#023054] text-left tracking-[0px]">View link</span>
    </div>
  </>}
  {(size == "M-S" && state == "Disabled" && icon == "No" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-[513px] top-[171px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-base font-medium text-[#9e9e9e] text-left tracking-[0px]">View link</span>
    </div>
  </>}
  {(size == "XL-L" && state == "active" && icon == "Yes" && underline == "No" && destination == "Internal") && <>
    <div className="tertiaryCTA gap-2 absolute flex-row items-center opacity-100 px-0 py-1.5 left-4 top-[31px] flex">
      <span className="viewLink font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">View link</span>
      <svg className="interactiveIcons" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.03333 3.66675L14.6667 14.3001L14.6667 6.41675L16.5 6.41675L16.5 17.4167L5.5 17.4167L5.5 15.5834L13.3833 15.5834L2.75 4.95008L4.03333 3.66675Z" fill="#0460A9" />
      </svg>
    </div>
  </>}
</>
  );
}