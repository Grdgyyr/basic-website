import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const pages = [
  { name: "Slider", id: "section1" },
  { name: "Features", id: "section2" },
  { name: "About", id: "section3" },
  { name: "Fun", id: "section4" },
  { name: "Service", id: "section5" },
  { name: "History", id: "section6" },
  { name: "Portfolio", id: "section7" },
  { name: "Contact", id: "section8" },
  { name: "Brand", id: "section9" }
];

const CustomAppBar = styled(AppBar)({
  backgroundColor: "#16273a",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  padding: "15px 20px",
});

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const NavBrand = styled(Typography)({
  fontSize: "30px",
  color: "white",
  fontWeight: "normal",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "& small": {
    fontSize: "15px",
    color: "text.secondary",
  },
});

const NavLink = styled(Button)({
  color: "white",
  fontWeight: "bold",
  margin: "0 12px",
  "&:hover": {
    color: "#4a90e2",
  },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // 🔽 Function to scroll smoothly to a section
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    handleCloseNavMenu();
  };

  return (
    <CustomAppBar position="fixed">
      <CustomToolbar>
        <NavBrand variant="h6" noWrap component="a" href="#">
          Iter
          <small>IT Solutions</small>
        </NavBrand>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {pages.map((page) => (
            <NavLink key={page.name} onClick={() => handleScrollToSection(page.id)}>
              {page.name}
            </NavLink>
          ))}
          <Button variant="contained" color="primary" sx={{ marginLeft: "16px" }}>
            → | Get To Start
          </Button>
        </Box>

        {/* Mobile Navigation Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={() => handleScrollToSection(page.id)}>
                {page.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default ResponsiveAppBar;
