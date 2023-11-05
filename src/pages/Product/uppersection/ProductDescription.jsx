import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ImagesSlider from "./ImagesSlider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ProductDescription = ({ productData }) => {
  const imagesForSlider = [
    productData.img,
    productData.img,
    productData.img,
    productData.img,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(imagesForSlider[currentIndex]);

  const nextImage = () => {
    setCurrentIndex(currentIndex+1);
    setCurrentImage(imagesForSlider[currentIndex+1]);
    console.log("Next image Displayed!");
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex+1);
      console.log("Previous Image activated");
      setCurrentImage(imagesForSlider[currentIndex-1]);
    }
  };

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
        <Link to="">Label</Link>
      </Box>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <img className="big-image" src={productData.img} alt="" />
          <ImagesSlider
            images={imagesForSlider}
            next={previousImage}
            prev={nextImage}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <ProductDetails product={productData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDescription;
