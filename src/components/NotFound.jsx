import React from 'react';
import { Typography, Box } from '@mui/material';

const NotFound = () => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography variant="h5">404 - Page Not Found</Typography>
    <Typography>The page you are looking for does not exist.</Typography>
  </Box>
);

export default NotFound;