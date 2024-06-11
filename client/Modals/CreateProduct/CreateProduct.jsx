import { Context } from "../../../index";
import Modal from "../../Modal/Modal";
import styles from "./CreateProduct.module.css";
import React, { useContext, useState, useEffect } from 'react';
import { getTypes } from "../../../http/Product";
import { getBrands } from "../../../http/Product";
import { addProduct } from "../../../http/Product";

const CreateProduct = ({active, setActive}) => {
    const {product} = useContext(Context)

    useEffect(()=>{
        getTypes().then(data=>product.setTypes(data))
        getBrands().then(data=>product.setBrands(data))
    }, [])
    
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [info, setInfo] = useState('')
    const [file, setFile] = useState(null)

    const [optionType, setOptionType] = useState(1)
    const [optionBrand, setOptionBrand] = useState(1)

    const createProduct = () => {
        if(isNaN(price) || price <= 0 || !name || !file){
            return
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('info', info)
        formData.append('typeId', optionType)
        formData.append('brandId', optionBrand)
        addProduct(formData).then(data =>{
            setActive(false)
            setName('')
            setPrice(0)
            setInfo('')
            setFile(null)
        })
            
    }

	return (
        <Modal active={active} setActive={setActive}>
            <form action="#" className={styles.form}>
                <h3 className={styles.title}>Добавление товара</h3>
                <div className={styles.wrapperInputs}>
                    <input type="text" placeholder="Название" value={name} onChange={e => setName(e.target.value)}/>
                    <p>{(!name) && 'Имя не может быть пустым'}</p>
                    <input type="file" onChange={e => setFile(e.target.files[0])}/>
                    <p>{(!file) && 'Загрузите фото'}</p>
                    <input type="number" placeholder="цена" value={price} onChange={e => setPrice(e.target.value)}/>
                    <p>{(isNaN(price) || price <= 0) && 'Цена должна быть положительным числом'}</p>
                    <textarea placeholder="Информация о товаре" value={info} onChange={e => setInfo(e.target.value)}/>
                    <select name="brand" className={styles.select} value={optionBrand} onChange={e => setOptionBrand(e.target.value)}>
                        {product.brands.map(brand=>
                            <option value={brand.id} key={brand.id}>{brand.name}</option>
                        )}
                    </select>
                    <select name="type" className={styles.select} value={optionType} onChange={e => setOptionType(e.target.value)}>
                        {product.types.map(type=>
                            <option value={type.id} key={type.id}>{type.name}</option>
                        )}
                    </select>
                </div>
                
                <div className={styles.buttons}>
                    <button type="reset" onClick={createProduct} className={styles.btn}>Добавить</button>
                    <button  onClick={()=>setActive(false)} className={styles.btn}>Закрыть</button>
                </div>
            </form>
        </Modal>
	);
};

export default CreateProduct;