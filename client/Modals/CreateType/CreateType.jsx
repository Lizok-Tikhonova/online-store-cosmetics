
import Modal from "../../Modal/Modal";
import styles from "./CreateBrand.module.css";
import React, { useState } from 'react';
import { addTypes } from "../../../http/Product";

const CreateType = ({active, setActive}) => {
  
  const [value, setValue] = useState('')

  const addType = () => {
    if(!value){
      return
    }
    addTypes({name:value}).then(data => {
      setValue('')
      setActive()
    })
  }

	return (
    <Modal active={active} setActive={setActive}>
      <form action="#" className={styles.form}>
        <h3 className={styles.title}>Добавление типа</h3>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="название"/>
        <p>{!value && 'Название типа не может быть пустым'}</p>
        <div className={styles.buttons}>
          <button type="reset" onClick={addType} className={styles.btn}>Добавить</button>
          <button  onClick={()=>setActive(false)} className={styles.btn}>Закрыть</button>
        </div>
        
      </form>
      
    </Modal>
	);
};

export default CreateType;
