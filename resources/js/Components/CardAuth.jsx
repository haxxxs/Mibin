export default function CardAuth(props) {
    console.log(props.imgUrl)
    return (
        <div className="cardImg">
            <img className="imgAuth" src={props.imgUrl} alt="" />
            
            <div className="addressAuth">
                <p>{props.address}</p>
            </div>
            <div className="commentAuth">
                <p>{props.comment}</p>
            </div>
            <div className="verify">
                <img className="verImg" src={props.imgUrl} alt="" />
            </div>
            <div className="btnAuth">
                <p>100р</p>
            </div>
        </div>
    );
}