import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container} from "react-bootstrap";

class TopCategories extends Component {
    render() {
        var settings = {
            autoplaySpeed: 3000,
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 5000,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="topCategories__section">
                    <p className="topCategories__title">Top Categories</p>
                    <Slider {...settings} className="text-center">
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg1">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">Workspace</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg2">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">Summer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg3">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">City</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg4">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">Food</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg5">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">Gravity</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg1">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">Workspace</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg2">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">Summer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg3">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">City</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg4">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">Food</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="topCategories__featuredImg topCategories__featuredImg5">
                                <div className="topCategories__featuredImgOverlay">
                                    <p className="topCategories__category">Gravity</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default TopCategories;