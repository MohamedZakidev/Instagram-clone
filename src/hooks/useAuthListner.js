import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useAuthListener() {
    const auth = getAuth()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")))

    useEffect(() => {
        const listner = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser))
                setUser(authUser)
            }
            else {
                localStorage.removeItem("authUser")
                setUser(null)
            }
        })

        return () => listner()
    }, [user])

    return user
}