import { Hidden } from "@mui/material";
import shortcut from "../../../data/Assets/shortcut.png";
import { Grid } from "@mui/material";
const Shortcut = () => {
  return (
    <Hidden mdUp>
      <Grid container xs={12} sm={12} md={12}
        justifyContent="center"
        alignItems="center"
      >
        <img
          style={{
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            marginLeft: 2,
            marginRight: 2,
          }}
          src={shortcut}
          alt="shortcut image"
        />
      </Grid>
    </Hidden>
  );

}
export default Shortcut;

