import { useEffect, useState } from "react";
import ProductDescription from "./uppersection/ProductDescription";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import LowerSection from "./LowerSection/LowerSection";

const ProductPage = () => {
  const [productDetails, setProductData] = useState([]);
  const params = useParams();

  const url = `https://estore-doxn.onrender.com/eStore/productDetail?id=${params.id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setProductData(res.data);
    });
  }, [url]);

  return (
    <Box>
      {/*Upper Section of the page is the productDescription component */}
      <ProductDescription productData={productDetails} />

      <LowerSection productData={productDetails}/>      
    </Box>
  );
};

export default ProductPage;
