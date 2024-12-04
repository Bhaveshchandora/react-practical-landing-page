import React from 'react';
import { Box, Typography, Grid, Link, Button } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#043873', color: 'white', padding: '0px 40px 20px 40px', border: '3px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '30px', textDecoration: 'none' }}>
          <Link href="#" color="inherit">
            Terms & privacy
          </Link>
          <Link href="#" color="inherit">
            Security
          </Link>
          <Link href="#" color="inherit">
            Status
          </Link>
          <Typography variant="body1">©2021 Whitepace LLC.</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: { xs: '10px', sm: '0' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', gap: '10px' }}>
            <Link href="https://facebook.com" color="inherit" target="_blank" aria-label="Facebook">
              <Facebook />
            </Link>
            <Link href="https://twitter.com" color="inherit" target="_blank" aria-label="Twitter">
              <Twitter />
            </Link>
            <Link href="https://linkedin.com" color="inherit" target="_blank" aria-label="LinkedIn">
              <LinkedIn />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
