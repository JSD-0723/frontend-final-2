import { Paper, Typography, Box, CssBaseline, Grid } from "@mui/material";
import BasicRating from "../../../components/Stars";
import { productDetailsStyles } from "./ProductDetailsStyles";
import { Divider } from "@mui/material";
import QuantityInput from "./Quantity"; 
import { Button } from "@mui/base/Button";
import ButtonWithIcon from "./ButtonWithIcon";
import { svgIcons } from "./Icons";
import { useParams } from "react-router-dom";

const ProductDetails = ({ product }) => {
    //added by rayah
  const id= useParams();
  const buttonStyle1 = {
    color: "#FFFFFF",
    border: "2px solid #1B4B66",
    background: "#1B4B66",
    borderRadius: "5px",
    textTransform: "none",
  };

  const buttonStyle2 = {
    color: "#1B4B66",
    border: "2px solid #1B4B66",
    background: "#FFFFFF",
    borderRadius: "5px",
    textTransform: "none",
  };

  const fontStylingForButtons = {
    fontFamily: "inter",
    fontWeight: "600",
    fotSize: "14px",
  };
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
      <Box sx={{ marginTop: 3 }}>
        <Divider orientation="horizontal" variant="middle" />
      </Box>

      <Grid container spacing={5}>
        <Grid item>
          <Typography sx={productDetailsStyles.quantity}>Quanitity:</Typography>
        </Grid>

        <Grid item sx={{ marginTop: 1.5 }}>
          <QuantityInput />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item md={8} lg={7}>
          <ButtonWithIcon
            icon={svgIcons.basketIcon}
            text="Add to Bag"
            style={buttonStyle1}
            fontStyles={fontStylingForButtons}
          />
        </Grid>
        <Grid item md={4} lg={5}>
          <ButtonWithIcon
            svgIcons
            icon={svgIcons.heartIcon}
            text="Add to Wishlist"
            style={buttonStyle2}
            fontStyles={fontStylingForButtons}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
