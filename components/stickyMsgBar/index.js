import React from "react";
import styles from "./style.module.scss";

const StickyMsgBar = ({ chatCardInfo, onMsgChange, onKeyDown, userInput, onSenderIconClick }) => {
  return (
    <div className={styles.stickyMsgBar__main}>
      <div className={styles.stickyMsgBar__inner}>
        <div className={styles.stickyMsgBar__input}>
          <input
            type="text"
            placeholder="Type your msg..."
            value={userInput}
            onChange={onMsgChange}
            onKeyDown={onKeyDown}
          />
        </div>
        <div className={styles.stickyMsgBar__emoji} onClick={onSenderIconClick}>
          <img
            src="https://res.cloudinary.com/abyy30/image/upload/v1608381599/send_xxb84u.svg"
            style={{ width: "30px" }}
          />
          {/* <div className={styles.popOver}>
            <img
              src="https://res.cloudinary.com/abyy30/image/upload/v1608292528/smiley_uqbixd.svg"
              style={{ width: "15px" }}
            />
            <img
              src="https://res.cloudinary.com/abyy30/image/upload/v1608292528/smiley_uqbixd.svg"
              style={{ width: "15px" }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StickyMsgBar;
