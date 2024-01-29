import { BrowserRouter, Link } from "react-router-dom"
export default function Links(props) {
    return (
        <Link to={props.to} >
            <div className={props.className}>
                <img src={props.src} alt={props.all} className='w-11 h-7' />
                <p className=' font-bold'>{props.text}</p>
            </div>
        </Link>
    )
}