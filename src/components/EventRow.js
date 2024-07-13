import PropTypes from "prop-types";
import styles from "../styles/EventRow.module.css";

const EventRow = ({ className = "" }) => {
  return (
    <div className={[styles.eventRow, className].join(" ")}>
      <div className={styles.eventDetails}>
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <div className={styles.sportNames}>
          <div className={styles.sports}>10:30:00</div>
        </div>
      </div>
      <div className={styles.eventCategories}>
        <div className={styles.judo}>Judo</div>
      </div>
      <div className={styles.weightClasses}>
        <div className={styles.womens48kg}>Women’s 48kg</div>
      </div>
      <div className={styles.eliminationRounds}>
        <div className={styles.elimination}>Elimination</div>
      </div>
      <div className={styles.stadiumInfo}>
        <div className={styles.stadiumDetails}>
          <img
            className={styles.rectangle2Icon}
            alt=""
            src="/rectangle-2.svg"
          />
          <div className={styles.indiraGandhiInternational}>
            Indira Gandhi International Sports Stadium
          </div>
        </div>
      </div>
    </div>
  );
};

EventRow.propTypes = {
  className: PropTypes.string,
};

export default EventRow;
