import { Hidden } from "@mui/material";
import shortcut from "../../../data/Assets/shortcut.png";
import { Grid } from "@mui/material";
const Shortcut = () => {
  return (
    <Hidden mdUp>
      <Grid container justifyContent="center" alignItems="center">
        <img
          style={{
            width: "100%",
            height: "auto",
            alignItems: "center",
            padding: "2px",
            marginLeft: 2,
            marginRight: "5px",
          }}
          src={shortcut}
          alt="shortcut image"
        ></img>
      </Grid>
    </Hidden>
  );
};
export default Shortcut;
