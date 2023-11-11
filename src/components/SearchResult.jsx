import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid, Pagination } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import CardCategory from '../pages/Category/CardCategory';
const SearchResult = () => {
  const navigate = useNavigate();
  let {search} = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [page,setPage] = useState(1);
  const ItemPerRow =4;
  const ItemsPerPage = 10;
  
  console.log(search)

  useEffect(() => {
    console.log(search);
    if (search) {
      const apiUrl = `https://estore-doxn.onrender.com/eStore/searchProduct?name=${search}&page=${page}`;
      axios.get(apiUrl)
        .then((response) => {
          console.log(response.data )
          const filter = response.data.products;
           setSearchResult(filter);
           setPage(Math.ceil(response.data.Products / ItemsPerPage));

        })
        .catch((error) => {
          console.error('Error fetching Category data:', error);
        });
    }
    else {
      setSearchResult([]);
    }
  }, [search , page]);
  const totalItems = Math.ceil(searchResult.lenght/ItemPerRow);
  const totalPages = Math.ceil(searchResult.length / ItemsPerPage);
  const  startIndex = (page - 1 ) * ItemsPerPage;
  const endInex = startIndex + ItemsPerPage;

  const displayResults = searchResult.slice(startIndex , endInex);

  const handlePageChange =(newPage) =>{
    setPage(newPage);
  };
  return (
    <Grid>
      <Box>
      {/* <Typography variant='h5'> Search Results for: {search}</Typography> */}
    <Grid container sx={{ display: 'flex', flexWrap:'wrap', marginLeft:2,marginRight:2}}>
      {searchResult.length === 0 ? (

        <Typography>No results found</Typography>
  
      ) : (
        searchResult.map((result) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={result.id}  sx={{ width: '284px',flexWrap:'wrap', gap: '32px', height: '412px' }}>
            <CardCategory  hideDiscount={true} products={result} />
          </Grid>
        ))
      )}
    </Grid>
    {/* <Pagination 
      page={page}
      count={totalPages}
      onChange={(e , newPage)=> handlePageChange(newPage)}
    /> */}
    </Box>
    </Grid>
  );
};
export default SearchResult;