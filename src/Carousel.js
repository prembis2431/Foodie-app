import React, { useRef, useState } from "react";
import { data } from "./Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef(null); // Reference for controlling the slider

  const settings = {
    dots: false, // Disable default dots
    infinite: false, // Stop infinite scrolling
    speed: 500, // Speed of slide transitions
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll per click
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(Math.ceil(newIndex / 3) + 1); // Update slide index for the page numbers
    }
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Move to previous slide
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); // Move to next slide
  };

  return (
    <section className="wholeContainer">
      <div className="carouselContainer">
        <h1 style={{ color: "rgba(14, 35, 104, 1)", paddingLeft: "105px", fontFamily: "Source Sans 3"}}>Latest Articles</h1>

        <div className="carouselWrapper">
          <Slider ref={sliderRef} {...settings}>
            {data.map((d, index) => (
              <div key={index} className="carouselItem">
                <img src={d.image} alt="Foodie" className="carouselImage" />
                <div className="carouselText">
                  <p className="title">{d.title}</p>
                  <p>{d.description}</p>
                  <button className="carouselBtn">Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom arrows and page numbers */}
        <div className="pageNumbers">
          <button onClick={handlePrev} disabled={currentSlide === 1}>
            ◀
          </button>
          <span>
            {currentSlide}/{Math.ceil(data.length / 3)}
          </span>
          <button onClick={handleNext} disabled={currentSlide === Math.ceil(data.length / 3)}>
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
