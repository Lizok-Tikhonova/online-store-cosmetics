import style from "./Catalog.module.css"
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { useContext, useState} from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";


const Catalog = observer(() => {
    const {product} = useContext(Context); 
    const [value, setValue] = useState('')
    const filterProduct = product.products_all.filter(prod => {
        return prod.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className={style.search}>
            <input type="text" onChange={(e)=>setValue(e.target.value)} className={style.input_search}/>
            <div className={style.wrapperCatalog}>
                {value?filterProduct.map(product => 
                    <Card productItem={product} key={product.id}/>
                ): product.products.map(product => 
                    <Card productItem={product} key={product.id}/>
                )}
                
            </div>
            {!value && (
                <Pagination />
            )}
        </div>
       
    )
})

export default Catalog;