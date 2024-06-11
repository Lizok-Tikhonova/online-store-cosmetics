import style from "./Admin.module.css"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import { useState } from "react";
import CreateBrand from "../../Components/Modals/CreateBrand/CreateBrand";
import CreateProduct from "../../Components/Modals/CreateProduct/CreateProduct";
import CreateType from "../../Components/Modals/CreateType/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <>
        <NavBarShop/>
        <main>
            <div className="container">
                <div className={style.wrapperAdmin}>
                    <button className={style.btn} onClick={()=>setTypeVisible(true)}>Добавить тип</button>
                    <button className={style.btn} onClick={()=>setBrandVisible(true)}>Добавить бренд</button>
                    <button className={style.btn} onClick={()=>setProductVisible(true)}>Добавить продукт</button>
                    <CreateType active={typeVisible} setActive = {setTypeVisible}/>
                    <CreateBrand active={brandVisible} setActive = {setBrandVisible}/>
                    <CreateProduct active={productVisible} setActive = {setProductVisible}/>
                </div>
                
            </div>
        </main>
        </>

    )
}

export default Admin;