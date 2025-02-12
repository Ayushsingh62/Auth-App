import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
name :"auth",
initialState:{
user:null,
isLoading :false,
isSuccess : false ,
isError : false,
message: ""

},

reducers:{},
extraReducers:(bulider)=>{

}

})
export default authSlice.reducer;