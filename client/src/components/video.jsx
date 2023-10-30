/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
const Video = ({id}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="iframe"
          height="400px"
          src="https://www.youtube.com/embed/LIsfMO5Jd_w?si=Dk9DjLSh2BjvUdA0"
          alt="green iguana"
        />
        <CardContent>
          <Link target="_blank" to={`https://www.imdb.com/video/vi3797730329/?playlistId=${id.imdb_id}&ref`}>
        
          <Typography gutterBottom variant="h5" component="div">
            Watch the Trailer  
                      </Typography>


          <Typography variant="body2" color="text.secondary">
            Click Here
          </Typography>
          </Link>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default Video;
