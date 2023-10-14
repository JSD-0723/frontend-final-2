import { Box, Paper, Typography } from "@mui/material";

const Card = (props) => {
  const { cardStyles, textStyles, categoryText } = props.styles;
  console.log(categoryText);
  return (
    <Box>
      <Paper sx={cardStyles}>
        <Box sx={textStyles}>
          <Typography variant="h6" sx={categoryText}>
            Personal Care
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Card;
