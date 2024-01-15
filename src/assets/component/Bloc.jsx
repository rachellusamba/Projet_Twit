import Paragraph from "./Paragraph"
import Image from "./Image";

export default function Bloc({ Tweets }) {

    const object = {
        "author_avatar": "https://picsum.photos/200?random=1609942590000",
        "source": "Apple",
        "date": 1609942590000,
        "favorites": "396603",
        "id": "1346822958006886400",
        "isVerified": false,
        "replies": "896",
        "retweets": "54694",
        "text": "Even Mexico uses Voter I.D.",
        "image": "https://picsum.photos/1024/200?random=1346822958006886400"
    }

    return (

        <div className='flex p-4 mt-4 border-b border-slate-800' >
            <div>
                <Image className=' rounded-full h-15 w-15 ' src={Tweets.author_avatar} alt="image" />
            </div>
            <div className='ml-6 '>
                <div className="flex m-2">
                    <h2 className="text-white"> {Tweets.source} </h2>
                    <Image src="Twitter UI Clone Design (Community)(3)/Icons/Verified.png" imageAlt="Placeholder image" className="w-6 h-6" />
                    <Paragraph text={Tweets.date} />
                </div>
                <Paragraph text={Tweets.text} />
                 {Tweets.image && <img className='pt-2 rounded-3xl  w-full objectif-cover h-60' src={Tweets.image} alt="" /> }
                <div className='flex pt-5  gap-10' >
                    <div className="flex">
                        <Image src="Twit.SVG/Icons/Reply.svg" />
                        <Paragraph text={Tweets.replies} />
                    </div>
                    <div className="flex">
                        <Image src="Twit.SVG/Icons/Retweet.svg" Name={Tweets.retweets} />
                        <Paragraph text={Tweets.retweets} />
                    </div>
                    <div className="flex">
                        <Image src="Twit.SVG/Icons/React.svg" Name={Tweets.favorites} />
                        <Paragraph text={Tweets.favorites} />
                    </div>

                    <Image src="Twit.SVG/Icons/Share.svg" Name="" />

                </div>
            </div>
        </div>

    );

}