import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ViewSlots from "./components/ViewSlots";
import MyBooking from "./components/MyBooking";
import BookingDetails from "./components/BookingDetails";

const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/" replace />;
};

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login setUser={setUser} />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute user={user}>
            <Dashboard user={user} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/viewslots"
        element={
          <ProtectedRoute user={user}>
            <ViewSlots />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mybookings"
        element={
          <ProtectedRoute user={user}>
            <MyBooking user={user} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookings/details/:bookingId"
        element={
          <ProtectedRoute user={user}>
            <BookingDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
