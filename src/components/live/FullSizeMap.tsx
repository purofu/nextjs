import React from 'react';

export function FullSizeMap(props){
  return (
      <div className="fullSizeMap w-[46px] h-[46px] relative opacity-100 p-0">
  <div className="group3077 w-[46px] h-[46px] absolute p-0">
    <div className="rectangle5679 w-[46px] h-[46px] relative bg-white opacity-100 p-0" />
  </div>
  <div className="interactiveIcons w-6 h-6 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
    <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
    <svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0015 19.6538L0.347656 10L10.0015 0.346191L11.4207 1.76539L3.18608 10L11.4207 18.2346L10.0015 19.6538Z" fill="#1C1B1F" />
    </svg>
  </div>
</div>
  );
}