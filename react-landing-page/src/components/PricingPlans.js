import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardHeader, List, ListItem, ListItemText, Button } from '@mui/material';
import CheckListIcon from '../images/Icon.png';

function PricingPlans() {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      features: [
        'Capture ideas and find them quickly',
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
    {
      title: 'Personal',
      price: '$11.99',
      features: [
        'Keep home and family on track',
        'Sync unlimited devices',
        '20 GB monthly uploads',
        '500 MB max note size',
        'Prioritized support',
        'Collaborate with others on shared tasks',
      ],
    },
    {
      title: 'Organization',
      price: '$49.99',
      features: [
        'Enterprise-grade collaboration',
        'Advanced security features',
        'Unlimited team workspaces',
        '50 GB monthly uploads',
        'Premium customer support',
        'Admin tools and centralized billing',
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#F2F2F2', padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Choose Your Plan
      </Typography>
      <Typography variant="body1" gutterBottom>
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Whitepace has the right plan for you.
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        {plans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.title}>
            <Card
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)', backgroundColor: '#043873', color: 'white'},
                backgroundColor: 'white',
                color: 'black'
              }}
            >
              <CardHeader
                title={plan.title}
                titleTypographyProps={{ variant: 'h5', textAlign: 'left' }}
                sx={{ padding: '16px' }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '16px', '&:hover': { color: '#FFE492'}, }}>
                  {plan.price}
                </Typography>
                <List>
                  {plan.features.map((feature) => (
                    <ListItem key={feature} sx={{ padding: '4px 0', gap: '10px' }}>
                      <img
                          src={CheckListIcon}
                          alt="check list logo"
                          style={{ width: '18px', height: '18px', border: '2px' }}
                        />
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px' }}>
                <Button variant="contained" color="primary" size="large">
                  Get Started
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PricingPlans;
