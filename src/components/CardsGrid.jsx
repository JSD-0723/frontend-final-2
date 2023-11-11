import Card from "./Card";
import { Box, Grid } from "@mui/material";
import { HandPickedStyles } from "../styles/HandPickedStyles";
import { Link } from "react-router-dom";
import NewArrivalsCard from "../pages/Home/components/NewArrivalsCard";

const CardsGrid = (props) => {
  const { products, isHandPicked } = props;
  const cardStyles = HandPickedStyles;

  const gridToRender = [];
  const loopTimes = 4;

  for (let index = 0; index < loopTimes; index++) {
    const product = products[index];
    const categoryNavigationLink = `/frontend-final-2/category/${product.name.replace(
      / /g,
      ""
    )}`;
    gridToRender.push(
      <Grid item xs={6} sm={6} md={3} key={index}>
        {isHandPicked ? (
          <Link to={categoryNavigationLink} style={{ textDecoration: "none" }}>
            <Card styles={cardStyles} productData={product} />
          </Link>
   
        ) : (
          <Link
            to={`/frontend-final-2/category/${product.name.replace(/ /g, "")}/${
              product.id
            }`}
          >
            <NewArrivalsCard productData={product} />
          </Link>
        )}
      </Grid>
    );
  }

  return (
    <Box sx={{ marginLeft: 2, marginRight: 2 }}>
      <Grid container spacing={2}>
        {gridToRender}
      </Grid>
    </Box>
  );
};

export default CardsGrid;
