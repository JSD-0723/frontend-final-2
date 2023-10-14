import { Box, Grid } from "@mui/material";

const BrandsGrid = () => {
  return (
    <Box sx={{ width: "92%", marginLeft: 2 }}>
      <Grid container spacing={6}>
        <Grid item sm={4} md={2}>
          LOGO
        </Grid>

        <Grid item sm={4} md={2}>
          LOGO
        </Grid>

        <Grid item sm={4} md={2}>
          LOGO
        </Grid>

        <Grid item sm={4} md={2}>
          LOGO
        </Grid>
        <Grid item sm={4} md={2}>
          LOGO
        </Grid>
        <Grid item sm={4} md={2}>
          LOGO
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrandsGrid;
