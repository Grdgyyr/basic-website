import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const StyledSquare = styled(Box)(({ theme }) => ({
  backgroundColor: "#15263B",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  width: "220px",
  height: "220px",
  textAlign: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: "linear-gradient(to right, #0046C7, #005AFF)",
    transform: "translateY(-5px)",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%", 
    height: "auto",
    padding: "15px",
  },
}));

const Section2 = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width:1120px) and (min-width:900px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    { icon: "src/assets/icons/high-performance.svg", text: "High Performance" },
    { icon: "src/assets/icons/best-sec.svg", text: "Best Security" },
    { icon: "src/assets/icons/global-section2.svg", text: "Info Technology" },
    { icon: "src/assets/icons/cloud-computing.svg", text: "Trusted Services" },
    { icon: "src/assets/icons/clock.svg", text: "24/7 Support" },
    { icon: "src/assets/icons/boss.svg", text: "IT Management" },
    { icon: "src/assets/icons/notification.svg", text: "Certified Company" },
    { icon: "src/assets/icons/trend.svg", text: "Data & Analytics" },
  ];

  return (
    <Box
      id="section2"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#182c44",
        color: "white",
        padding: "50px 0",
        textAlign: "center",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Container>
        <Box
          component="img"
          src="src/assets/images/It Solution.png"
          alt="IT Solution"
          sx={{
            position: "absolute",
            top: isMobile ? "15vh" : "18vh",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "600px",
          }}
        />

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            mt: isMobile ? "12vh" : "15vh",
            position: "relative",
          }}
        >
          We Are World Best IT Solution <br /> Company
        </Typography>

        {/* Services Grid */}
        <Grid
          container
          justifyContent="center"
          spacing={isTablet ? 3 : 2}
          sx={{ mt: 5, position: "relative", zIndex: 1 }}
        >
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <StyledSquare>
                <img 
                  src={service.icon} 
                  alt={service.text} 
                  width="50px" 
                  style={{ marginBottom: "15px" }}
                />
                <Typography sx={{ fontSize: "18px",}}>
                  {service.text}
                </Typography>
              </StyledSquare>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Typography variant="h6" sx={{ marginTop: "40px", position: "relative", zIndex: 1 }}>
          Call to ask any question: <br /> 
          123-456-7890 or 456-789-1430
        </Typography>
      </Container>
    </Box>
  );
};

export default Section2;