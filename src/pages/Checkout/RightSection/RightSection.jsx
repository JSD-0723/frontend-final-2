import OrderSummary from "./OrderSummary";
import OrderDetails from "./OrderDetails";
import { Box } from "@mui/material";
import { RightSectionStyle } from "./Styles";
const RightSection = () => {
  return (
    <Box>
      <Box>
        <OrderSummary />
      </Box>
      <Box>
        <OrderDetails />
      </Box>
    </Box>
  );
};
export default RightSection;
