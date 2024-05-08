import style from "./ItemBasket.module.css"
import { Context } from "../../index";
import { useContext } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";

const ItemBasket = observer(({item}) => {
    const {user, product} = useContext(Context);
    const basketId = user.user.id
    const productId = item.id


    const removeItemtoBasket = async() => {
        try{
            await axios.delete(`http://localhost:5000/api/basket/${basketId}/${productId}`)
            product.setBasket(product.basket.filter((i)=>i.id !== productId))
        } catch(e){
            console.log(e.message);
        }
    }

    const increment = async() => {
        try{
            await axios.put(`http://localhost:5000/api/basket/plus`,{basketId, productId})
            product.setBasket(product.basket.map((element) => {
                if(element.id == productId){
                    return {...element, count: element.count + 1}
                } else{
                    return element
                }
            }))
        } catch(e){
            console.log(e.message);
        }
    }

    const decriment = async() => {
    }

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
                    <button className={style.decriment} onClick={decriment}>-</button>
                    <p className={style.count}>{item.count}</p>
                    <button className={style.increment} onClick={increment}>+</button>
                </div>
                <button className={style.delete} onClick={removeItemtoBasket}>
                    delete
                    <img src="" alt="" className="img" />
                </button>
                
            </div>
        </div>
    )
})

export default ItemBasket;