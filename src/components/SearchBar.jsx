import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { SearchBarStyles } from '../styles/SearchBarStyles';
import { Typography } from '@mui/material';
import SearchResult from './SearchResult';
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { InputBase } from '@mui/material';
import { Paper } from '@mui/material';
export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault(); 
    if (search) {
      setLoading(true);
      navigate(`/frontend-final-2/searchresult/${search}`);
    }
  }
  return (
    <Grid container justifyContent="flex-end" sx={SearchBarStyles.containerGrid}>
      <Paper
        component="form"
        sx={SearchBarStyles.paper}
        onSubmit={handleSearch} 
      >
        <IconButton type="submit" aria-label="search"> 
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={SearchBarStyles.inputBase}
          placeholder="Search for product or brand...."
          inputProps={{
            'aria-label': 'Search for product or brand....',
          }}
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </Paper>
      {loading ? (
        <Typography>loading....</Typography>
      ) : (
        <SearchResult />
      )}
    </Grid>
  );
}