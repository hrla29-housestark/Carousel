import React from 'react';
import styles from '../assets/css/styles.css';
import Selection from './Selection.jsx';
import axios from 'axios';
import AddToBag from '../components/AddToBag.jsx';
import Shipping from '../../src/components/Shipping.jsx';
import style from '../assets/css/shipping.css';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      products: [],
      activeClass: false,
      quantity: 1,
      updateArrow: false,
      size: 'Select Size',
      sizeClicked: false,
      sizeArrowUpdate: false,
      heart: false,
      addToBagBtn: false,
      showButtons: false,
      hideHeartBtn: false,
      productClicked: true,
      render: false,
      shipping: false,
      changeColor: true
    };
    this.quantityDropdown = this.quantityDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.changeClass = this.changeClass.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updateArrow = this.updateArrow.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.sizeUpdateArrow = this.sizeUpdateArrow.bind(this);
    this.sizeDropdown = this.sizeDropdown.bind(this);
    this.closeSizeDropdown = this.closeSizeDropdown.bind(this);
    this.changeHeart = this.changeHeart.bind(this);
    this.btnAddToBag = this.btnAddToBag.bind(this);
    this.hideButtons = this.hideButtons.bind(this);
    this.hideHeartBtnFunc = this.hideHeartBtnFunc.bind(this);
    this.productClicked = this.productClicked.bind(this);
    this.switchProduct = this.switchProduct.bind(this);
    this.freeShipping = this.freeShipping.bind(this);
    this.switchProductBack = this.switchProductBack.bind(this);
  }

  quantityDropdown() {
    this.setState(
      {
        clicked: true
      },
      () => document.addEventListener('click', this.closeDropdown)
    );
  }

  closeDropdown() {
    this.setState({ clicked: false }, () => {
      document.removeEventListener('click', this.closeDropdown);
    });
    this.setState({
      updateArrow: false
    });
  }

  changeClass() {
    this.setState({
      activeClass: !this.state.activeClass
    });
  }

  updateQuantity(e) {
    this.setState({
      quantity: e.target.name
    });
  }

  updateArrow() {
    this.setState({
      updateArrow: !this.state.updateArrow
    });
  }

  updateSize(e) {
    this.setState({
      size: e.target.name
    });
  }

  sizeUpdateArrow() {
    this.setState({
      sizeArrowUpdate: !this.state.sizeArrowUpdate
    });
  }

  sizeDropdown() {
    this.setState(
      {
        sizeClicked: true
      },
      () => document.addEventListener('click', this.closeSizeDropdown)
    );
  }

  closeSizeDropdown() {
    this.setState({ sizeClicked: false }, () => {
      document.removeEventListener('click', this.closeSizeDropdown);
    });
    this.setState({
      sizeArrowUpdate: false
    });
  }

  changeHeart() {
    this.setState({
      heart: !this.state.heart
    });
  }

  btnAddToBag() {
    this.setState({
      addToBagBtn: !this.state.addToBagBtn
    });
  }

  hideButtons() {
    this.setState({
      showButtons: !this.state.showButtons
    });
  }
  hideHeartBtnFunc() {
    this.setState({
      hideHeartBtn: !this.state.hideHeartBtn
    });
  }

  productClicked() {
    this.setState({
      productClicked: !this.state.productClicked
    });
  }

  switchProduct() {
    this.productClicked();
    this.setState({
      render: !this.state.render,
      changeColor: !this.state.changeColor
    });
    this.props.changeProductColor();
  }

  switchProductBack() {
    this.productClicked();
    this.setState({
      render: !this.state.render,
      changeColor: !this.state.changeColor
    });
    this.props.revert();
  }

  freeShipping() {
    this.setState({
      shipping: !this.state.shipping
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div className={styles.stars}>
              <div className={styles.emptyStars} />
              <div className={styles.fullStars} />
            </div>
            &nbsp;
            <span className={styles.textHover}>
              <span className={styles.reviews}> Read all 43 reviews </span>
            </span>
          </div>
          <br />
          <span className={styles.productType}>
            {this.props.product.productType}
          </span>
          <br />
          <span className={styles.productName}>
            {this.props.product.productName}
          </span>
          <br />
          <span className={styles.productPrice}>
            {`$${this.props.product.price}`}
          </span>
          <br />
          <br />
          <div className={styles.formatting}>
            <h5 className={styles.colorsInfo}> AVAILABLE COLORS </h5>
            <span className={styles.colors}>
              {this.state.changeColor
                ? this.props.product.defaultColor
                : this.props.product.otherColor}
            </span>
            <br />
            <br />
            <div className={styles.outerDiv1}>
              <div className={[styles.outerDiv2, styles.parent].join(' ')}>
                {this.state.productClicked ? (
                  <div className={styles.checkmarkIcon}>
                    <svg
                      viewBox="0 0 19 19"
                      width="50%"
                      height="50%"
                      className={styles.checkmark}
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        d="M2.5 10.5l4 4 10-10"
                      />
                    </svg>
                  </div>
                ) : null}
                <img
                  className={[styles.circleImg, styles.child].join(' ')}
                  src={this.props.miniImages[0]}
                  onClick={this.switchProductBack}
                />
              </div>

              <div className={[styles.outerDiv2, styles.parent].join(' ')}>
                {this.state.render ? (
                  <div className={styles.checkmarkIcon}>
                    <svg
                      viewBox="0 0 19 19"
                      width="50%"
                      height="50%"
                      className={styles.checkmark}
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        d="M2.5 10.5l4 4 10-10"
                      />
                    </svg>
                  </div>
                ) : null}
                <img
                  className={[styles.circleImg, styles.child].join(' ')}
                  src={this.props.miniImages[1]}
                  onClick={this.switchProduct}
                />
              </div>
            </div>
          </div>
          <div className={styles.sizeChartPadding}>
            <span className={styles.sizeChart}>
              <svg width="20px" height="15px">
                <g fill="none" stroke="currentColor">
                  <path d="M.5 6.5h18v6H.5z" />
                  <path
                    strokeLinecap="square"
                    d="M3.5 12.5v-3m3 3v-2m3 2v-3m6 3v-3m-3 3v-2"
                  />
                </g>
              </svg>
              &nbsp;
              <span className={styles.size} onClick={() => this.props.isOpen()}>
                Size Chart
              </span>
            </span>
          </div>

          <Selection
            dropdown={this.quantityDropdown}
            clicked={this.state.clicked}
            changeClass={this.changeClass}
            activeClass={this.state.activeClass}
            updateQuantity={this.updateQuantity}
            quantity={this.state.quantity}
            updateArrow={this.updateArrow}
            arrowState={this.state.updateArrow}
            size={this.state.size}
            updateSize={this.updateSize}
            sizeClicked={this.state.sizeClicked}
            sizeUpdateArrow={this.sizeUpdateArrow}
            sizeArrowState={this.state.sizeArrowUpdate}
            sizeDropdown={this.sizeDropdown}
            sizeUpdateArrow={this.sizeUpdateArrow}
            hideButton={this.hideButtons}
            hideHeartButton={this.hideHeartBtnFunc}
          />
        </div>

        <AddToBag
          heart={this.state.heart}
          changeHeart={this.changeHeart}
          addToBagState={this.state.addToBagBtn}
          addToBagFunction={this.btnAddToBag}
          hideBtnState={this.state.showButtons}
          hideHeartBtnState={this.state.hideHeartBtn}
        />
        <div className={style.bottomFirst}>
          <svg
            className={style.carIcon}
            viewBox="0 0 19 19"
            width="100%"
            height="100%"
          >
            <g fill="none" stroke="currentColor" strokeMiterlimit="10">
              <path d="M13.42 13.5H9.5" />
              <path
                strokeLinecap="square"
                d="M4.5 5.5h10l4 3v5h-2M6.5 13.5h-2m0-6h-4"
              />
              <circle cx="8" cy="13" r="1.5" />
              <circle cx="15" cy="13" r="1.5" />
              <path strokeLinecap="square" d="M1.5 9.5h3m-2 2h2" />
            </g>
          </svg>
          <div
            id="itemName"
            className={style.itemName}
            onClick={() => this.freeShipping()}
          >
            FREE SHIPPING AND FREE RETURNS
          </div>
        </div>

        {this.state.shipping ? (
          <Shipping handleFreeShipping={this.freeShipping} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Checkout;
