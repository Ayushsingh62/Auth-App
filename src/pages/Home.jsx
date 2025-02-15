import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
const {user }= useSelector((state)=>state.auth)

const navigate = useNavigate()



useEffect(()=>{
if(!user){
  navigate("/login")
}

},[user])
  return (
    <div className="container mx-auto p-10">
    <h1 className="text-center text-2xl font-black">Home</h1>
<h2 className='text-center text-xl text-gray-600'>{user.name} </h2>
<h2 className='text-center text-xl  text-gray-700'>{user.email} </h2>


  </div>
  )
}

export default Home
