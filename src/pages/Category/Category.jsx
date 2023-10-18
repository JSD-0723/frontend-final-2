import { Box, Container, Grid } from "@mui/material";
import CardCategory from "../../components/CardCategory";
const CategoryPage = () => {

  

  const items = [
    { name: "Item1" },
    { name: "Item2" },
    { name: "Item3" },
    { name: "Item4" },
    { name: "Item5" },
    { name: "Item6" },
    { name: "Item7" },
    { name: "Item7" },
    { name: "Item7" },
  ];
  
  return (
    <Container maxWidth="lg">
      <Box>Category Page Works!</Box>

      <Grid container spacing={2}>
        {items.map((x) => {
          return (
            <Grid item>
              <p> {<CardCategory />} </p>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CategoryPage;
