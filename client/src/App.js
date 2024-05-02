import './App.css';
import NavBar from './Components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Masters from './pages/Masters/Masters';
import Contacts from './pages/Contacts/Contacts';
import Master from './pages/Master/Master';
import Services from './pages/Services/Services';
import Reviews from './pages/Reviews/Reviews';

import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/masters" element={<Masters/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/masters/:id" element={<Master/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
