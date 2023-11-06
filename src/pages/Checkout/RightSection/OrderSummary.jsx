import { BorderTop } from '@mui/icons-material';
import image from '../../../data/Assets/image.png';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
const OrderSummary = () => {
    return (
        <Grid container direction="column" sx={{ gap: '24px' }}>
            <Box sx={{width:'391px'}}>
            <Typography sx={{fontFamily:'Inter, sans-serif',fontWeight:600, fontSize:'20px',lineHeight:'26px'}}>Order Summary</Typography>
            </Box>
            <hr style={{ BorderTop: '1px solid #626262', width: '100%' }} />
            {/* <Box sx={{gap:'24px', overflowY:'scroll'}}> */}
            <Grid sx={{ display: 'flex' }}>
                <img src={image} />
                <Box sx={{
                    padding: '5px', width: '220px', height: '20px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                }} >
                    <Typography
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px'
                        }}
                    >
                        Coach</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',
                            color:'#626262'
                        }}
                    >
                        Leather Coach Bag</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',
                            color:'#626262'
                            
                        }}>Qty- 1</Typography>
                </Box>

            </Grid>
            <Grid sx={{ display: 'flex' }}>
                <img src={image} />
                <Box sx={{
                    padding: '5px', width: '220px', height: '20px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                }} >
                    <Typography
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px'
                        }}
                    >
                        Coach</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',
                            color:'#626262'
                        }}
                    >
                        Leather Coach Bag</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',
                            color:'#626262'
                            
                        }}>Qty- 1</Typography>
                </Box>
                
            </Grid>
            {/* </Box> */}

        </Grid>







    )
}
export default OrderSummary;

