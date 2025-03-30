import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Card sx={{ maxWidth: 400, p: 3, boxShadow: 3, textAlign: "center" }}>
        <CardContent>
          <Avatar
            sx={{ width: 80, height: 80, mb: 2, bgcolor: "primary.main" }}
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h5" fontWeight="bold">
            Welcome, {user.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            Phone: {user.phoneNumber}
          </Typography>
          <Box mt={2}>
            <img
              src={user.qrCode}
              alt="QR Code"
              style={{ width: "100px", height: "100px" }}
            />
          </Box>
          <Box display="flex" flexDirection="column" gap={2} mt={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate("/viewslots")}
            >
              View Slots
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => navigate("/mybookings")}
            >
              My Bookings
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
