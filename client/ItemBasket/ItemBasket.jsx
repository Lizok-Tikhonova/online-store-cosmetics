import style from "./ItemBasket.module.css"
import { Context } from "../../index";
import { useContext } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import cross from '../../img/cross.svg'
import minus from '../../img/minus.svg'
import plus from '../../img/plus.svg'

const ItemBasket = observer(({item}) => {
    const {user, product} = useContext(Context);
    const userId = user.user.id
    const productId = item.id


    const removeItemtoBasket = async() => {
        try{
            await axios.delete(`http://localhost:5000/api/basket/${userId}/${productId}`)
            product.basket.map((element) => {
                if(element.id == productId){ 
                    console.log(product.itogSum - element.price * element.count);
                    product.setItogSum(product.itogSum - element.price * element.count) 
                }
            })
            product.setBasket(product.basket.filter((i)=>i.id !== productId))
        } catch(e){
            console.log(e.message);
        }
    }

    const increment = async() => {
        try{
            await axios.put(`http://localhost:5000/api/basket/plus`,{userId, productId})
            product.setBasket(product.basket.map((element) => {
                if(element.id == productId){
                    return {...element, count: element.count + 1}
                } else{
                    return element
                }
            }))
            product.basket.map((element) => {
                if(element.id == productId){ 
                    product.setItogSum(product.itogSum + element.price) 
                }
            })
        } catch(e){
            console.log(e.message);
        }
    }


    const decriment = async() => {
        try{
            let count 
            product.basket.forEach((element) => {
                if(element.id == productId){
                    count = element.count
                }
            });
            if(count <= 1){
                return
            } else {
                await axios.put(`http://localhost:5000/api/basket/minus`,{userId, productId})
                product.setBasket(product.basket.map((element) => {
                    if(element.id == productId){
                        return {...element, count: element.count - 1}
                    } else{
                        return element
                    }
                }))
            }
            product.basket.map((element) => {
                if(element.id == productId){ 
                    product.setItogSum(product.itogSum - element.price) 
                }
            })
        } catch(e){
            console.log(e.message);
        }
    }

    return (
        <div className={style.item}>
            <div className={style.product}>
                <img src={'http://localhost:5000/' + item.img} alt="img" className={style.img} />
                <div className={style.desc}>
                    <p className={style.name}>{item.name}</p>
                    <p className={style.price}>{item.price + '  p.'}</p>
                    <p className={style.price}>{item.count !=1 && 'Итого: ' + item.price*item.count + '  p.'}</p>
                </div>
            </div>  
            <div className={style.info}>
                <div className={style.decr_increment}>
                    <button className={style.decriment} onClick={decriment}>
                        <img src={minus} alt="-" />
                    </button>
                    <p className={style.count}>{item.count}</p>
                    <button className={style.increment} onClick={increment}>
                        <img src={plus} alt="+" />
                    </button>
                </div>
                <button className={style.delete} onClick={removeItemtoBasket}>
                    <img src={cross} alt="del" className="img" />
                </button>
            </div>
        </div>
        
    )
})

export default ItemBasket;