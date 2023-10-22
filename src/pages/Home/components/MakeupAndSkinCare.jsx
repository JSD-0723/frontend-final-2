import image1 from '../../../data/Assets/hero1.png';
import image2 from '../../../data/Assets/hero2.png';
import image3 from '../../../data/Assets/hero3.png';
import Grid from '@mui/material/Grid';
import { MakeupStyles } from '../../../styles/MakeupStyles';
import { Typography, Box } from '@mui/material';
import { Hidden } from '@mui/material';

const MakeupAndSkinCare = () => {
    return (
        <Grid spacing={1} sx={{
            width: '100%',
        }}>
            {/* <Hidden smUp>
                <Box
                    sx=
                    {{ width: '130px', height: '16px' }}>
                    <Typography sx={MakeupStyles.MakeupText}>
                        Makeup & Skincare
                    </Typography>
                </Box>
            </Hidden> */}
            <Grid container sx={MakeupStyles.makeupContainer}>

                <Grid item xs={12}
                    sx={{
                        alignItems: 'center',
                        marginLeft: 2,
                        marginRight: 2,

                    }}>
                    <img
                        src={image1}
                        alt="hero 1"
                        style={{ ...MakeupStyles.hero1Styles }}
                    />
                    <Box sx={{ width: '10px', height: '10px' }}></Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img
                                src={image2}
                                alt="hero 2"
                                style={MakeupStyles.herosStyles}
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <img
                                src={image3}
                                alt="hero 3"
                                style={MakeupStyles.herosStyles}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{width:'100%', height:'30px'}}></Box>
        </Grid>
    );
}

export default MakeupAndSkinCare;
