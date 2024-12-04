import React from "react";
// import { FaApple, FaGooglePlay } from "react-icons/fa";
import NavigationHeader from "./components/NavigationHeader";
import { Box } from "@mui/material";
import FirstSectionLayout from "./components/FirstSectionLayout";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PricingPlans from "./components/PricingPlans";

const App = () => {
  return (
    <Box>
      <NavigationHeader />
      <FirstSectionLayout />
      <PricingPlans />
      <HeroSection />
      <Footer />
    </Box>
  );
};

export default App;