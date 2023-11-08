// import axios from 'axios';
// import { AppBar, Box, Button, Grid, Hidden, MenuItem, Toolbar, Typography } from '@mui/material';
// import * as React from 'react';
// import SearchBar from "../../components/SearchBar";
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { headerIcons } from '../../data/HeaderDummyData';
// import { IconButton } from '@mui/material';
// import {Popover} from '@mui/material';
// export default function Header() {
//   const [categoryName, setCategoryName] = useState('');
//   const [Loading, setLoading] = useState(true);
//   const[isPopoverOpen , setPopoverOpen] = useState(false);

//   const fetchDataFromAPI = () => {
//     const apiUrl = 'https://estore-doxn.onrender.com/eStore/viewCategoryName';

//     axios.get(apiUrl)
//       .then((response) => {
//         console.log('Data from the API:', response.data);
//         return setCategoryName(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       })
//       .finally(setLoading(false));
//   }

//   useEffect(() => {
//     fetchDataFromAPI()
//   }, []);
//   if (Loading) {
//     <Typography>Loadding....</Typography>
//   }
//   const openPopover = (e) =>{
//     setPopoverOpen(true);
//     console.log("menu open");
//     console.log("menu open");
//     console.log("menu open");
//     console.log("menu open");
//     console.log("menu open");    

//   };
//   const closePopover = (e)=>{
//     setPopoverOpen(false);
//   }

//   return (
//     <Hidden smDown>
//       <Grid md={12} lg={12} sx={{ flexGrow: 1 }}>
//         <AppBar position="sticky" sx={{backgroundColor: 'white', boxShadow: 'none'}}>
//           <Toolbar sx={{display:'grid',gridTemplateColumns:'1fr auto' ,justifyContent: 'space-between' }}>
//             <Grid container lg={12} md={12} alignItems="center" justifyContent="space-between"
//               sx={{ display: { xs: 'none', lg: 'flex' }}}

//             >
//               <Box item >
//                 <Link to="/frontend-final-2">
//                 <Typography variant='h4'
//                   sx={{ color: '#17494D', fontFamily: 'Jost, sans-serif', fontWeight: 'bold' }}>
//                   {headerIcons.Coral}
//                 </Typography>
//                 </Link>
//               </Box>
//               {/* <Hidden smDown> */}
//               <Box item sx={{ display: 'flex', color: '#171520', gap: 2 }}>
//                 {categoryName &&
//                   categoryName.slice(0, 5).map((category, index) => (
//                     <Link
//                       to={`/frontend-final-2/category/${category.name.replace(/ /g, "")}`}
//                       key={index}
//                       style={{ fontFamily: 'Inter, sans-serif', color: '#171520', textDecoration: 'none' }}>{category.name}
//                     </Link>
//                   ))}
//               </Box>

//               {/* </Hidden> */}

//               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//                 <SearchBar />

//                 <IconButton size="large" color="inherit">
//                   {headerIcons.favouriteIcon}
//                 </IconButton>
//                 <IconButton
//                   size="large"
//                   color="inherit"
//                   onClick={openPopover}

//                 >
//                   {headerIcons.userAccountIcon}
//                 </IconButton>
//                 <IconButton
//                   size="large"
//                   edge="end"
//                   color="inherit"
//                 >
//                   {headerIcons.bagIcon}
//                 </IconButton>
//                 {/* //dropDown to display sinup and login  */}
//                 {isPopoverOpen &&(
//                   <Box>
//                     <Button>Sign Up</Button>
//                     <Button>Login</Button>
//                   </Box>
//                 )}


//               </Box>
//             </Grid>
//           </Toolbar>
//         </AppBar>
//       </Grid>
//     </Hidden>
//   )
// } 
import axios from 'axios';
import { AppBar, Box, Button, Grid, Hidden, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import SearchBar from "../../components/SearchBar";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { headerIcons } from '../../data/HeaderDummyData';
import { IconButton } from '@mui/material';
import { Popover } from '@mui/material';
import { Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export default function Header() {
  const [categoryName, setCategoryName] = useState('');
  const [Loading, setLoading] = useState(true);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const fetchDataFromAPI = () => {
    const apiUrl = 'https://estore-doxn.onrender.com/eStore/viewCategoryName';

    axios.get(apiUrl)
      .then((response) => {
        console.log('Data from the API:', response.data);
        return setCategoryName(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(setLoading(false));
  }

  useEffect(() => {
    fetchDataFromAPI()
  }, []);
  if (Loading) {
    <Typography>Loading....</Typography>
  }
  const openPopover = (e) => {
    setAnchorEl(e.currentTarget);
    setPopoverOpen(true);
  };

  const closePopover = () => {
    setAnchorEl(null);
    setPopoverOpen(false);
  };

  return (
    <Hidden smDown>
      <Grid md={12} lg={12} sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
          <Toolbar sx={{ display: 'grid', gridTemplateColumns: '1fr auto', justifyContent: 'space-between' }}>
            <Grid container lg={12} md={12} alignItems="center" justifyContent="space-between"
              sx={{ display: { xs: 'none', lg: 'flex' } }}

            >
              <Box item >
                <Link component={Link} to="/frontend-final-2">
                  <Typography variant='h4'
                    sx={{ color: '#17494D', fontFamily: 'Jost, sans-serif', fontWeight: 'bold' }}>
                    {headerIcons.Coral}
                  </Typography>
                </Link>
              </Box>
              <Box item sx={{ display: 'flex', color: '#171520', gap: 2 }}>
                {categoryName &&
                  categoryName.slice(0, 5).map((category, index) => (
                    <Link
                      to={`/frontend-final-2/category/${category.name.replace(/ /g, "")}`}
                      key={index}
                      style={{ fontFamily: 'Inter, sans-serif', color: '#171520', textDecoration: 'none' }}>{category.name}
                    </Link>
                  ))}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <SearchBar />

                <IconButton size="large" color="inherit">
                  {headerIcons.favouriteIcon}
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={openPopover}

                >
                  {headerIcons.userAccountIcon}
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                >
                  {headerIcons.bagIcon}
                </IconButton>
                <Popover
                  open={isPopoverOpen}
                  anchorEl={anchorEl}
                  onClose={closePopover}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  style={{marginLeft:'-50px'}}
                >
                  <div style={{
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: '200px',
                    height: '300px',
                  }}>


                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h6" variant="h6">
                      Have Account?
                    </Typography>
                    <Button
                      sx={{ m: 1, borderColor: '#626262', width: '120px', backgroundColor: '#F1F1F1', color: 'black' }}
                      component={Link}
                      to="/frontend-final-2/signup" variant="outlined" onClick={closePopover}>
                      Sign Up
                    </Button>
                    <Button
                      sx={{ m: 1, borderColor: '#626262', width: '120px', backgroundColor: '#F1F1F1', color: 'black' }}
                      component={Link}
                      to="/frontend-final-2/login" variant="outlined" onClick={closePopover}>
                      Login
                    </Button>
                    <Button
                      sx={{ m: 1, borderColor: '#626262', width: '120px', backgroundColor: '#F1F1F1', color: 'black' }}
                      variant="outlined" onClick={closePopover}>
                      Logout
                    </Button>
                  </div>
                </Popover>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Hidden>
  )
}
