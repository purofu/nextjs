import React from 'react';

export function PlayButton(props){
	const {
    size = "S",
    type = "Text"
  } = props;
  return (
      <>
  {(size == "L(LHN)" && type == "Text") && <>
    <div className="playButton w-[131px] h-32 absolute opacity-100 p-0 left-[319.67578125px] top-[19px]">
      <svg width={132} height={128} viewBox="0 0 132 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M130.676 64C130.676 98.7722 101.82 127 66.1758 127C30.5315 127 1.67578 98.7722 1.67578 64C1.67578 29.2278 30.5315 1 66.1758 1C101.82 1 130.676 29.2278 130.676 64Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
      </svg>
      <span className="pLAY font-['Volta_Modern_Display'] text-lg font-semibold text-white text-center tracking-[0.15rem] absolute -translate-x-2/4 left-2/4 top-2/4">PLAY</span>
    </div>
  </>}
  {(size == "L(LHN)" && type == "Button") && <>
    <div className="playButton w-[131px] h-32 absolute opacity-100 p-0 left-[319.67578125px] top-[244px]">
      <svg width={132} height={128} viewBox="0 0 132 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M130.676 64C130.676 98.7722 101.82 127 66.1758 127C30.5315 127 1.67578 98.7722 1.67578 64C1.67578 29.2278 30.5315 1 66.1758 1C101.82 1 130.676 29.2278 130.676 64Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
      </svg>
      <div className="interactiveIcons w-12 h-12 absolute opacity-100 p-0 left-[45px] top-10">
        <svg className="play" width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.67578 42V2L41.6758 22L1.67578 42Z" stroke="white" strokeWidth={2} />
        </svg>
      </div>
    </div>
  </>}
  {(size == "L" && type == "Text") && <>
    <div className="playButton w-[164.5px] h-[161px] absolute opacity-100 p-0 left-[518.67578125px] top-[19px]">
      <svg width={166} height={161} viewBox="0 0 166 161" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M164.179 80.5016C164.179 124.389 127.822 160.003 82.9272 160.003C38.0329 160.003 1.67578 124.389 1.67578 80.5016C1.67578 36.6144 38.0329 1.00024 82.9272 1.00024C127.822 1.00024 164.179 36.6144 164.179 80.5016Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
      </svg>
      <span className="pLAY font-['Volta_Modern_Display'] text-2xl font-semibold text-white text-center tracking-[0.15rem] absolute left-[29.63%] right-[28.43%] top-[40.93%] bottom-[41.06%]">PLAY</span>
    </div>
  </>}
  {(size == "L" && type == "Button") && <>
    <div className="playButton w-[164.5px] h-[161px] absolute opacity-100 p-0 left-[518.67578125px] top-[244px]">
      <svg width={166} height={161} viewBox="0 0 166 161" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M164.179 80.5016C164.179 124.389 127.822 160.003 82.9272 160.003C38.0329 160.003 1.67578 124.389 1.67578 80.5016C1.67578 36.6144 38.0329 1.00024 82.9272 1.00024C127.822 1.00024 164.179 36.6144 164.179 80.5016Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
      </svg>
      <div className="interactiveIcons absolute w-16 h-16 opacity-100 p-0 left-[33.63%] right-[27.46%] top-[30.43%] bottom-[29.81%]">
        <svg className="play" width={57} height={58} viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.33398 55.6666V2.33325L54.6673 28.9999L1.33398 55.6666Z" stroke="white" strokeWidth={2} />
        </svg>
      </div>
    </div>
  </>}
  {(size == "S" && type == "Text") && <>
    <div className="playButton w-[59.8px] h-[58.53px] absolute opacity-100 p-0 left-[42px] top-[19px]">
      <svg width={61} height={60} viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M59.9889 30.1864C59.9889 46.0625 46.836 58.9509 30.5882 58.9509C14.3405 58.9509 1.1875 46.0625 1.1875 30.1864C1.1875 14.3103 14.3405 1.42188 30.5882 1.42188C46.836 1.42188 59.9889 14.3103 59.9889 30.1864Z" fill="black" fillOpacity="0.1" stroke="white" />
      </svg>
      <span className="pLAY font-['Volta_Modern_Display'] text-[10px] font-semibold text-white text-center tracking-[0.15rem] absolute -translate-x-2/4 left-2/4 top-2/4">PLAY</span>
    </div>
  </>}
  {(size == "S" && type == "Button") && <>
    <div className="playButton w-[59.8px] h-[58.53px] absolute opacity-100 p-0 left-[42px] top-[244px]">
      <svg width={61} height={60} viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M59.9889 30.1864C59.9889 46.0625 46.836 58.9509 30.5882 58.9509C14.3405 58.9509 1.1875 46.0625 1.1875 30.1864C1.1875 14.3103 14.3405 1.42188 30.5882 1.42188C46.836 1.42188 59.9889 14.3103 59.9889 30.1864Z" fill="black" fillOpacity="0.1" stroke="white" />
      </svg>
      <div className="interactiveIcons w-[18px] h-[18px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
        <svg className="play" width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 17.5V2.5L16.5 10L1.5 17.5Z" stroke="white" strokeWidth={2} />
        </svg>
      </div>
    </div>
  </>}
  {(size == "M" && type == "Text") && <>
    <div className="playButton w-[81.88px] h-20 absolute opacity-100 p-0 left-[169.80078125px] top-[19px]">
      <svg width={83} height={80} viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M81.9258 40C81.9258 61.6609 63.9497 79.25 41.7383 79.25C19.5269 79.25 1.55078 61.6609 1.55078 40C1.55078 18.3391 19.5269 0.75 41.7383 0.75C63.9497 0.75 81.9258 18.3391 81.9258 40Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
      </svg>
      <span className="pLAY font-['Volta_Modern_Display'] text-sm font-semibold text-white text-center tracking-[0.15rem] absolute -translate-x-2/4 left-2/4 top-2/4">PLAY</span>
    </div>
  </>}
  {(size == "M" && type == "Button") && <>
    <div className="playButton w-[81.88px] h-20 absolute opacity-100 p-0 left-[169.80078125px] top-[244px]">
      <svg width={83} height={80} viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M81.9258 40C81.9258 61.6609 63.9497 79.25 41.7383 79.25C19.5269 79.25 1.55078 61.6609 1.55078 40C1.55078 18.3391 19.5269 0.75 41.7383 0.75C63.9497 0.75 81.9258 18.3391 81.9258 40Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
      </svg>
      <div className="interactiveIcons w-6 h-6 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
        <svg className="play" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 22V2L21 12L1 22Z" stroke="white" strokeWidth={2} />
        </svg>
      </div>
    </div>
  </>}
</>
  );
}