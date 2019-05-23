import React from 'react';
import styles from '../assets/css/styles.css';

const Selection = props => (
  <div>
    <div className={[styles.row, styles.size_quantity_container].join(' ')} />
    <div className={styles.dropdown}>
      <button className={styles.dropdownSelect}>
        <span> Select Size</span>
        <svg
          class="gl-icon gl-dropdown__select-icon"
          data-di-rand="1558570244522"
        />
      </button>
    </div>
  </div>
);

export default Selection;
