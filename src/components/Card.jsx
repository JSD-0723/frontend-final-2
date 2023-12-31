import { Box, Paper, Typography } from "@mui/material";
import "./cardsStyles.css";

const Card = (props) => {
  const { cardStyles, textStyles, categoryText } = props.styles;
  const productData = props.productData;

  const backgroundStyles = {
    backgroundImage: `url(${productData.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "410px",
  };

  return (
    <Box>
      <Paper sx={{ ...cardStyles, ...backgroundStyles }}>
        <Box sx={textStyles}>
          <Typography variant="h5" sx={categoryText}>
            {productData.name}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Card;
