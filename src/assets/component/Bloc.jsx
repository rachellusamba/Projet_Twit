import Paragraph from "./Paragraph"
import Image from "./Image";
import Like from "./Like";
import { useEffect, useState } from "react";
import axios from "axios"


export default function Bloc({ Tweets }) {

const [user, setUser] = useState([])
 useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users/" + Tweets.userId )
      .then((response) => {
        setUser(response.data)
         console.log(response.data);
      })
       .catch((err) => {
        console.log(err)
       });
   },[]
  )

    return (
        <div className='flex p-4 mt-4 border-b border-slate-800' >
            <div>
                <Image className=' rounded-full h-16 w-40 ' src={user.thumbnailProfil} alt="image" />
            </div>
            <div className='ml-6 '>
                <div className="flex mb-2">
                    <h2 className="text-white text-xl font-bold ">{user.name}</h2>
                    <Image src="/src/assets/Images/Twitter UI Clone Design (Community)(3)/Icons/Verified.png" Alt="Placeholder image" className="w-7 h-7" />
                    <p className="text-gray-400" >{user.email}</p>
                </div>
                <Paragraph text={Tweets.body} />
                {Tweets.url && <img className='pt-2 rounded-3xl  w-full objectif-cover h-60' src={Tweets.url} alt="" />}
                <div className='flex pt-8  gap-14 ml-6' >
                    <div className="flex gap-1">
                        <Image src="/src/assets/Images/Svg/Icons/Reply.svg" />
                        <Paragraph text={user.id} />
                    </div>
                    <div className="flex gap-1">
                        <Image src="/src/assets/Images/Svg/Icons/Retweet.svg" Name={Tweets.reTweets} />
                        <Paragraph text={Tweets.repost} />
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