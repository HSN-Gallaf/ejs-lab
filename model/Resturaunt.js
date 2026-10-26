const mongoose = require("mongoose");

const resturauntSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 2,
    maxLength: 100,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
});

const Resturaunt = mongoose.model("Resturaunt", resturauntSchema);

module.exports = Resturaunt;
