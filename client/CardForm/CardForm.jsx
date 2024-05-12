import React, {useState} from 'react';
import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css"
import style from './CardForm.css'

import { getBasket } from "../../http/Product";
import { Context } from "../../index";
import { useContext, useEffect} from "react";
import { observer } from 'mobx-react-lite';
import axios from 'axios';




const CardForm = () => {  

    const {product, user} = useContext(Context);
    const basketId = user.user.id

    const clearBasket = async() => {
        try{
            await axios.delete(`http://localhost:5000/api/basket/+${basketId}`)
            product.setBasket([])
        } catch(e){
            console.log(e.message);
        }
    }


    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));//ключ name
    };
      const handleInputFocus = (e) => {
        setState((prev) => ({ ...prev, focus: e.target.name }));
    };

    return(
            <div className="wrapperPayment">
                <Cards
                cvc={state.cvc}
                expiry={state.expiry}
                focused={state.focus}
                name={state.name}
                number={state.number}
                />
                <form className="form">
                    <input
                    type="number"
                    name="number"
                    className="form-control"
                    placeholder="номер карты"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    />
                    <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Имя"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    />
                    <input
                        type="number"
                        name="expiry"
                        className="form-control"
                        placeholder="Срок действия"
                        pattern="\d\d/\d\d"
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    <input
                        type="number"
                        name="cvc"
                        className="form-control"
                        placeholder="CVC"
                        pattern="\d{3,4}"
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    <button className="btn" onClick={clearBasket}>Оформить заказ</button>
                </form>
            </div>
       
    )
}
 
export default CardForm;