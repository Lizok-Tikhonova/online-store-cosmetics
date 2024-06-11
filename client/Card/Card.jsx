import { Link } from "react-router-dom";
import style from "./Card.module.css"
import basket from "../../img/basket.svg"
import heart from "../../img/heart.svg"
import heartRed from "../../img/heartRed.svg"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from 'mobx-react-lite'
import { useNavigate } from "react-router-dom"
import UpdatePrice from "../Modals/UpdatePrice/UpdatePrice";


const Card = observer(({productItem}) => {

    const {user, product} = useContext(Context)
    const userId = user.user.id
    const navigate = useNavigate()

    const [modalVisible, setModalVisible] = useState(false)

    const addtoBasket = async(userId,productId) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/basket',
                { userId, productId },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            
            const addedItem = response.data;
            const existingItem = product.basket.find(item => item.id === addedItem.id);
    
            if (existingItem) {
                existingItem.count += 1;
                product.setBasket([...product.basket]);
            } else {
                addedItem.count = 1;
                product.setBasket([...product.basket, addedItem]);
            }
        } catch (error) {
            if (error.response) {
                navigate("/auth");
            } else {
                console.error('Ошибка при добавлении товара в корзину:', error);
            }
        }
    };

    const addtoFavourite = async(userId,productId) => {
        try{
            await axios.post('http://localhost:5000/api/favourite',{userId, productId},
                {headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            product.setFavourite([...product.favourite, {id:productItem.id, img:productItem.img, name:productItem.name, price:productItem.price}])
        } catch(e){
            if(e.response.data.message === 'Не авторизован'){
                navigate("/auth")
                return
            }
            await axios.delete(`http://localhost:5000/api/favourite/${userId}/${productId}`)
            product.setFavourite(product.favourite.filter((i)=>i.id !== productId))
        }
    }

    const check = ()=> {
        if(user.user.id){
            return product.favourite.some(favor => productItem.id === favor.id);
        }
    }

    return (
        <>
            <div className={style.card}>
                <Link to={`/product/${productItem.id}`}>
                    <img src={'http://localhost:5000/' + productItem.img} alt="img" className={style.img}/>
                </Link>
                <div className={style.info}>
                    <p className={style.name}>{productItem.name}</p>
                    <p className={style.brand}>{productItem.brands_name}</p>
                    <div className={style.buy}>
                        <p className={style.price}>{productItem.price + ' р.'}</p>
                        {user.user.role !== 'admin' &&
                        <div className={style.buttons}>
                            <button onClick={() => addtoFavourite(userId, productItem.id)}>
                                {check()?<img src={heartRed} alt="heart" />:<img src={heart} alt="heart" />}
                            </button>
                            <button onClick={() => addtoBasket(userId, productItem.id)}>
                                <img src={basket} alt="basket" />
                            </button>
                        </div>}
                        {user.user.role === 'admin' &&
                            <button onClick={()=>setModalVisible(true)} className={style.btn}>
                                изменить цену
                            </button>
                        }
                    </div>
                </div>
            </div>
            <UpdatePrice active={modalVisible} setActive = {setModalVisible} id={productItem.id}/>
        </>
        
    )
})

export default Card;