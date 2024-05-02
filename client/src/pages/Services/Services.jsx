import React from "react"
import styles from "./Services.module.css"
import ItemServices from "./ItemServices/ItemServices"


const Services = ()=>{
    return(
        <main>
            <div className="container">
                <section className={styles.services}>
                    <ItemServices title={"Стрижки"} desc={"В стоимоть включено мытьё головы"}
                             titleItem1={'Женская'} price1={1200} titleItem2={'Мужская'} price2={1000} titleItem3={'Детская'} price3={900}/>

                    <ItemServices title={"Укладки"} desc={"В стоимоть включено мытьё головы"}
                             titleItem1={'Феном'} price1={600} titleItem2={'Локоны'} price2={1300} titleItem3={'Вечерняя'} price3={3500}/>

                    <ItemServices title={"Яркое окрашивание"} desc={"В стоимоть включено мытьё головы и обработка кончиков"}
                             titleItem1={'Карэ'} price1={4000} titleItem2={'Длина до лопаток'} price2={3000} titleItem3={'Длинные волосы'} price3={5000}/>

                    <ItemServices title={"Сложное окрашивание"} desc={"В стоимоть включено мытьё головы и обработка кончиков"}
                             titleItem1={'Карэ'} price1={6200} titleItem2={'Длина до лопаток'} price2={8000} titleItem3={'Длинные волосы'} price3={10000}/>
                </section>
            </div>
        </main>    
    )
}


export default Services;