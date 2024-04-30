import React from 'react'
import useUser from '../../hooks/useUser'


function Sidebar() {
    const { user } = useUser()

    const { docId, following, userId, username, fullName } = user

    return (
        <div>
            sidebar
        </div>
    )
}

export default Sidebar
