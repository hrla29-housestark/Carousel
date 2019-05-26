import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/styles.css';
import Checkout from './checkout.jsx';
import TopNavigation from './TopNavigation.jsx';
import SizeChart from './SizeChart.jsx';
import sizeChartStyles from '../assets/css/sizeChart.css';
import CarouselStyle from '../assets/css/carousel.css';
import Carousel from '../components/Carousel.jsx';

const modal = document.getElementById('modal');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.renderModal = this.renderModal.bind(this);
  }

  renderModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <TopNavigation />
        <div>
          <div
            className={[sizeChartStyles.content, sizeChartStyles.slide].join(
              ' '
            )}
          >
            {this.state.isOpen
              ? ReactDOM.createPortal(
                  <SizeChart isOpen={this.renderModal} />,
                  modal
                )
              : null}
          </div>
          <div
            className={[
              CarouselStyle.container,
              CarouselStyle.secondContainer
            ].join(' ')}
          >
            <Carousel />
            <div className={styles.checkoutPlacement}>
              <Checkout
                isOpen={this.renderModal}
                render={this.state.isOpen}
                closeModal={this.loseModal}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
