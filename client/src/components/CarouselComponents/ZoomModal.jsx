import React from 'react';
import style from '../../../src/assets/css/CarouselModal.css';

const ZoomModal = props => {
  const styling = {
    backgroundImage: `url(${props.url})`
  };
  const containerStyling = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <div
      max-width="100%"
      overflow="hidden"
      height="100%"
      style={containerStyling}
    >
      <img
        src={props.url}
        // className={style.zoomModal}
        id="zoomPic"
        style={styling}
        height="auto"
        width="550px"
      />
    </div>
  );
};

export default ZoomModal;
