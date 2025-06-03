import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Disabilities from './Pages/Disabilities/Disabilities';

function App() {
  

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/disabilities" element={<Disabilities/>} />
      </Routes>
    </Router>
  )
}

export default App
