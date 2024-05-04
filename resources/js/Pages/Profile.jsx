import Header from "@/Components/header/Header";
import Card from "@/Components/Card";
import CardAuth from "@/Components/CardAuth";

export default function Profile() {
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
                    <CardAuth/>
                </div>
            </div>
        </>
    );
}
