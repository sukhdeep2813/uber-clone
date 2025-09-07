# Uber Clone (Legacy & Archived)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/sukhdeep2813/uber-clone/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Contributors](https://img.shields.io/badge/contributors-1-orange)](https://github.com/sukhdeep2813/uber-clone/graphs/contributors)

---

> **⚠️ Note:** This repository has been archived due to irrecoverable dependency issues.  
> A new and stable version is being developed in this repository: **[Link to your new repository]**

---

## Description

This project is a full-stack, cross-platform ride-hailing application inspired by Uber, built using React Native. The app replicates Uber’s core functionalities, including robust user authentication, real-time location tracking, ride booking, and secure payments via Stripe. Additionally, it features an advanced AI chatbot that enables users to set their start and destination points via text or voice commands, offering a modern and accessible user experience.

**Why archived?**  
Maintaining this project became infeasible due to deep-rooted dependency issues in both the frontend and backend stacks. For a more reliable and up-to-date codebase, please refer to the new repository linked above.

---

## 📸 Screenshots / Demo

<!-- 
Add screenshots or a GIF demonstrating the app here.
Example:
![App Demo](screens/demo.gif)
-->

---

## 🚗 Features

- **User Authentication**
  - Signup and login functionality
  - Secure authentication flow

- **Real-time Driver & Cab Tracking**
  - Live driver and cab positions displayed on Google Maps

- **Ride Booking**
  - User-friendly UI for selecting source and destination

- **Dynamic Fare Estimation**
  - Real-time calculation of trip fare based on distance and estimated time

- **Secure Payment Integration**
  - Stripe integration for seamless and secure payments

- **AI Chatbot**
  - Conversational interface for booking rides, powered by NLU (Rasa or equivalent)
  - Accepts both text and voice commands

- **Voice Command Support**
  - Fill in source and destination using speech recognition

- **Ride History & User Profile Management**
  - View previous rides, manage profile and settings

---

## 🛠️ Tech Stack

### Frontend

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend

- **Primary API (Payments, Users, Rides):**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
- **AI Chatbot API:**
  - [Python](https://www.python.org/)
  - [Rasa](https://rasa.com/) or similar NLU framework

### Database

- [PostgreSQL (via Neon)](https://neon.tech/)

### APIs & Services

- [Google Maps API](https://developers.google.com/maps/documentation)
- [Stripe API](https://stripe.com/docs/api)
- [Geocoding API](https://developers.google.com/maps/documentation/geocoding)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 16.x
- [npm](https://www.npmjs.com/) >= 8.x
- [Python](https://www.python.org/) >= 3.8
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- [PostgreSQL](https://www.postgresql.org/)
- [Neon Account](https://neon.tech/)
- [Stripe Account](https://dashboard.stripe.com/register)
- [Google Cloud Platform Account](https://console.cloud.google.com/)

### 1. Clone the Repository

```sh
git clone https://github.com/sukhdeep2813/uber-clone.git
cd uber-clone
```

### 2. Install Dependencies

#### Frontend (React Native App)

```sh
cd client
npm install
```

#### Backend (Node.js API)

```sh
cd ../server
npm install
```

#### AI Backend (Python, Rasa)

```sh
cd ../ai-backend
pip install -r requirements.txt
```

### 3. Environment Variables

Create a `.env` file in each service directory (`client`, `server`, `ai-backend`) using the provided `.env.example` as a template.

#### Example `.env.example`

```env
# Google Maps API Key
MAPS_API_KEY=your_google_maps_api_key_here

# Stripe API
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# Database
DATABASE_URL=postgres://user:password@host:port/dbname

# AI/NLU Service
RASA_SERVER_URL=http://localhost:5005

# Other
JWT_SECRET=your_jwt_secret_here
```

**Note:**  
- Never commit your real `.env` files or sensitive credentials to version control.
- You may need to add additional keys, depending on your setup.

### 4. Running the Application

#### Start the Backend API (Node.js)

```sh
cd server
npm run dev
```

#### Start the AI Backend (Python, Rasa)

```sh
cd ai-backend
rasa run --enable-api --cors "*"
```

#### Start the React Native App

```sh
cd client
expo start
```

**Tip:**  
If you are running on a real device, ensure your machine and device are on the same network.

---

## 📄 License

This project is distributed under the [MIT License](./LICENSE).
