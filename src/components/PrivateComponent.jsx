import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {
 const {isLoggedIn  , checkStatus}= useAuthStatus()

 if(checkStatus){

return <h1 className='my-5 text-center text-2xl'  > Checking user.... </h1>

 }

 return isLoggedIn? <Outlet/> : <Navigate  to={"/login"}/>
}

export default PrivateComponent
