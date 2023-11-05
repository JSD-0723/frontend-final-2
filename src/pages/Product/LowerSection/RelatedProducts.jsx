import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
const RelatedProducts = () => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://tap-web-1.herokuapp.com/topics/list")
      .then((res) => {
        console.log("related images");
        console.log(res.data);
        setRelated(res.data);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <Typography>Loading....</Typography>
      ) : (
        <Carousel sx={{ marginTop: "150px" }}>
          {related.map((item, index) => (
            <div
              style={{ width: "50px", height: "50px", marginTop: "200px" }}
              key={index}
            >
              <img src={item.image} alt={item.topic} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};
export default RelatedProducts;
