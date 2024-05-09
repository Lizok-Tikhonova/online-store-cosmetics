import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import style from "./Product.module.css"
import heart from '../../img/heart.svg'
import basket from '../../img/basket.svg'
import {getOneProduct} from "../../http/Product";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import axios from "axios";
import { Context } from "../../index";



const Product = () => {
    const {id} = useParams()
    let [product, setProduct] = useState({})
    useEffect(()=>{
        product = getOneProduct(id).then(data=>setProduct(data))
    }, [])

    const{user} = useContext(Context)
    const basketId = user.user.id
    const productId = +id
    

    const addtoBasket = async(e) => {
        try{
            await axios.post('http://localhost:5000/api/basket',{basketId, productId},
                {headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
        } catch(e){
            alert(e.response.data.message)
        }
        
    }

    
    return (
        <>
        <NavBarShop/>
        <main>
            <div className="container">
                <div className={style.wrapperProduct}>
                    <div className={style.product}>
    <                   img src={'http://localhost:5000/' + product.img} alt="img" className={style.img} />
                        <div className={style.info}>
                            <h2 className={style.name}>{product.name}</h2>
                            <p className={style.name}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit vel officiis sint reiciendis obcaecati beatae fuga aliquid modi aut eius explicabo dolorum expedita doloremque commodi, itaque reprehenderit illo excepturi deserunt pariatur necessitatibus in iste! Sed libero voluptate magnam praesentium!</p>
                            <div className={style.buttons}>
                                <button className={style.btn} onClick={addtoBasket}>
                                    Добавить в корзину
                                    <img src={basket} alt="heart" />
                                </button>
                                <button className={style.btn}>
                                    Отложить
                                    <img src={heart} alt="heart" />
                                </button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </main>
        </>

    )
}

export default Product;