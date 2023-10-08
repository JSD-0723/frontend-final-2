import { Search } from "@mui/icons-material"
import { AppBar, Box, Toolbar, Typography } from "@mui/material"

export const Header = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar variant="h1">
          CORAL'S
        </Toolbar>
        <Toolbar>Handbags
        <Typography>Watches</Typography>
        <Typography>SkinCare</Typography>
        <Typography>Jewellary</Typography>
        <Typography>Apperels</Typography>
        <Search>
          <SearchInputWrapper>
            <SearchIcon/>
          </SearchInputWrapper>
          <div></div>
        </Search>
        </Toolbar>
    </AppBar>
    </Box>

  )
}

