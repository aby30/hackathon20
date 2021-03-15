import React from "react";
import SocketIO from "socket.io-client";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ack: [""],
    };
    this.socket = SocketIO();
  }

  render() {
    return (
      <div>
        Hello world
        <div>{this.state.ack.join(",")}</div>
      </div>
    );
  }
}

export default Home;
