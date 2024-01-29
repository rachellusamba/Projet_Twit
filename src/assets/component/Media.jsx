import { Link } from "react-router-dom"
import Paragraph from "./Paragraph"

export default function (props) {
    return (
        <div className="flex gap-10 ml-10">
            <Link to='https://twitter.com/LusambaRac26' >
                <div className="w-12 h-10 hover:bg-slate-800 pt-2">
                    <Paragraph text="Posts" className="text-gray-500" />
                </div>
            </Link>
            <Link to='https://twitter.com/LusambaRac26/with_replies' >
                <div className="w-12 h-10 hover:bg-slate-800 pt-2">
                    <Paragraph text="Replies" className="text-gray-500" />
                </div>
            </Link>
            <Link to='https://twitter.com/LusambaRac26/highlights' >
                <div className="w-20 h-10 hover:bg-slate-800 pt-2">
                    <Paragraph text="Highlights" className="text-gray-500" />
                </div>
            </Link><Link to='https://twitter.com/LusambaRac26/media' >
                <div className="w-12 h-10 ml-2 hover:bg-slate-800 pt-2">
                    <Paragraph text="Media" className="text-gray-500" />
                </div>
            </Link><Link to='https://twitter.com/LusambaRac26/likes' >
                <div className="w-10 h-10 hover:bg-slate-800 pt-2">
                    <Paragraph text="likes" className="text-gray-500" />
                </div>
            </Link>
        </div>
    )
}