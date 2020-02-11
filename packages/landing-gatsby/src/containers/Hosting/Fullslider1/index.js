import React from "react";
import { Link } from "gatsby"
import Slider from "react-slick";
import sampleimg from "./sample.jpg"
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
                <img src={sampleimg} alt="test" className="sliderImage" />
                    <div className="Banner-details">
                        <div>
                            <h1>Learn Our Products</h1>
                            <Link to="/product">Learn How</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="site-Banner">
                    <img src={sampleimg} alt="test" className="sliderImage" />
                    <div className="Banner-details">
                        <div>
                            <h1>Learn Our Products</h1>
                            <Link to="/product">Learn How</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
)

export default Fullslider1