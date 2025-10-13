// import { createSlice } from "@reduxjs/toolkit"
// const Loggin =createSlice({
//     name:'Loggin',
//     initialState:{
//         email:null,
//         password:null,
//         isloggedin:false
//     },
//  reducers:{
//  Email:(state,action)=>{
// state.email=action.payload},
//     Password:(state,action)=>{
//     state.password=action.payload
//         },
//     Logged:(state,action)=>{
//         state.isloggedin=action.payload
//         },
//     logout:(state)=>{
//         state.email=null,
//         state.password=null,
//         state.isloggedin=false
//     }
// }
// });
// export const  {Email,Password,Logged,logout} =Loggin.actions;
// export default Loggin.reducer ;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import signInWithEmail from '../../../service/api/loginAPI';

export const Authentication = createAsyncThunk(
  'auth/loginUser',
  async (userAuthentication, {rejectWithValue}) => {
    try {
      const response = await signInWithEmail(userAuthentication);
      console.log('response', response);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const Data = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: 'idle',
    error: null,
  },
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.loading = 'idle';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(Authentication.pending, state => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(Authentication.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.user = action.payload?.user || null;
        state.token = action.payload?.access_token || null;
      })

      .addCase(Authentication.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});
export const {logout} = Data.actions;
export default Data.reducer;
