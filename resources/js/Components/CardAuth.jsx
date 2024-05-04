export default function CardAuth(props) {
    return (
        <div className="cardImg">
            <img src={props.imgUrl} alt="" />
            <div className="address">
                <p>{props.address}</p>
            </div>
            <div className="commentAuth">
                <p>{props.comment}</p>
            </div>
            <div className="verify">
                <img src="" alt="" />
            </div>
            <div className="btn">
                <p>100р</p>
            </div>
        </div>
    );
}