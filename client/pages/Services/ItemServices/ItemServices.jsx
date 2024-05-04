import React from "react"
import styles from "./ItemServices.module.css"
import ItemList from "../ItemList/ItemList"

const ItemServices = ({title, desc, titleItem1, price1, titleItem2, price2, titleItem3, price3})=>{
    return(
        <div className={styles.itemServices}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.listItems}>
                <ItemList title={titleItem1} price={price1}/>
                <ItemList title={titleItem2} price={price2}/>
                <ItemList title={titleItem3} price={price3}/>
            </div>
        </div>
    )
}

export default ItemServices;