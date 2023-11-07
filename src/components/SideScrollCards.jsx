import { Box, Typography } from "@mui/material";
import "./SideScrollerStyles.css";
import { Link } from "react-router-dom";
import NewArrivalsCard from "../pages/Home/components/NewArrivalsCard";
import "./SideScrollerStyles.css";

const SideScroller = (props) => {
  const products1 = props.products;
  return (
    <div
      id="slider"
      className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
    >
      <Box sx={{ marginRight: 2, marginLeft: 2 }}>
        <Typography variant="h4" component="h4">
          New Arrivals
        </Typography>
      </Box>

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
                <NewArrivalsCard productData={product} />
              </Link>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default SideScroller;
