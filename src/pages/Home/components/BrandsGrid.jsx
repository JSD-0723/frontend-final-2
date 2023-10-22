import { Box, Grid } from "@mui/material";
import "./styles.css";

const BrandsGrid = (props) => {
  const logos = props.brands;
  return (
    <Box>
      <Grid container spacing={1} sx={{marginLeft:2}}>
        {logos.map((item) => (
          <Grid item xs={4} md={2}>
            <img className="image" src={item.logo} alt="" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandsGrid;
