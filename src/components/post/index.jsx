// import Header from './header';
// import Actions from './actions';
// import Comments from './comments';
import Image from "./image"
import Footer from './footer';

export default function Post({ content }) {
    return (
        <div className="rounded col-span-4 border bg-white mb-16">
            <Image src={content.imageSrc} caption={content.caption} />
            <Footer username={content.username} caption={content.caption} />
        </div>
    )
}