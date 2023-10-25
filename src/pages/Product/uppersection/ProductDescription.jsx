import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ImagesSlider from "./ImagesSlider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Divider } from "@mui/material";

const ProductDescription = ({ productData }) => {
  const imagesForSlider = [
    productData.img,
    productData.img,
    productData.img,
    productData.img,
  ];
  return (
    <Box sx={{ margin: 2 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginTop: 3,
          marginBottom: 3,
          color: "#1B4B66",
        }}
      >
        <Link to="/frontend-final-2">Home </Link>
        <ArrowBackIosNewIcon />
        <Link to="/frontend-final-2">Handbag</Link>
        <ArrowBackIosNewIcon />
        <Link to="/frontend-final-2">Label</Link>
      </Box>
      <Grid container spacing={2}>
        <Grid item sm={6} md={6}>
          <img className="big-image" src={productData.img} alt="" />
          <ImagesSlider images={imagesForSlider} />
        </Grid>

        <Grid item sm={6} md={6}>
          <ProductDetails product={productData} />
          <Divider orientation="horizontal" variant="middle" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDescription;
