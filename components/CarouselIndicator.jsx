
import React from 'react';
import PropTypes from 'prop-types';

export const CarouselIndicator = ({ state, className }) => {
  return (
    <div
      className={`border border-solid border-secondarysteelnovartis-steel-40 w-[12px] h-[12px] rounded-[900px] ${
        state === 'selected' ? 'bg-secondarysteelnovartis-steel-40' : ''
      } ${className}`}
    />
  );
};

CarouselIndicator.propTypes = {
  state: PropTypes.oneOf(['selected', 'unselected']),
  className: PropTypes.string,
};
