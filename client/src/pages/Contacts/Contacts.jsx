import style from "./Contacts.module.css"
import Button from "../../Components/UI/Button/Button";

import Iframe from 'react-iframe'

const Contacts = () => {
    return (
        <>
            <main>
                <div className="container">
                    <section className={style.contacts}>
                        <h1 className={style.title}>Контакты</h1>
                        <div className={style.map}>
                            <Iframe className={style.mapWorld} src="https://yandex.ru/map-widget/v1/?um=constructor%3A2172ce16529d985c4849fb4ac9160d1181949fb4981ef4d1f04ca2a81802aecb&amp;source=constructor" width="1012" height="687" frameborder="0"></Iframe>
                            <div className={style.contactsText}>
                                <div className={style.elem}>
                                    <h2 className={style.title2}>Режим работы</h2>
                                    <p className={style.desc}>C 10:00 до 21:00 (Пн-Пт)</p>
                                    <p className={style.desc}>C 11:00 до 20:00 (Сб-Вс)</p>
                                </div>
                                <div className={style.elem}>
                                    <h2 className={style.title2}>Адрес</h2>
                                    <p className={style.desc}>Георгиевская  улица д.<br/> 39, офис 309</p>          
                                </div>
                                    <Button mix={style.but}>посмотреть услуги</Button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Contacts;