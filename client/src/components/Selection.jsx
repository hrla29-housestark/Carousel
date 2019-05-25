import React from 'react';
import styles from '../assets/css/styles.css';

const Selection = props => (
  <div
    className={[styles.row, styles.rowPadding, styles.rowQuantitySize].join(
      ' '
    )}
  >
    <div className={[styles.boxCol, styles.rowPadding].join(' ')}>
      <div className={styles.productSizeSpacing}>
        <div
          className={[styles.dropdownSize, styles.dropDownSizePosition].join(
            ' '
          )}
        >
          <button
            title="Select Size"
            className={[
              styles.dropDownSizeOpen,
              styles.dropdownSelectLabel,
              styles.sizeDropdownButton
            ].join(' ')}
            onClick={() => {
              props.sizeDropdown();
              props.sizeUpdateArrow();
              // props.hideButton();
            }}
          >
            <span className={styles.dropdownSelectLabel}> {props.size} </span>
            <svg
              className={
                props.sizeArrowState
                  ? [styles.arrow, styles.arrow2, styles.arrowIconChange].join(
                      ' '
                    )
                  : [styles.arrow, styles.arrow2].join(' ')
              }
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
          {props.sizeClicked ? (
            <div
              className={[styles.squareList, styles.squarePadding].join(' ')}
            >
              <div className={styles.divHeight}>
                <ul
                  className={[
                    styles.squareList,
                    styles.squarePadding,
                    styles.ulText,
                    styles.divHeight2
                  ].join(' ')}
                >
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                      name="5"
                      onClick={props.updateSize}
                    >
                      5
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="5.5"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      5.5{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="6"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      6{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="6.5"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      6.5{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="7"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      {' '}
                      7{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="7.5"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      7.5{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="8"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      8{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="8.5"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      8.5{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="9"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      9{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="9.5"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      9.5{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="10"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      10{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="10.5"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      10.5{' '}
                    </button>
                  </li>
                  <li className={styles.menuItem}>
                    <button
                      type="button"
                      name="11"
                      onClick={props.updateSize}
                      className={[
                        styles.menuElement,
                        styles.ulText,
                        styles.btn
                      ].join(' ')}
                    >
                      11{' '}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {/* Quantity Selector*/}
    </div>
    <div className={styles.boxCol2}>
      <div className={[styles.quantitySpacing, styles.quantityItem].join(' ')}>
        <div
          className={[
            styles.quantityDropdown,
            styles.quantityDropdownSmall,
            styles.quantityDropdownOpen
          ].join(' ')}
        >
          <button
            type="button"
            title="Quantity"
            className={styles.quantityDropdownSelect}
            onClick={() => {
              props.dropdown();
              props.updateArrow();
              // props.hideHeartButton();
            }}
          >
            <span className={styles.spanSelect}> {props.quantity} </span>
            <svg
              className={
                props.arrowState
                  ? [
                      styles.arrowIcon,
                      styles.arrowIcon3,
                      styles.arrowIconTransform
                    ].join(' ')
                  : [styles.arrowIcon, styles.arrowIcon3].join(' ')
              }
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
          {props.clicked ? (
            <div>
              <ul className={styles.ulScroll}>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="1"
                    onClick={props.updateQuantity}
                  >
                    1
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="2"
                    onClick={props.updateQuantity}
                  >
                    2
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="3"
                    onClick={props.updateQuantity}
                  >
                    3
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="4"
                    onClick={props.updateQuantity}
                  >
                    4
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="5"
                    onClick={props.updateQuantity}
                  >
                    5
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="6"
                    onClick={props.updateQuantity}
                  >
                    6
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="7"
                    onClick={props.updateQuantity}
                  >
                    7
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="8"
                    onClick={props.updateQuantity}
                  >
                    8
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="9"
                    onClick={props.updateQuantity}
                  >
                    9
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="10"
                    onClick={props.updateQuantity}
                  >
                    10
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="11"
                    onClick={props.updateQuantity}
                  >
                    11
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={[styles.dropdownSelect, styles.quantity].join(
                      ' '
                    )}
                    name="12"
                    onClick={props.updateQuantity}
                  >
                    12
                  </button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);

export default Selection;

//  <div className={[styles.row]}>
//    <ul
//   className={[styles.squareList, styles.squareListCon].join(' ')}
// >
//   <li className={styles.sizeItem} title="5">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       5
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="5.5">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       5.5
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="6">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       6
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="6.5">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       6.5
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="7">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       7
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="7.5">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       7.5
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="8">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       8
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="8.5">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       8.5
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="9">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       9
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="9.5">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       9.5
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="10">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       10
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="10.5">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       10.5
//     </button>
//   </li>
//   <li className={styles.sizeItem} title="11">
//     <button
//       type="button"
//       className={[styles.squareListCon, styles.sizeElement].join(
//         ' '
//       )}
//     >
//       11
//     </button>
//   </li>
// </ul>

// </div>
