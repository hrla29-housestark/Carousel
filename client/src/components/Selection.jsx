import React from 'react';
import styles from '../assets/css/styles.css';

const Selection = props => (
  <div>
    <div className={styles.row}>
      <div className={styles.dropdown}>
        <button
          className={[styles.dropdownSelect, styles.button].join(' ')}
          title="Select size"
        >
          <span className={styles.selectSize}> Select Size</span>
          <svg
            className={[styles.dropdownIcon, styles.dropdownIcon2].join(' ')}
            viewBox="0 0 16 24"
            width="50%"
            height="50%"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M1.5 9L8 15.5 14.5 9"
            />
          </svg>
        </button>
      </div>
      <div className={styles.quantitySelector}>
        <div className={styles.spacingPositioning}>
          <div className={styles.quantityDropdown}>
            <button
              type="button"
              title="quantity"
              className={styles.dropdownSelect}
            >
              <span className={styles.selectSize}> 1 </span>
              <svg
                className={[styles.dropdownIcon, styles.dropdownIcon2].join(
                  ' '
                )}
                viewBox="0 0 16 24"
                width="50%"
                height="50%"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M1.5 9L8 15.5 14.5 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Selection;

{
  /* </div> <div>
<div className={[styles.row, styles.size_quantity_container].join(' ')} />
<div>
  <div className={[styles.sizeDropdown, styles.spacing].join(' ')}>
    <div className={styles.dropdown}>
      <button
        className={[styles.dropdownSelect, styles.button].join(' ')}
        title="Select size"
      >
        <span className={styles.selectSize}> Select Size</span>
        <svg
          className={[styles.dropdownIcon, styles.dropdownIcon2].join(' ')}
          viewBox="0 0 16 24"
          width="50%"
          height="50%"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M1.5 9L8 15.5 14.5 9"
          />
        </svg>
      </button>
      <div className={styles.sizeDropdownOptions}>
        <div className={styles.squareSize}>
          <ul className={[styles.squareList, styles.ul].join(' ')}>
            <li className={styles.listItem} title="5">
              <button type="button" title="5">
                5
              </button>
            </li>
          </ul>
        </div>
        <select className={styles.selectOption} aria-label="Select size">
          <option value="defaultOption" disabled="" hidden="" />
          <option value="BD8029_530">5</option>
          <option value="BD8029_530">5.5</option>
          <option value="BD8029_530">6</option>
          <option value="BD8029_530">6.5</option>
          <option value="BD8029_530">7</option>
          <option value="BD8029_530">7.5</option>
          <option value="BD8029_530">8</option>
          <option value="BD8029_530">8.5</option>
          <option value="BD8029_530">9</option>
          <option value="BD8029_530">9.5</option>
          <option value="BD8029_530">10</option>
          <option value="BD8029_530">10.5</option>
          <option value="BD8029_530">11</option>
        </select>
      </div>
    </div>
  </div>
  <div className={styles.quantitySelector}>
    <div className={styles.spacingPositioning}>
      <div className={styles.quantityDropdown}>
        <button
          type="button"
          title="quantity"
          className={styles.dropdownSelect}
        >
          <span className={styles.selectSize}> 1 </span>
          <svg
            className={[styles.dropdownIcon, styles.dropdownIcon2].join(
              ' '
            )}
            viewBox="0 0 16 24"
            width="50%"
            height="50%"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M1.5 9L8 15.5 14.5 9"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
            </div>  */
}
