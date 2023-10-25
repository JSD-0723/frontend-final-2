import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
});

export default function ButtonWithIcon(props) {
  return (
    <Button
      component="label"
      variant="contained"
      sx={{ width: "100%", ...props.style }}
    >
      <Box sx={{ display: "flex", justifyContent: "column", gap: 1 }}>
        {props.icon}
        <Typography sx={props.fontStyles.fontStylingForButtons}>
          {props.text}
        </Typography>
      </Box>

      <VisuallyHiddenInput />
    </Button>
  );
}
