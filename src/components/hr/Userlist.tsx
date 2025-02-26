import React, { useState } from "react";
import { Box, Typography, Button, Modal, TextField, MenuItem } from "@mui/material";
import SideNav from "./SideNav"; // Sidebar Component

const UserList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      date_of_birth: "",
      gender: "",
      nationality: "",
      marital_status: "",
      linkedin: "",
      github: "",
      portfolio: "",
    },
    job: {
      position: "",
      department: "",
      start_date: "",
      end_date: "",
      responsibilities: "",
    },
    compensation: { type: "Hourly", rate: "", benefits: "", contract_type: "" },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setStep(1);
  };

  const handleChange = (section: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section as keyof typeof formData], [field]: value },
    }));
  };

  const handleNext = () => {
    const currentSection =
      step === 1 ? "personal" : step === 2 ? "job" : "compensation";
    const isValid = Object.values(formData[currentSection as keyof typeof formData]).every(
      (value) => value.trim() !== ""
    );

    if (isValid) {
      setStep((prev) => prev + 1);
    } else {
      alert("Please fill all fields before proceeding.");
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", JSON.stringify(formData, null, 2));
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <SideNav />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, mt: 7 }}>
          HR Dashboard
        </Typography>

        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Person
        </Button>

        <Modal open={open} onClose={handleClose} aria-labelledby="add-person-modal">
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 450,
              maxHeight: "80vh",
              overflowY: "auto",
              bgcolor: "background.default",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="add-person-modal" variant="h6" sx={{ mb: 2 }}>
              {step === 1
                ? "Personal Details"
                : step === 2
                ? "Job Details"
                : "Compensation and Details"}
            </Typography>

            {/* Personal Details Form */}
            {step === 1 && (
              <>
                <TextField fullWidth label="Full Name" sx={{ mb: 2 }} value={formData.personal.name} onChange={(e) => handleChange("personal", "name", e.target.value)} />
                <TextField fullWidth label="Email" sx={{ mb: 2 }} value={formData.personal.email} onChange={(e) => handleChange("personal", "email", e.target.value)} />
                <TextField fullWidth label="Phone Number" sx={{ mb: 2 }} value={formData.personal.phone} onChange={(e) => handleChange("personal", "phone", e.target.value)} />
                <TextField fullWidth label="Date of Birth (YYYY-MM-DD)" sx={{ mb: 2 }} value={formData.personal.date_of_birth} onChange={(e) => handleChange("personal", "date_of_birth", e.target.value)} />
                <TextField fullWidth label="Gender" sx={{ mb: 2 }} value={formData.personal.gender} onChange={(e) => handleChange("personal", "gender", e.target.value)} />
                <TextField fullWidth label="Nationality" sx={{ mb: 2 }} value={formData.personal.nationality} onChange={(e) => handleChange("personal", "nationality", e.target.value)} />
                <TextField fullWidth label="Marital Status" sx={{ mb: 2 }} value={formData.personal.marital_status} onChange={(e) => handleChange("personal", "marital_status", e.target.value)} />
                <TextField fullWidth label="LinkedIn" sx={{ mb: 2 }} value={formData.personal.linkedin} onChange={(e) => handleChange("personal", "linkedin", e.target.value)} />
                <TextField fullWidth label="GitHub" sx={{ mb: 2 }} value={formData.personal.github} onChange={(e) => handleChange("personal", "github", e.target.value)} />
                <TextField fullWidth label="Portfolio" sx={{ mb: 2 }} value={formData.personal.portfolio} onChange={(e) => handleChange("personal", "portfolio", e.target.value)} />
              </>
            )}

            {/* Job Details Form */}
            {step === 2 && (
              <>
                <TextField fullWidth label="Position" sx={{ mb: 2 }} value={formData.job.position} onChange={(e) => handleChange("job", "position", e.target.value)} />
                <TextField fullWidth label="Department" sx={{ mb: 2 }} value={formData.job.department} onChange={(e) => handleChange("job", "department", e.target.value)} />
                <TextField fullWidth label="Start Date (YYYY-MM-DD)" sx={{ mb: 2 }} value={formData.job.start_date} onChange={(e) => handleChange("job", "start_date", e.target.value)} />
                <TextField fullWidth label="End Date (YYYY-MM-DD or 'Present')" sx={{ mb: 2 }} value={formData.job.end_date} onChange={(e) => handleChange("job", "end_date", e.target.value)} />
                <TextField fullWidth multiline rows={3} label="Responsibilities" sx={{ mb: 2 }} value={formData.job.responsibilities} onChange={(e) => handleChange("job", "responsibilities", e.target.value)} />
              </>
            )}

            {/* Compensation Details Form */}
            {step === 3 && (
              <>
                <TextField fullWidth select label="Salary Type" sx={{ mb: 2 }} value={formData.compensation.type} onChange={(e) => handleChange("compensation", "type", e.target.value)}>
                  <MenuItem value="Hourly">Hourly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                </TextField>
                <TextField fullWidth label="Payment Rate" type="number" sx={{ mb: 2 }} value={formData.compensation.rate} onChange={(e) => handleChange("compensation", "rate", e.target.value)} />
                <TextField fullWidth label="Contract Type" sx={{ mb: 2 }} value={formData.compensation.contract_type} onChange={(e) => handleChange("compensation", "contract_type", e.target.value)} />
                <TextField fullWidth multiline rows={2} label="Benefits" sx={{ mb: 2 }} value={formData.compensation.benefits} onChange={(e) => handleChange("compensation", "benefits", e.target.value)} />
              </>
            )}

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
              {step < 3 ? <Button variant="contained" onClick={handleNext}>Next</Button> : <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>}
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default UserList;