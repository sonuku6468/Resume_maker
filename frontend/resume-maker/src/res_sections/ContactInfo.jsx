import React from 'react';
import { TextField, Button, Box, Container, Typography, List, ListItem } from '@mui/material';

const ContactInfo = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom> Resume Builder</Typography>
        <Box sx={{ display: 'flex' }}>
          <List component="nav" sx={{ width: '20%' }}>
            <ListItem button>
              <Typography variant="body1">Personal Information</Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1">Education</Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1">Experience</Typography>
            </ListItem>
            <ListItem button selected>
              <Typography variant="body1">Contact Information</Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1">Award/Certification</Typography>
            </ListItem>
          </List>
          <Box sx={{ flex: 1, ml: 3 }}>
            <Typography variant="h5" gutterBottom>Contact Information</Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Email" type="email" fullWidth />
              <TextField label="Phone Number" type="tel" fullWidth />
              <TextField label="Address" fullWidth />
              <TextField label="City" fullWidth />
              <TextField label="State/Province" fullWidth />
              <TextField label="Postal Code" fullWidth />
              <TextField label="Country" fullWidth />
              <Button variant="contained" color="primary">Next session</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactInfo;
