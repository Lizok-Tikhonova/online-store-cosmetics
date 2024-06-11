import style from "./About.module.css"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";


import react, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { getPopul,getBasket,getFavourite} from "../../http/Product";
import { observer } from "mobx-react-lite"; 
import HeaderShop from "./HeaderShop/HeaderShop";
import Card from "../../Components/Card/Card";
import Popular from "./Popular/Popular";
import NewProducts from "./NewProducts/NewProducts";
import Advantages from "./Advantages/Advantages";




const About = observer(() => {
    const {product, user} = useContext(Context)
    const userId = user.user.id

    try {
        useEffect(()=>{
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
    
    return (
        <>
            <NavBarShop/>
            <HeaderShop/>
            <main>
                <div className="container">
                    <div className={style.wrapper_about}>
                        <Advantages/>
                        <NewProducts/>
                        <Popular/>
                    </div>
                </div>
            </main>
        </>
        
    )
})

export default About;