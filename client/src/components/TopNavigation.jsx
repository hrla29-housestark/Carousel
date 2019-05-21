import React from 'react';
import styles from '../../src/assets/css/styles.css';

const TopNavigation = props => (
  <div>
    <div>
      <ol className={[styles.listStyle, styles.navContainer].join(' ')}>
        <span>
          <svg className={styles.svgLine} width="19px" height="17px">
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
        </span>
        <li> Back</li>
      </ol>
    </div>
  </div>
);

export default TopNavigation;

{
  /* <li className={styles.nav}>
<span className={[styles.navText, styles.homeResize].join(' ')}>
  Home
</span>
</li> */
}

{
  /* <div>
<ol className={[styles.listStyle, styles.navContainer].join(' ')}>
  <li
    className={[
      styles.listStyle,
      styles.nav,
      styles.spanResize,
      styles.navContainer
    ].join(' ')}
  >
    <svg className={styles.svgLine} width="19px" height="17px">
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

    <span className={styles.navText}>Back</span>
  </li>
</ol>
</div> */
}
