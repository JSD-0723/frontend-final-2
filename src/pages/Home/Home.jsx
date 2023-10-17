import Box from "@mui/material/Box";
import axios from "axios";
import { useState, useEffect } from "react";
import { HandPicked, NewArrivals, ShopByBrand } from "./components/Section";
const Home = () => {
  const [handPickedCollectionData, setHandPickedCollectionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newArrivalsData, setNewArrivalsData] = useState([]);
  const [shopByBrandsData, setShopByBrandsData] = useState([]);
  const shopByCollectionUrl =
    "https://estore-doxn.onrender.com/eStore/shopByCollection";
  const newArrivalsUrl = "https://estore-doxn.onrender.com/eStore/newArrival";
  const brandsUrl = "https://estore-doxn.onrender.com/eStore/shopByBrand";
  const getHandPickedData = () => {
    setIsLoading(true);
    axios
      .get(shopByCollectionUrl)
      .then((res) => {
        setHandPickedCollectionData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching hand-picked section: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getNewArrivalsData = () => {
    setIsLoading(true);
    axios
      .get(newArrivalsUrl)
      .then((res) => {
        setNewArrivalsData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching new arrivals section: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getBrandsData = () => {
    setIsLoading(true);
    axios
      .get(brandsUrl)
      .then((res) => {
        setShopByBrandsData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching brands section: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getHandPickedData();
    getNewArrivalsData();
    getBrandsData();
  }, []);

  if (isLoading) {
    <p> Loading... </p>;
  }

  return (
    <Box>
      <NewArrivals products={handPickedCollectionData} />
      <HandPicked products={newArrivalsData} />
      <ShopByBrand brands={shopByBrandsData} />
    </Box>
  );
};

export default Home;
