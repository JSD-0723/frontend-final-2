import { Box, Grid } from "@mui/material";
import loo1 from "../../../helper/Assets/logo1.png";
import loo2 from "../../../helper/Assets/logo2.png";
import loo3 from "../../../helper/Assets/logo3.png";
import loo4 from "../../../helper/Assets/logo4.png";
import loo5 from "../../../helper/Assets/logo5.png";
import "./styles.css";
import { useMediaQuery } from "@mui/material";

const BrandsGrid = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const logos = [loo1, loo1, loo2, loo3, loo4, loo5];
  return (
    <Grid container>
      {logos.map((logo) => (
        <Grid item xs={4} md={2}>
          <img
            className={`image ${isMobile ? "mobile" : "desktop"}`}
            src={logo}
            alt=""
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BrandsGrid;
