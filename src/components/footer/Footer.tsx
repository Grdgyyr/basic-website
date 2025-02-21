import React from "react";
import { Box, Typography, Container, Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleSubscribe = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent unnecessary reloads
    const confirmNavigation = window.confirm("Proceed to HR page?");
    if (confirmNavigation) {
      navigate("/hr/hr"); // Navigate to HR page
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0D182A",
        width: "100%",
        color: "white",
        padding: "40px 0",
      }}
    >
      <Container maxWidth="lg">
        {/* Footer Grid */}
        <Grid container spacing={4} justifyContent="center">
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" sx={{ fontWeight: 300, mb: 2 }}>
              Iter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Interested in working with us?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              demo@gmail.com
            </Typography>
          </Grid>

          {/* Address */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
              Address
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Graaf Floristraat 22A,
            </Typography>
            <Typography variant="body2" color="text.secondary">
              3021 CH Rotterdam,
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Netherlands
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              P: +99.230 705.54
            </Typography>
          </Grid>

          {/* About Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
              About
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", padding: 0, m: 0 }}>
              {["About Us", "Careers", "Contact Us", "Stories"].map((link) => (
                <Box
                  component="li"
                  key={link}
                  sx={{
                    mb: 1,
                    "& a": {
                      color: "#cbd5e1",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      "&:hover": { color: "white" },
                    },
                  }}
                >
                  <a href="#">{link}</a>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Subscribe Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
              Subscribe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sign up for our latest news & articles. We won't send spam emails.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                size="small"
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid #475569",
                  color: "#cbd5e1",
                  "& input": { color: "#cbd5e1" },
                  "& fieldset": { borderColor: "#475569" },
                  "&:hover fieldset": { borderColor: "#64748b" },
                  width: "100%",
                }}
              />
              <Button
                variant="contained"
                onClick={handleSubscribe} // Routing added
                sx={{
                  backgroundColor: "#2563eb",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  "&:hover": { backgroundColor: "#1d4ed8" },
                }}
              >
                SEND
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            color: "#cbd5e1",
            fontSize: "14px",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            Copyright © 2020 All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
