export default function RequestForm() {
    return (
        <div>
            <div className="form">
                <div className="formWrapper">
                    <div className="formTitle">
                        <p>Форма заявки</p>
                    </div>
                    <div className="other">
                        <div className="addressForm">
                            <p>Адресс</p>
                            <input type="text" />
                        </div>
                        <div className="comForm">
                            <p>Комментарий к запросу</p>
                            <input type="text" />
                        </div>
                    </div>
                    <a class="chose2 chose">
                        <label
                            for="imageInput1"
                            class="lang"
                            key="Change image"
                        >
                            Добавить фото
                        </label>
                        <input
                            name="imageInput1"
                            type="file"
                            id="imageInput1"
                            accept="image/*"
                        ></input>
                    </a>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}
