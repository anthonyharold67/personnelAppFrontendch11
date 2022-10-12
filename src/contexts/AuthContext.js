import axios from 'axios';
import {createContext, useDeferredValue, useState} from 'react'

export const AuthContext = createContext();

const url = "http://127.0.0.1:8000/"

const AuthContextProvider = (props)=>{
  const [currentUser,setCurrentUser] = useState(false);
  const [myKey,setMyKey] = useState("")

  const createUser = async (email,password,firstName,lastName,userName)=>{
    try {
      const res = await axios.post(`${url}users/auth/register/`,{
          "username": userName,
          "email": email,
          "first_name": firstName,
          "last_name": lastName,
          "password": password,
          "password2": password
      })

      if(res.data.token){
        setMyKey(res.data.token)
        setCurrentUser(res.data.userName)
        sessionStorage.setItem('username',res.data.userName)
        const myToken = window.btoa(res.data.token)
      }

      
    } catch (error) {

    }
  }

 let value = {
    createUser,
    currentUser,
    myKey,
 }


  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;