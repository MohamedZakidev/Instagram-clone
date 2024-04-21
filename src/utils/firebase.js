import { getDocs, query, where } from "firebase/firestore";

export async function doesUsernameExist(username, usersCollectionRef) {
    const result = query(usersCollectionRef, where("username", "==", username));
    const querySnapshot = await getDocs(result);
    return !querySnapshot.empty;
}