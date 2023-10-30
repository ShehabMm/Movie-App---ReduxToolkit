import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getseriesData = createAsyncThunk("aab", async (id, ThunkAPI) => {

  const { rejectWithValue } = ThunkAPI
  try {

    const data = await axios({
      method: 'GET',
      url: 'http://localhost:8080/series/details',
      params: { language: 'en-US', serId: id },
    })
    return data.data
  } catch (error) {
    return rejectWithValue(error)

  }



})




const initialState = { load: true, seriesAllDetails: [] }

const seriesDetails = createSlice({
  name: "det",
  initialState,

  extraReducers: (builder) => {

    builder.addCase(getseriesData.pending, (state) => {
      state.load = true

    })
    builder.addCase(getseriesData.fulfilled, (state, action) => {
      state.seriesAllDetails = action.payload
    })
    builder.addCase(getseriesData.rejected, (state) => {
      state.load = false

    })
  }
})

export default seriesDetails.reducer