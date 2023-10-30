import { configureStore } from "@reduxjs/toolkit";
import proSlice from "./proSlices";
import movDetails from "./movdetailsSlice";
import tvSeries from './tvseriesSlice'
import seriesDetails from './seriesDetailsSlice'
import movRatingSlice from './movRatingSlice'
import searchMov from './searchMovSlice'
const Store = configureStore({
  reducer:{ proSlice, movDetails, tvSeries, seriesDetails , movRatingSlice, searchMov},



  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
