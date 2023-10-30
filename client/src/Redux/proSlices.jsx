import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getData = createAsyncThunk('shehab', async (ids, ThunkAPI) => {

  const { rejectWithValue } = ThunkAPI;

  try {
    const data = await axios({
      method: 'GET',
      url: 'http://localhost:8080/movies',
      params: { language: 'en-US', page:`${ids}`},
    })

    return data.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const initialState = { name: "shehab", age: 30, users: [], load: true, error: null, pop: 0 }

const proSlice = createSlice({
  name: "counter",
  initialState,



  reducers: {
    increment: (state, actions) => {
      state.age += actions.payload
      if (state.age > 44) {
        state.name = "ali"
      }
    },

    decrement: (state) => {
      state.age--

      if (state.age == 27) {
        state.name = "boo"
      }


    }


  },

  extraReducers: (builder) => {

    builder.addCase(getData.pending, (state) => {
      state.load = true
    })

    builder.addCase(getData.fulfilled, (state, action) => {
      state.load = false
      state.users = action.payload.results
    })
    builder.addCase(getData.rejected, (state, action) => {
      state.load = false
      state.error = action.payload.message

    })



  }
})

export default proSlice.reducer
export const { increment, decrement } = proSlice.actions



