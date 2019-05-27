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
            {/* <div
              className={[styles.chartCarousel, styles.chartOverflow].join(' ')}
            > */}
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
                    width="115%"
                    height="100%"
                  />
                </div>
                <div className={styles.imgDescription}>
                  {' '}
                  <p>
                    Place a piece of paper on a hard floor with one end to the
                    wall. Stand on the piece of paper with the heel slightly
                    touching the wall.
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}

            <div className={styles.imgWrap} width="100%">
              <div className={styles.imgWrap2}>
                <header className={styles.header}>
                  {' '}
                  <span className={styles.textUppercase}>
                    Heel-Toe Measurement
                  </span>
                  <span className={styles.numberStyle}> 2 / 3</span>
                </header>
                <div className={styles.img1}>
                  <img
                    src="https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/FEC+Images/Measurement2.jpg"
                    width="115%"
                    height="100%"
                  />
                </div>
                <div className={styles.imgDescription}>
                  <p>
                    Mark the end of your longest toe with a pencil for both
                    feet. Tip: It's easier if you let someone help you with
                    this.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.imgWrap} width="100%">
              <div className={styles.imgWrap2}>
                <header className={styles.header}>
                  {' '}
                  <span className={styles.textUppercase}>
                    Heel-Toe Measurement
                  </span>
                  <span className={styles.numberStyle}> 3 / 3</span>
                </header>
                <div className={styles.img1}>
                  <img
                    src="https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/FEC+Images/Measurement3.jpg"
                    width="115%"
                    height="100%"
                  />
                </div>
                <div className={styles.imgDescription}>
                  <p>
                    Measure your marking from the wall (heel) to the longest toe
                    for both feet. Take the larger of the two foot length values
                    and compare it with our sizing chart, to define your adidas
                    shoe size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      {' '}
      <h5 className={styles.fitSection}> Getting the right fit</h5>
      <p className={styles.font}>
        {' '}
        For the best fit, measure your feet at the end of the day.
      </p>
    </section>
  </div>
);

export default Measure;
