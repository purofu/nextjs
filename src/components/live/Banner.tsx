import React from 'react';

export function Banner(props){
	const {
    size = "L"
  } = props;
  return (
      <>
  {(size == "L") && <>
    <div className="banner gap-2 absolute flex-row w-[1440px] h-12 justify-between items-center bg-[#c6ced7] opacity-100 px-12 py-4 left-4 top-4 flex">
      <div className="frame483073 gap-0 flex-row w-[1344px] h-6 justify-center items-center flex-1 min-w-0 opacity-100 p-0 flex">
        <span className="thisIsAPromotionalWebsiteIntendedForHealthcareProfessionalsIfYouAreAMemberOfThePublicPleaseClickHere font-['Volta_Modern_Display'] text-base font-semibold text-black text-center tracking-[0px]">This is a promotional website intended for healthcare professionals. If you are a member of the public,<span className="text-[#034f8b]"> </span><span className="text-[15px] text-[#034f8b] underline">please click here.</span></span>
      </div>
    </div>
  </>}
  {(size == "S") && <>
    <div className="banner gap-2 absolute flex-row justify-between items-start w-[375px] bg-[#c6ced7] opacity-100 p-4 left-[2474px] top-4 flex">
      <span className="thisIsAPromotionalWebsiteIntendedForHealthcareProfessionalsIfYouAreAMemberOfThePublicPleaseClickHere font-['Volta_Modern_Display'] text-base font-semibold text-black text-center tracking-[0px] w-[343px] flex-1 min-w-0">This is a promotional website intended for healthcare professionals. If you are a member of the public, <span className="text-[#034f8b] underline">please click here.</span></span>
    </div>
  </>}
  {(size == "M") && <>
    <div className="banner gap-2 absolute flex-row justify-between items-start w-[768px] bg-[#c6ced7] opacity-100 px-8 py-4 left-[1581px] top-4 flex">
      <div className="frame483074 gap-0 flex-row w-[704px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
        <span className="thisIsAPromotionalWebsiteIntendedForHealthcareProfessionalsIfYouAreAMemberOfThePublicPleaseClickHere font-['Volta_Modern_Display'] text-base font-semibold text-black text-center tracking-[0px] w-[704px] flex-1 min-w-0">This is a promotional website intended for healthcare professionals. If you are a member of the public, <span className="text-[#034f8b] underline">please click here.</span></span>
      </div>
    </div>
  </>}
</>
  );
}