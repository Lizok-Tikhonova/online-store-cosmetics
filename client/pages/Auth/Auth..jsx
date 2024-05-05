import React, { useState, useContext} from "react";
import style from "./Auth.module.css"
import {NavLink, useLocation} from "react-router-dom"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
    const {pathname} = useLocation()

    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');

    const {user} = useContext(Context); 
    const history = useNavigate() // для переброса на другую страницу

    const login_reg = async (e) => {
        try{
            e.preventDefault()
            let userInfo
            if(pathname === '/auth'){
                const {data} = await axios.post('http://localhost:5000/api/user/login', {login, password})
                userInfo = (jwtDecode(data.token));
                localStorage.setItem('token', data.token)
            } else {
                const {data} = await axios.post('http://localhost:5000/api/user/registration', {login, password, role:'ADMIN'})
                userInfo = (jwtDecode(data.token));
                localStorage.setItem('token', data.token)
            }
            user.setUser(userInfo)
            user.setIsAuth(true)
            history('/shop')

            
            // return userInfo
        } catch(error){
            alert(error.response.data.message);
        } 
    }

    return (
        <>
        <NavBarShop/>
        <main>
            <div className="container">
                <div className={style.wrapperForm}>
                    <div className={style.links}>
                        <NavLink to='/auth' className={({isActive})=>isActive?style.active:style.link}>Авторизация</NavLink>
                        <NavLink to='/registration' className={({isActive})=>isActive?style.active:style.link}>Регистрация</NavLink>
                    </div>
                    <form className={style.form}>
                        <input type="text" placeholder="Введите логин" name="login" className={style.input} value={login} onChange={e=>setLogin(e.target.value)}/>
                        <input type="password" placeholder="Введите пароль" name="password" className={style.input} value={password} onChange={e=>setPassword(e.target.value)}/>
                        <button onClick={login_reg} className={style.btn}> {pathname === '/auth'? 'Войти': 'Зарегистрироваться'}</button>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
})

export default Auth;