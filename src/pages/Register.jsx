import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { toast} from 'react-toastify'
import { registerUser } from '../features/auth/authSlice'

const Register = () => {
  const {user  , isLoading , isError , message}= useSelector((state)=>state.auth)
const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData , setFormData]=useState({
name :"",
email:"",
password:"",
password2:""


  })

  const {name , email , password, password2}=formData;

  const handlechange = (e)=>{
   setFormData({

    ...formData,
    [e.target.name]:e.target.value
   })
  }

  const handleSubmit = (e)=>{
    e.preventDefault ()
    if (password !== password2){
toast.error("Password not match")

    }

    else{

      dispatch(registerUser(formData))
    }
   
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
    <div className="container mx-auto p-10">
    <h1 className="text-center text-2xl font-black">Register Here</h1>

    <div className="my-5 p-5 rounded-md border">
      <form className="my-3" onSubmit={handleSubmit} >
        <input
          type="text"
          className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
          placeholder="Enter Name"
          name='name'
          onChange={handlechange}
          value={name}
         
        />
        <input
          type="email"
          className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
          placeholder="Enter Email"
          name='email'
          onChange={handlechange}
          value={email}
        
        />
        <input
          type="password"
          className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
          placeholder="Enter Password"
          name='password'
          onChange={handlechange}
          value={password}
        
        />
        <input
          type="password"
          className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
          placeholder="Confirm Password"
          name='password2'
          onChange={handlechange}
          value={password2}
         
        />
        <button className="my-2 w-full py-2 px-5 bg-green-500 rounded-md text-white font-bold">
          Register
        </button>
      </form>
    </div>
  </div>
  )
}

export default Register
