
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    user: { email: string; name: string } | null;
    isLoading: boolean;
    error: string | null;
  }
  
  const initialState: AuthState = {
    token: null,
    user: null,
    isLoading: false,
    error: null,
  };


const authSlice =createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const {user,token}=action.payload;
            state.user = user;
            state.token = token;
        },
        logout:(state)=>{
            state.user = null;
            state.token = null;
        }
    }
});

export const { setUser,logout } = authSlice.actions;
export default authSlice;



