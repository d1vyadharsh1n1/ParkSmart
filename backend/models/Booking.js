const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  userId: String,
  vehicleNumber: String,
  slotNumber: Number,
  entryTime: Date,
  exitTime: Date,
  amount: Number,
  paid: Boolean,
});

module.exports = mongoose.model("Booking", BookingSchema);
