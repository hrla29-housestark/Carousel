import React from 'react';
import styles from '../../components/CarouselComponents/CarouselModal.css';

const Zoom = props => (
  <div>
    <div className={style.container}>
      <img
        src={props.image}
        className={style.box}
        id="zoomPic"
        onMouseOver={e => props.enter(e)}
        onMouseOut={e => props.exit(e)}
        onMouseMove={e => props.follow(e)}
      />
    </div>
  </div>
);

export default Zoom;
