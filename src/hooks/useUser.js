import React, { useContext, useEffect, useState } from 'react'
import useAuthListener from './useAuthListner'
import { getUserById } from '../utils/firebase'

export default function useUser() {
    const user = useAuthListener()
    const [activeUser, setActiveUser] = useState({})

    useEffect(() => {
        async function getUserObjById() {
            const response = await getUserById(user.uid)
            setActiveUser(response)
        }
        if (user && user.uid) {
            getUserObjById()
        }
    }, [user])
    return { user: activeUser }
}


