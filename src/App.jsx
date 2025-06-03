import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Disabilities from './Pages/Disabilities/Disabilities';
import RegisterDisabilitie from './Pages/RegisterDisabilitie/RegisterDisabilitie';

function App() {
  

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/incapacidades" element={<Disabilities/>} />
        <Route path="/incapacidades/nueva" element={<RegisterDisabilitie/>} />
      </Routes>
    </Router>
  )
}

export default App
