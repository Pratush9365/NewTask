// // import { createSlice } from "@reduxjs/toolkit"
// // const Loggin =createSlice({
// //     name:'Loggin',
// //     initialState:{
// //         email:null,
// //         password:null,
// //         isloggedin:false
// //     },
// //  reducers:{
// //  Email:(state,action)=>{
// // state.email=action.payload},
// //     Password:(state,action)=>{
// //     state.password=action.payload
// //         },
// //     Logged:(state,action)=>{
// //         state.isloggedin=action.payload
// //         },
// //     logout:(state)=>{
// //         state.email=null,
// //         state.password=null,
// //         state.isloggedin=false
// //     }
// // }
// // });
// // export const  {Email,Password,Logged,logout} =Loggin.actions;
// // export default Loggin.reducer ;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import signInWithEmail from '../../../service/api/loginAPI';

export const authentication = createAsyncThunk(
  'auth/loginUser',
  async (userAuthentication, {rejectWithValue}) => {
    try {
      const response = await signInWithEmail(userAuthentication);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  },
);

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    token: null,
    loading: 'idle',
    error: null,
  },
  reducers: {
    logout: state => {
      state.token = null;
      state.loading = 'idle';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authentication.pending, state => {
        state.loading = 'loading';
      })
      .addCase(authentication.fulfilled, (state, action) => {
        state.loading = 'succeeded';

        if (action.payload) {
          state.token = action.payload.access_token;
        }
      })
      .addCase(authentication.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload || 'Login failed';
      });
  },
});

export const {logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;
