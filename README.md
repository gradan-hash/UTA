# **2024 International Research Conference Web Application**

This web application simulates various sections of a virtual conference for the 2024 International Research Conference. It includes features such as registration, virtual conference interaction, mentorship, career development, and more. This app provides a user-friendly interface for attendees to interact with various sections of the conference such as schedule, registration, and contact details.

## **Table of Contents**

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Interaction](#interaction)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)

## **Features**

- **Homepage**: Overview of the conference, quick links to call for papers, registration, schedule, and news.
- **Call for Papers**: Allows users to view submission guidelines, important dates, and FAQs. Users can submit their papers through the form.
- **Schedule & Agenda**: Displays the conference schedule and allows users to export the schedule.
- **Registration**: Users can register for the conference and choose between Standard and VIP tickets. Simulated Stripe payment integration.
- **Virtual Conference**: Includes live streaming, interactive Q&A, and a live chat feature.
- **Career Development**: Provides resources for articles, workshops, and job boards to advance users' careers.
- **Mentorship**: Allows users to connect with experienced mentors.
- **Contact Us**: Allows users to send messages to the conference team and view contact information and the conference's location on Google Maps.

## **Getting Started**

Follow these instructions to set up and run the project on your local machine.

### **Prerequisites**

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [React.js](https://reactjs.org/)

### **Installation**

1. Unzip the file.

2. Navigate to the project directory.

   ```bash
   cd uta
   ```

3. Install the required dependencies.
   ```bash
   npm install
   ```

### **Running the Application**

1. Start the development server.

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to view the app.

## **Interaction**

### **Homepage**

- From the homepage, you can navigate to various sections using the navbar or quick links.

### **Call for Papers**

- View submission guidelines and important dates for paper submissions.
- Submit a paper through the form.

### **Schedule & Agenda**

- View the conference's schedule and sessions.
- Click the "Export Schedule" button to simulate downloading a CSV of the schedule.

### **Registration**

- Register for the conference by filling out the form with your name, email, and ticket type (Standard or VIP).
- Complete the payment via the simulated Stripe integration (dummy credit card info can be used).
- Alerts will notify you whether the payment was successful or failed.

### **Virtual Conference**

- Watch live streaming sessions (simulated).
- Participate in the interactive Q&A by submitting questions.
- Use the live chat feature to engage in discussions with other participants.

### **Career Development**

- Access resources such as articles, workshops, webinars, and the job board.

### **Mentorship**

- View mentor profiles and request mentorship from experienced professionals in your field.

### **Contact Us**

- Fill out the contact form to send a message.
- View the conference's email, phone, and location via Google Maps.

## **Technologies Used**

- **React.js**: JavaScript framework for building the user interface.
- **CSS**: For styling components with a responsive design.
- **Stripe API**: Simulated payment processing for registration.
- **Google Maps Embed API**: Display the conference location on the Contact Us page.

---
