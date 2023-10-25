// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import Grid from '@mui/material/Grid';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { SearchBarStyles } from '../styles/SearchBarStyles';
// import { Typography } from '@mui/material';
// import SearchResult from './SearchResult';
// import { useNavigate } from 'react-router-dom';


// export default function SearchBar() {
//   const [searchResult, setSearchResult] = useState([]);
//   const [search, setSearch] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();


  
//   const handleSearch = () => {
//     if (search) {    
//       setLoading(true);
//       navigate('/frontend-final-2/SearchResult');
//     }
//   }

//   useEffect(() => {
//     if(search){
//     const apiUrl = 'https://estore-doxn.onrender.com/eStore/searchProduct?name=ZARA';

//     axios.get(apiUrl)
//       .then((response) => {
//         // const filteredResults = response.data.filter(item=>
//         //   item.name.toLowerCase().includes(search.toLowerCase())
//         //   );
//         //   console.log("hello new raya djkkkkkkkkkkkkkkkkkkkksaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaallllllllllllllllllllllld")
//         // console.log(filteredResults);
//         // return setSearchResult(filteredResults);
//         setSearchResult(response.data);
//         console.log("raya kjkdjs;ldjsf")        
//       })
//       .catch((error) => {
//         console.error('Error fetching Category data:', error);
//         setLoading(false);
//       });
//     } 
//     // else {
//     //   setSearchResult([]);
//     // }
//   }, [search]);
  
//   // const filterData=()=>{
//   //   if(!search){
//   //     setSearchResult([]);
//   //   }
//   // }

  

//   return (
//     <Grid container justifyContent="flex-end" sx={SearchBarStyles.containerGrid}>
//       <Paper
//         component="form"
//         sx={SearchBarStyles.paper}
//       >
//         <IconButton type="button" aria-label="search">
//           <SearchIcon/>
//         </IconButton>
//         <InputBase
//           sx={SearchBarStyles.inputBase}
//           placeholder="Search for products or brands...."
//           inputProps={{
//             'aria-label': 'Search for products or brands....',
//           }}
//           onChange={(event) => {
//             console.log(event.target.value)
//           }}
//           onKeyDown={(event) => {
//             if (event.key == 'Enter') {
//               handleSearch();
//             }
//           }}
//         />
//       </Paper>
//       {loading ? (
//         <Typography>loading....</Typography>

//       ) : (
//         <SearchResult raya={searchResult} />

//       )
//       }

//     </Grid>
//   );
// }

// SearchBar.js
// SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navigate(`/searchResult?query=${search}`);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for products or brands..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
