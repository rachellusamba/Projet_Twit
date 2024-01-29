import Button from "../component/Button"
import Image from "../component/Image"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Bloc from "../component/Bloc"
import BlocT from "../component/BlocT"


export default function Home(props) {

  const [post, setPost] = useState([])
  const [posts, setPoste] = useState([])
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
  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        setPoste(response.data)
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []
  )

  const [postContent, setPostContent] = useState(''); 

  // axios.all([
  //   axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users"),
  //   axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
  // ])
  // .then(
  //   axios.spread(() => {
  //     console.log(post, setPost);
  //     console.log(posts, setPoste);
  //   })
  // )
  // .catch((err) => console.log(err));

 

  return (
    <div className="w-100 ">
      <div className="justify-between flex m-4 ">
        <h1 className='text-white font-bold text-3xl'>Home</h1>
        <Image src={"/src/assets/Images/Svg/Icons/Timeline-Prop.svg"} className="w-15 h-10 ml-10" />
      </div>

      <div className=" border-b border-t border-slate-800 mt-4">
        <div className='flex gap-2'>
          <div>
            <Image src={"/src/assets/Images/Capture d’écran du 2024-01-19 10-36-26.png"} className="w-14 h-14 rounded-full m-3" />
          </div>
          <textarea name="content" value={postContent}  onChange={e => setPostContent(e.target.value)} className='bg-black resize-y text-white mt-4 w-44 h-10' placeholder=" What ' s  happening ?" rows="2"></textarea>
        </div>
        <div className="flex justify-between  ml-16 mb-2 pr-2">
          <div className="flex ml-3 ">
            <Image src={"/src/assets/Images/Twitter UI Clone Design (Community)(4)/Tweet-Editör/Butons/Top-Tweets.png"} alt="" className="w-8 h-8" />
            <Image src={"/src/assets/Images/Twitter UI Clone Design (Community)(4)/Tweet-Editör/Butons/Top-Tweets-1.png"} alt="" className="w-8 h-8" />
            <Image src={"/src/assets/Images/Twitter UI Clone Design (Community)(4)/Tweet-Editör/Butons/Top-Tweets-2.png"} alt="" className="w-8 h-8" />
            <Image src={"/src/assets/Images/Twitter UI Clone Design (Community)(4)/Tweet-Editör/Butons/Top-Tweets-3.png"} alt="" className="w-8 h-8" />
            <Image src={"/src/assets/Images/Twitter UI Clone Design (Community)(4)/Tweet-Editör/Butons/Top-Tweets-4.png"} alt="" className="w-8 h-8" />
          </div>
          <div>
            <Button text="Post" type="submit" className=' bg-blue-400 w-20 h-8 rounded-3xl text-white' />
          </div>
        </div>
      </div>
      <div>      
         {
          post.map((objet, index) => <Bloc Tweets={objet} key={index} />)
        } 
        {
          posts.map((obje, index) => <BlocT Props={obje} key={index} />)
        } 
      </div>
    </div>
  )
}