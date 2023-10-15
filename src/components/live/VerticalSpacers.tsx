import React from 'react';

export function VerticalSpacers(props){
	const {
    size = "Spacer_2px"
  } = props;
  return (
      <>
  {(size == "Spacer_2px") && <>
    <div className="verticalSpacers w-[2122px] h-0.5 absolute opacity-100 p-0 left-4 top-4">
      <div className="rectangle1052 absolute w-[2122px] h-0.5 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_4px") && <>
    <div className="verticalSpacers w-[2122px] h-1 absolute opacity-100 p-0 left-4 top-[105px]">
      <div className="rectangle1053 absolute w-[2122px] h-1 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_8px") && <>
    <div className="verticalSpacers w-[2122px] h-2 absolute opacity-100 p-0 left-4 top-[193px]">
      <div className="rectangle1054 absolute w-[2122px] h-2 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_12px") && <>
    <div className="verticalSpacers w-[2122px] h-3 absolute opacity-100 p-0 left-4 top-[281px]">
      <div className="rectangle1055 absolute w-[2122px] h-3 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_16px") && <>
    <div className="verticalSpacers w-[2122px] h-4 absolute opacity-100 p-0 left-4 top-[369px]">
      <div className="rectangle1056 absolute w-[2122px] h-4 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_24px") && <>
    <div className="verticalSpacers w-[2122px] h-6 absolute opacity-100 p-0 left-4 top-[455px]">
      <div className="rectangle1057 absolute w-[2122px] h-6 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_32px") && <>
    <div className="verticalSpacers w-[2122px] h-8 absolute opacity-100 p-0 left-4 top-[544px]">
      <div className="rectangle1058 absolute w-[2122px] h-8 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_40px") && <>
    <div className="verticalSpacers w-[2122px] h-10 absolute opacity-100 p-0 left-4 top-[640px]">
      <div className="rectangle1059 absolute w-[2122px] h-10 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_48px") && <>
    <div className="verticalSpacers w-[2122px] h-12 absolute opacity-100 p-0 left-4 top-[744px]">
      <div className="rectangle1060 absolute w-[2122px] h-12 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_64px") && <>
    <div className="verticalSpacers w-[2122px] h-16 absolute opacity-100 p-0 left-4 top-[856px]">
      <div className="rectangle1061 absolute w-[2122px] h-16 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_96px") && <>
    <div className="verticalSpacers w-[2122px] h-24 absolute opacity-100 p-0 left-4 top-[984px]">
      <div className="rectangle1062 absolute w-[2122px] h-24 bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
  {(size == "Spacer_120px") && <>
    <div className="verticalSpacers w-[2122px] h-[120px] absolute opacity-100 p-0 left-4 top-[1144px]">
      <div className="rectangle1063 absolute w-[2122px] h-[120px] bg-[rgba(206,39,99,0.4)] opacity-100 p-0 inset-[0%]" />
    </div>
  </>}
</>
  );
}