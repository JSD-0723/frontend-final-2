import { Paper, Typography, Box, CssBaseline } from "@mui/material";
import BasicRating from "../../../components/Stars";
import { productDetailsStyles } from "./ProductDetailsStyles";

const ProductDetails = ({ product }) => {
  const productsData = product;
  console.log(productsData);

  return (
    <Paper elevation={0} sx={productDetailsStyles.container}>
      <Box sx={productDetailsStyles.contentBox}>
        <Box sx={productDetailsStyles.header}>
          <Typography sx={productDetailsStyles.title}>
            {productsData.name}
          </Typography>
        </Box>
        <Typography sx={productDetailsStyles.ratingText}>
          {productsData.short_description}
        </Typography>
        <BasicRating rating={productsData.rating} />
        <Box sx={productDetailsStyles.priceBox}>
          <Typography sx={productDetailsStyles.price}>
            ${productsData.price}
          </Typography>
          <Typography sx={productDetailsStyles.originalPrice}>
            $78.66
          </Typography>
          <Typography sx={productDetailsStyles.discount}>50% OFF</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductDetails;
