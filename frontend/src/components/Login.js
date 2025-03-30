import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Paper,
  Box,
} from "@mui/material";

const Login = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegistering
      ? "http://localhost:5000/api/auth/register"
      : "http://localhost:5000/api/auth/login";
    const data = isRegistering
      ? { name, phoneNumber, password }
      : { name, password };

    try {
      const res = await axios.post(endpoint, data);

      setUser(res.data.user);
      navigate("/dashboard"); // 👈 Redirect to Dashboard after login
    } catch (error) {
      console.error("Error:", error.response?.data?.message || error.message);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f4f4f4",
      }}
    >
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">ParkSmart</Typography>
          {user && (
            <Button color="error" variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Login/Register Card */}
      <Paper
        elevation={3}
        sx={{ p: 4, mt: 5, width: 350, textAlign: "center" }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          {isRegistering ? "Register" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            margin="normal"
          />
          {isRegistering && (
            <TextField
              fullWidth
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              margin="normal"
            />
          )}
          <TextField
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            {isRegistering ? "Register" : "Login"}
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "primary.main", cursor: "pointer" }}
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering
            ? "Already have an account? Login"
            : "New user? Register"}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
