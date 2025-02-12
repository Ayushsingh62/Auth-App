import React from 'react'

const Register = () => {
  return (
    <div className="container mx-auto p-10">
    <h1 className="text-center text-2xl font-black">Register Here</h1>

    <div className="my-5 p-5 rounded-md border">
      <form className="my-3" >
        <input
          type="text"
          className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
          placeholder="Enter Name"
         
        />
        <input
          type="email"
          className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
          placeholder="Enter Email"
        
        />
        <input
          type="password"
          className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
          placeholder="Enter Password"
        
        />
        <input
          type="password"
          className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
          placeholder="Confirm Password"
         
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
