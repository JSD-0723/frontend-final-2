import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';


 

export default function Header() {
  
  return (
  <Box>
  <AppBar position="sticky">
  <Toolbar>
    <Typography variant='h4'>CORAL'S</Typography> 
    <Typography sx={{marginRight : 2}}>HandBags</Typography>
    <Typography sx={{marginRight : 2}}>Watches</Typography>
    <Typography sx={{marginRight : 2}}>SkinCare</Typography>
    <Typography sx={{marginRight : 2}}>Jewellary</Typography>
    <Typography sx={{marginRight : 2}}>Apperels</Typography>
  </Toolbar>
  </AppBar>
  </Box> 
  );
}