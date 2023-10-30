import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMov } from "../Redux/movdetailsSlice";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ImgCard from "../components/imgCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {getseriesData} from '../Redux/seriesDetailsSlice'
import Video from './../components/video';
import {getRating}from '../Redux/movRatingSlice'


const Movies = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

const { details } = useSelector((state) => state.movDetails);
const {seriesAllDetails}= useSelector((state)=>state.seriesDetails)
const {rainggsDet}= useSelector((state)=>state.movRatingSlice)

useEffect(()=>{
  dispatch(getRating(id))

},[dispatch, id])



  useEffect(() => {
    dispatch(getMov(id));
  }, [dispatch, id]);


  useEffect(()=>{

    dispatch(getseriesData(id))

  }, [dispatch, id])
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      sx={{
        backgroundColor: "black",
        textAlign: "center",
        width: "100%",
        flexWrap: "wrap",
        height: "100%",
        justifyContent: "space-around",


      }}
    >
      <ImgCard details={details} seriesAllDetails={seriesAllDetails} />

      <Paper
        style={{
          width: "50%",
          height: "50%",
          background: "linear-gradient(to bottom, #a18cd1, #fbc2eb)",
          marginTop:100, 
          overflow:"auto"

        }}
      >
        <Typography
          variant="h5"
          color="initial"
          sx={{
            backgroundColor: "black",
            color: "white",
            paddingTop: "20px",
            fontSize: "30px",
          }}
        >
        { details.title?   "Movie Name":  "Series Name"     }  
          <Typography variant="body">[ {details.title ||seriesAllDetails.name} ]</Typography>
        </Typography>
        <Divider variant="middle" />

        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1 className="text-xl text-zinc-950 font-bold mt-11 text-center">
            Overview:
          </h1>
          <p className="font-semibold text-left text-lg ">
            {details.overview ||seriesAllDetails.overview}{" "}
          </p>
          <br />
        </Box>

        <Divider variant="middle" />

        <h1 className="text-xl text-zinc-950 font-bold mt-11">
          Release Date:
        </h1>

        <p className="font-semibold">
          {details.release_date ||seriesAllDetails.last_air_date}
        </p>
      </Paper>
      <Video id={rainggsDet} sss={details.title}/>

    </Stack>
  );
};

export default Movies;
