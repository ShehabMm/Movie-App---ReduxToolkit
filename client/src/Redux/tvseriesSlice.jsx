import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTvDetails = createAsyncThunk("solo", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI;
  try {
    const data = await axios({
      method: "GET",
      url: "http://localhost:8080/series",
      params: { language: "en-US", page: "1" },
    });
    return data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = { load: true, error: null, tvDetails: [] };
const tvSeries = createSlice({
  name: "counter3",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTvDetails.pending, (state) => {
      state.load = true;
    });
    builder.addCase(getTvDetails.fulfilled, (state, action) => {
      state.load = false;

      state.tvDetails = action.payload.results;
    });
    builder.addCase(getTvDetails.rejected, (state) => {
      state.load = false;
    });
  },
});

export default tvSeries.reducer;
