import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const pages = ['Slider', 'Features', 'About', 'Fun', 'Service', 'History', 'Portfolio', 'Contact', 'Brand'];

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#16273a',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  padding: '15px 20px',
});

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavBrand = styled(Typography)({
  fontSize: '30px',
  color: 'white',
  fontWeight: 'normal',
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& small': {
    fontSize: '15px',
    color: 'text.secondary',
  },
});

const NavLink = styled(Button)({
  color: 'white',
  fontWeight: 'bold',
  margin: '0 12px',
  '&:hover': {
    color: '#4a90e2',
  },
});

const CustomMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minWidth: '180px',
    padding: '10px 0',
  },
  '& .MuiMenuItem-root': {
    color: '#16273a',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#4a90e2',
      color: 'white',
    },
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

  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <NavBrand variant="h6" noWrap component="a" href="#" className='navbarbrand'>
          Iter
          <small>IT Solutions</small>
        </NavBrand>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {pages.map((page) => (
            <NavLink key={page} onClick={handleCloseNavMenu}>
              {page}
            </NavLink>
          ))}
          <Button variant="contained" color="primary" sx={{ marginLeft: '16px' }}>
            → | Get To Start
          </Button>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <CustomMenu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                {page}
              </MenuItem>
            ))}
          </CustomMenu>
        </Box>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default ResponsiveAppBar;