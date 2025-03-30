import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const loginUser = async (data) => {
  return axios.post(`${API_URL}/auth/login`, data);
};

export const registerUser = async (data) => {
  return axios.post(`${API_URL}/auth/register`, data);
};

export const fetchSlots = async () => {
  return axios.get(`${API_URL}/slots`);
};

export const fetchUserBookings = async (userId) => {
  return axios.get(`${API_URL}/bookings/${userId}`);
};

export const fetchBookingDetails = async (bookingId) => {
  return axios.get(`${API_URL}/bookings/details/${bookingId}`);
};

export const makePayment = async (bookingId) => {
  return axios.get(`${API_URL}/pay/${bookingId}`);
};
