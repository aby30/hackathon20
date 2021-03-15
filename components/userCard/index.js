import React from "react";
import styles from "./style.module.scss";

const UserCard = ({ chatCardInfo }) => {
  return (
    <div className={styles.userCard__main}>
      <div className={styles.userCard__msgMain}>
        <div className={styles.userCard__msgWrap}>
          <div className={styles.userCard__icon}>
            {/* <img src="https://randomuser.me/api/portraits/men/32.jpg" /> */}
            <div
              style={{ backgroundColor: chatCardInfo.organizer ? "#F84464" : "#BFD1FF" }}
              className={styles.userCard__iconBox}
            >
              {chatCardInfo.from ? chatCardInfo.from.slice(0, 1).toUpperCase() : ""}
            </div>
          </div>
          <div className={styles.userCard__nameMsg}>
            <div
              className={`${styles.userCard__name} ${chatCardInfo.organizer ? styles.userCard__nameMsgOrganiser : ""}`}
            >
              {chatCardInfo.from}
            </div>
            <div className={styles.userCard__msg}>{chatCardInfo.message}</div>
            {/* <div className={styles.userCard__msgImapct}>
              <div className={styles.userCard__msgImapctItem}>
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1608316584/like_oefquc.svg" />
                12
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
