import Image from './assets/component/Image'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Links from './assets/component/Links';
import Button from './assets/component/Button';
import Squid from './assets/component/Squid';
import Showmore from './assets/component/Showmore';
import Home from './assets/Pages./Home';
import Profil from './assets/Pages./Profil';
import Follow from './assets/component/Follow';
function App() {
 

  return (
    <div className='flex ml-60'>
      <div className="w-2/12 ">
        <div className='fixed left-0 top-1 right-0 w-2/12 ml-60'>
          <div className='mt-8 w-2/12'>
            <Image src={'/src/assets/Images/Svg/Icons/Twitter.svg'} alt='' className='w-11 h-7 mb-2' />
            <Links to="/" src={'/src/assets/Images/Svg/Icons/Home-Fill.svg'} text='Home' className="flex gap-5 hover:bg-slate-700 w-32 mt-4 h-8 rounded-3xl" />
            <Links  src={'/src/assets/Images/Svg/Icons/Explore.svg'} text='Explore' className="flex gap-5  hover:bg-slate-700 mt-4 w-36 h-8 rounded-3xl" />
            <Links  src={'/src/assets/Images/Svg/Icons/Notifications.svg'} text='Notifications' className="flex gap-5 hover:bg-slate-700 w-44 h-8 mt-4 rounded-3xl" />
            <Links  src={'/src/assets/Images/Svg/Icons/Messages.svg'} text='Messages' className="flex gap-5 hover:bg-slate-700 w-36 h-8 mt-4 rounded-3xl" />
            <Links  src={'/src/assets/Images/Svg/Icons/Bookmarks.svg'} text='Bookmarks' className="flex gap-5 hover:bg-slate-700 w-40 h-8 mt-4 rounded-3xl" />
            <Links  src={'/src/assets/Images/Svg/Icons/Lists.svg'} text='Lists' className="flex gap-5 hover:bg-slate-700 w-32 h-8 mt-4 rounded-3xl" />
            <Links to="/Profil" src={'/src/assets/Images/Svg/Icons/Profile.svg'} text='Profil' className="flex gap-5 hover:bg-slate-700 w-36 mt-4 h-8 rounded-3xl" />
            <Links   src={'/src/assets/Images/Svg/Icons/More-2.svg'} text='More' className="flex gap-5 hover:bg-slate-700 w-32 mt-4 h-8 rounded-3xl" />
          </div>
          <div className='pt-10'>
            <Button className='bg-blue-400 w-20 text-white w-48 h-12 rounded-3xl' text="Post" />
          </div>
          <div className='flex mt-36 gap-2'>
            <Image src={'/src/assets/Images/Capture d’écran du 2024-01-19 10-36-26.png'} alt="" className="w-16 h-16 rounded-full" />
            <div className=' flex'>
              <h2>Rachaellus<br />@Rachael</h2>
              <Image src='/src/assets/Images/Svg/Icons/Private.svg' alt='' className='w-5 h-5' />
            </div>
            <div className='pb-3'>
              <Image src={'/src/assets/Images/Svg/Icons/More-2.svg'} alt='' className='' />
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/12 border border-slate-800 ml-2 ">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profil' element={<Profil />} />
        </Routes>
      </div>
      <div className="w-3/12 pl-4 mt-1 ">
        <div className='sticky left-0 top-0 right-0'>
          <div className='w-64 h-14'>
            <div className='flex gap-3 bg-gray-800 w-64 h-12 rounded-3xl '>
              <Image src='/src/assets/Images/Svg/Icons/Search.svg' alt='' className='w-5 h-5 ml-4 mt-4' />
              <input className=' w-48 h-10 mt-1 bg-gray-800' placeholder='Search' />
            </div>
          </div>
          <div className='bg-gray-800 w-64 h-140 pl-4 pr-1 pt-2 pb-2 rounded-xl'>
            <div className='flex justify-between pb-2'>
              <p className=' font-bold'>Trends for you</p>
              <Image src='/src/assets/Images/Svg/Icons/Settings.svg' className='w-6 h-6' />
            </div>
            <Squid />
            <Squid />
            <Squid />
            <Squid />
            <Showmore />
          </div>
          <div className=' bg-gray-800 mt-2 w-64 h-54 rounded-xl pl-2'>            
            <div className='flex pt-2 gap-2 '>
              <Image src="/src/assets/Images/Twitter UI Clone Design (Community)(4)/image 1.png" alt="" className="w-10 h-10 rounded-full" />
              <div className='flex gap-5'>
                <div>
                  <Follow className='font-bold' text="New york " />
                  <p className='text-gray-500'>@nytimes</p>
                </div>
                <Button className="w-14 h-6 mt-2 ml-4 bg-slate-200 rounded-3xl text-black " text="Follow" />
              </div>
            </div>
            <div className='flex pt-2 gap-2'>
              <Image src="/src/assets/Images/Twitter UI Clone Design (Community)(3)/Tweet-Profile-Photo(1).png" alt="" className="w-10 h-10 rounded-full" />
              <div className='flex gap-14'>
                <div>
                  <Follow className='font-bold' text="CNN" />
                  <p className='text-gray-500'>@CNN</p>
                </div>
                <Button className="w-14 h-6 mt-2 ml-4 bg-slate-200 rounded-3xl text-black " text="Follow" />
              </div>
            </div>
            <div className='flex gap-2 pt-2'>
              <Image src="/src/assets/Images/IMG_8160.jpg" alt="" className="w-10 h-10 rounded-full" />
              <div className='flex gap-10'>
                <div>
                  <Follow className='font-bold' text="Twitter" />
                  <p className='text-gray-500'>Twitter</p>
                </div>
                <Button className="w-14 h-6 mt-2 ml-3 bg-slate-200 rounded-3xl text-black " text="Follow" />
              </div>
            </div>
            <div className='ml-2'>
              <Showmore />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default App;