import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9pUBrGUDb77r0LuJ-BLweoTAN6f8e5RA",
  authDomain: "ll-fullstack-react.firebaseapp.com",
  projectId: "ll-fullstack-react",
  storageBucket: "ll-fullstack-react.firebasestorage.app",
  messagingSenderId: "910886681467",
  appId: "1:910886681467:web:64b1f9002a6023ff395bde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
