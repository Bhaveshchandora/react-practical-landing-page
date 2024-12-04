import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppLogo from '../images/logo-icon.png';

function NavigationHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" sx={{ background: '#043873' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'left', gap: '10px', marginBottom: '2px' }}>
          <img
            src={AppLogo}
            alt="App logo"
            style={{ width: '37px', height: '29px' }}
          />
          <Typography variant="h6" component="div">
            Whitepace
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Solutions</Button>
          <Button color="inherit">Resources</Button>
          <Button color="inherit">Pricing</Button>
          <Button sx={{ borderRadius: '8px', backgroundColor: '#FFE492', marginRight: '10px' }}>Login</Button>
          <Button variant="contained" color="primary" sx={{ borderRadius: '8px' }}>
            Try Whitepace free
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Products</MenuItem>
            <MenuItem onClick={handleMenuClose}>Solutions</MenuItem>
            <MenuItem onClick={handleMenuClose}>Resources</MenuItem>
            <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>Try Whitepace free</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationHeader;
