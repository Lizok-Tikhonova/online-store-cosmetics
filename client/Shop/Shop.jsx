import style from "./Shop.module.css"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import Types from "../../Components/Types/Types";
import Brands from "../../Components/Brands/Brands";
import Catalog from "../../Components/Catalog/Catalog";
import Pagination from "../../Components/Pagination/Pagination";

import axios from "axios";
import react, { useContext, useEffect } from "react";
import { Context } from "../../index";
import { getTypes, getBrands, getProducts, getFavourite} from "../../http/Product";
import { observer } from "mobx-react-lite"; 




const Shop = observer(() => {
    const {product, user} = useContext(Context)
    const favouriteId = user.user.id
    try {
        useEffect(()=>{
            getTypes().then(data=>product.setTypes(data))
            getBrands().then(data=>product.setBrands(data))
            getProducts(product.selectedBrand, product.selectedType, product.page, product.limit).then(data=>{
                product.setProduct(data.rows)
                product.setCountProduct(data.count)
            })
            if(favouriteId){
                getFavourite(favouriteId).then((data)=>{product.setFavourite(data)})
            }
            else{
                product.setFavourite([])
            }
        }, [])
    } catch (error) {
        product.setFavourite([])
    }
    

    useEffect(()=>{
        getProducts(product.selectedBrand, product.selectedType, product.page, product.limit).then(data=>{
            product.setProduct(data.rows)
            product.setCountProduct(data.count)
        })
    }, [product.page, product.selectedBrand, product.selectedType])

    return (
        <>
            <NavBarShop/>
            <main>
                <div className="container">
                    <div className={style.wrapper_catalog}>
                        <Brands/>
                        <Types/>
                        <Catalog/>
                        <Pagination/>
                    </div>
                </div>
            </main>
        </>
        
    )
})

export default Shop;