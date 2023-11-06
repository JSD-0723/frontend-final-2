import { Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel"
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { TopCategoryStyles } from "../../../styles/TopCategoryStyles";
import TextRating from "../../../components/Stars";
const RelatedProducts = ({ id }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    console.log("previous image");

  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === related.length - 1 ? 0 : prevIndex + 1
    );
    console.log("next image");
  };

  return (
    // <div style={{ display: 'flex' , width:'100%', gap:'32px' }}>
    //   <ArrowBack onClick={handlePrevious} />

    //   {related.map((image, index) => (
    //     <Grid item showArrows={false} key={index} sx={{gap:'32px'}}>
    //       <div index={currentIndex} style={{display:"flex", gap:'50px'}}>
    //         <NewArrivalsCard productData={image } width="150px" height="20px" />

    //       </div>

    //     </Grid>
    //   ))}
    //   <ArrowForward onClick={handleNext} />

    // </div>
    <Box sx={{
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50px',
      height: '250px'
    }}>

      {/* <Carousel
      animation="slider"
      autoPlay={true}
      interval={1000}
    > */}
      <Grid container spacing={2}
        sx={{
          flexWrap: "nowrap",
          overflowX: "scroll",
          whiteSpace: "nowrap",
          overflowY: 'hidden'
        }}
      >
        {related.map((item, index) => (

          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 2,
              marginRight: 2,
              height: "125px",
              flexDirection: 'row',
              whiteSpace: "nowrap",
              marginTop: '100px',

            }}
          >

            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={item.img}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "8px",
                  marginTop: '-90px'
                }}
              />
              <Typography variant="caption"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                {item.name}
              </Typography>
              <Typography variant="caption"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',

                }}>
                {item.price}
              </Typography>
              <Typography variant="caption" sx={{
                display: 'flex',
                flexDirection: 'column',

              }}>
                <TextRating rating={item.rating} />
              </Typography>


            </Box>

          </Box>

        ))}

      </Grid>
      {/* </Carousel> */}
    </Box>
  )
};
export default RelatedProducts;