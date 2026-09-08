const PORT = process.env.PORT || 4000;
import app from "./index.js";
import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`user connected user socket id is : ${socket.id}`);
});

io.on("disconnect", () => {
  console.log(`user disconnected`);
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
