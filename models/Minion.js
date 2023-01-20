const mongoose = require("mongoose");

const minionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a Minion name"],
      maxLength: 100,
      unique: true,
    },
    age: Number,
    color: String,
  },
  {
    timestamps: true,
  }
);

// make model
const Minion = mongoose.model("Minion", minionSchema);

module.exports = Minion;
