import React from "react";
import buttonStyle from '../../modules/login/style.module.scss';
import styles from './style.module.scss';

const InfoOverlay = ({
  buttonClick,
  hideInforOverlay = false
}) => {
  return (
    <div className={`${styles.inforOverlay} ${hideInforOverlay ? styles.hideInforOverlay : ''}`}>
        <div className={styles.inforOverlay__imageTop}>
          <img src="https://res.cloudinary.com/abyy30/image/upload/v1608379081/mobInfoOverlay_dcdrak.png" />
          <div className={styles.inforOverlay__floatingInfo}>
            <div className={styles.inforOverlay__title}>
              Welcome to Pulse
            </div>
            <div className={styles.inforOverlay__subTitle}>
              One stop to get your queries answered
              {/* <hr className={styles.inforOverlay__separator} /> */}
            </div>
            <div className={styles.inforOverlay__desc}>
              Pulse is a chat interface where you can chat with other event atendees and event organiser at the same place to make your onground experience more enjoyable.
            </div>
          </div>
        </div>
        <div className={styles.inforOverlay__reasonListWrap}>
          <ul className={styles.inforOverlay__reasonList}>
            <li>Not able to find ticket counter, reach out to the event organiser.</li>
            <li>Stuck in traffic, get live updates of event from the audience </li>
            <li>Get recomendation for best restaurant for your after event party</li>
          </ul>
          <div className={buttonStyle.Btn} style={{ marginTop: '60px' }}>
            <button onClick={() => buttonClick()}>Get Started</button>
          </div>
        </div>
      </div>
  );
};

export default InfoOverlay;
