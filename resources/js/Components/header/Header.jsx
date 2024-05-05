import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <div className="header">
            <div className="logoHeader">
                <img src="images/headerLogo.png" alt="Logo" />
                <p>Mibin</p>
            </div>
            <div className="headerBtns">
                <a href="/trash_cr" className="noDecor">
                    <div className="secondBtn">
                        <button>Оставить заявку</button>
                    </div>
                </a>
            </div>
            <div className="rightSide">
                <a href="/get_adresses" className="noDecor">
                <div className="adress">
                    <img src="images/address.png" alt="address" />
                    <p>Адресса</p>
                </div>
                </a>
                <Link href="/Profile" className="noDecor">
                    <div className="profile">
                        <img src="images/profile.png" alt="" />
                        <p>Мой кабинет</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
