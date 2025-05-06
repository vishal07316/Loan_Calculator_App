import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/" style={{ color: 'inherit', marginRight: 20, textDecoration: 'none' }}>
              EMI Calculator
            </Link>
            <Link to="/converter" style={{ color: 'inherit', marginRight: 20, textDecoration: 'none' }}>
              Currency Converter
            </Link>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
              About
            </Link>
          </Box>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button component={Link} to="/" onClick={() => setOpen(false)}>
            <ListItemText primary="EMI Calculator" />
          </ListItem>
          <ListItem button component={Link} to="/converter" onClick={() => setOpen(false)}>
            <ListItemText primary="Currency Converter" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={() => setOpen(false)}>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MobileNav;