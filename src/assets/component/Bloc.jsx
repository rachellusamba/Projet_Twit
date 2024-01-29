import Paragraph from "./Paragraph"
import Image from "./Image";
import Like from "./Like";

export default function Bloc({ Tweets }) {
  

    return (

        <div className='flex p-4 mt-4 border-b border-slate-800' >
            <div>
                <Image className=' rounded-full h-16 w-16 ' src={Tweets.profil} alt="image" />
            </div>
            <div className='ml-6 '>
                <div className="flex mb-2">
                    <h2 className="text-white text-xl font-bold "> {Tweets.name} </h2>
                    <Image src="/src/assets/Images/Twitter UI Clone Design (Community)(3)/Icons/Verified.png" Alt="Placeholder image" className="w-7 h-7" />
                    <p className="text-gray-400" >{Tweets.email}</p>
                </div>
                <Paragraph text={Tweets.body} />
                {Tweets.thumbnailProfil && <img className='pt-2 rounded-3xl  w-full objectif-cover h-60' src={Tweets.thumbnailProfil} alt="" />}
                <div className='flex pt-4  gap-10 ml-6' >
                    <div className="flex gap-1">
                        <Image src="/src/assets/Images/Svg/Icons/Reply.svg" />
                        <Paragraph text={Tweets.like} />
                    </div>
                    <div className="flex gap-1">
                        <Image src="/src/assets/Images/Svg/Icons/Retweet.svg" Name={Tweets.reTweets} />
                        <Paragraph text={Tweets.retweets} />
                    </div>
                    <div >
                        <Like />
                    </div>
                    <Image src="/src/assets/Images/Svg/Icons/Share.svg" className="ml-5" />
                </div>
            </div>
        </div>

    );

}