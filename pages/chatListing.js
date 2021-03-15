import React from "react";
import ChatListingModule from "../components/chatListing/index.js";
import Router from "next/router";

// request
import axios from "../utils/request";

class ChatListing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          title: "U2 Fan room",
          subTitle: "58 people have joined",
          type: "public",
          imageUrl: 'https://res.cloudinary.com/abyy30/image/upload/v1608383763/u2Thumb_mw0j0t.png',
        },
        {
          title: "Questions to Organiser",
          subTitle: "You and Organiser",
          type: "private",
          imageUrl: 'https://res.cloudinary.com/abyy30/image/upload/v1608383598/qna_mzdfpo.png',
        },
      ],
    };
  }
  onClick = (type, title) => {
    localStorage.setItem("channel", type);
    if (type === "organizerPersonal") {
      localStorage.setItem("roomId", title);
    }
    Router.push("/chatroom");
  };

  async componentDidMount() {
    if (localStorage.getItem("username") === "U2 Team") {
      const { data } = await axios.get("/api/getChatListing");
      const users = data.map((user) => ({
        title: user,
        subTitle: "",
        type: "organizerPersonal",
      }));
      this.setState({
        users: [
          {
            title: "U2 Fan room",
            subTitle: "58 people have joined",
            type: "public",
            imageUrl: 'https://res.cloudinary.com/abyy30/image/upload/v1608383763/u2Thumb_mw0j0t.png',
          },
          ...users,
        ],
      });
    }
  }

  render() {
    return (
      <div>
        <ChatListingModule details={this.state.users} onClick={this.onClick} />
      </div>
    );
  }
}

export default ChatListing;
