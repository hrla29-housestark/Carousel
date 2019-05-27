import React from 'react';
import styles from '../../assets/css/carousel.css';

const RightArrow = props => (
  <div className={styles.next} onClick={props.nextSlide}>
    <svg
      className={[styles.nextSvg, styles.faArrowRight, styles.faArrowLeft].join(
        ' '
      )}
      viewBox="0 0 24 24"
      width="50%"
      height="50%"
      onClick={props.nextSlide}
    >
      <path
        d="M17.59 7l5 5-5 5M0 12h22"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  </div>
);

export default RightArrow;
