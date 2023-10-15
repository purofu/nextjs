import React from 'react';

export function NavMobileMenu(props){
	const {
    icon = "hamburger"
  } = props;
  return (
      <>
  {(icon == "hamburger") && <>
    <div className="navMobileMenu w-[49px] h-12 relative opacity-100 p-0">
      <svg className="group1184" width={30} height={10} viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1={1} x2={30} y2={1} stroke="#212121" strokeWidth={2} />
        <line y1={9} x2={30} y2={9} stroke="#212121" strokeWidth={2} />
      </svg>
    </div>
  </>}
  {(icon == "close") && <>
    <div className="navMobileMenu w-[49px] h-12 relative opacity-100 p-0">
      <svg className="frame482674" width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3.29289" y1="22.2929" x2="24.5061" y2="1.07969" stroke="#212121" strokeWidth={2} />
        <line x1="3.70711" y1="1.29289" x2="24.9203" y2="22.5061" stroke="#212121" strokeWidth={2} />
      </svg>
    </div>
  </>}
  {(icon == "search") && <>
    <div className="navMobileMenu gap-1 flex-row items-start opacity-100 p-2 flex">
      <div className="search w-8 h-8 relative p-0">
        <div className="boundingBox w-8 h-8 relative bg-[#d9d9d9] opacity-100 p-0" />
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0633 23.4362L13.6889 15.0618C13.0223 15.6122 12.2556 16.043 11.3889 16.3541C10.5223 16.6652 9.6257 16.8208 8.69921 16.8208C6.42032 16.8208 4.49163 16.0317 2.91314 14.4537C1.33465 12.8756 0.54541 10.9474 0.54541 8.66908C0.54541 6.39077 1.33445 4.46187 2.91254 2.88238C4.49063 1.30292 6.41883 0.513184 8.69714 0.513184C10.9754 0.513184 12.9043 1.30243 14.4838 2.88092C16.0633 4.45941 16.853 6.3881 16.853 8.66698C16.853 9.61912 16.6932 10.5285 16.3735 11.3952C16.0539 12.2619 15.6274 13.0157 15.094 13.6567L23.4684 22.0311L22.0633 23.4362ZM8.69921 14.8209C10.4172 14.8209 11.8723 14.2247 13.0646 13.0324C14.2569 11.8401 14.8531 10.3849 14.8531 8.66698C14.8531 6.94903 14.2569 5.4939 13.0646 4.30159C11.8723 3.10927 10.4172 2.51312 8.69921 2.51312C6.98126 2.51312 5.52612 3.10927 4.33381 4.30159C3.14152 5.4939 2.54538 6.94903 2.54538 8.66698C2.54538 10.3849 3.14152 11.8401 4.33381 13.0324C5.52612 14.2247 6.98126 14.8209 8.69921 14.8209Z" fill="#212121" />
        </svg>
      </div>
    </div>
  </>}
</>
  );
}