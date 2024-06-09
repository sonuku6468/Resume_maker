import React from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Box, Container, Typography, List, ListItem } from '@mui/material';

const EducationPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom> Resume Builder</Typography>
        <Box sx={{ display: 'flex' }}>
          <List component="nav" sx={{ width: '20%' }}>
            <ListItem button>
              <Typography variant="body1">Personal Information</Typography>
            </ListItem>
            <ListItem button selected>
              <Typography variant="body1">Education</Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1">Experience</Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1">Contact Information</Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1">Award/Certification</Typography>
            </ListItem>
          </List>
          <Box sx={{ flex: 1, ml: 3 }}>
            <Typography variant="h5" gutterBottom>Education</Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Institution Name" fullWidth />
              <TextField label="Course" fullWidth />
              <TextField label="Country" fullWidth />
              <TextField label="State" fullWidth />
              <TextField label="Start" type="month" fullWidth />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TextField label="Finish" type="month" fullWidth />
                <FormControlLabel control={<Checkbox />} label="Currently study here" />
              </Box>
              <Button variant="contained" color="primary">Next session</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default EducationPage;