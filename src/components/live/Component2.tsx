import React from 'react';

export function Component2(props){
	const {
    action = "sign in",
    active = "doccheck"
  } = props;
  return (
      <>
  {(action == "sign in" && active == "doccheck") && <>
    <div className="component2 gap-[19px] absolute flex-col h-[620px] justify-between items-start w-[179px] bg-[#eeeeee] opacity-100 pl-2 pr-0 py-8 left-5 top-[22px] flex">
      <div className="frame42 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame39 gap-2.5 flex-col items-start w-full opacity-100 pl-2 pr-0 py-0 flex">
          <div className="frame22 gap-0 flex-col justify-center items-center opacity-100 p-0 flex">
            <span className="signInMethod font-['Inter'] text-base font-semibold text-black text-center">Sign in method</span>
          </div>
        </div>
        <div className="frame19 gap-0 flex-col justify-center items-center w-full opacity-100 p-0 flex">
          <div className="frame13 gap-2.5 flex-row items-center w-full overflow-hidden bg-white opacity-100 pl-2 pr-0 py-3 flex">
            <span className="docCheck font-['Inter'] text-base font-normal text-black text-center">DocCheck</span>
          </div>
          <div className="frame12 gap-2.5 flex-row items-center w-full overflow-hidden bg-[#eeeeee] opacity-100 pl-2 pr-0 py-3 flex">
            <span className="rLTHubAccount font-['Inter'] text-base font-normal text-black text-center">RLTHub Account</span>
          </div>
          <div className="frame14 gap-2.5 flex-row items-center w-full overflow-hidden bg-[#eeeeee] opacity-100 pl-2 pr-0 py-3 flex">
            <span className="oneTimePin font-['Inter'] text-base font-normal text-black text-center">One time pin</span>
          </div>
        </div>
      </div>
      <div className="frame40 gap-2.5 flex-row items-start w-full opacity-100 px-2 py-0 flex">
        <span className="dontHaveAnyOfTheseRegisterNow font-['Inter'] text-xs font-normal text-black text-left">Don’t have any of these?<br /><span className="underline">Register now</span></span>
      </div>
    </div>
  </>}
  <variant match="action\=register, active\=doccheck">
    <div className="component2 gap-[19px] absolute flex-col h-[620px] justify-between items-start w-[179px] bg-[#eeeeee] opacity-100 pl-2 pr-0 py-8 left-[677px] top-[22px] flex">
      <div className="frame42 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame39 gap-2.5 flex-col items-start w-full opacity-100 pl-2 pr-0 py-0 flex">
          <div className="frame22 gap-0 flex-col justify-center items-center opacity-100 p-0 flex">
            <span className="registration font-['Inter'] text-base font-semibold text-black text-center">Registration</span>
          </div>
        </div>
        <div className="frame19 gap-0 flex-col justify-center items-center w-full opacity-100 p-0 flex">
          <div className="frame13 gap-2.5 flex-row items-center w-full overflow-hidden bg-white opacity-100 pl-2 pr-0 py-3 flex">
            <span className="docCheck font-['Inter'] text-base font-normal text-black text-center">DocCheck</span>
          </div>
          <div className="frame12 gap-2.5 flex-row items-center w-full overflow-hidden bg-[#eeeeee] opacity-100 pl-2 pr-0 py-3 flex">
            <span className="rLTHubAccount font-['Inter'] text-base font-normal text-black text-center">RLTHub Account</span>
          </div>
        </div>
      </div>
      <div className="frame40 gap-2.5 flex-row items-start w-full opacity-100 px-2 py-0 flex">
        <span className="alreadyHaveAnAccountSignInNow font-['Inter'] text-xs font-normal text-black text-left">Already have an account? <span className="underline">Sign in now</span></span>
      </div>
    </div>
  </variant>
  {(action == "sign in" && active == "novartis") && <>
    <div className="component2 gap-[19px] absolute flex-col h-[620px] justify-between items-start w-[179px] bg-[#eeeeee] opacity-100 pl-2 pr-0 py-8 left-[239px] top-[21px] flex">
      <div className="frame42 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame39 gap-2.5 flex-col items-start w-full opacity-100 pl-2 pr-0 py-0 flex">
          <div className="frame22 gap-0 flex-col justify-center items-center opacity-100 p-0 flex">
            <span className="signInMethod font-['Inter'] text-base font-semibold text-black text-center">Sign in method</span>
          </div>
        </div>
        <div className="frame19 gap-0 flex-col justify-center items-center w-full opacity-100 p-0 flex">
          <div className="frame13 gap-2.5 flex-row items-center w-full overflow-hidden bg-[#eeeeee] opacity-100 pl-2 pr-0 py-3 flex">
            <span className="docCheck font-['Inter'] text-base font-normal text-black text-center">DocCheck</span>
          </div>
          <div className="frame12 gap-2.5 flex-row items-center w-full overflow-hidden bg-white opacity-100 pl-2 pr-0 py-3 flex">
            <span className="rLTHubAccount font-['Inter'] text-base font-normal text-black text-center">RLTHub Account</span>
          </div>
          <div className="frame14 gap-2.5 flex-row items-center w-full overflow-hidden bg-[#eeeeee] opacity-100 pl-2 pr-0 py-3 flex">
            <span className="oneTimePin font-['Inter'] text-base font-normal text-black text-center">One time pin</span>
          </div>
        </div>
      </div>
      <div className="frame40 gap-2.5 flex-row items-start w-full opacity-100 px-2 py-0 flex">
        <span className="dontHaveAnyOfTheseRegisterNow font-['Inter'] text-xs font-normal text-black text-left">Don’t have any of these?<br /><span className="underline">Register now</span></span>
      </div>
    </div>
  </>}
  <variant match="action\=register, active\=novartis">
    <div className="component2 gap-[19px] absolute flex-col h-[620px] justify-between items-start w-[179px] bg-[#eeeeee] opacity-100 pl-2 pr-0 py-8 left-[896px] top-[21px] flex">
      <div className="frame42 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame39 gap-2.5 flex-col items-start w-full opacity-100 pl-2 pr-0 py-0 flex">
          <div className="frame22 gap-0 flex-col justify-center items-center opacity-100 p-0 flex">
            <span className="registration font-['Inter'] text-base font-semibold text-black text-center">Registration</span>
          </div>
        </div>
        <div className="frame19 gap-0 flex-col justify-center items-center w-full opacity-100 p-0 flex">
          <div className="frame13 gap-2.5 flex-row items-center w-full overflow-hidden bg-[#eeeeee] opacity-100 pl-2 pr-0 py-3 flex">
            <span className="docCheck font-['Inter'] text-base font-normal text-black text-center">DocCheck</span>
          </div>
          <div className="frame12 gap-2.5 flex-row items-center w-full overflow-hidden bg-white opacity-100 pl-2 pr-0 py-3 flex">
            <span className="rLTHubAccount font-['Inter'] text-base font-normal text-black text-center">RLTHub Account</span>
          </div>
        </div>
      </div>
      <div className="frame40 gap-2.5 flex-row items-start w-full opacity-100 px-2 py-0 flex">
        <span className="alreadyHaveAnAccountSignInNow font-['Inter'] text-xs font-normal text-black text-left">Already have an account? <span className="underline">Sign in now</span></span>
      </div>
    </div>
  </variant>
  {(action == "sign in" && active == "pin") && <>
    <div className="component2 gap-[19px] absolute flex-col h-[620px] justify-between items-start w-[179px] bg-[#eeeeee] opacity-100 pl-2 pr-0 py-8 left-[458px] top-5 flex">
      <div className="frame42 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame39 gap-2.5 flex-col items-start w-full opacity-100 pl-2 pr-0 py-0 flex">
          <div className="frame22 gap-0 flex-col justify-center items-center opacity-100 p-0 flex">
            <span className="signInMethod font-['Inter'] text-base font-semibold text-black text-center">Sign in method</span>
          </div>
        </div>
        <div className="frame19 gap-0 flex-col justify-center items-center w-full opacity-100 p-0 flex">
          <div className="frame13 gap-2.5 flex-row items-center w-full overflow-hidden bg-[#eeeeee] opacity-100 pl-2 pr-0 py-3 flex">
            <span className="docCheck font-['Inter'] text-base font-normal text-black text-center">DocCheck</span>
          </div>
          <div className="frame12 gap-2.5 flex-row items-center w-full overflow-hidden bg-[#eeeeee] opacity-100 pl-2 pr-0 py-3 flex">
            <span className="rLTHubAccount font-['Inter'] text-base font-normal text-black text-center">RLTHub Account</span>
          </div>
          <div className="frame14 gap-2.5 flex-row items-center w-full overflow-hidden bg-white opacity-100 pl-2 pr-0 py-3 flex">
            <span className="oneTimePin font-['Inter'] text-base font-normal text-black text-center">One time pin</span>
          </div>
        </div>
      </div>
      <div className="frame40 gap-2.5 flex-row items-start w-full opacity-100 px-2 py-0 flex">
        <span className="dontHaveAnyOfTheseRegisterNow font-['Inter'] text-xs font-normal text-black text-left">Don’t have any of these?<br /><span className="underline">Register now</span></span>
      </div>
    </div>
  </>}
</>
  );
}