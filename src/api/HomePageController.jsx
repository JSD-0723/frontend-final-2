import axios from "axios";

const url = "https://estore-doxn.onrender.com/eStore/shopByCollection";

export const getProducts = () => {
  axios.get(url).then((res) => {
    return res.data
  });
};

