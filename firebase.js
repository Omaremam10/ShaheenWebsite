// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5LCQf4Ike69o5lRoVVuhYllV0-FT1YAc",
  authDomain: "shaheenfalcon-b2ea2.firebaseapp.com",
  projectId: "shaheenfalcon-b2ea2",
  storageBucket: "shaheenfalcon-b2ea2.firebasestorage.app",
  messagingSenderId: "823963121655",
  appId: "1:823963121655:web:cc6d1745a7ac0b517320f2",
  measurementId: "G-KGEGEPVWHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export Firebase auth for usage in login.js or other files
export { auth, signInWithEmailAndPassword };
