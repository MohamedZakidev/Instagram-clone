// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   doc,
//   getDocs,
//   getDoc,
//   query,
//   where,
//   Firestore,
// } from "firebase/firestore/lite";
import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyDET9oIzIkfdl40W5knYXYRQKLUZo24_ac",
  authDomain: "instagram-clone-e788a.firebaseapp.com",
  projectId: "instagram-clone-e788a",
  storageBucket: "instagram-clone-e788a.appspot.com",
  messagingSenderId: "81803306307",
  appId: "1:81803306307:web:b31183a9598ac12369bbf6",
};

// Initialize Firebase
const firebase = window.firebase.initializeApp(firebaseConfig);
const { FieldValue } = window.firebase.firestore;
console.log(FieldValue);

export { firebase, FieldValue };
