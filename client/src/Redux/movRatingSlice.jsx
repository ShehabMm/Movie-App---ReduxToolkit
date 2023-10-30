import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRating = createAsyncThunk("stars", async (id, ThunkAPI) => {
  const { rejectWithValue } = ThunkAPI;
  try {
    const data = await axios({
      method: "GET",
      url: `http://localhost:8080/movrating`,
      params: { language: "en-US", serId:id },
    });
    return data.data;
  } catch (error) {
    rejectWithValue(error);
    
  }
});

const initialState = { name: "ali", rainggsDet: {}, load: true };
const movRatingSlice = createSlice({
  name: "rate",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRating.pending, (state) => {
      state.load = true;
    });

    builder.addCase(getRating.fulfilled, (state, action) => {
      state.rainggsDet = action.payload;
    });
    builder.addCase(getRating.rejected, (state) => {
      state.load = false;
    });
  },
});

export default movRatingSlice.reducer;
