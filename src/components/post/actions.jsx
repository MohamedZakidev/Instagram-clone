import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';
import { app } from '../../lib/firebase';
import { getFirestore, doc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';

export default function Actions({ docId, totalLikes, likedPhoto, handleFocus }) {
    const [toggleLiked, setToggleLiked] = useState(likedPhoto);
    const [likes, setLikes] = useState(totalLikes);

    const user = useContext(UserContext)
    const userId = user.uid

    //firebase
    const db = getFirestore(app)


    async function handleToggleLiked() {
        setToggleLiked(prev => !prev)
        const docRef = doc(db, "photos", docId);

        await updateDoc(docRef, {
            likes: toggleLiked ? arrayRemove(userId) : arrayUnion(userId),
        })

        setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
    }

    return (
        <>
            <div className="flex justify-between p-4">
                <div className="flex">
                    <svg
                        onClick={handleToggleLiked}

                        className={`w-8 mr-4 select-none cursor-pointer focus:outline-none ${toggleLiked ? 'fill-current text-red' : 'text-black'
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        tabIndex={0}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </div>
            </div >
            <div className="p-4 py-0">
                <p className="font-bold">{likes === 1 ? `${likes} like` : `${likes} likes`}</p>
            </div>
        </>
    )
}