import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Header() {
    const { firebase } = useContext(FirebaseContext);
    const user = false

    function handleSignUp(e) {

    }

    return (
        <header className="h-16 bg-white border-b mb-8">
            <div className="container mx-auto max-width-lg h-full p-3">
                <div className="flex justify-between items-center h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1>
                            <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                <img src="logo.png" alt="Instagram" className="mt-2 w-6/12" />
                            </Link>
                        </h1>
                    </div>
                    <div>
                        {
                            user ?
                                <Link to={`${ROUTES.SIGNUP}`} className='font-bold' onClick={handleSignUp}>Sign Out</Link> :
                                <>
                                    <Link to={`${ROUTES.LOGIN}`} className='bg-blue-500 text-white text-sm sm:text-base font-bold px-[1.2em] py-[.5em] rounded-[6px] mr-2 sm:mr-4 tracking-wider'>Log In</Link>
                                    <Link to={`${ROUTES.SIGNUP}`} className='font-bold text-sm sm:text-base tracking-wider'>Sign Up</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}