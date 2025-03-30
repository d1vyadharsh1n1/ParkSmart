const express = require("express");
const Slot = require("../models/Slot");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const slots = await Slot.find();
    res.json(slots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
