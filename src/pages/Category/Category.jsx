import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Pagination } from "@mui/material";
import CardCategory from "./CardCategory";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import heroImage from "../../helper/Assets/hero.png";
import "./styles.css";
const ITEMS_PER_PAGE = 9;

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { categoryName } = useParams();
  const url = `https://estore-doxn.onrender.com/eStore/viewProductByCategory?name=${categoryName}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.products);
    });
  }, [url]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={{ m: 2 }}>
      <img src={heroImage} alt="" className="image" />

      <Container maxWidth="lg">
        <Grid container spacing={15}>
          {currentItems.map((categoryItem) => (
            <Grid item key={categoryItem.id}>
              <Link
                to={`/frontend-final-2/category/${categoryItem.name.replace(
                  / /g,
                  ""
                )}/${categoryItem.id}`}
              >
                <CardCategory products={categoryItem} />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 3,
            marginBottom: 10,
          }}
        >
          <Pagination
            count={Math.ceil(data.length / ITEMS_PER_PAGE)}
            page={currentPage}
            onChange={handlePageChange}
            nextButtonText="next"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CategoryPage;
