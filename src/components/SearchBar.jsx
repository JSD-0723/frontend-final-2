import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import {Box} from '@mui/material';
import { useState, useEffect } from 'react';
import { SearchBarStyles } from '../styles/SearchBarStyles';
import { Typography } from '@mui/material';
import SearchResult from './SearchResult';
import { useNavigate } from 'react-router-dom';


export default function SearchBar() {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSearch = () => {
    if (search) {    
      setLoading(true);
      navigate(`/frontend-final-2/searchresult/${search}`);
    }
  }
  return (
    <Grid container  justifyContent="flex-end" sx={SearchBarStyles.containerGrid}>
      <Paper
        component="form"
        sx={SearchBarStyles.paper}
      >
        <IconButton type="button" aria-label="search">
          <SearchIcon/>
        </IconButton>
        <InputBase
          sx={SearchBarStyles.inputBase}
          placeholder="Search for product or brand...."
          inputProps={{
            'aria-label': 'Search for product or brand....',
          }}
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)

          }}
          onKeyDown={(event) => {
            if (event.key == 'Enter') {
              handleSearch();
            }
          }}
        />
      </Paper>
      {loading ? (
        <Typography>loading....</Typography>

      ) : (
        <SearchResult/>
      )
      }

    </Grid>
  );
}


