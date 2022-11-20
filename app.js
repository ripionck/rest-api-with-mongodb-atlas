const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users.route");
const bodyParser = require("body-parser");
require("./config/db");

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);

//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

//route error
app.use((req, res, next) => {
  res.status(404).json({
    message: " 404 route not found.",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something broke.",
  });
});

module.exports = app;
