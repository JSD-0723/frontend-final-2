import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export function BannerLayout() {
    return (
        <Box sx={{
            height: '50px',
            backgroundColor: '#F0F0F0'
        }}>
            <Typography variant="h4" sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '18px',
                alignItems: 'center',
                color: '#171520',
                justifyContent: 'center',
                marginLeft:'250px'
            }} >
                We are currently experiencing local customs clearance delays. For the latest updates, please check your order status 

                <Typography variant="h4"
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '18px',
                        alignItems: 'center',
                        color: '#1B4B66',
                        justifyContent: 'center'
                    }}
                    >
                        here
                    </Typography>
            </Typography>
        </Box>

    )



}
