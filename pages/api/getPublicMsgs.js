const db = require("../../utils/connectToDb");

const getPublicMsgs = async (req, res) => {
  try {
    if (req.query.channel === "public") {
      db.chatMessages
        .find({
          to: "pulseRoom",
        })
        .sort({ time: 1 }, (err, docs) => {
          if (err) {
            res.send({
              status: 400,
              message: err,
            });
          }
          res.send(docs);
        });
    } else {
      db.chatMessages
        .find({
          $or: [
            { from: "U2 Team", to: req.query.userName },
            { to: "U2 Team", from: req.query.userName },
          ],
        })
        .sort({ time: 1 }, (err, docs) => {
          if (err) {
            res.send({
              status: 400,
              message: err,
            });
          }
          res.send(docs);
        });
    }
  } catch (err) {
    console.error(err);
    res.send({
      status: 400,
      message: err,
    });
  }
};

export default getPublicMsgs;
