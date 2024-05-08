import style from "./Catalog.module.css"
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { useContext } from "react";
import Card from "../Card/Card";

const Catalog = observer(() => {
    const {product} = useContext(Context); 
    return (
        <div className={style.wrapperCatalog}>
            {product.products.map(product => 
                <Card product={product} key={product.id}/>
            )}
        </div>
    )
})

export default Catalog;