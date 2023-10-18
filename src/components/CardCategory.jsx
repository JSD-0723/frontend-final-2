import { Paper, Typography, Box } from "@mui/material";
import BasicRating from "./Stars";
import BojeeBag from "../data/Assets/BoujeeBag.png";
const CardCategory = (props) => {
  const productsData = props.products;
  console.log(productsData);

  return (
    <Paper elevation={0} sx={{ fontFamily: "inter" }}>
      <img src={productsData.img} alt="" />
      <Box
        sx={{
          backGroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: "black", fontWeight: "700" }}>
            {productsData.name}
          </Typography>
          <Typography>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 18.25C11 18.25 1.625 13 1.625 6.62501C1.62519 5.49826 2.01561 4.40635 2.72989 3.53493C3.44416 2.66351 4.4382 2.06636 5.54299 1.84501C6.64778 1.62367 7.79514 1.79179 8.78999 2.32079C9.78484 2.84979 10.5658 3.70702 11 4.74673L11 4.74673C11.4342 3.70702 12.2152 2.84979 13.21 2.32079C14.2049 1.79179 15.3522 1.62367 16.457 1.84501C17.5618 2.06636 18.5558 2.66351 19.2701 3.53493C19.9844 4.40635 20.3748 5.49826 20.375 6.62501C20.375 13 11 18.25 11 18.25Z"
                stroke="#13101E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Typography>
        </Box>
        <Typography sx={{ color: "#626262" }}> Black bag </Typography>
        <BasicRating rating={productsData.rating} />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ fontWeight: "700", color: "#171520" }}>
            ${productsData.price}
          </Typography>
          <Typography
            sx={{
              textDecoration: "line-through",
              fontWeight: "400",
              color: "#626262",
            }}
          >
            $78.66
          </Typography>
          <Typography sx={{ color: "red" }}> 50% OFF </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardCategory;
