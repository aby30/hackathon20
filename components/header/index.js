import React from "react";
import styles from "./style.module.scss";
import stylesUsedCard from "../userCard/style.module.scss";

const Header = ({ noBg = false, noBack = false, noIcon = false, details = {}, onClick = () => {}, icon, showCustomIcon = false }) => {
  const backClick = () => {
    window.history.back();
  };

  return (
    <div className={`${styles.header__main} ${noBg ? styles.header__noBg : ''}`} onClick={onClick}>
        {!noBack && (
            <div className={styles.header__back} onClick={() => backClick()}>
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1608298492/arrow_dyqefm.svg" />
            </div>
        )}
        {!noIcon && (
            <div className={styles.header__icon}>
                <img src={details.imageUrl ? details.imageUrl : "https://res.cloudinary.com/abyy30/image/upload/v1608383763/u2Thumb_mw0j0t.png"} />
            </div>
        )}
        {showCustomIcon && (
            <div
                style={{ backgroundColor: "#BFD1FF" }}
                className={stylesUsedCard.userCard__iconBox}
            >
                {details.title ? details.title.slice(0, 1).toUpperCase() : ""}
            </div>
        )}
        <div className={styles.header__textual}>
            <div className={styles.header__title}>
                {details.title ? details.title : ''}
            </div>
            <div className={styles.header__subTitle}>
                {details.subTitle ? details.subTitle : ''}
            </div>
        </div>
    </div>
  );
};

export default Header;
