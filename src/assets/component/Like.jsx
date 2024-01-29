
import { useState } from "react"

export default function Like(props) {

    const [imageLike, setimageLike] = useState(false)
    const [like, setLike] = useState(0)
    const handleclick = () => {
        
        setimageLike(!imageLike)
        imageLike ? setLike(like - 1) : setLike(like + 1)

    }

    const likeIcones = imageLike ? '/src/assets/Images/heart-solid.svg' : "/src/assets/Images/heart-thin.svg";

    return (
        <>
            <div className="flex w-6 gap-1" onClick={handleclick}>
                <img className="" src={likeIcones} alt="" />
                <span >{like}</ span >
            </div>
        </>
    )
} 