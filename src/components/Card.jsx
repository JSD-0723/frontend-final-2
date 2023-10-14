import { Box, Paper, Typography } from "@mui/material";

const Card = (props) => {
  const { cardStyles, textStyles } = props.styles;
  return (
    <Box>
      <Paper sx={cardStyles}>
        <Box sx={textStyles}>
          <Typography variant="h4" component="h5">
            Personal Care
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Card;
