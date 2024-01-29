import Button from "../component/Button";
import Image from "../component/Image";
import Bloc from "../component/Bloc";
import axios from "axios";
import { useState, useEffect } from "react";
import Media from "../component/Media";

export default function Profil() {

  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        setPost(response.data)
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []
  )

  return (
    <>
      <div className="border border-slate-800">
        <div className="flex gap-10 ml-5">
          <Image src="/src/assets/Images/Flaticone.png" alt="" className="w-5 h-6 mt-3" />
          <div className="" >
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
          post.map((tab) => <Bloc Tweets={tab} />)
        }
      </div>
    </>)

}

