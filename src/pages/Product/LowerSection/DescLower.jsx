import { Typography } from "@mui/material";
import Product from "../Product";
import { Box } from "@mui/material";
const DescLower = ({ productData }) => {
  console.log(productData);
  return (
    <Box>
      <Typography
        sx={{
          color: "#626262",
          fontSize: "16px",
          fontFamily: "Inter, sans-serif",
          lineHeight: "20px",
          marginTop: "12px",
        }}
      >
        {productData.description}
      </Typography>
    </Box>
  );
};
export default DescLower;
