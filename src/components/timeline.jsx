import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useFollowedUsersPhotos from '../hooks/useFollowedUsersPhotos'

function Timeline() {
    const photos = useFollowedUsersPhotos()

    return (
        <div className="container col-span-2">
            {!photos ?
                <Skeleton count={4} width={640} height={500} className='mb-5 rounded-3xl' /> :
                (
                    <p>iam photsto</p>
                )
            }
        </div>
    )
}

//	- count={4}
//	- width={640}
//	- height={500}
//	- className="mb-5"

export default Timeline
