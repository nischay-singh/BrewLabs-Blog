// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-dashboard-1a928.firebaseapp.com",
  projectId: "blog-dashboard-1a928",
  storageBucket: "blog-dashboard-1a928.appspot.com",
  messagingSenderId: "1015123974007",
  appId: "1:1015123974007:web:e81e79f0a94c2e5e03f372",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
