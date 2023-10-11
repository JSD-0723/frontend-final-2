// import { AppBar, Box, Toolbar, Typography } from '@mui/material';
// import * as React from 'react';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SearchBar from "../../components/SearchBar";
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// export default function Header() {

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
//         <Toolbar >
//           <Box sx={{ width: '108 px', height: '22 px' }}>
//             <Typography variant='h4' sx={{ marginRight: 4, color: '#17494D', fontFamily: 'Jost, sans-serif', fontWeight: 'bold' }}>
//               CORA'L</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', color: '#171520' }}>
//             <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif' }}>HandBags</Typography>
//             <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif' }}>Watches</Typography>
//             <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif' }}>SkinCare</Typography>
//             <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif' }}>Jewellary</Typography>
//             <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif' }}>Apperels</Typography>
//           </Box>

//           <SearchBar />
//           <Box sx={{ width: '114px', marginLeft: '100px', display: 'flex', height: '72px', alignItems: "center", justifyContent: "center" }}>
//             <FavoriteBorderIcon sx={{ color: '#1B4B66', marginRight: '14px', border: '2px' }} />
//             <PersonOutlineOutlinedIcon sx={{ color: '#1B4B66', marginRight: '14px', border: '2px' }} />
//             <WorkOutlineIcon sx={{ color: '#1B4B66', border: '2px', marginRight: '14px' }} />
//             {/* <Icons sx={{color:'#1B4B66', marginRight:'14px', border:'2px'}} icon={<FavoriteBorderIcon/>} />
//           <Icons sx={{color:'#1B4B66', marginRight:'14px', border:'2px'}} icon={<PersonOutlineOutlinedIcon/>} />
//           <Icons sx={{color:'#1B4B66', marginRight:'14px', border:'2px'}} icon={<WorkOutlineIcon/>} /> */}

//           </Box>

//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


import { AppBar, Box, Grid, Hidden, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchBar from "../../components/SearchBar";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between" 
        sx={{ display: { xs: 'none', lg: 'flex'}} }
        >
          <Box item  sm={6}>
            <Typography variant='h4' 
            sx={{ color: '#17494D',marginLeft:4, fontFamily: 'Jost, sans-serif', fontWeight: 'bold' }}>
              CORA'L
            </Typography>
          </Box>
          <Hidden smDown>
            <Box item  sm={6} sx={{ display: 'flex', color: '#171520' }}>
              <Typography sx={{fontFamily: 'Inter, sans-serif', marginRight: 2 }}>HandBags</Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', marginRight: 2 }}>Watches</Typography>
              <Typography sx={{fontFamily: 'Inter, sans-serif', marginRight: 2 }}>SkinCare</Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', marginRight: 2 }}>Jewellary</Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif',marginRight: 2 }}>Apperels</Typography>
            </Box>
          </Hidden>
          <Box item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <SearchBar />
            <Box sx={{ display: 'flex', height: '72px', alignItems: 'center',color: '#1B4B66', border:'2px' }}>
              <FavoriteBorderIcon sx={{  marginLeft: '10px' }} />
              <PersonOutlineOutlinedIcon sx={{ marginLeft: '10px' }} />
              <WorkOutlineIcon sx={{ marginLeft: '10px' }} />
            </Box>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
