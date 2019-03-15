import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import OnVisible from 'react-on-visible';
import './carousel.css';

const Carousel = () => {
  const carouselRef = React.createRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    for (let i = 0; i < 200; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      carouselRef.current.appendChild(box);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    className: 'invisible',
  };
  return (
    <div ref={carouselRef}>
      <h2>Auto Play</h2>
      <OnVisible onChange={(visible) => { console.log('visible', visible); setIsVisible(visible); console.log('isVisible', isVisible); }}>

        <Slider {...settings}>
          <div>
            <img src="https://images.pexels.com/photos/1934259/pexels-photo-1934259.jpeg" alt="Italian Trulli" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/290320/pexels-photo-290320.jpeg" alt="Italian Trulli" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/1309778/pexels-photo-1309778.jpeg" alt="Italian Trulli" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/631160/pexels-photo-631160.jpeg" alt="Italian Trulli" />
            <h3>4</h3>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/631160/pexels-photo-631160.jpeg" alt="Italian Trulli" />
            <h3>5</h3>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/631160/pexels-photo-631160.jpeg" alt="Italian Trulli" />
            <h3>6</h3>
          </div>
        </Slider>
      </OnVisible>
    </div>
  );
};

export default Carousel;
