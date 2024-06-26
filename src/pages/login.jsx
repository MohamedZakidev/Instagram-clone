import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

//firebase

export default function Login() {
    useEffect(() => {
        document.title = "Login - Instagram"
    }, [])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const isInvalid = !email || !password

    const navigate = useNavigate()

    const auth = getAuth()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate(ROUTES.DASHBOARD)
        }
        catch (error) {
            setEmail("")
            setPassword("")
            setError("Invalid login information")
        }
    }

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="iphone-with-profile.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className='mb-4 text-xs text-red-500'>{error}</p>}
                    <form onSubmit={handleLogin} method="POST">
                        <input
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="text"
                            placeholder="Email address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={
                                `bg-blue-500 text-white w-full rounded h-8 font-bold
                                ${isInvalid ? "cursor-not-allowed opacity-50" : undefined}
                                `
                            }
                        >
                            Log In
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <Link to={`/${ROUTES.SIGNUP}`} className="font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}