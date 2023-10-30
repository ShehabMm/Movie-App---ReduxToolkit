import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getSearch = createAsyncThunk("searched", async(id, ThunkAPI)=>{
const{rejectWithValue} = ThunkAPI
try {
  const data = await axios({

    method: 'GET',
    url: 'http://localhost:8080/movies/search',
    params: {query: `${id}`, include_adult: 'false', language: 'en-US', page: '1'},

  }) 

return data.data
} catch (error) {
  return rejectWithValue(error)

}


})





const initialState={query:[], load:true, error:false}

const searchMov=createSlice({
name:"sea", 
initialState, 
extraReducers:(builder)=>{
  builder.addCase(getSearch.pending,()=>{})
  builder.addCase(getSearch.fulfilled,(state, action)=>{

state.query = action.payload.results
  })
  builder.addCase(getSearch.rejected, ()=>{})




}



})

export default searchMov.reducer