import React, {useContext} from 'react';
import { Context } from '../../index';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'


const NavBar = () => {
    const {user} =  useContext();
    return ( 
        <nav>
            <div className='container'>
                <div className={styles.nav_row}>
                    <NavLink to="/" className={styles.logo}>
                        Haircuts<span>&</span>Coloristics
                    </NavLink>
                    <ul className={styles.nav_list}>
                        <li className={styles.item}>
                            <NavLink to="/" className={({isActive})=>isActive?styles.active:styles.link}>
                               Главная
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/shop"className={styles.linkShop}>
                               Перейти в магазин
                            </NavLink>
                        </li>
                    </ul>
                   
                </div>
                <hr className={styles.hr}></hr>
            </div>
        </nav>
     );
}
 
export default NavBar;