import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import {Box} from "@mui/material";

const CarouselLabel = () => {

const isSmallScreen = useMediaQuery('(max-width:600px)');
const isTabletScreen = useMediaQuery('(max-width:900px)');
const isLaptopScreen = useMediaQuery('(max-width:1200px)');
const isXLScreen = useMediaQuery('(max-width:1600px)');
const isBigScreen = useMediaQuery('(min-width:1600px)');
  return (
      <Grid container xs={12} md={12}>
      <Box
        sx={{
          position: 'absolute',
          objectFit:'cover',
          left: '50%',
          justifyContent:'end',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(225, 225, 225, 0.7)',
          padding: '20px',
          width: '100%',
          height: '270px',
          borderRadius: '24px',
          marginLeft: '40%',
          top:'50%',

          ...(isSmallScreen && {
            width:'100%',
            flexWrap:'wrap',
            height: '80px',
            borderRadius: '8px',
            justifyContent:'center',
            alignItems:'center',
            marginRight:'-100%',
            marginTop:'100px',
            top:'57%'
          }),
          ...(isTabletScreen && {
              width:'100%',
              height:'170px',
              marginLeft:'40%',
                        

          }),
          ...(isLaptopScreen && {
             left:'50%',
             marginLeft:'40%',
             marginTop:'2%'
            

          }),
          ...(isXLScreen &&{
            left:'50%',
            marginTop:'1.5%'
          })
        }}
      
      >
        <Grid container xs={12} md={12} >
        <Typography
        sx={{
          fontWeight: 800,
          fontSize: isBigScreen ? '4rem' : isSmallScreen ? '1rem' :isTabletScreen?'2rem':isLaptopScreen?'2.5rem':'3.75rem',
          lineHeight: isXLScreen ? '30px' : isLaptopScreen ? '26px' : '84px',
          marginLeft:isBigScreen?'3%':isXLScreen?'2%':'0%',
          marginTop:isBigScreen?'-0.5%':isXLScreen?'2%':isTabletScreen?'-2%':'0%',
          textAlign: 'left',
          letterSpacing: '0em',
          color: '#1B4B66',
        }}
        
          >
          Carry your Funk
        </Typography>
        </Grid>
        <Grid container xs={12} md={12}>
        <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          height: '80px',
          color: '#1B4B66',
          left: '50%', 
          height:'100%',
          flexWrap:'wrap',
          lineHeight:1,
          width:isBigScreen?'900px':isSmallScreen?'150px':isTabletScreen?'350px':'500px',
          fontSize: isSmallScreen ? '1rem' : isBigScreen ? '2.5rem':isTabletScreen?'1.5rem':'1.75rem',
          marginLeft:isBigScreen?'3.1%':isXLScreen?'2.5%':isLaptopScreen? '3%':'0%',
          marginTop:isXLScreen?'3%':isSmallScreen?'15px':isTabletScreen?'-20px':isBigScreen?'0%':'0%',
          textAlign: 'left',
         
        
          
      
          
        }} 
       
        >
          Trendy handbags collection for your party animal
        </Typography>
        </Grid>
        <Grid  md={12}
         sx={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {isSmallScreen || isTabletScreen ?null: ( 
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
            height:'44px',
            top: '20px',
            marginLeft: isBigScreen?'3%':isXLScreen?'2.5%':'1%',
            marginTop:isLaptopScreen?'2%':isXLScreen?'0.75%':isBigScreen?'-0.3%':'0%',

          }}>
            <svg
              width="30"
              height="35"
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
             sx={{
               fontSize:isBigScreen?'1.5rem':isXLScreen?'1.5rem':'1.5rem',
               alignItems:'center',
               justifyContent:'center' 
               }}>
              See more
            </Typography>
          </Button>
          )}
        </Grid>
      </Box>
      </Grid>
  )

}
export default CarouselLabel;
