import React from "react";
import { Box,Typography,  Grid,Paper, Avatar, Stack,useTheme,useMediaQuery, } from "@mui/material";


const services = [
  {
    title: "3 Ways of Lying to Yourself About Your Relationship.",
    category: "Office, Meeting. 5 min",
    description: "",
    date: "March 5, 2020",
    author: "Admin",
  },
  {
    title: "3 Ways of Lying to Yourself About Your Relationship.",
    category: "Office, Meeting. 5 min",
    description:
      "We carry more than just good coding skills. Our experience makes us stand out from other development.",
    date: "March 5, 2020",
    author: "Admin",
    active: true,
  },
  {
    title: "3 Ways of Lying to Yourself About Your Relationship.",
    category: "Office, Meeting. 5 min",
    description: "",
    date: "March 5, 2020",
    author: "Admin",
  },
];

const Section9 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="section9"
      sx={{
        minHeight: {
          xs: 'auto',
          sm: 'auto',
          md: '100vh'
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D1B2A",
        color: "white",
        padding: {
          xs: '40px 16px',
          sm: '50px 24px',
          md: '70px 32px',
          lg: '70px 40px'
        },
        textAlign: "center",
      }}
    >
      {/* Header */}
      <Typography 
        variant={isMobile ? "h5" : isTablet ? "h4" : "h3"} 
        fontWeight="100"
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '2.5rem',
            lg: '3rem'
          }
        }}
      >
        We Offer a Wide Variety
      </Typography>
      <Typography 
        variant={isMobile ? "h6" : isTablet ? "h5" : "h4"} 
        color="white"
        sx={{
          fontSize: {
            xs: '1.25rem',
            sm: '1.5rem',
            md: '2rem',
            lg: '2.5rem'
          },
          marginTop: { xs: 1, sm: 2 }
        }}
      >
        of IT Services
      </Typography>

      {/* Services Grid */}
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 3 }}
        justifyContent="center"
        sx={{ 
          marginTop: { xs: 2, sm: 3, md: 4 },
          maxWidth: "1200px",
          padding: { xs: '0 8px', sm: '0 16px', md: '0 24px' }
        }}
      >
        {services.map((service, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Paper
              sx={{
                padding: {
                  xs: '16px',
                  sm: '20px',
                  md: '24px'
                },
                backgroundColor: service.active ? "#0052FF" : "#1B2A41",
                color: service.active ? "white" : "inherit",
                borderRadius: "0px",
                width: "100%",
                maxWidth: {
                  xs: '100%',
                  sm: '280px',
                  md: '280px'
                },
                minWidth: {
                  xs: '100%',
                  sm: '250px'
                },
                aspectRatio: "1 / 1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center", 
                textAlign: "center", 
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    lineHeight: "1.4",
                    fontSize: {
                      xs: '1rem',
                      sm: '1.1rem',
                      md: '1.25rem'
                    }
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="gray"
                  sx={{
                    marginTop: "5px",
                    fontSize: {
                      xs: '0.875rem',
                      sm: '0.875rem',
                      md: '0.9rem'
                    }
                  }}
                >
                  {service.category}
                </Typography>
                {service.active && (
                  <Typography
                    variant="body2"
                    sx={{
                      marginTop: "10px",
                      fontSize: {
                        xs: '0.875rem',
                        sm: '0.875rem',
                        md: '0.9rem'
                      }
                    }}
                  >
                    {service.description}
                  </Typography>
                )}
              </Box>

              {/* Author Section */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  marginTop: { xs: 2, sm: 2, md: 3 },
                  justifyContent: "center", 
                  width: '100%'
                }}
              >
                <Avatar 
                  sx={{ 
                    bgcolor: "white", 
                    width: { xs: 24, sm: 28, md: 30 }, 
                    height: { xs: 24, sm: 28, md: 30 } 
                  }} 
                />
                <Box>
                  <Typography 
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: '0.8rem',
                        sm: '0.875rem',
                        md: '0.9rem'
                      }
                    }}
                  >
                    Posted by {service.author}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    color="gray"
                    sx={{
                      fontSize: {
                        xs: '0.7rem',
                        sm: '0.75rem',
                        md: '0.8rem'
                      }
                    }}
                  >
                    {service.date}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section9;