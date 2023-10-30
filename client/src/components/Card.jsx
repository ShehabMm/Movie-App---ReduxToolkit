/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';




(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function RecipeReviewCard({users}) {










const navigate = useNavigate()

  return (

<>

{users&& users.map((item)=>{

return (


  <Card onClick={()=>{

navigate(`/moviedetails/${item.id} `)


  }} className="card" key={item.id} sx={{ position:'relative', width: 245, height:500, gap:50, textAlign:'center', borderRadius:5, boxShadow:'10px 5px 5px black',"&:hover":{cursor:"pointer"} }}>




<CardMedia
         component="img"
         image={(`https://image.tmdb.org/t/p/w220_and_h330_face/${item.backdrop_path}`)}
         alt="Paella dish"
       /> 

<Typography variant="h6" color="initial" sx={{mt:1}}>
{item.title}
</Typography>
<Typography variant="h7" color="initial">
{item.release_date}

</Typography>



      <Stack sx={{position:"absolute", bottom:"10px"}} spacing={1}>

      <Rating name="half-rating-read" defaultValue={2.5} precision={3}  readOnly />
    </Stack>


    </Card>

    )



})}
</>
  );
}