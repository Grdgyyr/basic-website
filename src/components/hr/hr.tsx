import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import SideNav from "./SideNav";

const HR: React.FC = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 2,
          p: 3,
          mt: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 400, 
            height: 400, 
            p: 4,
            borderRadius: '1.5rem',
            bgcolor: "#0D1B2A",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Typography variant="h4" gutterBottom color="primary">
            Welcome to HR Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.primary" paragraph>
            Manage your human resources efficiently with our comprehensive tools.
          </Typography>
          <Typography paragraph color="text.primary">
            This dashboard provides you with a complete overview of your organization's HR metrics
            and employee records. Use the navigation menu for access to different modules.
          </Typography>
          <Typography variant="body2" color="text.primary">
            Last updated: February 25, 2025
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default HR;