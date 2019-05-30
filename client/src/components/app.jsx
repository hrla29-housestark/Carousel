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
      products: [],
      product: '',
      productID: '',
      images: [],
      defaultColor: '',
      otherColor: '',
      miniImages: [],
      color: []
    };
    this.renderModal = this.renderModal.bind(this);
    this.changeOverflow = this.changeOverflow.bind(this);
    this.getAdidaProducts = this.getAdidaProducts.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  componentDidMount() {
    this.getAdidaProducts();
  }

  getAdidaProducts() {
    axios
      .get('/api/products')
      .then(data =>
        this.setState({
          products: data.data,
          product: data.data[0],
          images: data.data[0].imageUrl,
          productID: data.data[0].productID,
          miniImages: data.data[0].miniImages,
          defaultColor: data.data[0].defaultColor,
          otherColor: data.data[0].otherColor
        })
      )
      .catch(err => console.error(err));
  }

  getOne() {
    axios
      .get(`/api/products/2`)
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
              defaultColor={this.state.defaultColor}
              otherColor={this.state.otherColor}
              getProduct={this.getOne}
              images={this.state.images}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
