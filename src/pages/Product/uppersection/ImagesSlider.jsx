import { Box } from "@mui/material";
import "./styles.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ImagesSlider = ({ images, next, prev }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3,
      }}
    >
      <button onClick={next}>
        <KeyboardArrowLeftIcon />{" "}
      </button>

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
      <button onClick={prev}>
        <KeyboardArrowRightIcon />
      </button>
    </Box>
  );
};

export default ImagesSlider;
