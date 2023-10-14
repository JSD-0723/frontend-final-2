import Typography from "@mui/material/Typography";
import CardsGrid from "../../../components/CardsGrid";
import Box from "@mui/material/Box";

const HandPicked = () => {
  return (
    <Box sx={{  backgroundColor: "#1B4B66", paddingTop: 1, paddingBottom: 6,  marginBottom: 1,  }} >
      <Typography variant="h4"  component="h2"  sx={{ color: "white", margin: 2 }} >
        Hand Picked Collections
      </Typography>
      <CardsGrid />
    </Box>
  );
};

export default HandPicked;
