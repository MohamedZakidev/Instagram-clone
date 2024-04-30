import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Timeline() {
    const photos = null

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
