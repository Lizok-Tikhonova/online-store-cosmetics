import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import style from "./Basket.module.css"
import { Link } from "react-router-dom";
import { getBasket } from "../../http/Product";
import { Context } from "../../index";
import { useContext, useEffect, useState} from "react";
import { observer } from 'mobx-react-lite'
import ItemBasket from "../../Components/ItemBasket/ItemBasket";

const Basket = observer(() => {

    const {product, user} = useContext(Context);
    const basketId = user.user.id


    useEffect(()=>{
        getBasket(basketId).then((data)=>{
            product.setBasket(data)
            product.setItogSum(itogSum())
        })
        
       
    }, [])

    function itogSum(){
        let prices = 0;
        // if (product.basket.length <= 0) return 0;
        product.basket.map((item) => (prices += Number(item.price * item.count)));
        return prices;
    }
    
    return (
        <>
        <NavBarShop/>
        <main>
            <div className="container">
                <div className={style.basketWrapper}>
                    <h2 className={style.title}>Ваша корзина</h2>
                    <div className={style.basket}>
                        <div className={style.products}>
                            {product.basket.map(item => 
                                <ItemBasket item={item} key={item.id}/>    
                            )}
                        </div>
                        <div className={style.payment}>
                            <h3 className={style.paymentTitle}>Итого</h3>
                            <div className={style.prices}>
                                <div className={style.price}>
                                    <p>Стоимость товаров</p>
                                    <p>{product.itogSum + ' p.'}</p>
                                </div>
                                <div className={style.delivery}>
                                    <p>Доставка</p>
                                    <p>бесплатно</p>
                                </div>
                                <div className={style.itog}>
                                    <p>К оплате</p>
                                    <p className={style.itogNum}>{product.itogSum + ' p.'}</p>
                                </div>
                            </div>
                            <button className={style.btn}>Оформить заказ</button>
                        </div>
                    </div>   
                </div>
            </div>
        </main>
        </>

    )
})

export default Basket;