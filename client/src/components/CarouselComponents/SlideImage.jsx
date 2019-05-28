import React from 'react';
import styles from '../../assets/css/carousel.css';

const SlideImage = props => {
  const styling = {
    backgroundImage: `url(${props.url})`
  };
  return (
    <div className={styles.centerImage}>
      <img
        src={props.url}
        height="600px"
        width="600px"
        display="block"
        style={styling}
      />
    </div>
  );
};

export default SlideImage;
