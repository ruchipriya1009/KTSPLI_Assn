import PropTypes from "prop-types";
import styles from "../styles/FrameComponent5.module.css";

const FrameComponent5 = ({ className = "", newsDateIcons }) => {
  return (
    <div className={[styles.newsDateLocationParent, className].join(" ")}>
      <div className={styles.newsDateLocation}>
        <img className={styles.newsDateIcons} alt="" src={newsDateIcons} />
        <div className={styles.newsDateLocationInner}>
          <div className={styles.swastiSinghsGoldPowersOdiParent}>
            <div className={styles.swastiSinghsGold}>
              Swasti Singh’s gold powers Odisha past 50 medals
            </div>
            <div
              className={styles.odishaWonAnother}
            >{`Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh. `}</div>
          </div>
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/line-20.svg" />
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  newsDateIcons: PropTypes.string,
};

export default FrameComponent5;
