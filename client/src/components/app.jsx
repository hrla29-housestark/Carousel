import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/styles.css';
import Checkout from './checkout.jsx';
import TopNavigation from './TopNavigation.jsx';
import SizeChart from './SizeChart.jsx';
import CarouselStyle from '../assets/css/carousel.css';
import Carousel from '../components/Carousel.jsx';
import axios from 'axios';

const modal = document.getElementById('modal');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      overflow: false,
      isModalOpen: false,
      product: '',
      productID: '',
      images: [],
      defaultColor: '',
      otherColor: '',
      miniImages: [],
      color: [],
      originalImages: true,
      originalImgs: [],
      secondImgs: []
    };
    this.renderModal = this.renderModal.bind(this);
    this.changeOverflow = this.changeOverflow.bind(this);
    this.getOne = this.getOne.bind(this);
    this.changeProductColor = this.changeProductColor.bind(this);
    this.revertBack = this.revertBack.bind(this);
  }

  componentDidMount() {
    this.getOne();
  }

  getOne() {
    axios
      .get(`/api/products/3`)
      .then(data => {
        this.setState({
          product: data.data,
          productID: data.data.productID,
          images: data.data.imageUrl,
          color: data.data.color2,
          miniImages: data.data.miniImages
        });
      })
      .catch(err => console.error(err));
  }

  changeProductColor() {
    const color = this.state.color;
    const imgs = this.state.images;

    this.setState({
      images: color,
      originalImgs: imgs,
      secondImgs: color
    });
  }

  revertBack() {
    this.setState({
      images: this.state.originalImgs
    });
  }

  renderModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  changeOverflow() {
    this.setState({
      overflow: !this.state.overflow
    });
  }

  render() {
    return (
      <div>
        <TopNavigation details={this.state.product} />
        <div>
          {this.state.isOpen
            ? ReactDOM.createPortal(
                <SizeChart
                  isOpen={this.renderModal}
                  changeOverflow={this.changeOverflow}
                />,
                modal
              )
            : null}
        </div>

        <div className={CarouselStyle.container}>
          <div className={CarouselStyle.carouselLeft}>
            <Carousel
              openModal={this.openModal}
              product={this.state.product}
              images={this.state.images}
            />
          </div>
          <div className={styles.checkoutPlacement}>
            <Checkout
              isOpen={this.renderModal}
              render={this.state.isOpen}
              closeModal={this.closeModal}
              product={this.state.product}
              miniImages={this.state.miniImages}
              getProduct={this.getOne}
              images={this.state.images}
              changeProductColor={this.changeProductColor}
              revert={this.revertBack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
