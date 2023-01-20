const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;

// middleware
app.use(express.json());
app.use(cors());

// routes
const minionRoutes = require("./routes/minion.route");

app.get("/", async (req, res) => {
  res.send("app is running");
});

app.use("/api/v1/minion", minionRoutes);

module.exports = app;
