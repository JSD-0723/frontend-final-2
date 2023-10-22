import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardsGrid from "../../../components/CardsGrid";
import BrandsGrid from "./BrandsGrid";
import { HandPickedStyles } from "../../../styles/HandPickedStyles";
import { newArrivasStyles } from "../../../styles/NewArrivalsStyles";

const Section = ({ title, gridComponent, styles }) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" component="h4" sx={styles.title}>
        {title}
      </Typography>
      {gridComponent}
    </Box>
  );
};

const HandPicked = (props) => {
  return (
    <Section
      title="Hand Picked Collection"
      gridComponent={
        <CardsGrid products={props.products} isHandPicked={true} />
      }
      styles={HandPickedStyles}
    />
  );
};

const NewArrivals = (props) => {
  return (
    <Box sx={{ overflowX: "scroll" }}>
      <Section
        title="New Arrivals"
        gridComponent={<CardsGrid products={props.products} />}
        styles={{
          ...newArrivasStyles,
          container: {
            ...newArrivasStyles.container,
          },
        }}
      />
    </Box>
  );
};

const ShopByBrand = (props) => {
  return (
    <Box>
      <Section
        title="Shop By Brands"
        gridComponent={<BrandsGrid brands={props.brands} />}
        styles={newArrivasStyles}
      />
    </Box>
  );
};

export { HandPicked, NewArrivals, ShopByBrand };
