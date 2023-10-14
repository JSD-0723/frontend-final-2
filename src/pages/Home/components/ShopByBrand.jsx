import Typography from "@mui/material/Typography";
import CardsGrid from "../../../components/CardsGrid";
import Box from "@mui/material/Box";
import ImageCarousel from "../../../components/ImageCarousel";
import { carouselData } from "../../../helper/carouselData";
import { newArrivasStyles } from "../../../styles/NewArrivalsStyles";
import BrandsGrid from "./BrandsGridy";

const ShopByBrand = () => {
  return (
    <Box sx={newArrivasStyles.container}>
      <Typography variant="h4" component="h4" sx={newArrivasStyles.title}>
        Shop By Brands
      </Typography>
      <Typography variant="h6" component="h4" sx={newArrivasStyles.title}>
        <BrandsGrid />
      </Typography>
    </Box>
  );
};

export default ShopByBrand;
