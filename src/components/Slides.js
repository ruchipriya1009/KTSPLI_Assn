import PropTypes from "prop-types";
import styles from "../styles/Slides.module.css";

const Slides = ({ className = "", maskGroup }) => {
  return (
    <div className={[styles.slides, className].join(" ")}>
      <div className={styles.wrapperMaskGroupParent}>
        <div className={styles.wrapperMaskGroup}>
          <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
        </div>
        <div className={styles.swastiSinghsGold}>
          Swasti Singh’s gold powers Odisha past 50 medals
        </div>
      </div>
    </div>
  );
};

Slides.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
};

export default Slides;
