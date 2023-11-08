import { Box } from "@mui/material";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import Grid from "@mui/material/Grid";

const Checkout = () => {
  return (
    <Box sx={{ marginLeft: 2 }}>
      <p> LOL </p>{" "}
      <Grid container>
        <Grid item md={8} sm={12}>
          <LeftSection />
        </Grid>

        <Grid item md={4} sm={12}>
          <RightSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
