

  import * as React from 'react';
  import Paper from '@mui/material/Paper';
  import InputBase from '@mui/material/InputBase';
  import IconButton from '@mui/material/IconButton';
  import SearchIcon from '@mui/icons-material/Search';
  import Grid from '@mui/material/Grid'; 
  
  export default function SearchBar() {
    // const[search, setSearch]= useState('');
// const[searchResult,setSearchResult]=useState([]);
// const[categories, setCategories]=useState([]);



// useEffect(()=>{
//  fetchCategories()
//  .then((data)=>setCategories(data))
//  .catch((error)=>console.error('error fetching categories', error));

// }, []);

//   const handleSearch = ()=>{
//    if(search){
//      searchProduct(search)
//      .then((data)=> setSearchResult(data))
//      .catch((error)=> console.error('Error searching Product or Brand'));
//    }else{
//     setSearchResult([]);
//    }

//    };

    return (
      <Grid container justifyContent="flex-end" sx={{ display: { xs: 'none', lg: 'flex' } }}>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '362px',
            height: '44px',
            marginRight:4,
            borderColor: 'black',
            borderRadius: '4px',
            color: '#626262',
            backgroundColor: '#F1F1F1',
            boxShadow: 'none',
          }}
        >
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '18px',
              width: '221px',
              height: '18px',
            }}
            placeholder="Search for products or brands...."
            inputProps={{ 'aria-label': 'Search for products or brands....' }}
          />
        </Paper>
          {/* <card>
        {searchResult>0
        ? searchResult.map((categories)=>(
          <card key={category.id}
        ))
      }



      </card> */}
      </Grid>
    );
  }