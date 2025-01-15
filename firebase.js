// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app); 
const db = firebase.firestore();
const auth = firebase.auth();
