import { useContext } from "react";
import FirebaseContext from "../context/firebase";
import { collection, getFirestore } from "firebase/firestore";

export async function doesUsernameExist(username) {

    const { app } = useContext(FirebaseContext)
    const db = getFirestore(app)
    const usersCollectionRef = collection(db, "users")

    const result = usersCollectionRef// work here
    console.log(result);
}