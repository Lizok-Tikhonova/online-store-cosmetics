import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import style from "./Basket.module.css"
import { Link } from "react-router-dom";
import { getBasket } from "../../http/Product";
import { Context } from "../../index";
import { useContext, useEffect } from "react";
import { observer } from 'mobx-react-lite'
import ItemBasket from "../../Components/ItemBasket/ItemBasket";

const Basket = observer(() => {

    const {product, user} = useContext(Context);
    const basketId = user.user.id

    useEffect(()=>{
        getBasket(basketId).then(data=>product.setBasket(data))
    }, [])

    console.log(product.basket[1]);

    return (
        <>
        <NavBarShop/>
        <main>
            <div className="container">
                <div className="basketWrapper">
                    <div className="listProduct">
                        <h2 className="title">ВАШИ ПРОДУКТЫ</h2>
                        <div className="products">
                            {product.basket.map(item => 
                                <ItemBasket item={item} key={item.id}/>    
                            )}
                        </div>
                        <hr />
                        <h2 className="itogPrice">3000 p.</h2>
                    </div>
                    <div className="formPayment">
                        тут будет форма оплаты
                        <button>Купить сейчас</button>
                        <Link to={'/shop'}>Вернуться к покупкам</Link>
                    </div>
                </div>
            </div>
        </main>
        </>

    )
})

export default Basket;