import Box from "@mui/material/Box";
import HandPicked from "./components/HandPicked";
import NewArrivals from "./components/NewArrivals";
const Home = () => {
  return (
    <Box>
      <NewArrivals />
      <HandPicked />
    </Box>
  );
};

export default Home;
