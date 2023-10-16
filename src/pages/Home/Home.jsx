import Box from "@mui/material/Box";
import HandPicked from "./components/HandPicked";
import NewArrivals from "./components/NewArrivals";
import ShopByBrand from "./components/ShopByBrand";

const Home = () => {
  return (
    <Box>
      <NewArrivals />
      <HandPicked />
      <ShopByBrand />
    </Box>
  );
};

export default Home;
