import React from 'react';
import PropTypes from 'prop-types';

const DetailedNavLinks = ({ size, className }) => {
  return (
    <div
      className={`[border-bottom-style:solid] border-neutralsneutrals-40 flex border-t flex-col items-start [border-top-style:solid] border-b relative ${
        size === "s" ? "w-[342px]" : "w-[204px]"
      } ${size === "s" ? "px-0 py-[16px]" : "px-0 py-[12px]"} ${className}`}
    >
      {size === "XL" && (
        <>
          <div className="inline-flex flex-col items-start pt-0 pb-[4px] px-0 relative flex-[0_0_auto]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-l-body-small-bold font-[number:var(--l-body-small-bold-font-weight)] text-neutralsdark-grey text-[length:var(--l-body-small-bold-font-size)] tracking-[var(--l-body-small-bold-letter-spacing)] leading-[var(--l-body-small-bold-line-height)] whitespace-nowrap [font-style:var(--l-body-small-bold-font-style)]">
                Locametz
              </div>
              <div className="inline-flex items-start gap-[8px] pl-px pr-0 pt-[3px] pb-0 relative flex-[0_0_auto]">
                {/* Placeholder for Terms component */}
                {/* <Terms className="!relative !w-[12px] !h-[12px]" /> */}
              </div>
            </div>
            <div className="relative w-[119px] mt-[-2px] font-l-detail font-[number:var(--l-detail-font-weight)] text-neutralsdark-grey text-[length:var(--l-detail-font-size)] tracking-[var(--l-detail-letter-spacing)] leading-[var(--l-detail-line-height)] [font-style:var(--l-detail-font-style)]">
              (lutetium Lu 177 dotatate)
            </div>
          </div>
          <div className="relative w-fit font-l-caption font-[number:var(--l-caption-font-weight)] text-neutralsneutrals-70 text-[length:var(--l-caption-font-size)] tracking-[var(--l-caption-letter-spacing)] leading-[var(--l-caption-line-height)] whitespace-nowrap [font-style:var(--l-caption-font-style)]">
            Prostate Cancer
          </div>
        </>
      )}

      {size === "s" && (
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[173px] items-start relative">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-s-body-small-bold font-[number:var(--s-body-small-bold-font-weight)] text-neutralsdark-grey text-[length:var(--s-body-small-bold-font-size)] tracking-[var(--s-body-small-bold-letter-spacing)] leading-[var(--s-body-small-bold-line-height)] whitespace-nowrap [font-style:var(--s-body-small-bold-font-style)]">
                Locametz
              </div>
              <div className="inline-flex items-start gap-[8px] pl-px pr-0 pt-[3px] pb-0 relative flex-[0_0_auto]">
                {/* Placeholder for Terms component */}
                {/* <Terms className="!relative !w-[12px] !h-[12px]" /> */}
              </div>
            </div>
            <div className="relative self-stretch mt-[-2px] font-s-detail font-[number:var(--s-detail-font-weight)] text-neutralsdark-grey text-[length:var(--s-detail-font-size)] tracking-[var(--s-detail-letter-spacing)] leading-[var(--s-detail-line-height)] [font-style:var(--s-detail-font-style)]">
              (lutetium Lu 177 dotatate)
            </div>
          </div>
          <div className="relative w-fit font-s-caption font-[number:var(--s-caption-font-weight)] text-neutralsneutrals-70 text-[length:var(--s-caption-font-size)] tracking-[var(--s-caption-letter-spacing)] leading-[var(--s-caption-line-height)] whitespace-nowrap [font-style:var(--s-caption-font-style)]">
            Neuroendicrine Tumors
          </div>
        </div>
      )}
    </div>
  );
};

DetailedNavLinks.propTypes = {
  size: PropTypes.oneOf(["XL", "s"]),
};

export default DetailedNavLinks;
