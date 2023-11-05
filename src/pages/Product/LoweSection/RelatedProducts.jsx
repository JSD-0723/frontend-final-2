import { Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel"
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import ArrowBack from "../../../components/ArrowBack";
import ArrowForward from "../../../components/ArrowForward";
import NewArrivalsCard from "../../Home/components/NewArrivalsCard";
const RelatedProducts = ({ id }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const[currentIndex , setCurrentIndex]= useState(0);
  const params = useParams();
  useEffect(() => {

    axios.get(`https://estore-doxn.onrender.com/eStore/viewRelatedProduct?id=${params.id}`)
      .then((res) => {
        console.log(res.data);
        return setRelated(res.data);

      })
      .catch((error) => {
        console.error("error fetching data", error);
      })
      .finally(setLoading(false));


  }, []);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? related.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === related.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (

    <div style={{ display: 'flex' , width:'100%', gap:'32px' }}>
      <ArrowBack onClick={handlePrevious} />

      {related.map((image, index) => (
        <Grid item showArrows={false} key={index} sx={{gap:'32px'}}>
          <div index={currentIndex} style={{display:"flex", gap:'50px'}}>
            <NewArrivalsCard productData={image } width="150px" height="20px" />
            <NewArrivalsCard productData={image } width="150px" height="20px" />

          </div>

        </Grid>
      ))}
      <ArrowForward onClick={handleNext} />

    </div>


  )
};
export default RelatedProducts;