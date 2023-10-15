import React from 'react';

export function MapCluster(props){
  return (
      <div className="mapCluster w-[66px] h-[66px] relative opacity-100 p-0">
  <svg width={66} height={66} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={33} cy={33} r={33} fill="#0460A9" />
  </svg>
  <span className="12 font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-center tracking-[-0.35px] absolute left-[-21.21%] right-[-21.21%] w-[94px] top-[18.18%] bottom-[16.67%]">12</span>
</div>
  );
}