import React, { useEffect } from 'react'

function NotFound() {
    useEffect(() => {
        document.title = '404 - Not Found'
    }, [])

    return (
        <div className='bg-gray-100'>
            <div className='max-w-screen-lg mx-auto'>
                <p className='text-center text-2xl'>Not Found!</p>
            </div>
        </div>
    )
}

export default NotFound
