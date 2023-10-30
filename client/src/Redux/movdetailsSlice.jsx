import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



export const getMov = createAsyncThunk("shehab",async (id, ThunkAPI)=>{
  const {rejectWithValue}=ThunkAPI;

try {
  
const data = await axios({

  method: 'GET',
  url: 'http://localhost:8080/movies/details',
  params: {language: 'en-US', id:`${id}`},
});


return data.data;


} catch (err) {
  rejectWithValue(err)
}



})

const initialState = {load:true, error:null , details:[]}

const movDetails = createSlice({
name:"slice", 
initialState,




extraReducers:(builder)=>{

  builder.addCase(getMov.pending, (state)=>{
state.load = true


  })
  builder.addCase(getMov.fulfilled, (state, action)=>{
    state.load = false

    state.details = action.payload



  })
  builder.addCase(getMov.rejected, ()=>{})


}


})

export default movDetails.reducer