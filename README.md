Workshop Booking Platform
This project is a redesign of the original Django-based workshop booking platform, rebuilt with a modern React frontend while keeping the existing Django backend completely intact.
Task Overview
This work was completed as part of the Python Screening Task: UI/UX Enhancement. The goal was to improve the user experience, performance, responsiveness, and accessibility of the existing platform using React.
Features
Mobile-first design - Optimized for students using mobile devices
Fast performance - React with Vite for instant loading
Accessibility - Semantic HTML, ARIA labels, keyboard navigation
Modern UI - Clean, consistent design system with CSS variables
SEO-friendly - Proper meta tags and semantic structure
Project Structure
workshop_booking/ # The Original Django backend
├── cms/
├── workshop_app/
├── manage.py
└── ...
frontend/ # New React frontend
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── styles/ # Global CSS
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── vite.config.js
Setup Instructions
Option 1: Run Frontend Only (for UI/UX evaluation)
cd frontend
npm install react-router-dom axios
npm run dev
The development server will start at http://localhost:5173. You can view the redesigned UI without needing the backend.
