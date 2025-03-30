import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Grid,
} from "@mui/material";

const MyBooking = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/bookings/${user._id}`
        );
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Bookings
      </Typography>
      {loading ? (
        <CircularProgress sx={{ display: "block", mx: "auto" }} />
      ) : bookings.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          No bookings found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {bookings.map((booking) => (
            <Grid item xs={12} sm={6} key={booking._id}>
              <Card
                sx={{
                  backgroundColor: booking.exitTime
                    ? booking.paid
                      ? "#d3d3d3"
                      : "#cce7ff"
                    : "lightgreen",
                  cursor: "pointer",
                  "&:hover": { boxShadow: 3 },
                }}
                onClick={() => navigate(`/bookings/details/${booking._id}`)}
              >
                <CardContent>
                  <Typography variant="h6">
                    Vehicle No: {booking.vehicleNumber}
                  </Typography>
                  <Typography variant="body1">
                    Slot: {booking.slotNumber}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Status:{" "}
                    {booking.exitTime ? "Exited" : "Active (Still Parked)"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default MyBooking;
