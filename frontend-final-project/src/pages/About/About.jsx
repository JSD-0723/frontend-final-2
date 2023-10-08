import { Container, Grid, useMediaQuery } from "@mui/material";
import GridItem from "./GridItem";
import Banner from "./Banner";

const About = () => {
  const descriptionText =
    "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.";
  let Image =
    "https://images.unsplash.com/photo-1596436950209-65ef85e9679c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80";
  const isMediumScreen = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <Grid item xs={12}>
        <img className="image" src={Image} alt="" />
      </Grid>

      <Container>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <h3> About </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing...
          </p>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={7}>
            <img className="image" src={Image} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <GridItem info={descriptionText} />
          </Grid>

          {isMediumScreen ? (
            <>
              <Grid item xs={12} sm={12} md={5}>
                <GridItem info={descriptionText} />
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <img className="image" src={Image} alt="" />
              </Grid>{" "}
            </>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={7}>
                <img className="image" src={Image} alt="" />
              </Grid>
              <Grid item xs={12} sm={12} md={5}>
                <GridItem info={descriptionText} />
              </Grid>
            </>
          )}

          <Grid item xs={12} sm={12} md={7}>
            <img className="image" src={Image} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <GridItem info={descriptionText} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
