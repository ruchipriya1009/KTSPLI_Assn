import TableData from "./TableData";
import PropTypes from "prop-types";
import styles from "../styles/FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/rectangle-4591.svg" />
      <div className={styles.tallyContainer}>
        <div className={styles.tallyContent}>
          <div className={styles.tallyHeader}>
            <div className={styles.tallyTitleRow}>
              <div className={styles.medalImageContainer}>
                <img
                  className={styles.medalGoldBelt2Icon}
                  alt=""
                  src="/medalgoldbelt-2.svg"
                />
              </div>
              <b className={styles.medalTally}>Medal Tally</b>
            </div>
            <div className={styles.tallyTable}>
              <img
                className={styles.tallyTableChild}
                alt=""
                src="/rectangle-4593.svg"
              />
              <div className={styles.tableRows}>
                <div className={styles.rankTable}>
                  <img
                    className={styles.rankTableChild}
                    alt=""
                    src="/rectangle-4592.svg"
                  />
                  <div className={styles.rankHeading}>
                    <div className={styles.rank}>Rank</div>
                  </div>
                  <div className={styles.medalIcons}>
                    <img
                      className={styles.image129Icon}
                      alt=""
                      src="/image-129@2x.png"
                    />
                    <img
                      className={styles.image130Icon}
                      alt=""
                      src="/image-130@2x.png"
                    />
                    <img
                      className={styles.image131Icon}
                      alt=""
                      src="/image-131@2x.png"
                    />
                    <div className={styles.totalHeading}>
                      <div className={styles.total}>Total</div>
                    </div>
                  </div>
                </div>
                <TableData
                  rankValue="2"
                  imageValue="66"
                  totalValue="27"
                  stateValue="33"
                  rankHeader="126"
                />
                <TableData
                  rankValue="4"
                  imageValue="37"
                  totalValue="36"
                  stateValue="39"
                  rankHeader="112"
                  propTop="252px"
                  propPadding="22.2px 44px 14px"
                />
                <div className={styles.tableData}>1</div>
                <div className={styles.tableData1}>3</div>
                <div className={styles.tableData2}>5</div>
                <div className={styles.tableData3}>80</div>
                <div className={styles.tableData4}>66</div>
                <div className={styles.tableData5}>36</div>
                <div className={styles.tableData6}>69</div>
                <div className={styles.tableData7}>55</div>
                <div className={styles.tableData8}>24</div>
                <div className={styles.tableData9}>79</div>
                <div className={styles.tableData10}>75</div>
                <div className={styles.tableData11}>27</div>
                <div className={styles.tableData12}>228</div>
                <div className={styles.tableData13}>192</div>
                <div className={styles.tableData14}>87</div>
                <div className={styles.stateTable}>
                  <div className={styles.stateHeading}>
                    <div className={styles.state}>State</div>
                  </div>
                  <div className={styles.stateList}>
                    <div className={styles.maharashtraRow}>
                      <div className={styles.maharashtra}>Maharashtra</div>
                    </div>
                    <div className={styles.otherStates}>
                      <div className={styles.servicesRow}>
                        <div className={styles.servicesSportsControl}>
                          Services Sports Control Board
                        </div>
                        <div className={styles.haryanaRow}>
                          <div className={styles.haryana}>Haryana</div>
                        </div>
                      </div>
                      <div className={styles.states}>
                        <div className={styles.madhyaPradesh}>
                          Madhya Pradesh
                        </div>
                      </div>
                      <div className={styles.states1}>
                        <div className={styles.kerala}>Kerala</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.totalRow}>
                <div className={styles.totalBox}>
                  <img
                    className={styles.totalBoxChild}
                    alt=""
                    src="/rectangle-4596.svg"
                  />
                  <div className={styles.grandTotalHeading}>
                    <div className={styles.grandTotal}>GRAND TOTAL</div>
                  </div>
                  <div className={styles.totalCount}>555</div>
                  <div className={styles.totalMedals}>
                    <div className={styles.medalsCount}>546</div>
                    <div className={styles.medalsCount1}>779</div>
                    <div className={styles.medalsCount2}>1880</div>
                  </div>
                </div>
                <div className={styles.tableActions}>
                  <div className={styles.tableButtons}>
                    <div className={styles.buttons}>
                      <div className={styles.refresh}>Refresh</div>
                    </div>
                    <div className={styles.buttons1}>
                      <div className={styles.viewMore}>View More</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.tallyContainerChild}
          alt=""
          src="/rectangle-45911@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
