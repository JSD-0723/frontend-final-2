import { Box, Grid } from "@mui/material";
import "./styles.css";

const BrandsGrid = (props) => {
  const logos = props.brands;
  return (
    <Box>
      <Grid container sx={{ marginLeft: 2, marginRight: 2 }}>
        {logos.map((item) => (
          <Grid item xs={4} md={2}>
            <Box
              sx={{
                backgroundColor: "#F4F4F4",
                width: "90%",
                height: "168px",
                display: "flex",
                alignItems: "center",
                marginTop: 2,
                borderRadius: 2,
                justifyContent: "center",
              }}
            >
              <img className="logo-image" src={item.logo} alt="" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandsGrid;
