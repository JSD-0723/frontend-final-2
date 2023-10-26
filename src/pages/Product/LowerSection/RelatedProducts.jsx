import { Typography } from "@mui/material"
import axios from "axios";
import { useEffect , useState} from "react";
import Carousel from "react-material-ui-carousel"
import { useParams } from "react-router-dom";
import {Box} from "@mui/material";
import { NewArrivals } from "../../Home/components/Section";


const RelatedProducts =({id})=>{
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
   <div>
    {loading?(
       <Typography>Loading....</Typography>
    ):(
     
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <NewArrivals products={related} />
          </Box>
       
    //  <Carousel sx={{marginTop:'150px'}}>
    //     {related.map((item, index)=>(
    //         <div style={{width:'50px', height:'50px', marginTop:'200px'}} key={index}>
    //         <img src={item.image} alt={item.topic}/>
    //         </div>
    //   )  )}
    //  </Carousel>
    )}
   </div>


)};
export default RelatedProducts;