import React from "react"
import style from './AdvantagesItem.module.css'

const AdvantagesItem = ({img, desc})=>{
    return(
        <div className={style.advantagesItem}>
            <img src={img} alt="instruments" className={style.img} />
            <p className={style.desc}>{desc}</p>
        </div>
    )
}    

export default AdvantagesItem