import React from "react"
import style from "./Masters.module.css"
import { arrmasters } from "../../helpers/Masters"
import Master from "./Master/Master"


const Masters = () => {
    return ( 
        <main>
            <div className="container">
                <section className={style.masters}>
                    <h1 className={style.title}>Наши мастера</h1>
                    <p className={style.slogan}>Мы все разные, но нас объединят Haircuts<span>&</span>Coloristics</p>
                    <div className={style.mastersList}>
                        {arrmasters.map((master, index)=>
                            <Master key={index} img={master.img} name = {master.name} id={index} statusWork={master.role}/>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
 
export default Masters;