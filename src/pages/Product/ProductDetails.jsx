import { Paper, Typography, Box, CssBaseline } from "@mui/material";
import BasicRating from "../../components/Stars";

const styles = {
  container: {
    fontFamily: "inter",
  },
  contentBox: {
    backgroundColor: "white",
    display: "flex",
    fontFamily: "inter",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    fontWeight: 700,
    fontSize: "34px",
    lineHeight: "44px",
    fontFamily: "inter",
  },
  ratingText: {
    color: "#626262",
    fontSize: "20px",
    marginBottom: 3,
    fontFamily: "inter",
  },
  priceBox: {
    display: "flex",
    gap: 3,
    marginTop: 3,
    fontFamily: "inter",
  },
  price: {
    fontWeight: 700,
    color: "#171520",
    fontSize: "40px",
    fontFamily: "inter",
  },
  originalPrice: {
    textDecoration: "line-through",
    fontWeight: 400,
    color: "#626262",
    lineHeight: "58px",
    fontSize: "34px",
    fontFamily: "inter",
  },
  discount: {
    color: "red",
    fontSize: "20px",
    fontFamily: "inter",
    lineHeight: "55px",
  },
};

const ProductDetails = ({ product }) => {
  const productsData = product;
  console.log(productsData);

  return (
    <Paper elevation={0} sx={styles.container}>
      <Box sx={styles.contentBox}>
        <Box sx={styles.header}>
          <Typography sx={styles.title}>{productsData.name}</Typography>
        </Box>
        <Typography sx={styles.ratingText}>
          {productsData.short_description}
        </Typography>
        <BasicRating rating={productsData.rating} />
        <Box sx={styles.priceBox}>
          <Typography sx={styles.price}>${productsData.price}</Typography>
          <Typography sx={styles.originalPrice}>$78.66</Typography>
          <Typography sx={styles.discount}>50% OFF</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductDetails;
