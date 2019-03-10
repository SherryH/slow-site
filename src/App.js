import React from 'react';
import Carousel from './components/Carousel';

const App = () => {
  const carouselNum = Array.from(Array(10).keys());
  return (
    carouselNum.map(index => (
      <div key={index} id={`carousel${index}`}>
        <Carousel />
      </div>
    ))
  );
};


export default App;
