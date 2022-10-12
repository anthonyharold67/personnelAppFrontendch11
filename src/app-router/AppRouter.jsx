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
              <Route path="" element={<Register/>} />
              <Route path="" element={<DeparmentDetail/>} />
              <Route path="" element={<PersonalCreate/>} />
          </Routes>
      </Router>
  
    )
  }
  
  export default AppRouter