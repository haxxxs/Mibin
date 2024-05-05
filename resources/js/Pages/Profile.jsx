import Header from "@/Components/header/Header";
import Card from "@/Components/Card";
import CardAuth from "@/Components/CardAuth";

export default function Profile() {
    const arr = [
        {
            imgUrl: "imageTrash/trash1.jpg",
            address: "Площадь Куйбышева, Самара, Россия, 443099",
            comment: "Что за",
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
                <div className="allProfileWrapper">
                    <div className="myProfile">
                        <p>Мой кабинет</p>    
                    </div>
                    <div className="dataColumn">

                    </div>
                    <div className="dataWrapper">
                        <p>Имя</p>
                        <input type="text" className="inputBar" placeholder="Имя"></input>
                        <p>Фамилия</p>
                        <input type="text" className="inputBar" placeholder="Фамилия"></input>
                        <p>Отчество</p>
                        <input type="text" className="inputBar" placeholder="Отчество"></input>
                        <p>Город</p>
                        <input type="text" className="inputBar" placeholder="Город"></input>
                        <p>Дата рождения</p>
                        <input type="text" className="inputBar" placeholder="Дата рождения"></input>
                        {/* <div className="cardHeader">
                            <div className="photoheader">
                                <p>Фото</p>
                            </div>
                            <div className="addressHeader">
                                <p>Адрес</p>
                            </div>
                            <div className="descriptionAuth">
                                <p>Комментарии</p>
                            </div>
                            <div className="verifyPhoto">
                                <p>Подтверждение</p>
                            </div>
                            <div className="btn">
                                <p>Вознаграждения</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                    {/* {arr.map((obj) => (
                        <CardAuth
                            imgUrl={obj.imgUrl}
                            address={obj.address}
                            comment={obj.comment}
                        />
                    ))} */}
            </div>
        </>
    );
}
