import React, { useState } from 'react';
import { Box, Typography, Button, Modal, TextField, MenuItem, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import { usersData } from './userData';

const UserList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState(usersData);
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [editOpen, setEditOpen] = useState(false);

  const [formData, setFormData] = useState({
    personal: {
      name: '',
      email: '',
      phone: '',
      date_of_birth: '',
      gender: '',
      nationality: '',
      marital_status: '',
      linkedin: '',
      github: '',
      portfolio: '',
    },
    job: {
      position: '',
      department: '',
      start_date: '',
      end_date: '',
      responsibilities: '',
    },
    compensation: { type: 'Hourly', rate: '', benefits: '', contract_type: '' },
    picture: '', // New field for storing uploaded image
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setStep(1);
    setFormData({
      personal: {
        name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        gender: '',
        nationality: '',
        marital_status: '',
        linkedin: '',
        github: '',
        portfolio: '',
      },
      job: {
        position: '',
        department: '',
        start_date: '',
        end_date: '',
        responsibilities: '',
      },
      compensation: { type: 'Hourly', rate: '', benefits: '', contract_type: '' },
      picture: '',
    });
  };

  const handleChange = (section: keyof typeof formData, field: string, value: string) => {
    if (section === 'picture') {
      setFormData((prev) => ({
        ...prev,
        picture: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...(prev[section] as Record<string, string>),
          [field]: value,
        },
      }));
    }
  };

  const handleView = (id: number) => {
    const user = data.find((user) => user.id === id);
    if (user) {
      setSelectedUser(user);
      setViewOpen(true);
    }
  };

  const handleNext = () => {
    const currentSection = step === 1 ? 'personal' : step === 2 ? 'job' : 'compensation';
    const isValid = Object.values(formData[currentSection as keyof typeof formData]).every(
      (value) => value.trim() !== '',
    );
    if (isValid) {
      setStep((prev) => prev + 1);
    } else {
      alert('Please fill all fields before proceeding.');
    }
  };

  const handleEdit = (id: number) => {
    const user = data.find((user) => user.id === id);
    if (user) {
      setSelectedUser(user);
      setEditOpen(true);
    }
  };

  const handleSubmit = () => {
    const newId = data.length > 0 ? Math.max(...data.map((user) => user.id)) + 1 : 1;

    const newUser = {
      id: newId,
      picture: formData.picture || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541', // Default image if none uploaded
      name: formData.personal.name,
      email: formData.personal.email,
      phone: formData.personal.phone,
      date_of_birth: formData.personal.date_of_birth,
      gender: formData.personal.gender,
      nationality: formData.personal.nationality,
      marital_status: formData.personal.marital_status,
      linkedin: formData.personal.linkedin,
      github: formData.personal.github,
      portfolio: formData.personal.portfolio,
      position: formData.job.position,
      department: formData.job.department,
      start_date: formData.job.start_date,
      end_date: formData.job.end_date,
      responsibilities: formData.job.responsibilities,
      salary_type: formData.compensation.type,
      rate: formData.compensation.rate,
      benefits: formData.compensation.benefits,
      contract_type: formData.compensation.contract_type,
    };

    setData([...data, newUser]);
    console.log('New User Added:', JSON.stringify(newUser, null, 2));
    handleClose();
  };

  const handleDelete = (id: number) => {
    setData(data.filter((user) => user.id !== id));
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          picture: reader.result as string, // Convert image to Base64 URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpdate = () => {
    if (!selectedUser) return;

    const updatedData = data.map((user) => (user.id === selectedUser.id ? selectedUser : user));

    setData(updatedData);
    console.log('Updated User:', JSON.stringify(selectedUser, null, 2));
    setEditOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },

    {
      field: 'picture',
      headerName: 'Picture',
      width: 120,
      renderCell: (params: any) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', paddingTop: 0.6 }}>
          <img
            src={params.value}
            alt="Profile"
            style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
          />
        </Box>
      ),
    },

    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'position', headerName: 'Position', width: 150 },
    { field: 'salary_type', headerName: 'Salary Type', width: 120 },

    {
      field: 'action',
      headerName: 'Action',
      width: 220,
      renderCell: (params: any) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop:1 }}>
          <Button variant="contained" size="small" color="success" onClick={() => handleEdit(params.row.id)}>
            Edit
          </Button>
          <Button variant="contained" color="info" size="small" onClick={() => handleView(params.row.id)}>
            View
          </Button>
          <DeleteOutline sx={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(params.row.id)} />
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideNav />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, mt: 7 }}>
          HR Dashboard
        </Typography>

        {/* User Data Table */}
        <Paper sx={{ height: 400, width: '100%', mb: 3 }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>

        {/* Add Person Button */}
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Person
        </Button>

        {/* Modal for Adding New User */}
        <Modal open={open} onClose={handleClose} aria-labelledby="add-person-modal">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 450,
              maxHeight: '80vh',
              overflowY: 'auto',
              bgcolor: 'background.default',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="add-person-modal" variant="h6" sx={{ mb: 2 }}>
              {step === 1 ? 'Personal Details' : step === 2 ? 'Job Details' : 'Compensation and Details'}
            </Typography>

            {/* Personal Details Form */}
            {step === 1 && (
              <>
                <TextField
                  fullWidth
                  label="Full Name"
                  sx={{ mb: 2 }}
                  value={formData.personal.name}
                  onChange={(e) => handleChange('personal', 'name', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Email"
                  sx={{ mb: 2 }}
                  value={formData.personal.email}
                  onChange={(e) => handleChange('personal', 'email', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  sx={{ mb: 2 }}
                  value={formData.personal.phone}
                  onChange={(e) => handleChange('personal', 'phone', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Date of Birth (YYYY-MM-DD)"
                  sx={{ mb: 2 }}
                  value={formData.personal.date_of_birth}
                  onChange={(e) => handleChange('personal', 'date_of_birth', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Gender"
                  sx={{ mb: 2 }}
                  value={formData.personal.gender}
                  onChange={(e) => handleChange('personal', 'gender', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Nationality"
                  sx={{ mb: 2 }}
                  value={formData.personal.nationality}
                  onChange={(e) => handleChange('personal', 'nationality', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Marital Status"
                  sx={{ mb: 2 }}
                  value={formData.personal.marital_status}
                  onChange={(e) => handleChange('personal', 'marital_status', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="LinkedIn"
                  sx={{ mb: 2 }}
                  value={formData.personal.linkedin}
                  onChange={(e) => handleChange('personal', 'linkedin', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="GitHub"
                  sx={{ mb: 2 }}
                  value={formData.personal.github}
                  onChange={(e) => handleChange('personal', 'github', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Portfolio"
                  sx={{ mb: 2 }}
                  value={formData.personal.portfolio}
                  onChange={(e) => handleChange('personal', 'portfolio', e.target.value)}
                />
              </>
            )}

            {/* Job Details Form */}
            {step === 2 && (
              <>
                <TextField
                  fullWidth
                  label="Position"
                  sx={{ mb: 2 }}
                  value={formData.job.position}
                  onChange={(e) => handleChange('job', 'position', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Department"
                  sx={{ mb: 2 }}
                  value={formData.job.department}
                  onChange={(e) => handleChange('job', 'department', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Start Date (YYYY-MM-DD)"
                  sx={{ mb: 2 }}
                  value={formData.job.start_date}
                  onChange={(e) => handleChange('job', 'start_date', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="End Date (YYYY-MM-DD or 'Present')"
                  sx={{ mb: 2 }}
                  value={formData.job.end_date}
                  onChange={(e) => handleChange('job', 'end_date', e.target.value)}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Responsibilities"
                  sx={{ mb: 2 }}
                  value={formData.job.responsibilities}
                  onChange={(e) => handleChange('job', 'responsibilities', e.target.value)}
                />
              </>
            )}

            {/* Compensation Details Form */}
            {step === 3 && (
              <>
                <TextField
                  fullWidth
                  select
                  label="Salary Type"
                  sx={{ mb: 2 }}
                  value={formData.compensation.type}
                  onChange={(e) => handleChange('compensation', 'type', e.target.value)}
                >
                  <MenuItem value="Hourly">Hourly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  label="Payment Rate"
                  type="number"
                  sx={{ mb: 2 }}
                  value={formData.compensation.rate}
                  onChange={(e) => handleChange('compensation', 'rate', e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Contract Type"
                  sx={{ mb: 2 }}
                  value={formData.compensation.contract_type}
                  onChange={(e) => handleChange('compensation', 'contract_type', e.target.value)}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Benefits"
                  sx={{ mb: 2 }}
                  value={formData.compensation.benefits}
                  onChange={(e) => handleChange('compensation', 'benefits', e.target.value)}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Upload Picture
                  </Typography>

                  {/* Styled Upload Button */}
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ bgcolor: 'primary.main', color: 'white', textTransform: 'none', cursor: 'pointer' }}
                  >
                    Choose File
                    <input type="file" accept="image/*" hidden onChange={handleFileChange} />
                  </Button>
                </Box>

                {/* Centered Image Preview */}
                {formData.picture && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                    <img
                      src={formData.picture}
                      alt="Picture Preview"
                      style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginTop: 10 }}
                    />
                    <Typography variant="caption" sx={{ mt: 1 }}>
                      Profile Picture Preview
                    </Typography>
                  </Box>
                )}
              </>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              {step < 3 ? (
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Modal>

        <Modal open={viewOpen} onClose={() => setViewOpen(false)} aria-labelledby="view-user-modal">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 450,
              maxHeight: '80vh',
              overflowY: 'auto',
              bgcolor: 'background.default',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="view-user-modal" variant="h6" sx={{ mb: 2 }}>
              View User Details
            </Typography>

            {selectedUser && (
              <>
                {/* Personal Details */}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Personal Details
                </Typography>
                <TextField fullWidth label="Full Name" value={selectedUser.name} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Email" value={selectedUser.email} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Phone Number" value={selectedUser.phone} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Date of Birth" value={selectedUser.date_of_birth} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Gender" value={selectedUser.gender} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Nationality" value={selectedUser.nationality} disabled sx={{ mb: 2 }} />
                <TextField
                  fullWidth
                  label="Marital Status"
                  value={selectedUser.marital_status}
                  disabled
                  sx={{ mb: 2 }}
                />
                <TextField fullWidth label="LinkedIn" value={selectedUser.linkedin} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="GitHub" value={selectedUser.github} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Portfolio" value={selectedUser.portfolio} disabled sx={{ mb: 2 }} />

                {/* Job Details */}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Job Details
                </Typography>
                <TextField fullWidth label="Position" value={selectedUser.position} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Department" value={selectedUser.department} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Start Date" value={selectedUser.start_date} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="End Date" value={selectedUser.end_date} disabled sx={{ mb: 2 }} />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Responsibilities"
                  value={selectedUser.responsibilities}
                  disabled
                  sx={{ mb: 2 }}
                />

                {/* Compensation Details */}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Compensation Details
                </Typography>
                <TextField fullWidth label="Salary Type" value={selectedUser.salary_type} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Payment Rate" value={selectedUser.rate} disabled sx={{ mb: 2 }} />
                <TextField fullWidth label="Contract Type" value={selectedUser.contract_type} disabled sx={{ mb: 2 }} />
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Benefits"
                  value={selectedUser.benefits}
                  disabled
                  sx={{ mb: 2 }}
                />

                {/* Profile Picture */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Profile Picture
                  </Typography>
                  <img
                    src={selectedUser.picture}
                    alt="Profile"
                    style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginTop: 10 }}
                  />
                </Box>

                {/* Close Button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                  <Button variant="contained" color="primary" onClick={() => setViewOpen(false)}>
                    Close
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Modal>
        <Modal open={editOpen} onClose={() => setEditOpen(false)} aria-labelledby="edit-user-modal">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 450,
              maxHeight: '80vh',
              overflowY: 'auto',
              bgcolor: 'background.default',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="edit-user-modal" variant="h6" sx={{ mb: 2 }}>
              Edit User Details
            </Typography>

            {selectedUser && (
              <>
                {/* Personal Details */}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Personal Details
                </Typography>
                <TextField
                  fullWidth
                  label="Full Name"
                  sx={{ mb: 2 }}
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Email"
                  sx={{ mb: 2 }}
                  value={selectedUser.email}
                  onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  sx={{ mb: 2 }}
                  value={selectedUser.phone}
                  onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Date of Birth"
                  sx={{ mb: 2 }}
                  value={selectedUser.date_of_birth}
                  onChange={(e) => setSelectedUser({ ...selectedUser, date_of_birth: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Gender"
                  sx={{ mb: 2 }}
                  value={selectedUser.gender}
                  onChange={(e) => setSelectedUser({ ...selectedUser, gender: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Nationality"
                  sx={{ mb: 2 }}
                  value={selectedUser.nationality}
                  onChange={(e) => setSelectedUser({ ...selectedUser, nationality: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Marital Status"
                  sx={{ mb: 2 }}
                  value={selectedUser.marital_status}
                  onChange={(e) => setSelectedUser({ ...selectedUser, marital_status: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="LinkedIn"
                  sx={{ mb: 2 }}
                  value={selectedUser.linkedin}
                  onChange={(e) => setSelectedUser({ ...selectedUser, linkedin: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="GitHub"
                  sx={{ mb: 2 }}
                  value={selectedUser.github}
                  onChange={(e) => setSelectedUser({ ...selectedUser, github: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Portfolio"
                  sx={{ mb: 2 }}
                  value={selectedUser.portfolio}
                  onChange={(e) => setSelectedUser({ ...selectedUser, portfolio: e.target.value })}
                />

                {/* Job Details */}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Job Details
                </Typography>
                <TextField
                  fullWidth
                  label="Position"
                  sx={{ mb: 2 }}
                  value={selectedUser.position}
                  onChange={(e) => setSelectedUser({ ...selectedUser, position: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Department"
                  sx={{ mb: 2 }}
                  value={selectedUser.department}
                  onChange={(e) => setSelectedUser({ ...selectedUser, department: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Start Date"
                  sx={{ mb: 2 }}
                  value={selectedUser.start_date}
                  onChange={(e) => setSelectedUser({ ...selectedUser, start_date: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="End Date"
                  sx={{ mb: 2 }}
                  value={selectedUser.end_date}
                  onChange={(e) => setSelectedUser({ ...selectedUser, end_date: e.target.value })}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Responsibilities"
                  sx={{ mb: 2 }}
                  value={selectedUser.responsibilities}
                  onChange={(e) => setSelectedUser({ ...selectedUser, responsibilities: e.target.value })}
                />

                {/* Compensation Details */}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Compensation Details
                </Typography>
                <TextField
                  fullWidth
                  select
                  label="Salary Type"
                  sx={{ mb: 2 }}
                  value={selectedUser.salary_type}
                  onChange={(e) => setSelectedUser({ ...selectedUser, salary_type: e.target.value })}
                >
                  <MenuItem value="Hourly">Hourly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  label="Payment Rate"
                  sx={{ mb: 2 }}
                  value={selectedUser.rate}
                  onChange={(e) => setSelectedUser({ ...selectedUser, rate: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Contract Type"
                  sx={{ mb: 2 }}
                  value={selectedUser.contract_type}
                  onChange={(e) => setSelectedUser({ ...selectedUser, contract_type: e.target.value })}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Benefits"
                  sx={{ mb: 2 }}
                  value={selectedUser.benefits}
                  onChange={(e) => setSelectedUser({ ...selectedUser, benefits: e.target.value })}
                />

                {/* Profile Picture Upload */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Profile Picture
                  </Typography>
                  <img
                    src={selectedUser.picture}
                    alt="Profile"
                    style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginTop: 10 }}
                  />
                  <Button variant="contained" component="label" sx={{ mt: 2 }}>
                    Change Picture
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setSelectedUser({ ...selectedUser, picture: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </Button>
                </Box>

                {/* Update Button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                  <Button variant="contained" color="success" onClick={handleUpdate}>
                    Update
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default UserList;
