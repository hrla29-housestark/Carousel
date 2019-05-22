import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/sizeChart.css';

// const app = document.getElementById('app');
// const modal = document.getElementById('modal');

// class SizeChart extends React.Component {
//   constructor() {
//     super();
//     // this.el = document.createElement('div');
//   }
//   // componentDidMount() {
//   //   modal.appendChild(this.el);
//   // }

//   // componentWillUnmount() {
//   //   modal.removeChild(this.el);
//   // }
//   render() {

//   }
// }

const SizeChart = props => (
  <div className={styles.sizeChartBody}>
    <h5> Size Chart</h5>
    <div>
      <section>
        <header>
          <h4>Men's and women's adidas footwear sizing</h4>
          <h5>FIND YOUR SIZE</h5>
          <a>Do you know how to measure?</a>
        </header>
        <div className={styles.tableHorizontal}>
          <div className={styles.tableContainer}>
            <div className={styles.tableColumns}>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span>Heel-toe measurement</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span>US - Men's</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span>US - Women's</span>
                    </td>
                  </tr>

                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span>UK</span>
                    </td>
                  </tr>

                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span>EU</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={[styles.td, styles.tdBorder].join(' ')}>
                      <span>JP</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Div for mesaurements */}
          <div>
            <table>
              <thead />
              <tbody>
                <tr>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8.7"</span>
                  </td>
                  <td colSpan="1">
                    <span className={styles.tableContent}>8.9"</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default SizeChart;

///create portal

// return ReactDOM.createPortal(
//   <div className={styles.sizeChartBody} ref="content">
//     <h5> Size Chart</h5>
//     <div>
//       <section>
//         <header>
//           <h4>Men's and women's adidas footwear sizing</h4>
//           <h5>FIND YOUR SIZE</h5>
//           <a>Do you know how to measure?</a>
//         </header>
//         <div className={styles.columnsTable}>
//           <table className={styles.table}>
//             <tbody>
//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>Heel-toe measurement</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>US - Men's</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>US - Women's</span>
//                 </td>
//               </tr>

//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>UK</span>
//                 </td>
//               </tr>

//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>EU</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className={[styles.td, styles.tdBorder].join(' ')}>
//                   <span>JP</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   </div>,
//   this.el
// );
