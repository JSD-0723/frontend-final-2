import { Box, Typography } from "@mui/material";
import "./SideScrollerStyles.css";
import { Link } from "react-router-dom";
import NewArrivalsCard from "../pages/Home/components/NewArrivalsCard";
import "./SideScrollerStyles.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SideScroller = (props) => {
  const products1 = props.products;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: 2,
          marginLeft: 2,
          marginTop: 2,

          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#13101E",
            fontFamily: "Inter",
            fontWeight: 600,
          }}
        >
          New Arrivals
        </Typography>

        <Link to="/frontend-final-2/products">
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#1B4B66", fontWeight: "600" }}>
              View All
            </Typography>

            <ArrowForwardIosIcon fontSize="5px" />
          </Box>
        </Link>
      </Box>
      <div
        id="slider"
        className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
            marginRight: 2,
            marginLeft: 2,
            marginTop: 2,
          }}
        >
          {products1.map((product) => {
            return (
              <Box>
                <Link
                  to={`/frontend-final-2/category/${product.name.replace(
                    / /g,
                    ""
                  )}/${product.id}`}
                >
                  {" "}
                  <NewArrivalsCard productData={product} />
                </Link>
              </Box>
            );
          })}
        </Box>
      </div>
    </Box>
  );
};

export default SideScroller;
