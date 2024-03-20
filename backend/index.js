const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  phnNumber: Number,
  password: String,
  confirmPassword: String,
  image: String,
});

//model
const userModel = mongoose.model("user", userSchema);

// sign up
app.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);

    // Check if the email already exists in the database
    const existingUser = await userModel.findOne({ email: email });
    // console.log(existingUser);
    if (existingUser) {
      return res.send({
        message: "Email id is already registered",
        alert: false,
      });
    }

    // If the email doesn't exist, create a new user
    const newUser = new userModel(req.body);
    await newUser.save();

    res.send({ message: "Successfully signed up", alert: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

//api login
app.post("/login", async (req, res) => {
  const { email } = req.body;
  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      // console.log(result);
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({ message: "login successful", alert: true, data: dataSend });
    } else {
      res.send({ message: "Email is not available.", alert: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

//server is running
app.listen(PORT, () => console.log("Server is runing at port: " + PORT));
