import React, { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import SideNav from "./SideNav"; // Import Sidebar component

const HR: React.FC = () => {
  // State for controlling the modal
  const [open, setOpen] = useState(false);

  // Function to handle modal open
  const handleOpen = () => setOpen(true);

  // Function to handle modal close
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <SideNav />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          HR Dashboard
        </Typography>

        {/* Add Resume Button */}
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Resume
        </Button>

        {/* Modal for adding a resume */}
        <Modal open={open} onClose={handleClose} aria-labelledby="add-resume-modal">
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="add-resume-modal" variant="h6" component="h2">
              Add New Resume
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Placeholder anay
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 2 }} variant="outlined">
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default HR;
