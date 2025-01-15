// firebase.js

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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Admin login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}
