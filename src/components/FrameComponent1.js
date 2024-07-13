import PropTypes from "prop-types";
import styles from "../styles/FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.followUsTitleParent, className].join(" ")}>
      <div className={styles.followUsTitle}>
        <div className={styles.followUsParent}>
          <b className={styles.followUs}>FOLLOW US</b>
          <div className={styles.socialMediaIcons}>
            <div className={styles.socialMediaIconsList}>
              <img
                className={styles.socialMediaIconsName}
                alt=""
                src="/social-media-icons-name.svg"
              />
              <img
                className={styles.socialMediaIconsName1}
                alt=""
                src="/social-media-icons-name1.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <img
                className={styles.kooe613b8426bd29b24c68d1431b7Icon}
                alt=""
                src="/kooe613b8426bd29b24c68d1431b725b1e6-1.svg"
              />
              <img
                className={styles.linkedinOption1Icon}
                alt=""
                src="/linkedinoption-1.svg"
              />
            </div>
            <div className={styles.uttrakhandgames2024}>
              #uttrakhandgames2024
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-4600.svg" />
        <img className={styles.frameItem} alt="" src="/rectangle-4601@2x.png" />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
