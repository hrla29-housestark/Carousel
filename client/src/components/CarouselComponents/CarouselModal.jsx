import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../assets/css/CarouselModal.css';

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

class CarouselModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //className={styles.modelContainer}
  render() {
    return (
      <div 
      className={styles.carouselPositioning}
      >
        <button className={styles.closeModalBtn} />
        <div
          // className={[styles.carouselContainer, styles.centerImage].join(' ')}
          
        >
          <div> Test</div>
        </div>
      </div>
    );
  }
}

export default CarouselModal;

// constructor(props) {
//   super(props);
//   this.state = {
//     toggle: false
//   };
//   this.toggle = this.toggle.bind(this);
// }

// toggle(event) {
//   this.setState(prevState => ({
//     toggle: !prevState.toggle
//   }));
// }
// render() {
//   var modal = [];
//   modal.push(
//     <div className="modal" style={this.state.toggle ? display : hide}>
//       <div className="modal-content">
//         <h4>Modal Header</h4>
//       </div>
//       <div className="modal-footer">
//         <a className="btn-flat" onClick={this.toggle}>
//           Agree
//         </a>
//       </div>
//     </div>
//   );
//   return (
//     <div>
//       <a className="btn" onClick={this.toggle}>
//         {this.state.toggle ? 'Close modal' : 'Open modal'}
//       </a>
//       {modal}
//     </div>
//   );
// }
