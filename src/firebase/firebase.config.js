// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqawrVFOxoGdWFPHzwaOKgcau1hUF0LxA",
  authDomain: "winter-cloth-donate-private.firebaseapp.com",
  projectId: "winter-cloth-donate-private",
  storageBucket: "winter-cloth-donate-private.firebasestorage.app",
  messagingSenderId: "274151973391",
  appId: "1:274151973391:web:827f297330500d887bb97a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;