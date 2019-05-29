import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/carousel.css';
import RightArrow from '../components/CarouselComponents/RightArrow.jsx';
import LeftArrow from '../components/CarouselComponents/LeftArrow.jsx';
import SlideImage from '../components/CarouselComponents/SlideImage.jsx';
import axios from 'axios';
import NavThumbnail from '../components/CarouselComponents/NavThumbnail.jsx';
import CarouselModal from '../components/CarouselComponents/CarouselModal.jsx';

const carouselModal = document.getElementById('modal-Carousel');

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: '',
      images: [],
      currentIndex: 0,
      currentVal: 0,
      isModalOpen: false
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.getAdidas = this.getAdidas.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.openModal = this.openModal.bind(this);
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
          images: data.data[0].imageUrl
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
      isModalOpen: true
    });
  }

  nextSlide() {
    const lastIndex = this.state.images.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;

    this.setState(
      {
        currentIndex: index
      },
      () => console.log(this.state.currentIndex)
    );
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
  render() {
    return (
      <div>
        <div>
          {this.state.isModalOpen
            ? ReactDOM.createPortal(
                <CarouselModal
                  images={this.state.images}
                  left={this.prevSlide}
                  right={this.nextSlide}
                  index={this.state.currentIndex}
                />,
                carouselModal
              )
            : null}
        </div>

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
          />
        </div>
        <div>
          <LeftArrow left={this.prevSlide} direction="left" />
        </div>

        <div>
          <RightArrow right={this.nextSlide} direction="right" />
        </div>
      </div>
    );
  }
}

export default Carousel;
