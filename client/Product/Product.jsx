import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import style from "./Product.module.css"
import heart from '../../img/heart.svg'
import basket from '../../img/basket.svg'
import {getOneProduct} from "../../http/Product";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import heartRed from '../../img/heartRed.svg'
import { useNavigate } from "react-router-dom"

import axios from "axios";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";



const Product = observer(() => {
    const {id} = useParams()
    let [prod, setProduct] = useState({})
    useEffect(()=>{
        prod = getOneProduct(id).then(data=>setProduct(data))
    }, [])

    const{user, product} = useContext(Context)
    const userId = user.user.id
    const productId = +id
    const navigate = useNavigate()
    

    const addtoBasket = async(e) => {
        try{
            const response = await axios.post('http://localhost:5000/api/basket',{userId, productId},
                {headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }) 
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
    }

    const addtoFavourite = async() => {
        try{
            await axios.post('http://localhost:5000/api/favourite',{userId, productId},
                {headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            product.setFavourite([...product.favourite, {id:prod.id, img:prod.img, name:prod.name, price:prod.price}])
        } catch(e){
            if(e.response.data.message === 'Не авторизован'){
                navigate("/auth")
                return
            }
            await axios.delete(`http://localhost:5000/api/favourite/${userId}/${productId}`)
            console.log(product.favourite);
            product.setFavourite(product.favourite.filter((i)=>i.id !== productId))
            console.log('ok')
        }
    }

    const check = ()=> {
        console.log(product.favourite);
        return product.favourite.some(favor => prod.id === favor.id);
    }

    return (
        <>
        <NavBarShop/>
        <main>
            <div className="container">
                <div className={style.wrapperProduct}>
                    <div className={style.product}>
    <                   img src={'http://localhost:5000/' + prod.img} alt="img" className={style.img} />
                        <div className={style.info}>
                            <h2 className={style.name}>{prod.name}</h2>
                            <p className={style.info}>{prod.info}</p>
                            {user.user.role !== 'admin' &&
                            <div className={style.buttons}>
                                <button className={style.btn} onClick={addtoBasket}>
                                    Добавить в корзину
                                    <img src={basket} alt="heart" />
                                </button>
                                <button className={style.btn} onClick={addtoFavourite}>
                                    Отложить
                                    {check()?<img src={heartRed} alt="heart" />:<img src={heart} alt="heart" />}
                                </button>
                            </div>}
                        </div>
                    </div>
                   
                </div>
            </div>
        </main>
        </>

    )
})

export default Product;