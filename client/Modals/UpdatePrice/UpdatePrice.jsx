
import Modal from "../../Modal/Modal";
import styles from "./UpdatePrice.module.css";
import React, { useState } from 'react';
import axios from "axios";
import { useContext, useEffect} from "react";
import { Context } from "../../../index.js";
import { updateProduct } from "../../../http/Product";
import { observer } from 'mobx-react-lite'

const UpdatePrice = observer(({active, setActive, id}) => {
  const [price, setPrice] = useState('')
  const {product} = useContext(Context)

  const updatePrice = () => {
    if(!price || isNaN(price) || price <= 0){
      return
    }
    updateProduct(id, +price).then(data => {
      setPrice('')
      setActive(false)
      const item = product.products.find(item => item.id === id);
      console.log(product.products);
      item.price = +price;
      product.setBasket([...product.basket]);
    })
  }

	return (
    <Modal active={active} setActive={setActive} className={styles.modal}>
      <form action="#" className={styles.form}>
        <h3 className={styles.title}>Введите новую стоимость</h3>
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="цена"/>
        <p>{(!price || isNaN(price) || price <= 0) && 'Цена должна быть положительным числом'}</p>
        <div className={styles.buttons}>
          <button type="reset" onClick={updatePrice} className={styles.btn}>Изменить</button>
          <button type="reset"  onClick={()=>setActive(false)} className={styles.btn}>Закрыть</button>
        </div>
      </form>
    </Modal>
	);
});

export default UpdatePrice;
