import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { HandPicked, NewArrivals, ShopByBrand } from "./components/Section";
import { fetchData } from "../../api/HomeAPI";
import ImageCarousel from "./components/ImageCarousel";
import MakeupAndSkinCare from "./components/MakeupAndSkinCare";
import { carouselData } from "../../data/carouselData";
import Shortcut from "../Home/components/Shortcut";
import TopCategory from "../Home/components/TopCategory";
import { Link } from "react-router-dom";
import SideScroller from "../../components/SideScrollCards";

const Home = () => {
  const [handPickedCollectionData, setHandPickedCollectionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newArrivalsData, setNewArrivalsData] = useState([]);
  const [shopByBrandsData, setShopByBrandsData] = useState([]);

  useEffect(() => {
    fetchData(
      setIsLoading,
      setHandPickedCollectionData,
      setNewArrivalsData,
      setShopByBrandsData
    );
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link to="/frontend-final-2/signup">Sign Up</Link>
          <Link to="/frontend-final-2/login">Login</Link>{" "}
        </Box>

        <ImageCarousel data={carouselData} />
        <TopCategory />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <NewArrivals products={newArrivalsData} />
          <HandPicked products={handPickedCollectionData} />
          <ShopByBrand brands={shopByBrandsData} />
          <SideScroller products={newArrivalsData} />
        </Box>
        <Box>
          <Shortcut />
          <MakeupAndSkinCare />
        </Box>
      </Box>
    );
  }
};

export default Home;
