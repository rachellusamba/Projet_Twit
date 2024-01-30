import Image from "./Image"

export default function Follow (props) {
    return (
        <div className="flex gap-1">
            <p className={props.className}>{props.text}</p>
            <Image src="/src/assets/Images/Twitter UI Clone Design (Community)(3)/Icons/Verified.png" alt="" className="w-6 h-6" />
        </div>
    )
}