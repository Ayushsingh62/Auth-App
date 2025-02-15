import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"

import Register from "./pages/Register"
import { ToastContainer } from 'react-toastify'
import PrivateComponent from './components/PrivateComponent'



const App = () => {
  return (
    <div>
    
   

<BrowserRouter>  

 <Navbar/>
<Routes>

<Route path="/" element={<PrivateComponent/>}>

<Route path=''  element={<Home/>}/>
</Route>

<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />


</Routes>
<ToastContainer/>
</BrowserRouter>

    </div>
  )
}

export default App
