import React from 'react';
import styles from '../../assets/css/carousel.css';
import style from '../../assets/css/CarouselModal.css';

const SlideImage = props => {
  const styling = {
    backgroundImage: `url(${props.url})`
  };
  {
    console.log(props.id);
  }
  return (
    <div className={[styles.centerImage, style.zoomContainer].join(' ')}>
      <img
        src={props.url}
        height="600px"
        width="600px"
        display="block"
        style={styling}
        onClick={() => {
          props.openModal();
          console.log('clicked');
        }}
      />
    </div>
  );
};

export default SlideImage;
