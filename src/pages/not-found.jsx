import React, { useEffect } from 'react'

function NotFound() {
    useEffect(() => {
        document.title = '404 - Not Found'
    }, [])

    return (
        <div className='bg-gray-100'>
            <div className=''></div>
        </div>
    )
}

export default NotFound
