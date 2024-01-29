import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function (props) {
    return (
        <div  className="flex pt-4 justify-between">
            <div >
                <p className="text-gray-400">Trending in Turkey</p>
                <p className="font-bold">#SQUID</p>
                <p className="text-gray-400">2,066 Tweets</p>
            </div>
            <Link>
                <img src={'/src/assets/Images/Svg/Icons/More-2.svg'} alt='' />
            </Link>
        </div>
    )
}