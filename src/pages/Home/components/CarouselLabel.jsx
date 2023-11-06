// import { ThemeProvider } from "@emotion/react";
// import { Grid, Typography, useMediaQuery } from "@mui/material";
// import { Button } from "@mui/material";
// import { createTheme } from "@mui/material";
// import {Box} from "@mui/material";
// const theme = createTheme({
//   breakpoints:{
//     values:{
//       xs:0,
//       sm:600,
//       md:900,
//       lg:1200
//     }
//   }
// });
// const CarouselLabel = () => {
// const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
// const isTabletScreen = useMediaQuery(theme.breakpoints.down('md'));
// const isLaptopScreen= useMediaQuery(theme.breakpoints.down('lg'));

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container xs={12} md={12}>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '55%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           backgroundColor: 'rgba(222, 222, 222, 0.5)',
//           padding: '20px',
//           width: '50%',
//           height: '270px',
//           borderRadius: '24px',
//           marginLeft: 43,

//           ...(isSmallScreen && {
//             position: 'absolute',
//             width: '50%',
//             height: '100px',
//             borderRadius: '8px',
//             justifyContent:'center',
//             alignItems:'center',
//             top:'40%',
//             marginLeft:'30%',
//           }),
//           ...(isTabletScreen && {
//               width:'50%',
//               height:'170px',
//               top:'50%',
//               left:'50%'

//           }),
//           ...(isLaptopScreen && {
//              left:'50%',

//           }),
//         }}
      
//       >
//         <Grid container xs={12} md={12} >
//         <Typography
//           sx={{
//             fontWeight: 800,
//             fontSize: ' 3.75rem',
//             lineHeight: '84px',
//             textAlign: 'left',
//             letterSpacing: '0em',
//             color: "#1B4B66",
//             ...(isSmallScreen && {
//               width: '50%',
//               height: '52px',
//               marginTop: '10%',
//               left: '10%',
//               fontSize: '1.5rem',
//               lineHeight: '40px',
//             }),
//            ...(isTabletScreen && {
//               width:'200px',
//               letterSpacing: '0em',
//               fontSize:'2rem',
//               height:'70px',
//               lineHeight:'26px',
              
              
//            }),
//            ...(isLaptopScreen &&{
//               width:'250px',
//               fontSize:'1.85rem'  ,
//               height:'80px',
//               lineHeight:'26px' ,     
      
//            })

//           }}>
//           Carry your Funk
//         </Typography>
//         </Grid>
//         <Grid container xs={12} md={12}>
//         <Typography 
//          sx={{
//           fontFamily: 'Inter, sans-serif',
//           fontSize: '1.75rem',
//           fontWeight: 500,
//           letterSpacing: '0em',
//           textAlign: 'left',
//           width: "530px",
//           height: '80px',
//           color: '#1B4B66',
//           left: '610px',
//           ...(isSmallScreen && {
//             width: '162px',
//             height: '50px',
//             left: '10%',
//             fontSize: '0.75rem',
//             lineHeight: '16px',
//             marginTop:'2%'

//           }),
//           ...(isTabletScreen &&{
//             fontSize:'1rem',
//             height:'80px',
//             width:'250px',
//             lineHeight:'26px',

//           }),

//           ...(isLaptopScreen && {
//            fontSize:'1.5rem',
//            width:'350px',
//            height:'90px',
//            lineHeight:'26px'


//           })
//         }}>
//           Trendy handbags collection for your party animal
//         </Typography>
//         </Grid>
//         <Grid  md={12}
//          sx={{
//           alignItems: 'center',
//           justifyContent: 'center'
//         }}>
//           {isSmallScreen || isTabletScreen ?null: ( 
//           <Button disableRipple={true} sx={{
//             '&:hover': {
//               backgroundColor: '#1B4B66',
//             },
//             color: 'white',
//             backgroundColor: '#1B4B66',
//             borderRadius: '8px',
//             p: '10px 65px',
//             fontFamily: 'Inter, sans-serif',
//             textAlign: 'center',
//             textTransform: 'none',
//             height: '44px',
//             top: '20px',

          
//             ...(isLaptopScreen &&{
//               height:'45px',

//             })

//           }}>
//             <svg
//               width="25"
//               height="24"
//               viewBox="0 0 25 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M5.5 12.5H19.5M19.5 12.5L15 8M19.5 12.5L15 17"
//                 stroke="white"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round" />

//             </svg>

//             <Typography 
//              sx={{ fontSize: '0.75rem' }}>
//               See more
//             </Typography>
//           </Button>
//           )}
//         </Grid>
//       </Box>
//       </Grid>
//      </ThemeProvider>
//   )

// }
// export default CarouselLabel;
import { ThemeProvider } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material";
import {Box} from "@mui/material";

const CarouselLabel = () => {
  const theme = createTheme({
    breakpoints:{
      values:{
        xs:0,
        sm:600,
        md:900,
        lg:1200,
        xl:1600,
      }
    }
  });
// const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
// const isTabletScreen = useMediaQuery(theme.breakpoints.down('md'));
// const isLaptopScreen= useMediaQuery(theme.breakpoints.down('lg'));
// const isBigScreen = useMediaQuery(theme.breakpoints.down('xl'));
const isSmallScreen = useMediaQuery('(max-width:600px)');
const isTabletScreen = useMediaQuery('(max-width:900px)');
const isLaptopScreen = useMediaQuery('(max-width:1200px)');
const isXLScreen = useMediaQuery('(max-width:1600px)');
const isBigScreen = useMediaQuery('(min-width:1600px)');
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} md={12}>
      <Box
        sx={{
          position: 'absolute',
          objectFit:'cover',
          top: '55%',
          left: '50%',
          justifyContent:'end',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(222, 222, 222, 0.5)',
          padding: '20px',
          width: '100%',
          height: '270px',
          borderRadius: '24px',
          marginLeft: '40%',

          ...(isSmallScreen && {
            width:'100%',
            flexWrap:'wrap',
            height: '100px',
            borderRadius: '8px',
            // justifyContent:'center',
            // alignItems:'center',
            top:'40%',
            marginRight:'-100%',
          }),
          ...(isTabletScreen && {
              width:'100%',
              height:'170px',
              top:'50%',
              marginLeft:'40%'

          }),
          ...(isLaptopScreen && {
             left:'50%',
             marginLeft:'40%',

          }),
        }}
      
      >
        <Grid container xs={12} md={12} >
        <Typography
        sx={{
          fontWeight: 800,
          fontSize: isBigScreen ? '4rem' : isSmallScreen ? '1.5rem' :isTabletScreen?'2rem':isLaptopScreen?'2.5rem':'3.75rem',
          lineHeight: isXLScreen ? '30px' : isLaptopScreen ? '26px' : '84px',
          marginLeft:isBigScreen?'3%':isXLScreen?'2%':'0%',
          marginTop:isBigScreen?'.5%':isXLScreen?'1%':'0%',
          textAlign: 'left',
          letterSpacing: '0em',
          color: '#1B4B66',
        }}
          // sx={{
          //   fontWeight: 800,
          //   fontSize: ' 3.75rem',
          //   lineHeight: '84px',
          //   textAlign: 'left',
          //   letterSpacing: '0em',
          //   color: "#1B4B66",
          //   ...(isSmallScreen && {
          //     width: '50%',
          //     height: '52px',
          //     marginTop: '10%',
          //     left: '10%',
          //     fontSize: '1.5rem',
          //     lineHeight: '40px',
          //   }),
          //  ...(isTabletScreen && {
          //     width:'200px',
          //     letterSpacing: '0em',
          //     fontSize:'2rem',
          //     height:'70px',
          //     lineHeight:'26px',
              
              
          //  }),
          //  ...(isLaptopScreen &&{
          //     width:'250px',
          //     fontSize:'1.85rem'  ,
          //     height:'80px',
          //     lineHeight:'26px' ,     
      
          //  })

          // }}
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
          width:isBigScreen?'900px':isSmallScreen?'250px':isTabletScreen?'400px':'500px',
          fontSize: isSmallScreen ? '1.5rem' : isBigScreen ? '3rem':isTabletScreen?'2rem':'1.75rem',
          marginLeft:isBigScreen?'3%':isXLScreen?'2%':isLaptopScreen? '3%':'0%',
          marginTop:isXLScreen?'3%':'0%',
          textAlign: 'left',
         
        
          
      
          // ...(isSmallScreen && {
          //   width: '162px',
          //   height: '50px',
          //   left: '10%', 
          //   fontSize: '0.75rem',
          //   lineHeight: '16px',
          //   marginTop: '2%'
          // }),
      
          // ...(isTabletScreen &&{
          //   fontSize: '1rem',
          //   height: '80px',
          //   width: '250px',
          //   lineHeight: '26px'
          // }),
      
          // ...(isLaptopScreen && {
          //   fontSize: '1.5rem',
          //   width: '350px',
          //   height: '90px',
          //   lineHeight: '26px'
          // }),
      
          // ...(isXLScreen && {
          //   fontSize: '2.2rem', // يمكنك ضبط حجم الخط للشاشات الكبيرة بحجم الـ XL
          //   width: '500px', // يمكنك ضبط عرض النص للشاشات الكبيرة بحجم الـ XL
          //   height: '120px', // يمكنك ضبط ارتفاع النص للشاشات الكبيرة بحجم الـ XL
          //   lineHeight: '50px' // يمكنك ضبط ارتفاع الخط للشاشات الكبيرة بحجم الـ XL
          // })
        }} 
        //  sx={{
        //   fontFamily: 'Inter, sans-serif',
        //   fontSize: '1.75rem',
        //   fontWeight: 500,
        //   letterSpacing: '0em',
        //   textAlign: 'left',
        //   width: "530px",
        //   height: '80px',
        //   color: '#1B4B66',
        //   left: '610px',
        //   ...(isSmallScreen && {
        //     width: '162px',
        //     height: '50px',
        //     left: '10%',
        //     fontSize: '0.75rem',
        //     lineHeight: '16px',
        //     marginTop:'2%'

        //   }),
        //   ...(isTabletScreen &&{
        //     fontSize:'1rem',
        //     height:'80px',
        //     width:'250px',
        //     lineHeight:'26px',

        //   }),

        //   ...(isLaptopScreen && {
        //    fontSize:'1.5rem',
        //    width:'350px',
        //    height:'90px',
        //    lineHeight:'26px'


        //   })
        // }}
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
            marginLeft: isBigScreen?'3%':isXLScreen?'2%':'1%',
            marginTop:isLaptopScreen?'2%':'0%',

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
     </ThemeProvider>
  )

}
export default CarouselLabel;
