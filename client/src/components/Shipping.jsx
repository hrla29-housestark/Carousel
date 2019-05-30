import React, { Component } from 'react';
import style from '../assets/css/shipping.css';

const Shipping = props => {
  return (
    <div>
      <button
        className={style.button}
        onClick={() => props.handleFreeShipping()}
      />
      <div className={style.fadeIn} onClick={() => props.handleFreeShipping()}>
        <button className={style.fadeInCross}>
          <svg viewBox="0 0 18 24" width="100%" height="100%">
            <path
              d="M17 4l-8 8 8 8M1 4l8 8-8 8"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
        </button>
        <div className={style.model}>
          <h5 className={style.h5Header}>FREE SHIPPING AND FREE RETURNS</h5>
          <div>
            <div>
              <p className={style.body}>FREE SHIPPING, FREE RETURNS</p>
              <p className={style.body}>
                This limited time free shipping offer is good for free shipping,
                discount applied at checkout. See delivery method in checkout
                for estimated delivery date. Offer does not apply to adidas gift
                cards and mi adidas customization. Valid on domestic U.S. orders
                only. adidas reserves the right to change or end promotions at
                any time.
              </p>
              <p className={style.body}>
                If you are not completely satisfied with your adidas.com
                purchase, for any reason, we will offer you a free return within
                30 days of purchase. *Some restrictions apply.
              </p>
              <p className={style.body}>
                *Because personalized products are made just for you, they are
                not returnable.
              </p>
              <p className={style.body}>
                *Hype products such as Yeezy should be returned via the
                <a>online returns portal</a> within 7 days of the delivery date.
                In the process of ordering these hype products the 7 day returns
                window will be communicated on the product page.
              </p>
              <p className={style.body}>
                Please note to utilize free returns on adidas.com, the package
                must be sent from physically within the United States. Please
                note that the return label is not valid through USPS for APO/FPO
                returns.
              </p>
              <p className={style.body}>
                Check out our
                <a>Return Policy</a> for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
