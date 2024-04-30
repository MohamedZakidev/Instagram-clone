import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../lib/firebase";

const db = getFirestore(app)
const usersCollectionRef = collection(db, "users")
const photosCollectionRef = collection(db, "photos")

export async function doesUsernameExist(username, usersCollectionRef) {
    const result = query(usersCollectionRef, where("username", "==", username));
    const querySnapshot = await getDocs(result);
    return !querySnapshot.empty;
}

export async function getUserById(userId) {
    const result = query(usersCollectionRef, where("userId", "==", userId))
    const querySnapshot = await getDocs(result)

    if (querySnapshot.empty) {
        // Handle case where no user is found with the given userId
        return null;
    } else {
        // Assuming userId is unique, there should be only one document in the querySnapshot
        const userData = querySnapshot.docs.map(item => {
            return {
                ...item.data(),
                docId: item.id
            }
        });
        return userData;
    }
}

// export async function getUserFollowedPhotos(userId, followingUSerIds) {
//     const result = query(photosCollectionRef, where("userId", "in", followingUSerIds))
//     const querySnapshot = await getDocs(result)
//     console.log(querySnapshot.docs[0].data());
// }

