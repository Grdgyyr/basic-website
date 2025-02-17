import React from "react";
import { Box, Button, Typography, Container, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

const Section1 = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      id="section1"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D1B2A",
        color: "white",
        padding: "70px 0 50px",
        position: "relative",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {/* Follow Us */}
      {!isMobile && (
        <Typography
          sx={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%) rotate(-90deg)",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "white",
          }}
        >
          Follow Us – Fb. / Tw. / Inst.
        </Typography>
      )}

      {/* Content Wrapper */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : "40px",
        }}
      >
        {/* Text Content */}
        <Box sx={{ maxWidth: "500px", flex: 2 }}>
          <Typography variant="h5" sx={{ fontSize: isMobile ? "18px" : "20px" }}>
            We Are Creative
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: isMobile ? "36px" : "48px",
              fontWeight: "bold",
            }}
          >
            Best IT Solution <br />
            Company
          </Typography>
          <Typography
            sx={{ fontSize: isMobile ? "16px" : "18px", marginTop: "10px" }}
          >
            Get the most of reduction in your team's operating <br />
            creates amazing UI/UX experiences.
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: "20px", backgroundColor: "#007BFF", fontWeight: "bold" }}
          >
            → | Read More
          </Button>
        </Box>

        {/* Image Content */}
        <Box
          sx={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StyledImage src="/assets/images/imageplaceholder1.png"/>
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            position: isMobile ? "relative" : "absolute",
            right: isMobile ? "auto" : "20px",
            top: isMobile ? "auto" : "50%",
            transform: isMobile ? "none" : "translateY(-50%) rotate(90deg)",
            display: "flex",
            gap: "10px",
          }}
        >
          <Button variant="contained" color="secondary" sx={{ width: isMobile ? "60px" : "80px" }}>
            Prev
          </Button>
          <Button variant="contained" sx={{ width: isMobile ? "60px" : "80px" }}>
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// Styled Image Component
const StyledImage = styled("img")(({ theme }) => ({
  width: "500px",
  height: "500px",
  borderRadius: "50%",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    width: "400px",
    height: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "300px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "250px",
    height: "250px",
  },
}));

export default Section1;
