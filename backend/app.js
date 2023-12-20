const express = require("express");
const cors = require("cors");

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
