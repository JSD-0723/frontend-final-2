import { Box, Container, Grid } from "@mui/material";
import CardCategory from "../../components/CardCategory";
import { useState, useEffect } from "react";
import axios from "axios";
const CategoryPage = () => {
  const url =
    "https://estore-doxn.onrender.com/eStore/viewProductByCategory?name=Handbags";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  const items = data;

  return (
    <Container maxWidth="lg">
      <Box>Category Page Works!</Box>

      <Grid container spacing={2}>
        {items.map((x) => {
          return (
            <Grid item>
              <p> {<CardCategory products={x} />} </p>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CategoryPage;
