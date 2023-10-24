import { Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardCategory from "../Category/CardCategory";

const ProductDescription = ({ productData }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: "1" }}>
        <Link to="/frontend-final-2">Home</Link>
        <Link to="/frontend-final-2">Handbag</Link>
        <Link to="/frontend-final-2">Label</Link>
      </Box>
      <Box>
        Images Left side
        <Box> Big Image </Box>
        <Box> Images underneath </Box>
      </Box>
      <Box> Product Details Section </Box>

      <CardCategory product={productData} />
    </Box>
  );
};

export default ProductDescription;
