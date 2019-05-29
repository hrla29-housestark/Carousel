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
            <span className={styles.listBarDotDefault}> Test </span>
          </li>
          <li className={styles.listBar}>
            {' '}
            <span className={styles.listBarDotSelected}> Test </span>
          </li>
          <li className={styles.listBar}>
            {' '}
            <span className={styles.listBarDotSelected}> Test </span>
          </li>
          <li className={styles.listBar}>
            {' '}
            <span className={styles.listBarDotSelected}> Test </span>
          </li>
          <li className={styles.listBar}>
            {' '}
            <span className={styles.listBarDotSelected}> Test </span>
          </li>
          <li className={styles.listBar}>
            {' '}
            <span className={styles.listBarDotSelected}> Test </span>
          </li>
          <li className={styles.listBar}>
            {' '}
            <span className={styles.listBarDotSelected}> Test </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZoomModal;
