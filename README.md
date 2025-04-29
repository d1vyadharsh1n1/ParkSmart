# ParkSmart - Smart Parking System

## 🚀 Overview
ParkSmart is a real-time smart parking solution that utilizes **IoT-based sensors** and **AI-powered cameras** to detect and manage parking spot availability efficiently. It provides users with **QR-based entry/exit**, **digital payments**, and a **dashboard for booking and monitoring parking slots**.

## 📌 Features
- 🔍 **Real-time Parking Availability**: Uses **ultrasonic sensors** to monitor slot occupancy.
- 🎫 **QR Code-based Entry/Exit**: Users can scan QR codes for seamless check-in and check-out.
- 💳 **Integrated Payment System**: Supports **Razorpay** for easy transactions.
- 📊 **User Dashboard**: Displays available slots, booking history, and payment status.
- 📍 **Slot Reservation**: Users can book a slot in advance.
- ⚡ **Admin Panel**: Manages parking slots, user bookings, and revenue analytics.

## 🛠️ Tech Stack
### **Frontend**
- React.js (UI framework)
- React Router (Navigation)
- Tailwind CSS (Styling)

### **Backend**
- Node.js (Runtime)
- Express.js (Web framework)
- MongoDB (Database)
- Mongoose (ODM)

### **Hardware**
- **Ultrasonic Sensors** (Detects vehicle presence)
- **Raspberry Pi / ESP8266** (Processes sensor data)
- **QR Code Scanner** (Entry/Exit management)

## 🚀 Getting Started
### **1️⃣ Clone the Repository**
```bash
 git clone https://github.com/yourusername/ParkSmart.git
 cd ParkSmart
```

### **2️⃣ Setup Backend**
```bash
 cd backend
 npm install
 npm start
```

### **3️⃣ Setup Frontend**
```bash
 cd ../frontend
 npm install
 npm start
```

## 📡 API Endpoints
| Endpoint | Method | Description |
|----------|--------|--------------|
| `/api/slots` | GET | Fetch all available parking slots |
| `/api/bookings` | POST | Create a new booking |
| `/api/bookings/:id` | GET | Get details of a booking |
| `/api/payment` | POST | Process parking payment |

## 📝 Future Enhancements
- 🚘 **License Plate Recognition** for automatic entry.
- 📱 **Mobile App Integration** for better accessibility.
- 🏙️ **Scalability** to support large parking spaces like malls and airports.

## 📜 License
This project is licensed under the **MIT License**.

## 👨‍💻 Contributors
- **Divyadharshini R.** *(Project Lead, Developer)*
- [Your Team Members]

## 📞 Contact
For queries, contact: [your email]

