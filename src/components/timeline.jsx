import React from 'react'
import Post from './post'
import useFollowedUsersPhotos from '../hooks/useFollowedUsersPhotos'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Timeline() {
    const photos = useFollowedUsersPhotos()

    return (
        <div className="container col-span-2">
            {!photos ?
                <Skeleton count={4} width={640} height={500} className='mb-5 rounded-3xl' /> :
                (
                    photos.map(content => {
                        return (
                            <Post key={content.docId} content={content} />
                        )
                    })
                )
            }
        </div>
    )
}

export default Timeline
