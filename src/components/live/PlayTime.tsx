import React from 'react';

export function PlayTime(props){
	const {
    size = "timer (s)"
  } = props;
  return (
      <>
  {(size == "timer (LHN)") && <>
    <div className="playTime gap-[156px] absolute flex-row items-end opacity-100 p-0 left-[23px] top-[198px] flex">
      <div className="timer w-[131px] h-11 relative opacity-100 p-0">
        <div className="rectangle3873 absolute w-[85.99px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[34.36%] right-[0%] top-[0%] bottom-[0.23%]" />
        <div className="rectangle3875 absolute w-[45.36px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[0%] right-[65.38%] top-[0.23%] bottom-[0%]" />
        <span className="0139 font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-center tracking-[0px] absolute -translate-y-2/4 left-[49.34%] right-[14.78%] top-2/4"> 01:39</span>
        <div className="hourglassbottom w-[18.9px] h-[18.68px] absolute p-0">
          <div className="boundingBox w-[18.9px] h-[18.68px] relative bg-white opacity-100 p-0" />
          <svg width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.57181 6.8831C6.41784 6.8831 7.11395 6.5533 7.66013 5.89368C8.20631 5.23406 8.47939 4.46617 8.47939 3.59002V1.25493H2.66423V3.59002C2.66423 4.46617 2.93732 5.23406 3.48349 5.89368C4.02967 6.5533 4.72578 6.8831 5.57181 6.8831ZM0.210938 14.4871V13.7087H1.87674V11.3737C1.87674 10.4726 2.12938 9.66002 2.63468 8.93604C3.13997 8.21205 3.81816 7.72732 4.66923 7.48184C3.81816 7.23635 3.13997 6.75162 2.63468 6.02764C2.12938 5.30366 1.87674 4.49112 1.87674 3.59002V1.25493H0.210938V0.476562H10.9327V1.25493H9.26689V3.59002C9.26689 4.49112 9.01424 5.30366 8.50894 6.02764C8.00365 6.75162 7.32546 7.23635 6.47439 7.48184C7.32546 7.72732 8.00365 8.21205 8.50894 8.93604C9.01424 9.66002 9.26689 10.4726 9.26689 11.3737V13.7087H10.9327V14.4871H0.210938Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "Frame 837 (full)") && <>
    <div className="playTime gap-[195.89654541015625px] absolute flex-row h-14 items-end -translate-x-2/4 border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-2/4 top-[296px] flex">
      <div className="timer w-[164px] h-[55px] relative opacity-100 p-0">
        <div className="rectangle3875 absolute top-[-1.35%] w-[56.83px] h-[55.74px] opacity-100 p-0 border-[1.26px] border-white left-[0%] right-[65.35%] bottom-[0%]" />
        <span className="0139 font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] absolute w-[59px] h-[31px] left-2/4 right-[14.02%] inset-y-[21.82%]">01:39</span>
        <div className="hourglassbottom w-[23.66px] h-[23.35px] absolute p-0">
          <div className="boundingBox w-[23.66px] h-[23.35px] relative bg-white opacity-100 p-0" />
          <svg width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.8246 8.10168C7.88376 8.10168 8.75522 7.68942 9.43899 6.86491C10.1227 6.04038 10.4646 5.08052 10.4646 3.98533V1.06646H3.18458V3.98533C3.18458 5.08052 3.52646 6.04038 4.21022 6.86491C4.89399 7.68942 5.76545 8.10168 6.8246 8.10168ZM0.113281 17.6067V16.6337H2.19871V13.7149C2.19871 12.5885 2.515 11.5728 3.14758 10.6678C3.78016 9.76287 4.62919 9.15695 5.69466 8.8501C4.62919 8.54325 3.78016 7.93733 3.14758 7.03235C2.515 6.12737 2.19871 5.1117 2.19871 3.98533V1.06646H0.113281V0.0935059H13.5359V1.06646H11.4505V3.98533C11.4505 5.1117 11.1342 6.12737 10.5016 7.03235C9.86904 7.93733 9.02002 8.54325 7.95455 8.8501C9.02002 9.15695 9.86904 9.76287 10.5016 10.6678C11.1342 11.5728 11.4505 12.5885 11.4505 13.7149V16.6337H13.5359V17.6067H0.113281Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "timer (s)") && <>
    <div className="playTime w-[82px] h-7 absolute gap-[80.6771240234375px] bg-[rgba(0,0,0,0.1)] opacity-100 p-0 left-[23px] top-[34px]">
      <span className="0139 font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-center tracking-[0px] absolute w-[39.95px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[14.29%]"> 01:39</span>
      <div className="hourglassbottom w-[14.07px] h-[13.23px] absolute p-0">
        <div className="boundingBox w-[14.07px] h-[13.23px] relative bg-white opacity-100 p-0" />
        <svg width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.02928 4.8201C4.659 4.8201 5.17713 4.58659 5.58366 4.11958C5.99019 3.65255 6.19346 3.10888 6.19346 2.48855V0.835272H1.8651V2.48855C1.8651 3.10888 2.06837 3.65255 2.4749 4.11958C2.88143 4.58659 3.39956 4.8201 4.02928 4.8201ZM0.0390625 10.2038V9.65275H1.27895V7.99947C1.27895 7.36148 1.467 6.78619 1.84311 6.2736C2.21921 5.76101 2.724 5.41782 3.35747 5.24401C2.724 5.07021 2.21921 4.72701 1.84311 4.21442C1.467 3.70183 1.27895 3.12654 1.27895 2.48855V0.835272H0.0390625V0.28418H8.0195V0.835272H6.77961V2.48855C6.77961 3.12654 6.59156 3.70183 6.21545 4.21442C5.83935 4.72701 5.33456 5.07021 4.70109 5.24401C5.33456 5.41782 5.83935 5.76101 6.21545 6.2736C6.59156 6.78619 6.77961 7.36148 6.77961 7.99947V9.65275H8.0195V10.2038H0.0390625Z" fill="white" />
        </svg>
      </div>
      <div className="icon w-7 h-7 absolute opacity-100 p-0 border-[0.5px] border-white left-0 top-0" />
      <div className="time w-[55px] h-7 absolute opacity-100 p-0 border-r-[0.5px] border-r-white border-y-[0.5px] border-y-white left-[27px] top-0" />
    </div>
  </>}
  {(size == "Variant4") && <>
    <div className="playTime w-[93.71px] h-8 absolute gap-[80.6771240234375px] bg-[rgba(0,0,0,0.1)] opacity-100 p-0 left-[23px] top-[116px]">
      <span className="0139 font-['Volta_Modern_Display'] text-sm font-medium text-white text-center tracking-[0px] absolute w-[45.66px] h-[20.57px] left-[41.46%] right-[9.82%] inset-y-[17.86%]"> 01:39</span>
      <div className="hourglassbottom w-[16.08px] h-[15.12px] absolute p-0">
        <div className="boundingBox w-[16.08px] h-[15.12px] relative bg-white opacity-100 p-0" />
        <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.0329 5.79401C5.75259 5.79401 6.34473 5.52715 6.80934 4.99342C7.27395 4.45968 7.50625 3.83833 7.50625 3.12939V1.23993H2.55956V3.12939C2.55956 3.83833 2.79186 4.45968 3.25647 4.99342C3.72108 5.52715 4.31322 5.79401 5.0329 5.79401ZM0.472656 11.9469V11.317H1.88967V9.42758C1.88967 8.69845 2.10459 8.04098 2.53442 7.45516C2.96425 6.86935 3.54115 6.47712 4.26512 6.27849C3.54115 6.07985 2.96425 5.68763 2.53442 5.10181C2.10459 4.51599 1.88967 3.85852 1.88967 3.12939V1.23993H0.472656V0.610107H9.59315V1.23993H8.17614V3.12939C8.17614 3.85852 7.96122 4.51599 7.53139 5.10181C7.10156 5.68763 6.52466 6.07985 5.80069 6.27849C6.52466 6.47712 7.10156 6.86935 7.53139 7.45516C7.96122 8.04098 8.17614 8.69845 8.17614 9.42758V11.317H9.59315V11.9469H0.472656Z" fill="white" />
        </svg>
      </div>
      <div className="icon w-[32.1px] h-[32.1px] absolute border opacity-100 p-0 border-white left-0 top-0" />
      <div className="time w-[63px] h-8 absolute border opacity-100 p-0 border-white left-[30.953125px] top-0" />
    </div>
  </>}
</>
  );
}