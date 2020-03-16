import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Button from 'common/src/components/Button';
import Slider from 'react-slick';
import SliderImg1 from 'common/src/assets/image/hosting/Slider/sliderimage1.jpg';
import SliderImg2 from 'common/src/assets/image/hosting/Slider/sliderimage2.jpg';
import SliderImg3 from 'common/src/assets/image/hosting/Slider/sliderimage3.jpg';
import SliderImg4 from 'common/src/assets/image/hosting/Slider/sliderimage4.jpg';
import SliderImg5 from 'common/src/assets/image/hosting/Slider/sliderimage5.jpg';

import './fullslider1.css';

var settings = {
  dots: true,
  speed: 700,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  initialSlide: 0,
};

const Fullslider1 = () => {
  return (
    <div className="slider-section">
      <Slider {...settings} id="sampleTesst">
        <div className="item">
          <div className="site-Banner">
            <img src={SliderImg1} alt="slideimage1" className="sliderImage" />
            <div className="Banner-details">
              <div>
                <h1>Practical AI that delivers</h1>
                <h1>Customer Experience</h1>
                <p>
                  Automate extraction of structured data from unstructured
                  content
                </p>
                <div className="slider-bar" />
                <div>
                  <Link to="#">
                    <Button
                      className="slider_button"
                      title="Book A Free Demo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Fullslider1;
