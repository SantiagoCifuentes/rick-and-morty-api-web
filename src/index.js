import React from 'react';
import ReactDOM from 'react-dom';
import {createStore}from 'redux'//contiene el método para despachar las opciones
import App from './App';



const store=createStore((state=0,action)=>   //recibe como argumento una funacion
{
  //action= {type: 'tipo de accion',payload: any}, el ccreateStore devuelve un state
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
