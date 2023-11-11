import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Pagination } from "@mui/material";
import CardCategory from "../Category/CardCategory";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import heroImage from "../../helper/Assets/hero.png";
import "./styles.css";
import { getNewArrivalsData } from "../../api/HomeAPI";

const ITEMS_PER_PAGE = 9;

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {categoryName} = useParams();
  const url = `https://estore-doxn.onrender.com/eStore/newArrival`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error fetching new arrivals data: ", error);
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
      <img
        src={heroImage}
        alt=""
        className="w-full h-[450px] object-cover pb-12"
      />

      <Container maxWidth="xlg">
        <Grid container spacing={1}>
          {currentItems.map((categoryItem) => (
            <Grid item sm={6} md={3} key={categoryItem.id}>
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

export default ProductsPage;
