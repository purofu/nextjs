import React from 'react';

export function C63ExtraInformation(props){
	const {
    size = "XL"
  } = props;
  return (
      <>
  {(size == "XL") && <>
    <div className="c63ExtraInformation w-[1440px] h-[88px] absolute bg-white opacity-100 p-0 border-t-[#9e9e9e] border-t left-[30px] top-[29px]">
      <div className="frame483056 gap-2 absolute flex-col items-start opacity-100 p-0 left-12 top-6 flex">
        <span className="tC font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[1330px]">Please note that the radioligand imaging and therapy facilities listed here are only those that have authorised their participation on this website. Please check back regularly, as this list will be periodically updated with newly certified locations.</span>
        <span className="tC font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[1330px]">Facilities may have different patient eligibility criteria. Please contact the treatment facility directly for more information, including information about availability and supply. If you would like to request an RLI/RLT hospital is added to this page please contact [insert email address]</span>
      </div>
    </div>
  </>}
  {(size == "S") && <>
    <div className="c63ExtraInformation gap-1 absolute flex-row items-start w-[375px] bg-white opacity-100 px-4 py-6 border-t-[#9e9e9e] border-t left-[2529px] top-[29px] flex">
      <span className="tC font-['Volta_Modern_Display'] text-[9px] font-medium text-[#212121] text-left tracking-[0px] w-[343px] flex-1 min-w-0">Please note that the radioligand imaging and therapy facilities listed here are only those that have authorised their participation on this website. Please check back regularly, as this list will be periodically updated with newly certified locations.<br /><br />Facilities may have different patient eligibility criteria. Please contact the treatment facility directly for more information, including information about availability and supply. If you would like to request an RLI/RLT hospital is added to this page please contact [insert email address]</span>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c63ExtraInformation w-[768px] h-[120px] absolute bg-white opacity-100 p-0 border-t-[#9e9e9e] border-t left-[1678px] top-[29px]">
      <div className="frame483056 gap-2 absolute flex-col w-[692px] items-start opacity-100 p-0 left-12 top-6 flex">
        <span className="tC font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[692px]">Please note that the radioligand imaging and therapy facilities listed here are only those that have authorised their participation on this website. Please check back regularly, as this list will be periodically updated with newly certified locations.</span>
        <span className="tC font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px] w-[692px]">Facilities may have different patient eligibility criteria. Please contact the treatment facility directly for more information, including information about availability and supply. If you would like to request an RLI/RLT hospital is added to this page please contact [insert email address]</span>
      </div>
    </div>
  </>}
</>
  );
}