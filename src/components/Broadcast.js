import PropTypes from "prop-types";
import styles from "../styles/Broadcast.module.css";

const Broadcast = ({ className = "" }) => {
  return (
    <div className={[styles.broadcast, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleSeparator}>
          <img
            className={styles.titleSeparatorChild}
            alt=""
            src="/line-17.svg"
          />
          <div className={styles.broadcastPartner}>Broadcast Partner</div>
          <img
            className={styles.titleSeparatorItem}
            alt=""
            src="/line-17.svg"
          />
        </div>
        <div className={styles.logos}>
          <div className={styles.imageContainer}>
            <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
          </div>
          <div className={styles.imageContainer1}>
            <img className={styles.image41Icon} alt="" src="/image-41@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

Broadcast.propTypes = {
  className: PropTypes.string,
};

export default Broadcast;
