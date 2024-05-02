import React from "react"
import styles from "./ItemList.module.css"


const ItemList = ({title, price})=>{
    return (
        <div className={styles.itemList}>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price}</p>
        </div>
    )
}

export default ItemList;