import React from "react";
import Header from "../../components/header";
import InfoOverlay from "../../components/infoOverlay";
import styles from "./style.module.scss";

class ChatListingModule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hideInforOverlay: false,
    };
  }

  componentDidMount() {
    const userNameLocal = localStorage.getItem("username") || null;
    this.setState({
      hideInforOverlay: false,
      userNameLocal: userNameLocal,
    });
  }

  closeInfoOverlay = () => {
    this.setState({
      hideInforOverlay: true,
    });
  };
  render() {
    const { hideInforOverlay = false } = this.state;
    const { details = [] } = this.props;
    return (
      <>
        {!hideInforOverlay && <InfoOverlay buttonClick={this.closeInfoOverlay} />}
        <div className={styles.chatListing}>
          <div className={styles.chatListing__main}>
            <Header
              noIcon
              details={{ title: "U2 Concert, D.Y Patil Stadium", subTitle: "Friday 15th Dec 2020 at 5 pm" }}
            />
            <div className={styles.chatListing__inner}>
              <div className={styles.chatListing__title}>Your chats</div>
              <div className={styles.chatListing__lidtingWrap}>
                {details.map((chat) => (
                  <Header
                    noBg
                    noBack
                    details={chat}
                    onClick={(e) => {
                      this.props.onClick(chat.type, chat.title);
                    }}
                    showCustomIcon={!chat.imageUrl}
                    noIcon={!chat.imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChatListingModule;
