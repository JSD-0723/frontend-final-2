import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardsGrid from "../../../components/CardsGrid";
import { GeneralStyles } from "../../../styles/HandPickedStyles";
const HandPicked = () => {
  return (
    <Box sx={GeneralStyles.container}>
      <Typography variant="h3" component="h2" sx={GeneralStyles.title}>
        Hand Picked Collections
      </Typography>
      <CardsGrid />
    </Box>
  );
};

export default HandPicked;
