import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import NavBar from '../components/Navbar'
import DeparmentDetail from '../pages/DepartmentDetail'
import PersonnelCreate from '../pages/PersonnelCreate'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {

    return (
      <Router>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/home" element={<PrivateRouter/>}>
                <Route path="" element={<Home/>} />
              </Route>
              <Route path="/detail/:str" element={<PrivateRouter/>}>
                <Route path="" element={<DeparmentDetail/>} />
              </Route>
              <Route path="/create-personnell" element={<PrivateRouter/>}>
                <Route path="" element={<PersonnelCreate/>} />
              </Route>
          </Routes>
      </Router>
  
    )
  }
  
  export default AppRouter