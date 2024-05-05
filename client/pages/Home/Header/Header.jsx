import Button from "../../../Components/UI/Button/Button";
import style from "./Header.module.css"
import Mouse from './mouse.svg'


const Header = () => {
    return ( 
        <header>
            <div className="container">
                <div className={style.wrapperHeader}>
                    <div className={style.bunner}>
                        <h1 className={style.title}>Салон-парикмахерская в Калуге!</h1>
                        <p className={style.paragraf}>С удовольствием поможем создать именно<br/>
                            Ваш неповторимый образ
                        </p>
                        {/* <Button>записаться</Button> */}
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
 
export default Header;
