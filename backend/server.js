const express = require("express");
const { userRoute } = require("./routes/userroutes");
const { connection } = require("./main");
const { Auth } = require("./middlewares/middleware");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "hello world" });
});

app.use(express.json());
app.use(cors());
app.use("/users", userRoute);
app.use(Auth);
app.listen(8009, async () => {
  try {
    await connection;
    console.log("server is running");
  } catch (error) {
    console.log(error);
    console.log("error....disconnect");
  }
});
