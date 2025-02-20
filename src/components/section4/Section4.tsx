import React, { useState } from "react";
import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";

// Styled Service Button
const ServiceButton = styled(Button)({
  backgroundColor: "#112032",
  color: "white",
  border: "1px solid #112032",
  padding: "50px",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  width: "100%",
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#005AFF",
  },
});

// Styled Popup Box
interface PopupTextProps {
  show: boolean;
}

const PopupText = styled(Box)<PopupTextProps>(({ show }) => ({
  width: "100%",
  backgroundColor: "#005AFF",
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
  textAlign: "center",
  padding: "20px",
  opacity: show ? 1 : 0,
  visibility: show ? "visible" : "hidden",
  transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden", // Removed scrollbar
  boxSizing: "border-box",
  height: show ? "300px" : "0px", // Square popup
}));

// Service Data with Unique Popup Text
const services = [
  {
    id: "popup1",
    icon: "src/assets/icons/cloud.svg",
    title: "Deep Expertise & Leadership Leadership",
    popupText: "We provide strategic IT leadership to drive success.",
  },
  {
    id: "popup2",
    icon: "src/assets/icons/stats.svg",
    title: "Custom Software Development",
    popupText: "Tailored software solutions built for your business needs.",
  },
  {
    id: "popup3",
    icon: "src/assets/icons/global.svg",
    title: "Software Product Development",
    popupText: "Innovative software products crafted to perfection.",
  },
  {
    id: "popup4",
    icon: "src/assets/icons/lock.svg",
    title: "Dedicated IT Solution",
    popupText: "End-to-end IT solutions designed for reliability.",
  },
  {
    id: "popup5",
    icon: "src/assets/icons/chain.svg",
    title: "Cross-Industry Expertise",
    popupText: "We excel in various industries, delivering the best results.",
  },
  {
    id: "popup6",
    icon: "src/assets/icons/rocket.svg",
    title: "World-Class Architect",
    popupText: "Top-tier software architecture for scalable applications.",
  },
];

const Section4 = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handlePopup = (popupId:any) => {
    setActivePopup(activePopup === popupId ? null : popupId);
  };

  return (
    <Box
      id="section4"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D1B2A",
        padding: "50px 0",
        position: "relative",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          paddingTop: activePopup ? "1vh" : "10vh",
          transition: "padding-top 0.3s ease-in-out",
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: activePopup ? 8 : 5,
            transition: "margin-bottom 0.3s ease-in-out",
          }}
        >
          We Offer a Wide Variety of IT Services
        </Typography>

        {/* Service Boxes Grid */}
        <Grid container spacing={3} justifyContent="center">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Stack spacing={1}>
                <PopupText show={activePopup === service.id}>
                  {service.popupText}
                </PopupText>
                <ServiceButton onClick={() => handlePopup(service.id)}>
                  <img src={service.icon} alt={service.title} width={40} />
                  <span>{service.title}</span>
                </ServiceButton>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section4;
