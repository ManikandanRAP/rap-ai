import React from 'react';
import PropTypes from 'prop-types';
import { GlideSlideWrapper2 } from './glide2.style';

// Glide Slide wrapper component
const GlideSlide2 = ({ children }) => {
  return (
    <GlideSlideWrapper2 className="glide__slide2">{children}</GlideSlideWrapper2>
  );
};

GlideSlide2.propTypes = {
  /** Children. */
  children: PropTypes.element,
};

export default GlideSlide2;
