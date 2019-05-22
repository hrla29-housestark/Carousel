import React from 'react';
import styles from '../assets/css/styles.css';
import Checkout from './checkout.jsx';
import TopNavigation from './TopNavigation.jsx';
import SizeChart from './SizeChart.jsx';
import sizeChartStyles from '../assets/css/sizeChart.css';

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
        <div className={sizeChartStyles.body}>
          {this.state.isOpen ? <SizeChart /> : null}
        </div>
        <div className={styles.checkoutPlacement}>
          <Checkout isOpen={this.renderModal} render={this.state.isOpen} />
        </div>
      </div>
    );
  }
}

export default App;
