import { Box } from "@mui/material";
import "./SideScrollerStyles.css";

const SideScroller = (props) => {
  const products1 = props.products.slice(0, 8);
  return (
    <div className="">
      {products1.map((item) => {
        <Box sx={{ display: "flex", flexDirection: "row" }} key={item.id}>
          return (
          <img className="w-[25%]" src={item.img} alt="" />
          );
        </Box>;
      })}
    </div>
  );
};

export default SideScroller;
