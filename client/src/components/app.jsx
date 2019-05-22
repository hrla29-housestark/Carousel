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
    // this.closeModal = this.closeModal.bind(this);
  }
  renderModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // closeModel() {
  //   this.setState({
  //     isOpen: false
  //   });
  // }
  render() {
    return (
      <div>
        <TopNavigation />
        <div style={style}>{this.state.isOpen ? <SizeChart /> : null}</div>
        <div className={styles.checkoutPlacement}>
          <Checkout isOpen={this.renderModal} render={this.state.isOpen} />
        </div>
      </div>
    );
  }
}

export default App;

////////////// STYLING FOR MODAL //////////////////////
// const padding = 90;
// let height = this.state.contentHeight + padding;
// let heightPx = height + 'px';
// let heightOffset = height / 2;
// let offsetPx = heightOffset + 'px';

// const style = {
//   content: {
//     border: '0',
//     borderRadius: '4px',
//     bottom: 'auto',
//     height: heightPx, // set height
//     left: '50%',
//     padding: '2rem',
//     position: 'fixed',
//     right: 'auto',
//     top: '50%', // start from center
//     transform: 'translate(-50%,-' + offsetPx + ')', // adjust top "up" based on height
//     width: '40%',
//     maxWidth: '40rem'
//   }
// };
