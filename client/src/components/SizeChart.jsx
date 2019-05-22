import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/sizeChart.css';

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
        <div className={styles.columnsTable}>
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
      </section>
    </div>
  </div>
);

export default SizeChart;

// <button> x </button>
