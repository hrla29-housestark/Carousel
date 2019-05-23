import React from 'react';
import styles from '../assets/css/sizeChart.css';

const Measure = props => (
  <div>
    <section className={styles.sectionDivider}>
      <div>
        <div className={styles.divider} />
      </div>
    </section>
    <section className={styles.sectionDivider}>
      <h5 className={styles.sizeChartText}>IN BETWEEN SIZES?</h5>
      <span className={styles.detailPrint}>
        For tight fit, go one size down.
      </span>

      <div className={styles.detailPrint}>For loose fit, go one size up.</div>
    </section>

    <h5 className={styles.sizeChartText}>NOT THE RIGHT SIZE OR COLOR?</h5>

    <span className={styles.detailPrint}> No problem, return for free. </span>
    <section className={styles.sectionDivider}>
      <div>
        <div className={styles.divider} />
      </div>
    </section>
    <section>
      <div>
        <h5 className={styles.text}> HOW TO MEASURE</h5>
        <div className={styles.divSlider}>
          <div className={styles.divContainer}>
            <div
              className={[styles.chartCarousel, styles.chartOverflow].join(' ')}
            >
              {' '}
              Carousel
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Measure;
