import { Box } from "@mui/material";
import "./styles.css";
const ImagesSlider = ({ images }) => {
  console.log(images);
  return (
    <Box sx={{ display: "flex" }}>
      {images.map((image) => {
        return <img className="small-image" src={image} alt="" />;
      })}
    </Box>
  );
};

export default ImagesSlider;
