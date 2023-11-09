import { Hidden } from "@mui/material";
import shortcut from "../../../data/Assets/shortcut.png";
import { Grid } from "@mui/material";
import {Typography} from "@mui/material";
const Shortcut = () => {
  return (
    <Hidden mdUp>
      <Grid container xs={12} sm={12} md={12}
      
        sx={{ 
          width:'95%',
          marginLeft:2,
          marginRight:2,
         
        }}
      >
          <Typography 
              sx=
              {{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '25px',
                color: '#171520',
                lineHeight:'70px'
               }}
              >
               Shortcut
          </Typography>
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

