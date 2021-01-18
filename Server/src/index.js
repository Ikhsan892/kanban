require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./database/connection");
const todo = require("./routes/Todo/TodoModel");
const user = require("./routes/User/UserModel").user;
const label = require("./routes/Label/LabelModel");
const status = require("./routes/Status/StatusModel");
const kategori = require("./routes/Kategori/KategoriModel");
const kategoriRoute = require("./routes/Kategori/KategoriRoute");
const userRoute = require("./routes/User/UserRoute");
const todoRoute = require("./routes/Todo/TodoRoute");
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
  todo.hasMany(label);
  label.belongsTo(todo);
  //third relate
  todo.hasMany(status);
  status.belongsTo(todo);
  //fourth relate
  todo.hasMany(kategori);
  kategori.belongsTo(todo);

  console.log("Server started on 8009");
});
