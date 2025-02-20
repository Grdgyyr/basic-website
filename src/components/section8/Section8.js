import React, { useState } from "react";
import { 
  Box, Container, Typography, TextField, Select, MenuItem, Button, useMediaQuery, useTheme 
} from "@mui/material";
import { styled } from "@mui/system";

const ContactForm = styled(Box)(({ theme }) => ({
  backgroundColor: "#9BBBF5",
  padding: "3rem",
  borderRadius: "0.5rem",
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  boxSizing: "border-box",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));

const ContactInputsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  marginBottom: "1rem",
  width: "100%",
  "& > *": {
    flex: "1 1 48%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "& > *": {
      flex: "1 1 100%",
    },
  },
}));

const StyledSelect = styled(Select)({
  background: "linear-gradient(to right, #0046C7, #005AFF)",
  borderRadius: "0.5rem",
  height: "3rem",
  color: "white",
  paddingLeft: "1rem",
  width: "100%",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

const StyledButton = styled(Button)({
  background: "linear-gradient(to right, #0046C7, #005AFF)",
  padding: "0.8rem",
  borderRadius: "0.5rem",
  height: "3rem",
  fontWeight: "500",
  letterSpacing: "0.5px",
  transition: "background-color 0.3s",
  width: "100%",
  color: "#FFFFFF",
  "&:hover": {
    background: "linear-gradient(to right, #0032A0, #0048D1)",
  },
});

const StyledTextField = styled(TextField)({
  background: "linear-gradient(to right, #0046C7, #005AFF)",
  borderRadius: "0.5rem",
  width: "100%",
  input: {
    color: "white",
    padding: "0.8rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

const Section8 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [service, setService] = useState("");

  return (
    <Box
      id="section8"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to bottom, #182c44, #182c44 50%, #112032 50%, #112032)",
        backgroundSize: "cover",
        padding: "50px 0",
        overflowX: "hidden",
        width: "100vw",
      }}
    >
      <Container maxWidth="sm" sx={{ overflow: "hidden" }}> 
        <ContactForm>
          <Typography variant="h4" sx={{ textAlign: "center", color: "#2F2F35", fontWeight: "500", mb: 1 }}>
            You Can Help You?
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", color: "#2F2F35", fontSize: "0.9rem", mb: 3 }}>
            Where you will find the same quality of service and dedication.
          </Typography>

          <Box component="form" id="contactForm">
            <ContactInputsWrapper>
              <StyledSelect
                fullWidth
                displayEmpty
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <MenuItem value="" disabled>Select Services</MenuItem>
                <MenuItem value="service1">Service 1</MenuItem>
                <MenuItem value="service2">Service 2</MenuItem>
                <MenuItem value="service3">Service 3</MenuItem>
              </StyledSelect>

              <StyledTextField fullWidth variant="outlined" placeholder="Your Name*" required />
            </ContactInputsWrapper>

            <ContactInputsWrapper>
              <StyledTextField fullWidth variant="outlined" placeholder="Phone*" required />
              <StyledTextField fullWidth variant="outlined" placeholder="E-mail*" required />
            </ContactInputsWrapper>

            <StyledTextField fullWidth variant="outlined" placeholder="Your Company*" required sx={{ mb: 2 }} />

            <StyledButton type="submit">SEND REQUEST</StyledButton>
          </Box>
        </ContactForm>
      </Container>
    </Box>
  );
};

export default Section8;
