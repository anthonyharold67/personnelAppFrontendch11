import React from 'react'
import {Outlet,Navigate, useLocation} from "react-router-dom"
import {toastWarnNotify} from ".././helpers/ToastNotify"

const PrivateRouter = () => {
  let currentUser= true  
  let location = useLocation() ;

  
  if(!currentUser){
    toastWarnNotify("You need to login first")
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    )
    
  }else{
    return (
      <Outlet />
    )
  }
}

export default PrivateRouter