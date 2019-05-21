import React from 'react';
import styles from '../assets/css/styles.css';
import Checkout from './checkout.jsx';
import TopNavigation from './TopNavigation.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TopNavigation />
        <div className={styles.checkoutPlacement}>
          <Checkout />
        </div>
      </div>
    );
  }
}

export default App;
