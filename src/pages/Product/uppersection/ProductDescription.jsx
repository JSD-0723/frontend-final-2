import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails";
import ImagesSlider from "./ImagesSlider";

const ProductDescription = ({ productData }) => {
  const imagesForSlider = [
    productData.img,
    productData.img,
    productData.img,
    productData.img,
  ];
  return (
    <Box sx={{ margin: 2 }}>
      <Box sx={{ display: "flex", gap: "1" }}>
        <Link to="/frontend-final-2">Home</Link>
        <Link to="/frontend-final-2">Handbag</Link>
        <Link to="/frontend-final-2">Label</Link>
      </Box>
      <Grid container spacing={2}>
        <Grid item sm={6} md={6}>
          <img className="big-image" src={productData.img} alt="" />
          <ImagesSlider images={imagesForSlider} />
        </Grid>

        <Grid item sm={6} md={6}>
          <ProductDetails product={productData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDescription;
