// import Header from './header';
// import Actions from './actions';
// import Footer from './footer';
// import Comments from './comments';
import Image from "./image"

export default function Post({ content }) {
    console.log(content.imageSrc);
    return (
        <div className="rounded col-span-4 border bg-white mb-16">
            <Image src={content.imageSrc} caption={content.caption} />
        </div>
    )
}