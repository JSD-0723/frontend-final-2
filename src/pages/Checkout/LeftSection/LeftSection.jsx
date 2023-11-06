import { Box, Grid } from "@mui/material";
import UnstyledInputIntroduction from "./Form";

const LeftSection = () => {
  return (
    <Box sx={{ width: "50%" }}>
      <Grid container spacing={1}>
        <Grid item md={6}>
          <UnstyledInputIntroduction text="Enter Name" label="Full Name" />
        </Grid>

        <Grid item md={6}>
          <UnstyledInputIntroduction text="Mobile Number" label="Full Name" />
        </Grid>
        <Grid item md={6}>
          <UnstyledInputIntroduction
            text="Enter Address"
            label="Street Address"
          />
        </Grid>
        <Grid item md={6}>
          <UnstyledInputIntroduction text="Enter City" label="City" />
        </Grid>
        <Grid item md={6}>
          <UnstyledInputIntroduction text="Enter State" label="State" />
        </Grid>
        <Grid item>
          <UnstyledInputIntroduction text="Enter Pin Code" label="Pin Code" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeftSection;
