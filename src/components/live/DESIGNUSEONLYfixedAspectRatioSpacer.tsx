import React from 'react';

export function DESIGNUSEONLYfixedAspectRatioSpacer(props){
	const {
    aspectRatio = "1:1",
    portrait = "No",
    50Height = "No"
  } = props;
  return (
      <>
  {(aspectRatio == "Letter" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2816px] top-[725px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "Letter" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2816px] top-[374px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-[0.699999988079071] p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[169.5px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "Letter" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2816px] top-[241px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "Letter" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2816px] top-4 flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-[185.46px] items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center opacity-100 p-0 flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "A4" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2536px] top-[730px] flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-[169.71px] items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "A4" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2536px] top-[351px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[184.47px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "A4" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2536px] top-[226px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[85.85px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "A4" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2536px] top-4 flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-[169.7px] items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center opacity-100 p-0 flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "21:9" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2256px] top-[850px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[103.61px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "21:9" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2256px] top-[250px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-2.5 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-2.5 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-2.5 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
                <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "21:9" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2256px] top-[159px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "21:9" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[2256px] top-4 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "2:1" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1976px] top-[796px] flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-60 items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "2:1" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1976px] top-[276px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-2.5 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-2.5 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
              <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "2:1" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1976px] top-44 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "2:1" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1976px] top-4 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "16:9" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1696px] top-[765px] flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-[213.33px] items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "16:9" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1696px] top-[298px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-2.5 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "16:9" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1696px] top-[191.00390625px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "16:9" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1696px] top-4 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "Golden ratio 1.618:1" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1416px] top-[746px] flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-[194.16px] items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "Golden ratio 1.618:1" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1416px] top-[318px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-2.5 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-row h-[257.55px] items-start w-full opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "Golden ratio 1.618:1" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1416px] top-[204px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "Golden ratio 1.618:1" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1416px] top-4 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "16:10" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1136px] top-[745px] flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-48 items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "16:10" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1136px] top-[320.99658203125px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-2.5 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
          <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-row h-[256.86px] items-start w-full opacity-100 p-0 flex">
            <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
          </div>
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "16:10" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1136px] top-[206px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "16:10" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[1136px] top-4 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "3:2" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[856px] top-[735.9970703125px] flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-[180px] items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "3:2" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[856px] top-[336px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[116.16px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "3:2" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[856px] top-[215.9990234375px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "3:2" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[856px] top-4 flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "4:3" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[576px] top-[726px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "4:3" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[576px] top-[366px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[188.99px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "4:3" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[576px] top-[236px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[91px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "4:3" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[576px] top-4 flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-[180px] items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "5:4" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[296px] top-[724.00048828125px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[149.6px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "5:4" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[296px] top-[384.00048828125px] flex">
      <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full overflow-hidden opacity-100 p-0 flex">
        <div className="aspectRatioKeeperAdditionallyRotatedAutoLayout gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-[207.28px] items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
        </div>
      </div>
    </div>
  </>}
  {(aspectRatio == "5:4" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[296px] top-[248.00048828125px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "5:4" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-[296px] top-4 flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-48 items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "1:1" && portrait == "Yes" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-4 top-[736px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "1:1" && portrait == "Yes" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-4 top-[456px] flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-60 items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
  {(aspectRatio == "1:1" && portrait == "No" && 50Height == "Yes") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-4 top-[296px] flex">
      <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-col items-center w-full border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
    </div>
  </>}
  {(aspectRatio == "1:1" && portrait == "No" && 50Height == "No") && <>
    <div className="dESIGNUSEONLYfixedAspectRatioSpacer gap-0 absolute flex-col items-start w-60 overflow-hidden opacity-100 p-0 left-4 top-4 flex">
      <div className="aspectRatioKeeperAdditionally45RotatedAutoLayout gap-0 flex-row h-60 items-start w-full opacity-100 p-0 flex">
        <div className="aspectRatioKeeperRotatedAutoLayout gap-0 flex-row h-full items-center border opacity-100 p-0 border-[rgba(255,255,255,0.4)] flex" />
      </div>
    </div>
  </>}
</>
  );
}