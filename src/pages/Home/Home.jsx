import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import {
  getHandPickedData,
  getNewArrivalsData,
  getBrandsData,
} from "../../api/HomeAPI";
import ImageCarousel from "./components/ImageCarousel";
import MakeupAndSkinCare from "./components/MakeupAndSkinCare";
import { carouselData } from "../../data/carouselData";
import Shortcut from "../Home/components/Shortcut";
import TopCategory from "../Home/components/TopCategory";
import SideScroller from "../../components/SideScrollCards";
import { HandPicked, ShopByBrand } from "./components/Section";
import CircularProgress from "@mui/material/CircularProgress";
const Home = () => {
  const [handPickedCollectionData, setHandPickedCollectionData] = useState([]);
  const [isLoadingHandPicked, setIsLoadingHandPicked] = useState(true);
  const [newArrivalsData, setNewArrivalsData] = useState([]);
  const [isLoadingNewArrivals, setIsLoadingNewArrivals] = useState(true);
  const [shopByBrandsData, setShopByBrandsData] = useState([]);
  const [isLoadingShopByBrands, setIsLoadingShopByBrands] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const handPickedData = await getHandPickedData();
        setHandPickedCollectionData(handPickedData);
        setIsLoadingHandPicked(false);

        const newArrivalsData = await getNewArrivalsData();
        setNewArrivalsData(newArrivalsData);
        setIsLoadingNewArrivals(false);

        const brandsData = await getBrandsData();
        setShopByBrandsData(brandsData);
        setIsLoadingShopByBrands(false);
      } catch (error) {
        console.log(
          "this error happened in the home component while fetching main data: ",
          error
        );
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {/* <Box sx={{ display: "flex", gap: 2 }}>
        <Link to="/frontend-final-2/signup">Sign Up</Link>
        <Link to="/frontend-final-2/login">Login</Link>{" "}
      </Box> */}

      <ImageCarousel data={carouselData} />
      <TopCategory />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {isLoadingNewArrivals ? (
          <CircularProgress />
        ) : (
          <SideScroller products={newArrivalsData} />
        )}
        {isLoadingHandPicked ? (
          <CircularProgress />
        ) : (
          <HandPicked products={handPickedCollectionData} />
        )}
        {isLoadingShopByBrands ? (
          <CircularProgress />
        ) : (
          <ShopByBrand brands={shopByBrandsData} />
        )}
      </Box>
      <Box>
        <Shortcut />
        <MakeupAndSkinCare />
      </Box>
    </Box>
  );
};

export default Home;
