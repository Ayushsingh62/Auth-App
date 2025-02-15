import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useAuthStatus = ()=> {

const {user}= useSelector((state)=> state.auth)

const [isLoggedIn, setIsloggedIn]=useState(false)
const [checkStatus , setCheckStatus]=useState(true)


useEffect(()=>{
user ? setIsloggedIn(true):setIsloggedIn(false)

setCheckStatus(false)
},[user])


return {isLoggedIn, checkStatus}

}

export default useAuthStatus;