import React from 'react';
import styles from '../assets/css/styles.css';

const AddToBag = props => (
  <div
    className={[styles.rowBag, styles.bagContainer, styles.bagPadding].join(
      ' '
    )}
  >
    <button
      className={[
        styles.btnText,
        styles.btnWidth,
        styles.btnDesign,
        styles.btnPrimary,
        styles.btnPrimary1
      ].join(' ')}
    >
      Add To Bag{' '}
      <svg
        className={[styles.arrowWhite, styles.arrowWhite2].join(' ')}
        viewBox="0 0 24 24"
        width="50%"
        height="50%"
      >
        <path
          d="M17.59 7l5 5-5 5M0 12h22"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </button>
    <div
      className={[styles.btnText, styles.heartIcon, styles.heartSet].join(' ')}
    >
      Test
    </div>
  </div>
);

export default AddToBag;
