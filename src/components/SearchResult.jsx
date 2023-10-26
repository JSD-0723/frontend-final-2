import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SearchResult =(props)  => {
  console.log("25215421545215421154521");
  console.log(props.raya);
  const data = props.raya;
  return (

    <div>
    raya
    {props.raya.map((result) => (  
  <Card key={result.id}>
    <CardContent>
      <img src={result.img} alt={result.name} />
      <Typography variant="h5">{result.name}</Typography>
    </CardContent>
  </Card>
))}

    </div>
  );
};
 export default SearchResult;
// SearchResult.js
// SearchResult.js
// import React, { useEffect, useState } from 'react';

// export default function SearchResult({ location }) {
//   const query = new URLSearchParams(location.search).get('query');
//   const [searchResult, setSearchResult] = useState([]);

//   useEffect(() => {
//     if (query) {
//       const apiUrl = `https://estore-doxn.onrender.com/eStore/searchProduct?name=${query}`;

//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => {
//           setSearchResult(data);
//         })
//         .catch((error) => {
//           console.error('Error fetching search results:', error);
//         });
//     }
//   }, [query]);

//   return (
//     <div>
//       <h2>Search Results for "{query}"</h2>
//       <ul>
//         {searchResult.map((result) => (
//           <li key={result.id}>{result.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
