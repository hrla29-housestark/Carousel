import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/carousel.css';
import RightArrow from '../components/CarouselComponents/RightArrow.jsx';
import LeftArrow from '../components/CarouselComponents/LeftArrow.jsx';
import SlideImage from '../components/CarouselComponents/SlideImage.jsx';
import axios from 'axios';
import NavThumbnail from '../components/CarouselComponents/NavThumbnail.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: '',
      images: [],
      currentIndex: 0,
      currentVal: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.getAdidas = this.getAdidas.bind(this);
    this.changeImage = this.changeImage.bind(this);
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
        <div
          className={styles.thumbnailContainer}
          width="50px"
          max-height="350px"
        >
          <NavThumbnail
            images={this.state.images}
            changeImage={this.changeImage}
            // nextSlide={this.nextSlide}
            // prevSlide={this.prevSlide}
          />
        </div>

        <div className={styles.row}>
          <SlideImage url={this.state.images[this.state.currentIndex]} />
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
