# Tuklas

**Tuklas** – "Discover" in Filipino – is a mobile application designed to connect City University of Seattle (CityU) graduate students with the communities that need accessible, practical knowledge. Through one-on-one sessions and group workshops, CityU students and faculty can share their skills with startups, nonprofits, retirees, and career switchers looking for personal and professional growth.


1. [Project Overview](#project-overview)
2. [Demo](#demo)
3. [Features](#features)
4. [Screens](#screens)
5. [Technical Stack](#technical-stack)
6. [Installation](#installation)
7. [Folder Structure](#folder-structure)
8. [Contributors](#contributors)

---

## Project Overview

Tuklas is built with the mission of bridging the gap between skilled CityU students and the community members who need their expertise. The platform enables users to discover new skills, connect with mentors, and access workshops tailored to their interests and objectives. An AI-powered Personalized Recommendation feature helps users find sessions that best suit their needs.

- **Name Meaning**: "Tuklas" means "discover" in Filipino, symbolizing the journey of learning and growth.
- **Logo**: Inspired by the traditional Filipino dance "Tinikling," representing balance, adaptability, and rhythm, much like the learning journey.

---

## Demo

Click the image below to watch a video demo of Tuklas in action on YouTube:

[![Tuklas Demo](./assets/tuklas-demo.png)](https://youtu.be/G_OPhw06bQ8)

> [Watch the Demo on YouTube](https://youtu.be/G_OPhw06bQ8)

---

## Features

- **Explore Topics**: Users can explore a range of topics across multiple fields.
- **Learn at Your Own Pace**: Flexible sessions, personalized recommendations, and online workshops allow users to progress at their own speed.
- **Connect with Mentors**: Book sessions with CityU students and faculty to gain practical knowledge.
- **AI-Powered Personalized Recommendations**: Tailored session suggestions based on user preferences and feedback.

---

## Screens

### 1. Home
- Displays app logo, welcome message, and buttons to explore features: Explore Topics, Learn at Your Pace, Connect with Mentors.

### 2. About
- Provides background on Tuklas, including:
  - **Meaning of Tuklas** and logo inspiration.
  - **Problem and Goals**: Connecting CityU students with community members needing affordable, accessible knowledge.
  - **Solution**: A platform for booking personalized sessions and workshops.
  - **Technical Implementation**: Overview of AI-powered recommendation engine and tech stack.

### 3. Explore
- Explores available topics and showcases mentors’ expertise across various skills.

### 4. Learn
- Dedicated section for exploring sub-topics based on mentors’ skills.

### 5. Mentors
- Allows users to browse mentors, view profiles, and book sessions based on their skill needs.

---

## Technical Stack

- **Frontend**: React Native (using Expo)
- **Backend**: FastAPI, MongoDB
- **AI & Recommendations**: FastAPI backend integrates an AI-powered recommendation engine for personalized session suggestions.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/tuklas-app.git
   cd tuklas-app
   ```

2. **Install Dependencies: Ensure you have Node.js and Expo CLI installed.**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npx expo start --web
   ```

Open the app on your phone with the Expo Go app or in an emulator.


---


## Running the Project 
1. **Run the Ollama Serve**:
   ```bash
   ollama serve
   ```

2. **Run the Proxy Server**:
   ```bash
   cd proxy-server
   npm start
   ```

2. **Run the Mobile Frontend**:
   ```bash
   cd TuklasApp
   npx expo start --web
   ```
---


## Folder Structure

```
tuklas-app/
├── assets/                # Image and logo assets
├── components/            # Reusable UI components
├── constants/             # Constants like Colors, configuration files
├── hooks/                 # Custom hooks
├── screens/               # App screens: Home, About, Explore, etc.
├── navigation/            # Navigation setup for tabs and routing
├── App.tsx                # Root of the application
├── README.md              # Project documentation
└── package.json           # Dependency management
```

## Contributors
- Clark Ngo - Lead Developer
- Christine Emano - Design and Content Specialist
