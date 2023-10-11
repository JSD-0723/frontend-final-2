import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { styles } from "./FooterStyles";
import {
  footerProducts,
  footerCategories,
  footerIcons,
} from "../../data/FooterDummyData";
import Hidden from "@mui/material/Hidden";
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
  return (
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
              <Link style={styles.icons}> {footerIcons.twitterIcon}</Link>
              <Link style={styles.icons}>{footerIcons.youtubeIcon}</Link>
            </Box>
          </Hidden>

          {/* desktop styling for icons */}
          <Hidden mdDown>
            <Box sx={styles.iconContainerDesktop}>
              <Link>{footerIcons.facebookIcon}</Link>
              <Link style={styles.icons}>{footerIcons.instagramIcon} </Link>
              <Link style={styles.icons}> {footerIcons.twitterIcon}</Link>
              <Link style={styles.icons}>{footerIcons.youtubeIcon}</Link>
            </Box>
          </Hidden>

          <Box sx={styles.gridItem}>
            <Hidden mdUp>
              {/* mobile styling  */}
              <Box sx={{ display: "flex" }}>
                <span style={styles.location}>{footerIcons.locationIcon}</span>
              </Box>
            </Hidden>

            {/* desktop styling */}
            <Hidden mdDown>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <span style={styles.location}>{footerIcons.locationIcon}</span>
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
  );
};

export default Footer;
