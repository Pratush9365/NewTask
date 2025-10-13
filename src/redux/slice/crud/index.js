import {createSlice} from '@reduxjs/toolkit';

const userdata = createSlice({
  name: 'userdata',
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    removedata: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    updatedata: (state, action) => {
      state.data[action.payload.index] = action.payload.data;
    },
    fetchdata: (state, action) => {
      state.data[action.payload];
    },
  },
});

export const {addData, removedata, updatedata, fetchdata} = userdata.actions;
export default userdata.reducer;
