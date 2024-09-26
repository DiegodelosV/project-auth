// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fir-auth-ca456.firebaseapp.com",
  projectId: "fir-auth-ca456",
  storageBucket: "fir-auth-ca456.appspot.com",
  messagingSenderId: "640252281070",
  appId: "1:640252281070:web:fc6c3894ff508bc58a33ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
