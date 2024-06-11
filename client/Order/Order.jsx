import style from "./Order.module.css"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import { Context } from "../../index";
import { useContext, useEffect, useState } from "react";
import { getOrders, getOrdersList } from "../../http/Product";

const Order = () => {
    let [listOrders, setListOrders] = useState([])
    const [ordersProducts, setOrdersProducts] = useState({});

    const {product, user} = useContext(Context);
    const userId = user.user.id

    console.log(listOrders);
    
    useEffect(()=>{
        if(user.isAuth){
            getOrders(userId).then(data=>{
                setListOrders(data)
                data.forEach(order => {
                    getOrdersList(order.id).then(products => {
                        setOrdersProducts(lastState => ({
                            ...lastState, [order.id]: products
                        }))
                    })
                });
            })
        }
    }, [userId])

    return (
        <>
            <NavBarShop/>
            <main>
                <div className="container">
                    <div className={style.orderWrapper}>
                        <h2>История покупок</h2>
                        <ul className={style.orders}>
                            {listOrders.map(order => (
                                <li key={order.id}>
                                    <p>Заказ от {new Date(order.orderDate).toISOString().split('T')[0]}</p>
                                    <p>На сумму - {order.itogSum} рублей.</p>
                                    <ul>
                                        {ordersProducts[order.id]?.map(product => (
                                            <li key={product.id}>{product.name} в количестве - {product.count}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
                
                
            </main>
        </>

    )
}

export default Order;