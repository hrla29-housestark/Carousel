import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/styles.css';
import Checkout from './checkout.jsx';
import TopNavigation from './TopNavigation.jsx';
import SizeChart from './SizeChart.jsx';
import sizeChartStyles from '../assets/css/sizeChart.css';
import CarouselStyle from '../assets/css/carousel.css';
import Carousel from '../components/Carousel.jsx';
import CarouselModal from '../components/CarouselComponents/CarouselModal.jsx';

const modal = document.getElementById('modal');
const carouselModal = document.getElementById('modal-Carousel');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      overflow: false,
      isModalOpen: false
    };
    this.renderModal = this.renderModal.bind(this);
    this.changeOverflow = this.changeOverflow.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true
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
        <TopNavigation />
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

        <div>
          {this.state.isModalOpen
            ? ReactDOM.createPortal(<CarouselModal />, carouselModal)
            : null}
        </div>

        <div className={CarouselStyle.container}>
          <div className={CarouselStyle.carouselLeft}>
            <Carousel openModal={this.openModal} />
          </div>
          <div className={styles.checkoutPlacement}>
            <Checkout
              isOpen={this.renderModal}
              render={this.state.isOpen}
              closeModal={this.loseModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
