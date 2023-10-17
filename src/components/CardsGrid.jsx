import Card from "./Card";
import { Box, Grid } from "@mui/material";
import { HandPickedStyles } from "../styles/HandPickedStyles";

const CardsGrid = (props) => {
  const products = props.products || [];

  const cardGrid = products.map((product, index) => (
    <Grid item xs={6} sm={6} md={3} key={index}>
      <Card styles={HandPickedStyles} productData={product} />
    </Grid>
  ));

  return (
    <Box sx={{ marginLeft: 2, marginRight: 2 }}>
      <Grid container spacing={2}>
        {cardGrid}
      </Grid>
    </Box>
  );
};

export default CardsGrid;
