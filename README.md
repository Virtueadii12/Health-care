AI-Based Health Monitor

Overview

The AI-Based Health Monitor is a web application designed to predict diseases based on symptoms, calculate BMI, and provide real-time health tracking using AI models. This project integrates TensorFlow for disease prediction and Firebase for user data storage.

Features

Disease Prediction: Enter symptoms to receive an AI-predicted disease diagnosis.

BMI Calculation: Calculate BMI based on age, height, and weight, with personalized health recommendations.

Real-Time Health Tracking: Monitor essential health metrics and receive instant feedback.

Chatbot Support: Ask health-related questions and get AI-generated responses.

Firebase Integration: Store and retrieve user data securely.

Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Python (Flask)

Database: Firebase

Machine Learning: TensorFlow

Setup Instructions

Prerequisites

Install Python (3.8 or higher)

Install dependencies using:

pip install -r requirements.txt

Install Node.js (for Firebase integration)

Setup Firebase and get your API key

Running the Application

Start the Flask Server:

python app.py

Run the Frontend (Live Server Recommended)

Use VS Code Live Server Extension or open index.html manually.

API Endpoints

POST /predict

Request: { "symptoms": ["fever", "cough"] }

Response: { "predicted_disease": "Flu" }

Firebase Integration

Configure firebase-config.js with your Firebase credentials.

Store and retrieve user health data securely.

Future Improvements

Add user authentication.

Expand the AI model for more diseases.

Improve chatbot capabilities.

Contributors

[Your Name] - Developer

License

This project is open-source and available under the MIT License.