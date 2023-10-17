import { Box, Grid } from "@mui/material";
import loo1 from "../../../helper/Assets/logo1.png";
import loo2 from "../../../helper/Assets/logo2.png";
import loo3 from "../../../helper/Assets/logo3.png";
import loo4 from "../../../helper/Assets/logo4.png";
import loo5 from "../../../helper/Assets/logo5.png";
import "./styles.css";
import { useMediaQuery } from "@mui/material";

const BrandsGrid = (props) => {
  console.log("I'm in grid");
  console.log(props.brands);
  const logos = props.brands;
  return (
    <Box>
      <Grid container spacing={5}>
        {props.brands.map((item) => (
          <Grid item xs={4} md={2}>
            <img className="image" src={item.logo} alt="" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandsGrid;
