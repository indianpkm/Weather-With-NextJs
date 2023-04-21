import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetch from 'isomorphic-fetch';
const WEATHER_API_KEY = process.env.API_KEY;


export const fetchData = createAsyncThunk(
  '/fetchData',
  async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    const data = await response.json();
    console.log(data)
    return data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;