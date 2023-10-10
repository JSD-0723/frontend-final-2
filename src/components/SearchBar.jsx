// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';

// export default function SearchBar() {
//     return (
//         <Paper
//             component="form"
//             sx={{
//                 p: '2px 4px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 width: '400px',
//                 height: '44px',
//                 borderColor: 'black',
//                 borderRadius: '4px',
//                 marginLeft: '170px',
//                 color: '#626262',
//                 backgroundColor: '#F1F1F1',
//                 boxShadow: 'none'

//             }}
//         >
//             <IconButton type="button" aria-label="search">
//                 <SearchIcon />
//             </IconButton>
//             <InputBase sx={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 lineHeight: '18px',
//                 width: '221px',
//                 height: '18px'
//             }}
//                 placeholder="Search for products or brands...."
//                 inputProps={{ 'aria-label': 'Search for products or brands....' }}
//             />

//         </Paper>
//     );
// }
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid'; 

export default function SearchBar() {
  return (
    <Grid container justifyContent="flex-end" sx={{ display: { xs: 'none', lg: 'flex' } }}>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '400px',
          height: '44px',
          borderColor: 'black',
          borderRadius: '4px',
          color: '#626262',
          backgroundColor: '#F1F1F1',
          boxShadow: 'none',
        }}
      >
        <IconButton type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            width: '221px',
            height: '18px',
          }}
          placeholder="Search for products or brands...."
          inputProps={{ 'aria-label': 'Search for products or brands....' }}
        />
      </Paper>
    </Grid>
  );
}
