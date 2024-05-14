import { Typography, Container, Paper } from '@mui/material';

function About() {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          About Todo App
        </Typography>
        <Typography variant="body1">
          Todo App is a simple application built with React and Material UI. It allows users to create, 
          update, delete, and manage their todos effectively. With an intuitive user interface and 
          easy-to-use features, Todo App helps users stay organized and productive.
        </Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          This application was created as a learning project to demonstrate the integration of React 
          with Material UI and to showcase best practices in building modern web applications.
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;
