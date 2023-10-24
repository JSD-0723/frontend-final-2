import { ThemeProvider } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material";
import {Box} from "@mui/material";

const theme = createTheme({
  breakpoints:{
    values:{
      xs:0,
      sm:600,
      md:900,
      lg:1200
    }
  }
});
const CarouselLabel = () => {
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
const isTabletScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} md={12}>
      <Box
        sx={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(222, 222, 222, 0.5)',
          padding: '20px',
          width: '50%',
          height: '270px',
          borderRadius: '24px',
          marginLeft: 43,

          ...(isSmallScreen && {
            position: 'absolute',
            width: '50%',
            height: '100px',
            borderRadius: '8px',
            justifyContent:'center',
            alignItems:'center',
            top:'40%',
            marginLeft:'37%'
          }),
          ...(isTabletScreen && {
              width:'50%',
              height:'170px',
              top:'50%',
              left:'35%'

          })
        }}
      
      >
        <Grid container xs={12} md={12} >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: ' 3.75rem',
            lineHeight: '84px',
            textAlign: 'left',
            letterSpacing: '0em',
            color: "#1B4B66",
            ...(isSmallScreen && {
              width: '50%',
              height: '52px',
              marginTop: '10%',
              left: '10%',
              fontSize: '1.5rem',
              lineHeight: '40px',
            }),
           ...(isTabletScreen && {
              width:'250px',
              letterSpacing: '0em',
              fontSize:'2rem',
              height:'70px',
              lineHeight:'26px',
              


           }),

          }}>
          Carry your Funk
        </Typography>
        </Grid>
        <Grid container xs={12} md={12}>
        <Typography 
         sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.75rem',
          fontWeight: 500,
          letterSpacing: '0em',
          textAlign: 'left',
          width: "530px",
          height: '80px',
          color: '#1B4B66',
          left: '610px',
          ...(isSmallScreen && {
            width: '162px',
            height: '50px',
            left: '10%',
            fontSize: '0.75rem',
            lineHeight: '16px',
            marginTop:'2%'

          }),
          ...(isTabletScreen &&{
            fontSize:'1rem',
            height:'80px',
            width:'250px',
            lineHeight:'26px'

          }),
        }}>
          Trendy handbags collection for your party animal
        </Typography>
        </Grid>
        <Grid  md={12}
         sx={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {isSmallScreen?null: ( 
          <Button disableRipple={true} sx={{
            '&:hover': {
              backgroundColor: '#1B4B66',
            },
            color: 'white',
            backgroundColor: '#1B4B66',
            borderRadius: '8px',
            p: '10px 65px',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            textTransform: 'none',
            height: '44px',
            top: '20px',

            ...(isTabletScreen &&{
              height:'38px',
              top:'-10px',

            })

          }}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.5 12.5H19.5M19.5 12.5L15 8M19.5 12.5L15 17"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />

            </svg>

            <Typography 
             sx={{ fontSize: '0.75rem' }}>
              See more
            </Typography>
          </Button>
          )}
        </Grid>
      </Box>
      </Grid>
     </ThemeProvider>
  )

}
export default CarouselLabel;