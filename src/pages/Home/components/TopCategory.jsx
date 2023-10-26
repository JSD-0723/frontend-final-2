import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import {Hidden} from "@mui/material";
import { Grid } from "@mui/material";
import {Typography , Box} from "@mui/material";

const TopCategory = () => {
  const [image, setImage] = useState([]);

 useEffect(()=>{
  const apiUrl = 'https://estore-doxn.onrender.com/eStore/TopCategories';

    axios.get(apiUrl)
      .then((response) => {
        console.log('Here my topCategory', response.data);
        return setImage(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Category data:', error);
      });
      
     
  },[]);
  return (
    <Hidden mdUp>
    <Carousel 
      animation="slider"
      autoPlay={true}
      interval={1000} 
    >
      <Grid container spacing={2} sx={{  
                flexWrap:"nowrap", 
                overflowX:"scroll"  , 
                whiteSpace:"nowrap"}} 
             >
        {image.map((image, index) => (
          <Grid item key={index} >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 2,
                marginRight: 2,
                height: "82px",
                flexDirection:'row', 
                whiteSpace:"nowrap", 
                maxWidth:"100%" 
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "82px",
                  display:'flex',
                }}
              >
            
                <img
                  src={image.mobile_img}
                  style={{ width: "60px", height: "60px", borderRadius: "8px" }}
                />
              
                <p variant="caption"  sx={{display:'flex', justifyContent:'flex-end', flexDirection:'column'}}>
                  {image.name}
                </p>
              </Box>
         
            </Box>
          </Grid>
        ))}
      </Grid>
    </Carousel>
  </Hidden>
);
};

export default TopCategory;