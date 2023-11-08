import axios from "axios";

const shopByCollectionUrl =
  "https://estore-doxn.onrender.com/eStore/shopByCollection";
const newArrivalsUrl = "https://estore-doxn.onrender.com/eStore/newArrival";
const brandsUrl = "https://estore-doxn.onrender.com/eStore/shopByBrand";

export const getHandPickedData = async () => {
  const response = await axios.get(shopByCollectionUrl);
  return response.data;
};

export const getNewArrivalsData = async () => {
  const response = await axios.get(newArrivalsUrl);
  return response.data;
};

export const getBrandsData = async () => {
  const response = await axios.get(brandsUrl);
  return response.data;
};