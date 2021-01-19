require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./database/connection");
const todo = require("./routes/Todo/TodoModel").todo;
const user = require("./routes/User/UserModel").user;
const label = require("./routes/Label/LabelModel").label;
const status = require("./routes/Status/StatusModel").status;
const kategori = require("./routes/Kategori/KategoriModel").kategori;
const kategoriRoute = require("./routes/Kategori/KategoriRoute");
const userRoute = require("./routes/User/UserRoute");
const todoRoute = require("./routes/Todo/TodoRoute");
const labelRoute = require("./routes/Label/LabelRoute");
const statusRoute = require("./routes/Status/StatusRoute");
const authMiddleware = require("./middleware/authMiddleware");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET));

//all api routing herefe
app.use(process.env.ENDPOINT + "/user", userRoute);
app.use(process.env.ENDPOINT + "/kategori", authMiddleware, kategoriRoute);
app.use(process.env.ENDPOINT + "/label", authMiddleware, labelRoute);
app.use(process.env.ENDPOINT + "/status", authMiddleware, statusRoute);
app.use(process.env.ENDPOINT + "/todo", authMiddleware, todoRoute);

app.use(function (req, res, next) {
  if (!res.data) {
    return res.status(404).send({
      status: false,
      error: {
        reason: "Invalid Endpoint",
        code: 404,
      },
    });
  }
});
app.listen(8009, function () {
  db.establishedConnection();
  //first relate
  user.hasMany(todo);
  todo.belongsTo(user);
  //second relate
  label.hasMany(todo);
  todo.belongsTo(label);
  //third relate
  status.hasMany(todo);
  todo.belongsTo(status);
  //fourth relate
  kategori.hasMany(todo);
  todo.belongsTo(kategori);
  //fifth relate
  user.hasMany(label);
  label.belongsTo(user);
  //sixth relate
  user.hasMany(kategori);
  kategori.belongsTo(user);
  //seventh relate
  user.hasMany(status);
  status.belongsTo(user);

  console.log("Server started on 8009");
});
