
export default function Header() {
    return (
        <div className="header">
            <div className="logoHeader">
                <img src="images/headerLogo.png" alt="Logo" />
                <p>Mibin</p>
            </div>
            <div className="headerBtns">
                <div className="firstBtn">
                    <button>Выполнить заявку</button>
                </div>
                <div className="secondBtn">
                    <button>Оставить заявку</button>
                </div>
            </div>
            <div className="rightSide">
                <div className="adress"></div>
                <div className="profile"></div>
            </div>

        </div>
    )
}
