import { Box } from "@mui/material";
import "./styles.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ImagesSlider = ({ images }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3,
      }}
    >
      <KeyboardArrowLeftIcon />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {images.map((image) => {
          return <img className="small-image" src={image} alt="" />;
        })}
      </Box>
      <KeyboardArrowRightIcon />
    </Box>
  );
};

export default ImagesSlider;
