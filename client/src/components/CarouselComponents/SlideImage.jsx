import React from 'react';
import styles from '../../assets/css/carousel.css';

const SlideImage = props => {
  const styling = {
    backgroundImage: `url(${props.url})`
    // backgroundSize: 'cover',
    // backgroundPosition: 'center'
  };
  return (
    <div>
      <img
        src={props.url}
        height="auto"
        width="845px"
        object-fit="cover"
        style={styling}
      />
    </div>
  );
};

export default SlideImage;

//className={styles.imgSlider}
//className={styles.imgSliderWrapper}
