// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYxYn3kB3yh5LYmdDenrbB4Bv6l6Zm2fo",
  authDomain: "euphoria-262f2.firebaseapp.com",
  projectId: "euphoria-262f2",
  storageBucket: "euphoria-262f2.firebasestorage.app",
  messagingSenderId: "991406466029",
  appId: "1:991406466029:web:36e6caaf841f278adcbde4",
  measurementId: "G-ZYH4TQMNHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };