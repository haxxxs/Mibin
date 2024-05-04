import Header from "@/Components/header/Header";
import Card from "@/Components/Card";
import CardAuth from "@/Components/CardAuth";

export default function Profile() {
    const arr = [
        {
            imgUrl: "imageTrash/trash1.jpg",
            address: "Площадь Куйбышева, Самара, Россия, 443099",
            comment: "Что за беспредел",
            verify: "imageTrash/trash1.jpg",
        },
        {
            imgUrl: "imageTrash/trash2.jpg",
            address: "Вольская, Саратов, Россия, 443088",
            comment: "Беда",
            verify: "imageTrash/trash2.jpg",
        },
    ];
    return (
        <>
            <Header />
            <div className="layoutWrapper">
                <div className="allCardWrapper">
                    <p>Мой кабинет</p>
                    <div className="card">
                        <div className="cardWrapper">
                            <div className="cardHeader">
                                <div className="photoheader">
                                    <p>Фото</p>
                                </div>
                                <div className="addressHeader">
                                    <p>Адрес</p>
                                </div>
                                <div className="descriptionAuth">
                                    <p>Комментарии к запросу</p>
                                </div>
                                <div className="verifyPhoto">
                                    <p>Фото подтверждение</p>
                                </div>
                                <div className="btn">
                                    <p>Мои вознаграждения</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {arr.map((obj) => (
                        <CardAuth
                            imgUrl={obj.imgUrl}
                            address={obj.address}
                            comment={obj.comment}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
