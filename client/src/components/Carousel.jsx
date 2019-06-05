import React from 'react';
import styles from '../assets/css/carousel.css';
import RightArrow from '../components/CarouselComponents/RightArrow.jsx';
import LeftArrow from '../components/CarouselComponents/LeftArrow.jsx';
import SlideImage from '../components/CarouselComponents/SlideImage.jsx';
import axios from 'axios';
import NavThumbnail from '../components/CarouselComponents/NavThumbnail.jsx';
// import CarouselModal from '../components/CarouselComponents/CarouselModal.jsx';
import ZoomModal from '../components/CarouselComponents/ZoomModal.jsx';
import Skylight from 'react-skylight';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: '',
      productID: '',
      images: [],
      currentIndex: 0,
      currentVal: 0,
      isModalOpen: false,
      enableZoom: false,
      x: null,
      y: null,
      count: 0,
      li0: true,
      li1: false,
      li2: false,
      li3: false,
      li4: false,
      li5: false,
      li6: false,
      currentIdx: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openSkylight = this.openSkylight.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.zoomFeature = this.zoomFeature.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
    this.changeSlideBar = this.changeSlideBar.bind(this);
    this.handleSlideRight = this.handleSlideRight.bind(this);
    this.handleSlideLeft = this.handleSlideLeft.bind(this);
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true,
      enableZoom: true
    });
  }

  nextSlide() {
    const lastIndex = this.props.images.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    });
  }
  prevSlide() {
    const lastIndex = this.props.images.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;

    this.setState(
      {
        currentIndex: index
      },
      () => console.log(this.props.images)
    );
  }

  changeImage(idx) {
    this.setState({
      currentIndex: idx
    });
  }

  zoomFeature(e) {
    e.target.addEventListener('mousemove', this.updatePosition);
    e.target.style.transform = 'scale(2)';
    this.setState(
      {
        enableZoom: true
      },
      () => console.log('TRUUEE', this.state.enableZoom)
    );
  }

  zoomOut(e) {
    e.target.removeEventListener('mousemove', this.updatePosition);
    e.target.style.transform = 'none';
    this.setState(
      {
        enableZoom: false
      },
      () => console.log('FALSE', this.state.enableZoom)
    );
  }

  updatePosition(e) {
    this.setState({
      x: e.offsetX,
      y: e.offsetY
    });
  }

  toggleZoom(e) {
    if (this.state.enableZoom === false) {
      this.zoomFeature(e);
    } else {
      this.zoomOut(e);
    }
  }

  openSkylight() {
    this.modal.show();
  }

  changeSlideBar() {
    let counter = this.state.count + 1;
    this.setState(
      {
        count: counter
      },
      () => console.log(this.state.count)
    );
  }

  handleSlideRight(e) {
    e.preventDefault();
    let target = 'li' + (this.state.currentIdx + 1);
    this.setState({
      currentIdx: this.state.currentIdx + 1,
      li0: [false, 0],
      li1: [false, 1],
      li2: [false, 2],
      li3: [false, 3],
      li4: [false, 3],
      li5: [false, 3],
      li6: [false, 3],
      [target]: [true, this.state.currentIdx + 1]
    });
  }

  handleSlideLeft(e) {
    e.preventDefault();
    let target = 'li' + (this.state.currentIdx - 1);
    this.setState({
      currentIdx: this.state.currentIdx - 1,
      li0: [false, 0],
      li1: [false, 1],
      li2: [false, 2],
      li3: [false, 3],
      li4: [false, 3],
      li5: [false, 3],
      li6: [false, 3],
      [target]: [true, this.state.currentIdx - 1]
    });
  }
  render() {
    const zoomModalStyle = {
      backgroundColor: '#ebedee',
      width: '100%',
      left: '0',
      top: '10%',
      boxSizing: 'border-box',
      maxHeight: '80vh',
      margin: '0',
      padding: '0',
      marginLeft: '-25%',
      marginTop: '-200px',
      position: 'fixed',
      overflow: 'hidden'
    };

    const closeButtonStyle = {
      display: 'flex',
      cursor: 'pointer',
      position: 'absolute',
      fontSize: '45px',
      fontWeight: '100',
      right: '10px',
      top: '10px',
      width: '34px',
      height: '34px',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #000',
      paddingBottom: '6px',
      boxSizing: 'border-box',
      fontFamily: 'system-ui',
      innerText: '&times',
      alignText: 'center',
      backgroundColor: '#fff',
      zIndex: '300'
    };
    return (
      <div>
        <Skylight
          hideOnOverlayClicked
          ref={ref => (this.modal = ref)}
          dialogStyles={zoomModalStyle}
          closeButtonStyle={closeButtonStyle}
        >
          <LeftArrow
            left={this.prevSlide}
            changeSlideBar={this.changeSlideBar}
            leftSlideBar={this.handleSlideLeft}
          />

          <ZoomModal
            images={this.props.images}
            left={this.prevSlide}
            right={this.nextSlide}
            index={this.state.currentIndex}
            url={this.props.images[this.state.currentIndex]}
            openModal={this.openModal}
            dialogStyle={zoomModalStyle}
            toggleZoom={this.toggleZoom}
            x={this.state.x}
            y={this.state.y}
            color={this.props.diffImages}
            changeSlideBar={this.changeSlideBar}
            li0={this.state.li0}
            li1={this.state.li1}
            li2={this.state.li2}
            li3={this.state.li3}
            li4={this.state.li4}
            li5={this.state.li5}
            li6={this.state.li6}
          />

          <RightArrow
            right={this.nextSlide}
            changeSlideBar={this.changeSlideBar}
            rightSlideBar={this.handleSlideRight}
          />
        </Skylight>
        <div
          className={styles.thumbnailContainer}
          width="50px"
          max-height="350px"
        >
          <NavThumbnail
            images={this.props.images}
            changeImage={this.changeImage}
          />
        </div>

        <div className={styles.row}>
          <SlideImage
            url={this.props.images[this.state.currentIndex]}
            openModal={this.openModal}
            enableZoom={this.state.enableZoom}
            openModal={this.openSkylight}
          />
        </div>
        <div>
          <LeftArrow left={this.prevSlide} />
        </div>

        <div>
          <RightArrow right={this.nextSlide} />
        </div>
      </div>
    );
  }
}

export default Carousel;
