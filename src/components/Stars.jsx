import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function TextRating(props) {
  // rayah added const rating
  const rating = props.rating;
  const value = 3.5;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "#FF8C4B",
      }}
    >
      <Rating name="text-feedback" value={value} readOnly color="red" />
      <Box
        sx={{ ml: 2, color: "#1B4B66", fontWeight: "500", fontFamily: "inter" }}
      >
        {/* rayah added this instead '43' */}
        {Rating.rating}
      </Box>
    </Box>
  );
}
