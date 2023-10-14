import { Container, Grid, useMediaQuery } from "@mui/material";
import GridItem from "./GridItem";

import banner from "../../helper/Assets/banner.png";
import watchimg from "../../helper/Assets/smartwatch.png";
import glasses from "../../helper/Assets/glasses.png";
import bags from "../../helper/Assets/bags.png";
import "./About.css";

const About = () => {
  const descriptionText =
    "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.";

  const isMediumScreen = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <img className="asd" src={banner} alt="" />
      <Container>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <h3> About </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing..
          </p>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={8}>
            <img className="image" src={bags} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <GridItem info={descriptionText} />
          </Grid>

          {isMediumScreen ? (
            <>
              <Grid item xs={12} sm={12} md={8}>
                <GridItem info={descriptionText} />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <img className="image" src={watchimg} alt="" />
              </Grid>{" "}
            </>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={8}>
                <img className="image" src={watchimg} alt="" />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <GridItem info={descriptionText} />
              </Grid>
            </>
          )}

          <Grid item xs={12} sm={12} md={8}>
            <img className="image" src={glasses} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <GridItem info={descriptionText} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
