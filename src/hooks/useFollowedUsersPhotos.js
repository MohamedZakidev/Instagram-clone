import React, { useContext, useEffect, useState } from 'react'
import { getUserById } from '../utils/firebase'
import useUser from './useUser'
import { getUserFollowedPhotos } from '../utils/firebase'

export default function useFollowedUsersPhotos() {
    const { user } = useUser()
    const userId = user.userId
    const [photos, setPhotos] = useState()

    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = ["2"] // to be changed
            if (followingUserIds && followingUserIds.length > 0) {
                const followedUserPhotos = await getUserFollowedPhotos(userId, followingUserIds);

                followedUserPhotos.sort((a, b) => b.dateCreated = a.dateCreated)
                setPhotos(followedUserPhotos);
            }
        }
        getTimelinePhotos()
    }, [user])

    return photos
}
