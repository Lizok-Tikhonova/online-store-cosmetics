import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import style from "./Basket.module.css"
import { Link } from "react-router-dom";
import { getBasket } from "../../http/Product";
import { Context } from "../../index";
import { useContext, useEffect, useState} from "react";
import { observer } from 'mobx-react-lite'
import ItemBasket from "../../Components/ItemBasket/ItemBasket";
import CardForm from "../../Components/CardForm/CardForm";
import axios from "axios";
import emailjs from '@emailjs/browser'

const Basket = observer(() => {

    const {product, user} = useContext(Context);
    const userId = user.user.id

    const [formValid, setFormValid] = useState(false);

    useEffect(()=>{
        if(user.isAuth){
            getBasket(userId).then((data)=>{
                product.setBasket(data)
                product.setItogSum(itogSum())
            })
        }
        
    }, [])

    const clearBasket = async() => {
        try{
            await axios.delete(`http://localhost:5000/api/basket/list/${userId}/${itogSum()}`)
            product.setBasket([])
        } catch(e){
            console.log(e.message);
        }
    }

    function itogSum(){
        let prices = 0;
        product.basket.map((item) => (prices += Number(item.price * item.count)));
        return prices;
    }
    
    const sendEmail = () => {
        emailjs.send('service_zzvehza', 
        'template_zp4gf3t',
        {message:  `Ваш заказ на сумму ${itogSum()} рублей принят и находится в обработке. В ближайшее время с вами свяжется менеджер. Спасибо, что выбираете нас.`,
         email: user.user.login,
         name:'Haircuts&Coloristics',   
        }, 
        'NRv9X6wN0B3gXDiUd')
    }

    const wrapperFuction = () => {
        if(formValid){
            clearBasket()
            sendEmail()
        } 
        console.log(formValid);
    }

    if(product.basket.length > 0){
        return (
            <>
            <NavBarShop/>
            <main>
                <div className="container">
                    <div className={style.basketWrapper}>
                        <h2 className={style.title}>Ваша корзина</h2>
                        <div className={style.basket}>
                            <div className={style.makeBay}>
                                <div className={style.products}>
                                    {(product.basket.length)>0?
                                        product.basket.map(item => 
                                        <ItemBasket item={item} key={item.id}/> ):"Здесь пока пусто"
                                    }
                                    <Link to='/shop' className={style.link}>← Продолжить покупки</Link> 
                                </div>
                                
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
                                <div className={style.formPayment}>
                                    <CardForm setFormValid={setFormValid}/>
                                </div>
                                <button className="btn" onClick={wrapperFuction} type='reset'>Оформить заказ</button>
                            </div>
                        </div>                 
                    </div>
                </div>
            </main>
            </>
        )
    } else{
        return (
            <>
            <NavBarShop/>
            <main>
                <div className="container">
                    <div className={style.basketWrapper}>
                        <h2 className={style.title}>Ваша корзина пока пуста</h2>
                        <Link to='/shop' className={style.link}>← Вернуться в каталог</Link> 
                    </div>
                </div>
            </main>
            </>
    
        )
    }
    

})

export default Basket;