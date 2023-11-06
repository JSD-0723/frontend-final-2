import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box, Button, useMediaQuery, ThemeProvider } from '@mui/material';
import CarouselLabel from './CarouselLabel';
import { Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
 const theme = createTheme({
  breakpoints:{
    value:{
     xs:0,
     sm:600,
     md:900,
     lg:1200

    }
  }
 });

 const ImageCarousel = ({ data }) => {
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTabletScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} md={12} >
      <Carousel indicators={false} autoPlay={true} animation="slide"
        sx=
        {{
          // width: isSmallScreen ? '100%' : '100%',
          // overflow: isSmallScreen ? 'hidden' : 'hidden',
          width:'100%',
          overflow:'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 2,
          marginRight:2,
          borderRadius:'8px'
        }}
      >
        {data.map((item) => (
          <Grid item  xs={12} md={12} sm={12} lg={12} key={item.id}
            sx=
            {{
              position: 'relative',
              overflow: 'hidden',
              height: '70vh'
            }}>

            <img
              src={item.image}
              alt={item.title}

              style={{
                width: '100%',
                height: '70vh', 
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: '50%',
                top: '230px',
                transform: 'translate(-50%, -50%)',
                // ...(isSmallScreen && {
                //   width: '100%',
                //   left: '50%',
                //   height: '160px',
                //   borderRadius: '8px',
                //   top:'40%',
                //   marginLeft:3,
                //   marginRight:3
                  
                // }),
                // ...(isTabletScreen && {
                //    height:'250px',
                //    left:'50%',
                //    top:'50%',

                //   }),
              
              }}
            />
            <Grid container >
            <CarouselLabel />
            </Grid>
          </Grid>
        ))}
      </Carousel>
      </Grid>
     </ThemeProvider>                       
  );
};

export default ImageCarousel;
