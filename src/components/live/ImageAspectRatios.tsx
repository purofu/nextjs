import React from 'react';

export function ImageAspectRatios(props){
	const {
    ratio = "4:1"
  } = props;
  return (
      <>
  {(ratio == "4:1") && <>
    <div className="imageAspectRatios gap-0 absolute flex-col items-start w-[600px] overflow-hidden opacity-100 p-0 left-5 top-5 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(ratio == "2:1") && <>
    <div className="imageAspectRatios gap-0 absolute flex-col items-start w-[600px] overflow-hidden opacity-100 p-0 left-5 top-72 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(ratio == "3:2") && <>
    <div className="imageAspectRatios gap-0 absolute flex-col items-start w-[600px] overflow-hidden opacity-100 p-0 left-5 top-[710px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(ratio == "3:4") && <>
    <div className="imageAspectRatios gap-0 absolute flex-col items-start w-[600px] overflow-hidden opacity-100 p-0 left-5 top-[1258px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[470.98px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(ratio == "4:5") && <>
    <div className="imageAspectRatios gap-0 absolute flex-col items-start w-[600px] overflow-hidden opacity-100 p-0 left-5 top-[2171px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[516.71px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
</>
  );
}