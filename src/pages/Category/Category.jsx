import { Box, Container, Grid } from "@mui/material";
import CardCategory from "../../components/CardCategory";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const { categoryName } = useParams();

  const url =
    `https://estore-doxn.onrender.com/eStore/viewProductByCategory?name=${categoryName}`;
  const items = data;
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);
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
