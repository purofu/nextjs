import React from 'react';

export function SingleNavLink(props){
	const {
    property1 = "XL"
  } = props;
  return (
      <>
  {(property1 == "XL") && <>
    <div className="singleNavLink gap-3 absolute flex-col items-start opacity-100 p-0 left-2 top-2 flex">
      <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      <div className="frame482707 gap-0 flex-col items-start opacity-100 p-0 flex">
        <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Prostate Cancer</span>
      </div>
      <div className="1pxDivider w-[204px] h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
    </div>
  </>}
  {(property1 == "S") && <>
    <div className="singleNavLink gap-3 absolute flex-col w-[342px] items-start opacity-100 p-0 left-2 top-[138px] flex">
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
          <div className="linkIcon w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.1346H1.99998V13.6923C1.99998 13.7692 2.03202 13.8397 2.09613 13.9038C2.16024 13.9679 2.23077 14 2.3077 14H17.6923C17.7692 14 17.8397 13.9679 17.9038 13.9038C17.9679 13.8397 18 13.7692 18 13.6923V2.3077C18 2.23077 17.9679 2.16024 17.9038 2.09613C17.8397 2.03203 17.7692 1.99998 17.6923 1.99998H2.3077C2.23077 1.99998 2.16024 2.03203 2.09613 2.09613C2.03202 2.16024 1.99998 2.23077 1.99998 2.3077V4.86535H0.5V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.6923 11.9615L8.63848 10.8769L10.7808 8.74995H0.5V7.25H10.7808L8.63848 5.12308L9.6923 4.03848L13.6538 7.99998L9.6923 11.9615Z" fill="#212121" />
            </svg>
          </div>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Prostate Cancer</span>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
    </div>
  </>}
  {(property1 == "M") && <>
    <div className="singleNavLink gap-3 absolute flex-col w-[342px] items-start opacity-100 p-0 left-2 top-[72px] flex">
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
      <div className="frame482707 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="frame482762 gap-3 flex-row items-start opacity-100 p-0 flex">
          <div className="linkIcon w-6 h-6 relative opacity-100 p-0">
            <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
            <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.3077 15.5C1.80257 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.1346H1.99998V13.6923C1.99998 13.7692 2.03202 13.8397 2.09613 13.9038C2.16024 13.9679 2.23077 14 2.3077 14H17.6923C17.7692 14 17.8397 13.9679 17.9038 13.9038C17.9679 13.8397 18 13.7692 18 13.6923V2.3077C18 2.23077 17.9679 2.16024 17.9038 2.09613C17.8397 2.03203 17.7692 1.99998 17.6923 1.99998H2.3077C2.23077 1.99998 2.16024 2.03203 2.09613 2.09613C2.03202 2.16024 1.99998 2.23077 1.99998 2.3077V4.86535H0.5V2.3077C0.5 1.80257 0.675 1.375 1.025 1.025C1.375 0.675 1.80257 0.5 2.3077 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80257 19.5 2.3077V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.3077ZM9.6923 11.9615L8.63848 10.8769L10.7808 8.74995H0.5V7.25H10.7808L8.63848 5.12308L9.6923 4.03848L13.6538 7.99998L9.6923 11.9615Z" fill="#212121" />
            </svg>
          </div>
          <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#212121] text-left tracking-[0px]">Prostate Cancer</span>
        </div>
      </div>
      <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#bdbdbd] opacity-100 p-0" />
    </div>
  </>}
</>
  );
}