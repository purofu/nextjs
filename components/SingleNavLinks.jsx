
import React from 'react';
import PropTypes from 'prop-types';

export const SingleNavLinks = ({ size, className }) => {
  return (
    <div
      className={`flex-col items-start gap-[12px] relative ${size === 's' ? 'w-[342px]' : ''} ${
        size === 's' ? 'flex' : 'inline-flex'
      } ${className}`}
    >
      {/* Your ElementDivider component should be implemented here */}
      <div
        className={`flex-col items-start flex-[0_0_auto] relative ${size === 's' ? 'w-full' : ''} ${
          size === 's' ? 'flex' : 'inline-flex'
        } ${size === 's' ? 'self-stretch' : ''}`}
      >
        <div
          className={`relative ${size === 'XL' ? 'font-l-body-small-bold' : ''} ${size === 'XL' ? 'w-fit' : ''} ${
            size === 's' ? 'inline-flex' : ''
          } ${size === 'XL' ? 'mt-[-1.00px]' : ''} ${
            size === 'XL' ? 'tracking-[var(--l-body-small-bold-letter-spacing)]' : ''
          } ${
            size === 'XL' ? 'text-[length:var(--l-body-small-bold-font-size)]' : ''
          } ${
            size === 'XL' ? '[font-style:var(--l-body-small-bold-font-style)]' : ''
          } ${size === 's' ? 'items-start' : ''} ${size === 'XL' ? 'text-neutralsdark-grey' : ''} ${
            size === 's' ? 'gap-[12px]' : ''
          } ${size === 's' ? 'flex-[0_0_auto]' : ''} ${
            size === 'XL' ? 'font-[number:var(--l-body-small-bold-font-weight)]' : ''
          } ${
            size === 'XL' ? 'leading-[var(--l-body-small-bold-line-height)]' : ''
          } ${
            size === 'XL' ? 'whitespace-nowrap' : ''
          }`}
        >
          {size === 'XL' && <>Prostate Cancer</>}

          {size === 's' && (
            <>
              {/* Your LinkIcon component should be implemented here */}
              <div className="relative w-fit mt-[-1.00px] font-s-body-small-bold font-[number:var(--s-body-small-bold-font-weight)] text-neutralsdark-grey text-[length:var(--s-body-small-bold-font-size)] tracking-[var(--s-body-small-bold-letter-spacing)] leading-[var(--s-body-small-bold-line-height)] whitespace-nowrap [font-style:var(--s-body-small-bold-font-style)]">
                Prostate Cancer
              </div>
            </>
          )}
        </div>
      </div>
      {/* Your ElementDivider component should be implemented here */}
    </div>
  );
};

SingleNavLinks.propTypes = {
  size: PropTypes.oneOf(['XL', 's']),
  className: PropTypes.string,
};
