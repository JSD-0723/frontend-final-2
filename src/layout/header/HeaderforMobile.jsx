

import { AppBar, Typography, Grid, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const HeaderforMobile = () => {
    return (
        <AppBar sx={{ backgroundColor: 'white', boxShadow: 'none', display: { xs: 'flex', lg: 'none' } }}>
            <Grid sx={{ width: '360px', height: '24px' }}></Grid>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '100%', padding: '16px' }}>
                <Grid >
                    <MenuIcon sx={{ width: '24px', height: '24px', color: '#1B4B66' }} />
                </Grid>
                <Grid >
                    <Typography
                        sx={{
                            marginRight:6,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '600',
                            color: '#1B4B66',
                            fontSize: '20px',
                            lineHeight: '26px',
                            width: '57px',
                            height: '26px',

                        }}>
                        Home
                    </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', width: '120px', height: '24px', gap: '16px' }}>
                    <AddToPhotosOutlinedIcon sx={{ width: '24px', height: '24px', color: '#1B4B66' }} />
                    <SearchOutlinedIcon sx={{ width: '24px', height: '24px', color: '#1B4B66' }} />
                    <NotificationsNoneOutlinedIcon sx={{ width: '24px', height: '24px', color: '#1B4B66' }} />
                </Grid>
            </Grid>
        </AppBar>
    );
}
