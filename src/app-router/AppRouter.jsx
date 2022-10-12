import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import NavBar from '../components/Navbar'
import DeparmentDetail from '../pages/DepartmentDetail'
import PersonalCreate from '../pages/PersonalCreate'

const AppRouter = () => {

    return (
      <Router>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/detail/:str" element={<DeparmentDetail/>} />
              <Route path="/create-personal" element={<PersonalCreate/>} />
          </Routes>
      </Router>
  
    )
  }
  
  export default AppRouter