import React from 'react';

export function CarouselIndicator(props){
	const {
    state = "Selected"
  } = props;
  return (
      <>
  {(state == "Selected") && <>
    <div className="carouselIndicator w-3 h-3 absolute opacity-100 p-0 left-4 top-4">
      <div className="rectangle3978 absolute w-3 h-3 border bg-[#6e7e8e] opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
    </div>
  </>}
  {(state == "Unselected") && <>
    <div className="carouselIndicator w-3 h-3 absolute opacity-100 p-0 left-9 top-4">
      <div className="rectangle3978 absolute w-3 h-3 border opacity-100 p-0 rounded-[900px] border-[#6e7e8e] inset-[0%]" />
    </div>
  </>}
</>
  );
}