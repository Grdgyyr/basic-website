import React from "react";
import { Box, Button, Typography, Container, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";


const Section2 = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box
      id="section2"
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
      <h1>Section2</h1>
    </Box>
  );
}

export default Section2;