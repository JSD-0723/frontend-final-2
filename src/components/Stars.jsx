import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function TextRating(props) {
  const value = 3.5;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating name="text-feedback" value={value} readOnly />
      <Box sx={{ ml: 2 }}>43</Box>
    </Box>
  );
}
