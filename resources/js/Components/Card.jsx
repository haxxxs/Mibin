export default function Card(props) {
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
                <button>Выполнить заявку</button>
            </div>
        </div>
    );
}
