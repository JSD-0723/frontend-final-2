import Typography from "@mui/material/Typography";
import CardsGrid from "../../../components/CardsGrid";
import Box from "@mui/material/Box";
import ImageCarousel from "../../../components/ImageCarousel";
import { carouselData } from "../../../helper/carouselData";

const NewArrivals = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1B4B66",
        paddingTop: 1,
        paddingBottom: 6,
        marginBottom: 1,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ color: "white", margin: 2 }}
      >
        New Arrivals
      </Typography>

      <ImageCarousel data={carouselData} />
    </Box>
  );
};

export default NewArrivals;
