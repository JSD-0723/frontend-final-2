import axios from 'axios';
import { AppBar, Box, Grid, Hidden, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import SearchBar from "../../components/SearchBar";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { headerIcons } from '../../data/HeaderDummyData';
import { IconButton } from '@mui/material';

export default function Header() {

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

  const [categoryName, setCategoryName] = useState('');
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetchDataFromAPI()
  }, []);
  if (Loading) {
    <Typography>Loadding....</Typography>
  }

  return (
    <Hidden smDown>
      <Grid md={12} lg={12} sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{backgroundColor: 'white', boxShadow: 'none'}}>
          <Toolbar sx={{display:'grid',gridTemplateColumns:'1fr auto' ,justifyContent: 'space-between' }}>
            <Grid container lg={12} md={12} alignItems="center" justifyContent="space-between"
              sx={{ display: { xs: 'none', lg: 'flex' }}}

            >
              <Box item >
                <Typography variant='h4'
                  sx={{ color: '#17494D', fontFamily: 'Jost, sans-serif', fontWeight: 'bold' }}>
                  {headerIcons.Coral}
                </Typography>
              </Box>
              {/* <Hidden smDown> */}
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

              {/* </Hidden> */}

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <SearchBar />

                <IconButton size="large" color="inherit">
                  {headerIcons.favouriteIcon}
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
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

              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Hidden>
  )
} 
