import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SearchResult = ({ searchResults }) => {
  return (
    <div>
      {searchResults.map((result, index) => (  
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
