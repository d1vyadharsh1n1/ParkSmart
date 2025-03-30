const mongoose = require("mongoose");
const SlotSchema = new mongoose.Schema({
  location: String,
  totalSlots: Number,
  availableSlots: Number,
  slots: [{ number: Number, occupied: Boolean }],
});

module.exports = mongoose.model("Slot", SlotSchema);
