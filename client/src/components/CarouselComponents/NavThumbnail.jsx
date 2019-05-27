import React from 'react';
import styles from '../../assets/css/carousel.css';

class NavThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styling = {
      backgroundImage: `url(${this.props.url})`
      // transform: `translate(0px, -60px)`
    };
    return (
      <div>
        <div className={styles.navContainer}>
          <button className={styles.upArrowBtn}>
            <svg
              className={styles.upArrowSvg}
              viewBox="0 0 16 24"
              width="50%"
              height="50%"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M1.5 14.5L8 8l6.5 6.5"
              />
            </svg>{' '}
          </button>
        </div>

        <div className={styles.thumbnail}>
          <img
            style={styling}
            src={this.props.url}
            height="55px"
            width="58px"
          />
        </div>
        <div className={styles.thumbnail}>
          <img
            style={styling}
            src={this.props.url}
            height="55px"
            width="58px"
          />
        </div>
        <div className={styles.thumbnail}>
          <img
            style={styling}
            src={this.props.url}
            height="55px"
            width="58px"
          />
        </div>
        <div className={styles.thumbnail}>
          <img
            style={styling}
            src={this.props.url}
            height="55px"
            width="58px"
          />
        </div>
        <div className={styles.thumbnail}>
          <img
            style={styling}
            src={this.props.url}
            height="55px"
            width="58px"
          />
        </div>
        <div className={styles.thumbnail}>
          <img
            style={styling}
            src={this.props.url}
            height="55px"
            width="58px"
          />
        </div>
        <div className={styles.bottomArrow}>
          <button className={styles.bottomArrowBtn}>
            <svg
              className={styles.bottomArrowSvg}
              viewBox="0 0 16 24"
              width="50%"
              height="50%"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M1.5 9L8 15.5 14.5 9"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default NavThumbnail;
