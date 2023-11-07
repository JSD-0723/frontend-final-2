import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import CardCategory from '../pages/Category/CardCategory';
import NewArrivalsCard from '../pages/Home/components/NewArrivalsCard';
import TextRating from './Stars';
import CardsGrid from "../components/CardsGrid";
import {Box} from '@mui/material';
const SearchResult = () => {
  const navigate = useNavigate();
  const { search } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (search) {
      const apiUrl = `https://estore-doxn.onrender.com/eStore/searchProduct?name=${search}`;
      axios.get(apiUrl)
        .then((response) => {
          console.log(response.data , "hey this is search result");
          const filter = response.data;
          return setSearchResult(filter);
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
        searchResult.map((result, index) => (
          <Box >
            <NewArrivalsCard  productsData={result} />
          </Box>


        ))
      )}
    </div>
    </Box>
    </Grid>
  );
};
export default SearchResult;
