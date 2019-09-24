const express = require("express");
const router = express.Router();
const Flight = require("../models/Flight");

// Routes

router.get("/", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Flight({
    from: req.body.from,
    to: req.body.to,
    date: req.body.date,
    company: req.body.company
  });
  try {
    const saveFlight = await post.save();
    res.json(saveFlight);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
