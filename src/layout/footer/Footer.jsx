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
      <Grid container>
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

        <Grid item xs={12} md={8} sx={styles.gridItem}>
          <Box>
            <Stack spacing={1}>
              <Link to="/about" underline="none" style={styles.heading}>
                Shop by Product
              </Link>
              {productsLinks}
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Divider sx={styles.divider} />
          <Box sx={styles.gridItem}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Link>{footerIcons.facebookIcon}</Link>
              <Link style={styles.icons}>{footerIcons.instagramIcon} </Link>
              <Link style={styles.icons}> {footerIcons.twitterIcon}</Link>
              <Link style={styles.icons}>{footerIcons.youtubeIcon}</Link>
            </Box>

            <Box sx={{ display: "flex" }}>
              <span style={styles.location}>{footerIcons.locationIcon}</span>
            </Box>

            <Box sx={{ display: "flex" }}>
              <span style={styles.link}>
                © 2021 | Cora Leviene All Rights Reserved
              </span>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
