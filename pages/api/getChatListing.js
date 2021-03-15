const db = require("../../utils/connectToDb");

const getChatListing = async (req, res) => {
  try {
    db.chatMessages.distinct("from", { to: "U2 Team" }, (err, docs) => {
      res.send(docs.filter((doc) => doc !== "U2 Team"));
    });
  } catch (err) {
    console.error(err);
    res.send({
      status: 400,
      message: err,
    });
  }
};

export default getChatListing;
