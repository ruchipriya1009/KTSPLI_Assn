import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "../styles/FrameComponent2.module.css";

const FrameComponent2 = ({
  className = "",
  archeryPoseLit1,
  propFlex,
  propBackgroundImage,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      backgroundImage: propBackgroundImage,
    };
  }, [propFlex, propBackgroundImage]);

  return (
    <div
      className={[styles.archeryPoseLit1Parent, className].join(" ")}
      style={frameDivStyle}
    >
      <img
        className={styles.archeryPoseLit1Icon}
        alt=""
        src={archeryPoseLit1}
      />
      <div className={styles.archeryWrapper}>
        <div className={styles.archery}>Archery</div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  archeryPoseLit1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propBackgroundImage: PropTypes.any,
};

export default FrameComponent2;
