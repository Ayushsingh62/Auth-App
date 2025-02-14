import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../features/auth/authSlice'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'

const Login = () => {
  const {user  , isLoading , isError , message}= useSelector((state)=>state.auth)
const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData , setFormData]=useState({

email:"",
password:"",



  })

  const { email , password}=formData;

  const handlechange = (e)=>{
   setFormData({

    ...formData,
    [e.target.name]:e.target.value
   })
  }

  const handleSubmit = (e)=>{
    e.preventDefault ()
   dispatch(loginUser(formData))
   
  }
  
  useEffect(()=>{
  if(user){
    navigate("/")
  }
  


  },[user , isError , message])
if(isLoading){
  return (<Loading/>)
}
if (isError && message ){

  return (toast.error("error ocured"))
}

  return (
    <div   className="container mx-auto p-10">
       <h1 className="text-center text-2xl font-black">Login Here</h1>
       <div className="my-5 p-5 rounded-md border">
        <form className="my-3"  onSubmit={handleSubmit} >
          <input
            name="email"
            type="email"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
            placeholder="Enter Email"
            value={email}
            onChange={handlechange}
          
          />
          <input
            name="password"
            type="password"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
            placeholder="Enter Password"
            value={password}
            onChange={handlechange}
          
          />

          <button className="my-2 w-full py-2 px-5 bg-green-500 rounded-md text-white font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
