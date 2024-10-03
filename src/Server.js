const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3100;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/project_signup_login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("connected to mongoDB");
});

const customerSchema = new mongoose.Schema({
  name: String,
  password: String,
  title: String,
});

const CustomerData = mongoose.model("CustomerData", customerSchema);

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  CustomerData.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the password is in correct");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/signup", (req, res) => {
  CustomerData.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(port, (req, res) => {
  console.log(`Server listening at port ${port}`);
});
