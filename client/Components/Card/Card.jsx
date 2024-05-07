import { Link } from "react-router-dom";
import style from "./Card.module.css"


const Card = ({product}) => {
    return (
        <Link to={`/product/${product.id}`} className={style.card}>
            <img src={'http://localhost:5000/' + product.img} alt="img" className={style.img}/>
            <div className={style.info}>
                <p className={style.name}>{product.name}</p>
                <p className={style.brand}>Ollin</p>
                <p className={style.price}>{product.price + ' р.'}</p>
            </div>
        </Link>
    )
}

export default Card;