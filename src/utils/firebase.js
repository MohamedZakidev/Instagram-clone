import { collection, query, where } from "firebase/firestore";

export async function doesUsernameExist(username, usersCollectionRef) {
    const usersCollectionRef = collection(db, "users")


    const result = query(usersCollectionRef, where("username", "==", username));
    console.log(result);
}