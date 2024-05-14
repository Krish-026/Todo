import React from 'react';
import { Typography, Container, Paper, List, ListItem, ListItemText } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary="contact@example.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary="+1234567890" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary="1234 Main Street, City, Country" />
          </ListItem>
        </List>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Feel free to contact us for any inquiries or support. We're here to help you!
        </Typography>
      </Paper>
    </Container>
  );
}

export default Contact;
