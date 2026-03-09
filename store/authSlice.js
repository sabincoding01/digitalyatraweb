import {} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name:"auth",
    initialState:{
    user:null,
    email:null,
    token:null,
    status:null       
    
    },

    reducers:{
        setStatus:(state,action)=>{
            state.status=action.payload
                },
    setUser:(state,action)=>{
        state.user=action.payload.user;
    },
    setToken:(state,action)=>{
        state.token=action.payload.token;
    }
    
         }

    
})
