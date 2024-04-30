import React, { useContext, useEffect, useState } from 'react'
import { getUserById } from '../utils/firebase'
import useUser from './useUser'
import { getUserFollowedPhotos } from '../utils/firebase'

export default function useFollowedUsersPhotos() {
    const { user } = useUser()
    const [photos, setPhotos] = useState()

    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = ["2"]
            if (followingUserIds && followingUserIds.length > 0) {
                const followedUserPhotos = await getUserFollowedPhotos(followingUserIds);

                followedUserPhotos.sort((a, b) => b.dateCreated = a.dateCreated)
                setPhotos(followedUserPhotos);
            }
        }
        getTimelinePhotos()
    }, [user])

    return photos
}
