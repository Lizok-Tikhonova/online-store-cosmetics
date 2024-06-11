import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavBarShop.module.css'
import basket from '../../img/basket.svg';
import heart from '../../img/heart.svg';
import { observer } from 'mobx-react-lite';


const NavBarShop = observer(() => {  //observer - компонент наблюдаемый для mobx 
    const {user, product} =  useContext(Context);
    const navigate = useNavigate()
    console.log(user);

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return ( 
        <nav>
            <div className='container'>
            <div className={styles.nav_row}>
                <NavLink to="/shop" className={styles.logo}>
                    Haircuts<span>&</span>Coloristics<span>&</span>Shop
                </NavLink>
                <ul className={styles.nav_list}>
                {user.user.role !== 'admin' &&
                <li className={styles.item}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : styles.link}>
                    О нас
                    </NavLink>
                </li>
                }
                <li className={styles.item}>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? styles.active : styles.link}>
                    Каталог
                    </NavLink>
                </li>
                {user.isAuth && user.user.role === 'user' &&
                    <>
                    <li className={styles.item}>
                        <NavLink to="/order" className={({ isActive }) => isActive ? styles.active : styles.link}>
                        История покупок
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <Link to="/favourite" className={styles.basketlink}>
                        <img src={heart} alt="Избранное" />
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/basket" className={styles.basketlink}>
                        <img src={basket} alt="Корзина" />
                        {product.basket.length > 0 && (
                            <span className={styles.span}>
                                {product.basket.reduce((total, element) => total + element.count, 0)}
                            </span>
                        )}
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/about" className={styles.linkBut} onClick={logOut}>
                        Выйти
                        </Link>
                    </li>
                    </>
                }
                {!user.isAuth &&
                    <li className={styles.item}>
                    <Link to="/auth" className={styles.linkBut} onClick={() => navigate('/auth')}>
                        Авторизация
                    </Link>
                    </li>
                }
                {user.isAuth && user.user.role === 'admin' &&
                <>
                    <li className={styles.item}>
                        <NavLink to="/admin" className={styles.linkBut}>
                            Админ
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <Link to="/about" className={styles.linkBut} onClick={logOut}>
                            Выйти
                        </Link>
                    </li>
                </>  
                }
                <li className={styles.item}>
                    <NavLink to="/" className={styles.linkShop}>
                    Вернуться к салону
                    </NavLink>
                </li>
                </ul>
            </div>
            <hr className={styles.hr}></hr>
            </div>
        </nav>
     );
})
 
export default NavBarShop;