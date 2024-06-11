import style from "./NewProducts.module.css"

import react, { useContext, useEffect, useState } from "react";
import { getNewProducts} from "../../../http/Product";
import { observer } from "mobx-react-lite"; 
import Card from "../../../Components/Card/Card";
import { useNavigate } from "react-router-dom";



const NewProducts = observer(() => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getNewProducts();
                setData(result);
            } catch (error) {
                console.error('Ошибка при получении новинок:', error);
            }
        };
        fetchData();
    }, []);
    
    const history = useNavigate()
   
    
    return (
        <div className={style.news}>
            <h2>Попробуйте наши новинки!</h2>
            <div className={style.list}>
                 {data.map(product=>
                    <Card productItem={product} key={product.id}/>
                )}
            </div>
            <button className={style.btn} onClick={()=>history('/shop')}>Перейти в каталог</button>
           
        </div>   
    )
})

export default NewProducts;