import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "../styles/ArcheryContainer.module.css";

const ArcheryContainer = ({ className = "" }) => {
  return (
    <div className={[styles.archeryContainer, className].join(" ")}>
      <div className={styles.archeryImages}>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-4606.svg"
            />
            <FrameComponent2 archeryPoseLit1="/archery-pose-lit-1@2x.png" />
          </div>
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-1@2x.png"
            propFlex="0.8276"
            propBackgroundImage="url('/frame-1452@3x.png')"
          />
        </div>
        <div className={styles.frameGroup}>
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-11@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1461@3x.png')"
          />
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-11@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1461@3x.png')"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.archeryPoseLit1Parent}>
            <div className={styles.archeryPoseLit1} />
            <div className={styles.archeryWrapper}>
              <div className={styles.archery}>Archery</div>
            </div>
          </div>
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-11@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1461@3x.png')"
          />
        </div>
        <div className={styles.frameDiv}>
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-11@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1461@3x.png')"
          />
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-11@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1461@3x.png')"
          />
        </div>
        <div className={styles.frameParent1}>
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-11@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1461@3x.png')"
          />
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-11@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1461@3x.png')"
          />
        </div>
        <div className={styles.frameParent2}>
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-12@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1465@3x.png')"
          />
          <FrameComponent2
            archeryPoseLit1="/archery-pose-lit-12@2x.png"
            propFlex="1"
            propBackgroundImage="url('/frame-1465@3x.png')"
          />
        </div>
      </div>
    </div>
  );
};

ArcheryContainer.propTypes = {
  className: PropTypes.string,
};

export default ArcheryContainer;
