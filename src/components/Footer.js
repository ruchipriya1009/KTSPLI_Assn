import PropTypes from "prop-types";
import styles from "../styles/Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.emblemContainerParent}>
        <div className={styles.emblemContainer}>
          <div className={styles.emblemContainerChild} />
          <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        </div>
        <div className={styles.divider} />
        <div className={styles.navigation}>
          <div className={styles.navLinks}>
            <div className={styles.nationalGamesLinksWrapper}>
              <div className={styles.nationalGamesLinks}>
                <div className={styles.nationalGames2024Parent}>
                  <div className={styles.nationalGames2024}>
                    National Games 2024
                  </div>
                  <div className={styles.nationalGamesLinkItems}>
                    <div className={styles.home}>{`Home `}</div>
                    <div className={styles.scheduleAndResults}>
                      Schedule and Results
                    </div>
                    <div className={styles.medalTally}>Medal Tally</div>
                    <div className={styles.media}>Media</div>
                    <div className={styles.visit}>Visit</div>
                    <div className={styles.teams}>Teams</div>
                    <div className={styles.milestones}>Milestones</div>
                    <div className={styles.gamesCulture}>Games Culture</div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.sportsParent}>
                    <div className={styles.sports}>SPORTS</div>
                    <div className={styles.sportsLinkItemsOne}>
                      <div className={styles.aquatics}>Aquatics</div>
                      <div className={styles.swimming}>Swimming</div>
                      <div className={styles.diving}>Diving</div>
                      <div className={styles.waterPolo}>Water Polo</div>
                      <div className={styles.archery}>Archery</div>
                      <div className={styles.athletics}>Athletics</div>
                      <div className={styles.badminton}>Badminton</div>
                      <div className={styles.basketball}>Basketball</div>
                      <div className={styles.boxing}>Boxing</div>
                      <div className={styles.canoeing}>Canoeing</div>
                      <div className={styles.canoeSprint}>Canoe - Sprint</div>
                      <div className={styles.canoeSlalom}>Canoe - Slalom</div>
                      <div className={styles.kayaking}>Kayaking</div>
                      <div className={styles.rowing}>Rowing</div>
                      <div className={styles.cycling}>Cycling</div>
                      <div className={styles.bmx}>BMX</div>
                      <div className={styles.roadRacing}>Road Racing</div>
                    </div>
                  </div>
                  <div className={styles.trackRacingParent}>
                    <div className={styles.trackRacing}>Track Racing</div>
                    <div className={styles.equestrian}>Equestrian</div>
                    <div className={styles.fencing}>Fencing</div>
                    <div className={styles.football}>Football</div>
                    <div className={styles.gymnastics}>Gymnastics</div>
                    <div className={styles.golf}>Golf</div>
                    <div className={styles.handball}>Handball</div>
                    <div className={styles.beachHandball}>Beach Handball</div>
                    <div className={styles.hockey}>Hockey</div>
                    <div className={styles.judo}>Judo</div>
                    <div className={styles.kabaddi}>Kabaddi</div>
                    <div className={styles.karateDo}>Karate-Do</div>
                    <div className={styles.khoKho}>Kho- Kho</div>
                    <div className={styles.testSport}>Test Sport</div>
                    <div className={styles.netball}>Netball</div>
                    <div className={styles.rugbySevens}>Rugby Sevens</div>
                    <div className={styles.saling}>Saling</div>
                    <div className={styles.wushu}>Wushu</div>
                  </div>
                  <div className={styles.sportsLinkItemsThree}>
                    <div className={styles.sepaktakrawParent}>
                      <div className={styles.sepaktakraw}>Sepaktakraw</div>
                      <div className={styles.shooting}>Shooting</div>
                      <div className={styles.shootingRifle}>Shooting Rifle</div>
                      <div className={styles.shootingPiston}>
                        Shooting Piston
                      </div>
                      <div className={styles.shootingShotgun}>
                        Shooting Shotgun
                      </div>
                      <div className={styles.squash}>Squash</div>
                      <div className={styles.taekwondo}>Taekwondo</div>
                      <div className={styles.tennis}>Tennis</div>
                      <div className={styles.tableTennis}>Table Tennis</div>
                      <div className={styles.triathlon}>Triathlon</div>
                      <div className={styles.volleyball}>Volleyball</div>
                      <div className={styles.beachVolleyball}>
                        Beach Volleyball
                      </div>
                      <div className={styles.weightlifting}>Weightlifting</div>
                      <div className={styles.wrestling}>Wrestling</div>
                      <div className={styles.wushu1}>Wushu</div>
                      <div className={styles.synchronizedSwimming}>
                        Synchronized Swimming
                      </div>
                      <div className={styles.wushu2}>Wushu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thNationalGames2024UttaraParent}>
              <b className={styles.thNationalGames}>
                38th National Games 2024, Uttarakhand
              </b>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.helpline}>Helpline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightUttarakhand}>
          Copyright © Uttarakhand National Games organizing committee
        </div>
        <div className={styles.uKGOCParent}>
          <div className={styles.uKGOC}>
            <div className={styles.uKGOCDetails}>
              <div className={styles.ukgocInfo}>UKGOC Info</div>
              <div className={styles.uKGOCAddress}>
                <div className={styles.directorSports}>Director Sports,</div>
                <div className={styles.sportsDirectorateUttarakhan}>
                  Sports Directorate, Uttarakhand
                </div>
              </div>
            </div>
          </div>
          <div className={styles.appDownload}>
            <div className={styles.appDownloadContentWrapper}>
              <div className={styles.appDownloadContent}>
                <div className={styles.downloadTheApp}>DOWNLOAD the App</div>
                <div className={styles.socialLinks}>
                  <div className={styles.social}>
                    <img
                      className={styles.socialChild}
                      alt=""
                      src="/group-1336.svg"
                    />
                    <img
                      className={styles.logoFbSimple2Icon}
                      alt=""
                      src="/logofbsimple-2.svg"
                    />
                    <img
                      className={styles.logoInstagram1Icon}
                      alt=""
                      src="/logoinstagram-1.svg"
                    />
                    <div className={styles.koo}>
                      <img
                        className={styles.kooe613b8426bd29b24c68d1431b7Icon}
                        alt=""
                        src="/kooe613b8426bd29b24c68d1431b725b1e6-11.svg"
                      />
                    </div>
                    <img
                      className={styles.linkedinOption1Icon}
                      alt=""
                      src="/linkedinoption-11.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.address}>
              <div className={styles.maharanaPratapSports}>
                Maharana Pratap Sports College Campus,Raipur, Dehradun
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.pin248008}>Pin- 248008</div>
                <div className={styles.ph01352781414}>Ph- 0135-2781414</div>
                <div className={styles.email}>
                  <div className={styles.emailId}>
                    Email Id : directorsprts@gmail.com
                  </div>
                  <div className={styles.downloadTheApp1}>DOWNLOAD the App</div>
                </div>
              </div>
              <div className={styles.appStoreIcons}>
                <img
                  className={styles.appStore1Icon}
                  alt=""
                  src="/appstore-11@2x.png"
                />
                <img
                  className={styles.googlePlay1Icon}
                  alt=""
                  src="/googleplay-11@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.privacy}>PRIVACY</div>
        <div className={styles.visitors5553232}>Visitors : 5553232</div>
        <div className={styles.groupDiv}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <img
              className={styles.uttrakhand1Icon}
              alt=""
              src="/uttrakhand-11@2x.png"
            />
          </div>
        </div>
        <div className={styles.wrapperGroup1379}>
          <img
            className={styles.wrapperGroup1379Child}
            alt=""
            src="/group-1379.svg"
          />
        </div>
        <img className={styles.frameItem} alt="" src="/group-1380.svg" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
