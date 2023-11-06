import { Grid, ListItem, ListItemText } from "@mui/material";
import {Typography} from "@mui/material";
import {Box} from "@mui/material";
const OrderDetails =()=>{
return(
<Grid container direction="column" sx={{gap:'20px' }}>
            <Box sx={{width:'391px'}}>
            <Typography sx={{fontFamily:'Inter, sans-serif',fontWeight:600, fontSize:'20px',lineHeight:'26px'}}>Order Details</Typography>
            </Box>
            <hr style={{ BorderTop: '1px solid #626262', width: '100%' }} />
       <Grid sx={{display:'flex', justifyContent:'space-between', marginTop:'-20px'}}>
         <list>
           <ListItem sx={{color:'#626262', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            <ListItemText primary="Sub Total"/> 
           </ListItem>
           <ListItem sx={{color:'#626262', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            <ListItemText primary="Discount"/> 
           </ListItem>
           <ListItem sx={{color:'#626262', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            <ListItemText primary="Delivary Fee"/> 
           </ListItem>
           <ListItem sx={{color:'#171520', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            <ListItemText primary="Grand Total"/> 
           </ListItem>
         </list>
          <list>
          <ListItem>
            <ListItemText primary="$119.69"/> 
           </ListItem>
           <ListItem>
            <ListItemText primary="-$13.40"/> 
           </ListItem>
           <ListItem>
            <ListItemText primary="-$0.00"/> 
           </ListItem>
           <ListItem>
            <ListItemText primary="$106.29"/> 
           </ListItem>
          </list>

       </Grid>





</Grid>





)

}
export default OrderDetails;