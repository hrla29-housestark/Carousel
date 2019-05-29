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
      currentCount: 0
    };
    // this.slideDown = this.slideDown.bind(this);
    this.slideUp = this.slideUp.bind(this);
    this.downArrow = this.downArrow.bind(this);
    // this.toggleTopArrow = this.toggleTopArrow.bind(this);
    // this.toggleDownArrow = this.toggleDownArrow.bind(this);
  }

  downArrow() {
    let newValue = this.state.transform - 66;
    // Hides Top Arrow
    // if (this.state.currentCount === 1) {
    //   this.setState({
    //     index: 0
    //   });
    // }
    if (this.state.currentCount === this.props.images.length) {
      this.setState({
        disableBottomBtn: true
      });
    }
    const newCount = this.state.currentCount + 1;
    console.log(newCount);
    this.setState(
      {
        currentCount: newCount
      },
      () => console.log('this is state', this.state.currentCount)
    );
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

  // toggleTopArrow() {
  //   this.setState({
  //     index: 40
  //   });
  // }

  // toggleDownArrow() {
  //   this.setState({
  //     index: 0
  //   });
  // }

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
              onClick={this.slideUp}
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
              onClick={this.downArrow}
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
