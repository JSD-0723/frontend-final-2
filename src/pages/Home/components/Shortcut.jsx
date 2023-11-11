import { Hidden } from "@mui/material";
import shortcut from "../../../data/Assets/shortcut.png";
import { Grid , Box} from "@mui/material";
import {Typography} from "@mui/material";
const Shortcut = () => {
  return (
    <Hidden mdUp>
      <Grid container xs={12} sm={12} md={12}>
       
      <Grid container xs={12} sm={12} md={12}
        sx={{ 
          width:'100%',
          marginLeft:2,
          marginRight:2      
        }}
      >
        <Typography 
              sx=
              {{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '20px',
                color: '#171520',
                lineHeight:'50px',
                marginLeft:2,
                margin:0,
                padding:0,
                
               }}
              >
               Shortcut
          </Typography>
        <img
          style={{
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            justifyContent:'center',
            alignItems:'center'
          }}
          src={shortcut}
          alt="shortcut image"
        />   
      </Grid>
      </Grid>
    </Hidden>
  );

}
export default Shortcut;

