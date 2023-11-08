import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Pagination } from "@mui/material";
import CardCategory from "../Category/CardCategory";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import heroImage from "../../helper/Assets/hero.png";
import "./styles.css";

const ITEMS_PER_PAGE = 9;

const BrandsPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let { brandName } = useParams();
  if (brandName === "h&m") {
    brandName = "h%26m";
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://estore-doxn.onrender.com/eStore/viewProductBybrand?name=${brandName}&page=${currentPage}&limit=${ITEMS_PER_PAGE}`;
      try {
        const response = await axios.get(url);
        setData(response.data.products);
        setTotalPages(Math.ceil(response.data.totalProducts / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [brandName, currentPage]);

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
          {data.map((categoryItem) => (
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
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            nextButtonText="next"
            boundaryCount={2}
            siblingCount={2}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BrandsPage;
