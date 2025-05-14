import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCLZy7RklNGy6m8gFS2XJmEoQ-oY16PKMQ",
    authDomain: "voucher-marketplace.firebaseapp.com",
    projectId: "voucher-marketplace",
    storageBucket: "voucher-marketplace.firebasestorage.app",
    messagingSenderId: "406890188304",
    appId: "1:406890188304:web:0316b0bb03c5f50047c495",
    measurementId: "G-9S920WGXHB"
  };


export function fireStore() {
    // Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

return db
}

