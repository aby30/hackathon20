const db = require("../utils/connectToDb");

const socketHandler = (socket) => {
  // default to pulseRoom for now

  socket.on("message", (messageArgs, callback) => {
    let to = "pulseRoom";
    if (messageArgs.roomType === "private") {
      to = "U2 Team";
    } else if (messageArgs.roomType === "organizerPersonal") {
      to = messageArgs.roomId;
    }
    db.chatMessages.insert(
      {
        from: messageArgs.userName,
        to: to,
        time: new Date(),
        message: messageArgs.message,
        organizer: messageArgs.userName === "U2 Team",
      },
      (err, doc) => {
        callback(doc);
        if (messageArgs.roomType === "public") {
          socket.to("pulseRoom").emit("response", doc);
        } else if (messageArgs.roomType === "organizerPersonal") {
          socket.to(messageArgs.roomId).emit("response", doc);
        } else {
          socket.to(messageArgs.userName).emit("response", doc);
        }
      },
    );
  });
  socket.on("rooms", (args) => {
    if (args.roomType === "public") {
      socket.join("pulseRoom");
    } else if (args.roomType === "organizerPersonal") {
      socket.join(args.roomId);
    } else {
      socket.join(args.userName);
    }
  });
};

module.exports = {
  socketHandler,
};
