const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const greetRouter = require("./routes/greet.js");
const settingRouter = require("./routes/set_ps.js");
const firstGame = require("./routes/first_game.js");
const getPassword = require("./routes/show_password.js");
const secondGame = require("./routes/second_game.js");
const thirdGame = require("./routes/third_game.js");
const fourthGame = require("./routes/fourth_game.js");
const solvePassword = require("./routes/solve_password.js");
const result = require("./routes/result.js");
const present = require("./routes/present.js");
const bye = require("./routes/bye.js");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(greetRouter);

app.use(settingRouter);

app.use(firstGame);

app.use(getPassword);

app.use(secondGame);

app.use(thirdGame);

app.use(fourthGame);

app.use(solvePassword);

app.use(result);

app.use(present);

app.use(bye);

app.use("/setting.json", (req, res, next) => {
  res.sendFile(path.join(__dirname, "setting.json"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
