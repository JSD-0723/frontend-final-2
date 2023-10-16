import Card from "./Card";
import { Box, Grid } from "@mui/material";
import { HandPickedStyles } from "../styles/HandPickedStyles";
const CardsGrid = () => {
  return (
    <Box sx={{ marginLeft: 2, marginRight: 2 }}>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={6} md={3}>
          <Card styles={HandPickedStyles} />
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <Card styles={HandPickedStyles} />
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <Card styles={HandPickedStyles} />
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <Card styles={HandPickedStyles} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardsGrid;
