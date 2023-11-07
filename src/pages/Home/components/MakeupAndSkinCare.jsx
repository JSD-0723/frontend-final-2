import image1 from '../../../data/Assets/hero1.png';
import image2 from '../../../data/Assets/hero2.png';
import image3 from '../../../data/Assets/hero3.png';
import Grid from '@mui/material/Grid';
import { MakeupStyles } from '../../../styles/MakeupStyles';
import { Typography, Box } from '@mui/material';
import { Hidden } from '@mui/material';

const MakeupAndSkinCare = () => {
    return (
                <Grid container sx={MakeupStyles.makeupContainer}>
                
                    <Grid item xs={12} md={12} sm={12}
                        sx={{
                            alignItems:'center',
                            marginLeft: 2,
                            marginRight: 2,
                        }}>
                       <Hidden mdUp>
                    <Box
                        sx=
                        {{
                             width: '350px',
                             height: '50px',
                             alignItems:'center',
                             justifyContent:'center',
                             marginBottom:'12px'
                              }}>
                        <Typography 
                          sx=
                          {{...MakeupStyles.MakeupText,  lineHeight:'70px', alignItems:'center',
                          justifyContent:'center' }}
                            >
                            Makeup & Skincare
                        </Typography>
                   </Box>
                    </Hidden>
                      
                        <img
                            src={image1}
                            alt="hero 1"
                            style={{ ...MakeupStyles.hero1Styles }}
                        />
                          <Box sx={{ width: '10px', height: '10px' }}></Box>
                           <Grid container spacing={2}>
                            <Grid item xs={6} >  
                                <img
                                    src={image2}
                                    alt="hero 2"
                                    style={MakeupStyles.herosStyles}
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sm={6} >
                                <img
                                    src={image3}
                                    alt="hero 3"
                                    style={MakeupStyles.herosStyles}
                                />
                            </Grid>

                        </Grid>
                        <Box sx={{height:'10px'}}></Box>
                    </Grid>
                </Grid>
            // </Grid>
     
    );
}
export default MakeupAndSkinCare;
