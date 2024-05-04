import { Link, Head } from "@inertiajs/react";
import Header from "@/Components/header/Header";
import Card from "@/Components/Card";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const arr = [
        {
            imgUrl: "imageTrash/trash1.jpg",
            address: "Площадь Куйбышева, Самара, Россия, 443099",
            comment: "Что за беспредел",
        },
        {
            imgUrl: "imageTrash/trash2.jpg",
            address: "Вольская, Саратов, Россия, 443088",
            comment: "Беда",
        },
    ];

    return (
        <>
            <Head title="Welcome" />
            <Header />
            <div className="layoutWrapper">
                <div className="allCardWrapper">
                    <p>Запросы на выполнение</p>
                    <div className="card">
                        <div className="cardWrapper">
                            <div className="cardHeader">
                                <div className="photoheader">
                                    <p>Фото</p>
                                </div>
                                <div className="addressHeader">
                                    <p>Адрес</p>
                                </div>
                                <div className="description">
                                    <p>Комментарии к запросу</p>
                                </div>
                                <div className="btn">
                                    <p>Кнопка</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cmp">
                        {arr.map((obj) => (
                            <Card
                                address={obj.address}
                                imgUrl={obj.imgUrl}
                                comment={obj.comment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
