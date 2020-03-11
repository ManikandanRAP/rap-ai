import React from 'react';
import PropTypes from 'prop-types';
import { GlideSlideWrapper1 } from './glide1.style';

// Glide Slide wrapper component
const GlideSlide1 = ({ children }) => {
  return (
    <GlideSlideWrapper1 className="glide__slide">{children}</GlideSlideWrapper1>
  );
};

GlideSlide1.propTypes = {
  /** Children. */
  children: PropTypes.element,
};

export default GlideSlide1;
