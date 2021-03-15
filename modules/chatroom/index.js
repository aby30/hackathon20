import React from "react";
import SocketIO from "socket.io-client";
import Router from "next/router";

import styles from "./style.module.scss";
import Header from "../../components/header";
import UserCard from "../../components/userCard";
import StickyMsgBar from "../../components/stickyMsgBar";

class ChatroomModule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chatMsgs: props.messages || [],
      userInput: "",
    };
    this.socket = SocketIO();
  }

  componentDidMount() {
    const userNameLocal = localStorage.getItem("username") || null;
    this.setState({
      hideInforOverlay: false,
    });
    if (userNameLocal !== null) {
      this.setState({
        userNameLocal: userNameLocal || "",
      });
    } else {
      Router.push("/login");
    }
    this.socket.on("connect", () => {
      console.log("connected");
      this.socket.emit("rooms", {
        roomType: localStorage.getItem("channel") || "public",
        userName: this.state.userNameLocal,
        roomId: localStorage.getItem("roomId"),
      });
    });

    this.socket.on("response", (arg) => {
      this.setState((prevState) => ({
        chatMsgs: [...prevState.chatMsgs, arg],
      }));
    });
    this.scrollToBottom();
  }

  onMsgChange = (e) => {
    this.setState({
      userInput: e?.target?.value,
    });
  };

  onKeyDown = (e) => {
    if (e.key === "Enter" && this.state.userInput) {
      this.sendMessageToServer();
    }
  };

  sendMessageToServer = () => {
    this.socket.emit(
      "message",
      {
        userName: this.state.userNameLocal,
        message: this.state.userInput,
        roomType: localStorage.getItem("channel") || "public",
        roomId: localStorage.getItem("roomId") || "",
      },
      (doc) => {
        this.setState((prevState) => ({
          chatMsgs: [...prevState.chatMsgs, doc],
          userInput: "",
        }));
      },
    );
    this.scrollToBottom();
  };

  onSenderIconClick = () => {
    if (this.state.userInput) {
      this.sendMessageToServer();
    }
  };

  scrollToBottom = () => {
    const objDiv = document.getElementById("chatroomContent");
    objDiv.scrollTop = objDiv.scrollHeight;
  };

  render() {
    const { chatMsgs, hideInforOverlay } = this.state;
    return (
      <>
        <div className={styles.chatroom}>
          <div className={styles.chatroom__main}>
            <Header details={{ title: "U2 Concert, D.Y Patil Stadium", subTitle: "Friday 15th Dec 2020 at 5 pm" }} />
            <div id="chatroomContent" className={styles.chatroom__content}>
              {chatMsgs.map((msgDetail) => (
                <UserCard key={msgDetail._id} chatCardInfo={msgDetail} />
              ))}
            </div>
            <StickyMsgBar
              userInput={this.state.userInput}
              onMsgChange={this.onMsgChange}
              onKeyDown={this.onKeyDown}
              onSenderIconClick={this.onSenderIconClick}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ChatroomModule;
