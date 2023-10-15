import React from 'react';

export function NavDropdown(props){
	const {
    direction = "down"
  } = props;
  return (
      <>
  {(direction == "down") && <>
    <div className="navDropdown gap-1 absolute flex-row items-center opacity-100 pt-[3px] pb-0 px-0 left-2 top-2 flex">
      <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_153_75230)">
          <path d="M1 -0.5L7 6.5L13 -0.499999" stroke="#212121" strokeWidth="1.3" />
        </g>
        <defs>
          <clipPath id="clip0_153_75230">
            <rect width={14} height={8} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </>}
  {(direction == "up") && <>
    <div className="navDropdown gap-1 absolute flex-row items-center opacity-100 pt-0 pb-[3px] px-0 left-[35px] top-[9px] flex">
      <svg className="boundingBox" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_441_57752)">
          <path d="M13 8.5L7 1.5L1 8.5" stroke="#212121" strokeWidth="1.3" />
        </g>
        <defs>
          <clipPath id="clip0_441_57752">
            <rect width={14} height={8} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </>}
</>
  );
}