import React from 'react';
import styles from '../../../src/assets/css/CarouselModal.css';

const ZoomModal = props => {
  const styling = {
    backgroundImage: `url(${props.url})`,
    overflow: 'hidden'
  };
  const containerStyling = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <div
      max-width="100%"
      overflow="hidden"
      height="100%"
      style={containerStyling}
    >
      <img
        src={props.url}
        id="zoomPic"
        style={styling}
        height="auto"
        width="550px"
        onClick={props.toggleZoom}
        style={{ transformOrigin: `${props.x}px ${props.y}px` }}
      />

      <div className={styles.slideBar}>
        <ul className={styles.bar}>
          <li
            id="li0"
            className={styles.listBar}
            onClick={e => props.changeSlideBar(e)}
            // className={
            //   props.li0[0] === true
            //     ? styles.listBarDotDefault
            //     : styles.listBarDotSelected
            // }
          >
            <span
              // id="li0"
              onClick={e => props.changeSlideBar(e)}
              className={
                props.li0[0] === true
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
            />
          </li>
          <li className={styles.listBar} onClick={e => props.changeSlideBar(e)}>
            <span
              className={
                props.li1[0] === true
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              id="li1"
            />
          </li>
          <li className={styles.listBar} onClick={e => props.changeSlideBar(e)}>
            <span
              className={
                props.li2[0] === true
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              id="li2"
            />
          </li>
          <li className={styles.listBar} onClick={e => props.changeSlideBar(e)}>
            <span
              className={
                props.li3[0] === true
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              id="li3"
            />
          </li>
          <li className={styles.listBar} onClick={e => props.changeSlideBar(e)}>
            <span
              className={
                props.li4[0] === true
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              id="li4"
            />
          </li>
          <li className={styles.listBar} onClick={e => props.changeSlideBar(e)}>
            <span
              className={
                props.li5[0] === true
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              id="li5"
            />
          </li>
          <li className={styles.listBar} onClick={e => props.changeSlideBar(e)}>
            <span
              className={
                props.li6[0] === true
                  ? styles.listBarDotDefault
                  : styles.listBarDotSelected
              }
              id="li6"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZoomModal;
