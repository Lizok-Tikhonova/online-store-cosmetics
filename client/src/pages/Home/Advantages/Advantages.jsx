import React from "react"
import AdvantagesItem from "./AdvantagesItem/AdvantagesItem"
import style from "./Advantages.module.css"
import person from './person.png'
import scissors from './scissors.png'
import shampu from './shampu.png'

const Advantages = () => {
    return ( 
        <section className={style.advantages}>
            <div className={style.advantagesList}>
                <AdvantagesItem img={shampu} desc={'Высококачественная косметика'}/>
                <AdvantagesItem img={scissors} desc={'Выполнено более 1000 работ'}/>
                <AdvantagesItem img={person} desc={'Счастливые клиенты каждый день'}/>
            </div>
        </section>
    );
}
 
export default Advantages;