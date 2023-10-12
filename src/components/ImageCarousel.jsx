import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
const ImageCarousel = ({ data }) => {
    console.log(data);
  return (
    <Carousel autoPlay={true} animation="slide">
      {data.map((item) => (
        <Paper key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            sx={{ position: 'absolute', backdroundColor:'red', width:'100%', height: '514px',left: '21px',
top: '80px'}}
          />
        </Paper>
      ))}
    </Carousel>
    
  );
};

export default ImageCarousel;
