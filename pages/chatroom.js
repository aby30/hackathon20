import React from "react";
import ChatroomModule from "../modules/chatroom/index.js";

// request
import { get } from "../utils/request";

class ChatRoom extends React.PureComponent {
  static async getInitialProps({ req, res }) {
    if (!res) {
      const userName = localStorage.getItem("username");
      const roomId = localStorage.getItem("roomId");
      let response = await get(
        `/getPublicMsgs?channel=${localStorage.getItem("channel") || "public"}&userName=${
          userName === "U2 Team" ? roomId : userName
        }`,
        req,
      );
      return {
        data: response.data,
      };
    } else {
      res.writeHead(301, {
        Location: "/chatListing",
      });
      res.end();
    }
  }

  render() {
    return (
      <div>
        <ChatroomModule messages={this.props.data} />
        {/* "chatroomModule" */}
      </div>
    );
  }
}

export default ChatRoom;
