import { Typography } from "@mui/material"
import axios from "axios";
import { useEffect , useState} from "react";
import Carousel from "react-material-ui-carousel"
import { useParams } from "react-router-dom";
import {Box} from "@mui/material";
import {Grid } from "@mui/material";
import ArrowBack from "../../../components/ArrowBack";
import  ArrowForward from "../../../components/ArrowForward"; 
const RelatedProducts =({id })=>{
    const[related, setRelated] = useState([]);
    const[loading, setLoading] = useState(true);
    const params= useParams();
    useEffect(()=>{
        
        axios.get(`https://estore-doxn.onrender.com/eStore/viewRelatedProduct?id=${id}`)
        .then((res)=>{
            console.log("related images");
            console.log(res.data);
            return setRelated(res.data); 
            
        })
        .catch((error)=>{
            console.error("error fetching data" , error);
        })
        .finally(setLoading(false));
         

    } , [])



return(
    <Carousel 
      animation="slider"
      autoPlay={true}
      interval={1000} 
    >
      
        {related.map((image, index) => (
          <Grid item key={index} >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 2,
                marginRight: 2,
                height: "82px",
                flexDirection:'row', 
                whiteSpace:"nowrap", 
                maxWidth:"100%" 
              }}
            >            
                <img
                  src={image.img}
                  style={{ width: "60px", height: "60px", borderRadius: "8px" }}
                />
              
              </Box>
         
          </Grid>
        ))}
    
    </Carousel>


)};
export default RelatedProducts;