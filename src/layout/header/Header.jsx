import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import  SearchBar from "../../components/SearchBar";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{backgroundColor:'white', boxShadow: 'none'}}>
        <Toolbar >
          <Box sx={{ width: '108 px', height: '22 px'}}>
            <Typography variant='h4' sx={{ marginRight: 4 , color:'#17494D',  fontFamily: 'Jost, sans-serif', fontWeight: 'bold'}}>
              CORA'L</Typography>
          </Box>
          <Box sx={{ display: 'flex' , color:'#171520', fontFamily: 'Inter, sans-serif'}}>
            <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif' }}>HandBags</Typography>
            <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif' }}>Watches</Typography>
            <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif' }}>SkinCare</Typography>
            <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif'}}>Jewellary</Typography>
            <Typography sx={{ marginRight: 2, fontFamily: 'Inter, sans-serif'}}>Apperels</Typography>
          </Box>
          
          <SearchBar /> 
          <Box sx={{width:'114px',marginLeft:'100px', display:'flex',height:'72px', alignItems:"center", justifyContent:"center"}}>
          <FavoriteBorderIcon  sx={{color:'#1B4B66', marginRight:'14px', border:'2px'}} />
          <PersonOutlineOutlinedIcon sx={{color:'#1B4B66', marginRight:'14px', border:'2px'}} />
          <WorkOutlineIcon sx={{color:'#1B4B66', border:'2px', marginRight:'14px'}}/>
          {/* <Icons sx={{color:'#1B4B66', marginRight:'14px', border:'2px'}} icon={<FavoriteBorderIcon/>} />
          <Icons sx={{color:'#1B4B66', marginRight:'14px', border:'2px'}} icon={<PersonOutlineOutlinedIcon/>} />
          <Icons sx={{color:'#1B4B66', marginRight:'14px', border:'2px'}} icon={<WorkOutlineIcon/>} /> */}

          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}