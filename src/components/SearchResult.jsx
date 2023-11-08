import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import CardCategory from '../pages/Category/CardCategory';
import {Box} from '@mui/material';
const SearchResult = () => {
  const navigate = useNavigate();
  let {search} = useParams();
  const [searchResult, setSearchResult] = useState([]);
  console.log(search)

  useEffect(() => {
    console.log("hello raya");
    console.log(search);
    if (search) {
      const apiUrl = `https://estore-doxn.onrender.com/eStore/searchProduct?name=${search}&page=1`;
      axios.get(apiUrl)
        .then((response) => {
          console.log(response.data )
          const filter = response.data.products;
           setSearchResult(filter);
        })
        .catch((error) => {
          console.error('Error fetching Category data:', error);
        });
    }
    else {
      setSearchResult([]);
    }
  }, [search]);
  return (
    <Grid>
      <Box>
      {/* <Typography variant='h5'> Search Results for: {search}</Typography> */}
    <div style={{ display: 'flex', gap: '32px' }}>
      {searchResult.length === 0 ? (

        <Typography>No results found</Typography>
  
      ) : (
        searchResult.map((result) => (
          <Grid key={result.id}  sx={{ width: '284px', gap: '32px', height: '412px' }}>
            <CardCategory hideDiscount={true} products={result} />
          </Grid>
        ))
      )}
    </div>
    </Box>
    </Grid>
  );
};
export default SearchResult;