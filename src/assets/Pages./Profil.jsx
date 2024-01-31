import Button from "../component/Button";
import Image from "../component/Image";
import BlocT from "../component/BlocT";
import axios from "axios";
import { useState, useEffect } from "react";
import Media from "../component/Media";

export default function Profil() {
  const tab = [
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

  },

  {

      "author_avatar": "https://picsum.photos/200?random=1603037689000",

      "source": "Trump D.",

      "date": 1603037689000,

      "favorites": 62414,

      "id": "1317861704819118080",

      "isVerified": false,

      "replies": "258",

      "retweets": 16811,

      "text": "Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB"

  },

  {

      "author_avatar": "https://picsum.photos/200?random=1602377246000",

      "source": "Lauraine L.",

      "date": 1602377246000,

      "favorites": 34952,

      "id": "1315091604496158720",

      "isVerified": true,

      "replies": "85",

      "retweets": 10008,

      "text": "Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB",

      "image": "https://picsum.photos/200?random=1315091604496158720"

  }
  ]
  return (
    <>
      <div className="border border-slate-800">
        <div className="flex gap-10 ml-5">
          <Image src="/src/assets/Images/Flaticone.png" alt="" className="w-5 h-6 mt-3" />
          <div className="mt-2" >
            <h2 className="font-bold text-xl">Rachel Lusamba</h2>
            <p className="text-gray-500">0 posts</p>
          </div>
        </div>
        <div className="bg-[url('/src/assets/Images/IMG_8160.jpg')] h-40 pt-16">
          <Image src="/src/assets/Images/Capture d’écran du 2024-01-19 10-36-26.png" alt="" className=" ml-8 mt-10 w-32 h-32 rounded-full border-black " />
        </div>
        <div className="flex justify-between mt-4 mr-3 mb-2">
          <div className="mt-20 ml-4 mb-3">
            <h2 className="text-xl font-bold ">Rachel Lusamba</h2>
            <p className="text-gray-500">@LusambaRac26</p>
          </div>
          <Button className="border w-24 h-8 rounded-3xl" text="Edit profile" />
        </div>
        <div className="flex ml-4 mb-3">
          <p className="text-gray-500">7 Followings</p>
          <p className="text-gray-500">1 Followers</p>
        </div>
        <div className="flex gap-1 ml-4 mb-8">
          <Image className="w-5 h-5 mt-1"  src="/src/assets/Images/Twitter UI Clone Design (Community)(3)/Icons/Schedule.png" />
          <p>Joined January 2024</p>
        </div>
        <Media />
      </div>
      <div className="mt-4 ml-6">
        <h2 className="text-2xl font-bold" >Who to follow</h2>
        {
          tab.map((tab) => <BlocT Props={tab} />)
        }
      </div>
    </>)

}

