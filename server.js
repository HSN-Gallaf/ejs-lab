const express = require("express");
const app = express();
const restaurants = require("./data");
const connect = require("./db");
const Resturaunt = require("./model/Resturaunt");
const env = require("dotenv").config();

app.use(express.static("public"));

connect();

app.get("/", (req, res) => {
  res.render("homepage.ejs");
});

app.get("/restaurants", async (req, res) => {
  try {
    const allResturants = await Resturaunt.find();

    res.render("restaurants/all-resturaunts.ejs", {
      restaurants: allResturants,
    });
  } catch (err) {
    console.log("Error Message:", err);
  }
});

app.get("/restaurants/:id", async (req, res) => {
  try {
    const oneRestaurant = await Resturaunt.findById(req.params.id);

    res.render("restaurants/resturaunts-details.ejs", {
      restaurant: oneRestaurant,
    });
  } catch (err) {
    console.log("Error Message:", err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});
