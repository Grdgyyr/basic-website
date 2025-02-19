import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Section3 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      id="section3"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#0D1B2A",
        color: "white",
        padding: "80px 20px",
        position: "relative",
        textAlign: isTablet || isMobile ? "center" : "center", 
      }}
    >
      <Grid container spacing={5} alignItems="center" justifyContent="center" maxWidth="lg">
        {/* Left Section: SVG Design */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <svg
         width={isMobile ? "320px" : isTablet ? "420px" : "490px"} 
         height={isMobile ? "320px" : isTablet ? "420px" : "490px"} 
         viewBox="0 0 480 480" 
         preserveAspectRatio="xMidYMid meet"
      >
      {/* Large Blue Circle */}
        <circle cx="240" cy="180" r="120" fill="#2E75FF" stroke="#1A50C2" strokeWidth="6" />
  
        {/* Main Title */}
       <text x="240" y="170" fontSize="20" fill="white" fontWeight="bold" textAnchor="middle">
         American IT Solutions
        </text>

       {/* Subtitle */}
       <text x="240" y="195" fontSize="14" fill="white" fontStyle="italic" textAnchor="middle">
       Association webit.
      </text>

      {/* Small Gray Circles */}
      <circle cx="120" cy="320" r="80" fill="#B0B3B8" stroke="#2B3A50" strokeWidth="5" />
      <circle cx="380" cy="280" r="80" fill="#B0B3B8" stroke="#2B3A50" strokeWidth="5" />
      </svg>

        </Grid>

        {/* Right Section: Text and Call-to-Action */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: isTablet || isMobile? "center" : "center",
            justifyContent: "center",
            textAlign: isTablet || isMobile ? "center" : "center",
          }}
        >
          <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" sx={{ mb: 3 }}>
            We are here to IT Solution with 20 years of experience
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, opacity: 0.8 }}>
            We believe a smart looking website makes a lasting first impression.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.6 }}>
            Web design isn't just a profession for us; it's a passion. A visually appealing, well-structured website is
            key to engaging visitors and building trust.
          </Typography>

          {/* Call Icon and Number */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: isMobile || isTablet ? "center" : "flex-start",
            }}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#2E75FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
              }}
            >
              <PhoneIcon />
            </Box>
            <Typography variant="h6">Call to ask any question: +123-456-7890</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Statistics Section */}
      <Box
        sx={{
          mt: 7,
          width: "80%",
          maxWidth: "900px",
          backgroundColor: "#2E75FF",
          padding: "30px 20px",
          textAlign: "center",
          borderRadius: "1rem",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {[
            { label: "Happy Clients", value: "25K+", icon: <EmojiEmotionsIcon fontSize="large" /> },
            { label: "Projects Completed", value: "796+", icon: <BusinessCenterIcon fontSize="large" /> },
            { label: "Business Partners", value: "85+", icon: <HandshakeIcon fontSize="large" /> },
            { label: "Awards Winning", value: "75+", icon: <EmojiEventsIcon fontSize="large" /> },
          ].map((item, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box>
                <Typography variant="h4">{item.icon}</Typography>
                <Typography variant="h4">{item.value}</Typography>
                <Typography variant="body1">{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Section3;
