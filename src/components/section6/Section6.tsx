import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Container,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Section6 = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [activeBox, setActiveBox] = useState(1);

  const workBoxes = [
    { id: 0, title: "", content: "" },
    {
      id: 1,
      title: "Mobile Coin View App",
      content:
        "We carry more than just good coding skills. our experience makes us stand out from other development.",
      italicContent: "Code carry more than just good skills. our experience",
    },
    { id: 2, title: "", content: "" },
    { id: 3, title: "", content: "" },
  ];

  return (
    <Box
      id="section6"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D1B2A",
        color: "white",
        padding: "70px 0 50px",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3.5rem" },
            fontWeight: "500",
            mb: 2,
            textAlign: "center",
          }}
        >
          Check Out Our Work Process
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "1.1rem",
            mb: 8,
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
            color: "#rgba(255,255,255,0.8)",
          }}
        >
          Many of the world's top brands have chosen Integrio to help them
          design and deliver innovative products.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "center",
            mb: 6,
            mx: 2,
          }}
        >
          {workBoxes.map((box) => (
            <Box
              sx={{
                flex: 1,
                aspectRatio: "1/1",
                backgroundColor: activeBox === box.id ? "#0066FF" : "#E0E0E0",
                position: "relative",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: { xs: 3, sm: 4 },
                minHeight: { xs: "300px", sm: "350px", md: "380px" }, 
                color: activeBox === box.id ? "white" : "inherit",
                overflowY: "auto", 
              }}
            >
              {activeBox === box.id && (
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1, 
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "1.5rem", sm: "1.75rem" },
                      fontWeight: "500",
                      wordBreak: "break-word",
                      textAlign: "center",
                    }}
                  >
                    {box.title}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      wordBreak: "break-word",
                      textAlign: "center",
                    }}
                  >
                    {box.content}
                  </Typography>
                  <Box
                    component="hr"
                    sx={{
                      border: "none",
                      borderTop: "1px solid rgba(255,255,255,0.2)",
                      my: 2,
                      width: "100%",
                    }}
                  />
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      wordBreak: "break-word",
                      textAlign: "center",
                    }}
                  >
                    {box.italicContent}
                  </Typography>
                </Box>
              )}

              <IconButton
                onClick={() => setActiveBox(box.id)}
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  color: "white",
                  backgroundColor:
                    activeBox === box.id ? "rgba(255,255,255,0.1)" : "#0066FF",
                  width: "40px",
                  height: "40px",
                  "&:hover": {
                    backgroundColor:
                      activeBox === box.id
                        ? "rgba(255,255,255,0.2)"
                        : "#0052CC",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                {activeBox === box.id ? <RemoveIcon /> : <AddIcon />}
              </IconButton>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0066FF",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#0052CC",
              },
            }}
          >
            <ArrowBackIcon sx={{ color: "white", fontSize: "1.5rem" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0066FF",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#0052CC",
              },
            }}
          >
            <ArrowForwardIcon sx={{ color: "white", fontSize: "1.5rem" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section6;
