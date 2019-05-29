import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/carousel.css';
import RightArrow from '../components/CarouselComponents/RightArrow.jsx';
import LeftArrow from '../components/CarouselComponents/LeftArrow.jsx';
import SlideImage from '../components/CarouselComponents/SlideImage.jsx';
import axios from 'axios';
import NavThumbnail from '../components/CarouselComponents/NavThumbnail.jsx';
import CarouselModal from '../components/CarouselComponents/CarouselModal.jsx';
import ZoomModal from '../components/CarouselComponents/ZoomModal.jsx';
import Skylight from 'react-skylight';

// const carouselModal = document.getElementById('modal-Carousel');

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
      zoomImage: '',
      enableZoom: false
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.getAdidas = this.getAdidas.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.openModal = this.openModal.bind(this);
    this.enter = this.enter.bind(this);
    this.exit = this.exit.bind(this);
    this.follow = this.follow.bind(this);
    this.openSkylight = this.openSkylight.bind(this);
  }

  componentDidMount() {
    this.getAdidas();
  }

  getAdidas() {
    axios
      .get('/api/products')
      .then(data =>
        this.setState({
          products: data.data,
          product: data.data[0],
          images: data.data[0].imageUrl,
          productID: data.data[0].productID
        })
      )
      .catch(err => console.log('failed to retrieve data'));
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
    const lastIndex = this.state.images.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    });
  }
  prevSlide() {
    const lastIndex = this.state.images.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;

    this.setState(
      {
        currentIndex: index
      },
      () => console.log(this.state.currentIndex)
    );
  }

  changeImage(idx) {
    this.setState({
      currentIndex: idx
    });
  }

  enter(e) {
    let image = document.getElementById(e.target.id);
    image.style.transform = 'scale(2.4)';
  }

  exit(e) {
    let image = document.getElementById(e.target.id);
    image.style.transform = 'scale(1)';
  }

  follow(e) {
    let image = document.getElementById(e.target.id);
    image.style.transformOrigin = `${e.pageX - 110}px ${e.pageY}px`;
  }

  openSkylight() {
    this.modal.show();
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
      position: 'fixed'
    };

    const closeButtonStyle = {
      display: 'flex',
      cursor: 'pointer',
      position: 'absolute',
      fontSize: '45px',
      fontWeight: '100',
      right: '10px',
      top: '-14px',
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
      zIndex: '200'
    };
    return (
      <div>
        <Skylight
          hideOnOverlayClicked
          ref={ref => (this.modal = ref)}
          dialogStyles={zoomModalStyle}
          closeButtonStyle={closeButtonStyle}
        >
          <LeftArrow left={this.prevSlide} />

          <ZoomModal
            images={this.state.images}
            left={this.prevSlide}
            right={this.nextSlide}
            index={this.state.currentIndex}
            url={this.state.images[this.state.currentIndex]}
            openModal={this.openModal}
            dialogStyle={zoomModalStyle}
          />

          <RightArrow right={this.nextSlide} />
        </Skylight>

        <div
          className={styles.thumbnailContainer}
          width="50px"
          max-height="350px"
        >
          <NavThumbnail
            images={this.state.images}
            changeImage={this.changeImage}
          />
        </div>

        <div className={styles.row}>
          <SlideImage
            url={this.state.images[this.state.currentIndex]}
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
