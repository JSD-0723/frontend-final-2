// import { AppBar, Typography } from "@mui/material";
// import Grid from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { ContentCut } from "@mui/icons-material";

// export const HeaderforMobile = () => {
//     return (
//         <AppBar>
//             <Grid sx={{ width: '360px', height: '24px', backgroundColor: 'white' }}>
//             </Grid>
//             <Grid justifyContent="space-between" sx={{ width: '360px', height: '26px', top: '15px', left: '16px' }}>
//                 <MenuIcon sx={{ width: '24px', height: '24px' }} />
//                 <Typography
//                     sx=
//                     {{
//                         width: '57px',
//                         height: '26px',
//                         fontFamily: 'Inter, sans-serif',
//                         fontWeight: '600',
//                         color:'#1B4B66',
//                         fontSize:'20px',
//                         lineHeight:'26px'
//                     }}>
//                     Home
//                 </Typography>
//                 <Box sx={{ width: '120px', height: '24px', gap: '24px' }}>
//                     <AddToPhotosOutlinedIcon sx={{ width: '24px', height: '24px' }} />
//                     <SearchOutlinedIcon sx={{width:'24px', height:'24px'}}/>
//                     <NotificationsNoneOutlinedIcon sx={{width:'24px', height:'24px'}}/>
//                 </Box>





//             </Grid>






//         </AppBar>







//     )

// }




import { AppBar, Typography, Grid, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const HeaderforMobile = () => {
  return (
    <AppBar sx={{ backgroundColor:'white', boxShadow:'none',display: { xs: 'block', lg: 'none' } }}>
        <Grid sx={{width:'360px', height:'24px'}}></Grid>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '100%', padding: '16px' }}>
        <Grid item>
          <MenuIcon sx={{ width: '24px', height: '24px', color:'#1B4B66' }} />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              color: '#1B4B66',
              fontSize: '20px',
              lineHeight: '26px'
            }}>
            Home
          </Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', gap: '16px' }}>
          <AddToPhotosOutlinedIcon  sx={{ width: '24px', height: '24px', color:'#1B4B66' }} />
          <SearchOutlinedIcon sx={{ width: '24px', height: '24px' , color:'#1B4B66'}} />
          <NotificationsNoneOutlinedIcon sx={{ width: '24px', height: '24px', color:'#1B4B66' }} />
        </Grid>
      </Grid>
    </AppBar>
  );
}
