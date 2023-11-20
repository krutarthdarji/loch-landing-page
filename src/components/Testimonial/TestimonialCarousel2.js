import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel2.scss";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};
const testimonialData = [
  {
    name: "Jack F",
    designation: "Ex Blackrock PM",
    quote:
      "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    designation: "Research, 3poch Crypto Hedge Fund",
    quote:
      "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
  {
    name: "Shiv S",
    designation: "Co-Founder Magik Labs",
    quote:
      "Managing my own portfolio is helpful. What’s interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
];
const TestimonialCarousel2 = () => {
  return (
    <div className="testimonial-carousel-container">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
      >
        {testimonialData.map((el, index) => {
          return (
            <div className="testimonialRMC" key={index}>
              <p className="nameRMC">
                {el.name}{" "}
                <span className="designationRMC">{el.designation}</span>
              </p>
              <div className="quoteRMC">
                <p>{el.quote}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default TestimonialCarousel2;
