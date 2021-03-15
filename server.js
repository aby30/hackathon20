const next = require("next");
const { Server } = require("http");
const dotenv = require("dotenv");
const io = require("socket.io");

dotenv.config();

const port = parseInt(process.env.PORT) || 3000;
const env = process.env.NODE_ENV || "production";
const dev = env !== "production";

// socket handler
const { socketHandler } = require("./server/socketHandler");

const nextApp = next({
  dir: ".",
  dev,
});
const handler = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(async () => {
    // create http server
    const httpServer = new Server((req, res) => {
      handler(req, res);
    });

    // create Socket.io server
    const socketServer = io(httpServer);
    // const socketHandler = createSocketHandler(socketServer);
    // const requestHandler = createRequestHandler(socketServer);
    // socketServer.engine["generateId"] = "uuid";
    socketServer.on("connection", socketHandler);

    // start listening
    httpServer.listen(port, () => {
      console.error("Web server started to listen port:", port);
    });
  })
  .catch((err) => {
    console.error("Next.js server failed to start", err);
  });
