import React from 'react';
import styles from '../assets/css/styles.css';

const AddToBag = props => (
  <div
    className={[styles.rowBag, styles.bagContainer, styles.bagPadding].join(
      ' '
    )}
  >
    {!props.hideBtnState ? (
      <button onClick={props.addToBagFunction} className={styles.btnDesign}>
        Add To Bag
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
    ) : null}
    {!props.hideHeartBtnState ? (
      <div
        className={[styles.btnText, styles.heartIcon, styles.heartSet].join(
          ' '
        )}
      >
        <div className={styles.toggleHeart} onClick={props.changeHeart}>
          <svg
            viewBox="0 0 20 24"
            width="50%"
            height="50%"
            className={styles.arrowWhite}
          >
            <path
              fill={props.heart ? 'black' : 'none'}
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"
            />
          </svg>
        </div>
      </div>
    ) : null}
  </div>
);

export default AddToBag;
