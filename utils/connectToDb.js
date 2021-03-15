const mongojs = require("mongojs");

const db = mongojs(
  `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}?authMechanism=SCRAM-SHA-1`,
  ["chatMessages"],
);

db.on("error", (err) => {
  console.log("database connection error");
  console.log(err);
});

db.on("connect", () => {
  console.log("database connected");
});

module.exports = db;
