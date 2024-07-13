import PropTypes from "prop-types";
import styles from "../styles/Empty.module.css";

const Empty = ({ className = "" }) => {
  return (
    <div className={[styles.empty, className].join(" ")}>
      <img className={styles.emptyChild} alt="" src="/rectangle-4584.svg" />
      <b className={styles.placeholder}>0179</b>
      <b className={styles.placeholder1}>19</b>
      <b className={styles.placeholder2}>55</b>
      <div className={styles.placeholder3}>055218</div>
      <div className={styles.placeholder4}>01800653</div>
      <div className={styles.placeholder5}>010208</div>
      <b className={styles.placeholder6}>07</b>
      <div className={styles.placeholder7}>0180</div>
      <div className={styles.placeholder8}>5420</div>
      <div className={styles.placeholder9}>21</div>
      <div className={styles.countdownAndFooter}>
        <div className={styles.countdown}>
          <img
            className={styles.uttrakhand1Icon}
            alt=""
            src="/uttrakhand-1@2x.png"
          />
        </div>
        <div className={styles.stateName}>
          <div className={styles.timeLeftUntilTheNationalGWrapper}>
            <div className={styles.timeLeftUntilContainer}>
              <p className={styles.timeLeftUntil}>{`time LEFT UNTIL THE `}</p>
              <p className={styles.nationalGames}>{`NATIONAL GAMES `}</p>
              <p className={styles.uttarakhand2024}>UTTARAKHAND 2024</p>
            </div>
          </div>
          <div className={styles.timer}>
            <div className={styles.daysContainer}>
              <div className={styles.placeholder10}>179</div>
              <div className={styles.daysWrapper}>
                <div className={styles.days}>Days</div>
              </div>
            </div>
            <div className={styles.daysAndHours}>
              <div className={styles.hoursAndMinutes}>
                <div className={styles.minutesAndSeconds}>
                  <div className={styles.filler}>11</div>
                </div>
                <div className={styles.hours}>Hours</div>
              </div>
            </div>
            <div className={styles.daysAndHours1}>
              <div className={styles.frameParent}>
                <div className={styles.wrapper}>
                  <div className={styles.div}>56</div>
                </div>
                <div className={styles.mins}>Mins</div>
              </div>
            </div>
            <div className={styles.secondsInnerWrapper}>
              <div className={styles.secondsInner}>
                <div className={styles.empty1}>05</div>
                <div className={styles.secWrapper}>
                  <div className={styles.sec}>Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Empty.propTypes = {
  className: PropTypes.string,
};

export default Empty;
