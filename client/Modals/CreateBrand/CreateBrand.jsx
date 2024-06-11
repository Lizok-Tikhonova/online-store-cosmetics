
import Modal from "../../Modal/Modal";
import styles from "./CreateBrand.module.css";
import React, { useState } from 'react';
import axios from "axios";
import { addBrands } from "../../../http/Product";

const CreateBrand = ({active, setActive}) => {
  
  const [value, setValue] = useState('')

  const addBrand = () => {
    if(!value){
      return
    }
    addBrands({name:value}).then(data => {
      setValue('')
      setActive()
    })
  }

	return (
    <Modal active={active} setActive={setActive}>
      <form action="#" className={styles.form}>
        <h3 className={styles.title}>Добавление бренда</h3>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="название"/>
        <p>{!value && 'Название бренда не может быть пустым'}</p>
        <div className={styles.buttons}>
          <button type="reset" onClick={addBrand} className={styles.btn}>Добавить</button>
          <button type="reset"  onClick={()=>setActive(false)} className={styles.btn}>Закрыть</button>
        </div>
        
      </form>
      
    </Modal>
	);
};

export default CreateBrand;
