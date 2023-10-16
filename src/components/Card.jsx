import { Box, Paper, Typography } from "@mui/material";
import image from "../helper/Assets/image_elyas.png";
import "./cardsStyles.css";
const Card = (props) => {
  const { cardStyles, textStyles, categoryText, cardImage } = props.styles;

  const backgroundStyles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  return (
    <Box>
      <Paper sx={{ ...cardStyles, ...backgroundStyles }}>
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
