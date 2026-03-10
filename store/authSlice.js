import { createSlice } from "@reduxjs/toolkit"

const authSlice= createSlice({
name:"auth",

initialState:{

  user:null,
  email:null,
  token:null,
  status:null,
},

reducers:{
  setStatus(state,action){
    state.status = action.payload
  },

  setUser(state,action){
    state.user= action.payload.user
  },

  setToken(state,action){
    state.token=action.payload.token
  },

  setEmail(state,action){
    state.email=action.payload.email
  }
  }

  })

  export const {setUser,setToken,setStatus,setEmail} = authSlice.actions
  export default authSlice.reducer

   function register(date){
  return async function registerThunk(dispatch){
    const response = await axios.post("http://localhost:3000/api/auth/register",date);
    
    if(response === 200){

    }

    else{

      
    }
    
  }
  }

  function login(data){
    return async function login(dispatch){
      const response = await axios.post("http://localhost:3000/api/auth/login",data);
      
      if(response === 200){

      }

      else{
        
      }
    }
  }