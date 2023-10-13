import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Paper, Typography } from '@mui/material';
const ImageCarousel = ({ data }) => {
  console.log(data);
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicatorContainerProps={{
        style: {
          display: 'none',
        },
      }}
    >
      {data.map((item) => (
        <Paper key={item.id}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'


          }}>
          <div
            style={{
              width: '853px',
              position: 'absolute',
              top: '221px',
              left: '1000px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(222, 222, 222, 0.5)',
              padding: '20px',
              borderRadius: '30px',
              display: 'flex',
              flexDirection: 'column'

            }}
          >
            <Typography variant="h6"
              sx=
              {{
                fontFamily: 'Inter, sans-serif',
                color: '#1B4B66',
                fontWeight: 800,
                fontSize: '60px',
                lineHeight: '84px',
              }}
            >Carry your Funk</Typography>
            <Typography sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '38px',
              color: '#1B4B66',
              width: '530px',
              height: '76px',
            }}
            >
              Trendy handbags collection for your party animal
            </Typography>
            <Button
              sx={{ top: 20, p: '10px 10px 10px 10px', marginBottom: 7, marginTop: 2, backgroundColor: '#1B4B66', width: '180px', radius: 8, height: '44px', }}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 5.49996H15.5M15.5 5.49996L11 1M15.5 5.49996L11 9.99996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <Typography sx={{ color: 'white', marginLeft: 1.5, fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>See more</Typography>
            </Button>
          </div>

          <img style={{
            width: '1300px',
            height: '400px',
            padding: 18,
            borderRadius: '35px'
          }}
            src={item.image}
            alt={item.title}
          />

        </Paper>
      ))}

    </Carousel>

  );
};
export default ImageCarousel;
