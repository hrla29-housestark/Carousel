import React from 'react';
import styles from '../../assets/css/carousel.css';

const SlideImage = props => {
  return (
    <div>
      <img src={props.image} height="450%" width="100%" />
    </div>
  );
};

export default SlideImage;
