import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Redux/proSlices";
import RecipeReviewCard from "../components/Card";
import ReactLoading from "react-loading";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Carousel from "./../components/Carousel";
import { getTvDetails } from "./../Redux/tvseriesSlice";
const Home = () => {
  const [pageNum, setPage] = useState(1);
  const { users, load } = useSelector((state) => state.proSlice);
  const { tvDetails } = useSelector((state) => state.tvSeries);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const dispatch = useDispatch();
  let no = pageNum;

  useEffect(() => {
    setPage(pageNum);
    dispatch(getData(pageNum));
  }, [dispatch, pageNum]);


  useEffect(() => {
    dispatch(getTvDetails());
  }, [dispatch]);

  return (
    <>
      <div className=" flex-row text-center bg-[#34568B] justify-center ">
        <h1 className="animate-text bg-gradient-to-r from-white via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-left mb-5 font-serif ml-2 pt-5">
          Popular TV SERIES...
        </h1>

        <Carousel users={users} tvDetails={tvDetails} />
        <h1 className="animate-text bg-gradient-to-r from-white via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-left  font-serif ml-2 mt-5">
          Top Rated Movies...
        </h1>

        <div className="flex flex-row justify-center items-center gap-6 mt-5 flex-wrap mb-9">
          {load && (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#ffffff"}
              height={"10%"}
              width={"10%"}
            />
          )}
          <RecipeReviewCard users={users} />
        </div>


        <div
          style={{
            backgroundColor: "transparent",
            color: "white",
            width: "100%",
            padding:0,
            margin: "auto",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: "white" }}>Page: {pageNum}</Typography>
          <Pagination
            sx={{
              backgroundColor: "white",
              color: "whitesmoke",
              display:"flex",
              gap:10,
              width:"100%",
              justifyContent:"space-around"

            }}
            color="primary"
            count={100}
            page={no}
            onChange={handleChange}
            size="large"

          />
        </div>
      </div>
    </>
  );
};

export default Home;
