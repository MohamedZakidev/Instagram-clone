// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyCyDDHCe45peLv2U7XIYQ7yeVD7B6nhMCc",
  authDomain: "instagram-clone-d87ed.firebaseapp.com",
  projectId: "instagram-clone-d87ed",
  storageBucket: "instagram-clone-d87ed.appspot.com",
  messagingSenderId: "710992942978",
  appId: "1:710992942978:web:0a5758251a98399273619b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// seedDatabase(firebase);
console.log(app);

export { db };
