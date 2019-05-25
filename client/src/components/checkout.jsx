import React from 'react';
import styles from '../assets/css/styles.css';
import Selection from './Selection.jsx';
import axios from 'axios';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      products: [],
      activeClass: false,
      quantity: 1,
      updateArrow: false
    };
    this.quantityDropdown = this.quantityDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.getAdidas = this.getAdidas.bind(this);
    this.changeClass = this.changeClass.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updateArrow = this.updateArrow.bind(this);
  }

  componentDidMount() {
    this.getAdidas();
  }
  getAdidas() {
    axios.get('/api/products').then(data =>
      this.setState(
        {
          products: data.data
        },
        () => console.log(data.data)
      )
    );
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
          <span className={styles.productType}> WOMEN'S ORIGINALS</span>
          <br />
          <span className={styles.productName}> NMD_R1 SHOES</span>
          <br />
          <span className={styles.productPrice}> $130 </span>
          <br />
          <br />
          <div className={styles.formatting}>
            <h5 className={styles.colorsInfo}> AVAILABLE COLORS </h5>
            <span className={styles.colors}>
              CORE BLACK / CORE BLACK / ORCHID TINT
            </span>
            <br />
            <br />
            <div>
              <img
                className={styles.circleImg}
                // src="https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoes_Blue_BD8030_01_standard.jpg"
              />
              &nbsp; &nbsp;
              <img
                className={styles.circleImg}
                // src="https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg"
              />
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
                {' '}
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
          />
        </div>
      </div>
    );
  }
}

export default Checkout;
