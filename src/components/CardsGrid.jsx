import Card from "./Card";
import { Box, Grid } from "@mui/material";
import { HandPickedStyles } from "../styles/HandPickedStyles";
const CardsGrid = () => {
  return (
    <Box sx={{ width: "95%", marginRight: 2, marginLeft: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card styles={HandPickedStyles} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card styles={HandPickedStyles} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card styles={HandPickedStyles} />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card styles={HandPickedStyles} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardsGrid;
