import React from 'react';
import { Box, Typography, Button, Grid, Link } from '@mui/material';
import AppleLogo from '../images/apple-black-logo.png';
import AndroidLogo from '../images/android-logo.png';
import WindowsLogo from '../images/windows-logo.png';
import AppLogo from '../images/logo-icon.png';

function HeroSection() {
    return (
        <Box sx={{ backgroundColor: '#043873', color: 'white', padding: '40px 20px' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                    Try Whitepace Today
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '18px', marginBottom: '20px' }}>
                    Get started for free. Add your whole team as your needs grow.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: '10px 20px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                    }}
                >
                    Try Taskey Free →
                </Button>
                <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    On a big team? <Link href="#" color="inherit" underline="hover">Contact sales</Link>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                <img
                    src={AppleLogo}
                    alt="Apple logo"
                    style={{ width: '60px', height: '60px' }}
                />
                <img
                    src={WindowsLogo}
                    alt="Windows logo"
                    style={{ width: '60px', height: '60px' }}
                />
                <img
                    src={AndroidLogo}
                    alt="Android logo"
                    style={{ width: '60px', height: '60px' }}
                />
            </Box>

            <Box
                sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
                    gap: '20px',
                }}
            >
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'left', gap: '10px', marginBottom: '2px' }}>
                        <img
                            src={AppLogo}
                            alt="App logo"
                            style={{ width: '37px', height: '29px' }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                            Whitepace
                        </Typography>
                    </Box>
                    <Typography variant="body2">
                        Whitepace was created for the new ways we live and work. We make a better workspace around the world.
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                        Product
                    </Typography>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        Overview
                    </Link>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        Pricing
                    </Link>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        Customer Stories
                    </Link>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                        Resources
                    </Typography>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        Blog
                    </Link>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        Guides & Tutorials
                    </Link>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        Help Center
                    </Link>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                        Company
                    </Typography>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        About Us
                    </Link>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        Careers
                    </Link>
                    <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '8px' }}>
                        Media Kit
                    </Link>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                        Try It Today
                    </Typography>
                    <Typography variant="body2">
                        Get started for free. Add your whole team as your needs grow.
                    </Typography>
                    <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: '10px 20px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        marginTop: '10px'
                    }}
                >
                    Start Today →
                </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default HeroSection;
