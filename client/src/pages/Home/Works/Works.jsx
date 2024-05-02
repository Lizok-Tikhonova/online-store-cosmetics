import React from 'react';
import { Link } from 'react-router-dom';
import { arrmasters } from "../../../helpers/Masters"
import style from "./Works.module.css"


const Works = ()=>{
    return(
        <section className={style.ourWorks}>
            <h2 className={style.title}>Наши работы</h2>
            <div className={style.wraperLink}>
                <Link to={`/masters`} className={style.link}>Перейти к мастерам</Link>
            </div>
            
            <div className={style.works}>
                <img src={arrmasters[0].portfolio[0]} alt="work1" className={style.img} />
                <img src={arrmasters[0].portfolio[1]} alt="work2" className={style.img} />
                <img src={arrmasters[0].portfolio[2]} alt="work3" className={style.img} />
                <img src={arrmasters[0].portfolio[3]} alt="work4" className={style.img} />
                <img src={arrmasters[0].portfolio[4]} alt="work5" className={style.img} />
                <img src={arrmasters[0].portfolio[5]} alt="work6" className={style.img} />
                <img src={arrmasters[0].portfolio[6]} alt="work7" className={style.img} />
                <img src={arrmasters[0].portfolio[7]} alt="work8" className={style.img} />
            </div>
        </section>
    )
}

export default Works