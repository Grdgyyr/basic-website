import React from "react";
import { Box, Grid, Typography, LinearProgress, Container, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const ButtonSmall = styled(Box)(({ theme }) => ({
  backgroundColor: "#15263B",
  borderRadius: "5px",
  padding: "10px",
  fontSize: "16px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80px",
  width: "150px",
  margin: "0 auto",
  textAlign: "center",
  "&:hover": {
    background: "linear-gradient(to right, #0046C7, #005AFF)",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
  },
}));

const ProgressContainer = styled(Box)({
  width: "100%",
  backgroundColor: "#e0e0e0",
  borderRadius: "8px",
  overflow: "hidden",
  height: "15px",
});

const Progress = styled(LinearProgress)({
  height: "100%",
  backgroundColor: "#76c7c0",
});

const Section5 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="section5"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#182c44",
        padding: "50px 0",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          {/* Left Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: isMobile ? "center" : "left" }}>
              We are here to IT Solution with <br />
              <strong style={{ color: "#4a90e2" }}>20 years of experience</strong>
            </Typography>

            {/* Buttons */}
            <Grid 
              container 
              spacing={2} 
              sx={{ 
                mb: 3, 
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: "center"
              }}
            >
              <Grid item xs={6} sm={6} md={6}>
                <ButtonSmall>
                  <img src="src/assets/icons/honest.svg" alt="History" width="40px" />
                  <span>History</span>
                </ButtonSmall>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <ButtonSmall>
                  <img src="src/assets/icons/bolsay.svg" alt="Mission" width="40px" />
                  <span>Mission</span>
                </ButtonSmall>
              </Grid>
            </Grid>

            {/* Paragraphs */}
            <Typography sx={{ mb: 2, textAlign: isMobile ? "center" : "left" }}>
              We have a tendency to believe that a smart-looking website is the first impression.
            </Typography>
            <Typography sx={{ mb: 3, textAlign: isMobile ? "center" : "left" }}>
              Web designing is a powerful way of not just a profession, but a passion for our company. 
              We have a tendency to believe that a smart-looking website is crucial.
            </Typography>

            {/* Progress Bar */}
            <Typography sx={{ fontWeight: "bold", mb: 1, textAlign: isMobile ? "center" : "left" }}>
              History Solution 75%
            </Typography>
            <ProgressContainer>
              <Progress variant="determinate" value={75} />
            </ProgressContainer>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src="src/assets/images/kilid.svg"
              alt="IT Solution"
              sx={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                marginTop: isMobile ? "0" : "-10%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section5;