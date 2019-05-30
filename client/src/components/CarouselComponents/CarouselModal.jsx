import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../assets/css/CarouselModal.css';
import SlideImage from '../../components/CarouselComponents/SlideImage.jsx';
import RightArrow from '../../components/CarouselComponents/RightArrow';
import LeftArrow from '../../components/CarouselComponents/LeftArrow';
import ZoomModal from '../../components/CarouselComponents/ZoomModal.jsx';

class CarouselModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.carouselPositioning}>
        <button className={styles.closeModalBtn} />
        <div className={styles.leftArrow}>
          <LeftArrow left={this.props.left} />
        </div>
        <div className={styles.rightArrow}>
          <RightArrow right={this.props.right} />
        </div>
        {/* <div className={styles.slideBar}>
          <ul className={styles.bar}>
            <li className={styles.listBar}>
              {' '}
              <span className={styles.listBarDot}> </span>
            </li>
            <li className={styles.listBar}>
              {' '}
              <span className={styles.listBarDot}> </span>
            </li>
            <li className={styles.listBar}>
              {' '}
              <span className={styles.listBarDot}> </span>
            </li>
            <li className={styles.listBar}>
              {' '}
              <span className={styles.listBarDot}> </span>
            </li>
            <li className={styles.listBar}>
              {' '}
              <span className={styles.listBarDot}> </span>
            </li>
            <li className={styles.listBar}>
              {' '}
              <span className={styles.listBarDot}> </span>
            </li>
            <li className={styles.listBar}>
              {' '}
              <span className={styles.listBarDot}> </span>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default CarouselModal;
