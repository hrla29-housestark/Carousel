import React from 'react';
import styles from '../../assets/css/carousel.css';

const SlideImage = props => {
  return (
    <div>
      <img
        src={props.image}
        height="auto"
        width="845px"
        object-fit="cover"
        className={styles.img}
      />
    </div>
  );
};

export default SlideImage;

//className={styles.imgSlider}
//className={styles.imgSliderWrapper}
