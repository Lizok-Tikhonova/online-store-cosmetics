import style from "./Shop.module.css"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import Types from "../../Components/Types/Types";
import Brands from "../../Components/Brands/Brands";
import Catalog from "../../Components/Catalog/Catalog";
import Pagination from "../../Components/Pagination/Pagination";

import axios from "axios";
import react, { useContext, useEffect } from "react";
import { Context } from "../../index";
import { getTypes, getBrands, getProducts, getFavourite, getBasket, getAllProductsSearch} from "../../http/Product";
import { observer } from "mobx-react-lite"; 




const Shop = observer(() => {
    const {product, user} = useContext(Context)
    const userId = user.user.id
    console.log(userId);
    try {
        useEffect(()=>{
            getTypes().then(data=>product.setTypes(data))
            getBrands().then(data=>product.setBrands(data))
            getProducts(product.selectedBrand, product.selectedType, product.page, product.limit).then(data=>{
                product.setProduct(data.rows)
                product.setCountProduct(data.count)
            })
            getAllProductsSearch(product.selectedBrand, product.selectedType).then(data=>product.setProductAll(data))
            if(userId){
                getFavourite(userId).then((data)=>{product.setFavourite(data)})
                getBasket(userId).then((data)=>{product.setBasket(data)})
            }
            else{
                product.setFavourite([])
            }
        }, [userId])
    } catch (error) {
        product.setFavourite([])
    }

    
    useEffect(()=>{
        getProducts(product.selectedBrand, product.selectedType, product.page, product.limit).then(data=>{
            product.setProduct(data.rows)
            product.setCountProduct(data.count)
        })
        getAllProductsSearch(product.selectedBrand, product.selectedType).then(data=>product.setProductAll(data))
    }, [product.page, product.selectedBrand, product.selectedType,product.limit])

    console.log();
    return (
        <>
            <NavBarShop/>
            <main>
                <div className="container">
                    <div className={style.wrapper_catalog}>
                        <Brands/>
                        <Types/>
                        <Catalog/>
                        {/* <Pagination/> */}
                    </div>
                </div>
            </main>
        </>
        
    )
})

export default Shop;