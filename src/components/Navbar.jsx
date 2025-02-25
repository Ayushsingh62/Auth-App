import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutuser } from '../features/auth/authSlice'

const Navbar = () => {

const {user }= useSelector((state) =>state.auth)


const dispatch = useDispatch()

const handlelogout =()=>{
dispatch(logoutuser())

}

  return (
    <nav className='py-2 px-8 bg-blue-700 flex item-center justify-between' >
     <Link to={"/"} > <h1 className='font-bold text-white text-xl '  >Auth-App</h1></Link>
<div>

{
!user ?
 (
    <>
    <Link   className=' py-1 px-2 bg-lime-500 rounded-md mx-2 font-bold text-sm '  to="/login">Login </Link>
    <Link className=' py-1 px-2 bg-lime-500 rounded-md mx-2 font-bold text-sm ' to="/register">Register </Link>
    </>
)
:(


<button  onClick={handlelogout} className=' py-1 px-2 bg-red-500 rounded-md mx-2 font-bold text-sm '>Logout</button>
)
}



</div>

    </nav>
  )
}

export default Navbar
