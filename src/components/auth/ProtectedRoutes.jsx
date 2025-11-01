import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProtectedRoutes = ({children}) => {
    
    const [loading, setloading] = useState(true)
    const [isAuth, setisAuth] = useState(false)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const checkUser = async()=>{
        const response = await fetch('http://localhost:3003/user/auth/me',{
            method:'GET',
            credentials:'include',
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        if (!token) {
            navigate('/Login')
        }
    console.log(response,'response1')
    if(response.ok){
        setloading(false)
        setisAuth(true)
        return response
    }
else{
    setloading(false)
     navigate('/Login')
    // return null
}}
    useEffect(() => {
      checkUser()
    }, [])
    if (loading) return <p>Loading...</p> 
    if(!isAuth){
return null
    }
  return children
}


