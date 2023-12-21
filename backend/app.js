const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const photosRoutes = require("./routes/photos");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");

app.use(express.static("public"));

//Cors Usage
app.use(cors());

app.use(express.json());
//Configuraciones
app.set("port", 4000);
app.set("json spaces", 2);

app.use("/photos", photosRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

//Iniciando el servidor, escuchando...
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});

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
