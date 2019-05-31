import React from 'react';
import styles from '../../../src/assets/css/CarouselModal.css';

const ZoomModal = props => {
  const styling = {
    backgroundImage: `url(${props.url})`,
    overflow: 'hidden'
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
        id="zoomPic"
        style={styling}
        height="auto"
        width="550px"
        onClick={props.toggleZoom}
        style={{ transformOrigin: `${props.x}px ${props.y}px` }}
      />

      <div className={styles.slideBar}>
        <ul className={styles.bar}>
          <li className={styles.listBar}>
            <span
              id="li0"
              onClick={props.changeSlideBar}
              className={
                props.counter === 0
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
            />
          </li>
          <li className={styles.listBar}>
            <span
              id="li1"
              onClick={props.changeSlideBar}
              className={
                props.counter === 1
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
            />
          </li>
          <li className={styles.listBar}>
            <span
              id="li2"
              className={
                props.counter === 2
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              onClick={props.changeSlideBar}
            />
          </li>
          {/* <li className={styles.listBar}>
            <span
              id="li3"
              className={
                props.counter === 3
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              onClick={props.changeSlideBar}
            />
          </li>
          <li className={styles.listBar}>
            <span
              className={
                props.counter === 4
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              onClick={props.changeSlideBar}
            />
          </li>
          <li className={styles.listBar}>
            <span
              className={
                props.counter === 5
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              onClick={props.changeSlideBar}
            />
          </li>
          <li className={styles.listBar}>
            <span
              className={
                props.counter === 6
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              onClick={props.changeSlideBar}
            />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default ZoomModal;
