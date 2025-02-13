import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem('user'))


const authSlice = createSlice({
name :"auth",
initialState:{
user:userExist || null,
isLoading :false,
isSuccess : false ,
isError : false,
message: ""

},

reducers:{},
extraReducers:(bulider)=>{

    bulider 
    .addCase (registerUser.pending ,(state , action )=>{
state.isLoading=true
state.isSuccess=false
state.isError=false

    })
    .addCase (registerUser.fulfilled ,(state , action )=>{
        state.isLoading=false
        state.isSuccess=true
        state.user= action.payload
        state.isError=false
        
            })
            .addCase (registerUser.rejected ,(state , action )=>{
                state.isLoading=false
                state.isSuccess=false
                state.isError=true
                state.message= action.payload
                
                    })
                    .addCase (logoutuser.fulfilled ,(state , action )=>{
                        state.isLoading=false
                        state.isSuccess=false
                        state.isError=false
                        state.user = null
                        state.message= ""
                        
                            })

}

})
export default authSlice.reducer;

//register slice

export const  registerUser = createAsyncThunk ("AUTH/REGISTER" , 
    async(formData , thunkAPI)=>{
try {

    return await authService.register(formData)
    
} catch (error) {
    const message  =error.response.data.message
    return thunkAPI.rejectWithValue(message)
}
    }
)

// logout 

export const logoutuser = createAsyncThunk ("AUTH/LOGOUT" , async()=>{

localStorage.removeItem("user")

})