import React from 'react';
import { Typography, Box } from '@mui/material';

const ErrorPage = ({ error }) => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography variant="h5" color="error">
      Something went wrong!
    </Typography>
    <Typography>{error || 'Please try again later.'}</Typography>
  </Box>
);

export default ErrorPage;