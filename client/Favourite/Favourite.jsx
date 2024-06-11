import style from "./Favourite.module.css"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";

import { getFavourite } from "../../http/Product";
import { Context } from "../../index";
import { useContext, useEffect, useState} from "react";
import { observer } from 'mobx-react-lite'
import Card from "../../Components/Card/Card";



const Favourite = observer(() => {
    const {product, user} = useContext(Context);
    const userId = user.user.id
    console.log(userId);
    useEffect(()=>{
        if(user.isAuth){
            getFavourite(userId).then((data)=>{
                product.setFavourite(data)
            })
        }
    }, [])

    return (
        <>
            <NavBarShop/>
            <main>
               <div className="container">
                <div className={style.wrapperFavourite}>
                    <h2>Избранное</h2>
                    <div className={style.list}>
                        {product.favourite.map(item => 
                            <Card productItem={item} key={item.id}/>    
                        )}
                    </div>
                   
                </div>
              
               </div>
            </main>
        </>
    );
})

export default Favourite;