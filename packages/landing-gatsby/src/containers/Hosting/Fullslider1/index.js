import React from "react";
import { Link } from "gatsby"
import Slider from "react-slick";
import SliderImg1 from "./sliderimage1.jpg"
import SliderImg2 from "./sliderimage2.jpg"
import SliderImg3 from "./sliderimage3.jpg"
import SliderImg4 from "./sliderimage4.jpg"
import SliderImg5 from "./sliderimage5.jpg"
import "./fullslider1.css"

var settings = {
    dots: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Fullslider1 = () => (
    <div className="slider-section">
        <Slider {...settings}>
            <div className="item">
                <div className="site-Banner">
                    <img src={SliderImg1} alt="slideimage1" className="sliderImage" />
                    <div className="Banner-details">
                        <div>
                            <h1>Disrupt eCommerce with a Headless Model</h1>
                            <Link to="/product">Learn How</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="site-Banner">
                    <img src={SliderImg2} alt="slideimage2" className="sliderImage" />
                    <div className="Banner-details">
                        <div>
                            <h1>Innovative, Disruptive Plug n Play with Universal Commerce</h1>
                            <Link to="/product">Learn How</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="site-Banner">
                    <img src={SliderImg3} alt="slideimage2" className="sliderImage" />
                    <div className="Banner-details">
                        <div>
                            <h1>Dr Commerce – Personalized Support & Services</h1>
                            <Link to="/product">Learn How</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="site-Banner">
                    <img src={SliderImg4} alt="slideimage2" className="sliderImage" />
                    <div className="Banner-details">
                        <div>
                            <h1>Seamless Omnichannel Experience to Delight Shoppers</h1>
                            <Link to="/product">Learn How</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="site-Banner">
                    <img src={SliderImg5} alt="slideimage2" className="sliderImage" />
                    <div className="Banner-details">
                        <div>
                            <h1>TBD</h1>
                            <Link to="/product">Learn How</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
)

export default Fullslider1