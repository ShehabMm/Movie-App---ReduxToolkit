/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

function Arrow(props) {
  const { className, style, onClick } = props;



  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",width:'0px', borderRadius:"50%"  }}
      onClick={onClick}
    />
  );
}


const Carousel = ({ tvDetails}) => {
const navigate = useNavigate()



  const settings = {
    nextArrow: <Arrow  />,
    prevArrow: <Arrow  />,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  };







  return (
    <div style={{width:"68%", margin:"auto", }} >
    

        <Slider  {...settings}>

        { tvDetails&& tvDetails.map((item)=><div key={item.id}><img className="cursor-pointer" onClick={()=>{

navigate(`/moviedetails/${item.id} `)
 }} 

          src={(`https://image.tmdb.org/t/p/w220_and_h330_face/${item.backdrop_path}`)} alt="" /></div>)}

          
        
    

    


        </Slider>
  

    
    </div>
  );
}

export default Carousel;
