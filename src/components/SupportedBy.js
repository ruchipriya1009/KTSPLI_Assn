import PropTypes from "prop-types";
import styles from "../styles/SupportedBy.module.css";

const SupportedBy = ({ className = "" }) => {
  return (
    <div className={[styles.supportedBy, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleAndPartner}>
          <div className={styles.topSeparator}>
            <img
              className={styles.topSeparatorChild}
              alt=""
              src="/line-17.svg"
            />
          </div>
          <div className={styles.supportedBy1}>Supported by</div>
          <div className={styles.topSeparator1}>
            <img
              className={styles.topSeparatorItem}
              alt=""
              src="/line-17.svg"
            />
          </div>
        </div>
        <div className={styles.partnerImages}>
          <div className={styles.imageContainer}>
            <div className={styles.images}>
              <img
                className={styles.image27Icon}
                alt=""
                src="/image-27@2x.png"
              />
            </div>
            <div className={styles.images1}>
              <img
                className={styles.image28Icon}
                alt=""
                src="/image-28@2x.png"
              />
            </div>
            <div className={styles.images2}>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-29@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SupportedBy.propTypes = {
  className: PropTypes.string,
};

export default SupportedBy;
