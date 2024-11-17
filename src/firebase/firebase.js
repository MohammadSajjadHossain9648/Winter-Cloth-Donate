// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0M0stXtvZTg5hh1L67YuNmkpzCGSw23g",
  authDomain: "winter-cloth-donate.firebaseapp.com",
  projectId: "winter-cloth-donate",
  storageBucket: "winter-cloth-donate.firebasestorage.app",
  messagingSenderId: "150914478066",
  appId: "1:150914478066:web:ba819658c315be5563456b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;