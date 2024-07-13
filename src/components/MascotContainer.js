import PropTypes from "prop-types";
import styles from "../styles/MascotContainer.module.css";

const MascotContainer = ({ className = "" }) => {
  return (
    <div className={[styles.mascotContainer, className].join(" ")}>
      <div className={styles.mascotContent}>
        <div className={styles.mascotContentChild} />
        <div className={styles.mascotCard}>
          <div className={styles.mascotInfo}>
            <div className={styles.hiIAm}>HI!, I AM</div>
            <div className={styles.mascotSubtitle}>
              <b className={styles.theMascot}>
                <p className={styles.the}>{`THE `}</p>
                <p className={styles.mascot}>MASCOT</p>
              </b>
            </div>
            <div className={styles.mascotDescription}>
              <div className={styles.meetHimalayanMonalContainer}>
                <p
                  className={styles.meetHimalayanMonal}
                >{`Meet Himalayan Monal, The Mascot for the 38th National Games Uttarakhand 2024. `}</p>
                <p className={styles.knownAsThe}>
                  Known as the Impeyan Monal. This bird is also the state bird
                  of Uttarakhand.
                </p>
              </div>
            </div>
            <div className={styles.meetMascot}>
              <div className={styles.meetMascot1}>Meet Mascot</div>
              <img
                className={styles.mascotImageIcon}
                alt=""
                src="/mascot-image.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.mascotContainer1}>
          <img
            className={styles.mascotContainerChild}
            alt=""
            src="/rectangle-4598@2x.png"
          />
          <img
            className={styles.innerMascotContainer}
            alt=""
            src="/inner-mascot-container.svg"
          />
        </div>
      </div>
    </div>
  );
};

MascotContainer.propTypes = {
  className: PropTypes.string,
};

export default MascotContainer;
