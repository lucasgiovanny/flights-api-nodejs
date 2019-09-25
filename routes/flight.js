const express = require("express");
const router = express.Router();
const Flight = require("../models/Flight");

// Routes

router.get("/", async (req, res) => {
  if (Object.keys(req.query).length > 0) {
    try {
      const { from, to, departure } = req.query;
      const flight = await Flight.find({
        from: from,
        to: to,
        date: new Date(departure)
      });
      res.json(flight);
    } catch (err) {
      res.json({ message: err });
    }
  } else {
    try {
      const flights = await Flight.find();
      res.json(flights);
    } catch (err) {
      res.json({ message: err });
    }
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
