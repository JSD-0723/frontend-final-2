import { Box, Container, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

const GridItem = (props) => {
  return (
    <Box>
      <h3> About </h3>
      <p> {props.info} </p>
    </Box>
  );
};

export default GridItem;
