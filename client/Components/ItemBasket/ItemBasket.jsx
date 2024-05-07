import style from "./ItemBasket.module.css"
import { Context } from "../../index";
import { useContext } from "react";


const ItemBasket = ({item}) => {
    const {product} = useContext(Context);
    console.log(item);


    return (
        <div className="item">
            <img src={'http://localhost:5000/' + item.img} alt="img" className={style.img} />
            <div className={item.info}>
                <div className={style.desc}>
                    <p className={style.name}>{item.name}</p>
                    {/* <p className={style.brand}>{product.barnd}</p> */}
                    <p className={style.price}>{item.price}</p>
                </div>
                <div className={style.decr_increment}>
                    <button className={style.decriment}>-</button>
                    <p className={style.count}>{item.count}</p>
                    <button className={style.increment}>+</button>
                </div>
                <button className={style.delete}>
                    delete
                    <img src="" alt="" className="img" />
                </button>
                
            </div>
        </div>
    )
}

export default ItemBasket;