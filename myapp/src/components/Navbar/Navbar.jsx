import React, { useState } from 'react';
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="navbar__title">
            Todo App
          </Typography>
          <div className="navbar__links">
            <Button color='inherit' component={Link} to="/todo">Todo</Button>
            <Button color='inherit' component={Link} to="/about">About</Button>
            <Button color='inherit' component={Link} to="/contact">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={toggleDrawer} component={Link} to="/">
            <ListItemText primary="Todo" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbar;
