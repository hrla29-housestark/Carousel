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
              <div className={styles.imgWrap} width="100%">
                <div className={styles.imgWrap2}>
                  <header className={styles.header}>
                    {' '}
                    <span className={styles.textUppercase}>
                      {' '}
                      Heel-Toe Measurement
                    </span>
                    <span className={styles.numberStyle}> 1 / 3</span>
                  </header>
                  <div className={styles.img1}>
                    <img
                      src="https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/FEC+Images/Measurement1.jpg"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Measure;
