import React from 'react';
import styles from '../../assets/css/carousel.css';

class NavThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: 0,
      index: 0,
      bottomIndex: 40,
      disableUpBtn: false,
      disableBottomBtn: false,
      currentCount: 0,
      hideBottomArrow: false
    };
    this.slideUp = this.slideUp.bind(this);
    this.downArrow = this.downArrow.bind(this);
    this.toggleTopArrow = this.toggleTopArrow.bind(this);
    this.toggleDownArrow = this.toggleDownArrow.bind(this);
  }

  downArrow() {
    let newValue = this.state.transform - 66;
    if (this.state.currentCount === 2) {
      const newCount = 0;
      return this.setState(
        {
          disableBottomBtn: true,
          currentCount: newCount,
          index: 0
        },
        () => console.log(this.state.currentCount)
      );
    }
    const newCount = this.state.currentCount + 1;
    this.setState({
      currentCount: newCount
    });
    this.setState({
      transform: newValue
    });
  }

  slideUp() {
    const newValue = this.state.transform + 66;

    if (this.state.currentCount === 1) {
      this.setState(
        {
          disableUpBtn: true
        },
        () => console.log(this.state.currentCount)
      );
    }
    const newCount = this.state.currentCount + 1;
    this.setState({
      currentCount: newCount
    });
    this.setState({
      transform: newValue
    });
  }

  toggleTopArrow() {
    this.setState({
      index: 40
    });
  }

  toggleDownArrow() {
    this.setState({
      index: 0
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
          <div
            className={styles.navContainer}
            style={{ zIndex: this.state.index }}
          >
            <button
              className={styles.upArrowBtn}
              onClick={() => {
                this.slideUp();
              }}
              disabled={this.state.disableUpBtn ? 'disabled' : ''}
            >
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
              </svg>
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
            <button
              className={styles.bottomArrowBtn}
              onClick={() => {
                this.downArrow();
                this.toggleTopArrow();
              }}
              disabled={this.state.disableBottomBtn ? 'disabled' : ''}
            >
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
