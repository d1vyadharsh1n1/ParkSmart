import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";

const ViewSlots = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/slots");
        setSlots(res.data);
      } catch (error) {
        console.error("Error fetching slots:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  // Handle empty slots array to avoid NaN errors
  const totalSlots =
    slots.length > 0
      ? slots.reduce((sum, slot) => sum + (slot.totalSlots || 0), 0)
      : 0;
  const availableSlots =
    slots.length > 0
      ? slots.reduce((sum, slot) => sum + (slot.availableSlots || 0), 0)
      : 0;

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 2 }}>
        Available Parking Slots
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {slots.length > 0 && (
            <Card sx={{ mb: 3, p: 2, textAlign: "center" }}>
              <Typography variant="h6">Total Slots: {totalSlots}</Typography>
              <Typography variant="h6">
                Available Slots: {availableSlots}
              </Typography>
            </Card>
          )}

          <Grid container spacing={2}>
            {slots.map((slot) => (
              <Grid item xs={12} sm={6} md={4} key={slot._id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {slot.location}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {slot.slots.map((s) => (
                        <Box
                          key={s.number}
                          sx={{
                            width: 40,
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: s.occupied ? "red" : "green",
                            color: "white",
                            borderRadius: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          {s.number}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ViewSlots;
