import React, { useRef } from 'react';

// import Header from './header';
import Image from './image';
import Actions from './actions';
import Footer from './footer';
// import Comments from './comments';

export default function Post({ content }) {
    const commentInput = useRef(null);
    const handleFocus = () => commentInput.current.focus();

    return (
        <div className="rounded col-span-4 border bg-white mb-16">
            <Image src={content.imageSrc} caption={content.caption} />
            <Actions
                docId={content.docId}
                totalLikes={content.likes.length}
                likedPhoto={content.userLikedPhoto}
                handleFocus={handleFocus}
            />
            <Footer username={content.username} caption={content.caption} />
        </div>
    )
}