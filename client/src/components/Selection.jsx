import React from 'react';
import styles from '../assets/css/styles.css';

const Selection = props => (
  <div
    className={[styles.row, styles.rowPadding, styles.rowQuantitySize].join(
      ' '
    )}
  >
    <div
      className={[
        styles.boxCol,
        styles.rowQuantitySize,
        styles.rowPadding
      ].join(' ')}
    >
      <div
        className={[styles.productSizeSpacing, styles.productSizeDropdown].join(
          ' '
        )}
      >
        <div
          className={[
            styles.dropdownSize,
            styles.dropDownSizeOpen,
            styles.productSizeDropdown
          ].join(' ')}
        >
          <button
            title="Select Size"
            className={[
              styles.dropDownSizeOpen,
              styles.dropdownSelectLabel,
              styles.sizeDropdownButton
            ].join(' ')}
          >
            <span className={styles.dropdownSelectLabel}> Select Size </span>
            <svg
              className={[styles.arrowIcon, styles.arrowIcon2].join(' ')}
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

/* Quantity Size */

// <div className={styles.quantitySelector}>
// <div className={styles.spacingPositioning}>
//   <div
//     className={[
//       styles.quantityDropdown,
//       props.activeClass ? styles.dropdownIconOpen : null
//     ].join(' ')}
//   >
//     <button
//       type="button"
//       title="quantity"
//       className={styles.dropdownSelect}
//       onClick={() => {
//         console.log('clicked');
//         props.dropdown();
//         props.changeClass();
//       }}
//     >
//       <span className={styles.selectSize}> 1 </span>
//       <svg
//         className={[styles.dropdownIcon, styles.dropdownIcon2].join(
//           ' '
//         )}
//         viewBox="0 0 16 24"
//         width="50%"
//         height="50%"
//       >
//         <path
//           fill="none"
//           stroke="currentColor"
//           strokeMiterlimit="10"
//           strokeWidth="2"
//           d="M1.5 9L8 15.5 14.5 9"
//         />
//       </svg>
//     </button>
//     {props.clicked ? (
//       <div>
//         <ul className={styles.ul}>
//           <li className={styles.listItem}>
//             <button
//               type="button"
//               className={[
//                 styles.dropdownStyling,
//                 styles.dropdownStylingHover
//               ].join(' ')}
//             >
//               1{' '}
//             </button>
//           </li>
//           <li className={styles.listItem}>
//             <button
//               type="button"
//               className={[
//                 styles.dropdownStyling,
//                 styles.dropdownStylingHover
//               ].join(' ')}
//             >
//               2{' '}
//             </button>
//           </li>
//           <li className={styles.listItem}>
//             <button
//               type="button"
//               className={[
//                 styles.dropdownStyling,
//                 styles.dropdownStylingHover
//               ].join(' ')}
//             >
//               3{' '}
//             </button>
//           </li>
//           <li className={styles.listItem}>
//             <button
//               type="button"
//               className={[
//                 styles.dropdownStyling,
//                 styles.dropdownStylingHover
//               ].join(' ')}
//             >
//               4{' '}
//             </button>
//           </li>
//           <li className={styles.listItem}>
//             <button
//               type="button"
//               className={[
//                 styles.dropdownStyling,
//                 styles.dropdownStylingHover
//               ].join(' ')}
//             >
//               5{' '}
//             </button>
//           </li>
//           <li className={styles.listItem}>
//             <button
//               type="button"
//               className={[
//                 styles.dropdownStyling,
//                 styles.dropdownStylingHover
//               ].join(' ')}
//             >
//               6{' '}
//             </button>
//           </li>
//           <li className={styles.listItem}>
//             <button
//               type="button"
//               className={[
//                 styles.dropdownStyling,
//                 styles.dropdownStylingHover
//               ].join(' ')}
//             >
//               7
//             </button>
//           </li>
//           <li className={styles.listItem}>
//             <button
//               type="button"
//               className={[
//                 styles.dropdownStyling,
//                 styles.dropdownStylingHover
//               ].join(' ')}
//             >
//               8
//             </button>
//           </li>
//         </ul>
//       </div>
//     ) : null}
//   </div>
// </div>
// </div>

//     <div className={styles.divWrap}>
//       <div
//         className={[
//           styles.dropdownOptions,
//           styles.dropdownOptions2,
//           styles.dropdownOptions3
//         ].join(' ')}
//       />
//       <div className={styles.square}>
//         <ul className={[styles.ul, styles.square].join(' ')}>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="5"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               5
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="5.5"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               5.5
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="6"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               6
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="6.5"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               6.5
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="7"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               7
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="7.5"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               7.5
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="8"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               8
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="8.5"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               8.5
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="9"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               9
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="9.5"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               9.5
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="10"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               10
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="10.5"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               10.5
//             </button>
//           </li>
//           <li
//             className={[styles.li, styles.sizeItem].join(' ')}
//             title="11"
//           >
//             <button type="button" className={styles.sizeMenuElement}>
//               11
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>

{
  /* <div>
<ul className={styles.ulScroll}>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="1"
      onClick={props.updateQuantity}
    >
      1
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="2"
      onClick={props.updateQuantity}
    >
      2
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="3"
      onClick={props.updateQuantity}
    >
      3
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="4"
      onClick={props.updateQuantity}
    >
      4
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="5"
      onClick={props.updateQuantity}
    >
      5
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="6"
      onClick={props.updateQuantity}
    >
      6
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="7"
      onClick={props.updateQuantity}
    >
      7
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="8"
      onClick={props.updateQuantity}
    >
      8
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="9"
      onClick={props.updateQuantity}
    >
      9
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="10"
      onClick={props.updateQuantity}
    >
      10
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="11"
      onClick={props.updateQuantity}
    >
      11
    </button>
  </li>
  <li>
    <button
      type="button"
      className={[styles.dropdownSelect, styles.quantity].join(' ')}
      name="12"
      onClick={props.updateQuantity}
    >
      12
    </button>
  </li>
</ul>
</div> */
}
