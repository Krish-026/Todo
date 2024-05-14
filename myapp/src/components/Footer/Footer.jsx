import { AppBar, Toolbar, Typography } from '@mui/material';
import './Footer.scss';

function Footer() {
  return (
    <AppBar position="static" className="footer">
      <Toolbar className="toolbar">
        <Typography variant="body1" className="text">
          &copy; 2024 Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
