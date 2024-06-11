import React from "react"
import AdvantagesItem from "./AdvantagesItem/AdvantagesItem"
import style from "./Advantages.module.css"

const Advantages = () => {
    return ( 
        <section className={style.advantages}>
            <h2>Почему выбирают нас?</h2>
            <div className={style.advantagesList}>
                <AdvantagesItem title={'Широкий ассортимент'} desc={'В нашем каталоге вы найдете товары для любого типа волос.'}/>
                <AdvantagesItem title={'Высокое качество'} desc={'Мы сотрудничаем только с проверенными поставщиками.'}/>
                <AdvantagesItem title={'Удобство покупок'} desc={'Совершать покупки у нас легко и приятно.'}/>
            </div>
        </section>
    );
}
 
export default Advantages;