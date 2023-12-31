
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box, Button, useMediaQuery, ThemeProvider } from '@mui/material';
import CarouselLabel from './CarouselLabel';
import { Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
 

 const ImageCarousel = ({ data }) => {
  const theme = createTheme({
    breakpoints:{
      value:{
       xs:0,
       sm:600,
       md:900,
       lg:1200,
       xl:1600,
      }
    }
   });
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isXLScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const isBigScreen = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} md={12} >
      <Carousel indicators={false} autoPlay={true} animation="slide"
        sx=
        {{
          width: isSmallScreen ? '100%' : '100%',
          overflow: isSmallScreen ? 'hidden' : 'hidden',
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
              height: '400px',
              borderRadius:'20px',
              objectFit:'cover',
              
            }}>

            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '400px', 
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: '50%',
                top: '230px',
                objectFit:'cover',
                transform: 'translate(-50%, -50%)',
                ...(isSmallScreen && {
                  width: '100%',
                  left: '50%',
                  borderRadius: '20px',
                  marginLeft:3,
                  marginRight:3,
                  marginTop:'40px'
                  
                }),
                ...(isTabletScreen && {
                   height:'250px',
                   left:'50%',
                   top:'50%',

                  }),
                ...(isXLScreen && {
                }),
                ...(isBigScreen && {
                }),
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

