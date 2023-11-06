import OrderSummary from './OrderSummary';
import OrderDetails from './OrderDetails';
import { Box } from '@mui/material';
const RightSection = () => {

    return (
        <Box sx={{display:'grid',width:'412px', height:"545px", top:'236px', marginLeft:'868px', gap:'24px'}}>
            <Box>
                <OrderSummary />
            </Box>
            <Box>
                <OrderDetails />
            </Box>

        </Box>
    )
}
export default RightSection;