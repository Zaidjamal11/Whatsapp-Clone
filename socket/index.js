import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("user connected");

  let users = [];

  const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}


socket.on("addUser", userData => {
  addUser(userData, socket.id);
  io.emit("getUsers", users);
})

});
