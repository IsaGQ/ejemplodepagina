// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6cTOr-wiwOhUTFFi8gzzlGfSCoS3OPCM",
  authDomain: "hoteljireh-8a0d3.firebaseapp.com",
  projectId: "hoteljireh-8a0d3",
  storageBucket: "hoteljireh-8a0d3.firebasestorage.app",
  messagingSenderId: "587947389772",
  appId: "1:587947389772:web:459e472bbae0612e1655e9",
  measurementId: "G-BHB2X26MKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);