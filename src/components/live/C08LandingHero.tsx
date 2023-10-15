import React from 'react';

export function C08LandingHero(props){
	const {
    size = "L(LHN)",
    colour = "Orange",
    cTA = "Yes",
    type = "Page"
  } = props;
  return (
      <>
  <variant match="Size\=L(LHN), Colour\=Orange, CTA\=Yes, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#c43b19] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[34px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "L(LHN)" && colour == "Orange" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#c43b19] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[1330px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Luthatera </span>
              <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=L(LHN), Colour\=Yellow, CTA\=Yes, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#c37f16] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[8646px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#9b630f] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "L(LHN)" && colour == "Yellow" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#c37f16] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-[42px] top-[9942px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Luthatera </span>
              <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#9b630f] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=L(LHN), Colour\=Red, CTA\=Yes, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#751814] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[4320px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#5d100d] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "L(LHN)" && colour == "Red" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#751814] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-[42px] top-[5616px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Luthatera </span>
              <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#5d100d] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=L(LHN), Colour\=Dark Grey, CTA\=Yes, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#616161] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[13343px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#424242] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "L(LHN)" && colour == "Dark Grey" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#616161] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-[42px] top-[14639px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Luthatera </span>
              <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#424242] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=L(LHN), Colour\=Green, CTA\=Yes, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#22462c] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[2285px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#173d21] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "L(LHN)" && colour == "Green" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#22462c] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-[42px] top-[3581px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Luthatera </span>
              <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#173d21] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=L(LHN), Colour\=Light Grey, CTA\=Yes, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#bdbdbd] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[11052px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#9e9e9e] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </variant>
  <variant match="Size\=L(LHN), Colour\=White, CTA\=Yes, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-white opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[15703px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#bdbdbd] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "L(LHN)" && colour == "Light Grey" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#bdbdbd] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-[42px] top-[12348px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Luthatera </span>
              <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#9e9e9e] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && colour == "White" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-white opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-[42px] top-[16999px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Luthatera </span>
              <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#bdbdbd] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=L(LHN), Colour\=Purple, CTA\=Yes, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#462046] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-8 top-[6402px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#3d153d] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "L(LHN)" && colour == "Purple" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#462046] opacity-100 pl-[340px] pr-40 pt-24 pb-0 left-[42px] top-[7698px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Luthatera </span>
              <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
            </div>
          </div>
        </div>
        <div className="containerLink gap-0 flex-col items-end bg-[#3d153d] opacity-100 px-9 py-5 flex">
          <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
            <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
            <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  <variant match="Size\=L(LHN), Colour\=Orange, CTA\=No, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#c43b19] opacity-100 pl-[340px] pr-40 pt-24 pb-16 left-8 top-[714px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </variant>
  <variant match="Size\=L(LHN), Colour\=Yellow, CTA\=No, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#c37f16] opacity-100 pl-[340px] pr-40 pt-24 pb-16 left-8 top-[9326px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </variant>
  <variant match="Size\=L(LHN), Colour\=Red, CTA\=No, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#751814] opacity-100 pl-[340px] pr-40 pt-24 pb-16 left-8 top-[5000px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </variant>
  <variant match="Size\=L(LHN), Colour\=Dark Grey, CTA\=No, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#616161] opacity-100 pl-[340px] pr-40 pt-24 pb-16 left-8 top-[14023px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </variant>
  <variant match="Size\=L(LHN), Colour\=Green, CTA\=No, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#22462c] opacity-100 pl-[340px] pr-40 pt-24 pb-16 left-8 top-[2965px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </variant>
  <variant match="Size\=L(LHN), Colour\=Light Grey, CTA\=No, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#bdbdbd] opacity-100 pl-[340px] pr-40 pt-24 pb-16 left-8 top-[11732px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </variant>
  <variant match="Size\=L(LHN), Colour\=White, CTA\=No, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-white opacity-100 pl-[340px] pr-40 pt-24 pb-16 left-8 top-[16383px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </variant>
  <variant match="Size\=L(LHN), Colour\=Purple, CTA\=No, Type\=Page">
    <div className="c08LandingHero gap-6 absolute flex-col w-[1440px] items-start bg-[#462046] opacity-100 pl-[340px] pr-40 pt-24 pb-16 left-8 top-[7082px] flex">
      <div className="frame482601 gap-10 flex-col w-[1100px] items-end opacity-100 p-0 flex">
        <div className="allContent gap-6 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="content gap-16 flex-col w-[948px] items-start opacity-100 p-0 flex">
            <div className="titleAndSub gap-4 flex-col items-start w-full opacity-100 p-0 flex">
              <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[948px] flex-1 min-h-0">Referring Patients  for RLT</span>
              <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </variant>
  {(size == "L" && colour == "Orange" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#c43b19] opacity-100 pl-16 pr-0 pt-[140px] pb-0 left-[1556px] top-[34px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Orange" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#c43b19] opacity-100 pl-16 pr-0 pt-[120px] pb-0 left-[1556px] top-[1330px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Yellow" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#c37f16] opacity-100 pl-16 pr-0 pt-[140px] pb-0 left-[1556px] top-[8646px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9b630f] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Yellow" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#c37f16] opacity-100 pl-16 pr-0 pt-[120px] pb-0 left-[1566px] top-[9942px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9b630f] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Red" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#751814] opacity-100 pl-16 pr-0 pt-[140px] pb-0 left-[1556px] top-[4320px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#5d100d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Red" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#751814] opacity-100 pl-16 pr-0 pt-[120px] pb-0 left-[1566px] top-[5616px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#5d100d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Dark Grey" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#616161] opacity-100 pl-16 pr-0 pt-[140px] pb-0 left-[1556px] top-[13343px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#424242] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Dark Grey" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#616161] opacity-100 pl-16 pr-0 pt-[120px] pb-0 left-[1566px] top-[14639px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#424242] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Green" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#22462c] opacity-100 pl-16 pr-0 pt-[140px] pb-0 left-[1556px] top-[2285px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#173d21] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Green" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#22462c] opacity-100 pl-16 pr-0 pt-[120px] pb-0 left-[1566px] top-[3581px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#173d21] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Light Grey" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-16 pr-0 pt-[140px] pb-0 left-[1556px] top-[11052px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9e9e9e] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "White" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-white opacity-100 pl-16 pr-0 pt-[140px] pb-0 left-[1556px] top-[15703px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#bdbdbd] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Light Grey" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-16 pr-0 pt-[120px] pb-0 left-[1566px] top-[12348px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9e9e9e] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "White" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-white opacity-100 pl-16 pr-0 pt-[120px] pb-0 left-[1566px] top-[16999px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#bdbdbd] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Purple" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#462046] opacity-100 pl-16 pr-0 pt-[140px] pb-0 left-[1556px] top-[6402px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#3d153d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Purple" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#462046] opacity-100 pl-16 pr-0 pt-[120px] pb-0 left-[1566px] top-[7698px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[0px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#3d153d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Orange" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#c43b19] opacity-100 pl-16 pr-0 pt-[140px] pb-16 left-[1556px] top-[714px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Yellow" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#c37f16] opacity-100 pl-16 pr-0 pt-[140px] pb-16 left-[1556px] top-[9326px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Red" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#751814] opacity-100 pl-16 pr-0 pt-[140px] pb-16 left-[1556px] top-[5000px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Dark Grey" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#616161] opacity-100 pl-16 pr-0 pt-[140px] pb-16 left-[1556px] top-[14023px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Green" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#22462c] opacity-100 pl-16 pr-0 pt-[140px] pb-16 left-[1556px] top-[2965px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Light Grey" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-16 pr-0 pt-[140px] pb-16 left-[1556px] top-[11732px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "White" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-white opacity-100 pl-16 pr-0 pt-[140px] pb-16 left-[1556px] top-[16383px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-[#212121] text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "L" && colour == "Purple" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[1440px] justify-end items-end bg-[#462046] opacity-100 pl-16 pr-0 pt-[140px] pb-16 left-[1556px] top-[7082px] flex">
      <div className="frame482668 gap-4 flex-col items-start w-full opacity-100 pl-0 pr-16 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[98px] font-medium text-white text-left tracking-[-1.85px] w-[1312px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Orange" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#c43b19] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[34px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Orange" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#c43b19] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[1330px] flex">
      <div className="frame482669 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Yellow" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#c37f16] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[8646px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9b630f] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Yellow" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#c37f16] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3157px] top-[9942px] flex">
      <div className="frame482669 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9b630f] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Red" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#751814] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[4320px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#5d100d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Red" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#751814] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3157px] top-[5616px] flex">
      <div className="frame482669 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#5d100d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Dark Grey" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#616161] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[13343px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#424242] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Dark Grey" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#616161] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3157px] top-[14639px] flex">
      <div className="frame482669 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#424242] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Green" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#22462c] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[2285px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#173d21] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Green" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#22462c] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3157px] top-[3581px] flex">
      <div className="frame482669 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#173d21] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Light Grey" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[11052px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9e9e9e] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "White" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-white opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[15703px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#bdbdbd] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Light Grey" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3157px] top-[12348px] flex">
      <div className="frame482669 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9e9e9e] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "White" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-white opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3157px] top-[16999px] flex">
      <div className="frame482669 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#bdbdbd] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Purple" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#462046] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3147px] top-[6402px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#3d153d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Purple" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#462046] opacity-100 pl-8 pr-0 pt-[140px] pb-0 left-[3157px] top-[7698px] flex">
      <div className="frame482669 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[29px] font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#3d153d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Orange" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#c43b19] opacity-100 pl-8 pr-0 pt-[140px] pb-16 left-[3147px] top-[714px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Yellow" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#c37f16] opacity-100 pl-8 pr-0 pt-[140px] pb-16 left-[3147px] top-[9326px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Red" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#751814] opacity-100 pl-8 pr-0 pt-[140px] pb-16 left-[3147px] top-[5000px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Dark Grey" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#616161] opacity-100 pl-8 pr-0 pt-[140px] pb-16 left-[3147px] top-[14023px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Green" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#22462c] opacity-100 pl-8 pr-0 pt-[140px] pb-16 left-[3147px] top-[2965px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Light Grey" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-8 pr-0 pt-[140px] pb-16 left-[3147px] top-[11732px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "White" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-white opacity-100 pl-8 pr-0 pt-[140px] pb-16 left-[3147px] top-[16383px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "M" && colour == "Purple" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-10 absolute flex-col w-[768px] justify-end items-end bg-[#462046] opacity-100 pl-8 pr-0 pt-[140px] pb-16 left-[3147px] top-[7082px] flex">
      <div className="frame482669 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-8 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[76px] font-medium text-white text-left tracking-[-0.35px] w-[704px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Orange" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#c43b19] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[34px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Orange" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#c43b19] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[1330px] flex">
      <div className="frame482670 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#a12d10] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Yellow" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#c37f16] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[8646px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9b630f] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Yellow" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#c37f16] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[9942px] flex">
      <div className="frame482670 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9b630f] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Red" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#751814] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[4320px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#5d100d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Red" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#751814] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[5616px] flex">
      <div className="frame482670 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#5d100d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Dark Grey" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#616161] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[13343px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#424242] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Dark Grey" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#616161] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[14639px] flex">
      <div className="frame482670 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#424242] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Green" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#22462c] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[2285px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#173d21] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Green" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#22462c] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[3581px] flex">
      <div className="frame482670 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-end bg-[#173d21] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Light Grey" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[11052px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9e9e9e] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "White" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-white opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[15703px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#bdbdbd] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Light Grey" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[12348px] flex">
      <div className="frame482670 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#9e9e9e] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "White" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-white opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[16999px] flex">
      <div className="frame482670 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#bdbdbd] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.1665L14.6667 14.7998L14.6667 6.9165L16.5 6.9165L16.5 17.9165L5.5 17.9165L5.5 16.0832L13.3833 16.0832L2.75 5.44984L4.03333 4.1665Z" fill="#212121" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Purple" && cTA == "Yes" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#462046] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[6402px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#3d153d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16602L14.6667 14.7993L14.6667 6.91602L16.5 6.91602L16.5 17.916L5.5 17.916L5.5 16.0827L13.3833 16.0827L2.75 5.44935L4.03333 4.16602Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Purple" && cTA == "Yes" && type == "Subpage") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#462046] opacity-100 pl-4 pr-0 pt-[140px] pb-0 left-[4158px] top-[7698px] flex">
      <div className="frame482670 gap-2 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Luthatera </span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-2xl font-medium text-white text-left tracking-[-0.35px] w-full">for Neuroendicrine Tumors</span>
      </div>
      <div className="containerLink gap-0 flex-col items-start bg-[#3d153d] opacity-100 px-9 py-5 flex">
        <div className="secondaryCTA gap-2 flex-row items-center opacity-100 p-0 flex">
          <span className="linkTitle font-['Volta_Modern_Display'] text-[19px] font-semibold text-white text-left tracking-[0px]">Find a treatment centre</span>
          <svg className="interactiveIcons" width={22} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.03333 4.16699L14.6667 14.8003L14.6667 6.91699L16.5 6.91699L16.5 17.917L5.5 17.917L5.5 16.0837L13.3833 16.0837L2.75 5.45032L4.03333 4.16699Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Orange" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#c43b19] opacity-100 pl-4 pr-0 pt-[140px] pb-16 left-[4158px] top-[714px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Yellow" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#c37f16] opacity-100 pl-4 pr-0 pt-[140px] pb-16 left-[4158px] top-[9326px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Red" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#751814] opacity-100 pl-4 pr-0 pt-[140px] pb-16 left-[4158px] top-[5000px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Dark Grey" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#616161] opacity-100 pl-4 pr-0 pt-[140px] pb-16 left-[4158px] top-[14023px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Green" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#22462c] opacity-100 pl-4 pr-0 pt-[140px] pb-16 left-[4158px] top-[2965px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Light Grey" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#bdbdbd] opacity-100 pl-4 pr-0 pt-[140px] pb-16 left-[4158px] top-[11732px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "White" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-white opacity-100 pl-4 pr-0 pt-[140px] pb-16 left-[4158px] top-[16383px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
  {(size == "S" && colour == "Purple" && cTA == "No" && type == "Page") && <>
    <div className="c08LandingHero gap-[60px] absolute flex-col w-[375px] justify-end items-end bg-[#462046] opacity-100 pl-4 pr-0 pt-[140px] pb-16 left-[4158px] top-[7082px] flex">
      <div className="frame482670 gap-6 flex-col items-start w-full opacity-100 pl-0 pr-4 py-0 flex">
        <div className="1 gap-2 flex-row items-end w-full opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[56px] font-medium text-white text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Referring Patients for RLT</span>
        </div>
        <span className="sub font-['Volta_Modern_Display'] text-[21px] font-medium text-white text-left tracking-[0px] w-full">We aim to provide you with a clear understanding of the referral pathway, ensuring that eligible patients can access the treatment in a timely and efficient manner.</span>
      </div>
    </div>
  </>}
</>
  );
}