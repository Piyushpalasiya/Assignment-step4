import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
// import Dashboard from './component/Dashboard';
import Login from './component/Login/Login'
import NavBar from './component/NavBar';
import Dashboard from './component/Dashboard';


 function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<NavBar />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;