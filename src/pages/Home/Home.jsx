import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { HandPicked, NewArrivals, ShopByBrand } from "./components/Section";
import { fetchData } from "../../api/HomeAPI";

const Home = () => {
  const [handPickedCollectionData, setHandPickedCollectionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newArrivalsData, setNewArrivalsData] = useState([]);
  const [shopByBrandsData, setShopByBrandsData] = useState([]);

  useEffect(() => {
    fetchData(setIsLoading, setHandPickedCollectionData, setNewArrivalsData, setShopByBrandsData);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <Box>
        <NewArrivals products={handPickedCollectionData} />
        <HandPicked products={newArrivalsData} />
        <ShopByBrand brands={shopByBrandsData} />
      </Box>
    );
  }
};

export default Home;