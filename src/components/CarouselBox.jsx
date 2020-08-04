import React, { Component } from 'react';
import Slider from 'react-slick';
import img1 from '../assets/cat1.jpg';
import img2 from '../assets/cat2.jpg';
import img3 from '../assets/cat3.jpg';
import img4 from '../assets/cat4.jpg';
import './Carousel.scss';

export default class CarouselBox extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      };
    return (
        <>
        <Slider {...settings}>
            <img
                src={img1}
                alt='logo' 
            />
            <img
                src={img2}
                alt='logo' 
            />
            <img
                src={img3}
                alt='logo' 
            />
            <img
                src={img4}
                alt='logo' 
            />
        </Slider>
      </>
    );
  }
}