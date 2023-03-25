import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '50vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const MainSlider = () => {
  return (
    <Carousel effect='fade' autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
    </Carousel>
  );
};
