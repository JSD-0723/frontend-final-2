import { Box, Grid } from "@mui/material";
import "./styles.css";

const BrandsGrid = (props) => {
  const logos = props.brands;
  return (
    <Box sx={{ width: "98%", marginLeft: 2, marginRight: 2 }}>
      <Grid container spacing={1}>
        {logos.map((item) => (
          <Grid item xs={4} md={2}>
            <Box
              sx={{
                backgroundColor: "#F4F4F4",
                height: "168px",
                display: "flex",
                alignItems: "center",
                marginTop: 1,
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
