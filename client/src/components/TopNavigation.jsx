import React from 'react';
import styles from '../../src/assets/css/styles.css';

const TopNavigation = props => (
  <div>
    <div>
      <ol className={[styles.listStyle, styles.navContainer].join(' ')}>
        <span className={styles.nav}>
          <li className={styles.resizeText}>
            <svg width="20px" height="18px">
              <g
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              >
                <path d="M15 18v-6H2" />
                <path d="M6.5 7l-5 5 5 5" />
              </g>
            </svg>
            <span className={styles.navText}> Back </span>
          </li>
        </span>
        &nbsp; &nbsp; &nbsp;
        <li className={[styles.homeResize, styles.nav].join(' ')}>
          <span className={styles.resizeText}> Home </span>
        </li>
        <li className={styles.resizeText}>
          <span className={styles.separator}>/</span>{' '}
          <span className={[styles.underlineText, styles.nav].join(' ')}>
            {props.details.gender}
          </span>
        </li>
        <li className={styles.resizeText}>
          <span className={styles.separator}>/</span>{' '}
          <span className={[styles.underlineText, styles.nav].join(' ')}>
            {props.details.type}
          </span>
        </li>
        <li className={styles.resizeText}>
          <span className={styles.separator}>/</span>{' '}
          <span> {props.details.productName}</span>
        </li>
      </ol>
    </div>
  </div>
);

export default TopNavigation;
