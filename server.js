const express = require("express");
const app = express();
const restaurants = require("./data");
const env = require("dotenv").config();
const PORT = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("homepage.ejs");
});

app.get("/restaurants", (req, res) => {
  res.render("restaurants/all-resturaunts.ejs", { restaurants: restaurants });
});

app.get("/restaurants/:id", (req, res) => {
  const restaurantFound = restaurants.find(
    (restaurant) => restaurant.id === Number(req.params.id),
  );
  res.render("restaurants/resturaunts-details.ejs", {
    restaurant: restaurantFound,
  });
});

app.listen(process.env.PORT, () => {
  console.log(process.env.ZAID_MESSAGE);
});
