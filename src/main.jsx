import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//context olustur ve export et kı ıstedın yerden ulasabıl
export const MyContext=React.createContext()

const MyProvider=({children})=>{

 const [myState,setMyState]=useState("Ali") 
//value altında ıstedın degıskenlerı tanımla
  const value={
    myState,
    setMyState,
  }

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
  </React.StrictMode>,
)
