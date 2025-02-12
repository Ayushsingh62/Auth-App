import React from 'react'

const Login = () => {
  return (
    <div   className="container mx-auto p-10">
       <h1 className="text-center text-2xl font-black">Login Here</h1>
       <div className="my-5 p-5 rounded-md border">
        <form className="my-3" >
          <input
            name="email"
            type="email"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
            placeholder="Enter Email"
          
          />
          <input
            name="password"
            type="password"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2"
            placeholder="Enter Password"
          
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
