import React, { FunctionComponent } from "react";
import Slider from "react-slick";
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// // // //

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

export const ProductSlider: FunctionComponent = () => {
    return (
        <div className="row slider-container">
            <div className="col-lg-12 text-center">
                <p className="lead mb-0">Support Smaller Businesses</p>
                <div className="slider">
                    <Slider {...settings}>
                        <img src="https://via.placeholder.com/250" />
                        <img src="https://via.placeholder.com/250" />
                        <img src="https://via.placeholder.com/250" />
                        <img src="https://via.placeholder.com/250" />
                    </Slider>
                </div>
            </div>
        </div>
    );
};
