import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import HeroContainer from '../images/image-container.png';

function FirstSectionLayout() {
  return (
    <>
      <Box sx={{ backgroundColor: '#043873', color: 'white', padding: '40px', display: 'flex' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} sx={{ paddingLeft: '30px' }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Get More Done with whitepace
            </Typography>
            <Typography variant="body1" gutterBottom>
              Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks
            </Typography>
            <Button variant="contained" color="primary" aria-label="Try Whitepace for free" sx={{ mt: 2 }}>
              Try Whitepace free
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src={HeroContainer}
              alt="Image showing project management dashboard"
              sx={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FirstSectionLayout;
