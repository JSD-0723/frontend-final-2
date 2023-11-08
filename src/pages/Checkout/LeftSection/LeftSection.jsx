import { Box, Grid } from "@mui/material";
import UnstyledInputIntroduction from "./Form";

const LeftSection = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item md={6}>
          <UnstyledInputIntroduction text="Enter Name" label="Full Name" />
        </Grid>

        <Grid container md={6}>
          <Grid item md={4}>
          <input></input>
          </Grid>
          <Grid item md={8}>
         
          </Grid>
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
        <Grid item md={6}>
          <UnstyledInputIntroduction text="Enter Pin Code" label="Pin Code" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeftSection;
