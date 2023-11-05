import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Hidden } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { TopCategoryStyles } from "../../../styles/TopCategoryStyles";
const TopCategory = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://estore-doxn.onrender.com/eStore/TopCategories';

    axios.get(apiUrl)
      .then((response) => {
        console.log('Here my topCategory', response.data);
        return setImage(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Category data:', error);
      });


  }, []);
  return (
    <Hidden mdUp>
      <Box sx={TopCategoryStyles.itemsBox}></Box>
      <Box sx={TopCategoryStyles.titleBox}>
      <Typography sx={TopCategoryStyles.title}>Top Categories</Typography>
      </Box>
      
      <Carousel
        animation="slider"
        autoPlay={true}
        interval={1000}
      >
        <Grid container spacing={2} sx={TopCategoryStyles.containerGrid}>
          {image.map((image, index) => (
            <Box
              sx={TopCategoryStyles.itemBox}
            >
              <Box
                sx={TopCategoryStyles.imageCaptionBox}
              >
                <img
                  src={image.mobile_img}
                  style={TopCategoryStyles.image}
                />
                <Typography variant="caption" sx={TopCategoryStyles.caption}>
                  {image.name}
                </Typography>
              </Box>

            </Box>
          ))}
        </Grid>
      </Carousel>
    </Hidden>
  );
};

export default TopCategory;