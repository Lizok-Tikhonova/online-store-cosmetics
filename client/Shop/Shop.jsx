import style from "./Shop.module.css"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import Types from "../../Components/Types/Types";
import Brands from "../../Components/Brands/Brands";
import Catalog from "../../Components/Catalog/Catalog";

import axios from "axios";
import react, { useContext, useEffect } from "react";
import { Context } from "../../index";
import { getTypes, getBrands, getProducts} from "../../http/Product";
import { observer } from "mobx-react-lite"; 




const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(()=>{
        getTypes().then(data=>product.setTypes(data))
        getBrands().then(data=>product.setBrands(data))
        getProducts(product.selectedBrand, product.selectedType).then(data=>product.setProduct(data.rows))
    }, [])

    useEffect(()=>{
        getProducts(product.selectedBrand, product.selectedType).then(data=>product.setProduct(data.rows))
    }, [product.selectedType, product.selectedBrand])

    return (
        <>
            <NavBarShop/>
            <main>
                <div className="container">
                    <div className={style.wrapper_catalog}>
                        <Brands/>
                        <Types/>
                        <Catalog/>
                    </div>
                </div>
            </main>
        </>
        
    )
})

export default Shop;