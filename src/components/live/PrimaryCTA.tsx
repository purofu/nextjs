import React from 'react';

export function PrimaryCTA(props){
	const {
    state = "Active",
    icon = "Yes",
    inverted = "No",
    destination = "Internal"
  } = props;
  return (
      <>
  {(state == "Active" && icon == "Yes" && inverted == "No" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 left-2 top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16748L14.6667 14.8008L14.6667 6.91748L16.5 6.91748L16.5 17.9175L5.5 17.9175L5.5 16.0841L13.3833 16.0841L2.75 5.45081L4.03333 4.16748Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Active" && icon == "Yes" && inverted == "No" && destination == "Anchor link") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 left-[1740px] top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
        <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00913 12.8854L12.3496 9.54486L11.3925 8.58768L9.6966 10.2835V6.10738H8.31283V10.2835L6.61697 8.58768L5.65979 9.54486L9.00913 12.8854ZM9.00184 18.2091C7.7974 18.2091 6.66529 17.9805 5.6055 17.5234C4.54569 17.0663 3.62382 16.446 2.83987 15.6624C2.0559 14.8788 1.43527 13.9573 0.977957 12.898C0.520647 11.8386 0.291992 10.7068 0.291992 9.50233C0.291992 8.29789 0.520548 7.16577 0.977659 6.10598C1.43477 5.04618 2.05512 4.12431 2.83872 3.34036C3.62233 2.55639 4.54381 1.93576 5.60314 1.47845C6.66245 1.02114 7.79433 0.79248 8.99877 0.79248C10.2032 0.79248 11.3353 1.02104 12.3951 1.47815C13.4549 1.93526 14.3768 2.55561 15.1607 3.33921C15.9447 4.12282 16.5653 5.04429 17.0227 6.10363C17.48 7.16294 17.7086 8.29482 17.7086 9.49926C17.7086 10.7037 17.4801 11.8358 17.0229 12.8956C16.5658 13.9554 15.9455 14.8773 15.1619 15.6612C14.3783 16.4452 13.4568 17.0658 12.3975 17.5231C11.3382 17.9804 10.2063 18.2091 9.00184 18.2091ZM9.0003 16.8341C11.0475 16.8341 12.7816 16.1237 14.2024 14.7029C15.6232 13.282 16.3336 11.548 16.3336 9.50079C16.3336 7.45357 15.6232 5.71954 14.2024 4.29871C12.7816 2.87787 11.0475 2.16746 9.0003 2.16746C6.95308 2.16746 5.21905 2.87787 3.79822 4.29871C2.37739 5.71954 1.66697 7.45357 1.66697 9.50079C1.66697 11.548 2.37739 13.282 3.79822 14.7029C5.21905 16.1237 6.95308 16.8341 9.0003 16.8341Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(state == "Targeted" && icon == "Yes" && inverted == "z" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start border bg-[#0460a9] opacity-100 px-[35px] py-[19px] border-[#4c8fc3] left-[1139px] top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16748L14.6667 14.8008L14.6667 6.91748L16.5 6.91748L16.5 17.9175L5.5 17.9175L5.5 16.0841L13.3833 16.0841L2.75 5.45081L4.03333 4.16748Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Targeted" && icon == "Yes" && inverted == "No" && destination == "External") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start border bg-[#0460a9] opacity-100 px-[35px] py-[19px] border-[#4c8fc3] left-[1470px] top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17.101L15.6 5.50098L7 5.50098L7 3.50098L19 3.50098L19 15.501L17 15.501L17 6.90098L5.4 18.501L4 17.101Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Active" && icon == "No" && inverted == "No" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-[#0460a9] opacity-100 px-9 py-5 left-2 top-[202px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
      </div>
    </div>
  </>}
  {(state == "Targeted" && icon == "No" && inverted == "No" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start border bg-[#0460a9] opacity-100 px-[35px] py-[19px] border-[#4c8fc3] left-[1139px] top-[202px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
      </div>
    </div>
  </>}
  {(state == "Active" && icon == "Yes" && inverted == "Yes" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-white opacity-100 px-9 py-5 left-2 top-[108px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16748L14.6667 14.8008L14.6667 6.91748L16.5 6.91748L16.5 17.9175L5.5 17.9175L5.5 16.0841L13.3833 16.0841L2.75 5.45081L4.03333 4.16748Z" fill="#0460A9" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Active" && icon == "Yes" && inverted == "Yes" && destination == "Anchor link") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-white opacity-100 px-9 py-5 left-[1740px] top-[108px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
        <div className="interactiveIcons w-[22px] h-[22px] relative opacity-100 p-0">
          <div className="boundingBox absolute w-[22px] h-[22px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00913 12.8854L12.3496 9.54486L11.3925 8.58768L9.6966 10.2835V6.10738H8.31283V10.2835L6.61697 8.58768L5.65979 9.54486L9.00913 12.8854ZM9.00184 18.2091C7.7974 18.2091 6.66529 17.9805 5.6055 17.5234C4.54569 17.0663 3.62382 16.446 2.83987 15.6624C2.0559 14.8788 1.43527 13.9573 0.977957 12.898C0.520647 11.8386 0.291992 10.7068 0.291992 9.50233C0.291992 8.29789 0.520548 7.16577 0.977659 6.10598C1.43477 5.04618 2.05512 4.12431 2.83872 3.34036C3.62233 2.55639 4.54381 1.93576 5.60314 1.47845C6.66245 1.02114 7.79433 0.79248 8.99877 0.79248C10.2032 0.79248 11.3353 1.02104 12.3951 1.47815C13.4549 1.93526 14.3768 2.55561 15.1607 3.33921C15.9447 4.12282 16.5653 5.04429 17.0227 6.10363C17.48 7.16294 17.7086 8.29482 17.7086 9.49926C17.7086 10.7037 17.4801 11.8358 17.0229 12.8956C16.5658 13.9554 15.9455 14.8773 15.1619 15.6612C14.3783 16.4452 13.4568 17.0658 12.3975 17.5231C11.3382 17.9804 10.2063 18.2091 9.00184 18.2091ZM9.0003 16.8341C11.0475 16.8341 12.7816 16.1237 14.2024 14.7029C15.6232 13.282 16.3336 11.548 16.3336 9.50079C16.3336 7.45357 15.6232 5.71954 14.2024 4.29871C12.7816 2.87787 11.0475 2.16746 9.0003 2.16746C6.95308 2.16746 5.21905 2.87787 3.79822 4.29871C2.37739 5.71954 1.66697 7.45357 1.66697 9.50079C1.66697 11.548 2.37739 13.282 3.79822 14.7029C5.21905 16.1237 6.95308 16.8341 9.0003 16.8341Z" fill="#0460A9" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(state == "Targeted" && icon == "Yes" && inverted == "Yes" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start border bg-white opacity-100 px-[35px] py-[19px] border-[#4c8fc3] left-[1139px] top-[108px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16748L14.6667 14.8008L14.6667 6.91748L16.5 6.91748L16.5 17.9175L5.5 17.9175L5.5 16.0841L13.3833 16.0841L2.75 5.45081L4.03333 4.16748Z" fill="#0460A9" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Targeted" && icon == "Yes" && inverted == "Yes" && destination == "External") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start border bg-white opacity-100 px-[35px] py-[19px] border-[#4c8fc3] left-[1470px] top-[108px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17.101L15.6 5.50098L7 5.50098L7 3.50098L19 3.50098L19 15.501L17 15.501L17 6.90098L5.4 18.501L4 17.101Z" fill="#0460A9" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Hover" && icon == "Yes" && inverted == "Yes" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-white opacity-100 px-9 py-5 left-[410px] top-[108px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16748L14.6667 14.8008L14.6667 6.91748L16.5 6.91748L16.5 17.9175L5.5 17.9175L5.5 16.0841L13.3833 16.0841L2.75 5.45081L4.03333 4.16748Z" fill="#0460A9" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Disabled" && icon == "Yes" && inverted == "Yes" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-neutral-100 opacity-100 px-9 py-5 left-[785px] top-[108px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16748L14.6667 14.8008L14.6667 6.91748L16.5 6.91748L16.5 17.9175L5.5 17.9175L5.5 16.0841L13.3833 16.0841L2.75 5.45081L4.03333 4.16748Z" fill="#0460A9" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Active" && icon == "No" && inverted == "Yes" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-white opacity-100 px-9 py-5 left-2 top-[281px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
      </div>
    </div>
  </>}
  {(state == "Targeted" && icon == "No" && inverted == "Yes" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start border bg-white opacity-100 px-[35px] py-[19px] border-[#4c8fc3] left-[1139px] top-[281px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
      </div>
    </div>
  </>}
  {(state == "Hover" && icon == "No" && inverted == "Yes" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-white opacity-100 px-9 py-5 left-[410px] top-[281px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
      </div>
    </div>
  </>}
  {(state == "Disabled" && icon == "No" && inverted == "Yes" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-neutral-100 opacity-100 px-9 py-5 left-[785px] top-[281px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-[#0460a9] text-left tracking-[0px]">Contact us</span>
      </div>
    </div>
  </>}
  {(state == "Hover" && icon == "Yes" && inverted == "No" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-[#023054] opacity-100 px-9 py-5 left-[410px] top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16748L14.6667 14.8008L14.6667 6.91748L16.5 6.91748L16.5 17.9175L5.5 17.9175L5.5 16.0841L13.3833 16.0841L2.75 5.45081L4.03333 4.16748Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Disabled" && icon == "Yes" && inverted == "No" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-[#9e9e9e] opacity-100 px-9 py-5 left-[785px] top-2 flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
        <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.03333 4.16748L14.6667 14.8008L14.6667 6.91748L16.5 6.91748L16.5 17.9175L5.5 17.9175L5.5 16.0841L13.3833 16.0841L2.75 5.45081L4.03333 4.16748Z" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(state == "Hover" && icon == "No" && inverted == "No" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-[#023054] opacity-100 px-9 py-5 left-[410px] top-[202px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
      </div>
    </div>
  </>}
  {(state == "Disabled" && icon == "No" && inverted == "No" && destination == "Internal") && <>
    <div className="primaryCTA gap-0 absolute flex-col w-[217px] items-start bg-[#9e9e9e] opacity-100 px-9 py-5 left-[785px] top-[202px] flex">
      <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
        <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-left tracking-[0px]">Contact us</span>
      </div>
    </div>
  </>}
</>
  );
}