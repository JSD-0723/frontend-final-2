import { Typography, Box, Grid, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
export function BannerLayout() {
    return (
        <Hidden mdDown>
            <Grid
                container
                sx={{
                    height: '50px',
                    backgroundColor: '#F0F0F0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '18px',
                        color: '#171520',
                        marginRight: '4px',
                    }}
                >
              We are currently experiencing local customs clearance delays. For the latest updates, please check your order status
                </Typography>
                <Link href="#"
                    variant="h4"
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '18px',
                        color: '#1B4B66',
                        textDecoration: 'underline',
                        textDecorationColor: '#1B4B66'
                    }}
                >
                    here
                </Link>
            </Grid>
        </Hidden>
    );

}
