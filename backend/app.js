const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const photosRoutes = require("./routes/photos");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");

//SOCKET MAMAA MIA

app.use(cors());
const { Server } = require("socket.io");
const { createServer } = require("http");

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", //permitir cualquier origen para conectarse a la sala de chat
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

server.listen(4000, () => {
  console.log("server is running ok");
});

io.on("connection", (socket) => {
  console.log("User Connected: " + socket.id);

  socket.on("send_new_photo", (data) => {
    console.log("data ", data);
    socket.broadcast.emit("new_photo_added", data);
  });
  socket.on("send_photo_reject", (data) => {
    socket.broadcast.emit("photo_rejected", data);
  });
  socket.on("send_photo_accept", (data) => {
    console.log("data ", data);
    socket.broadcast.emit("photo_accepted", data);
  });
});
app.use(express.static("public"));

//Cors Usage
// app.use(cors());

app.use(express.json());
//Configuraciones
app.set("port", 4000);
app.set("json spaces", 2);

app.use("/photos", photosRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

//Iniciando el servidor, escuchando...
/*
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});*/

// app.get("/admin", (req, res) => {
//   res.sendFile("public/index.html");
// });

app.use((req, res, next) => {
  if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
    next();
  } else {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});

exports.io = io;
