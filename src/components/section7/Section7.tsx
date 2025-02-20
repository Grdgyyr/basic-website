import React from "react";
import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";

// Styled Components
const ContactCircle = styled(Box)({
  width: 80,
  height: 80,
  backgroundColor: "#005AFF",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 20px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const InfoCard = styled(Box)({
  backgroundColor: "#15263B",
  borderRadius: "10px",
  padding: "30px",
  display: "flex",
  gap: "20px",
  alignItems: "center",
  width: "100%",
  maxWidth: "400px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#005AFF",
  },
});

const ReadMoreButton = styled(Button)({
  backgroundColor: "#005AFF",
  color: "white",
  border: "none",
  padding: "8px 24px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#0046C7",
  },
});

const logos = [
  "src/assets/icons/brand1.svg",
  "src/assets/icons/brand2.svg",
  "src/assets/icons/brand3.svg",
  "src/assets/icons/brand4.svg",
  "src/assets/icons/brand5.svg",
];

const Section7 = () => {
  return (
    <Box
      id="section7"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1B2937",
        padding: "50px 0",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{ padding: "50px 0", backgroundColor: "#cccccc", color: "black" }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mb: 2, mt: 2, color: "aliceblue" }}
          >
            Focus on Your Business
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              margin: "0 auto 40px",
              color: "aliceblue",
            }}
          >
            Many of the world's top brands have chosen insights to help them
            design and deliver innovative products.
          </Typography>
          <ContactCircle>
            <img src="src/assets/icons/phone.svg" alt="Phone" />
          </ContactCircle>
          <Typography variant="body1" sx={{ color: "aliceblue" }}>
            Call Us to Get Started
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "aliceblue" }}
          >
            +123-456-7890
          </Typography>
        </Container>
      </Box>

      {/* Logo Section */}
      <Box sx={{ backgroundColor: "#005AFF", padding: "40px 0" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {logos.map((logo, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box
                  component="img"
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  sx={{
                    maxWidth: "150px",
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Cards Section */}
      <Box sx={{ padding: "80px 0" }}>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {/* Left Card */}
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <InfoCard>
                <Box
                  component="img"
                  src="src/assets/icons/notification-section7.svg"
                  width={50}
                />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Augmented Reality
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#B0B7C3" }}>
                    We carry more than just is our experience.
                  </Typography>
                </Box>
              </InfoCard>
            </Grid>

            {/* Read More Button (Centered) */}
            <Grid
              item
              xs={12}
              sm={2}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReadMoreButton variant="contained">Read More</ReadMoreButton>
            </Grid>

            {/* Right Card */}
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <InfoCard>
                <Box component="img" src="src/assets/icons/raket.svg" width={50} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Augmented Reality
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#B0B7C3" }}>
                    We carry more than just is our experience.
                  </Typography>
                </Box>
              </InfoCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Section7;
