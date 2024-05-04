import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import userStore from './store/UserStore'

import { BrowserRouter} from "react-router-dom";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider value = {{user: new userStore()}}>
      <App />
    </Context.Provider>, 
  </BrowserRouter>   
);

