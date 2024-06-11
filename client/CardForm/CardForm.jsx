import React, {useState} from 'react';
import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css"
import style from './CardForm.css'

import { Context } from "../../index";
import { useContext, useEffect} from "react";
import axios from 'axios';




const CardForm = ({setFormValid}) => {  

  const {product, user} = useContext(Context);
  const basketId = user.user.id

  const [state, setState] = useState({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      name: "",
      focus: "",
      valid: {
          number: false,
          expiry: false,
          cvc: false,
          name: false,
      },
  });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value, valid: {
            ...prev.valid,
            [name]: validateInput(name, value),
        }}));
    };

  useEffect(() => {
    setFormValid(Object.values(state.valid).every(value => value === true));
  }, [state.valid]);


    const validateInput = (name, value) => {
        switch (name) {
          case 'number':
            return parseInt(value) >= 0 && value.length === 16;
          case 'expiry':
            const isValidExpiry = /^\d{2}\/\d{2}$/.test(value);
            if (!isValidExpiry) return false;
            const [month, year] = value.split('/');
            const currentYear = new Date().getFullYear().toString().slice(-2);
            const currentMonth = new Date().getMonth() + 1;
            return (
              parseInt(month) >= 1 && parseInt(month) <= 12 &&
              parseInt(year) >= parseInt(currentYear) &&
              (parseInt(year) > parseInt(currentYear) || (parseInt(year) === parseInt(currentYear) && parseInt(month) >= currentMonth))
            );
          case 'cvc':
            return value.length === 3;
          case 'name':
            return /^[a-zA-Z]*$/.test(value);
          default:
            return true;
        }
      }

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
                    className= {!state.valid.number ? 'invalid-input' : "form-control"}
                    placeholder="номер карты"
                    value={state.number}
                    onChange={handleInputChange}
                    required
                    />
                    {!state.valid.number && <p className='error'>Неверный номер карты</p>}
                    <input
                    type="text"
                    name="name"
                    className= {!state.valid.name ? 'invalid-input' : "form-control"}
                    placeholder="Имя"
                    onChange={handleInputChange}
                    required
                    />
                    {!state.valid.name && <p className='error'>Некорретный ввод имени</p>}
                    <input
                        type="text"
                        name="expiry"
                        className= {!state.valid.expiry ? 'invalid-input' : "form-control"}
                        placeholder="Срок действия"
                        pattern="\d\d/\d\d"
                        value={state.expiry}
                        onChange={handleInputChange}
                        required
                    />
                    {!state.valid.expiry && <p className='error'>Некорректный формат даты</p>}
                    <input
                        type="number"
                        name="cvc"
                        className= {!state.valid.cvc ? 'invalid-input' : "form-control"}
                        placeholder="CVC"
                        pattern="\d{3,4}"
                        value={state.cvc}
                        onChange={handleInputChange}
                        required
                    />
                     {!state.valid.cvc && <p className='error'>Неверный CVC</p>}
                </form>
            </div>
       
    )
}
 
export default CardForm;