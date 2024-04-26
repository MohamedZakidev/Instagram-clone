import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../lib/firebase";

export async function doesUsernameExist(username, usersCollectionRef) {
    const result = query(usersCollectionRef, where("username", "==", username));
    const querySnapshot = await getDocs(result);
    return !querySnapshot.empty;
}

export async function getUserById(userId) {
    const db = getFirestore(app)
    const usersCollectionRef = collection(db, "users")
    const result = query(usersCollectionRef, where("userId", "==", userId))
    const querySnapshot = await getDocs(result)

    if (querySnapshot.empty) {
        // Handle case where no user is found with the given userId
        return null;
    } else {
        // Assuming userId is unique, there should be only one document in the querySnapshot
        const userData = querySnapshot.docs[0].data();
        return userData;
    }
}