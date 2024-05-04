import { Link, Head } from "@inertiajs/react";
import Header from "@/Components/header/Header";
import Card from "@/Components/Card";
import { useEffect, useState } from "react";
import TrashComponent from "@/Components/aboba";

export default function Welcome({ auth, laravelVersion, phpVersion }) {


    const [trashData, setTrashData] = useState([]);
    const [searchCity, setSearchCity] = useState([]);
    const [profileItems, setProfileItems] = useState([]);

    const onChangeSearchInput = (event) => {
        setSearchCity(event.target.value);
    };

    useEffect(() => {
        axios
            .get("/trash")
            .then((response) => {
                setTrashData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching trash data:", error);
            });

        axios
            .get("/get_adresses")
            .then((response) => {
                // setSearchCity(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error("Error fetching address data:", error);
            });
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <Header />
            <div className="layoutWrapper">
                <div className="allCardWrapper">
                    <div className="">
                        <p>
                            {searchCity
                                ? `Поиск по адресу: "${searchCity}"`
                                : "Все города"}
                        </p>
                    </div>

                    <div className="inputClass">

                        <input

                            onChange={onChangeSearchInput}
                            value={searchCity}
                            type="text"
                            placeholder="Введите адрес"
                        ></input>
                    </div>
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
                                    <p>Комментарии</p>
                                </div>
                                <div className="btn">
                                    <p>Кнопка</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cmp">
                        {trashData.filter(item => item.address.includes(searchCity)).map((obj) => (
                            <Card
                                address={obj.address}
                                imgUrl={obj.photo_url}
                                comment={obj.request_comment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
