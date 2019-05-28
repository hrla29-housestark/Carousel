import React from 'react';
import styles from '../../assets/css/carousel.css';

class NavThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: 0
    };
    this.slideDown = this.slideDown.bind(this);
    this.slideUp = this.slideUp.bind(this);
  }

  slideDown() {
    const newValue = this.state.transform - 70;
    this.setState({
      transform: newValue
    });
  }

  slideUp() {
    const newValue = this.state.transform + 70;
    this.setState({
      transform: newValue
    });
  }

  render() {
    const { transform } = this.state;
    const navStyling = {
      transform: `translate(0px, ${transform}px)`
    };
    return (
      <div className={styles.thumbnailContainer2}>
        <div
          className={styles.thumbnailContainer}
          width="50px"
          max-height="350px"
        >
          <div className={styles.navContainer}>
            <button className={styles.upArrowBtn} onClick={this.slideUp}>
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

          {this.props.images.map((image, index) => (
            <div
              className={styles.thumbnail}
              key={index}
              height="50px"
              width="50px"
              style={navStyling}
            >
              <img
                src={image}
                height="48px"
                width="48px"
                onClick={() => this.props.changeImage(index)}
              />
            </div>
          ))}

          <div className={styles.bottomArrow}>
            <button className={styles.bottomArrowBtn} onClick={this.slideDown}>
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
      </div>
    );
  }
}

export default NavThumbnail;
