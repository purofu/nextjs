import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({ state, className }) => {
  return (
    <div
      className={`w-[203px] flex h-[42px] relative ${state === "selected" ? "flex-col" : ""} ${
        state === "unselected" ? "items-end" : "items-start"
      } ${state === "unselected" ? "gap-[4px]" : ""} ${
        state === "unselected" ? "justify-around" : "justify-center"
      } ${className}`}
    >
      {state === "selected" && (
        <>
          <div className="flex w-[204px] items-center gap-[31px] relative flex-[0_0_auto] mr-[-1.00px]">
            <div className="relative w-[17px] h-[42px] bg-primarynovartis-blue-90" />
            {/* Placeholder for LeftHandNavItems component */}
            {/* <LeftHandNavItems
              className="!p-[unset] !bg-[unset] !w-[113px]"
              divClassName="!text-secondarysteelnovartis-steel-90 !tracking-[var(--l-caption-bold-letter-spacing)] !text-[length:var(--l-caption-bold-font-size)] ![font-style:var(--l-caption-bold-font-style)] !font-[number:var(--l-caption-bold-font-weight)] !font-l-caption-bold !leading-[var(--l-caption-bold-line-height)]"
              level="one"
              size="XL"
              text="Name"
              type="default"
            /> */}
          </div>
          <div className="flex items-start justify-around gap-[4px] pl-[48px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]">
            {/* Placeholder for Divider component */}
            {/* <Divider className="!relative !flex-1 !grow !h-px !mt-[-0.50px]" /> */}
          </div>
        </>
      )}

      {state === "unselected" && (
        <div className="flex flex-col h-[31px] items-start justify-between pl-[48px] pr-0 py-0 relative flex-1 grow">
          {/* Placeholder for LeftHandNavItemsWrapper component */}
          {/* <LeftHandNavItemsWrapper
            className="!flex-[0_0_auto] !bg-[unset]"
            divClassName="!text-secondarysteelnovartis-steel-40 !tracking-[var(--l-caption-letter-spacing)] !text-[length:var(--l-caption-font-size)] ![font-style:var(--l-caption-font-style)] !font-[number:var(--l-caption-font-weight)] !font-l-caption !leading-[var(--l-caption-line-height)]"
            text="Name"
          /> */}
          {/* Placeholder for Divider component */}
          {/* <Divider className="!relative !self-stretch !w-full !h-px !mb-[-0.50px]" /> */}
        </div>
      )}
    </div>
  );
};

Selector.propTypes = {
  state: PropTypes.oneOf(["selected", "unselected"]),
};

export default Selector;
