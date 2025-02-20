import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";

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
        "@media (max-height: 800px)": {
          minHeight: "calc(100vh - 60px)",
          marginTop: "60px",
        },
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
            "@media (max-width: 1113px)": {
              display: "none",
            },
            "@media (max-width: 1500px) and (min-width: 1114px)": {
              display: "none",
            },
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
          "@media (max-width: 850px) and (min-width: 769px)": {
              flex: "1",
              marginLeft: "10vh",
            },
        }}
      >
        {/* Text Content */}
        <Box sx={{ maxWidth: "500px", flex: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: isMobile ? "18px" : "20px" }}
          >
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
            sx={{
              marginTop: "20px",
              backgroundColor: "#007BFF",
              fontWeight: "bold",
            }}
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
          <Box
            component="img"
            src="src/assets/images/imageplaceholder1.png"
            sx={{
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              objectFit: "contain",
              // Responsive Breakpoints
              "@media (max-width: 1113px)": {
                width: "400px",
                height: "400px",
              },
              "@media (max-width: 1500px) and (min-width: 1114px)": {
                width: "400px",
                height: "400px",
              },
              "@media (max-width:768px)": {
                width: "300px",
                height: "300px",
              },
              "@media (max-width:500px)": {
                width: "250px",
                height: "250px",
              },
              "@media (max-width: 1113px) and (min-width: 769px)": {
                width: "350px",
                height: "350px",
              },
            }}
          />
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            flex: "1",
            position: isMobile ? "relative" : "absolute",
            right: isMobile ? "auto" : "20px",
            top: isMobile ? "auto" : "50%",
            transform: isMobile ? "none" : "translateY(-50%) rotate(90deg)",
            display: "flex",
            gap: "10px",
            "@media (max-width: 1113px)": {
              right: "10px",
            },
            "@media (max-width: 1500px) and (min-width: 1114px)": {
              right: "-20px",
            },
            "@media (max-width: 500px)": {
              justifyContent: "center",
              gap: "5px",
            },
            "@media (max-width: 1113px) and (min-width: 769px)": {
              order: "4",
              flexDirection: "row",
              position: "relative",
              right: "auto",
              top: "auto",
              transform: "translateY(-50%) rotate(90deg)",
              justifyContent: "center",
              marginTop: "20px",
            },
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: isMobile ? "60px" : "80px",
              "@media (max-width: 500px)": {
                width: "60px",
              },
            }}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            sx={{
              width: isMobile ? "60px" : "80px",
              "@media (max-width: 500px)": {
                width: "60px",
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Section1;
