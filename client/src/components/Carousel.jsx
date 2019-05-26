import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/carousel.css';
import RightArrow from '../components/CarouselComponents/RightArrow.jsx';
import LeftArrow from '../components/CarouselComponents/LeftArrow.jsx';
import SlideImage from '../components/CarouselComponents/SlideImage.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.carouselLeft}>
        <div className={[styles.containerWrap, styles.containerCol].join(' ')}>
          <div className={styles.slider}>
            <SlideImage />

            <LeftArrow />

            {/* <RightArrow /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
