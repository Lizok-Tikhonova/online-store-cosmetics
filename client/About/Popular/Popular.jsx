import style from "./Popular.module.css"

import react, { useContext, useEffect, useState } from "react";
import { getPopul} from "../../../http/Product";
import { observer } from "mobx-react-lite"; 
import Card from "../../../Components/Card/Card";
import { useNavigate } from "react-router-dom";



const Popular = observer(() => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getPopul();
                setData(result);
            } catch (error) {
                console.error('Ошибка при получении популярных продуктов:', error);
            }
        };
        fetchData();
    }, []);
    
    const history = useNavigate()
   
    
    return (
        <div className={style.populate}>
            <h2>Популярные товары</h2>
            <div className={style.list}>
                 {data.map(product=>
                    <Card productItem={product} key={product.id}/>
                )}
            </div>
            <button className={style.btn} onClick={()=>history('/shop')}>Перейти в каталог</button>
           
        </div>   
    )
})

export default Popular;