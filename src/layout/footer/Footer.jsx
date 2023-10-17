import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Button, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { styles } from "./FooterStyles";
import {
  footerProducts,
  footerCategories,
  footerIcons,
} from "../../data/FooterDummyData";
import Hidden from "@mui/material/Hidden";
import { useState } from "react";

const Footer = () => {
  const productsLinks = footerProducts.map((product, index) => (
    <Link to="/about" key={index} style={styles.link}>
      {product}
    </Link>
  ));
  const categoriesLinks = footerCategories.map((category, index) => (
    <Link to="/about" style={styles.link} key={index}>
      {category}
    </Link>
  ));

  const [displayDropDown, setDropDown] = useState(true);
  const [showDropUpIcon, setShowDropUpIcon] = useState(true);

  const toggleFooter = () => {
    setDropDown(!displayDropDown);
    setShowDropUpIcon(!showDropUpIcon);
  };

  return (
    <Box>
      <Hidden mdUp>
        <Box
          sx={{
            ...styles.container,
            marginRight: 2,
            marginLeft: 2,
            backgroundColor: "white",
            marginBottom: 2,
          }}
        >
          <Typography
            sx={{
              marginTop: 1,
              fontFamily: "inter",
              color: "#626262",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            More about CORA’L
          </Typography>

          <Button onClick={toggleFooter}>
            {showDropUpIcon ? footerIcons.dropUpIcon : footerIcons.dropDownIcon}
          </Button>
        </Box>
      </Hidden>

      {displayDropDown && (
        <Box sx={styles.container}>
          <Grid container sx={{ marginRight: 2, marginLeft: 2 }}>
            <Grid item xs={12} md={2} spacing={10} sx={styles.gridItem}>
              <Box>
                <Stack spacing={1}>
                  <Link to="/about" underline="none" style={styles.heading}>
                    Shop by category
                  </Link>
                  {categoriesLinks}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={styles.gridItem}>
              <Box>
                <Stack spacing={1}>
                  <Link to="/about" underline="none" style={styles.heading}>
                    Shop by Product
                  </Link>
                  {productsLinks}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Hidden mdUp>
                <Divider sx={styles.divider} />
              </Hidden>

              <Hidden mdUp>
                {/* mobile styling for icons */}
                <Box sx={styles.iconContainerMobile}>
                  <Link>{footerIcons.facebookIcon}</Link>
                  <Link style={styles.icons}>{footerIcons.instagramIcon} </Link>
                  <Link style={styles.icons}>{footerIcons.twitterIcon}</Link>
                  <Link style={styles.icons}>{footerIcons.youtubeIcon}</Link>
                </Box>
              </Hidden>

              {/* desktop styling for icons */}
              <Hidden mdDown>
                <Box sx={styles.iconContainerDesktop}>
                  <Link>{footerIcons.facebookIcon}</Link>
                  <Link style={styles.icons}>{footerIcons.instagramIcon} </Link>
                  <Link style={styles.icons}>{footerIcons.twitterIcon}</Link>
                  <Link style={styles.icons}>{footerIcons.youtubeIcon}</Link>
                </Box>
              </Hidden>

              <Box sx={styles.gridItem}>
                <Hidden mdUp>
                  {/* mobile styling  */}
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <span style={styles.location}>
                      {footerIcons.locationIcon}
                    </span>
                  </Box>
                </Hidden>

                {/* desktop styling */}
                <Hidden mdDown>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={styles.location}>
                      {footerIcons.locationIcon}
                    </span>
                  </Box>
                </Hidden>

                <Hidden mdUp>
                  {/* mobile styling  */}
                  <Box sx={{ display: "flex" }}>
                    <span style={styles.link}>
                      © 2021 | Cora Leviene All Rights Reserved
                    </span>
                  </Box>
                </Hidden>

                {/* desktop styling */}
                <Hidden mdDown>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={styles.link}>
                      © 2021 | Cora Leviene All Rights Reserved
                    </span>
                  </Box>
                </Hidden>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
