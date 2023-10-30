const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const User = require("./models/user.model.js");
const app = express();
const axios = require("axios");
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("working");
  })
  .catch((err) => "err");

app.listen("8080", (req, res) => {
  console.log("Api is working");
});

app.get("/movies", async (req, res) => {
  const id = req.query.page;
  console.log({ id: id });

  try {
    const data = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: `${id}` },
      headers: {
        accept: "application/json",
        Authorization: process.env.Autherization,
      },
    });
    res.json(data.data);

    return data.data;
  } catch (error) {
    res.json(error);
  }
});

app.get("/movies/details", async (req, res) => {
  const id = req.query.id;
  console.log(id);

  try {
    const data = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US", id },
      headers: {
        accept: "application/json",
        Authorization: process.env.Autherization,
      },
    });
    res.json(data.data);

    return data.data;
  } catch (error) {
    res.json(error);
  }
});


app.get("/movies/search", async (req, res) => {
  const id = req.query.query;

  try {
    const data = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie`,
      params: {query: `${id}`, include_adult: 'false', language: 'en-US', page: '1'},
      headers: {
        accept: "application/json",
        Authorization: process.env.Autherization,
      },
    });
    res.json(data.data);

    return data.data;
  } catch (error) {
    res.json(error);
  }
});

app.get("/series", async (req, res) => {
  const id = req.query.page;
  console.log({ id: id });

  try {
    const data = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/airing_today",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:process.env.Autherization,
      },
    });
    res.json(data.data);

    return data.data;
  } catch (error) {
    res.json(error);
  }
});


app.get("/series/details", async (req, res) => {
  const {serId} = req.query;
  console.log(serId);

  try {
    const data = await axios({
      method: "GET",
      url:`https://api.themoviedb.org/3/tv/${serId}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:process.env.Autherization,
      },
          });
    res.json(data.data);

    return data.data;
  } catch (error) {
    res.json(error);
  }
});




app.get("/movrating", async (req, res) => {
  const {serId} = req.query;
  console.log(serId);

  try {
    const data = await axios({
      method: "GET",
      url:`https://api.themoviedb.org/3/movie/${id}/external_ids`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:process.env.Autherization,
      },
    });
    res.json(data.data);

    return data.data;
  } catch (error) {
    res.json(error);
  }
});







app.post("/api", (req, res) => {
  const { email, password } = req.body;

  const ali = User.findOne({ email: email }).then((data) => {
    if (data) {
      if (data.email === email) {
        res.json("success");
      } else {
        res.json("incorrect");
      }
    } else {
      res.json("no such user existed");
    }
  });
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("user created fola");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return res.send("not existed");
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return res.send("wrong credentials");
    const token = jwt.sign({ id: validUser._id }, process.env.PRIVATEKEY);
    if (validUser)
      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(validUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
