import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardsGrid from "../../../components/CardsGrid";
import { HandPickedStyles } from "../../../styles/HandPickedStyles";
const HandPicked = () => {
  return (
    <Box sx={HandPickedStyles.container}>
      <Typography variant="h4" component="h4" sx={HandPickedStyles.title}>
        Hand Picked Collections
      </Typography>
      <CardsGrid />
    </Box>
  );
};

export default HandPicked;
