import { Grid, ListItem, ListItemText } from "@mui/material";
import {Typography} from "@mui/material";
import {Box} from "@mui/material";
const OrderDetails =()=>{
return(
<Grid container direction="column" sx={{gap:'20px', height:'400px'}}>
            <Box sx={{width:'391px'}}>
            <Typography sx={{fontFamily:'Inter, sans-serif',fontWeight:600, fontSize:'20px',lineHeight:'26px'}}>Order Details</Typography>
            </Box>
            <hr style={{ BorderTop: '1px solid #626262', width: '100%' }} />
       <Grid sx={{display:'flex', justifyContent:'space-between', marginTop:'-20px'}}>
         <Grid sx={{gap:'24px', lineHeight:'26px'}}>
           <Typography sx={{color:'#626262', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            Sub Total
           </Typography>
           <Typography sx={{color:'#626262', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            Discount 
           </Typography>
           <Typography sx={{color:'#626262', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            Delivary Fee 
           </Typography>
           <Typography sx={{color:'#171520', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
             Grand Total 
           </Typography>
          </Grid>
          <Grid sx={{gap:'24px', lineHeight:'26px'}}>
          <Typography sx={{color:'#171520', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
             $119.69 
           </Typography>
           <Typography sx={{color:'#171520', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            -$13.40
           </Typography>
           <Typography sx={{color:'#171520', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
            -$0.00 
           </Typography>
           <Typography sx={{color:'#171520', fontFamily:'Inter, sans-serif', fontSize:'16px', fontWeight:600}}>
             $106.29 
           </Typography>
          </Grid>

       </Grid>
</Grid>





)

}
export default OrderDetails;