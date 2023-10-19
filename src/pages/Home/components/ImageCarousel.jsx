import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box, Button, useMediaQuery, ThemeProvider } from '@mui/material';
import CarouselLabel from './CarouselLabel';
import { Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
 const theme = createTheme();

 const ImageCarousel = ({ data }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>

      <Carousel indicators={false} autoPlay={true} animation="slide"
        sx=
        {{
          width: isSmallScreen ? '90%' : '97%',
          overflow: isSmallScreen ? 'hidden' : 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 3,
          marginRight:3,
          borderRadius:'8px'
        }}

      >

        {data.map((item) => (
          <Grid item key={item.id}
            sx=
            {{
              position: 'relative',
              overflow: 'hidden',
              height: '400px'
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
                transform: 'translate(-50%, -50%)',
                ...(isSmallScreen && {
                  width: '100%',
                  left: '50%',
                  height: '120px',
                  top: '20%',
                  borderRadius: '8px',
                  
                }),
              }}
            />
            <CarouselLabel />

          </Grid>
        ))}
      </Carousel>
             </ThemeProvider>                       
  );
};

export default ImageCarousel;
