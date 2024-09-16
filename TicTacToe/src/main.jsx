import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
// import { configureStore,createSlice } from "@reduxjs/toolkit";
// import { Provider } from 'react-redux';
// import Userinfo from './userReducer/userReducer.jsx'
// const store = configureStore({
//   reducer: {
//     user:Userinfo
//   }
// })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
)