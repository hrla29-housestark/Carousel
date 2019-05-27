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
      images: [
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg'
      ],
      currentIndex: 0,
      currentVal: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.getAdidas = this.getAdidas.bind(this);
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
  render() {
    return (
      <div>
        <div
          className={styles.thumbnailContainer}
          width="50px"
          max-height="350px"
        >
          <NavThumbnail url={this.state.images[this.state.currentIndex]} />
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

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [
//         'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
//         'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
//         'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
//         'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
//         'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
//         'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
//         'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg',
//         'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg'
//       ],
//       index: 0,
//       translateVal: 0
//     };
//     this.nextSlide = this.nextSlide.bind(this);
//     // this.prevSlide = this.prevSlide.bind(this);
//     this.slideWidth = this.slideWidth.bind(this);
//   }

//   // prevSlide() {}

//   nextSlide() {
//     if (this.state.index === this.state.images.length - 1) {
//       return this.setState({
//         index: 0,
//         translateVal: 0
//       });
//     }

//     this.setState(
//       {
//         index: this.state.index + 1,
//         translateVal: this.state.translateVal + -this.slideWidth()
//       },
//       () =>
//         console.log(
//           `CCLICKEDD, ${this.state.index}, ${this.state.translateVal}`
//         )
//     );
//   }

//   slideWidth = () => {
//     return document.querySelector('.slideImage');
//   };

//   render() {
//     return (
//       <div className={styles.carouselLeft}>
//         <div className={[styles.containerWrap, styles.containerCol].join(' ')}>
//           <div className={styles.slider}>
//             <div
//               className={styles.sliderWrapper}
//               style={{
//                 transform: `translateX(${this.state.translateVal}px)`,
//                 transition: 'transform ease-out 0.45s'
//               }}
//             >
//               {this.state.images.map((image, index) => (
//                 <SlideImage key={index} image={image} />
//               ))}
//             </div>
//             <LeftArrow />

//             <RightArrow nextSlide={this.nextSlide} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;
