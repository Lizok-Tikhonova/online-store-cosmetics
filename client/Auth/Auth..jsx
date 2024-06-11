import React, { useState, useContext} from "react";
import style from "./Auth.module.css"
import Modal from "../../Components/Modal/Modal";
import {NavLink, useLocation} from "react-router-dom"
import NavBarShop from "../../Components/NavBarShop/NavBarShop";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
    const { pathname } = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [modalVisible, setModalVisible] = useState(false)
    const [modalContent, setModalContent] = useState(null);

    const { user } = useContext(Context); 
    const history = useNavigate();

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail));
    };

    const validatePassword = (e) => {
        const errors = [];
    
        if (password.length < 8) {
          errors.push("Пароль должен быть не менее 8 символов.");
        }
        if (!/[A-Z]/.test(password)) {
          errors.push("Пароль должен содержать хотя бы одну заглавную букву.");
        }
        if (!/[a-z]/.test(password)) {
          errors.push("Пароль должен содержать хотя бы одну строчную букву.");
        }
        if (!/[0-9]/.test(password)) {
          errors.push("Пароль должен содержать хотя бы одну цифру.");
        }
        if (!/[!@#$%^&*]/.test(password)) {
          errors.push("Пароль должен содержать хотя бы один специальный символ (!@#$%^&*).");
        }
    
        return errors;
      };

    const login_reg = async (e) => {
        e.preventDefault();
        try {
            let userInfo;
            if (pathname === '/auth') {
                const { data } = await axios.post('http://localhost:5000/api/user/login', { login:email, password });
                userInfo = jwtDecode(data.token);
                localStorage.setItem('token', data.token);
            } else if (pathname === '/registration') {
                if (!isValidEmail) {
                    setModalVisible(true);
                    setModalContent(
                        <>
                            <p className={style.errorText}>Введите действительный email</p>
                            <button onClick={() => setModalVisible(false)} className={style.btn}>закрыть</button>
                        </>
                    )
                    return;
                }
                const errors = validatePassword(password);
                if (errors.length > 0) {
                    setModalContent(
                      <>
                        <ul className={style.ul}>
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                        <button onClick={() => setModalVisible(false)} className={style.btn}>Закрыть</button>
                      </>
                    );
                    setModalVisible(true);
                    return
                }
                const { data } = await axios.post('http://localhost:5000/api/user/registration', { login:email, password, role: 'user' });
                userInfo = jwtDecode(data.token);
                localStorage.setItem('token', data.token);
                setEmail('')
                setPassword('')
            }
            user.setUser(userInfo);
            user.setIsAuth(true);
            {user.user.role !== 'admin' ? history('/about'):  history('/admin')}
        } catch (error) {
            setModalContent(
                <>
                    <p>{error.response.data.message || 'Ошибка авторизации/регистрации'}</p>
                    <button onClick={() => setModalVisible(false)} className={style.btn}>Закрыть</button>
                </>
            )
            setModalVisible(true);
        }
    };

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
                    <form action="#" className={style.form}>
                        <input type="text" placeholder="Введите логин" name="login" value={email} className={style.input} onChange={handleEmailChange}/>
                        <input type="password" placeholder="Введите пароль" name="password" className={style.input} value={password} onChange={e=>setPassword(e.target.value)}/>
                        {!isValidEmail && pathname === '/registration' && <p className="error">Пожалуйста, введите действительный email</p>}
                        <button type="reset" onClick={login_reg} className={style.btn}> {pathname === '/auth'? 'Войти': 'Зарегистрироваться'}</button>
                    </form>
                    <Modal active={modalVisible} setActive = {setModalVisible}>
                        {modalContent}
                    </Modal>
                </div>
            </div>
        </main>
        </>
    )
})

export default Auth;