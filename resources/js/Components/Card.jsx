import { useState } from "react";

export default function Card(props) {
    const [isAdded,setIsAdded] = useState(false)

    const onClickBtn = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className="cardImg">
            <img className="img" src={"storage/storage/" + props.imgUrl} alt="" />

            <div className="address">
                <p>{props.address}</p>
            </div>
            <div className="comment">
                <p>{props.comment}</p>
            </div>
            <div className="btn">
                <img onClick={onClickBtn} src={isAdded ? "images/buttonAdd.png" : "images/buttonAdded.png"} alt="" />
            </div>
        </div>
    );
}
