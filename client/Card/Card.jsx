import { Link } from "react-router-dom";
import style from "./Card.module.css"
import basket from "../../img/basket.svg"
import heart from "../../img/heart.svg"
import heartRed from "../../img/heartRed.svg"
import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../../index";
import { observer } from 'mobx-react-lite'
import { getFavourite } from "../../http/Product";



const Card = observer(({productItem}) => {

    const {user, product} = useContext(Context)
    const basketId = user.user.id
    const favouritId = user.user.id

    console.log(user);

    const addtoBasket = async(basketId,productId) => {
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

    const addtoFavourite = async(favouritId,productId) => {
        try{
            await axios.post('http://localhost:5000/api/favourite',{favouritId, productId},
                {headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            product.setFavourite([...product.favourite, {id:productItem.id, img:productItem.img, name:productItem.name, price:productItem.price}])
        } catch(e){
            await axios.delete(`http://localhost:5000/api/favourite/${favouritId}/${productId}`)
            product.setFavourite(product.favourite.filter((i)=>i.id !== productId))
            console.log('ok')
        }
    }


    const check = ()=> {
        if(user.user.id){
            return product.favourite.some(favor => productItem.id === favor.id);
        }
    }

    
    return (
        <div className={style.card}>
            <Link to={`/product/${productItem.id}`}>
                <img src={'http://localhost:5000/' + productItem.img} alt="img" className={style.img}/>
            </Link>
            <div className={style.info}>
                <p className={style.name}>{productItem.name}</p>
                <p className={style.brand}>Ollin</p>
                <div className={style.buy}>
                    <p className={style.price}>{productItem.price + ' р.'}</p>
                    <div className={style.buttons}>
                        <button onClick={() => addtoFavourite(favouritId, productItem.id)}>
                            {check()?<img src={heartRed} alt="heart" />:<img src={heart} alt="heart" />}
                        </button>
                        <button onClick={() => addtoBasket(basketId, productItem.id)}>
                            <img src={basket} alt="basket" />
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
})

export default Card;