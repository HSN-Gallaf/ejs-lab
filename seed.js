const mongoose = require("mongoose");
const Resturaunt = require("./model/Resturaunt");
const connect = require("./db");

connect();

const seedResturaunts = async () => {
  await Resturaunt.insertMany([
    {
      name: "Al Baik",
      isOpen: true,
      address: "City Centre Road 4650, Manama",
      phone: 55509876,
    },
    {
      name: "Haji's Traditional Cafe",
      isOpen: false,
      address: "150 شارع الحكومة, Manama",
      phone: 16892543,
    },
    {
      name: "Al Jabriya Turkish Restaurant",
      isOpen: true,
      address: "Rd No 2643, Busaiteen",
      phone: 17330108,
    },
    {
      name: "Urban Slice Pizza",
      isOpen: false,
      address: "Rd No 3421, Manama",
      phone: 143284832,
    },
  ]);
};

seedResturaunts();
