import PropTypes from "prop-types";
import styles from "../styles/FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  line17,
  gamesPartners,
  line16,
  sealOfUttarakhand1,
  sport21,
  ministryOfYouthAffairsAnd,
  image26,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.vectorWrapper}>
            <img className={styles.frameChild} alt="" src={line17} />
          </div>
          <div className={styles.gamesPartners}>{gamesPartners}</div>
          <div className={styles.bottomSeparator}>
            <img className={styles.bottomSeparatorChild} alt="" src={line16} />
          </div>
        </div>
      </div>
      <div className={styles.partnerLogos}>
        <div className={styles.logoContainer}>
          <img
            className={styles.sealOfUttarakhand1Icon}
            alt=""
            src={sealOfUttarakhand1}
          />
        </div>
        <div className={styles.secondLogo}>
          <img className={styles.sport21Icon} alt="" src={sport21} />
        </div>
        <div className={styles.fourthLogo}>
          <img
            className={styles.ministryOfYouthAffairsAndIcon}
            alt=""
            src={ministryOfYouthAffairsAnd}
          />
        </div>
        <div className={styles.placeholderLogo}>
          <img className={styles.image26Icon} alt="" src={image26} />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  line17: PropTypes.string,
  gamesPartners: PropTypes.string,
  line16: PropTypes.string,
  sealOfUttarakhand1: PropTypes.string,
  sport21: PropTypes.string,
  ministryOfYouthAffairsAnd: PropTypes.string,
  image26: PropTypes.string,
};

export default FrameComponent;
