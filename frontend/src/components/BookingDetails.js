import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookingDetails = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/bookings/details/${bookingId}`
        );
        setBooking(res.data);
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };

    fetchBooking();
  }, [bookingId]);

  if (!booking) return <p>Loading...</p>;

  const cardStyle = {
    backgroundColor: booking.exitTime
      ? booking.paid
        ? "#d3d3d3" // Grey for paid bookings
        : "#cce7ff" // Light blue for unpaid
      : "lightgreen", // Green if not exited
    padding: "20px",
    borderRadius: "8px",
    textAlign: "left",
    cursor: "pointer",
    marginBottom: "10px",
  };

  const handlePayment = () => {
    console.log("Redirecting to payment...");
    // You can integrate Razorpay/Stripe here
  };
  return (
    <div style={cardStyle}>
      <h2>Booking Details</h2>
      <p>Vehicle No: {booking.vehicleNumber}</p>
      <p>Slot: {booking.slotNumber}</p>
      <p>Entry Time: {new Date(booking.entryTime).toLocaleString()}</p>
      <p>
        Exit Time:{" "}
        {booking.exitTime
          ? new Date(booking.exitTime).toLocaleString()
          : "Not yet exited"}
      </p>
      <p>Amount: ₹{booking.amount}</p>
      <p>
        <strong>Status:</strong> {booking.paid ? "Paid ✅" : "Pending ❌"}
      </p>
      {!booking.paid && booking.exitTime && (
        <button onClick={handlePayment}>Pay Now</button>
      )}
    </div>
  );
};

export default BookingDetails;
