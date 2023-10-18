import axios from "axios";

const shopByCollectionUrl =
  "https://estore-doxn.onrender.com/eStore/shopByCollection";
const newArrivalsUrl = "https://estore-doxn.onrender.com/eStore/newArrival";
const brandsUrl = "https://estore-doxn.onrender.com/eStore/shopByBrand";

export const getHandPickedData = () => {
  return axios.get(shopByCollectionUrl);
};

export const getNewArrivalsData = () => {
  return axios.get(newArrivalsUrl);
};

export const getBrandsData = () => {
  return axios.get(brandsUrl);
};

export const fetchData = async (
  setIsLoading,
  setHandPickedCollectionData,
  setNewArrivalsData,
  setShopByBrandsData
) => {
  setIsLoading(true);
  try {
    const handPickedResponse = await getHandPickedData();
    setHandPickedCollectionData(handPickedResponse.data);

    const newArrivalsResponse = await getNewArrivalsData();
    setNewArrivalsData(newArrivalsResponse.data);

    const brandsResponse = await getBrandsData();
    setShopByBrandsData(brandsResponse.data);
  } catch (error) {
    console.log("Error fetching data: ", error);



  } finally {
    setIsLoading(false);
  }
};
