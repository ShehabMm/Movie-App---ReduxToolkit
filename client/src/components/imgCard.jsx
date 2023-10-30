/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea,  } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ImgCard = ({details, seriesAllDetails }) => {

  return (
    <Card sx={{height:"58vh", width: 345,   borderRadius: "15px", boxShadow: "10px 5px 15px black",
    marginTop:5,         '&:hover': { cursor: "pointer", boxShadow: "20 20 20 60 red" },
  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // eslint-disable-next-line react/prop-types
          image={`https://image.tmdb.org/t/p/w220_and_h330_face/${details.poster_path||seriesAllDetails.backdrop_path}`}
          alt="green iguana"
        />
      </CardActionArea>
      <Typography sx={{marginTop:3, bgcolor:"teal"}} variant="h6" color="white">{details.title||seriesAllDetails.name}</Typography>
    </Card>
  );
}

export default ImgCard;
