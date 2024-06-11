import style from "./HeaderShop.module.css"
import Mouse from './mouse.svg'
import { useNavigate } from "react-router-dom";

const HeaderShop = () => {
    const history = useNavigate();
    
    return ( 
        <header>
            <div className="container">
                <div className={style.wrapperHeader}>
                    <div className={style.bunner}>
                        <h1 className={style.title}>Добро пожаловать в магазин Haircuts<span>&</span>Coloristics!</h1>
                        <p className={style.paragraf}>Мы рады приветствовать вас в нашем интернет-магазине, где каждый найдет что-то особенное для себя
                        </p>
                        <button className={style.btn} onClick={()=>history('/shop')}>Начать покупки</button>
                    </div>
                    <div className={style.down}>
                        <img src={Mouse} className={style.mouse} alt='mouse'></img>
                        <span className={style.mouseText}>прокрутите вниз</span>
                    </div>
                </div> 
            </div>
        </header>
    );
}
 
export default HeaderShop;
