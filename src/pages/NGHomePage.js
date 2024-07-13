import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";

import MascotContainer from "../components/MascotContainer";
import JoinConversationContainer from "../components/JoinConversationContainer";
import ArcheryContainer from "../components/ArcheryContainer";
import FrameComponent1 from "../components/FrameComponent1";

import Gallery from "../components/Gallery";
import FrameComponent from "../components/FrameComponent";
import SupportedBy from "../components/SupportedBy";
import Broadcast from "../components/Broadcast";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import styles from "./NGHomePage.module.css";

const NGHomePage = () => {
  return (
    <div className={styles.ngHomepage2}>
      <div className={styles.onlyByHelpingEachOtherWeParent}>
        <b className={styles.onlyByHelping}>Roar, Victory, Uttarakhand!</b>
        <img className={styles.appStore1Icon} alt="" src="/appstore-1@2x.png" />
        <img
          className={styles.googlePlay1Icon}
          alt=""
          src="/googleplay-1@2x.png"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.watchNow}>Watch Now</div>
      </div>
      <img className={styles.ngHomepage2Child} alt="" src="/line-9.svg" />
      <FrameComponent4 />
      <div className={styles.ngHomepage2Item} />
      <FrameComponent3 />
      <img className={styles.ngHomepage2Inner} alt="" src="/rectangle-17.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.ngHomepage2Child1} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-16.svg" />
      <div className={styles.ngHomepage2Child2} />
      <img
        className={styles.ngHomepage2Child3}
        alt=""
        src="/rectangle-16.svg"
      />
      <div className={styles.ngHomepage2Child4} />
      <img
        className={styles.ngHomepage2Child5}
        alt=""
        src="/rectangle-16.svg"
      />
      <img
        className={styles.ngHomepage2Child6}
        alt=""
        src="/rectangle-15.svg"
      />
      <div className={styles.ngHomepage2Child7} />
      <img
        className={styles.ngHomepage2Child8}
        alt=""
        src="/rectangle-16.svg"
      />
      <img
        className={styles.ngHomepage2Child9}
        alt=""
        src="/rectangle-15.svg"
      />
      <div className={styles.ngHomepage2Child10} />
      <img
        className={styles.ngHomepage2Child11}
        alt=""
        src="/rectangle-16.svg"
      />
      <div className={styles.eventsContainerWrapper}>
        <div className={styles.eventsContainer}>
          
        </div>
      </div>
      <div className={styles.mascotContainerParent}>
        <MascotContainer />
        <div className={styles.outerJoinConversationContai}>
          <JoinConversationContainer />
          <ArcheryContainer />
        </div>
      </div>
      <div className={styles.followUsContainer}>
        <img
          className={styles.followUsContainerChild}
          alt=""
          src="/rectangle-4605.svg"
        />
        <div className={styles.followUsContent}>
          <FrameComponent1 />
        
        </div>
      </div>
      <img className={styles.aquatics1Icon} alt="" src="/aquatics-1@2x.png" />
      <Gallery />
      <img className={styles.aquatics2Icon} alt="" src="/aquatics-2@2x.png" />
      <div className={styles.partners}>
        <div className={styles.frameParent}>
          <FrameComponent
            line17="/line-17.svg"
            gamesPartners="Games Partners"
            line16="/line-17.svg"
            sealOfUttarakhand1="/seal-of-uttarakhand-11@2x.png"
            sport21="/sport-2-11@2x.png"
            ministryOfYouthAffairsAnd="/ministry-of-youth-affairs-and-sports-21@2x.png"
            image26="/image-26@2x.png"
          />
          <SupportedBy />
          <FrameComponent
            line17="/line-171.svg"
            gamesPartners="Associate Sponsors"
            line16="/line-171.svg"
            sealOfUttarakhand1="/image-30@2x.png"
            sport21="/image-31@2x.png"
            ministryOfYouthAffairsAnd="/image-32@2x.png"
            image26="/image-33@2x.png"
          />
          <FrameComponent
            line17="/line-172.svg"
            gamesPartners="Partners"
            line16="/line-16.svg"
            sealOfUttarakhand1="/image-35@2x.png"
            sport21="/image-36@2x.png"
            ministryOfYouthAffairsAnd="/image-37@2x.png"
            image26="/image-38@2x.png"
          />
          <Broadcast />
        </div>
      </div>
      <Empty />
      <Footer />
    </div>
  );
};

export default NGHomePage;
