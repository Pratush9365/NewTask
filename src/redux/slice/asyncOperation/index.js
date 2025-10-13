import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiData = createAsyncThunk(
  'data/apiData',   
  async () => {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Failed to Fetch data')
    }
    return data.users;
  }
)

const Data = createSlice({
  name: 'userdata',   
  initialState: {
    Data: [],
    status: 'idle',   
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apiData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(apiData.fulfilled, (state, action) => {
        state.status = 'success'
        state.Data = action.payload
      })
      .addCase(apiData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})
 

export default Data.reducer
export { apiData } 


// const PostOperation=createAsyncThunk({
//     'data/Post':
//     async()=>{
//     const data= fetch('')
//     }
// })

