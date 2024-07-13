import Slides from "./Slides";
import PropTypes from "prop-types";
import styles from "../styles/Gallery.module.css";

const Gallery = ({ className = "" }) => {
  return (
    <div className={[styles.gallery, className].join(" ")}>
      <b className={styles.photoGallery}>Photo Gallery</b>
      <div className={styles.carousel}>
        <div className={styles.navigation}>
          <div className={styles.controls}>
            <div className={styles.buttonContainer}>
              <div className={styles.nextButton}>
                <div className={styles.circle} />
                <img
                  className={styles.linearArrowsArrowRight}
                  alt=""
                  src="/linear--arrows--arrow-right1.svg"
                />
              </div>
              <img
                className={styles.buttonContainerChild}
                alt=""
                src="/group-1451.svg"
              />
            </div>
            <div className={styles.thumbnail}>
              <div className={styles.wrapperMaskGroup}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <div className={styles.swastiSinghsGold}>
                Swasti Singh’s gold powers Odisha past 50 medals
              </div>
            </div>
          </div>
        </div>
        <Slides maskGroup="/mask-group3@2x.png" />
        <Slides maskGroup="/mask-group4@2x.png" />
        <Slides maskGroup="/mask-group5@2x.png" />
        <div className={styles.duplicate}>
          <div className={styles.wrapperMaskGroup1}>
            <img
              className={styles.maskGroupIcon1}
              alt=""
              src="/mask-group2@2x.png"
            />
          </div>
          <div className={styles.swastiSinghsGold1}>
            Swasti Singh’s gold powers Odisha past 50 medals
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
