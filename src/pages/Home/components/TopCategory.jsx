import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

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
    <Hidden mdUp >
    <Carousel>
      {image.map((image, index) => (
        <Paper key={index} sx={{width:'100%', height:'82px'}}>
          <img 
           src={image.mobile_img}
           alt="carouse Image"
           style={{width:'60px', height:'82px', borderRadius:'8px'}}
          />


        </Paper>
      ))}
    </Carousel>
    </Hidden>
  );
};

export default TopCategory;
