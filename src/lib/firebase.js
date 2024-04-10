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
const firebase = window.firebase.initializeApp(firebaseConfig);
const { FieldValue } = window.firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };
