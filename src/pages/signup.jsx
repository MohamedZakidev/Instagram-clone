import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
// firebase
import FirebaseContext from '../context/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { doesUsernameExist } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';


export default function SignUp() {
    // firebase
    const { app } = useContext(FirebaseContext)
    const db = getFirestore(app)
    const usersCollectionRef = collection(db, "users")
    const auth = getAuth();
    //

    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: ""
    })
    const { username, fullName, email, password } = formData

    const navigate = useNavigate()

    const [error, setError] = useState("")
    const isInvalid = !username || !fullName || !email || !password

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    async function handleSignup(e) {
        e.preventDefault()
        const doesUsernameExistResult = await doesUsernameExist(username, usersCollectionRef)

        if (doesUsernameExistResult) {
            try {
                const createdUserResult = await createUserWithEmailAndPassword(auth, email, password)

                await updateProfile(auth.currentUser, {
                    displayName: username
                })

                await addDoc(usersCollectionRef, {
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName: fullName,
                    emailAddress: email.toLowerCase(),
                    following: [],
                    followers: [],
                    dateCreated: Date.now()
                });
                navigate(ROUTES.DASHBOARD)

            } catch (error) {
                setFormData({
                    username: "",
                    fullName: "",
                    email: "",
                    password: ""
                })
                setError("Invalid login information")
            }
        } else {
            setError("That username is already taken")
        }
    }

    return (
        <div className="container flex mx-auto max-w-96 items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>

                    <h2 className='text-gray-500 text-sm font-medium text-center pb-4'>Sign up to see photos and videos from your friends.</h2>
                    {error && <p className='mb-4 text-xs text-red-500'>{error}</p>}
                    <form onSubmit={handleSignup} method="POST">
                        <input
                            aria-label="Enter your username"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            name="username"
                            value={username}
                            placeholder="username"
                            onChange={handleChange}
                        />
                        <input
                            aria-label="Enter your full name"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            name="fullName"
                            value={fullName}
                            placeholder="Full name"
                            onChange={handleChange}
                        />
                        <input
                            aria-label="Enter your email address"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Email address"
                            onChange={handleChange}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`
                                bg-blue-500 text-white w-full rounded h-8 font-bold
                                ${isInvalid ? "cursor-not-allowed opacity-50" : undefined}
                            `}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account?{` `}
                        <Link to={`/${ROUTES.LOGIN}`} className="font-bold text-blue">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}