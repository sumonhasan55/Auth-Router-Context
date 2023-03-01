// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMN18HB986Iuf1-sPFzRnFkUWgOha4E8I",
  authDomain: "auth-router-context-46fe4.firebaseapp.com",
  projectId: "auth-router-context-46fe4",
  storageBucket: "auth-router-context-46fe4.appspot.com",
  messagingSenderId: "933594430628",
  appId: "1:933594430628:web:3d7096349c0854989f7a31",
  measurementId: "G-YMDQL0170D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;