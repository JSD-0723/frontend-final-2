import { Box, Grid } from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";

const BrandsGrid = (props) => {
  const logos = props.brands;
  console.log("props.brands is this:", props.brands);
  return (
    <Box sx={{ width: "98%", marginLeft: 2, marginRight: 2 }}>
      <Grid container spacing={1}>
        {logos.map((item) => (
          <Grid item xs={4} md={2}>
            <Link to={`/frontend-final-2/brands/${item.name.toLowerCase()}`}>
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandsGrid;
