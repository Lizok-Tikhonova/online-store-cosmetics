import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'


const NavBar = () => {
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
                            <NavLink to="/services" className={({isActive})=>isActive?styles.active:styles.link}>
                               Услуги
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/reviews" className={({isActive})=>isActive?styles.active:styles.link}>
                               Отзывы
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/masters" className={({isActive})=>isActive?styles.active:styles.link}>
                               Мастера
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/contacts"className={({isActive})=>isActive?styles.active:styles.link}>
                               Контакты
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