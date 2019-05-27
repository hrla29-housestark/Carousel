import React from 'react';
import styles from '../../assets/css/carousel.css';

const LeftArrow = props => (
  <div className={styles.backArrowSvg1}>
    <svg
      className={styles.backArrowSvg}
      viewBox="0 0 24 24"
      width="50%"
      height="50%"
      onClick={props.left}
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

export default LeftArrow;
