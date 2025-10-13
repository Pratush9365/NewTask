import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://quivio-apim-dev-budwh2h7bnfhf2cg.z03.azurefd.net/sensing/v1/water-source/water-type-list";


export const fetchWaterSources = createAsyncThunk(
  "waterSource/fetchWaterSources",
  async ({ rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch water sources");
      }

      return data.water-type-list;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const waterSourceSlice = createSlice({
  name: "waterSource",
  initialState: {
    sources: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWaterSources.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWaterSources.fulfilled, (state, action) => {
        state.loading = false;
        state.sources = action.payload;
      })
      .addCase(fetchWaterSources.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default waterSourceSlice.reducer;
