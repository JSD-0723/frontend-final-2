import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';



export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{backgroundColor:'white'}}>
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
               placeholder="search for products or brands....." 
               inputProps={{'area-label':'search'}}/>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}