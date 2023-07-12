import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt8qb1mmM_1ufw4jucMO7gUvsXsK67hdU",
  authDomain: "react-house-marketplace-ffed2.firebaseapp.com",
  projectId: "react-house-marketplace-ffed2",
  storageBucket: "react-house-marketplace-ffed2.appspot.com",
  messagingSenderId: "740102513601",
  appId: "1:740102513601:web:1a51c9219ce902c29a0540",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
