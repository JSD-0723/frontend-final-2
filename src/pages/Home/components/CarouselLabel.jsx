import { ThemeProvider } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material";

const theme = createTheme();
const CarouselLabel = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(222, 222, 222, 0.5)',
          padding: '20px',
          width: '759px',
          height: '270px',
          borderRadius: '24px',
          marginLeft: 43,
          ...(isSmallScreen && {
            position: 'absolute',
            width: '211px',
            height: '100px',
            borderRadius: '8px',
            top:'103px',
            left:'-130px',
            paddingLeft:1,

          }),
        }}
      
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: '60px',
            lineHeight: '84px',
            textAlign: 'left',
            letterSpacing: '0em',
            color: "#1B4B66",
            ...(isSmallScreen && {
              width: '177px',
              height: '52px',
              marginTop: '-17px',
              left: '147px',
              fontSize: '24px',
              lineHeight: '26px'

            }),

          }}>
          Carry your Funk
        </Typography>
        <Typography sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '28px',
          fontWeight: 500,
          letterSpacing: '0em',
          textAlign: 'left',
          width: "530px",
          height: '80px',
          color: '#1B4B66',
          left: '610px',
          ...(isSmallScreen && {
            width: '162px',
            height: '32px',
            top: '69px',
            left: '147px',
            fontSize: '12px',
            lineHeight: '16px'

          }),
        }}>
          Trendy handbags collection for your party animal
        </Typography>
        <Grid sx={{
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
            top: '20px'

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

            <Typography sx={{ fontSize: '16px' }}>
              See more
            </Typography>
          </Button>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  )

}
export default CarouselLabel;