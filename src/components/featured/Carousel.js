import React from "react";
import Slider from "react-slick";

import slide1 from "../../resources/images/slide_one.jpg";
import slide2 from "../../resources/images/slide_two.jpg";
import slide3 from "../../resources/images/slide_three.jpg";
import slide4 from "../../resources/images/slide_four.jpg";

const Images = [slide1, slide2, slide3, slide4];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <Slider {...settings}>
        {Images.map((image, index) => (
          <div key={index}>
            <div
              className="carrousel_image"
              key={index}
              style={{
                backgroundImage: `url(${image})`,
                height: "100vh",
                backgroundPosition: "center center"
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
