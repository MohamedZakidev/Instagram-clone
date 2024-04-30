import React, { useContext, useEffect, useState } from 'react'
import { getUserById } from '../utils/firebase'
import useUser from './useUser'
// import { getUserFollowedPhotos } from '../utils/firebase'

export default function useFollowedUsersPhotos() {
    const { user } = useUser()

    const [userId, setUserId] = useState(user.userId)
    const [photos, setPhotos] = useState()
    console.log(user);

    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = await getUserById(userId);
        }
        getTimelinePhotos()
    }, [])

    return photos
}
