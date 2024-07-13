import PropTypes from "prop-types";
import styles from "../styles/JoinConversationContainer.module.css";

const JoinConversationContainer = ({ className = "" }) => {
  return (
    <div className={[styles.joinConversationContainer, className].join(" ")}>
      <div className={styles.innerJoinConversationContai}>
        <div className={styles.joinConversationTitleContaiParent}>
          <div className={styles.joinConversationTitleContai}>
            <div className={styles.joinTheConversation}>
              <div className={styles.joinDetails}>
                <div className={styles.joinUttarakhandGames}>
                  <div className={styles.joinTheWrapper}>
                    <div className={styles.joinThe}>Join the</div>
                  </div>
                  <b className={styles.conversation}>Conversation</b>
                  <div className={styles.uttrakhandgames2024Wrapper}>
                    <div className={styles.uttrakhandgames2024}>
                      #uttrakhandgames2024
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.unifiedContainer}>
                <div className={styles.unifiedContainerInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.togetherCollectivelyWrapper}>
                      <div className={styles.togetherCollectively}>
                        <div className={styles.allTogether}>ALL TOGETHER</div>
                        <div className={styles.statesBoard}>
                          <b className={styles.b}>28</b>
                          <div className={styles.states}>States</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameChild} />
                    <div className={styles.frameWrapper}>
                      <div className={styles.collectivelyParent}>
                        <div className={styles.collectively}>COLLECTIVELY</div>
                        <div className={styles.parent}>
                          <b className={styles.b1}>8 + 1</b>
                          <div className={styles.unionTerritoriesContainer}>
                            <p
                              className={styles.unionTerritories}
                            >{`Union Territories & Control Boards`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameItem} />
                    <div className={styles.unifiedAthletes}>
                      <div className={styles.weAreUnified}>
                        <div className={styles.weAreUnified1}>
                          WE ARE UNIFIED
                        </div>
                        <div className={styles.athletesCount}>
                          <b className={styles.b2}>8000+</b>
                          <div className={styles.athletes}>Athletes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.competitionDaysContainer}>
                  <img
                    className={styles.competitionDaysContainerChild}
                    alt=""
                    src="/line-23.svg"
                  />
                  <div className={styles.competitionContainer}>
                    <div className={styles.frameGroup}>
                      <div className={styles.competitionTitleWrapper}>
                        <div className={styles.competitionTitle}>
                          <div className={styles.competition}>Competition</div>
                          <div className={styles.competitionDaysCount}>
                            <b className={styles.b3}>22</b>
                            <div className={styles.days}>Days</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.serviceVolunteersContainer}>
                        <div
                          className={styles.serviceVolunteersContainerChild}
                        />
                        <div className={styles.serviceContainer}>
                          <div className={styles.serviceParent}>
                            <div className={styles.service}>Service</div>
                            <div className={styles.volunteersCount}>
                              <b className={styles.b4}>4000</b>
                              <div className={styles.volunteers}>
                                Volunteers
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameInner}
              alt=""
              src="/rectangle-4599.svg"
            />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-45912@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.donateContainer}>
        <b className={styles.youCanHelp}>Sports</b>
        <div className={styles.viewMoreButtonContainer}>
          <div className={styles.viewMoreButton}>
            <div className={styles.viewMore}>View More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

JoinConversationContainer.propTypes = {
  className: PropTypes.string,
};

export default JoinConversationContainer;
