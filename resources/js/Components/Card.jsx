export default function Card(props) {
    return (
        <div className="cardImg">
<<<<<<< HEAD
            <img className="img" src={"storage/storage/" + props.imgUrl} alt="" />
=======
            <img src={"storage/storage/" + props.imgUrl} alt=""/>
>>>>>>> c2ae501350475f4f81f5f2b7086f8bc3e619f1c3
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
