import React from 'react';
import { Link } from 'gatsby';
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
  arrows: true,
  speed: 700,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Fullslider1 = () => (
  <div className="slider-section">
    <Slider {...settings}>
      <div className="item">
        <div className="site-Banner">
          <img src={SliderImg1} alt="slideimage1" className="sliderImage" />
          <div className="Banner-details">
            <div>
              <h1>Headless Commerce</h1>
              <p>
                Disrupt eCommerce and deliver extraordinary customer experience
                anywhere
              </p>
              <Link to="/product">
                <Button title="Work With Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="site-Banner">
          <img src={SliderImg2} alt="slideimage2" className="sliderImage" />
          <div className="Banner-details">
            <div>
              <h1>Universal Commerce</h1>
              <p>
                Best of breed solutions with microservices, extensibility and no
                vendor lock-in
              </p>
              <Link to="/product">
                <Button title="Work With Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="site-Banner">
          <img src={SliderImg3} alt="slideimage2" className="sliderImage" />
          <div className="Banner-details">
            <div>
              <h1>Doctor Commerce</h1>
              <p>
                Personalized health check that boosts your eCommerce ecosystem
              </p>
              <Link to="/product">
                <Button title="Work With Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="site-Banner">
          <img src={SliderImg4} alt="slideimage2" className="sliderImage" />
          <div className="Banner-details">
            <div>
              <h1>Omnichannel Engagement</h1>
              <p>
                Seamless engagement that drives customer loyalty and evangelism
              </p>
              <Link to="/product">
                <Button title="Work With Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="site-Banner">
          <img src={SliderImg5} alt="slideimage2" className="sliderImage" />
          <div className="Banner-details">
            <div>
              <h1>5G </h1>
              <p>Next-gen eCommerce connecting everything at speed & scale</p>
              <Link to="/product">
                <Button title="Work With Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </div>
);

export default Fullslider1;
