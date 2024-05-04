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
import DevicePage from './pages/DevicePage/DevicePage';
import Shop from './pages/Shop/Shop';


import {Routes, Route } from "react-router-dom";
import {Context} from './index'
import { useContext } from 'react';


function App() {
  const {user} = useContext(Context);
  console.log(user);
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
        <Route path="/device" element={<DevicePage/>}/>
        <Route path="/shop" element={<Shop/>}/>

        {user.isAuth && <Route path="/admin" element={<Admin/>}/>}
        {user.isAuth && <Route path="/basket" element={<Basket/>}/>}
      </Routes>

      <Footer/>

      
    </div>
  );
}

export default App;
