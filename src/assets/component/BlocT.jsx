import Paragraph from "./Paragraph";
import Image from "./Image";
import Like from "./Like";

export default function BlocT({ Props }) { 
    
    const object = 
        {

            "author_avatar": "https://picsum.photos/200?random=1604084613000",
    
            "source": "CNN",
    
            "date": 1604084613000,
    
            "favorites": "44842",
    
            "id": "1322252819299135488",
    
            "isVerified": false,
    
            "replies": "1024",
    
            "retweets": "9563",
    
            "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",
    
            "image": "https://picsum.photos/200?random=1322252819299135488"
    
        }

    return (

        <div className='flex p-4 mt-4 border-b border-slate-800' >
            <div>
                <Image className=' rounded-full h-15 w-15 items-center  ' src={Props.author_avatar} alt="image" />
            </div>
            <div className='ml-6 '>
                <div className="flex m-2">
                    <h2 className="text-white text-2xl font-bold">{Props.source}</h2>
                    <Image src="/src/assets/Images/Twitter UI Clone Design (Community)(3)/Icons/Verified.png" Alt="Placeholder image" className="w-6 h-6" />
                    <Paragraph text={"Lmr@achael"} />
                </div>
                <Paragraph text={Props.text} />
                {Props.image && <img className='pt-2 rounded-3xl  w-full objectif-cover h-60' src={Props.image} alt="" />}
                <div className='flex pt-5  gap-10' >
                    <div className="flex">
                        <Image src="/src/assets/Images/Svg/Icons/Reply.svg" />
                        <Paragraph text={Props.like} />
                    </div>
                    <div className="flex">
                        <Image src="/src/assets/Images/Svg/Icons/Retweet.svg" Name= {""} />
                        <Paragraph text={Props.retweets} />
                    </div>
                    <div className="">
                        <Like />
                    </div>
                    <Image src="/src/assets/Images/Svg/Icons/Share.svg" Name="" />
                </div>
            </div>
        </div>

    );

}