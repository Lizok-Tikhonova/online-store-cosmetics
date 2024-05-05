import './App.css';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Masters from './pages/Masters/Masters';
import Contacts from './pages/Contacts/Contacts';
import Master from './pages/Master/Master';
import Services from './pages/Services/Services';

import Auth from './pages/Auth/Auth.';
import Admin from './pages/Admin/Admin';
import Basket from './pages/Basket/Basket'
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';


import {Routes, Route } from "react-router-dom";
import {Context} from './index'
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';



const App = observer(() => {
  const {user} = useContext(Context);

  useEffect(()=>{
      const res = axios.get('http://localhost:5000/api/user/auth', {headers: {
        authorization: `Bearer ${localStorage.getItem('token')}` 
      }}).then(data => {
        localStorage.setItem('token',data.data.token)
        user.setIsAuth(true)
        user.setUser(true)
      }).catch((e)=>{console.log('не авторизован')})
  }, [])
  
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/masters" element={<Masters/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/masters/:id" element={<Master/>}/>
        <Route path="/services" element={<Services/>}/>

        <Route path="/auth" element={<Auth/>}/>
        <Route path="/registration" element={<Auth/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/shop" element={<Shop/>}/>

        {user.isAuth && <Route path="/admin" element={<Admin/>}/>}
        {user.isAuth && <Route path="/basket" element={<Basket/>}/>}
      </Routes>

      <Footer/>
    </div>
  );
})

export default App;
